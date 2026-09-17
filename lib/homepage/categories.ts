import { unstable_cache } from "next/cache";

import { createPublicClient } from "@/lib/supabase/public";

async function fetchHomepageCategories() {
  const supabase = createPublicClient();

  const { data, error } = await supabase
    .from("categories")
    .select("*")
    .eq("active", true)
    .order("display_order", {
      ascending: true,
    });

  if (error) throw error;

  return data;
}

export const getHomepageCategories = unstable_cache(
  fetchHomepageCategories,
  ["homepage-categories"],
  { revalidate: 300 }
);