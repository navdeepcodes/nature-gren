"use client";

import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

interface ManufacturingCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index: number;
}

export default function ManufacturingCard({
  icon: Icon,
  title,
  description,
  index,
}: ManufacturingCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.45,
        delay: index * 0.08,
      }}
      className="group relative overflow-hidden rounded-[32px] border border-[var(--border)] bg-white p-8 transition-all duration-300 hover:-translate-y-2 hover:border-[#2E4B2C]/20 hover:shadow-2xl"
    >
      {/* Background Glow */}

      <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-[#7D9A65]/10 blur-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <div className="relative z-10">
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#2E4B2C]/10 transition-all duration-300 group-hover:bg-[#2E4B2C]">
          <Icon
            size={30}
            className="text-[#2E4B2C] transition-colors duration-300 group-hover:text-white"
          />
        </div>

        <h3 className="mt-8 text-2xl font-semibold text-[var(--text)]">
          {title}
        </h3>

        <p className="mt-4 leading-8 text-[var(--text-muted)]">
          {description}
        </p>
      </div>
    </motion.div>
  );
}