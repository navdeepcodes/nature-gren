import { SITE } from "./metadata";

export function generateProductSchema(product: {
  name: string;
  description: string;
  slug: string;
  images: string[];
  category: string;
  sku?: string;
}) {
  return {
    "@context": "https://schema.org",

    "@type": "Product",

    name: product.name,

    description: product.description,

    image: product.images,

    sku: product.sku,

    category: product.category,

    brand: {
      "@type": "Brand",
      name: SITE.name,
    },

    url: `${SITE.url}/shop/${product.slug}`,
  };
}