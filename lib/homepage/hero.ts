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
    .maybeSingle();

  if (error || !data) {
    console.error("Hero query failed:", error);
    return fallbackHero;
  }

  return {
    id: data.id ?? fallbackHero.id,
    title: data.title ?? fallbackHero.title,
    accent: data.accent ?? fallbackHero.accent,
    description: data.description ?? fallbackHero.description,
    primary_button:
      data.primary_button ?? fallbackHero.primary_button,
    secondary_button:
      data.secondary_button ?? fallbackHero.secondary_button,
    image_urls: Array.isArray(data.image_urls)
      ? data.image_urls
      : [],
    featured_product_id:
      data.featured_product_id ?? null,
  };
}