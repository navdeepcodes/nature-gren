interface ProductSpecificationsProps {
  category?: string | null;
}

export default function ProductSpecifications({
  category,
}: ProductSpecificationsProps) {
  const specs = [
    {
      label: "Material",
      value: "Natural Jute",
    },
    {
      label: "Category",
      value: category || "Lifestyle",
    },
    {
      label: "Eco Friendly",
      value: "Yes",
    },
    {
      label: "Customization",
      value: "Available",
    },
    {
      label: "Bulk Orders",
      value: "Accepted",
    },
    {
      label: "Country of Origin",
      value: "India",
    },
  ];

  return (
    <section className="mt-24">
      <h2 className="font-serif text-4xl text-[var(--text)]">
        Product Specifications
      </h2>

      <div className="mt-10 overflow-hidden rounded-[30px] border border-[var(--border)] bg-white">
        {specs.map((spec, index) => (
          <div
            key={spec.label}
            className={`flex items-center justify-between px-8 py-6 ${
              index !== specs.length - 1
                ? "border-b border-[var(--border)]"
                : ""
            }`}
          >
            <span className="font-medium text-[var(--text-muted)]">
              {spec.label}
            </span>

            <span className="font-semibold text-[var(--text)]">
              {spec.value}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}