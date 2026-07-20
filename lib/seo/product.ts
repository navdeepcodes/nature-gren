interface ProductSchemaProps {
  name: string;
  description: string;
  image?: string | null;

  slug: string;

  category?: string;

  price?: number;

  currency?: string;

  availability?: "InStock" | "OutOfStock";

  brand?: string;
}

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ??
  "https://naturegren.com";

export function createProductSchema({
  name,
  description,
  image,
  slug,
  category,
  price,
  currency = "INR",
  availability = "InStock",
  brand = "NatureGren",
}: ProductSchemaProps) {
  return {
    "@context": "https://schema.org",

    "@type": "Product",

    name,

    image: image ? [image] : [],

    description,

    category,

    brand: {
      "@type": "Brand",
      name: brand,
    },

    offers: {
      "@type": "Offer",

      url: `${SITE_URL}/shop/${slug}`,

      price,

      priceCurrency: currency,

      availability:
        `https://schema.org/${availability}`,
    },
  };
}