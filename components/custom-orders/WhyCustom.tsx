"use client";

import { motion } from "framer-motion";
import Container from "@/components/layout/Container";

import {
  Award,
  Factory,
  Globe2,
  Leaf,
  Palette,
  ShieldCheck,
} from "lucide-react";

const features = [
  {
    icon: Award,
    title: "Premium Craftsmanship",
    description:
      "Expertly handcrafted with attention to detail for exceptional quality and durability.",
  },
  {
    icon: Factory,
    title: "Bulk Manufacturing",
    description:
      "Scalable production capacity for wholesale, retail chains, and corporate orders.",
  },
  {
    icon: Palette,
    title: "Fully Customizable",
    description:
      "Choose your preferred size, colors, printing, handles, pockets, and finishes.",
  },
  {
    icon: Leaf,
    title: "Sustainably Made",
    description:
      "Eco-conscious materials that replace single-use plastics without compromising quality.",
  },
  {
    icon: Globe2,
    title: "Worldwide Supply",
    description:
      "Serving international businesses with reliable export-ready manufacturing.",
  },
  {
    icon: ShieldCheck,
    title: "Reliable Partnership",
    description:
      "Dedicated support from concept to final delivery with consistent product quality.",
  },
];

export default function WhyCustom() {
  return (
    <section className="py-24 lg:py-32">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-[#2E4B2C]">
            Why NatureGren
          </span>

          <h2 className="mt-5 font-serif text-4xl leading-tight text-[var(--text)] lg:text-6xl">
            Built for Businesses That
            <span className="block text-[#2E4B2C]">
              Value Quality
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-[var(--text-muted)]">
            Whether you're creating premium retail packaging, promotional
            merchandise, or corporate gifting solutions, we manufacture custom
            jute products designed around your brand.
          </p>
        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.08,
                  duration: 0.5,
                }}
                className="group rounded-[30px] border border-[var(--border)] bg-white p-8 transition-all duration-300 hover:-translate-y-2 hover:border-[#2E4B2C]/20 hover:shadow-2xl"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#2E4B2C]/10 transition group-hover:bg-[#2E4B2C]">
                  <Icon
                    size={30}
                    className="text-[#2E4B2C] transition group-hover:text-white"
                  />
                </div>

                <h3 className="mt-8 text-2xl font-semibold text-[var(--text)]">
                  {feature.title}
                </h3>

                <p className="mt-4 leading-8 text-[var(--text-muted)]">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}