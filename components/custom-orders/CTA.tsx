"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Container from "@/components/layout/Container";

import {
  ArrowRight,
  Leaf,
  Globe2,
  Palette,
} from "lucide-react";

const highlights = [
  {
    icon: Leaf,
    title: "Sustainable Manufacturing",
  },
  {
    icon: Globe2,
    title: "Worldwide Export",
  },
  {
    icon: Palette,
    title: "Fully Customizable",
  },
];

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-[#1f2b1d] py-28 text-white">
      {/* Background Glow */}

      <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#5f7f48]/20 blur-[160px]" />

      <Container>
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .6 }}
          className="relative z-10 mx-auto max-w-5xl text-center"
        >
          <span className="inline-flex rounded-full border border-white/15 bg-white/5 px-5 py-2 text-sm font-medium text-white/80">
            Let's Build Something Exceptional
          </span>

          <h2 className="mt-8 font-serif text-5xl leading-tight lg:text-7xl">
            Bring Your Brand
            <span className="block text-[#cddfb6]">
              To Life
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-white/75">
            Whether you need promotional bags, retail packaging,
            corporate gifting solutions, or large-scale wholesale
            manufacturing, our team is ready to help create products
            that represent your brand beautifully.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-5">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 rounded-2xl bg-white px-8 py-4 font-medium text-[#1f2b1d] transition hover:-translate-y-1 hover:shadow-2xl"
            >
              Request a Quote
              <ArrowRight size={18} />
            </Link>

            <Link
              href="/shop"
              className="rounded-2xl border border-white/20 bg-white/5 px-8 py-4 font-medium backdrop-blur transition hover:bg-white/10"
            >
              Browse Collection
            </Link>
          </div>

          <div className="mt-20 grid gap-6 md:grid-cols-3">
            {highlights.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur"
                >
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10">
                    <Icon size={30} />
                  </div>

                  <h3 className="mt-6 text-xl font-semibold">
                    {item.title}
                  </h3>
                </div>
              );
            })}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}