import Container from "@/components/layout/Container";

export default function ShopHeader() {
  return (
    <section className="relative overflow-hidden bg-[var(--background)] pt-28 pb-16 lg:pt-36 lg:pb-20">
      {/* Background Glow */}

      <div className="absolute inset-0 -z-10">
        <div className="absolute left-0 top-0 h-[320px] w-[320px] rounded-full bg-[#f3ebe0] opacity-60 blur-3xl" />

        <div className="absolute right-0 top-20 h-[280px] w-[280px] rounded-full bg-[#f6efe8] opacity-50 blur-3xl" />
      </div>

      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.26em] text-[var(--primary)]">
            NatureGren Collection
          </span>

          <h1 className="mt-5 font-serif text-5xl leading-[1.05] text-[var(--text)] md:text-6xl lg:text-7xl">
            Handcrafted Jute
            <span className="block italic text-[var(--accent)]">
              Products
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[var(--text-muted)]">
            Discover thoughtfully handcrafted jute bags, baskets,
            rugs and lifestyle essentials designed with timeless
            craftsmanship and sustainable living in mind.
          </p>
        </div>
      </Container>
    </section>
  );
}