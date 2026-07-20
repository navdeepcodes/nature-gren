"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";

import type { HeroNavigationProps } from "./types";

export default function HeroNavigation({
  canScrollPrev,
  canScrollNext,
  onPrev,
  onNext,
}: HeroNavigationProps) {
  return (
    <>
      {/* Previous */}

      <button
        onClick={onPrev}
        disabled={!canScrollPrev}
        aria-label="Previous"
        className="
          absolute
          left-4
          top-1/2
          z-30
          hidden
          h-12
          w-12
          -translate-y-1/2
          items-center
          justify-center
          rounded-full
          bg-white/90
          shadow-xl
          backdrop-blur-xl
          transition
          hover:scale-105
          hover:bg-white
          disabled:cursor-not-allowed
          disabled:opacity-40
          lg:flex
        "
      >
        <ChevronLeft size={22} />
      </button>

      {/* Next */}

      <button
        onClick={onNext}
        disabled={!canScrollNext}
        aria-label="Next"
        className="
          absolute
          right-4
          top-1/2
          z-30
          hidden
          h-12
          w-12
          -translate-y-1/2
          items-center
          justify-center
          rounded-full
          bg-white/90
          shadow-xl
          backdrop-blur-xl
          transition
          hover:scale-105
          hover:bg-white
          disabled:cursor-not-allowed
          disabled:opacity-40
          lg:flex
        "
      >
        <ChevronRight size={22} />
      </button>
    </>
  );
}