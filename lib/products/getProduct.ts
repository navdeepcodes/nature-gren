import { createClient } from "@/lib/supabase/server";

import type { Product } from "./types";

export async function getProducts(): Promise<Product[]> {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("products")
    .select("*")
    .order("created_at", {
      ascending: false,
    });

  if (error) throw error;

  return data as Product[];
}