import Container from "@/components/layout/Container";
import CategoryCard from "./CategoryCard";

import { getHomepageCategories } from "@/lib/homepage/categories";

export default async function Categories() {
  const categories = await getHomepageCategories();

  return (
    <section className="py-24">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-medium uppercase tracking-[0.25em] text-[var(--primary)]">
            Collections
          </span>

          <h2 className="mt-4 font-serif text-4xl leading-tight text-[var(--text)] md:text-5xl lg:text-6xl">
            Shop by Category
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[var(--text-muted)]">
            Discover handcrafted sustainable jute collections designed
            for everyday living, gifting, and premium business needs.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {categories.map((category) => (
            <CategoryCard
              key={category.id}
              title={category.name}
              image={category.image_url}
              href={`/shop?category=${category.id}`}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}