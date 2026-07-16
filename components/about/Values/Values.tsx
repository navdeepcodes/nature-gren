import {
  Leaf,
  HandHeart,
  Award,
  Users,
} from "lucide-react";

import Container from "@/components/layout/Container";

const values = [
  {
    icon: Leaf,
    title: "Sustainability",
    description:
      "Every decision we make is focused on reducing environmental impact through renewable materials and responsible production.",
  },
  {
    icon: HandHeart,
    title: "Craftsmanship",
    description:
      "Our artisans combine generations of skill with modern design to create products built with pride and precision.",
  },
  {
    icon: Award,
    title: "Premium Quality",
    description:
      "Each NatureGren product undergoes careful inspection to ensure durability, elegance and lasting performance.",
  },
  {
    icon: Users,
    title: "Community",
    description:
      "By supporting skilled artisans, we help preserve traditional craftsmanship while creating meaningful livelihoods.",
  },
];

export default function Values() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--primary)]">
            Our Values
          </span>

          <h2 className="mt-5 font-serif text-5xl text-[var(--text)]">
            What We Stand For
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[var(--text-muted)]">
            NatureGren is built on timeless values that guide every product we
            create and every relationship we build.
          </p>
        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {values.map((value) => {
            const Icon = value.icon;

            return (
              <div
                key={value.title}
                className="rounded-[30px] border border-[#ece6dc] bg-[#fcfaf7] p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#edf6e8]">
                  <Icon
                    size={30}
                    className="text-[var(--primary)]"
                  />
                </div>

                <h3 className="mt-8 text-2xl font-semibold text-[var(--text)]">
                  {value.title}
                </h3>

                <p className="mt-4 leading-7 text-[var(--text-muted)]">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}