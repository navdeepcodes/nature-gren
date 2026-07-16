import Container from "@/components/layout/Container";

const stats = [
  {
    value: "10+",
    label: "Years Experience",
  },
  {
    value: "5000+",
    label: "Happy Customers",
  },
  {
    value: "100+",
    label: "Product Designs",
  },
  {
    value: "100%",
    label: "Natural Jute",
  },
];

export default function Stats() {
  return (
    <section className="bg-[var(--primary)] py-24 text-white">
      <Container>
        <div className="grid gap-12 text-center md:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-[28px] border border-white/15 bg-white/5 p-10 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:bg-white/10"
            >
              <div className="text-5xl font-serif">
                {stat.value}
              </div>

              <div className="mt-4 text-base uppercase tracking-[0.2em] text-white/75">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}