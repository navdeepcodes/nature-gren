import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export default function Container({
  children,
  className = "",
}: ContainerProps) {
  return (
    <div
      className={`
        mx-auto
        w-full
        max-w-[1320px]
        px-1
        sm:px-2
        lg:px-8
        ${className}
      `}
    >
      {children}
    </div>
  );
}