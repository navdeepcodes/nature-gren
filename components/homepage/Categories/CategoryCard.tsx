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
        rounded-[22px]
        lg:rounded-[30px]
        border
        border-[#E7DDD0]
        bg-[#F8F4EE]
        shadow-[0_6px_18px_rgba(101,67,33,0.05)]
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-[0_18px_40px_rgba(101,67,33,0.12)]
      "
    >
      <div
        className="
          relative
          aspect-square
          lg:aspect-[4/3]
          overflow-hidden
          bg-[#F3EEE6]
        "
      >
        {image ? (
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width:640px)50vw,(max-width:1024px)50vw,33vw"
            className="
              object-cover
              transition-transform
              duration-700
              group-hover:scale-105
            "
          />
        ) : (
          <div className="flex h-full items-center justify-center text-xs text-[var(--text-muted)] md:text-sm">
            No Image
          </div>
        )}
      </div>

      <div
        className="
          flex
          items-center
          justify-between
          border-t
          border-[#EEE5D8]
          bg-[#F8F4EE]
          px-3
          py-3
          sm:px-4
          sm:py-4
          lg:px-6
          lg:py-5
        "
      >
        <h3
          className="
            font-serif
            text-[1rem]
            leading-snug
            text-[var(--text)]
            sm:text-[1.15rem]
            lg:text-[1.4rem]
          "
        >
          {title}
        </h3>

        <div
          className="
            flex
            h-8
            w-8
            shrink-0
            items-center
            justify-center
            rounded-full
            bg-[#EFE6D8]
            text-[var(--text)]
            transition-all
            duration-300
            group-hover:translate-x-1
            group-hover:bg-[var(--primary)]
            group-hover:text-white
            sm:h-9
            sm:w-9
            lg:h-11
            lg:w-11
          "
        >
          <ArrowRight
            size={14}
            className="lg:h-[18px] lg:w-[18px]"
          />
        </div>
      </div>
    </Link>
  );
}