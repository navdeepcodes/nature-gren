import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface CategoryCardProps {
  title: string;
  image: string | null;
  href: string;
}

export default function CategoryCard({
  title,
  image,
  href,
}: CategoryCardProps) {
  return (
    <Link
      href={href}
      className="
        group
        block
        overflow-hidden
        rounded-[30px]
        border
        border-[#E7DDD0]
        bg-[#F8F4EE]
        shadow-[0_8px_24px_rgba(101,67,33,0.06)]
        transition-all
        duration-300
        hover:-translate-y-1.5
        hover:shadow-[0_18px_40px_rgba(101,67,33,0.12)]
      "
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-[#F3EEE6]">
        {image ? (
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width:768px)100vw,(max-width:1200px)50vw,33vw"
            className="
              object-cover
              transition-transform
              duration-700
              group-hover:scale-105
            "
          />
        ) : (
          <div className="flex h-full items-center justify-center text-sm text-[var(--text-muted)]">
            No Image
          </div>
        )}
      </div>

      <div className="flex items-center justify-between border-t border-[#EEE5D8] bg-[#F8F4EE] px-6 py-5">
        <h3 className="font-serif text-[1.4rem] text-[var(--text)]">
          {title}
        </h3>

        <div
          className="
            flex
            h-11
            w-11
            items-center
            justify-center
            rounded-full
            bg-[#EFE6D8]
            text-[var(--text)]
            transition-all
            duration-300
            group-hover:bg-[var(--primary)]
            group-hover:text-white
            group-hover:translate-x-1
          "
        >
          <ArrowRight size={18} />
        </div>
      </div>
    </Link>
  );
}