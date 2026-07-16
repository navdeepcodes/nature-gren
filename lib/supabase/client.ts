import { createBrowserClient } from "@supabase/ssr";

let client: ReturnType<typeof createBrowserClient> | null = null;

export function createClient() {
  if (!client) {
    console.log(
      "Supabase URL:",
      process.env.NEXT_PUBLIC_SUPABASE_URL
    );

    console.log(
      "Anon Key Loaded:",
      !!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
    );

    client = createBrowserClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    );
  }

  return client;
}