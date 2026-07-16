import { createClient } from "@/lib/supabase/server";

export interface HomepageStory {
  id: string;

  title: string;
  subtitle: string;

  description: string;

  image_url: string | null;

  button_text: string;
}

export async function getHomepageStory() {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("story")
    .select("*")
    .limit(1)
    .single();

  if (error) throw error;

  return data as HomepageStory;
}