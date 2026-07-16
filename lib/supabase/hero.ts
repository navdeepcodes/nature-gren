import { createClient } from "./client";

export interface HeroData {
  id?: string;

  title: string;
  accent: string;
  description: string;

  primary_button: string;
  secondary_button: string;

  image_url: string | null;
}

export async function getHero(): Promise<HeroData | null> {
  const supabase = createClient();

  const { data, error } = await supabase
    .from("hero")
    .select("*")
    .limit(1)
    .maybeSingle();

  if (error) {
    throw error;
  }

  return data;
}

export async function saveHero(hero: HeroData) {
  const supabase = createClient();

  const existing = await getHero();

  if (!existing) {
    const { error } = await supabase
      .from("hero")
      .insert({
        title: hero.title,
        accent: hero.accent,
        description: hero.description,
        primary_button: hero.primary_button,
        secondary_button: hero.secondary_button,
        image_url: hero.image_url,
      });

    if (error) throw error;

    return;
  }

  const { error } = await supabase
    .from("hero")
    .update({
      title: hero.title,
      accent: hero.accent,
      description: hero.description,
      primary_button: hero.primary_button,
      secondary_button: hero.secondary_button,
      image_url: hero.image_url,
    })
    .eq("id", existing.id);

  if (error) {
    throw error;
  }
}