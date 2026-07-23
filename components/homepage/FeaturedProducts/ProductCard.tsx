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
        rounded-[22px]
        lg:rounded-[30px]
        border
        border-[var(--border)]
        bg-white
        shadow-[0_6px_18px_rgba(101,67,33,0.05)]
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-[0_18px_40px_rgba(101,67,33,0.12)]
      "
    >
      <div className="relative aspect-square overflow-hidden bg-[#f4efe8]">
        {product.image_url ? (
          <Image
            src={product.image_url}
            alt={product.name}
            fill
            sizes="(max-width:640px)50vw,(max-width:1024px)50vw,25vw"
            className="
              object-cover
              transition-transform
              duration-700
              group-hover:scale-105
            "
          />
        ) : (
          <div className="flex h-full items-center justify-center text-xs text-[var(--text-muted)] md:text-sm">
            Product Image
          </div>
        )}

        {product.featured && (
          <div
            className="
              absolute
              left-3
              top-3
              flex
              items-center
              gap-1.5
              rounded-full
              bg-white/95
              px-2.5
              py-1.5
              text-[10px]
              font-semibold
              shadow-md
              backdrop-blur
              md:left-4
              md:top-4
              md:px-3
              md:py-2
              md:text-xs
            "
          >
            <Star
              size={12}
              className="fill-[#d4a017] text-[#d4a017] md:h-[14px] md:w-[14px]"
            />
            Featured
          </div>
        )}
      </div>

      <div
        className="
          space-y-3
          p-3
          sm:p-4
          lg:space-y-4
          lg:p-6
        "
      >
        {product.category && (
          <span
            className="
              inline-flex
              rounded-full
              bg-[#f4efe8]
              px-2.5
              py-1
              text-[10px]
              font-medium
              text-[var(--primary)]
              sm:px-3
              sm:text-xs
            "
          >
            {product.category.name}
          </span>
        )}

        <h3
          className="
            line-clamp-2
            font-semibold
            leading-snug
            text-[1rem]
            text-[var(--text)]
            sm:text-[1.15rem]
            lg:text-2xl
          "
        >
          {product.name}
        </h3>

        <p
          className="
            line-clamp-2
            text-xs
            leading-5
            text-[var(--text-muted)]
            sm:text-sm
            sm:leading-6
          "
        >
          {product.description}
        </p>

        <div
          className="
            flex
            items-center
            gap-1.5
            pt-1
            text-xs
            font-medium
            text-[var(--primary)]
            transition-transform
            duration-300
            group-hover:translate-x-1
            sm:gap-2
            sm:pt-2
            sm:text-sm
          "
        >
          View Details
          <ArrowRight
            size={14}
            className="lg:h-4 lg:w-4"
          />
        </div>
      </div>
    </Link>
  );
}