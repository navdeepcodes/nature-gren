import { createClient } from "@/lib/supabase/server";

export interface SearchProduct {
  id: string;
  slug: string;
  name: string;
  image_url: string | null;
}

export async function getSearchProducts() {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("products")
    .select(`
      id,
      slug,
      name,
      image_url
    `)
    .eq("active", true)
    .order("name");

  if (error) throw error;

  return (data ?? []) as SearchProduct[];
}