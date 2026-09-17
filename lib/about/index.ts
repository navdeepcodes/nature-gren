import { unstable_cache } from "next/cache";

import { createPublicClient } from "@/lib/supabase/public";
import type { About } from "@/lib/cms/about";

async function fetchAboutPageContent(): Promise<About> {
  const supabase = createPublicClient();

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

/**
 * Server-side, cached loader for the public /about page. Unlike
 * `lib/cms/about.ts#getAbout` (which uses the browser Supabase client for
 * the admin dashboard), this never touches request-time APIs, so the page
 * can be statically rendered and revalidated on a timer.
 */
export const getAboutPageContent = unstable_cache(
  fetchAboutPageContent,
  ["about-page-content"],
  { revalidate: 300 }
);
