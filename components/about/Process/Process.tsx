import {
  Sprout,
  Scissors,
  Hand,
  ShieldCheck,
  Package,
} from "lucide-react";

import Container from "@/components/layout/Container";

const steps = [
  {
    icon: Sprout,
    title: "Natural Jute",
    description:
      "Responsibly sourced premium jute fibers are carefully selected.",
  },
  {
    icon: Scissors,
    title: "Preparation",
    description:
      "Fibers are cleaned, processed and prepared for handcrafted production.",
  },
  {
    icon: Hand,
    title: "Handcrafted",
    description:
      "Experienced artisans weave every product with exceptional attention to detail.",
  },
  {
    icon: ShieldCheck,
    title: "Quality Check",
    description:
      "Every product is inspected to ensure premium finish and durability.",
  },
  {
    icon: Package,
    title: "Delivered",
    description:
      "Beautifully packed and shipped to customers across US and worldwide.",
  },
];

export default function Process() {
  return (
    <section className="bg-[#fcfaf7] py-24 lg:py-32">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--primary)]">
            Our Process
          </span>

          <h2 className="mt-5 font-serif text-5xl text-[var(--text)]">
            From Nature To Your Home
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[var(--text-muted)]">
            Every NatureGren product follows a thoughtful journey—from natural
            jute cultivation to handcrafted excellence and premium quality
            assurance.
          </p>
        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-5">
          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <div
                key={step.title}
                className="rounded-[28px] border border-[#ece6dc] bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#edf6e8]">
                  <Icon
                    size={30}
                    className="text-[var(--primary)]"
                  />
                </div>

                <h3 className="mt-8 text-2xl font-semibold text-[var(--text)]">
                  {step.title}
                </h3>

                <p className="mt-4 leading-7 text-[var(--text-muted)]">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}