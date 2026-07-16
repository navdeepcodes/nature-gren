import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";

import type { ShopProduct } from "@/lib/shop/products";

interface ProductCardProps {
  product: ShopProduct;
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
      {/* Image */}

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
          <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-white/95 px-3 py-2 text-xs font-semibold shadow-lg backdrop-blur">
            <Star
              size={14}
              className="fill-[#d4a017] text-[#d4a017]"
            />
            Featured
          </div>
        )}
      </div>

      {/* Content */}

      <div className="flex flex-col gap-4 p-6">
        {product.category && (
          <span className="w-fit rounded-full bg-[#f4efe8] px-3 py-1 text-xs font-medium text-[var(--primary)]">
            {product.category.name}
          </span>
        )}

        <h3 className="line-clamp-2 text-2xl font-semibold text-[var(--text)] transition-colors group-hover:text-[var(--primary)]">
          {product.name}
        </h3>

        <p className="line-clamp-2 text-sm leading-7 text-[var(--text-muted)]">
          {product.description || "Beautifully handcrafted premium jute product."}
        </p>

        <div className="mt-auto flex items-center justify-between border-t border-[var(--border)] pt-5">
          <span className="text-sm font-medium text-[var(--primary)]">
            Enquire on WhatsApp
          </span>

          <span className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--primary)] transition-transform group-hover:translate-x-1">
            View Product
            <ArrowRight size={16} />
          </span>
        </div>
      </div>
    </Link>
  );
}