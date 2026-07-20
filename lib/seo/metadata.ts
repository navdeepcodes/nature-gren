import type { Metadata } from "next";

export const SITE = {
  name: "NatureGren",
  url:
    process.env.NEXT_PUBLIC_SITE_URL ??
    "https://naturegren.com",

  title: "NatureGren | Premium Handcrafted Jute Products",

  description:
    "Discover premium handcrafted eco-friendly jute products made with sustainability, craftsmanship, and timeless design. Shop rugs, baskets, storage, décor, and lifestyle essentials.",

  keywords: [
    "NatureGren",
    "Jute Products",
    "Eco Friendly",
    "Sustainable Living",
    "Handcrafted",
    "Natural Fiber",
    "Jute Bags",
    "Jute Rugs",
    "Jute Baskets",
    "Home Decor",
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

    title: pageTitle,

    description: pageDescription,

    keywords: pageKeywords,

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