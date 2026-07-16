import { createClient } from "@/lib/supabase/client";

export interface Product {
  id: string;

  name: string;
  description: string;

  category_id: string | null;

  image_url: string | null;

  featured: boolean;
  active: boolean;

  display_order: number;

  price: number | null;
  sku: string | null;

  created_at?: string;
  updated_at?: string;
}

export async function getProducts() {
  const supabase = createClient();

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
    .order("display_order", {
      ascending: true,
    });

  if (error) throw error;

  return data;
}

export async function getProduct(id: string) {
  const supabase = createClient();

  const { data, error } = await supabase
    .from("products")
    .select("*")
    .eq("id", id)
    .single();

  if (error) throw error;

  return data as Product;
}

export async function createProduct(
  product: Omit<Product, "id" | "created_at" | "updated_at">
) {
  const supabase = createClient();

  const { error } = await supabase
    .from("products")
    .insert(product);

  if (error) throw error;
}

export async function updateProduct(
  id: string,
  product: Partial<Product>
) {
  const supabase = createClient();

  const { error } = await supabase
    .from("products")
    .update(product)
    .eq("id", id);

  if (error) throw error;
}

export async function deleteProduct(id: string) {
  const supabase = createClient();

  const { error } = await supabase
    .from("products")
    .delete()
    .eq("id", id);

  if (error) throw error;
}

export async function getFeaturedProducts() {
  const supabase = createClient();

  const { data, error } = await supabase
    .from("products")
    .select("*")
    .eq("featured", true)
    .eq("active", true)
    .order("display_order", {
      ascending: true,
    });

  if (error) throw error;

  return data;
}

export async function getProductsByCategory(
  categoryId: string
) {
  const supabase = createClient();

  const { data, error } = await supabase
    .from("products")
    .select("*")
    .eq("category_id", categoryId)
    .eq("active", true)
    .order("display_order", {
      ascending: true,
    });

  if (error) throw error;

  return data;
}