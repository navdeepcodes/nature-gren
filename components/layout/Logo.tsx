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
          text-[34px]
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
          text-[11px]
          uppercase
          tracking-[0.28em]
          text-[var(--text-muted)]
        "
      >
        Handcrafted Jute
      </span>
    </Link>
  );
}