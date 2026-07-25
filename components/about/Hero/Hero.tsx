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
    <section className="relative overflow-hidden pt-24 pb-16 md:pt-28 md:pb-20 lg:pt-32 lg:pb-24">
      <Container>
        <div className="grid items-center gap-10 md:gap-12 lg:gap-16 lg:grid-cols-2">

          {/* Left */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-flex rounded-full bg-[#edf6e8] px-4 py-1.5 text-xs font-semibold tracking-[0.12em] text-[#3d6b36] sm:px-5 sm:py-2 sm:text-sm">
              ABOUT NATUREGREN
            </span>

            <h1 className="mt-6 font-serif text-[2.7rem] leading-[1.08] text-[var(--text)] sm:text-5xl md:text-6xl xl:text-7xl whitespace-pre-line">
              {about.hero_title}
            </h1>

            <p className="mt-6 max-w-xl text-base leading-7 text-[var(--text-muted)] md:text-lg md:leading-9">
              {about.hero_subtitle}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:gap-5">
              <Link
                href="/shop"
                className="inline-flex h-12 items-center justify-center rounded-full bg-[var(--primary)] px-6 text-sm font-medium text-white transition hover:scale-[1.02] md:h-14 md:px-8 md:text-base"
              >
                Explore Collection
              </Link>

              <Link
                href="/contact"
                className="inline-flex h-12 items-center justify-center rounded-full border border-[var(--border)] bg-white px-6 text-sm font-medium transition md:h-14 md:px-8 md:text-base"
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
            <div className="relative aspect-[16/10] overflow-hidden rounded-[28px] md:aspect-[4/5] md:rounded-[36px] shadow-2xl">
              <Image
                src={about.hero_image || "/images/about/about-hero.jpg"}
                alt="NatureGren"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

            <div className="absolute -bottom-5 -left-5 rounded-[22px] bg-white p-5 shadow-xl md:-bottom-8 md:-left-8 md:rounded-[28px] md:p-8">
              <h3 className="text-3xl font-bold text-[var(--primary)] md:text-4xl">
                100%
              </h3>

              <p className="mt-1 text-xs text-[var(--text-muted)] md:mt-2 md:text-sm">
                Natural Jute Products
              </p>
            </div>
          </motion.div>

        </div>
      </Container>
    </section>
  );
}