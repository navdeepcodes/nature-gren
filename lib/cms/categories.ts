import { createClient } from "@/lib/supabase/client";

export interface Category {
  id: string;

  name: string;

  description: string;

  image_url: string | null;

  active: boolean;

  display_order: number;

  created_at?: string;
  updated_at?: string;
}

export async function getCategories() {
  const supabase = createClient();

  const { data, error } = await supabase
    .from("categories")
    .select("*")
    .order("display_order", {
      ascending: true,
    });

  if (error) {
    console.error(error);
    throw new Error(error.message);
  }

  return (data ?? []) as Category[];
}

export async function getCategory(id: string) {
  const supabase = createClient();

  const { data, error } = await supabase
    .from("categories")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    console.error(error);
    throw new Error(error.message);
  }

  return data as Category;
}

export async function createCategory(
  category: Omit<Category, "id" | "created_at" | "updated_at">
) {
  const supabase = createClient();

  const { data, error } = await supabase
    .from("categories")
    .insert(category)
    .select();

  if (error) {
    console.error("Create Category Error:", error);
    throw new Error(error.message);
  }

  return data?.[0];
}

export async function updateCategory(
  id: string,
  category: Partial<Category>
) {
  const supabase = createClient();

  const { data, error } = await supabase
    .from("categories")
    .update(category)
    .eq("id", id)
    .select();

  if (error) {
    console.error("Update Category Error:", error);
    throw new Error(error.message);
  }

  return data?.[0];
}

export async function deleteCategory(id: string) {
  const supabase = createClient();

  const { error } = await supabase
    .from("categories")
    .delete()
    .eq("id", id);

  if (error) {
    console.error("Delete Category Error:", error);
    throw new Error(error.message);
  }
}