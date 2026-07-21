import { createClient } from "@/lib/supabase/client";

export interface About {
  id: string;

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
    .limit(1)
    .single();

  if (error) throw error;

  return {
    ...data,
    hero_image: data.hero_image ?? null,
    story_image: data.story_image ?? null,
    vision_image: data.vision_image ?? null,
    mission_image: data.mission_image ?? null,
  } as About;
}

export async function updateAbout(
  id: string,
  about: Omit<About, "id">
) {
  const supabase = createClient();

  const { error } = await supabase
    .from("about")
    .update({
      hero_title: about.hero_title,
      hero_subtitle: about.hero_subtitle,
      hero_image: about.hero_image,

      story_title: about.story_title,
      story_description: about.story_description,
      story_image: about.story_image,

      vision_title: about.vision_title,
      vision_description: about.vision_description,
      vision_image: about.vision_image,

      mission_title: about.mission_title,
      mission_description: about.mission_description,
      mission_image: about.mission_image,

      cta_title: about.cta_title,
      cta_description: about.cta_description,
      cta_button: about.cta_button,
      cta_link: about.cta_link,
    })
    .eq("id", id);

  if (error) throw error;
}