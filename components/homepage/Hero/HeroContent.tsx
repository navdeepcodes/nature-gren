"use client";

import Link from "next/link";

import { motion } from "framer-motion";
import { ArrowRight, Leaf } from "lucide-react";

interface HeroContentProps {
  data: {
    title: string;
    accent: string;
    description: string;
    primaryButton: string;
    secondaryButton: string;
  };
}

export default function HeroContent({
  data,
}: HeroContentProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: -40,
      }}
      animate={{
        opacity: 1,
        x: 0,
      }}
      transition={{
        duration: 0.7,
      }}
      className="relative max-w-2xl"
    >
      {/* Premium Badge */}

      <motion.div
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 0.2,
        }}
        className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#d8e5d0] bg-white/80 px-4 py-2.5 shadow-lg backdrop-blur-md sm:mb-8 sm:gap-3 sm:px-5 sm:py-3"
      >
        <div className="rounded-full bg-[#edf6e8] p-2">
          <Leaf
            size={16}
            className="text-[#3d6b36]"
          />
        </div>

        <span className="text-xs font-semibold tracking-wide text-[#3d6b36] sm:text-sm">
          Sustainable • Handmade • Premium
        </span>
      </motion.div>

      {/* Heading */}

      <motion.h1
        initial={{
          opacity: 0,
          y: 30,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 0.3,
        }}
        className="font-serif text-[2.7rem] font-semibold leading-[1.08] text-[var(--text)] sm:text-5xl md:text-6xl xl:text-7xl"
      >
        {data.title}

        <span className="mt-3 block text-[var(--primary)] sm:mt-4">
          {data.accent}
        </span>
      </motion.h1>

      {/* Divider */}

      <motion.div
        initial={{ width: 0 }}
        animate={{ width: 80 }}
        transition={{
          delay: 0.5,
          duration: 0.6,
        }}
        className="mt-6 h-[4px] rounded-full bg-[var(--primary)] sm:mt-8"
      />

      {/* Description */}

      <motion.p
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 0.6,
        }}
        className="mt-6 max-w-xl text-base leading-8 text-[var(--text-muted)] sm:mt-8 sm:text-lg sm:leading-9"
      >
        {data.description}
      </motion.p>

      {/* Buttons */}

      <motion.div
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 0.8,
        }}
        className="mt-10 flex flex-wrap gap-3 sm:mt-12 sm:gap-5"
      >
        <Link
          href="/shop"
          className="
            inline-flex
            h-12
            items-center
            gap-2
            rounded-full
            bg-[var(--primary)]
            px-6
            text-sm
            font-medium
            text-white
            shadow-xl
            transition-all
            duration-300
            hover:-translate-y-1
            hover:shadow-2xl
            sm:h-14
            sm:gap-3
            sm:px-8
            sm:text-base
          "
        >
          {data.primaryButton}

          <ArrowRight size={18} />
        </Link>

        <Link
          href="/about"
          className="
            inline-flex
            h-12
            items-center
            rounded-full
            border
            border-[var(--border)]
            bg-white/80
            px-6
            text-sm
            font-medium
            backdrop-blur-md
            transition-all
            duration-300
            hover:bg-white
            hover:shadow-lg
            sm:h-14
            sm:px-8
            sm:text-base
          "
        >
          {data.secondaryButton}
        </Link>
      </motion.div>

      {/* Stats */}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 1,
        }}
        className="mt-12 flex gap-8 sm:mt-16 sm:gap-12"
      >
        <div>
          <h3 className="text-2xl font-bold text-[var(--primary)] sm:text-3xl">
            100%
          </h3>

          <p className="mt-1 text-xs text-[var(--text-muted)] sm:text-sm">
            Natural Jute
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-[var(--primary)] sm:text-3xl">
            Eco
          </h3>

          <p className="mt-1 text-xs text-[var(--text-muted)] sm:text-sm">
            Friendly
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-[var(--primary)] sm:text-3xl">
            Hand
          </h3>

          <p className="mt-1 text-xs text-[var(--text-muted)] sm:text-sm">
            Crafted
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}