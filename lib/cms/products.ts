import { createClient } from "@/lib/supabase/client";

export interface ProductCategory {
  id: string;
  name: string;
}

export interface Product {
  id: string;

  name: string;
  slug: string;

  description: string;

  category_id: string | null;

  image_url: string | null;

  featured: boolean;
  active: boolean;

  display_order: number;

  sku: string | null;

  created_at?: string;
  updated_at?: string;
}

export interface ProductWithCategory extends Product {
  category: ProductCategory | null;
}

function generateSlug(name: string) {
  return name
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export async function getProducts(): Promise<ProductWithCategory[]> {
  const supabase = createClient();

  const { data, error } = await supabase
    .from("products")
    .select(`
      *,
      category:categories(
        id,
        name
      )
    `)
    .order("display_order", {
      ascending: true,
    });

  if (error) throw error;

  return (data ?? []) as ProductWithCategory[];
}

export async function getProduct(id: string): Promise<Product> {
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
  product: Omit<Product, "id" | "slug" | "created_at" | "updated_at">
) {
  const supabase = createClient();

  const { error } = await supabase
    .from("products")
    .insert({
      ...product,
      slug: generateSlug(product.name),
    });

  if (error) throw error;
}

export async function updateProduct(
  id: string,
  product: Partial<Product>
) {
  const supabase = createClient();

  const payload: Partial<Product> = {
    ...product,
  };

  if (product.name) {
    payload.slug = generateSlug(product.name);
  }

  const { error } = await supabase
    .from("products")
    .update(payload)
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

export async function getFeaturedProducts(): Promise<Product[]> {
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

  return (data ?? []) as Product[];
}

export async function getProductsByCategory(
  categoryId: string
): Promise<Product[]> {
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

  return (data ?? []) as Product[];
}