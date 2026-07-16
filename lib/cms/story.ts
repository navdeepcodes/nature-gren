import { createClient } from "@/lib/supabase/client";

export interface Story {
  id: string;

  title: string;
  subtitle: string;

  description: string;

  image_url: string | null;

  button_text: string;

  created_at?: string;
  updated_at?: string;
}

export async function getStory() {
  const supabase = createClient();

  const { data, error } = await supabase
    .from("story")
    .select("*")
    .single();

  if (error) {
    console.error("Supabase Story Error:", error);
    throw error;
  }

  return data as Story;
}

export async function updateStory(
  id: string,
  story: Partial<Story>
) {
  const supabase = createClient();

  const { error } = await supabase
    .from("story")
    .update(story)
    .eq("id", id);

  if (error) {
    console.error("Supabase Update Story Error:", error);
    throw error;
  }
}