import Container from "../../layout/Container";

import FeatureCard from "./FeatureCard";
import { features } from "./featureData";

export default function Features() {
  return (
    <section className="bg-[#26301f] py-20 text-[#f4efe6] md:py-24 lg:py-32">
      <Container>
        <div className="grid gap-6 lg:grid-cols-[1fr_1fr] lg:items-end lg:gap-16">
          <h2 className="max-w-lg text-balance font-serif text-4xl leading-[1.05] md:text-5xl lg:text-6xl">
            Made from jute, made to last
          </h2>

          <p className="max-w-xl text-base leading-7 text-[#f4efe6]/70 md:text-lg md:leading-8">
            Every NatureGren piece starts as natural fibre and is
            finished by hand, so it holds up to years of use and
            breaks down cleanly when it is done.
          </p>
        </div>

        <ul className="mt-14 grid gap-x-10 gap-y-12 border-t border-[#f4efe6]/15 pt-12 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4 lg:gap-0 lg:pt-0">
          {features.map((feature) => (
            <FeatureCard
              key={feature.title}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
            />
          ))}
        </ul>
      </Container>
    </section>
  );
}
