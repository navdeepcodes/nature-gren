import Link from "next/link";

import Container from "@/components/layout/Container";

import ProductCard from "./ProductCard";

import { getHomepageFeaturedProducts } from "@/lib/homepage/products";

export default async function FeaturedProducts() {
  const products = await getHomepageFeaturedProducts();

  return (
    <section className="py-16 md:py-20 lg:py-24">
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 md:gap-8 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <p className="text-xs font-medium uppercase tracking-[0.28em] text-[var(--primary)] md:text-sm">
              Featured Products
            </p>

            <h2 className="mt-3 font-serif text-3xl leading-tight text-[var(--text)] sm:text-4xl md:text-5xl lg:text-6xl">
              Best Sellers
            </h2>

            <p className="mt-4 text-base leading-7 text-[var(--text-muted)] md:mt-6 md:text-lg md:leading-8">
              Explore some of our most loved handcrafted jute products,
              thoughtfully created for everyday use.
            </p>
          </div>

          <Link
            href="/shop"
            className="
              inline-flex
              h-11
              md:h-14
              items-center
              rounded-full
              border
              border-[var(--border)]
              px-5
              md:px-8
              text-sm
              font-medium
              transition-all
              duration-300
              hover:bg-white
              hover:shadow-md
            "
          >
            View All Products
          </Link>
        </div>

        {products.length === 0 ? (
          <div className="mt-10 md:mt-14 rounded-[24px] md:rounded-[30px] border border-dashed border-[var(--border)] py-16 md:py-24 text-center text-[var(--text-muted)]">
            No featured products added yet.
          </div>
        ) : (
          <div
            className="
              mt-10
              grid
              grid-cols-2
              gap-4
              sm:gap-5
              md:mt-14
              md:gap-6
              lg:grid-cols-4
              lg:gap-8
            "
          >
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))}
          </div>
        )}
      </Container>
    </section>
  );
}