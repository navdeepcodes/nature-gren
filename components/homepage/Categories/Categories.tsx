import Link from "next/link";

import Container from "@/components/layout/Container";
import CategoryCard from "./CategoryCard";

import { getHomepageCategories } from "@/lib/homepage/categories";

/**
 * Mosaic spans. The first category is the large feature tile (2x2 on
 * desktop, full width on mobile). The last tile widens to close any gap
 * left in the final row, so the mosaic always ends flush.
 */
function tileClass(index: number, count: number) {
  if (index === 0) {
    return "col-span-2 aspect-[16/10] lg:row-span-2 lg:aspect-auto";
  }

  if (index !== count - 1) return "aspect-square lg:aspect-auto";

  const mobileGap = (count - 1) % 2 === 1;
  const desktopRemainder = (count + 3) % 4;
  const desktopSpan =
    desktopRemainder === 0 ? 1 : 4 - desktopRemainder + 1;

  return [
    mobileGap ? "col-span-2 aspect-[16/9]" : "aspect-square",
    "lg:aspect-auto",
    { 1: "lg:col-span-1", 2: "lg:col-span-2", 3: "lg:col-span-3", 4: "lg:col-span-4" }[desktopSpan],
  ].join(" ");
}

export default async function Categories() {
  const categories = await getHomepageCategories();

  if (!categories?.length) return null;

  return (
    <section className="py-16 md:py-20 lg:py-28">
      <Container>
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <h2 className="text-balance font-serif text-4xl leading-[1.05] text-[var(--text)] md:text-5xl lg:text-6xl">
              Shop by category
            </h2>

            <p className="mt-4 text-base leading-7 text-[var(--text-muted)] md:text-lg md:leading-8">
              Bags, rugs, pouches and home pieces, each woven
              from natural jute.
            </p>
          </div>

          <Link
            href="/shop"
            className="self-start text-sm font-semibold text-[var(--primary)] underline decoration-[var(--accent)] decoration-2 underline-offset-[6px] transition-colors hover:text-[var(--primary-hover)] hover:decoration-[var(--primary)] md:self-auto"
          >
            See all products
          </Link>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-3 sm:gap-4 md:mt-14 lg:grid-cols-4 lg:auto-rows-[15.5rem] lg:gap-5">
          {categories.map((category, index) => (
            <CategoryCard
              key={category.id}
              title={category.name}
              image={category.image_url}
              href={`/shop?category=${category.id}`}
              featured={index === 0}
              className={tileClass(index, categories.length)}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
