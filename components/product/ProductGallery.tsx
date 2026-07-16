"use client";

import Image from "next/image";

interface ProductGalleryProps {
  imageUrl: string | null;
  title: string;
}

export default function ProductGallery({
  imageUrl,
  title,
}: ProductGalleryProps) {
  return (
    <div className="overflow-hidden rounded-[36px] border border-[var(--border)] bg-white shadow-sm">
      <div className="relative aspect-square overflow-hidden bg-[#f7f3ec]">
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={title}
            fill
            priority
            className="
              object-cover
              transition-transform
              duration-700
              hover:scale-105
            "
          />
        ) : (
          <div className="flex h-full items-center justify-center text-[var(--text-muted)]">
            Product Image
          </div>
        )}
      </div>
    </div>
  );
}