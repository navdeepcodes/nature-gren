import Container from "@/components/layout/Container";

export default function ShopHeader() {
  return (
    <section className="relative overflow-hidden bg-[var(--background)] pt-24 pb-12 md:pt-28 md:pb-16 lg:pt-36 lg:pb-20">
      {/* Background Glow */}

      <div className="absolute inset-0 -z-10">
        <div className="absolute left-0 top-0 h-[220px] w-[220px] md:h-[320px] md:w-[320px] rounded-full bg-[#f3ebe0] opacity-60 blur-2xl md:blur-3xl" />

        <div className="absolute right-0 top-20 h-[200px] w-[200px] md:h-[280px] md:w-[280px] rounded-full bg-[#f6efe8] opacity-50 blur-2xl md:blur-3xl" />
      </div>

      <Container>
        <div className="mx-auto max-w-4xl text-center">
          <span className="text-xs sm:text-sm font-semibold uppercase tracking-[0.24em] text-[var(--primary)]">
            NatureGren Collection
          </span>

          <h1 className="mt-4 font-serif text-[2.75rem] leading-[1.05] text-[var(--text)] sm:text-5xl md:text-6xl lg:text-7xl">
            Handcrafted Jute
            <span className="block italic text-[var(--accent)]">
              Products
            </span>
          </h1>

          <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-[var(--text-muted)] md:text-lg md:leading-8">
            Discover thoughtfully handcrafted jute bags, baskets, rugs, and
            lifestyle essentials designed with timeless craftsmanship,
            exceptional quality, and sustainable living in mind.
          </p>
        </div>
      </Container>
    </section>
  );
}