import { defineCloudflareConfig } from "@opennextjs/cloudflare";
import kvIncrementalCache from "@opennextjs/cloudflare/overrides/incremental-cache/kv-incremental-cache";

// Without this, OpenNext falls back to its "dummy" incremental cache, which
// never actually caches anything: every request (even to statically
// prerendered pages) re-runs full SSR + data fetching inside the Worker.
export default defineCloudflareConfig({
  incrementalCache: kvIncrementalCache,
});