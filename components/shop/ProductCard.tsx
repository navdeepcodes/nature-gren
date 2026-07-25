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
        rounded-[22px]
        md:rounded-[30px]
        border
        border-[#E7DDD0]
        bg-[#F8F4EE]
        shadow-[0_6px_18px_rgba(101,67,33,0.05)]
        md:shadow-[0_8px_24px_rgba(101,67,33,0.06)]
        transition-all
        duration-300
        hover:-translate-y-1
        md:hover:-translate-y-1.5
        hover:shadow-[0_14px_30px_rgba(101,67,33,0.10)]
        md:hover:shadow-[0_18px_40px_rgba(101,67,33,0.12)]
      "
    >
      {/* Image */}

      <div className="relative aspect-square overflow-hidden bg-[#F3EEE6]">
        {product.image_url ? (
          <Image
            src={product.image_url}
            alt={product.name}
            fill
            sizes="(max-width:640px)50vw,(max-width:768px)50vw,(max-width:1280px)50vw,25vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-xs md:text-sm text-[var(--text-muted)]">
            Product Image
          </div>
        )}

        {product.featured && (
          <div className="absolute left-3 top-3 md:left-4 md:top-4 inline-flex items-center gap-1.5 md:gap-2 rounded-full bg-[#FCFAF7]/95 px-3 py-1.5 md:px-4 md:py-2 text-[10px] md:text-xs font-semibold text-[var(--text)] shadow-lg backdrop-blur">
            <Star
              size={12}
              className="fill-[#C9A227] text-[#C9A227]"
            />
            Featured
          </div>
        )}
      </div>

      {/* Content */}

      <div className="flex flex-col gap-3 md:gap-4 p-4 md:p-6">
        {product.category && (
          <span className="w-fit rounded-full bg-[#EFE6D8] px-2.5 py-1 md:px-3 text-[10px] md:text-xs font-medium text-[var(--primary)]">
            {product.category.name}
          </span>
        )}

        <h3 className="line-clamp-2 font-serif text-[1.15rem] leading-snug md:text-[1.6rem] md:leading-tight text-[var(--text)] transition-colors group-hover:text-[var(--primary)]">
          {product.name}
        </h3>

        <p className="line-clamp-2 text-xs md:text-sm leading-6 md:leading-7 text-[var(--text-muted)]">
          {product.description ||
            "Beautifully handcrafted premium jute product."}
        </p>

        <div className="mt-auto flex items-center justify-between border-t border-[#EDE4D7] pt-4 md:pt-5">
          <span className="text-xs md:text-sm font-medium text-[var(--primary)]">
            Enquire on WhatsApp
          </span>

          <div
            className="
              flex
              h-8
              w-8
              md:h-10
              md:w-10
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
            <ArrowRight size={16} />
          </div>
        </div>
      </div>
    </Link>
  );
}