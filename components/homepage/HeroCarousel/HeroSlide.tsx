"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import type { HeroSlideProps } from "./types";

export default function HeroSlide({
  image,
  index,
}: HeroSlideProps) {
  if (!image) {
    return (
      <div
        className="
          flex
          aspect-[4/5]
          items-center
          justify-center
          bg-[#efe7dc]
          text-lg
          font-medium
          text-[#6d5b47]
        "
      >
        No Image
      </div>
    );
  }

  return (
    <motion.div
      whileHover={{
        scale: 1.015,
      }}
      transition={{
        duration: 0.35,
      }}
      className="relative aspect-[4/5] w-full overflow-hidden"
    >
      <Image
        src={image}
        alt={`NatureGren ${index + 1}`}
        fill
        priority={index === 0}
        sizes="(max-width: 1024px) 100vw, 560px"
        className="
          object-cover
          select-none
        "
        draggable={false}
      />
    </motion.div>
  );
}