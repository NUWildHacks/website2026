import { NextResponse } from "next/server";
import {
  FunctionsHttpError,
  FunctionsRelayError,
  FunctionsFetchError,
} from "@supabase/supabase-js";
import { createClient as createServerSupabase } from "@/utils/supabase/server";

export async function POST(request: Request) {
  try {
    const body = await request.json().catch(() => ({}));
    const email = typeof body?.email === "string" ? body.email.trim() : "";

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address." },
        { status: 400 }
      );
    }

    const supabase = await createServerSupabase();

    const { data } = await supabase.functions.invoke("insert-newsletter", {
      body: { email },
    });

    return NextResponse.json(
      { success: true, data },
      { status: 200 }
    );
  } catch (error: unknown) {
    if (error instanceof FunctionsHttpError) {
      try {
        const context = await error.context.json();
        return NextResponse.json(
          { error: context?.message ?? "Function HTTP error" },
          { status: error.context.status ?? 400 }
        );
      } catch {
        return NextResponse.json(
          { error: "Function HTTP error" },
          { status: error.context.status ?? 400 }
        );
      }
    }
    if (error instanceof FunctionsRelayError) {
      return NextResponse.json(
        { error: error.message || "Function relay error" },
        { status: 502 }
      );
    }
    if (error instanceof FunctionsFetchError) {
      return NextResponse.json(
        { error: error.message || "Function fetch error" },
        { status: 503 }
      );
    }
    return NextResponse.json(
      { error: "Unexpected server error" },
      { status: 500 }
    );
  }
}
