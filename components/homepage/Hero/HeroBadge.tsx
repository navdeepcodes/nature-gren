import { Leaf } from "lucide-react";

export default function HeroBadge() {
  return (
    <div
      className="
        absolute
        right-5
        top-5
        flex
        items-center
        gap-3
        rounded-full
        bg-white
        px-4
        py-3
        shadow-lg
      "
    >
      <div
        className="
          flex
          h-10
          w-10
          items-center
          justify-center
          rounded-full
          bg-[#eef6e8]
        "
      >
        <Leaf
          size={18}
          className="text-[var(--primary)]"
        />
      </div>

      <div>
        <p className="text-[10px] uppercase tracking-[0.18em] text-[var(--text-muted)]">
          Eco Friendly
        </p>

        <p className="text-sm font-semibold text-[var(--text)]">
          100% Jute
        </p>
      </div>
    </div>
  );
}