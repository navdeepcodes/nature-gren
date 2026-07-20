import { createClient } from "@/lib/supabase/server";

export interface HomepageHero {
  id: string;

  title: string;
  accent: string;
  description: string;

  primary_button: string;
  secondary_button: string;

  image_urls: string[];

  featured_product_id: string | null;
}

const fallbackHero: HomepageHero = {
  id: "1",

  title: "Sustainable by Nature.",
  accent: "Made for Life.",

  description:
    "Premium handcrafted jute products thoughtfully designed for modern living.",

  primary_button: "Explore Collection",
  secondary_button: "Our Story",

  image_urls: [],

  featured_product_id: null,
};

export async function getHomepageHero(): Promise<HomepageHero> {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("hero")
    .select("*")
    .limit(1)
    .single();

  if (error) {
    console.error("Hero query failed:", error);
    return fallbackHero;
  }

  return {
    ...data,
    image_urls: data.image_urls ?? [],
    featured_product_id: data.featured_product_id ?? null,
  };
}