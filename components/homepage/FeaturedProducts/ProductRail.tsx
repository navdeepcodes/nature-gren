"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import type { HomepageProduct } from "@/lib/homepage/products";
import ProductCard from "./ProductCard";

/** Horizontally scrolling row of product cards with snap points and arrow controls. */
export default function ProductRail({
  products,
}: {
  products: HomepageProduct[];
}) {
  const railRef = useRef<HTMLUListElement>(null);
  const [edges, setEdges] = useState({ start: true, end: false });

  const updateEdges = useCallback(() => {
    const rail = railRef.current;
    if (!rail) return;
    setEdges({
      start: rail.scrollLeft <= 4,
      end: rail.scrollLeft + rail.clientWidth >= rail.scrollWidth - 4,
    });
  }, []);

  useEffect(() => {
    const rail = railRef.current;
    if (!rail) return;
    const frame = requestAnimationFrame(updateEdges);
    rail.addEventListener("scroll", updateEdges, { passive: true });
    window.addEventListener("resize", updateEdges);
    return () => {
      cancelAnimationFrame(frame);
      rail.removeEventListener("scroll", updateEdges);
      window.removeEventListener("resize", updateEdges);
    };
  }, [updateEdges]);

  function scrollByPage(direction: 1 | -1) {
    const rail = railRef.current;
    if (!rail) return;
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    rail.scrollBy({
      left: direction * rail.clientWidth * 0.9,
      behavior: reduceMotion ? "auto" : "smooth",
    });
  }

  const arrowClass =
    "flex h-12 w-12 items-center justify-center rounded-full border border-[var(--border)] bg-white text-[var(--text)] transition-colors hover:border-[var(--primary)] hover:bg-[var(--primary)] hover:text-white disabled:pointer-events-none disabled:opacity-35 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--primary)]";

  return (
    <div>
      <ul
        ref={railRef}
        aria-label="Best sellers"
        className="-mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-px-4 px-4 pb-2 [scrollbar-width:none] sm:-mx-6 sm:scroll-px-6 sm:px-6 lg:mx-0 lg:scroll-px-0 lg:gap-6 lg:px-0 [&::-webkit-scrollbar]:hidden"
      >
        {products.map((product) => (
          <li
            key={product.id}
            className="w-[68%] shrink-0 snap-start sm:w-[42%] md:w-[31%] lg:w-[calc((100%-4.5rem)/4)]"
          >
            <ProductCard product={product} />
          </li>
        ))}
      </ul>

      <div className="mt-8 hidden items-center gap-3 md:flex">
        <button
          type="button"
          onClick={() => scrollByPage(-1)}
          disabled={edges.start}
          aria-label="Previous products"
          className={arrowClass}
        >
          <ChevronLeft size={20} />
        </button>
        <button
          type="button"
          onClick={() => scrollByPage(1)}
          disabled={edges.end}
          aria-label="Next products"
          className={arrowClass}
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
}
