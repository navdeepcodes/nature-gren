"use client";

import { motion } from "framer-motion";
import Container from "@/components/layout/Container";

import {
  MessageSquare,
  PencilRuler,
  PackageCheck,
  Factory,
  ShieldCheck,
  Truck,
} from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Share Your Requirements",
    description:
      "Tell us about your bag, branding, quantity, and customization needs.",
    icon: MessageSquare,
  },
  {
    number: "02",
    title: "Design & Quotation",
    description:
      "Our team prepares concepts, material recommendations, and a detailed quotation.",
    icon: PencilRuler,
  },
  {
    number: "03",
    title: "Prototype Approval",
    description:
      "Receive a sample for review and approve every detail before production.",
    icon: PackageCheck,
  },
  {
    number: "04",
    title: "Manufacturing",
    description:
      "Your order is crafted using premium materials with strict production standards.",
    icon: Factory,
  },
  {
    number: "05",
    title: "Quality Inspection",
    description:
      "Every order undergoes thorough quality checks before dispatch.",
    icon: ShieldCheck,
  },
  {
    number: "06",
    title: "Worldwide Delivery",
    description:
      "Products are securely packed and delivered to your destination on schedule.",
    icon: Truck,
  },
];

export default function Process() {
  return (
    <section className="bg-[#f8f5ef] py-24 lg:py-32">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-[#2E4B2C]">
            Our Process
          </span>

          <h2 className="mt-5 font-serif text-4xl lg:text-6xl text-[var(--text)]">
            From Idea
            <span className="block text-[#2E4B2C]">
              To Delivery
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-[var(--text-muted)]">
            We make custom manufacturing simple with a transparent process that
            keeps you informed from the first conversation to final delivery.
          </p>
        </div>

        <div className="relative mt-24">
          {/* Desktop Timeline */}
          <div className="absolute left-0 right-0 top-10 hidden h-px bg-[var(--border)] lg:block" />

          <div className="grid gap-10 lg:grid-cols-6">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                  }}
                  className="relative text-center"
                >
                  <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border-8 border-[#f8f5ef] bg-[#2E4B2C] shadow-lg">
                    <Icon size={32} className="text-white" />
                  </div>

                  <div className="mt-6 text-sm font-bold tracking-[0.25em] text-[#2E4B2C]">
                    {step.number}
                  </div>

                  <h3 className="mt-3 text-xl font-semibold text-[var(--text)]">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-[var(--text-muted)]">
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}