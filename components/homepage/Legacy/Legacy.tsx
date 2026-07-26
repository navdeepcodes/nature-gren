"use client";

import { motion } from "framer-motion";

import Container from "@/components/layout/Container";

import Timeline from "./Timeline";

export default function Legacy() {
  return (
    <section className="relative overflow-hidden bg-white py-28 lg:py-36">
      <div className="absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-[#7D9A65]/10 blur-[150px]" />

      <Container>
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-[0.28em] text-[#2E4B2C]">
            Our Legacy
          </span>

          <h2 className="mt-6 font-serif text-4xl leading-tight text-[var(--text)] lg:text-6xl">
            Nearly a Century of
            <span className="block text-[#2E4B2C]">
              Sustainable Craftsmanship
            </span>
          </h2>

          <p className="mt-8 text-lg leading-8 text-[var(--text-muted)]">
            Built on decades of experience, NatureGren continues to combine
            traditional craftsmanship with modern manufacturing to create
            premium, sustainable jute products for businesses worldwide.
          </p>
        </motion.div>

        <Timeline />
      </Container>
    </section>
  );
}