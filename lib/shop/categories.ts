import { createClient } from "@/lib/supabase/server";

export interface ShopCategory {
  id: string;
  name: string;
}

export async function getShopCategories() {
  const supabase = await createClient();

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