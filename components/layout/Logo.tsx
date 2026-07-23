import Link from "next/link";

export default function Logo() {
  return (
    <Link
      href="/"
      className="flex flex-col leading-none select-none"
    >
      <span
        className="
          font-serif
          font-semibold
          tracking-tight
          text-[var(--primary)]
          text-[30px]
          sm:text-[34px]
          lg:text-[40px]
        "
      >
        NatureGren
      </span>

      <span
        className="
          mt-1
          text-[10px]
          sm:text-[11px]
          lg:text-[12px]
          uppercase
          tracking-[0.26em]
          font-medium
          text-[var(--text-muted)]
        "
      >
        Inspired by Nature
      </span>
    </Link>
  );
}