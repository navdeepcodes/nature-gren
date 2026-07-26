"use client";

import { motion } from "framer-motion";

export default function HeroBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Primary Organic Glow */}

      <motion.div
        animate={{
          scale: [1, 1.04, 1],
          opacity: [0.85, 1, 0.85],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          -left-60
          -top-44
          h-[760px]
          w-[760px]
          rounded-full
          bg-[#8BB174]/25
          blur-[140px]
        "
      />

      {/* Warm Sunlight */}

      <motion.div
        animate={{
          scale: [1, 1.03, 1],
          opacity: [0.75, 0.95, 0.75],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          right-[-120px]
          top-[-120px]
          h-[700px]
          w-[700px]
          rounded-full
          bg-gradient-to-br
          from-[#fff7d8]
          via-[#f5ead0]
          to-transparent
          blur-[120px]
        "
      />

      {/* Hero Spotlight */}

      <div
        className="
          absolute
          right-[10%]
          top-[12%]
          h-[480px]
          w-[480px]
          rounded-full
          bg-white/30
          blur-[100px]
        "
      />

      {/* Botanical Illustration */}

      <svg
        className="
          absolute
          -left-12
          top-24
          h-[520px]
          w-[520px]
          opacity-[0.045]
          text-[#55724d]
        "
        viewBox="0 0 500 500"
        fill="none"
      >
        <path
          d="M250 30C180 120 160 220 210 340C245 420 305 460 360 470"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
        />

        <path
          d="M230 120C170 150 150 210 175 275"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
        />

        <path
          d="M275 170C345 185 390 235 395 310"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
        />

        <ellipse
          cx="170"
          cy="180"
          rx="24"
          ry="58"
          transform="rotate(-35 170 180)"
          fill="currentColor"
          fillOpacity="0.35"
        />

        <ellipse
          cx="330"
          cy="250"
          rx="26"
          ry="70"
          transform="rotate(28 330 250)"
          fill="currentColor"
          fillOpacity="0.35"
        />

        <ellipse
          cx="270"
          cy="370"
          rx="22"
          ry="62"
          transform="rotate(-18 270 370)"
          fill="currentColor"
          fillOpacity="0.35"
        />
      </svg>

      {/* Fine Grain */}

      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px,#000 1px,transparent 0)",
          backgroundSize: "24px 24px",
        }}
      />

      {/* Bottom Fade */}

      <div
        className="
          absolute
          inset-0
          bg-gradient-to-b
          from-transparent
          via-transparent
          to-[#faf6ef]/30
        "
      />
    </div>
  );
}