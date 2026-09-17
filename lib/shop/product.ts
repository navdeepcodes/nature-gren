import { unstable_cache } from "next/cache";

import { createPublicClient } from "@/lib/supabase/public";

async function fetchProductBySlug(slug: string) {
  const supabase = createPublicClient();

  const { data, error } = await supabase
    .from("products")
    .select(
      `
      *,
      category:categories(
        id,
        name
      )
      `
    )
    .eq("slug", slug)
    .maybeSingle();

  if (error) throw error;

  return data;
}

/**
 * Shared, cached product-by-slug lookup used by both the product page and
 * its `generateMetadata`, so a single product view only queries Supabase
 * once instead of twice.
 */
export const getProductBySlug = unstable_cache(
  fetchProductBySlug,
  ["product-by-slug"],
  { revalidate: 120 }
);
