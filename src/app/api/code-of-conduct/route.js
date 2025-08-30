// Next.js (app router) /app/api/coc/route.ts
import { NextResponse } from "next/server";

const RAW_URL =
  "https://raw.githubusercontent.com/MLH/mlh-policies/main/code-of-conduct.md";

// simple in-memory cache (swap for Redis/KV in prod)
let cached = { etag: "", body: "" };

export async function GET() {
  const headers = {};
  if (cached.etag) headers["If-None-Match"] = cached.etag;

  const res = await fetch(RAW_URL, { headers, cache: "no-store" });

  if (res.status === 304) {
    return new NextResponse(cached.body, {
      headers: {
        "Content-Type": "text/markdown; charset=utf-8",
        "Cache-Control": "public, max-age=60", // let browsers cache briefly
      },
    });
  }

  if (!res.ok) {
    // fall back to cached body on transient errors
    if (cached.body) {
      return new NextResponse(cached.body, {
        headers: { "Content-Type": "text/markdown; charset=utf-8" },
      });
    }
    return new NextResponse("Failed to fetch content.", { status: 502 });
  }

  const body = await res.text();
  const etag = res.headers.get("etag") || "";
  cached = { etag, body };

  return new NextResponse(body, {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "Cache-Control": "public, max-age=60",
    },
  });
}
