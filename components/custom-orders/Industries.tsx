"use client";

import { motion } from "framer-motion";
import Container from "@/components/layout/Container";

import {
  ShoppingBag,
  Gift,
  Hotel,
  Store,
  BriefcaseBusiness,
  Globe,
} from "lucide-react";

const industries = [
  {
    icon: ShoppingBag,
    title: "Retail Brands",
    description:
      "Premium reusable packaging for fashion, lifestyle, grocery, and specialty retail stores.",
  },
  {
    icon: Gift,
    title: "Corporate Gifting",
    description:
      "Elegant branded bags for employee appreciation, events, conferences, and client gifting.",
  },
  {
    icon: Hotel,
    title: "Hospitality",
    description:
      "Custom bags for hotels, resorts, spas, and luxury hospitality experiences.",
  },
  {
    icon: Store,
    title: "Events & Promotions",
    description:
      "Trade shows, exhibitions, product launches, and promotional campaigns made memorable.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Wholesale Supply",
    description:
      "Reliable bulk manufacturing for distributors, resellers, and large organizations.",
  },
  {
    icon: Globe,
    title: "Global Export",
    description:
      "Export-ready manufacturing with consistent quality and dependable worldwide delivery.",
  },
];

export default function Industries() {
  return (
    <section className="py-24 lg:py-32">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-[#2E4B2C]">
            Industries We Serve
          </span>

          <h2 className="mt-5 font-serif text-4xl text-[var(--text)] lg:text-6xl">
            Solutions for
            <span className="block text-[#2E4B2C]">
              Every Business
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-[var(--text-muted)]">
            Every industry has unique branding and packaging requirements.
            NatureGren partners with businesses across the globe to create
            premium sustainable products that leave a lasting impression.
          </p>
        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {industries.map((industry, index) => {
            const Icon = industry.icon;

            return (
              <motion.div
                key={industry.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                className="group rounded-[32px] border border-[var(--border)] bg-white p-8 transition-all duration-300 hover:-translate-y-2 hover:border-[#2E4B2C]/20 hover:shadow-2xl"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#2E4B2C]/10 transition group-hover:bg-[#2E4B2C]">
                  <Icon
                    size={30}
                    className="text-[#2E4B2C] transition group-hover:text-white"
                  />
                </div>

                <h3 className="mt-8 text-2xl font-semibold text-[var(--text)]">
                  {industry.title}
                </h3>

                <p className="mt-4 leading-8 text-[var(--text-muted)]">
                  {industry.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}