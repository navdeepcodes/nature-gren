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
        border-[var(--border)]
        bg-white
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-xl
      "
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-[#f5f3ee]">
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
          <div className="flex h-full items-center justify-center text-sm text-gray-500">
            No Image
          </div>
        )}
      </div>

      <div className="flex items-center justify-between p-6">
        <h3 className="text-xl font-semibold text-[var(--text)]">
          {title}
        </h3>

        <ArrowRight
          size={20}
          className="
            transition-transform
            duration-300
            group-hover:translate-x-1
          "
        />
      </div>
    </Link>
  );
}