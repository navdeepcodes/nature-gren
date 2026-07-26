"use client";

import Link from "next/link";

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
            transition={{ duration: 0.7 }}
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
                className="rounded-2xl bg-[#2E4B2C] px-8 py-4 font-medium text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                Request a Quote
              </Link>

              <Link
                href="/shop"
                className="rounded-2xl border border-[var(--border)] bg-white px-8 py-4 font-medium transition-all duration-300 hover:border-[#2E4B2C] hover:shadow-lg"
              >
                Browse Collection
              </Link>
            </div>
          </motion.div>

          {/* Right */}

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -right-12 -top-12 h-56 w-56 rounded-full bg-[#7D9A65]/20 blur-3xl" />

            <div className="relative overflow-hidden rounded-[36px] border border-[var(--border)] bg-white p-10 shadow-2xl">
              {/* Header */}

              <div className="mb-8 flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#2E4B2C]">
                    Custom Builder
                  </p>

                  <h3 className="mt-2 text-2xl font-semibold text-[var(--text)]">
                    Manufacturing Preview
                  </h3>
                </div>

                <span className="rounded-full bg-[#edf6e8] px-3 py-1 text-xs font-medium text-[#2E4B2C]">
                  Live
                </span>
              </div>

              {/* Floating Bag */}

              <motion.div
                animate={{
                  y: [0, -8, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative mx-auto flex h-[360px] w-[250px] flex-col items-center justify-center rounded-[34px] border-2 border-[#cfae86] bg-gradient-to-b from-[#eadcc7] to-[#d3b58b] shadow-xl"
              >
                {/* Handles */}

                <div className="absolute -top-12 flex gap-20">
                  <div className="h-16 w-4 rounded-full border-[5px] border-[#8d6b44]" />
                  <div className="h-16 w-4 rounded-full border-[5px] border-[#8d6b44]" />
                </div>

                {/* Logo */}

                <div className="rounded-xl bg-white/80 px-6 py-3 shadow-md">
                  <p className="text-center text-lg font-bold tracking-[0.18em] text-[#2E4B2C]">
                    YOUR LOGO
                  </p>
                </div>

                <p className="mt-5 text-sm text-[#6e5537]">
                  Premium Jute Collection
                </p>

                {/* Chips */}

                <div className="mt-8 flex flex-wrap justify-center gap-2 px-5">
                  {[
                    "Custom Print",
                    "Cotton Handles",
                    "Lamination",
                    "Any Size",
                  ].map((item) => (
                    <span
                      key={item}
                      className="rounded-full bg-white/75 px-3 py-1 text-xs text-[#2E4B2C] shadow-sm"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>

              {/* Configuration */}

              <div className="mt-10 grid grid-cols-3 gap-3">
                {[
                  ["Material", "Premium"],
                  ["Printing", "Custom"],
                  ["MOQ", "Bulk"],
                ].map(([title, value]) => (
                  <div
                    key={title}
                    className="rounded-2xl bg-[#f8f5ef] p-4"
                  >
                    <p className="text-xs text-[var(--text-muted)]">
                      {title}
                    </p>

                    <p className="mt-2 font-semibold text-[#2E4B2C]">
                      {value}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Heritage Card */}

            <motion.div
              animate={{
                y: [0, -5, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -bottom-6 -left-6 rounded-3xl border border-[var(--border)] bg-white/95 p-6 shadow-xl backdrop-blur"
            >
              <p className="text-3xl font-bold text-[#2E4B2C]">
                100+
              </p>

              <p className="mt-1 text-sm text-[var(--text-muted)]">
                Years of Manufacturing Heritage
              </p>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}