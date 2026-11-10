import Link from "next/link";

import Container from "@/components/layout/Container";

import ProductRail from "./ProductRail";

import { getHomepageFeaturedProducts } from "@/lib/homepage/products";

export default async function FeaturedProducts() {
  const products = await getHomepageFeaturedProducts();

  if (products.length === 0) return null;

  return (
    <section className="overflow-hidden py-16 md:py-20 lg:py-24">
      <Container>
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <h2 className="text-balance font-serif text-4xl leading-[1.05] text-[var(--text)] md:text-5xl lg:text-6xl">
              Best sellers
            </h2>

            <p className="mt-4 text-base leading-7 text-[var(--text-muted)] md:text-lg md:leading-8">
              The pieces customers come back for, from
              everyday totes to gift-ready bottle bags.
            </p>
          </div>

          <Link
            href="/shop"
            className="self-start text-sm font-semibold text-[var(--primary)] underline decoration-[var(--accent)] decoration-2 underline-offset-[6px] transition-colors hover:text-[var(--primary-hover)] hover:decoration-[var(--primary)] md:self-auto"
          >
            Shop all products
          </Link>
        </div>

        <div className="mt-10 md:mt-14">
          <ProductRail products={products} />
        </div>
      </Container>
    </section>
  );
}
