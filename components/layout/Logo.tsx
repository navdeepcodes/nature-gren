import Link from "next/link";

export default function Logo() {
  return (
    <Link
      href="/"
      className="flex flex-col leading-none"
    >
      <span
        className="
          font-serif
          text-[40px]
          font-semibold
          tracking-tight
          text-[var(--primary)]
        "
      >
        NatureGren
      </span>

      <span
        className="
          mt-1
          text-[12px]
          uppercase
          tracking-[0.28em]
          font-medium
          text-[var(--text-muted)]
        "
      >
        Inspired by Nature
      </span>
    </Link>
  );
}