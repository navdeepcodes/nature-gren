"use client";

import { useMemo, useState } from "react";

import ShopFilters from "./ShopFilters";
import ProductGrid from "./ProductGrid";

import type { ShopCategory } from "@/lib/shop/categories";
import type { ShopProduct } from "@/lib/shop/products";

interface ShopClientProps {
  products: ShopProduct[];
  categories: ShopCategory[];
}

export default function ShopClient({
  products,
  categories,
}: ShopClientProps) {
  const [selectedCategory, setSelectedCategory] =
    useState("");

  const filteredProducts = useMemo(() => {
    if (!selectedCategory) {
      return products;
    }

    return products.filter(
      (product) =>
        product.category?.id === selectedCategory
    );
  }, [products, selectedCategory]);

  return (
    <>
      <ShopFilters
        categories={categories}
        selectedCategory={selectedCategory}
        productCount={filteredProducts.length}
        onCategoryChange={setSelectedCategory}
      />

      <ProductGrid products={filteredProducts} />
    </>
  );
}