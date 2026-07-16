 "use client";

import { Leaf } from "lucide-react";

interface ProductInfoProps {
  title: string;
  category?: string | null;
  description: string;
}

export default function ProductInfo({
  title,
  category,
  description,
}: ProductInfoProps) {
  return (
    <div>
      {category && (
        <span className="inline-flex rounded-full bg-[#edf6eb] px-4 py-2 text-sm font-medium text-[var(--primary)]">
          {category}
        </span>
      )}

      <h1 className="mt-5 font-serif text-5xl leading-tight text-[var(--text)]">
        {title}
      </h1>

      <p className="mt-8 text-lg leading-8 text-[var(--text-muted)]">
        {description}
      </p>

      <div className="mt-10 flex items-center gap-3 rounded-2xl border border-[#dce8d8] bg-[#f8fcf6] p-5">
        <Leaf
          size={22}
          className="text-[var(--primary)]"
        />

        <p className="text-sm leading-7 text-[var(--text)]">
          Sustainably handcrafted from premium natural jute with
          exceptional durability and eco-conscious craftsmanship.
        </p>
      </div>
    </div>
  );
}