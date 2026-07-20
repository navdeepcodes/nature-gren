import { createClient } from "@/lib/supabase/client";

const supabase = createClient();

export interface AboutFeature {
  id?: number;
  title: string;
  description: string;
  icon: string;
  display_order: number;
}

export async function getAboutFeatures(): Promise<AboutFeature[]> {
  const { data, error } = await supabase
    .from("about_features")
    .select("*")
    .order("display_order", { ascending: true });

  if (error) throw error;

  return (data as AboutFeature[]) ?? [];
}

export async function saveAboutFeatures(
  features: AboutFeature[]
): Promise<void> {
  const { error } = await supabase
    .from("about_features")
    .upsert(features, {
      onConflict: "id",
    });

  if (error) throw error;
}

export async function deleteAboutFeature(
  id: number
): Promise<void> {
  const { error } = await supabase
    .from("about_features")
    .delete()
    .eq("id", id);

  if (error) throw error;
}