import { createClient } from "@/lib/supabase/server";

export interface ShopProduct {
  id: string;
  slug: string;

  name: string;
  description: string | null;

  image_url: string |null;

  featured: boolean;
  active: boolean;

  category: {
    id: string;
    name: string;
  } | null;
}

function normalizeProducts(data: any[]): ShopProduct[] {
  return (data ?? []).map((product) => ({
    id: product.id,
    slug: product.slug,

    name: product.name,
    description: product.description,

    image_url: product.image_url,

    featured: product.featured,
    active: product.active,

    category: Array.isArray(product.category)
      ? product.category[0] ?? null
      : product.category,
  }));
}

export async function getShopProducts() {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("products")
    .select(`
      id,
      slug,
      name,
      description,
      image_url,
      featured,
      active,
      category:categories(
        id,
        name
      )
    `)
    .eq("active", true)
    .order("display_order", {
      ascending: true,
    });

  if (error) throw error;

  console.log("SHOP PRODUCTS:", data);

  return normalizeProducts(data ?? []);
}

export async function getFilteredProducts(categoryId?: string) {
  const supabase = await createClient();

  let query = supabase
    .from("products")
    .select(`
      id,
      slug,
      name,
      description,
      image_url,
      featured,
      active,
      category:categories(
        id,
        name
      )
    `)
    .eq("active", true);

  if (categoryId) {
    query = query.eq("category_id", categoryId);
  }

  const { data, error } = await query.order(
    "display_order",
    {
      ascending: true,
    }
  );

  if (error) throw error;

  console.log("FILTERED PRODUCTS:", data);

  return normalizeProducts(data ?? []);
}