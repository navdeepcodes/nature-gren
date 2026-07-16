import { createClient } from "@/lib/supabase/server";

export async function getHomepageCategories() {
  const supabase = await createClient();

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