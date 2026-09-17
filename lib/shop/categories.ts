import { unstable_cache } from "next/cache";

import { createPublicClient } from "@/lib/supabase/public";

export interface ShopCategory {
  id: string;
  name: string;
}

async function fetchShopCategories() {
  const supabase = createPublicClient();

  const { data, error } = await supabase
    .from("categories")
    .select("id, name")
    .eq("active", true)
    .order("display_order", {
      ascending: true,
    });

  if (error) {
    throw error;
  }

  return data as ShopCategory[];
}

export const getShopCategories = unstable_cache(
  fetchShopCategories,
  ["shop-categories"],
  { revalidate: 300 }
);