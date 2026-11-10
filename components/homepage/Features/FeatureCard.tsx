import type { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
}

export default function FeatureCard({
  title,
  description,
  icon: Icon,
}: FeatureCardProps) {
  return (
    <li className="lg:border-l lg:border-[#f4efe6]/15 lg:px-8 lg:pt-12 lg:first:border-l-0 lg:first:pl-0 lg:last:pr-0">
      <Icon
        aria-hidden
        size={28}
        strokeWidth={1.5}
        className="text-[#c9ae86]"
      />

      <h3 className="mt-6 font-serif text-2xl leading-tight lg:text-[1.75rem]">
        {title}
      </h3>

      <p className="mt-3 max-w-xs text-[0.95rem] leading-7 text-[#f4efe6]/65">
        {description}
      </p>
    </li>
  );
}
