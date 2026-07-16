"use client";

import type { Category } from "@/lib/cms/categories";

interface ProductCategoryProps {
  categories: Category[];

  value: string;

  onChange: (value: string) => void;
}

export default function ProductCategory({
  categories,
  value,
  onChange,
}: ProductCategoryProps) {
  return (
    <div>
      <label className="mb-2 block text-sm font-semibold">
        Category
      </label>

      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="h-14 w-full rounded-xl border px-5 outline-none transition focus:border-[#2E4B2C]"
      >
        <option value="">
          Select Category
        </option>

        {categories.map((category) => (
          <option
            key={category.id}
            value={category.id}
          >
            {category.name}
          </option>
        ))}
      </select>
    </div>
  );
}