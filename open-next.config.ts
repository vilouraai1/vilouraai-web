// OpenNext Cloudflare adapter config.
// Default settings: static assets served by the Worker, no R2/KV cache
// overrides (the site has no ISR — pages are static or force-dynamic).
import { defineCloudflareConfig } from "@opennextjs/cloudflare";

export default defineCloudflareConfig();
