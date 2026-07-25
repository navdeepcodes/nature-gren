import type { Metadata } from "next";

export const SITE = {
  name: "NatureGren",

  url:
    process.env.NEXT_PUBLIC_SITE_URL ??
    "https://naturegren.com",

  // Brand title (keep this exactly as the client wants)
  title: "NatureGren · Inspired by Nature",

  description:
    "Discover premium handcrafted jute rugs, baskets, bags, home décor and sustainable lifestyle products made from natural jute with timeless craftsmanship and eco-friendly materials.",

  keywords: [
    "NatureGren",
    "Premium Jute Products",
    "Handcrafted Jute",
    "Jute Rugs",
    "Jute Bags",
    "Jute Baskets",
    "Jute Home Decor",
    "Sustainable Home Decor",
    "Eco Friendly Products",
    "Natural Fiber Products",
    "Luxury Jute",
    "Handmade Home Decor",
    "Organic Lifestyle",
  ],

  image: "/og-image.jpg",

  twitter: "@naturegren",
};

interface MetadataOptions {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  path?: string;
  noIndex?: boolean;
}

export function generateMetadata({
  title,
  description,
  keywords,
  image,
  path = "",
  noIndex = false,
}: MetadataOptions = {}): Metadata {
  const pageTitle = title
    ? `${title} | ${SITE.name}`
    : SITE.title;

  const pageDescription =
    description ?? SITE.description;

  const pageKeywords =
    keywords ?? SITE.keywords;

  const pageImage =
    image ?? SITE.image;

  const canonical = `${SITE.url}${path}`;

  return {
    metadataBase: new URL(SITE.url),

    applicationName: SITE.name,

    title: pageTitle,

    description: pageDescription,

    keywords: pageKeywords,

    category: "Shopping",

    alternates: {
      canonical,
    },

    robots: {
      index: !noIndex,
      follow: !noIndex,

      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },

    openGraph: {
      type: "website",

      locale: "en_US",

      url: canonical,

      siteName: SITE.name,

      title: pageTitle,

      description: pageDescription,

      images: [
        {
          url: pageImage,
          width: 1200,
          height: 630,
          alt: pageTitle,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",

      title: pageTitle,

      description: pageDescription,

      images: [pageImage],

      creator: SITE.twitter,
    },
  };
}