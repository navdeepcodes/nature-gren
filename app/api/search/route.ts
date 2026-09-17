import { NextResponse } from "next/server";
import { unstable_cache } from "next/cache";

import { createPublicClient } from "@/lib/supabase/public";

export const revalidate = 120;

const getSearchProducts = unstable_cache(
  async () => {
    const supabase = createPublicClient();

    const { data, error } = await supabase
      .from("products")
      .select(`
        id,
        slug,
        name,
        image_url
      `)
      .eq("active", true)
      .order("name")
      .limit(500);

    if (error) throw error;

    return data ?? [];
  },
  ["search-products"],
  { revalidate: 120 }
);

export async function GET() {
  try {
    const data = await getSearchProducts();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      {
        error:
          error instanceof Error
            ? error.message
            : "Search failed.",
      },
      { status: 500 }
    );
  }
}