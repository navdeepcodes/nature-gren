import Link from "next/link";

import {
  ArrowRight,
  Mail,
  MessageCircle,
} from "lucide-react";

import Container from "@/components/layout/Container";

export default function CTA() {
  return (
    <section className="relative overflow-hidden py-28">
      {/* Background */}

      <div className="absolute inset-0 bg-[#faf7f2]" />

      <div className="absolute -left-44 top-0 h-[520px] w-[520px] rounded-full bg-[#8BA96B]/15 blur-[140px]" />

      <div className="absolute -right-44 bottom-0 h-[520px] w-[520px] rounded-full bg-[#b28b62]/15 blur-[140px]" />

      <Container>
        <div
          className="
            relative
            overflow-hidden
            rounded-[42px]
            bg-gradient-to-br
            from-[#2d4b2d]
            via-[#3d6238]
            to-[#244021]
            px-10
            py-24
            text-center
            text-white
            shadow-[0_40px_100px_rgba(0,0,0,0.18)]
            lg:px-24
          "
        >
          {/* Decorative */}

          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white/5 blur-3xl" />

          <div className="absolute -left-20 -bottom-20 h-64 w-64 rounded-full bg-[#8BA96B]/20 blur-3xl" />

          <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-semibold uppercase tracking-[0.22em] backdrop-blur">
            Ready to Work Together?
          </span>

          <h2 className="mx-auto mt-8 max-w-4xl font-serif text-4xl leading-tight md:text-6xl">
            Let's Create
            <br />
            Something Sustainable
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-white/80">
            Whether you're looking for premium handcrafted jute products,
            export partnerships, wholesale supply or custom manufacturing,
            our team is ready to help bring your ideas to life.
          </p>

          <div className="mt-14 flex flex-wrap justify-center gap-5">
            <Link
              href="/shop"
              className="
                inline-flex
                h-14
                items-center
                gap-3
                rounded-full
                bg-white
                px-8
                font-semibold
                text-[#2d4b2d]
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-xl
              "
            >
              Explore Collection

              <ArrowRight size={18} />
            </Link>

            <a
              href="mailto:info@naturegren.com"
              className="
                inline-flex
                h-14
                items-center
                gap-3
                rounded-full
                border
                border-white/25
                bg-white/10
                px-8
                font-semibold
                text-white
                backdrop-blur
                transition-all
                duration-300
                hover:bg-white/20
              "
            >
              <Mail size={18} />

              Email Us
            </a>

            <a
              href="https://wa.me/919999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex
                h-14
                items-center
                gap-3
                rounded-full
                border
                border-[#9BE15D]/30
                bg-[#25D366]
                px-8
                font-semibold
                text-white
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-xl
              "
            >
              <MessageCircle size={18} />

              WhatsApp
            </a>
          </div>

          <div className="mt-16 border-t border-white/10 pt-10">
            <p className="text-sm uppercase tracking-[0.18em] text-white/60">
              Sustainable • Handmade • Premium Quality
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}