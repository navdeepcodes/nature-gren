import type { Metadata } from "next";

import { getProductBySlug } from "@/lib/shop/product";
import { generateMetadata as createMetadata } from "@/lib/seo/metadata";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateProductMetadata({
  params,
}: Props): Promise<Metadata> {
  const { slug } = await params;

  const product = await getProductBySlug(slug);

  if (!product) {
    return createMetadata({
      title: "Product Not Found",
      noIndex: true,
    });
  }

  return createMetadata({
    title: product.name,

    description:
      product.description ??
      `Discover ${product.name}, a premium handcrafted eco-friendly jute product from NatureGren.`,

    image:
      product.image_url ??
      "/og-image.jpg",

    path: `/shop/${product.slug}`,
  });
}