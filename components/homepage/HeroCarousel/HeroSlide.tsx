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
        No Media
      </div>
    );
  }

  const isVideo = /\.(mp4|webm|mov|ogg)$/i.test(image);
  const isFirst = index === 0;

  return (
    <motion.div
      whileHover={{ scale: 1.015 }}
      transition={{ duration: 0.35 }}
      className="relative aspect-[4/5] w-full overflow-hidden"
    >
      {isVideo ? (
        <video
          src={image}
          autoPlay={isFirst}
          muted
          loop
          playsInline
          preload={isFirst ? "auto" : "metadata"}
          controls={false}
          className="h-full w-full object-cover select-none"
        />
      ) : (
        <Image
          src={image}
          alt={`NatureGren ${index + 1}`}
          fill
          priority={isFirst}
          fetchPriority={isFirst ? "high" : "auto"}
          loading={isFirst ? "eager" : "lazy"}
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 60vw, 560px"
          className="object-cover select-none"
          draggable={false}
        />
      )}
    </motion.div>
  );
}