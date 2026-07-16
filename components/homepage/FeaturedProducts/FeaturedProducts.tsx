import Link from "next/link";

import Container from "@/components/layout/Container";

import ProductCard from "./ProductCard";

import { getHomepageFeaturedProducts } from "@/lib/homepage/products";

export default async function FeaturedProducts() {
  const products = await getHomepageFeaturedProducts();

  return (
    <section className="py-24">
      <Container>
        <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <p className="text-sm font-medium uppercase tracking-[0.24em] text-[var(--primary)]">
              Featured Products
            </p>

            <h2 className="mt-4 font-serif text-4xl leading-tight text-[var(--text)] md:text-5xl lg:text-6xl">
              Best Sellers
            </h2>

            <p className="mt-6 text-lg leading-8 text-[var(--text-muted)]">
              Explore some of our most loved handcrafted jute products,
              thoughtfully created for everyday use.
            </p>
          </div>

          <Link
            href="/shop"
            className="
              inline-flex
              h-14
              items-center
              rounded-full
              border
              border-[var(--border)]
              px-8
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
          <div className="mt-14 rounded-[30px] border border-dashed border-[var(--border)] py-24 text-center text-[var(--text-muted)]">
            No featured products added yet.
          </div>
        ) : (
          <div className="mt-14 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
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