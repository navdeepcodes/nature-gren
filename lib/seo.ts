import type { Metadata } from "next";

import { getSettings } from "@/lib/cms/settings";

export async function getSiteMetadata(): Promise<Metadata> {
  const settings = await getSettings();

  const baseUrl =
    settings.canonical_url ||
    process.env.NEXT_PUBLIC_SITE_URL ||
    "https://naturegren.com";

  const title =
    settings.seo_title ||
    "NatureGren | Premium Handcrafted Jute Products";

  const description =
    settings.seo_description ||
    "Premium handcrafted eco-friendly jute products.";

  const image =
    settings.seo_image || "/og-image.jpg";

  return {
    metadataBase: new URL(baseUrl),

    title: {
      default: title,
      template: `%s | ${settings.site_name || "NatureGren"}`,
    },

    description,

    keywords:
      settings.seo_keywords
        ?.split(",")
        .map((k) => k.trim()) ?? [],

    openGraph: {
      type: "website",
      url: baseUrl,
      siteName:
        settings.site_name || "NatureGren",
      title,
      description,
      images: [image],
    },

    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },

    alternates: {
      canonical: baseUrl,
    },

    robots: {
      index: true,
      follow: true,
    },
  };
}