"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { PhoneCall } from "lucide-react";

import Container from "@/components/layout/Container";

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-32">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-4xl text-center"
        >
          <span className="rounded-full bg-[#edf6e8] px-5 py-2 text-sm font-semibold text-[#3d6b36]">
            CONTACT US
          </span>

          <h1 className="mt-8 font-serif text-5xl leading-tight text-[var(--text)] md:text-6xl xl:text-7xl">
            We'd Love
            <br />
            To Hear From You
          </h1>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-9 text-[var(--text-muted)]">
            Whether you're looking for premium handcrafted jute products,
            wholesale partnerships or custom manufacturing, our team is ready
            to help.
          </p>

          <Link
            href="#contact-form"
            className="mt-12 inline-flex h-14 items-center gap-3 rounded-full bg-[var(--primary)] px-8 text-white transition-all duration-300 hover:scale-[1.02]"
          >
            <PhoneCall size={18} />
            Send an Inquiry
          </Link>
        </motion.div>
      </Container>
    </section>
  );
}