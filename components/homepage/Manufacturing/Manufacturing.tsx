"use client";

import { motion } from "framer-motion";

import Container from "@/components/layout/Container";

import ManufacturingCard from "./ManufacturingCard";
import { manufacturingData } from "./manufacturingData";

export default function Manufacturing() {
  return (
    <section className="relative overflow-hidden bg-[#f8f5ef] py-28 lg:py-36">
      {/* Ambient Glow */}

      <div className="absolute left-1/2 top-0 h-[650px] w-[650px] -translate-x-1/2 rounded-full bg-[#7D9A65]/10 blur-[150px]" />

      <Container>
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-[0.28em] text-[#2E4B2C]">
            Manufacturing Capabilities
          </span>

          <h2 className="mt-6 font-serif text-4xl leading-tight text-[var(--text)] lg:text-6xl">
            Crafted Around
            <span className="block text-[#2E4B2C]">
              Your Vision
            </span>
          </h2>

          <p className="mt-8 text-lg leading-8 text-[var(--text-muted)]">
            From concept to production, NatureGren offers complete
            customization to help businesses create sustainable products that
            reflect their identity and meet their exact requirements.
          </p>
        </motion.div>

        <div className="mt-24 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {manufacturingData.map((item, index) => (
            <ManufacturingCard
              key={item.title}
              {...item}
              index={index}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-24 rounded-[40px] bg-[#1f2b1d] p-10 lg:p-16 text-white"
        >
          <div className="grid gap-10 lg:grid-cols-[1.3fr_.7fr] lg:items-center">
            <div>
              <span className="text-sm uppercase tracking-[0.25em] text-[#c9d9bb]">
                End-to-End Manufacturing
              </span>

              <h3 className="mt-5 font-serif text-4xl leading-tight lg:text-5xl">
                Designed for
                <br />
                Businesses That Demand More
              </h3>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/75">
                Whether you require custom retail packaging, promotional
                merchandise, or large-scale wholesale manufacturing, every
                NatureGren product is tailored with precision, premium
                craftsmanship, and sustainable materials.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-5">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
                <p className="text-4xl font-bold">OEM</p>
                <p className="mt-2 text-white/70">
                  Manufacturing
                </p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
                <p className="text-4xl font-bold">Bulk</p>
                <p className="mt-2 text-white/70">
                  Orders
                </p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
                <p className="text-4xl font-bold">100%</p>
                <p className="mt-2 text-white/70">
                  Customizable
                </p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
                <p className="text-4xl font-bold">Global</p>
                <p className="mt-2 text-white/70">
                  Delivery
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}