import Image from "next/image";

import Container from "@/components/layout/Container";

export default function Story() {
  return (
    <section className="py-24 lg:py-32 bg-[#fcfaf7]">
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[32px]">
            <Image
              src="/images/about/story.jpg"
              alt="NatureGren artisans"
              fill
              className="object-cover"
            />
          </div>

          <div>
            <span className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--primary)]">
              Our Journey
            </span>

            <h2 className="mt-5 font-serif text-5xl leading-tight text-[var(--text)]">
              Handcrafted Tradition.
              <br />
              Sustainable Tomorrow.
            </h2>

            <p className="mt-8 text-lg leading-8 text-[var(--text-muted)]">
              NatureGren was founded with a simple belief—beautiful products
              should never come at the cost of the environment. Every bag,
              basket and home accessory is handcrafted using natural jute by
              skilled artisans.
            </p>

            <p className="mt-6 text-lg leading-8 text-[var(--text-muted)]">
              By combining traditional craftsmanship with modern design, we
              create products that are durable, elegant and environmentally
              responsible for homes and businesses around the world.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}