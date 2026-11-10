import Link from "next/link";

import Container from "@/components/layout/Container";
import { legacyData } from "./legacyData";

/** Company history as a horizontal timeline: a real sequence, so the years carry the layout. */
export default function Legacy() {
  return (
    <section className="overflow-hidden bg-[#efe7da] py-20 md:py-24 lg:py-32">
      <Container>
        <div className="grid gap-6 lg:grid-cols-[1.1fr_1fr] lg:items-end lg:gap-16">
          <h2 className="text-balance font-serif text-4xl leading-[1.02] text-[var(--text)] md:text-6xl lg:text-7xl">
            Nearly a century of craftsmanship
          </h2>

          <div>
            <p className="max-w-xl text-base leading-7 text-[var(--text-muted)] md:text-lg md:leading-8">
              Built on decades of experience, NatureGren combines
              traditional craftsmanship with modern manufacturing to
              create jute products trusted by businesses worldwide.
            </p>
            <Link
              href="/about"
              className="mt-5 inline-block text-sm font-semibold text-[var(--primary)] underline decoration-[var(--accent)] decoration-2 underline-offset-[6px] transition-colors hover:text-[var(--primary-hover)] hover:decoration-[var(--primary)]"
            >
              Read our story
            </Link>
          </div>
        </div>
      </Container>

      <ol className="mx-auto mt-14 flex max-w-[var(--container)] snap-x snap-mandatory gap-0 overflow-x-auto lg:grid lg:grid-cols-7 lg:overflow-visible scroll-px-4 px-4 pb-4 [scrollbar-width:none] sm:scroll-px-6 sm:px-6 md:mt-20 lg:px-8 xl:px-10 [&::-webkit-scrollbar]:hidden">
        {legacyData.map((item, index) => (
          <li
            key={item.year}
            className="relative w-[72%] shrink-0 snap-start border-t border-[#2b3524]/25 pr-8 pt-8 sm:w-[40%] lg:w-auto lg:pr-6"
          >
            <span
              aria-hidden
              className={`absolute -top-[5px] left-0 h-[9px] w-[9px] rounded-full ${
                index === legacyData.length - 1
                  ? "bg-[var(--primary)]"
                  : "border border-[#2b3524]/50 bg-[#efe7da]"
              }`}
            />
            <p className="font-serif text-5xl leading-none text-[var(--primary)] md:text-6xl lg:text-5xl xl:text-6xl">
              {item.year}
            </p>
            <h3 className="mt-5 font-serif text-xl text-[var(--text)] md:text-2xl lg:text-xl xl:text-2xl">
              {item.title}
            </h3>
            <p className="mt-2 text-[0.95rem] leading-7 text-[var(--text-muted)] lg:text-sm lg:leading-6">
              {item.description}
            </p>
          </li>
        ))}
      </ol>
    </section>
  );
}
