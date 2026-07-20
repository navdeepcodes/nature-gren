"use client";

import { motion } from "framer-motion";

import HeroAmbientGlow from "./HeroAmbientGlow";
import HeroBadges from "./HeroBadges";
import HeroNavigation from "./HeroNavigation";
import HeroPagination from "./HeroPagination";
import HeroSlide from "./HeroSlide";

import useHeroCarousel from "./useHeroCarousel";

import type { HeroCarouselProps } from "./types";

export default function HeroCarousel({
  images,
}: HeroCarouselProps) {
  const {
    emblaRef,

    selectedIndex,
    scrollSnaps,

    canScrollPrev,
    canScrollNext,

    scrollPrev,
    scrollNext,
    scrollTo,
  } = useHeroCarousel();

  const slides = images.length ? images : [null];

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 40,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.8,
      }}
      className="relative w-full"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "ArrowLeft") scrollPrev();

        if (e.key === "ArrowRight") scrollNext();
      }}
    >
      <HeroAmbientGlow />

      <HeroBadges />

      <div className="relative">
        <div
          ref={emblaRef}
          className="
            overflow-hidden
            rounded-[36px]
            border
            border-white/70
            bg-white
            shadow-[0_30px_70px_rgba(0,0,0,0.12)]
            aspect-[4/5]
            max-h-[680px]
          "
        >
          <div className="flex">
            {slides.map((image, index) => (
              <div
                key={index}
                className="min-w-0 shrink-0 grow-0 basis-full"
              >
                <HeroSlide
                  image={image}
                  index={index}
                />
              </div>
            ))}
          </div>
        </div>

        <HeroNavigation
          canScrollPrev={canScrollPrev}
          canScrollNext={canScrollNext}
          onPrev={scrollPrev}
          onNext={scrollNext}
        />

        <HeroPagination
          scrollSnaps={scrollSnaps}
          selectedIndex={selectedIndex}
          onSelect={scrollTo}
        />
      </div>
    </motion.div>
  );
}