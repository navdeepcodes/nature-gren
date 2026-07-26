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
        block
        overflow-hidden
        rounded-[30px]
        border
        border-[var(--border)]
        bg-white
        shadow-[0_8px_24px_rgba(0,0,0,0.05)]
        transition-all
        duration-300
        hover:-translate-y-1.5
        hover:border-[var(--primary)]
        hover:shadow-[0_20px_50px_rgba(46,75,44,0.12)]
      "
    >
      {/* Image */}

      <div className="relative aspect-[1/1] overflow-hidden bg-[#f5f1eb]">
        {product.image_url ? (
          <Image
            src={product.image_url}
            alt={product.name}
            fill
            sizes="(max-width:640px)50vw,(max-width:1024px)50vw,25vw"
            className="
              object-cover
              transition-all
              duration-700
              group-hover:scale-[1.04]
              group-hover:brightness-105
            "
          />
        ) : (
          <div className="flex h-full items-center justify-center text-sm text-[var(--text-muted)]">
            Product Image
          </div>
        )}

        {product.featured && (
          <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full bg-white/95 px-4 py-2 text-xs font-semibold shadow-md backdrop-blur">
            <Star
              size={14}
              className="fill-[#d4a017] text-[#d4a017]"
            />
            Featured
          </div>
        )}
      </div>

      {/* Content */}

      <div className="space-y-4 p-6">
        {product.category && (
          <span className="inline-flex rounded-full bg-[#f4efe8] px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[var(--primary)]">
            {product.category.name}
          </span>
        )}

        <h3 className="line-clamp-2 text-2xl font-semibold leading-tight text-[var(--text)] transition-colors duration-300 group-hover:text-[var(--primary)]">
          {product.name}
        </h3>

        <p className="line-clamp-3 text-sm leading-7 text-[var(--text-muted)]">
          {product.description}
        </p>

        <div className="flex items-center justify-between pt-2">
          <span className="relative inline-flex items-center gap-2 text-sm font-semibold text-[var(--primary)]">
            View Details

            <ArrowRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />

            <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-[var(--primary)] transition-all duration-300 group-hover:w-full" />
          </span>
        </div>
      </div>
    </Link>
  );
}