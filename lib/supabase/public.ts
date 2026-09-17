import { createClient as createSupabaseClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

/**
 * Server-side client for public, anonymous reads (CMS content, product
 * listings, etc). Unlike `lib/supabase/server.ts`, this does NOT touch
 * `cookies()`, so routes/data using it can be statically rendered, ISR'd,
 * and wrapped in `unstable_cache` instead of being forced dynamic on every
 * request.
 */
export function createPublicClient() {
  if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error("Missing Supabase environment variables.");
  }

  return createSupabaseClient(supabaseUrl, supabaseAnonKey, {
    auth: { persistSession: false },
  });
}
