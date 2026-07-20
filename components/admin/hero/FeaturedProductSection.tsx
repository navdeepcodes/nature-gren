"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { Loader2, Search, CheckCircle2, Package } from "lucide-react";

import { getProducts, Product } from "@/lib/cms/products";

interface FeaturedProductSectionProps {
  selectedProductId: string | null;
  onChange: (id: string | null) => void;
}

export default function FeaturedProductSection({
  selectedProductId,
  onChange,
}: FeaturedProductSectionProps) {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    loadProducts();
  }, []);

  async function loadProducts() {
    try {
      setLoading(true);

      const data = await getProducts();

      setProducts(data as Product[]);
    } catch (error) {
      console.error(error);
      alert("Failed to load products.");
    } finally {
      setLoading(false);
    }
  }

  const filteredProducts = useMemo(() => {
    if (!search.trim()) return products;

    return products.filter((product) =>
      product.name
        .toLowerCase()
        .includes(search.toLowerCase())
    );
  }, [products, search]);

  return (
    <section className="space-y-6">
      {/* Header */}

      <div>
        <h2 className="font-serif text-2xl text-[#1f2b1d]">
          Featured Product
        </h2>

        <p className="mt-2 text-sm text-gray-500">
          Select a product to display in the homepage hero.
          The hero image and enquiry link will use this
          product automatically.
        </p>
      </div>

      {/* Search */}

      <div className="relative">
        <Search
          size={18}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
        />

        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search products..."
          className="h-12 w-full rounded-2xl border border-[#e6e2da] bg-white pl-11 pr-4 outline-none transition focus:border-[#2E4B2C]"
        />
      </div>

      {/* Loading */}

      {loading && (
        <div className="flex h-48 items-center justify-center">
          <Loader2
            size={30}
            className="animate-spin text-[#2E4B2C]"
          />
        </div>
      )}

      {/* Empty */}

      {!loading && filteredProducts.length === 0 && (
        <div className="flex h-48 flex-col items-center justify-center rounded-3xl border border-dashed border-[#e6e2da] text-gray-500">
          <Package size={34} className="mb-3" />

          <p>No products found.</p>
        </div>
      )}

      {/* Grid */}

      {!loading && filteredProducts.length > 0 && (
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProducts.map((product) => {
            const selected =
              product.id === selectedProductId;

            return (
              <button
                key={product.id}
                type="button"
                onClick={() =>
                  onChange(
                    selected ? null : product.id
                  )
                }
                className={`group overflow-hidden rounded-3xl border bg-white text-left transition-all duration-200 hover:-translate-y-1 hover:shadow-lg ${
                  selected
                    ? "border-[#2E4B2C] ring-2 ring-[#2E4B2C]/10"
                    : "border-[#ebe7df]"
                }`}
              >
                {/* Image */}

                <div className="relative aspect-square overflow-hidden bg-[#f6f4ef]">
                  {product.image_url ? (
                    <Image
                      src={product.image_url}
                      alt={product.name}
                      fill
                      className="object-cover transition duration-300 group-hover:scale-105"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center text-gray-400">
                      <Package size={42} />
                    </div>
                  )}

                  {selected && (
                    <div className="absolute right-3 top-3">
                      <div className="rounded-full bg-[#2E4B2C] p-1.5 text-white shadow-lg">
                        <CheckCircle2 size={18} />
                      </div>
                    </div>
                  )}
                </div>

                {/* Content */}

                <div className="space-y-2 p-5">
                  <h3 className="line-clamp-2 font-medium text-[#1f2b1d]">
                    {product.name}
                  </h3>

                  <div className="flex items-center justify-between">
                    <span className="text-xs uppercase tracking-wider text-gray-400">
                      {product.active
                        ? "Active"
                        : "Inactive"}
                    </span>

                    {selected && (
                      <span className="rounded-full bg-[#edf6ed] px-3 py-1 text-xs font-medium text-[#2E4B2C]">
                        Selected
                      </span>
                    )}
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      )}
    </section>
  );
}