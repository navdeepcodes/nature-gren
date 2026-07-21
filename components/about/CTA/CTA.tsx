import Link from "next/link";
import { ArrowRight, Leaf } from "lucide-react";

import Container from "@/components/layout/Container";
import { About } from "@/lib/cms/about";

interface CTAProps {
  about: About;
}

export default function CTA({ about }: CTAProps) {
  return (
    <section className="relative overflow-hidden py-28">
      <div className="absolute inset-0 bg-[#faf7f2]" />

      <div className="absolute -left-32 top-0 h-[420px] w-[420px] rounded-full bg-[#8BA96B]/20 blur-[120px]" />

      <div className="absolute -right-32 bottom-0 h-[420px] w-[420px] rounded-full bg-[#b28b62]/20 blur-[120px]" />

      <Container>
        <div
          className="
            relative
            overflow-hidden
            rounded-[42px]
            bg-gradient-to-br
            from-[#2E4B2C]
            via-[#3B6237]
            to-[#1F341E]
            px-8
            py-20
            text-center
            text-white
            shadow-[0_40px_100px_rgba(0,0,0,0.18)]
            md:px-20
          "
        >
          <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-white/5 blur-3xl" />

          <div className="absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-[#8BA96B]/20 blur-3xl" />

          <div className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-5 py-3 backdrop-blur">
            <Leaf size={16} />

            <span className="text-sm font-medium uppercase tracking-[0.18em]">
              Let's Grow Together
            </span>
          </div>

          <h2 className="mx-auto mt-8 max-w-4xl font-serif text-4xl leading-tight whitespace-pre-line md:text-6xl">
            {about.cta_title}
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 whitespace-pre-line text-white/75">
            {about.cta_description}
          </p>

          <div className="mt-14 flex flex-wrap justify-center gap-5">
            <Link
              href={about.cta_link || "/shop"}
              className="
                inline-flex
                h-14
                items-center
                gap-3
                rounded-full
                bg-white
                px-8
                font-semibold
                text-[#2E4B2C]
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-xl
              "
            >
              {about.cta_button || "Explore Collection"}

              <ArrowRight size={18} />
            </Link>

            <Link
              href="/contact"
              className="
                inline-flex
                h-14
                items-center
                rounded-full
                border
                border-white/25
                bg-white/10
                px-8
                font-semibold
                backdrop-blur
                transition-all
                duration-300
                hover:bg-white/20
              "
            >
              Get Custom Quote
            </Link>
          </div>

          <div className="mt-16 flex flex-wrap justify-center gap-12 border-t border-white/10 pt-10">
            <div>
              <h3 className="text-3xl font-bold">100%</h3>
              <p className="mt-2 text-sm text-white/70">
                Natural Materials
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold">Premium</h3>
              <p className="mt-2 text-sm text-white/70">
                Handcrafted Quality
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold">Worldwide</h3>
              <p className="mt-2 text-sm text-white/70">
                Shipping Support
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}