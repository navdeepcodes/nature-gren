import { createClient } from "@/lib/supabase/client";

export interface Settings {
  id?: string;

  site_name: string;
  tagline: string;

  logo: string;
  favicon: string;

  phone: string;
  whatsapp: string;
  email: string;
  address: string;
  maps_url: string;

  instagram: string;
  facebook: string;
  linkedin: string;
  pinterest: string;

  seo_title: string;
  seo_description: string;
  seo_keywords: string;
  seo_image: string;
  canonical_url: string;

  footer_description: string;
  copyright: string;
}

const defaultSettings: Settings = {
  site_name: "NatureGren",
  tagline: "",

  logo: "",
  favicon: "",

  phone: "",
  whatsapp: "",
  email: "",
  address: "",
  maps_url: "",

  instagram: "",
  facebook: "",
  linkedin: "",
  pinterest: "",

  seo_title:
    "NatureGren | Premium Handcrafted Jute Products",

  seo_description:
    "Premium handcrafted eco-friendly jute products.",

  seo_keywords:
    "NatureGren, Jute, Eco Friendly, Sustainable",

  seo_image: "",

  canonical_url:
    process.env.NEXT_PUBLIC_SITE_URL ??
    "https://naturegren.com",

  footer_description: "",

  copyright: `© ${new Date().getFullYear()} NatureGren. All Rights Reserved.`,
};

export async function getSettings(): Promise<Settings> {
  const supabase = createClient();

  const { data, error } = await supabase
    .from("settings")
    .select("*")
    .limit(1);

  if (error) throw error;

  return {
    ...defaultSettings,
    ...(data?.[0] ?? {}),
  };
}

export async function saveSettings(
  settings: Omit<Settings, "id">
): Promise<void> {
  const supabase = createClient();

  const { data: existingRows, error: fetchError } =
    await supabase
      .from("settings")
      .select("id")
      .limit(1);

  if (fetchError) throw fetchError;

  const existing = existingRows?.[0];

  if (!existing) {
    const { error } = await supabase
      .from("settings")
      .insert(settings);

    if (error) throw error;

    return;
  }

  const { error } = await supabase
    .from("settings")
    .update(settings)
    .eq("id", existing.id);

  if (error) throw error;
}