"use client";

import { motion } from "framer-motion";
import {
  Leaf,
  ShieldCheck,
  Recycle,
  Globe2,
  Trees,
  Sprout,
  ArrowUpRight,
} from "lucide-react";

const features = [
  {
    icon: Leaf,
    title: "100% Natural",
    text: "Plant-based premium fibre",
  },
  {
    icon: Recycle,
    title: "Plastic Free",
    text: "Sustainable everyday living",
  },
  {
    icon: Globe2,
    title: "Eco Friendly",
    text: "Low environmental footprint",
  },
  {
    icon: Trees,
    title: "Renewable",
    text: "Responsibly harvested jute",
  },
];

export default function JuteShowcase() {
  return (
    <div className="relative flex min-h-[720px] items-center justify-center">

      {/* Background Glow */}

      <div className="absolute inset-0 flex items-center justify-center">

        <div className="h-[520px] w-[520px] rounded-full bg-[#EDF5E9] blur-[120px]" />

      </div>

      {/* Decorative Rings */}

      <div className="absolute h-[560px] w-[560px] rounded-full border border-[#E8E2D8]" />

      <div className="absolute h-[420px] w-[420px] rounded-full border border-dashed border-[#D9D0C1]" />

      {/* Center Badge */}

      <motion.div
        initial={{
          opacity: 0,
          scale: 0.9,
        }}
        whileInView={{
          opacity: 1,
          scale: 1,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 0.7,
        }}
        className="relative z-20"
      >
        <div className="rounded-[40px] bg-white p-10 shadow-[0_30px_80px_rgba(0,0,0,0.12)]">

          <div className="flex items-center justify-center">

            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#2E4B2C] text-white">

              <Leaf size={36} />

            </div>

          </div>

          <p className="mt-8 text-center text-sm uppercase tracking-[0.35em] text-[#56734D]">
            Premium Material
          </p>

          <h2 className="mt-3 text-center font-serif text-6xl text-[#1F2B1D]">
            100%
          </h2>

          <p className="mt-4 text-center text-xl font-medium">
            Natural Jute
          </p>

          <div className="mt-10 flex items-center justify-center gap-3 rounded-full bg-[#F7F4EF] px-5 py-3 text-sm">

            <ShieldCheck
              size={18}
              className="text-[#2E4B2C]"
            />

            Sustainable • Renewable • Durable

          </div>

        </div>
      </motion.div>

      {/* Floating Cards */}

      {features.map((item, index) => {
        const positions = [
          "-left-2 top-8",
          "-right-2 top-24",
          "left-8 bottom-16",
          "right-4 bottom-2",
        ];

        const Icon = item.icon;

        return (
          <motion.div
            key={item.title}
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              delay: index * 0.15,
            }}
            whileHover={{
              y: -6,
            }}
            className={`absolute ${positions[index]} z-30`}
          >
            <div className="w-60 rounded-[30px] border border-[#ECE7DE] bg-white p-6 shadow-xl">

              <div className="flex items-start justify-between">

                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#EDF5E9]">

                  <Icon
                    size={22}
                    className="text-[#2E4B2C]"
                  />

                </div>

                <ArrowUpRight
                  size={18}
                  className="text-gray-300"
                />

              </div>

              <h3 className="mt-6 text-lg font-semibold">
                {item.title}
              </h3>

              <p className="mt-2 text-sm leading-7 text-gray-500">
                {item.text}
              </p>

            </div>
          </motion.div>
        );
      })}

      {/* Floating Leaf */}

      <motion.div
        animate={{
          y: [-12, 12, -12],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
        }}
        className="absolute right-24 top-10"
      >
        <Sprout
          size={70}
          className="text-[#AFC6A2]"
        />
      </motion.div>
    </div>
  );
}