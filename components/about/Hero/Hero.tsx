"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

import Container from "@/components/layout/Container";
import { About } from "@/lib/cms/about";

interface HeroProps {
  about: About;
}

export default function Hero({ about }: HeroProps) {
  return (
    <section className="relative overflow-hidden pt-32 pb-24">
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* Left */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="rounded-full bg-[#edf6e8] px-5 py-2 text-sm font-semibold text-[#3d6b36]">
              ABOUT NATUREGREN
            </span>

            <h1 className="mt-8 font-serif text-5xl leading-tight text-[var(--text)] md:text-6xl xl:text-7xl whitespace-pre-line">
              {about.hero_title}
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-9 text-[var(--text-muted)]">
              {about.hero_subtitle}
            </p>

            <div className="mt-12 flex gap-5">
              <Link
                href="/shop"
                className="inline-flex h-14 items-center rounded-full bg-[var(--primary)] px-8 text-white transition hover:scale-[1.02]"
              >
                Explore Collection
              </Link>

              <Link
                href="/contact"
                className="inline-flex h-14 items-center rounded-full border border-[var(--border)] bg-white px-8"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>

          {/* Right */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-[36px] shadow-2xl">
              <Image
                src={about.hero_image || "/images/about/about-hero.jpg"}
                alt="NatureGren"
                fill
                className="object-cover"
                priority
              />
            </div>

            <div className="absolute -bottom-8 -left-8 rounded-[28px] bg-white p-8 shadow-xl">
              <h3 className="text-4xl font-bold text-[var(--primary)]">
                100%
              </h3>

              <p className="mt-2 text-sm text-[var(--text-muted)]">
                Natural Jute Products
              </p>
            </div>
          </motion.div>

        </div>
      </Container>
    </section>
  );
}