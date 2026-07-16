"use client";

interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
}

export default function SearchInput({
  value,
  onChange,
}: SearchInputProps) {
  return (
    <input
      autoFocus
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder="Search handcrafted jute products..."
      className="
        h-14
        w-full
        rounded-2xl
        border
        border-[var(--border)]
        bg-white
        px-5
        text-[15px]
        outline-none
        transition
        focus:border-[var(--primary)]
      "
    />
  );
}