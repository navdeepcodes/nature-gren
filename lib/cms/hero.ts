import { createClient } from "@/lib/supabase/client";

export interface Hero {
  id: string;

  title: string;
  accent: string;
  description: string;

  primary_button: string;
  secondary_button: string;

  image_urls: string[];

  featured_product_id: string | null;
}

export async function getHero() {
  const supabase = createClient();

  const { data, error } = await supabase
    .from("hero")
    .select("*")
    .limit(1)
    .single();

  if (error) throw error;

  return {
    ...data,
    image_urls: data.image_urls ?? [],
    featured_product_id: data.featured_product_id ?? null,
  } as Hero;
}

export async function updateHero(
  id: string,
  hero: Omit<Hero, "id">
) {
  const supabase = createClient();

  const { error } = await supabase
    .from("hero")
    .update({
      title: hero.title,
      accent: hero.accent,
      description: hero.description,
      primary_button: hero.primary_button,
      secondary_button: hero.secondary_button,
      image_urls: hero.image_urls ?? [],
      featured_product_id: hero.featured_product_id,
    })
    .eq("id", id);

  if (error) throw error;
}