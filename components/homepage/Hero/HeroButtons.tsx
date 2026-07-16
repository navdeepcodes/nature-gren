import Link from "next/link";

interface HeroButtonsProps {
  primary: string;
  secondary: string;
}

export default function HeroButtons({
  primary,
  secondary,
}: HeroButtonsProps) {
  return (
    <div className="mt-10 flex flex-wrap items-center gap-4">
      <Link
        href="/shop"
        className="
          inline-flex
          h-14
          items-center
          justify-center
          rounded-full
          bg-[var(--primary)]
          px-8
          text-sm
          font-medium
          text-white
          transition-all
          duration-300
          hover:scale-[1.02]
          hover:bg-[var(--primary-hover)]
        "
      >
        {primary}
      </Link>

      <Link
        href="#story"
        className="
          inline-flex
          h-14
          items-center
          justify-center
          rounded-full
          border
          border-[var(--border)]
          bg-white
          px-8
          text-sm
          font-medium
          text-[var(--text)]
          transition-all
          duration-300
          hover:border-[var(--primary)]
          hover:bg-[#faf8f4]
        "
      >
        {secondary}
      </Link>
    </div>
  );
}