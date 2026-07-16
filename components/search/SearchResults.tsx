"use client";

import Image from "next/image";
import Link from "next/link";

import type { SearchProduct } from "@/lib/search/products";

interface Props {
  products: SearchProduct[];
  onClose: () => void;
}

export default function SearchResults({
  products,
  onClose,
}: Props) {
  if (products.length === 0) {
    return (
      <div className="py-12 text-center text-gray-500">
        No products found.
      </div>
    );
  }

  return (
    <div className="mt-6 space-y-3">
      {products.map((product) => (
        <Link
          key={product.id}
          href={`/shop/${product.slug}`}
          onClick={onClose}
          className="
            flex
            items-center
            gap-4
            rounded-2xl
            p-3
            transition
            hover:bg-[#f7f4ef]
          "
        >
          <div className="relative h-16 w-16 overflow-hidden rounded-xl bg-[#f4efe8]">
            {product.image_url && (
              <Image
                src={product.image_url}
                alt={product.name}
                fill
                className="object-cover"
              />
            )}
          </div>

          <div>
            <h3 className="font-semibold">
              {product.name}
            </h3>

            <p className="text-sm text-[var(--primary)]">
              View Product
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
}