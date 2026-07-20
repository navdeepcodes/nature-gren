"use client";

interface HeroButtonsSectionProps {
  primaryButton: string;
  secondaryButton: string;

  onPrimaryButtonChange: (value: string) => void;
  onSecondaryButtonChange: (value: string) => void;
}

export default function HeroButtonsSection({
  primaryButton,
  secondaryButton,
  onPrimaryButtonChange,
  onSecondaryButtonChange,
}: HeroButtonsSectionProps) {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {/* Primary Button */}

      <div>
        <label className="mb-2 block text-sm font-semibold text-[#1f2b1d]">
          Primary Button
        </label>

        <input
          value={primaryButton}
          onChange={(e) =>
            onPrimaryButtonChange(e.target.value)
          }
          className="h-14 w-full rounded-xl border border-[#d9d6cf] px-5 outline-none transition focus:border-[#2E4B2C]"
        />
      </div>

      {/* Secondary Button */}

      <div>
        <label className="mb-2 block text-sm font-semibold text-[#1f2b1d]">
          Secondary Button
        </label>

        <input
          value={secondaryButton}
          onChange={(e) =>
            onSecondaryButtonChange(e.target.value)
          }
          className="h-14 w-full rounded-xl border border-[#d9d6cf] px-5 outline-none transition focus:border-[#2E4B2C]"
        />
      </div>
    </div>
  );
}