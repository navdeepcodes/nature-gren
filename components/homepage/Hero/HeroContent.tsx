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
        className="mb-8 inline-flex items-center gap-3 rounded-full border border-[#d8e5d0] bg-white/80 px-5 py-3 shadow-lg backdrop-blur-md"
      >
        <div className="rounded-full bg-[#edf6e8] p-2">
          <Leaf
            size={16}
            className="text-[#3d6b36]"
          />
        </div>

        <span className="text-sm font-semibold tracking-wide text-[#3d6b36]">
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
        className="font-serif text-5xl font-semibold leading-[1.05] text-[var(--text)] md:text-6xl xl:text-7xl"
      >
        {data.title}

        <span className="mt-4 block text-[var(--primary)]">
          {data.accent}
        </span>
      </motion.h1>

      {/* Divider */}

      <motion.div
        initial={{ width: 0 }}
        animate={{ width: 90 }}
        transition={{
          delay: 0.5,
          duration: 0.6,
        }}
        className="mt-8 h-[4px] rounded-full bg-[var(--primary)]"
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
        className="mt-8 max-w-xl text-lg leading-9 text-[var(--text-muted)]"
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
        className="mt-12 flex flex-wrap gap-5"
      >
        <Link
          href="/shop"
          className="
            inline-flex
            h-14
            items-center
            gap-3
            rounded-full
            bg-[var(--primary)]
            px-8
            text-white
            shadow-xl
            transition-all
            duration-300
            hover:-translate-y-1
            hover:shadow-2xl
          "
        >
          {data.primaryButton}

          <ArrowRight size={18} />
        </Link>

        <Link
          href="/about"
          className="
            inline-flex
            h-14
            items-center
            rounded-full
            border
            border-[var(--border)]
            bg-white/80
            px-8
            font-medium
            backdrop-blur-md
            transition-all
            duration-300
            hover:bg-white
            hover:shadow-lg
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
        className="mt-16 flex gap-12"
      >
        <div>
          <h3 className="text-3xl font-bold text-[var(--primary)]">
            100%
          </h3>

          <p className="mt-1 text-sm text-[var(--text-muted)]">
            Natural Jute
          </p>
        </div>

        <div>
          <h3 className="text-3xl font-bold text-[var(--primary)]">
            Eco
          </h3>

          <p className="mt-1 text-sm text-[var(--text-muted)]">
            Friendly
          </p>
        </div>

        <div>
          <h3 className="text-3xl font-bold text-[var(--primary)]">
            Hand
          </h3>

          <p className="mt-1 text-sm text-[var(--text-muted)]">
            Crafted
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}