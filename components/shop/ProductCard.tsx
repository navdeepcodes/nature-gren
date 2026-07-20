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
        border-[#E7DDD0]
        bg-[#F8F4EE]
        shadow-[0_8px_24px_rgba(101,67,33,0.06)]
        transition-all
        duration-300
        hover:-translate-y-1.5
        hover:shadow-[0_18px_40px_rgba(101,67,33,0.12)]
      "
    >
      {/* Image */}

      <div className="relative aspect-square overflow-hidden bg-[#F3EEE6]">
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
          <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-[#FCFAF7]/95 px-4 py-2 text-xs font-semibold text-[var(--text)] shadow-lg backdrop-blur">
            <Star
              size={13}
              className="fill-[#C9A227] text-[#C9A227]"
            />
            Featured
          </div>
        )}
      </div>

      {/* Content */}

      <div className="flex flex-col gap-4 p-6">
        {product.category && (
          <span className="w-fit rounded-full bg-[#EFE6D8] px-3 py-1 text-xs font-medium text-[var(--primary)]">
            {product.category.name}
          </span>
        )}

        <h3 className="line-clamp-2 font-serif text-[1.6rem] leading-tight text-[var(--text)] transition-colors group-hover:text-[var(--primary)]">
          {product.name}
        </h3>

        <p className="line-clamp-2 text-sm leading-7 text-[var(--text-muted)]">
          {product.description ||
            "Beautifully handcrafted premium jute product."}
        </p>

        <div className="mt-auto flex items-center justify-between border-t border-[#EDE4D7] pt-5">
          <span className="text-sm font-medium text-[var(--primary)]">
            Enquire on WhatsApp
          </span>

          <div
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-full
              bg-[#EFE6D8]
              text-[var(--text)]
              transition-all
              duration-300
              group-hover:bg-[var(--primary)]
              group-hover:text-white
              group-hover:translate-x-1
            "
          >
            <ArrowRight size={18} />
          </div>
        </div>
      </div>
    </Link>
  );
}