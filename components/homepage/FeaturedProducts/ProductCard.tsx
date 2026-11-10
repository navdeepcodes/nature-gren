import Image from "next/image";
import Link from "next/link";

import type { HomepageProduct } from "@/lib/homepage/products";

interface ProductCardProps {
  product: HomepageProduct;
}

/** Photo-first product card, shared by the homepage, shop grid and related products. */
export default function ProductCard({
  product,
}: ProductCardProps) {
  return (
    <Link
      href={`/shop/${product.slug}`}
      className="group block rounded-[20px] outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)] focus-visible:ring-offset-4 focus-visible:ring-offset-[var(--background)]"
    >
      <div className="relative aspect-[4/5] overflow-hidden rounded-[18px] bg-[#ece4d7] lg:rounded-[22px]">
        {product.image_url ? (
          <Image
            src={product.image_url}
            alt={product.name}
            fill
            sizes="(max-width:768px) 50vw, (max-width:1280px) 33vw, 25vw"
            className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.05] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-sm text-[var(--text-muted)]">
            Photo coming soon
          </div>
        )}
      </div>

      <div className="px-1 pt-4">
        {product.category && (
          <p className="text-[0.8rem] font-medium text-[#8a7254]">
            {product.category.name}
          </p>
        )}

        <h3 className="mt-1 line-clamp-2 font-serif text-[1.2rem] leading-[1.2] text-[var(--text)] decoration-[var(--accent)] decoration-1 underline-offset-4 group-hover:underline sm:text-[1.35rem]">
          {product.name.trim()}
        </h3>
      </div>
    </Link>
  );
}
