"use client";

import { motion } from "framer-motion";

export default function HeroBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Left Organic Green Glow */}

      <motion.div
        animate={{
          x: [0, 120, -80, 0],
          y: [0, -60, 50, 0],
          rotate: [0, 8, -5, 0],
          scale: [1, 1.08, 0.95, 1],
        }}
        transition={{
          duration: 24,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          -left-72
          top-[-180px]
          h-[950px]
          w-[950px]
          rounded-[42%_58%_65%_35%]
          bg-[#8BB174]/30
          blur-[180px]
        "
      />

      {/* Warm Sunlight */}

      <motion.div
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.75, 1, 0.75],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          right-[-120px]
          top-[-180px]
          h-[900px]
          w-[900px]
          rounded-full
          bg-gradient-to-br
          from-[#fff7d6]
          via-[#f5e9cb]
          to-transparent
          opacity-80
          blur-[160px]
        "
      />

      {/* Bottom Brown Glow */}

      <motion.div
        animate={{
          x: [0, -80, 60, 0],
          y: [0, 80, -40, 0],
          scale: [1, 0.95, 1.08, 1],
        }}
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          -right-64
          -bottom-72
          h-[950px]
          w-[950px]
          rounded-[60%_40%_35%_65%]
          bg-[#b58d63]/22
          blur-[190px]
        "
      />

      {/* Hero Spotlight */}

      <div
        className="
          absolute
          right-[12%]
          top-[8%]
          h-[700px]
          w-[700px]
          rounded-full
          bg-white/35
          blur-[120px]
        "
      />

      {/* Botanical Decoration */}

      <svg
        className="
          absolute
          -left-20
          top-24
          h-[620px]
          w-[620px]
          opacity-[0.05]
          text-[#5a7a4c]
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

      {/* Soft Grain */}

      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px,#000 1px,transparent 0)",
          backgroundSize: "22px 22px",
        }}
      />

      {/* Light Fade */}

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