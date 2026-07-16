import Container from "@/components/layout/Container";

const specifications = [
  ["Material", "100% Natural Jute"],
  ["Usage", "Shopping, Gifting, Retail"],
  ["Color", "Natural Brown"],
  ["Handle", "Soft Cotton"],
  ["Eco Friendly", "Yes"],
  ["Customization", "Available"],
];

export default function Specifications() {
  return (
    <section className="bg-[#fcfaf7] py-24">
      <Container>
        <div className="mx-auto max-w-5xl">
          <h2 className="font-serif text-4xl text-[var(--text)]">
            Specifications
          </h2>

          <div className="mt-10 overflow-hidden rounded-[28px] border border-[#ece6dc] bg-white">
            {specifications.map(([key, value], index) => (
              <div
                key={key}
                className={`grid grid-cols-2 px-8 py-6 ${
                  index !== specifications.length - 1
                    ? "border-b border-[#ece6dc]"
                    : ""
                }`}
              >
                <span className="font-semibold text-[var(--text)]">
                  {key}
                </span>

                <span className="text-[var(--text-muted)]">
                  {value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}