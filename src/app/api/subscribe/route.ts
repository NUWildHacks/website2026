import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    const normalized = (email ?? '').trim().toLowerCase();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalized)) {
      return NextResponse.json({ error: 'Invalid email' }, { status: 400 });
    }

    const { data: existing, error: lookupErr } = await supabase
      .from('newsletter')
      .select('id')
      .eq('email', normalized)
      .maybeSingle();

    if (lookupErr) {
      return NextResponse.json({ error: lookupErr.message }, { status: 500 });
    }

    if (existing) {
      return NextResponse.json({ error: 'already_subscribed' }, { status: 409 });
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { data, error } = await supabase
    .from('newsletter')
    .insert([
        { email: normalized },
    ])

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    return NextResponse.json({ error: 'Bad request: ' + err.message }, { status: 400 });
  }
}
