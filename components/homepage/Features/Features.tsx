"use client";

import Container from "../../layout/Container";

import FeatureCard from "./FeatureCard";
import { features } from "./featureData";

export default function Features() {
  return (
    <section className="relative py-28">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--primary)]">
            Why NatureGren
          </span>

          <h2 className="mt-5 font-serif text-5xl text-[var(--text)]">
            Crafted With Purpose
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[var(--text-muted)]">
            Every NatureGren product combines sustainable materials,
            handcrafted quality and thoughtful design to create products
            that are beautiful, durable and environmentally responsible.
          </p>
        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              delay={index * 0.12}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}