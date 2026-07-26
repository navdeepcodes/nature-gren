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
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.65 }}
      className="relative max-w-2xl"
    >
      {/* Premium Badge */}

      <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-[#d8e5d0] bg-white/85 px-5 py-3 shadow-md backdrop-blur-sm">
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#edf6e8]">
          <Leaf
            size={16}
            className="text-[var(--primary)]"
          />
        </div>

        <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--primary)] sm:text-sm">
          Sustainable • Handmade • Premium
        </span>
      </div>

      {/* Heading */}

      <h1 className="font-serif text-[2.8rem] font-semibold leading-[1.02] tracking-[-0.03em] text-[var(--text)] sm:text-5xl md:text-6xl xl:text-7xl">
        {data.title}

        <span className="mt-4 block text-[var(--primary)]">
          {data.accent}
        </span>
      </h1>

      {/* Accent Line */}

      <div className="mt-8 h-1 w-24 rounded-full bg-[var(--primary)]" />

      {/* Description */}

      <p className="mt-8 max-w-xl text-base leading-8 text-[var(--text-muted)] sm:text-lg sm:leading-9">
        {data.description}
      </p>

      {/* Buttons */}

      <div className="mt-12 flex flex-wrap gap-4">
        <Link
          href="/shop"
          className="
            group
            inline-flex
            h-14
            items-center
            gap-3
            rounded-full
            bg-[var(--primary)]
            px-8
            text-base
            font-medium
            text-white
            shadow-lg
            transition-all
            duration-300
            hover:-translate-y-1
            hover:shadow-xl
          "
        >
          {data.primaryButton}

          <ArrowRight
            size={18}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
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
            text-base
            font-medium
            backdrop-blur-sm
            transition-all
            duration-300
            hover:border-[var(--primary)]
            hover:bg-white
            hover:text-[var(--primary)]
            hover:shadow-md
          "
        >
          {data.secondaryButton}
        </Link>
      </div>

      {/* Trust Metrics */}

      <div className="mt-16 grid grid-cols-3 gap-6 border-t border-[var(--border)] pt-8">
        <div>
          <h3 className="text-3xl font-bold text-[var(--primary)]">
            100%
          </h3>

          <p className="mt-2 text-sm text-[var(--text-muted)]">
            Natural Jute
          </p>
        </div>

        <div>
          <h3 className="text-3xl font-bold text-[var(--primary)]">
            Eco
          </h3>

          <p className="mt-2 text-sm text-[var(--text-muted)]">
            Friendly
          </p>
        </div>

        <div>
          <h3 className="text-3xl font-bold text-[var(--primary)]">
            Hand
          </h3>

          <p className="mt-2 text-sm text-[var(--text-muted)]">
            Crafted
          </p>
        </div>
      </div>
    </motion.div>
  );
}