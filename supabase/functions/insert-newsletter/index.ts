/// <reference lib="deno.ns" />
// Setup type definitions for built-in Supabase Runtime APIs
import "jsr:@supabase/functions-js/edge-runtime.d.ts";

import { createClient } from 'jsr:@supabase/supabase-js@2';
import { corsHeaders } from '../_shared/cors.ts';

Deno.serve(async (req: Request)=>{
  if (req.method === 'OPTIONS') {
    return new Response('ok', {
      headers: corsHeaders
    });
  }
  try {
    const supabaseClient = createClient(
      // Supabase API URL - env var exported by default.
      Deno.env.get('SUPABASE_URL') ?? '',
      // Supabase API ANON KEY - env var exported by default.
      Deno.env.get('SUPABASE_ANON_KEY') ?? '',
      // Create client with Auth context of the user that called the function.
      // This way your row-level-security (RLS) policies are applied.
      {
        global: {
          headers: { Authorization: req.headers.get('Authorization')! },
        },
      }
    )

    const token = req.headers.get('Authorization')?.replace('Bearer ', '')

    const {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      data: { user: _user },
    } = await supabaseClient.auth.getUser(token)

    // normalise email 
    const { email } = await req.json();
    const normalized = (email ?? '').trim().toLowerCase();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalized)) {
      return new Response(JSON.stringify({
        message: 'Invalid email'
      }), {
        headers: {
          ...corsHeaders,
          'Content-Type': 'application/json'
        },
        status: 400
      });
    }
    // check if email already exists in db
    const { data: existing, error: lookupErr } = await supabaseClient.from('newsletter').select('id').eq('email', normalized).maybeSingle();
    if (lookupErr) {
      return new Response(JSON.stringify({
        message: lookupErr.message
      }), {
        headers: {
          ...corsHeaders,
          'Content-Type': 'application/json'
        },
        status: 500
      });
    }
    if (existing) {
      return new Response(JSON.stringify({
        message: 'already_subscribed'
      }), {
        headers: {
          ...corsHeaders,
          'Content-Type': 'application/json'
        },
        status: 409
      });
    }
    // TODO: Change the table_name to your table
    const { data, error } = await supabaseClient.from('newsletter').insert([
      {
        email: normalized
      }
    ]);
    if (error) {
      throw error;
    }
    return new Response(JSON.stringify({
      data
    }), {
      headers: {
        ...corsHeaders,
        'Content-Type': 'application/json'
      },
      status: 200
    }); 
  } catch (err) {
    return new Response(JSON.stringify({
      message: err instanceof Error ? err.message : 'Unknown error'
    }), {
      headers: {
        ...corsHeaders,
        'Content-Type': 'application/json'
      },
      status: 500
    });
  }
});
