import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";

import Container from "@/components/layout/Container";

export default function InquiryCTA() {
  return (
    <section className="py-28">
      <Container>
        <div className="overflow-hidden rounded-[40px] bg-gradient-to-br from-[#2d4b2d] via-[#3b6238] to-[#20351f] px-10 py-20 text-center text-white shadow-2xl">
          <span className="text-sm uppercase tracking-[0.25em] text-white/70">
            Bulk Orders
          </span>

          <h2 className="mt-6 font-serif text-5xl">
            Need Large Quantities?
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-white/80">
            NatureGren specializes in wholesale manufacturing, exports,
            corporate gifting and custom branding for businesses worldwide.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-5">
            <a
              href="https://wa.me/919999999999"
              className="inline-flex h-14 items-center gap-3 rounded-full bg-white px-8 font-semibold text-[#2d4b2d]"
            >
              <MessageCircle size={18} />
              WhatsApp Us
            </a>

            <Link
              href="/contact"
              className="inline-flex h-14 items-center gap-3 rounded-full border border-white/20 px-8"
            >
              Contact Sales
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}