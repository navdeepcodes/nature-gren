"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { PhoneCall } from "lucide-react";

import Container from "@/components/layout/Container";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-24 pb-16 md:pt-28 md:pb-20 lg:py-32">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-4xl text-center"
        >
          <span className="inline-flex rounded-full bg-[#edf6e8] px-4 py-1.5 text-xs font-semibold tracking-[0.12em] text-[#3d6b36] sm:px-5 sm:py-2 sm:text-sm">
            CONTACT US
          </span>

          <h1 className="mt-6 font-serif text-[2.7rem] leading-[1.08] text-[var(--text)] sm:text-5xl md:mt-8 md:text-6xl xl:text-7xl">
            We'd Love
            <br />
            To Hear From You
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-[var(--text-muted)] md:mt-8 md:text-lg md:leading-9">
            Whether you're looking for premium handcrafted jute products,
            wholesale partnerships or custom manufacturing, our team is ready
            to help.
          </p>

          <Link
            href="#contact-form"
            className="mt-8 inline-flex h-12 items-center gap-2.5 rounded-full bg-[var(--primary)] px-6 text-sm font-medium text-white transition-all duration-300 hover:scale-[1.02] md:mt-12 md:h-14 md:gap-3 md:px-8 md:text-base"
          >
            <PhoneCall size={18} />
            Send an Inquiry
          </Link>
        </motion.div>
      </Container>
    </section>
  );
}