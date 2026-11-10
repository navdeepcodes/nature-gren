import Link from "next/link";

import Container from "@/components/layout/Container";
import { manufacturingData } from "./manufacturingData";

export default function Manufacturing() {
  return (
    <section className="bg-[var(--background)] py-20 md:py-24 lg:py-32">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <h2 className="text-balance font-serif text-4xl leading-[1.02] text-[var(--text)] md:text-6xl">
              Made to your brief
            </h2>

            <p className="mt-6 max-w-md text-base leading-7 text-[var(--text-muted)] md:text-lg md:leading-8">
              From concept to production, we make jute products
              in your sizes, finishes and branding, for retail,
              promotions and wholesale orders.
            </p>

            <Link
              href="/custom-orders"
              className="mt-8 inline-flex items-center rounded-full bg-[var(--primary)] px-7 py-4 text-sm font-semibold text-white transition-colors hover:bg-[var(--primary-hover)] md:text-base focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--primary)]"
            >
              Start a custom order
            </Link>
          </div>

          <ul className="grid gap-x-10 sm:grid-cols-2">
            {manufacturingData.map(({ icon: Icon, title, description }) => (
              <li
                key={title}
                className="border-t border-[var(--border)] py-8"
              >
                <Icon
                  aria-hidden
                  size={24}
                  strokeWidth={1.5}
                  className="text-[#8a7254]"
                />
                <h3 className="mt-5 font-serif text-2xl text-[var(--text)]">
                  {title}
                </h3>
                <p className="mt-2 text-[0.95rem] leading-7 text-[var(--text-muted)]">
                  {description}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
