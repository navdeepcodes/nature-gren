import { unstable_cache } from "next/cache";

import { createPublicClient } from "@/lib/supabase/public";

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

async function fetchShopProducts() {
  const supabase = createPublicClient();

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
    })
    .limit(200);

  if (error) throw error;

  return normalizeProducts(data ?? []);
}

export const getShopProducts = unstable_cache(
  fetchShopProducts,
  ["shop-products"],
  { revalidate: 120 }
);

async function fetchFilteredProducts(categoryId?: string) {
  const supabase = createPublicClient();

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

  const { data, error } = await query
    .order("display_order", {
      ascending: true,
    })
    .limit(200);

  if (error) throw error;

  return normalizeProducts(data ?? []);
}

export const getFilteredProducts = unstable_cache(
  fetchFilteredProducts,
  ["shop-products-filtered"],
  { revalidate: 120 }
);