import { createClient } from "@/utils/supabase/server";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();
    
    if (!email) {
        return new Response(JSON.stringify({ error: "Email is required" }), { status: 400 });
    }

    const supabase = await createClient();
    const normalizedEmail = email.trim().toLowerCase();

    // Check if email already exists
    const { data: existing, error: lookupError } = await supabase
      .from("newsletter")
      .select("id")
      .eq("email", normalizedEmail)
      .maybeSingle();

    if (lookupError) {
      throw lookupError;
    }

    if (existing) {
      return new Response(JSON.stringify({ error: "Email already subscribed" }), { status: 409 });
    }

    // Insert new email
    const { error: insertError } = await supabase
      .from("newsletter")
      .insert([{ email: normalizedEmail }]);

    if (insertError) {
      throw insertError;
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Newsletter subscription error:", error);
    return new Response(JSON.stringify({ error: "Failed to subscribe, " + error }), { status: 500 });
  }
}