import Image from "next/image";
import Link from "next/link";

import Container from "@/components/layout/Container";

interface CTAProps {
  /** Background photo; the section falls back to solid olive without one. */
  image?: string | null;
}

export default function CTA({ image }: CTAProps) {
  return (
    <section className="relative isolate overflow-hidden bg-[#26301f] py-24 text-[#f4efe6] md:py-32 lg:py-40">
      {image ? (
        <Image
          src={image}
          alt=""
          fill
          sizes="100vw"
          className="-z-20 object-cover"
        />
      ) : null}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#1c2416]/92 via-[#1c2416]/70 to-[#1c2416]/30" />

      <Container>
        <div className="max-w-2xl">
          <h2 className="text-balance font-serif text-4xl leading-[1.02] md:text-6xl lg:text-7xl">
            Need jute products made for your brand?
          </h2>

          <p className="mt-6 max-w-xl text-base leading-7 text-[#f4efe6]/80 md:text-lg md:leading-8">
            We make custom jute bags, gift packaging,
            promotional products and bulk orders to your
            specification.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center rounded-full bg-[#f4efe6] px-7 py-4 text-sm font-semibold text-[#26301f] transition-colors hover:bg-white md:text-base focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f4efe6]"
            >
              Request a quote
            </Link>
            <Link
              href="/shop"
              className="inline-flex items-center rounded-full border border-[#f4efe6]/50 px-7 py-4 text-sm font-semibold text-[#f4efe6] transition-colors hover:border-[#f4efe6] hover:bg-[#f4efe6]/10 md:text-base focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f4efe6]"
            >
              Browse products
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
