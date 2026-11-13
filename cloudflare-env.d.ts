// Cloudflare Worker bindings for this app, typed for
// `getCloudflareContext()` from @opennextjs/cloudflare.
//
// This augments the global `CloudflareEnv` interface the adapter
// declares. The D1 database is the only binding; OPS_* are plain
// string vars set in wrangler (production) or .dev.vars (local preview).
// No real values live here.
import type { D1Database } from "@cloudflare/workers-types";

declare global {
  interface CloudflareEnv {
    DB: D1Database;
    OPS_USER?: string;
    OPS_PASS?: string;
    OPS_SYNC_SECRET?: string;
  }
}

export {};
