"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

import Container from "@/components/layout/Container";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[var(--background)] py-28 lg:py-36">
      {/* Background Glow */}

      <div className="absolute left-1/2 top-0 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-[#7D9A65]/10 blur-[140px]" />

      <Container>
        <div className="grid items-center gap-20 lg:grid-cols-2">
          {/* Left */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .7 }}
          >
            <span className="inline-flex rounded-full border border-[#2E4B2C]/20 bg-[#2E4B2C]/5 px-4 py-2 text-sm font-medium text-[#2E4B2C]">
              Custom Manufacturing
            </span>

            <h1 className="mt-8 font-serif text-5xl leading-tight text-[var(--text)] lg:text-7xl">
              Custom Jute Bags
              <br />
              Built For
              <span className="block text-[#2E4B2C]">
                Your Brand
              </span>
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-8 text-[var(--text-muted)]">
              From corporate gifting and retail packaging to promotional
              campaigns and wholesale orders, we design and manufacture premium
              sustainable jute bags tailored to your business.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="rounded-2xl bg-[#2E4B2C] px-8 py-4 font-medium text-white transition hover:-translate-y-1 hover:shadow-xl"
              >
                Request a Quote
              </Link>

              <Link
                href="/shop"
                className="rounded-2xl border border-[var(--border)] bg-white px-8 py-4 font-medium transition hover:border-[#2E4B2C]"
              >
                Browse Collection
              </Link>
            </div>
          </motion.div>

          {/* Right */}

          <motion.div
            initial={{ opacity: 0, scale: .95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: .8 }}
            className="relative"
          >
            <div className="absolute -right-10 -top-10 h-48 w-48 rounded-full bg-[#7D9A65]/20 blur-3xl" />

            <div className="relative aspect-[4/5] overflow-hidden rounded-[36px] border border-[var(--border)] bg-white shadow-2xl">
              <Image
                src="/images/custom-orders/hero.jpg"
                alt="Custom NatureGren Jute Bags"
                fill
                className="object-cover"
                priority
              />
            </div>

            <div className="absolute -bottom-6 -left-6 rounded-3xl border border-[var(--border)] bg-white/95 p-6 shadow-xl backdrop-blur">
              <p className="text-3xl font-bold text-[#2E4B2C]">
                100+
              </p>

              <p className="mt-1 text-sm text-[var(--text-muted)]">
                Years of Manufacturing Heritage
              </p>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}