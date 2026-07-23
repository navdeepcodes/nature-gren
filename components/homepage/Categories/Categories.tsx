import Container from "@/components/layout/Container";
import CategoryCard from "./CategoryCard";

import { getHomepageCategories } from "@/lib/homepage/categories";

export default async function Categories() {
  const categories = await getHomepageCategories();

  return (
    <section className="py-16 md:py-20 lg:py-24">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-medium uppercase tracking-[0.28em] text-[var(--primary)] md:text-sm">
            Collections
          </span>

          <h2 className="mt-3 font-serif text-3xl leading-tight text-[var(--text)] sm:text-4xl md:text-5xl lg:text-6xl">
            Shop by Category
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-[var(--text-muted)] md:mt-6 md:text-lg md:leading-8">
            Discover handcrafted sustainable jute collections designed
            for everyday living, gifting, and premium business needs.
          </p>
        </div>

        <div
          className="
            mt-10
            grid
            grid-cols-2
            gap-4
            sm:gap-5
            md:mt-14
            md:gap-6
            lg:mt-16
            lg:grid-cols-3
            lg:gap-8
          "
        >
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