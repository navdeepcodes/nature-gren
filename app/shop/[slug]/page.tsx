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

import { generateProductMetadata } from "./metadata";

export const generateMetadata = generateProductMetadata;

interface Props {
  params: Promise<{
    slug: string;
  }>;
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

  const productUrl = `${baseUrl}/shop/${product.slug}`;

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",

    "@id": `${productUrl}#product`,

    name: product.name,

    description:
      product.description ??
      "Premium handcrafted sustainable jute product by NatureGren.",

    image: product.image_url
      ? [product.image_url]
      : [],

    url: productUrl,

    sku: product.sku ?? undefined,

    category: product.category?.name,

    brand: {
      "@type": "Brand",
      name: "NatureGren",
    },

    manufacturer: {
      "@type": "Organization",
      name: "NatureGren",
    },

    isFamilyFriendly: true,

    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": productUrl,
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",

    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: baseUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Shop",
        item: `${baseUrl}/shop`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: product.category?.name ?? "Products",
        item: `${baseUrl}/shop`,
      },
      {
        "@type": "ListItem",
        position: 4,
        name: product.name,
        item: productUrl,
      },
    ],
  };

  return (
    <>
      <AnimatedBackground />

      <Navbar />

      <main className="relative z-10">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(productSchema),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(breadcrumbSchema),
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
                  imageUrl={product.image_url}
                />
              </div>
            </div>

            <ProductFeatures />

            <ProductSpecifications
              category={product.category?.name}
            />

            <RelatedProducts />
          </Container>
        </section>
      </main>

      <Footer />
    </>
  );
}