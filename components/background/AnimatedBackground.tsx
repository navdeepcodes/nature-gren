"use client";

import { motion } from "framer-motion";

export default function AnimatedBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Base Background */}

      <div className="absolute inset-0 bg-[#f7f3ec]" />

      {/* Large Green Glow */}

      <motion.div
        animate={{
          x: [0, 120, -80, 0],
          y: [0, -80, 60, 0],
          scale: [1, 1.15, 0.95, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-[-15%] top-[-10%] h-[650px] w-[650px] rounded-full bg-[#7DA46A]/20 blur-[140px]"
      />

      {/* Brown Glow */}

      <motion.div
        animate={{
          x: [0, -100, 80, 0],
          y: [0, 100, -60, 0],
          scale: [1, 0.9, 1.1, 1],
        }}
        transition={{
          duration: 26,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute right-[-15%] bottom-[-15%] h-[700px] w-[700px] rounded-full bg-[#A67C52]/15 blur-[160px]"
      />

      {/* Olive Glow */}

      <motion.div
        animate={{
          x: [0, 60, -60, 0],
          y: [0, -40, 50, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#98B96C]/10 blur-[120px]"
      />

      {/* Texture */}

      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px,#3b3b3b 1px,transparent 0)",
          backgroundSize: "26px 26px",
        }}
      />
    </div>
  );
}