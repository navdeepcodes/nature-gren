"use client";

import { motion } from "framer-motion";
import { Leaf, Sparkles } from "lucide-react";

export default function HeroBadges() {
  return (
    <>
      {/* Eco Badge */}

      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{
          repeat: Infinity,
          duration: 4,
          ease: "easeInOut",
        }}
        className="
          absolute
          right-6
          top-6
          z-20
          flex
          items-center
          gap-3
          rounded-full
          bg-white/90
          px-5
          py-3
          shadow-xl
          backdrop-blur-xl
        "
      >
        <div className="rounded-full bg-[#eef7ea] p-2">
          <Leaf
            size={18}
            className="text-[#507b44]"
          />
        </div>

        <div>
          <p className="text-[11px] uppercase tracking-[0.18em] text-gray-500">
            Eco Friendly
          </p>

          <p className="font-semibold">
            100% Jute
          </p>
        </div>
      </motion.div>

      {/* Handmade Badge */}

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{
          repeat: Infinity,
          duration: 5,
          ease: "easeInOut",
        }}
        className="
          absolute
          -left-5
          bottom-10
          z-20
          flex
          items-center
          gap-3
          rounded-full
          bg-white/90
          px-5
          py-3
          shadow-xl
          backdrop-blur-xl
        "
      >
        <Sparkles
          size={18}
          className="text-[#b88b4a]"
        />

        <span className="font-medium">
          Handmade
        </span>
      </motion.div>
    </>
  );
}