"use client";

import { motion } from "framer-motion";
import {
  Leaf,
  Recycle,
  Sprout,
  Globe2,
  ShieldCheck,
  Trees,
} from "lucide-react";

import Container from "@/components/layout/Container";

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

  const cards = [
    {
      icon: Leaf,
      title: "100% Natural",
      color: "bg-[#EDF6E8]",
    },
    {
      icon: Recycle,
      title: "Plastic Free",
      color: "bg-[#F8F3EA]",
    },
    {
      icon: Globe2,
      title: "Eco Friendly",
      color: "bg-[#EDF6E8]",
    },
    {
      icon: Trees,
      title: "Sustainably Sourced",
      color: "bg-[#F8F3EA]",
    },
    {
      icon: ShieldCheck,
      title: "Premium Quality",
      color: "bg-[#EDF6E8]",
    },
    {
      icon: Sprout,
      title: "Handcrafted",
      color: "bg-[#F8F3EA]",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-white py-24 lg:py-32">
      <Container>
        <div className="grid items-center gap-20 lg:grid-cols-[0.95fr_1.05fr]">
          {/* LEFT */}

          <div>
            <span className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--primary)]">
              Why Jute
            </span>

            <h2 className="mt-5 font-serif text-5xl leading-tight text-[var(--text)]">
              Sustainability
              <br />
              Starts With Better Materials.
            </h2>

            <p className="mt-8 text-lg leading-8 text-[var(--text-muted)]">
              NatureGren chooses premium natural jute because it combines
              timeless beauty, exceptional durability and environmental
              responsibility in every product.
            </p>

            <div className="mt-12 space-y-8">
              {points.map((point) => (
                <div key={point.title}>
                  <h3 className="text-xl font-semibold text-[var(--text)]">
                    {point.title}
                  </h3>

                  <p className="mt-3 leading-7 text-[var(--text-muted)]">
                    {point.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT */}

          <div className="relative">

            <motion.div
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                duration: 45,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#E8E2D7]"
            />

            <motion.div
              animate={{
                rotate: [360, 0],
              }}
              transition={{
                duration: 35,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-[#D6CFBF]"
            />

            <div className="relative z-10 flex min-h-[620px] items-center justify-center">

              <motion.div
                animate={{
                  y: [-10, 10, -10],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                }}
                className="absolute"
              >
                <div className="flex h-40 w-40 flex-col items-center justify-center rounded-full bg-gradient-to-br from-[#2E4B2C] to-[#557C4C] text-white shadow-2xl">
                  <Leaf size={42} />

                  <span className="mt-4 text-4xl font-bold">
                    100%
                  </span>

                  <span className="mt-1 text-sm uppercase tracking-[0.2em]">
                    Natural
                  </span>
                </div>
              </motion.div>

              {cards.map((card, index) => {
                const angle =
                  (index / cards.length) * Math.PI * 2;

                const radius = 210;

                const x =
                  Math.cos(angle) * radius;

                const y =
                  Math.sin(angle) * radius;

                const Icon = card.icon;

                return (
                  <motion.div
                    key={card.title}
                    initial={{
                      opacity: 0,
                      scale: 0.8,
                    }}
                    whileInView={{
                      opacity: 1,
                      scale: 1,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      delay: index * 0.08,
                    }}
                    whileHover={{
                      y: -8,
                      scale: 1.05,
                    }}
                    style={{
                      transform: `translate(${x}px, ${y}px)`,
                    }}
                    className="absolute"
                  >
                    <div
                      className={`flex w-44 items-center gap-4 rounded-3xl ${card.color} p-5 shadow-lg backdrop-blur`}
                    >
                      <div className="rounded-2xl bg-white p-3 shadow">
                        <Icon
                          size={24}
                          className="text-[#2E4B2C]"
                        />
                      </div>

                      <span className="font-semibold text-[#2B2B2B]">
                        {card.title}
                      </span>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}