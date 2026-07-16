import { createClient } from "@/lib/supabase/server";

export interface HomepageHero {
  id: number;

  title: string;
  accent: string;
  description: string;

  primary_button: string;
  secondary_button: string;

  image_url: string | null;
}

const fallbackHero: HomepageHero = {
  id: 1,

  title: "Sustainable by Nature.",
  accent: "Made for Life.",

  description:
    "Premium handcrafted jute products thoughtfully designed for modern living.",

  primary_button: "Explore Collection",
  secondary_button: "Our Story",

  image_url: null,
};

export async function getHomepageHero(): Promise<HomepageHero> {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("hero")
    .select("*")
    .order("id", { ascending: false })
    .limit(1);

  if (error) {
    console.error("Hero query failed:", error);
    return fallbackHero;
  }

  return data?.[0] ?? fallbackHero;
}