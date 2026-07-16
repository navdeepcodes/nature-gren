import Link from "next/link";
import { ArrowLeft, Leaf } from "lucide-react";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/homepage/Footer";
import Container from "@/components/layout/Container";

export default function NotFound() {
  return (
    <>
      <Navbar />

      <main className="bg-[#fcfaf7] py-28">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-[#eef6ea]">
              <Leaf
                size={42}
                className="text-[var(--primary)]"
              />
            </div>

            <p className="mt-10 text-sm font-semibold uppercase tracking-[0.24em] text-[var(--primary)]">
              Error 404
            </p>

            <h1 className="mt-5 font-serif text-5xl leading-tight text-[var(--text)]">
              Page Not Found
            </h1>

            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-[var(--text-muted)]">
              Sorry, the page you're looking for doesn't exist or has
              been moved. Explore our handcrafted jute collection instead.
            </p>

            <div className="mt-12 flex flex-wrap justify-center gap-4">
              <Link
                href="/"
                className="inline-flex items-center justify-center rounded-full bg-[var(--primary)] px-8 py-4 font-medium text-white transition hover:opacity-90"
              >
                Home
              </Link>

              <Link
                href="/shop"
                className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] px-8 py-4 font-medium transition hover:bg-white"
              >
                <ArrowLeft size={18} />

                Browse Products
              </Link>
            </div>
          </div>
        </Container>
      </main>

      <Footer />
    </>
  );
}