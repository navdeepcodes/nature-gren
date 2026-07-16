import Link from "next/link";

import Container from "@/components/layout/Container";

export default function Details() {
  return (
    <section className="pb-28">
      <Container>
        <div className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr]">
          <div />

          <div>
            <span className="text-sm uppercase tracking-[0.24em] text-[var(--primary)]">
              Premium Collection
            </span>

            <h1 className="mt-4 font-serif text-5xl text-[var(--text)]">
              Premium Jute Shopping Bag
            </h1>

            <p className="mt-8 leading-8 text-[var(--text-muted)]">
              Beautiful handcrafted jute shopping bag designed for
              everyday use, gifting and eco-conscious businesses.
            </p>

            <div className="mt-10 space-y-3">
              <div>✓ Natural Jute</div>
              <div>✓ Reusable</div>
              <div>✓ Premium Finish</div>
              <div>✓ Bulk Manufacturing Available</div>
            </div>

            <div className="mt-12 flex flex-wrap gap-5">
              <a
                href="https://wa.me/919999999999"
                className="rounded-full bg-[var(--primary)] px-8 py-4 text-white"
              >
                WhatsApp Inquiry
              </a>

              <Link
                href="/contact"
                className="rounded-full border border-[var(--border)] px-8 py-4"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}