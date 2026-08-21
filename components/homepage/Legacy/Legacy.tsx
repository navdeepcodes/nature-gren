"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import Container from "@/components/layout/Container";

import Timeline from "./Timeline";

export default function Legacy() {
  return (
    <section className="relative overflow-hidden bg-white py-16 lg:py-36">
      <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[#7D9A65]/10 blur-[120px] lg:h-[600px] lg:w-[600px] lg:blur-[150px]" />

      <Container>
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-[0.24em] text-[#2E4B2C]">
            Our Legacy
          </span>

          <h2 className="mt-4 font-serif text-3xl leading-tight text-[var(--text)] sm:text-4xl lg:mt-6 lg:text-6xl">
            Nearly a Century of
            <span className="block text-[#2E4B2C]">
              Sustainable Craftsmanship
            </span>
          </h2>

          <p className="mt-6 text-base leading-7 text-[var(--text-muted)] lg:mt-8 lg:text-lg lg:leading-8">
            Built on decades of experience, NatureGren combines traditional
            craftsmanship with modern manufacturing to create premium,
            sustainable jute products trusted by businesses worldwide.
          </p>
        </motion.div>

        {/* Desktop Timeline */}

        <div className="mt-16 hidden lg:block">
          <Timeline />
        </div>

        {/* Mobile Compact Version */}

        <div className="mt-10 lg:hidden">
          <div className="rounded-3xl border border-[var(--border)] bg-[#F8F7F3] p-6 text-center shadow-sm">
            <div className="mx-auto grid max-w-xs grid-cols-3 gap-4">
              <div>
                <p className="text-2xl font-bold text-[#2E4B2C]">1930</p>
                <p className="mt-1 text-xs text-[var(--text-muted)]">
                  Heritage Begins
                </p>
              </div>

              <div>
                <p className="text-2xl font-bold text-[#2E4B2C]">100+</p>
                <p className="mt-1 text-xs text-[var(--text-muted)]">
                  Years Experience
                </p>
              </div>

              <div>
                <p className="text-2xl font-bold text-[#2E4B2C]">Global</p>
                <p className="mt-1 text-xs text-[var(--text-muted)]">
                  Manufacturing
                </p>
              </div>
            </div>

            <Link
              href="/about"
              className="mt-6 inline-flex rounded-2xl bg-[#2E4B2C] px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
            >
              Explore Our Story
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}