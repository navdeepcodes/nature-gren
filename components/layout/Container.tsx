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
        px-2.5
        sm:px-3.5
        lg:px-8
        ${className}
      `}
    >
      {children}
    </div>
  );
}