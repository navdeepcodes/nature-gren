"use client";

import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  delay: number;
}

export default function FeatureCard({
  title,
  description,
  icon: Icon,
  delay,
}: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
        delay,
      }}
      whileHover={{ y: -10 }}
      className="
        group
        rounded-[30px]
        border
        border-[#ece6dc]
        bg-white/80
        p-8
        shadow-lg
        backdrop-blur
        transition-all
      "
    >
      <div
        className="
          flex
          h-16
          w-16
          items-center
          justify-center
          rounded-2xl
          bg-[#edf6e8]
          transition-transform
          duration-500
          group-hover:rotate-6
          group-hover:scale-110
        "
      >
        <Icon
          size={30}
          className="text-[#3d6b36]"
        />
      </div>

      <h3 className="mt-8 text-2xl font-semibold text-[var(--text)]">
        {title}
      </h3>

      <p className="mt-4 leading-8 text-[var(--text-muted)]">
        {description}
      </p>
    </motion.div>
  );
}