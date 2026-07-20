"use client";

import type { HeroPaginationProps } from "./types";

export default function HeroPagination({
  scrollSnaps,
  selectedIndex,
  onSelect,
}: HeroPaginationProps) {
  if (scrollSnaps.length <= 1) return null;

  return (
    <div
      className="
        absolute
        bottom-6
        left-1/2
        z-30
        flex
        -translate-x-1/2
        gap-3
      "
    >
      {scrollSnaps.map((_, index) => (
        <button
          key={index}
          onClick={() => onSelect(index)}
          aria-label={`Go to slide ${index + 1}`}
          className={`
            h-3
            rounded-full
            transition-all
            duration-300
            ${
              selectedIndex === index
                ? "w-10 bg-white shadow-lg"
                : "w-3 bg-white/50 hover:bg-white/80"
            }
          `}
        />
      ))}
    </div>
  );
}