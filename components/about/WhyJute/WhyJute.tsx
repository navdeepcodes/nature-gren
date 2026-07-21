"use client";

import { motion } from "framer-motion";

import Container from "@/components/layout/Container";
import JuteShowcase from "./JuteShowcase";

export default function WhyJute() {
  const points = [
    {
      title: "100% Natural Fiber",
      description:
        "Jute is a biodegradable plant fiber that naturally returns to the earth without polluting it.",
    },
    {
      title: "Reusable & Durable",
      description:
        "Designed to last for years, reducing the need for disposable plastic alternatives.",
    },
    {
      title: "Low Environmental Impact",
      description:
        "Jute cultivation requires significantly less water and chemicals than synthetic materials.",
    },
    {
      title: "Supports Artisan Communities",
      description:
        "Every handcrafted product contributes to preserving traditional craftsmanship and local livelihoods.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#FCFAF7] py-28 lg:py-36">

      {/* Background */}

      <div className="absolute inset-0">

        <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-[#F3F7EF] blur-[140px]" />

        <div className="absolute right-0 bottom-0 h-[420px] w-[420px] rounded-full bg-[#F6F2EA] blur-[120px]" />

      </div>

      <Container>
        <div className="relative grid items-center gap-24 lg:grid-cols-[0.9fr_1.1fr]">

          {/* LEFT */}

          <motion.div
            initial={{
              opacity: 0,
              y: 40,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.7,
            }}
          >

            <span className="inline-flex rounded-full bg-[#EDF5E9] px-5 py-2 text-sm font-semibold uppercase tracking-[0.22em] text-[#426239]">
              Why Jute
            </span>

            <h2 className="mt-8 max-w-xl font-serif text-5xl leading-[1.08] text-[var(--text)] lg:text-6xl">
              Sustainability
              <br />
              Starts With
              <br />
              Better Materials.
            </h2>

            <p className="mt-8 max-w-xl text-lg leading-9 text-[var(--text-muted)]">
              NatureGren carefully selects premium natural jute because it
              combines timeless beauty, exceptional durability and genuine
              environmental responsibility in every handcrafted product.
            </p>

            <div className="mt-14 space-y-10">

              {points.map((point, index) => (
                <motion.div
                  key={point.title}
                  initial={{
                    opacity: 0,
                    x: -20,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    delay: index * 0.1,
                  }}
                  className="flex gap-6"
                >

                  <div className="mt-2 h-3 w-3 rounded-full bg-[#2E4B2C]" />

                  <div>

                    <h3 className="text-xl font-semibold text-[var(--text)]">
                      {point.title}
                    </h3>

                    <p className="mt-3 max-w-lg leading-8 text-[var(--text-muted)]">
                      {point.description}
                    </p>

                  </div>

                </motion.div>
              ))}

            </div>

          </motion.div>

          {/* RIGHT */}

          <motion.div
            initial={{
              opacity: 0,
              x: 40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.8,
            }}
          >
            <JuteShowcase />
          </motion.div>

        </div>
      </Container>

    </section>
  );
}