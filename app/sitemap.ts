import type { MetadataRoute } from "next";
import { unstable_cache } from "next/cache";

import { createPublicClient } from "@/lib/supabase/public";

export const revalidate = 300;

const getSitemapProducts = unstable_cache(
  async () => {
    const supabase = createPublicClient();

    const { data } = await supabase
      .from("products")
      .select("slug, updated_at")
      .eq("active", true)
      .limit(500);

    return data ?? [];
  },
  ["sitemap-products"],
  { revalidate: 300 }
);

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL ??
    "https://naturegren.com";

  const products = await getSitemapProducts();

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/shop`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/story`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];

  const productPages =
    products?.map((product) => ({
      url: `${baseUrl}/shop/${product.slug}`,
      lastModified: product.updated_at
        ? new Date(product.updated_at)
        : new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })) ?? [];

  return [...staticPages, ...productPages];
}