import Link from "next/link";

import Container from "@/components/layout/Container";

export default function Hero() {
  return (
    <section className="border-b border-[#ece6dc] bg-[#fcfaf7] py-10">
      <Container>
        <nav className="flex items-center gap-3 text-sm text-[var(--text-muted)]">
          <Link
            href="/"
            className="hover:text-[var(--primary)]"
          >
            Home
          </Link>

          <span>/</span>

          <Link
            href="/shop"
            className="hover:text-[var(--primary)]"
          >
            Shop
          </Link>

          <span>/</span>

          <span className="font-medium text-[var(--text)]">
            Product
          </span>
        </nav>
      </Container>
    </section>
  );
}