import {
  Leaf,
  HandHeart,
  PackageCheck,
  Palette,
} from "lucide-react";

const features = [
  {
    icon: Leaf,
    title: "Eco-Friendly",
    description:
      "Crafted using natural, biodegradable jute for a sustainable lifestyle.",
  },
  {
    icon: HandHeart,
    title: "Handcrafted",
    description:
      "Every product is carefully handcrafted by skilled artisans with attention to detail.",
  },
  {
    icon: Palette,
    title: "Customization",
    description:
      "Custom sizes, colors, printing and branding available for businesses and events.",
  },
  {
    icon: PackageCheck,
    title: "Bulk Orders",
    description:
      "Ideal for wholesale, exports, corporate gifting and retail businesses.",
  },
];

export default function ProductFeatures() {
  return (
    <section className="mt-20">
      <div className="grid gap-6 md:grid-cols-2">
        {features.map((feature) => {
          const Icon = feature.icon;

          return (
            <div
              key={feature.title}
              className="
                rounded-[28px]
                border
                border-[var(--border)]
                bg-white
                p-7
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-lg
              "
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#eef7ea]">
                <Icon
                  size={26}
                  className="text-[var(--primary)]"
                />
              </div>

              <h3 className="mt-6 text-xl font-semibold text-[var(--text)]">
                {feature.title}
              </h3>

              <p className="mt-3 leading-7 text-[var(--text-muted)]">
                {feature.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}