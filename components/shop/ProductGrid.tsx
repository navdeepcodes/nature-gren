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
      <div className="rounded-[28px] border border-dashed border-[var(--border)] bg-white py-20 text-center">
        <h3 className="text-xl font-semibold text-[var(--text)] sm:text-2xl">
          No Products Found
        </h3>

        <p className="mt-3 text-sm text-[var(--text-muted)] sm:text-base">
          Try selecting another category or browse our full collection.
        </p>
      </div>
    );
  }

  return (
    <div className="mt-10 grid grid-cols-2 gap-4 sm:mt-12 sm:gap-5 md:grid-cols-2 md:gap-6 xl:grid-cols-4 xl:gap-8">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
        />
      ))}
    </div>
  );
}