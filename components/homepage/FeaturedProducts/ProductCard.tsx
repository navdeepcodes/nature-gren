import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";

import type { HomepageProduct } from "@/lib/homepage/products";

interface ProductCardProps {
  product: HomepageProduct;
}

export default function ProductCard({
  product,
}: ProductCardProps) {
  return (
    <Link
      href={`/shop/${product.slug}`}
      className="
        group
        overflow-hidden
        rounded-[30px]
        border
        border-[var(--border)]
        bg-white
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-2xl
      "
    >
      <div className="relative aspect-square overflow-hidden bg-[#f4efe8]">
        {product.image_url ? (
          <Image
            src={product.image_url}
            alt={product.name}
            fill
            sizes="(max-width:768px)100vw,(max-width:1280px)50vw,25vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-sm text-[var(--text-muted)]">
            Product Image
          </div>
        )}

        {product.featured && (
          <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full bg-white px-3 py-2 text-xs font-semibold shadow-lg">
            <Star
              size={14}
              className="fill-[#d4a017] text-[#d4a017]"
            />
            Featured
          </div>
        )}
      </div>

      <div className="space-y-4 p-6">
        {product.category && (
          <span className="inline-flex rounded-full bg-[#f4efe8] px-3 py-1 text-xs font-medium text-[var(--primary)]">
            {product.category.name}
          </span>
        )}

        <h3 className="line-clamp-2 text-2xl font-semibold text-[var(--text)]">
          {product.name}
        </h3>

        <p className="line-clamp-2 text-sm leading-6 text-[var(--text-muted)]">
          {product.description}
        </p>

        <div className="flex items-center gap-2 pt-2 text-sm font-medium text-[var(--primary)] transition-transform group-hover:translate-x-1">
          View Details
          <ArrowRight size={16} />
        </div>
      </div>
    </Link>
  );
}