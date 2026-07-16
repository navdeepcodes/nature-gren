import type { Metadata } from "next";
import { notFound } from "next/navigation";

import AnimatedBackground from "@/components/background/AnimatedBackground";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/homepage/Footer";
import Container from "@/components/layout/Container";

import ProductBreadcrumb from "@/components/product/ProductBreadcrumb";
import ProductGallery from "@/components/product/ProductGallery";
import ProductInfo from "@/components/product/ProductInfo";
import ProductActions from "@/components/product/ProductActions";
import ProductFeatures from "@/components/product/ProductFeatures";
import ProductSpecifications from "@/components/product/ProductSpecifications";
import RelatedProducts from "@/components/product/RelatedProducts";

import { createClient } from "@/lib/supabase/server";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { slug } = await params;

  const supabase = await createClient();

  const { data: product } = await supabase
    .from("products")
    .select(
      `
      name,
      slug,
      description,
      image_url
      `
    )
    .eq("slug", slug)
    .single();

  if (!product) {
    return {
      title: "Product Not Found",
    };
  }

  const description =
    product.description ??
    `Discover ${product.name}, a premium handcrafted eco-friendly jute product from NatureGren.`;

  return {
    title: product.name,

    description,

    alternates: {
      canonical: `/shop/${product.slug}`,
    },

    openGraph: {
      title: product.name,
      description,
      url: `/shop/${product.slug}`,

      images: product.image_url
        ? [
            {
              url: product.image_url,
              alt: product.name,
            },
          ]
        : [],
    },

    twitter: {
      card: "summary_large_image",
      title: product.name,
      description,

      images: product.image_url
        ? [product.image_url]
        : [],
    },
  };
}

export default async function ProductPage({
  params,
}: Props) {
  const { slug } = await params;

  const supabase = await createClient();

  const { data: product, error } = await supabase
    .from("products")
    .select(
      `
      *,
      category:categories(
        id,
        name
      )
      `
    )
    .eq("slug", slug)
    .single();

  if (error || !product) {
    notFound();
  }

  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL ??
    "https://naturegren.com";

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",

    name: product.name,

    image: product.image_url
      ? [product.image_url]
      : [],

    description:
      product.description ??
      "Premium handcrafted jute product.",

    brand: {
      "@type": "Brand",
      name: "NatureGren",
    },

    category:
      product.category?.name,

    url: `${baseUrl}/shop/${product.slug}`,
  };

  return (
    <>
      <AnimatedBackground />

      <Navbar />

      <main className="relative z-10">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              productSchema
            ),
          }}
        />

        <section className="py-16 lg:py-24">
          <Container>
            <ProductBreadcrumb
              category={product.category?.name}
              product={product.name}
            />

            <div className="mt-10 grid gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-24">
              <ProductGallery
                imageUrl={product.image_url}
                title={product.name}
              />

              <div>
                <ProductInfo
                  title={product.name}
                  category={product.category?.name}
                  description={
                    product.description ??
                    "Handcrafted premium jute product."
                  }
                />

                <ProductActions
                  productId={product.id}
                  productName={product.name}
                  productSlug={product.slug}
                  imageUrl={
                    product.image_url
                  }
                />
              </div>
            </div>

            <ProductFeatures />

            <ProductSpecifications
              category={
                product.category?.name
              }
            />

            <RelatedProducts />
          </Container>
        </section>
      </main>

      <Footer />
    </>
  );
}