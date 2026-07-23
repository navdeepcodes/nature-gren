import { SITE } from "./metadata";

export function generateBreadcrumbSchema(
  category: string,
  slug: string,
  productName: string
) {
  return {
    "@context": "https://schema.org",

    "@type": "BreadcrumbList",

    itemListElement: [
      {
        "@type": "ListItem",

        position: 1,

        name: "Home",

        item: SITE.url,
      },

      {
        "@type": "ListItem",

        position: 2,

        name: "Shop",

        item: `${SITE.url}/shop`,
      },

      {
        "@type": "ListItem",

        position: 3,

        name: category,

        item: `${SITE.url}/shop?category=${encodeURIComponent(category)}`,
      },

      {
        "@type": "ListItem",

        position: 4,

        name: productName,

        item: `${SITE.url}/shop/${slug}`,
      },
    ],
  };
}