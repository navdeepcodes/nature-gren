import ProductCard from "@/components/homepage/FeaturedProducts/ProductCard";

import type { ShopProduct } from "@/lib/shop/products";

interface ProductGridProps {
  products: ShopProduct[];
}

export default function ProductGrid({
  products,
}: ProductGridProps) {
  if (products.length === 0) {
    return (
      <div className="rounded-[32px] border border-dashed border-[var(--border)] bg-white py-24 text-center">
        <h3 className="text-2xl font-semibold text-[var(--text)]">
          No Products Found
        </h3>

        <p className="mt-3 text-[var(--text-muted)]">
          Try selecting another category or browse our full collection.
        </p>
      </div>
    );
  }

  return (
    <div className="mt-14 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
        />
      ))}
    </div>
  );
}