import { createClient } from "@/lib/supabase/client";

export interface About {
  id: number;

  hero_title: string;
  hero_subtitle: string;
  hero_image: string | null;

  story_title: string;
  story_description: string;
  story_image: string | null;

  vision_title: string;
  vision_description: string;
  vision_image: string | null;

  mission_title: string;
  mission_description: string;
  mission_image: string | null;

  cta_title: string;
  cta_description: string;
  cta_button: string;
  cta_link: string;
}

export async function getAbout() {
  const supabase = createClient();

  const { data, error } = await supabase
    .from("about")
    .select("*")
    .eq("id", 1)
    .single();

  if (error) throw error;

  return data as About;
}

export async function saveAbout(
  about: Omit<About, "id">
) {
  const supabase = createClient();

  const { error } = await supabase
    .from("about")
    .update(about)
    .eq("id", 1);

  if (error) throw error;
}