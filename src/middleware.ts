import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/**
 * Password gate for the private ops dashboard (/ops) and its action API.
 * Uses HTTP Basic Auth against OPS_USER / OPS_PASS env vars. Fails closed:
 * if the vars are not configured, everything under /ops returns 503.
 * The worker sync endpoint (/api/ops/sync) is exempt here and checks its
 * own bearer token (OPS_SYNC_SECRET) in the route handler.
 */
export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  if (pathname === "/api/ops/sync") {
    return NextResponse.next();
  }

  const user = process.env.OPS_USER;
  const pass = process.env.OPS_PASS;

  if (!user || !pass) {
    return new NextResponse("Ops dashboard is not configured yet.", {
      status: 503,
    });
  }

  const auth = req.headers.get("authorization");
  if (auth?.startsWith("Basic ")) {
    const decoded = Buffer.from(auth.slice(6), "base64").toString("utf-8");
    const sep = decoded.indexOf(":");
    if (sep > 0) {
      const u = decoded.slice(0, sep);
      const p = decoded.slice(sep + 1);
      // Constant-time-ish comparison to avoid trivial timing leaks.
      const ok =
        u.length === user.length &&
        p.length === pass.length &&
        [...u].every((c, i) => c === user[i]) &&
        [...p].every((c, i) => c === pass[i]);
      if (ok) return NextResponse.next();
    }
  }

  return new NextResponse("Authentication required.", {
    status: 401,
    headers: { "WWW-Authenticate": 'Basic realm="VilouraAI Ops"' },
  });
}

export const config = {
  matcher: ["/ops/:path*", "/api/ops/:path*"],
};
