import Image from "next/image";

import Container from "@/components/layout/Container";

export default function WhyJute() {
  const points = [
    {
      title: "100% Natural Fiber",
      description:
        "Jute is a biodegradable plant fiber that naturally returns to the earth without polluting it.",
    },
    {
      title: "Reusable & Durable",
      description:
        "Designed to last for years, reducing the need for disposable plastic alternatives.",
    },
    {
      title: "Low Environmental Impact",
      description:
        "Jute cultivation requires significantly less water and chemicals than synthetic materials.",
    },
    {
      title: "Supports Artisan Communities",
      description:
        "Every handcrafted product contributes to preserving traditional craftsmanship and local livelihoods.",
    },
  ];

  return (
    <section className="bg-white py-24 lg:py-32">
      <Container>
        <div className="grid items-center gap-20 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <span className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--primary)]">
              Why Jute
            </span>

            <h2 className="mt-5 font-serif text-5xl leading-tight text-[var(--text)]">
              Sustainability
              <br />
              Starts With Better Materials.
            </h2>

            <p className="mt-8 text-lg leading-8 text-[var(--text-muted)]">
              NatureGren chooses premium natural jute because it combines
              timeless beauty, exceptional durability and environmental
              responsibility in every product.
            </p>

            <div className="mt-12 space-y-8">
              {points.map((point) => (
                <div key={point.title}>
                  <h3 className="text-xl font-semibold text-[var(--text)]">
                    {point.title}
                  </h3>

                  <p className="mt-3 leading-7 text-[var(--text-muted)]">
                    {point.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[32px]">
            <div className="relative aspect-[4/5]">
              <Image
                src="/images/about/jute.jpg"
                alt="Natural Jute"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}