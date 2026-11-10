import Image from "next/image";
import Link from "next/link";

interface CategoryCardProps {
  title: string;
  image: string | null;
  href: string;
  featured?: boolean;
  className?: string;
}

export default function CategoryCard({
  title,
  image,
  href,
  featured = false,
  className = "",
}: CategoryCardProps) {
  return (
    <Link
      href={href}
      className={`group relative isolate block overflow-hidden rounded-[18px] bg-[#e9e0d2] outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)] focus-visible:ring-offset-4 focus-visible:ring-offset-[var(--background)] lg:rounded-[24px] ${className}`}
    >
      {image ? (
        <Image
          src={image}
          alt=""
          fill
          sizes={
            featured
              ? "(max-width:1024px) 100vw, 50vw"
              : "(max-width:1024px) 50vw, 25vw"
          }
          className="-z-10 object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.06] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
        />
      ) : null}

      {/* Legibility scrim: dark only where the title sits. */}
      <div className="absolute inset-x-0 bottom-0 -z-10 h-2/3 bg-gradient-to-t from-[#1d2418]/80 via-[#1d2418]/30 to-transparent" />

      <div className="flex h-full items-end justify-between gap-3 p-4 sm:p-5 lg:p-6">
        <h3
          className={`font-serif leading-[1.05] text-[#fbf8f2] ${
            featured
              ? "text-[1.9rem] sm:text-4xl lg:text-5xl"
              : "text-[1.2rem] sm:text-2xl lg:text-[1.65rem]"
          }`}
        >
          {title}
        </h3>

        <span
          aria-hidden
          className="mb-1 hidden h-px w-8 shrink-0 bg-[#fbf8f2]/70 transition-all duration-500 group-hover:w-14 sm:block"
        />
      </div>
    </Link>
  );
}
