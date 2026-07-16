"use client";

import type { ShopCategory } from "@/lib/shop/categories";

interface ShopFiltersProps {
  categories: ShopCategory[];
  selectedCategory: string;
  productCount: number;
  onCategoryChange: (categoryId: string) => void;
}

export default function ShopFilters({
  categories,
  selectedCategory,
  productCount,
  onCategoryChange,
}: ShopFiltersProps) {
  return (
    <div className="mb-12 flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
      {/* Left */}

      <div>
        <h1 className="font-serif text-5xl text-[var(--text)]">
          Shop
        </h1>

        <p className="mt-3 text-[var(--text-muted)]">
          {productCount} product
          {productCount !== 1 ? "s" : ""} available
        </p>
      </div>

      {/* Right */}

      <div className="flex flex-wrap gap-3">
        <button
          type="button"
          onClick={() => onCategoryChange("")}
          className={`rounded-full border px-6 py-3 text-sm font-medium transition ${
            selectedCategory === ""
              ? "border-[var(--primary)] bg-[var(--primary)] text-white"
              : "border-[var(--border)] bg-white hover:bg-[#f8f6f2]"
          }`}
        >
          All
        </button>

        {categories.map((category) => (
          <button
            key={category.id}
            type="button"
            onClick={() => onCategoryChange(category.id)}
            className={`rounded-full border px-6 py-3 text-sm font-medium transition ${
              selectedCategory === category.id
                ? "border-[var(--primary)] bg-[var(--primary)] text-white"
                : "border-[var(--border)] bg-white hover:bg-[#f8f6f2]"
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>
    </div>
  );
}