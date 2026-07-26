"use client";

import { motion } from "framer-motion";

interface TimelineItemProps {
  year: string;
  title: string;
  description: string;
  isLeft: boolean;
}

export default function TimelineItem({
  year,
  title,
  description,
  isLeft,
}: TimelineItemProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: isLeft ? -40 : 40,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{ once: true }}
      transition={{ duration: 0.55 }}
      className={`relative flex w-full ${
        isLeft ? "justify-start lg:pr-16" : "justify-end lg:pl-16"
      }`}
    >
      <div className="max-w-md rounded-[32px] border border-[var(--border)] bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
        <span className="text-5xl font-bold text-[#2E4B2C]">
          {year}
        </span>

        <h3 className="mt-5 text-2xl font-semibold text-[var(--text)]">
          {title}
        </h3>

        <p className="mt-4 leading-8 text-[var(--text-muted)]">
          {description}
        </p>
      </div>
    </motion.div>
  );
}