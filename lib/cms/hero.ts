import { createClient } from "@/lib/supabase/client";

export interface Hero {
  id: string;

  title: string;
  accent: string;
  description: string;

  primary_button: string;
  secondary_button: string;

  image_url: string | null;
}

export async function getHero() {
  const supabase = createClient();

  const { data, error } = await supabase
    .from("hero")
    .select("*")
    .limit(1)
    .single();

  if (error) throw error;

  return data as Hero;
}

export async function updateHero(
  id: string,
  hero: Omit<Hero, "id">
) {
  const supabase = createClient();

  const { error } = await supabase
    .from("hero")
    .update(hero)
    .eq("id", id);

  if (error) throw error;
}