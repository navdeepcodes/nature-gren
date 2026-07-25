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
          x: [0, 80, -50, 0],
          y: [0, -50, 40, 0],
          scale: [1, 1.08, 0.96, 1],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute left-[-15%] top-[-10%]
          h-[280px] w-[280px]
          md:h-[500px] md:w-[500px]
          lg:h-[650px] lg:w-[650px]
          rounded-full
          bg-[#7DA46A]/16
          blur-[60px]
          md:blur-[100px]
          lg:blur-[140px]
          will-change-transform
        "
      />

      {/* Brown Glow */}
      <motion.div
        animate={{
          x: [0, -70, 60, 0],
          y: [0, 70, -40, 0],
          scale: [1, 0.95, 1.05, 1],
        }}
        transition={{
          duration: 34,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute right-[-15%] bottom-[-15%]
          h-[320px] w-[320px]
          md:h-[540px] md:w-[540px]
          lg:h-[700px] lg:w-[700px]
          rounded-full
          bg-[#A67C52]/14
          blur-[70px]
          md:blur-[110px]
          lg:blur-[160px]
          will-change-transform
        "
      />

      {/* Center Glow */}
      <motion.div
        animate={{
          x: [0, 40, -40, 0],
          y: [0, -30, 30, 0],
        }}
        transition={{
          duration: 26,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute left-1/2 top-1/2
          h-[220px] w-[220px]
          md:h-[380px] md:w-[380px]
          lg:h-[500px] lg:w-[500px]
          -translate-x-1/2 -translate-y-1/2
          rounded-full
          bg-[#98B96C]/8
          blur-[50px]
          md:blur-[90px]
          lg:blur-[120px]
          will-change-transform
        "
      />

      {/* Texture */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px,#3b3b3b 1px,transparent 0)",
          backgroundSize: "26px 26px",
        }}
      />
    </div>
  );
}