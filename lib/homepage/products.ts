import { createClient } from "@/lib/supabase/server";

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

export async function getHomepageFeaturedProducts() {
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
    .eq("featured", true)
    .order("display_order", {
      ascending: true,
    });

  if (error) {
    console.error("Homepage Featured Products Error:", error);
    throw error;
  }

  return normalizeProducts(data ?? []);
}