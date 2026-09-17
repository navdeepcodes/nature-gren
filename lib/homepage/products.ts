import { unstable_cache } from "next/cache";

import { createPublicClient } from "@/lib/supabase/public";

export interface HomepageProduct {
  id: string;
  slug: string;

  name: string;
  description: string | null;

  image_url: string | null;

  featured: boolean;
  active: boolean;

  category: {
    id: string;
    name: string;
  } | null;
}

function normalizeProducts(data: any[]): HomepageProduct[] {
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

async function fetchHomepageFeaturedProducts() {
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
    .eq("featured", true)
    .order("display_order", {
      ascending: true,
    })
    .limit(20);

  if (error) {
    console.error("Homepage Featured Products Error:", error);
    throw error;
  }

  return normalizeProducts(data ?? []);
}

export const getHomepageFeaturedProducts = unstable_cache(
  fetchHomepageFeaturedProducts,
  ["homepage-featured-products"],
  { revalidate: 120 }
);