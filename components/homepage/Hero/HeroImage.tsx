"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Leaf, Sparkles } from "lucide-react";

interface HeroImageProps {
  image: string | null;
}

export default function HeroImage({
  image,
}: HeroImageProps) {
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
      className="relative"
    >
      {/* Ambient Light */}

      <div
        className="
          absolute
          left-1/2
          top-1/2
          -z-10
          h-[620px]
          w-[620px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-[#d8c6a7]/30
          blur-[120px]
        "
      />

      {/* Floating Eco Badge */}

      <motion.div
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 4,
          ease: "easeInOut",
        }}
        className="
          absolute
          right-8
          top-8
          z-20
          flex
          items-center
          gap-3
          rounded-full
          bg-white/90
          px-5
          py-3
          shadow-xl
          backdrop-blur-xl
        "
      >
        <div className="rounded-full bg-[#eef7ea] p-2">
          <Leaf
            size={18}
            className="text-[#507b44]"
          />
        </div>

        <div>
          <p className="text-[11px] uppercase tracking-[0.18em] text-gray-500">
            Eco Friendly
          </p>

          <p className="font-semibold">
            100% Jute
          </p>
        </div>
      </motion.div>

      {/* Handmade Badge */}

      <motion.div
        animate={{
          y: [0, 8, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 5,
          ease: "easeInOut",
        }}
        className="
          absolute
          -left-6
          bottom-12
          z-20
          flex
          items-center
          gap-3
          rounded-full
          bg-white/90
          px-5
          py-3
          shadow-xl
          backdrop-blur-xl
        "
      >
        <Sparkles
          size={18}
          className="text-[#b88b4a]"
        />

        <span className="font-medium">
          Handmade
        </span>
      </motion.div>

      {/* Image */}

      <motion.div
        whileHover={{
          y: -6,
          scale: 1.015,
        }}
        transition={{
          duration: .35,
        }}
        className="
          overflow-hidden
          rounded-[42px]
          border
          border-white/70
          bg-white
          shadow-[0_35px_80px_rgba(0,0,0,0.12)]
        "
      >
        {image ? (
          <Image
            src={image}
            alt="NatureGren"
            width={720}
            height={860}
            priority
            className="
              h-auto
              w-full
              object-cover
            "
          />
        ) : (
          <div className="flex aspect-[4/5] w-[560px] items-center justify-center bg-[#efe7dc]">
            No Image
          </div>
        )}
      </motion.div>
    </motion.div>
  );
}