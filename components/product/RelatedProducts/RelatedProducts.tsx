import Container from "@/components/layout/Container";
import ProductCard from "@/components/homepage/FeaturedProducts/ProductCard";

import { getHomepageFeaturedProducts } from "@/lib/homepage/products";

export default async function RelatedProducts() {
  const products = await getHomepageFeaturedProducts();

  return (
    <section className="bg-[#fcfaf7] py-24">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-medium uppercase tracking-[0.24em] text-[var(--primary)]">
            Discover More
          </span>

          <h2 className="mt-5 font-serif text-5xl leading-tight text-[var(--text)]">
            Related Products
          </h2>

          <p className="mt-6 text-lg leading-8 text-[var(--text-muted)]">
            Explore more handcrafted jute products designed with the same
            commitment to sustainability, craftsmanship and timeless style.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {products.slice(0, 4).map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}