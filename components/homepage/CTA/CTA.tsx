import Link from "next/link";

import Container from "@/components/layout/Container";

export default function CTA() {
  return (
    <section className="py-24 lg:py-32">
      <Container>
        <div
          className="
            overflow-hidden
            rounded-[40px]
            bg-[var(--primary)]
            px-8
            py-14
            text-white
            md:px-14
            lg:px-20
            lg:py-20
          "
        >
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm uppercase tracking-[0.25em] text-white/80">
              Custom Manufacturing
            </p>

            <h2 className="mt-5 font-serif text-4xl leading-tight md:text-5xl lg:text-6xl">
              Looking for Custom
              <br />
              Jute Products?
            </h2>

            <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-white/80">
              We manufacture customized eco-friendly jute bags, gift packaging,
              promotional products, and bulk business orders tailored to your
              brand.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="
                  inline-flex
                  h-14
                  items-center
                  justify-center
                  rounded-full
                  bg-white
                  px-8
                  text-sm
                  font-semibold
                  text-[var(--primary)]
                  transition-all
                  duration-300
                  hover:scale-[1.02]
                "
              >
                Request a Quote
              </Link>

              <Link
                href="/shop"
                className="
                  inline-flex
                  h-14
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/40
                  px-8
                  text-sm
                  font-medium
                  text-white
                  transition-colors
                  duration-300
                  hover:bg-white/10
                "
              >
                Browse Products
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}