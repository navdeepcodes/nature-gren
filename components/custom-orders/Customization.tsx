"use client";

import { motion } from "framer-motion";
import Container from "@/components/layout/Container";

import {
  Palette,
  Ruler,
  Briefcase,
  Package,
  Shield,
  Droplets,
} from "lucide-react";

const options = [
  {
    icon: Palette,
    title: "Custom Printing",
    description:
      "Showcase your brand with premium logo printing, graphics, and personalized artwork.",
  },
  {
    icon: Ruler,
    title: "Size & Dimensions",
    description:
      "Manufactured in custom sizes to perfectly match your product and packaging needs.",
  },
  {
    icon: Briefcase,
    title: "Handles & Straps",
    description:
      "Choose from cotton, jute, padded, shoulder, or reinforced handles.",
  },
  {
    icon: Package,
    title: "Pockets & Compartments",
    description:
      "Add internal organizers, bottle holders, zipper pockets, or external storage.",
  },
  {
    icon: Shield,
    title: "Closures",
    description:
      "Velcro, magnetic buttons, zip closures, snap buttons, and premium finishes.",
  },
  {
    icon: Droplets,
    title: "Waterproof Lamination",
    description:
      "Optional inner lamination for improved durability and moisture resistance.",
  },
];

export default function Customization() {
  return (
    <section className="bg-[#f8f5ef] py-24 lg:py-32">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-[#2E4B2C]">
            Endless Possibilities
          </span>

          <h2 className="mt-5 font-serif text-4xl lg:text-6xl text-[var(--text)]">
            Customize Every
            <span className="block text-[#2E4B2C]">
              Detail
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-[var(--text-muted)]">
            Every business is unique. From materials and dimensions to branding
            and finishing touches, every NatureGren bag can be tailored to your
            exact requirements.
          </p>
        </div>

        <div className="mt-20 grid gap-6 lg:grid-cols-3">
          {options.map((option, index) => {
            const Icon = option.icon;

            return (
              <motion.div
                key={option.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.08,
                  duration: 0.45,
                }}
                className="group rounded-[30px] border border-[var(--border)] bg-white p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#2E4B2C]/10 transition group-hover:bg-[#2E4B2C]">
                  <Icon
                    size={28}
                    className="text-[#2E4B2C] group-hover:text-white transition"
                  />
                </div>

                <h3 className="mt-8 text-2xl font-semibold">
                  {option.title}
                </h3>

                <p className="mt-4 leading-8 text-[var(--text-muted)]">
                  {option.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: .2 }}
          className="mt-20 rounded-[36px] bg-[#2E4B2C] p-10 lg:p-14 text-white"
        >
          <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h3 className="font-serif text-3xl lg:text-4xl">
                Have something unique in mind?
              </h3>

              <p className="mt-4 max-w-2xl text-white/80 leading-8">
                Share your ideas, sketches, or reference images, and our team
                will help transform them into beautifully crafted custom jute
                products.
              </p>
            </div>

            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-2xl bg-white px-8 py-4 font-medium text-[#2E4B2C] transition hover:scale-105"
            >
              Start Your Project
            </a>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}