"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface ProductBreadcrumbProps {
  category?: string | null;
  product: string;
}

export default function ProductBreadcrumb({
  category,
  product,
}: ProductBreadcrumbProps) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="mb-10 flex flex-wrap items-center gap-2 text-sm text-[var(--text-muted)]"
    >
      <Link
        href="/"
        className="transition-colors hover:text-[var(--primary)]"
      >
        Home
      </Link>

      <ChevronRight size={15} />

      <Link
        href="/shop"
        className="transition-colors hover:text-[var(--primary)]"
      >
        Shop
      </Link>

      {category && (
        <>
          <ChevronRight size={15} />

          <span>{category}</span>
        </>
      )}

      <ChevronRight size={15} />

      <span className="font-medium text-[var(--text)]">
        {product}
      </span>
    </nav>
  );
}