"use client";

interface HeroContentSectionProps {
  title: string;
  accent: string;
  description: string;

  onTitleChange: (value: string) => void;
  onAccentChange: (value: string) => void;
  onDescriptionChange: (value: string) => void;
}

export default function HeroContentSection({
  title,
  accent,
  description,
  onTitleChange,
  onAccentChange,
  onDescriptionChange,
}: HeroContentSectionProps) {
  return (
    <div className="space-y-8">
      {/* Heading */}

      <div>
        <label className="mb-2 block text-sm font-semibold text-[#1f2b1d]">
          Heading
        </label>

        <input
          value={title}
          onChange={(e) => onTitleChange(e.target.value)}
          className="h-14 w-full rounded-xl border border-[#d9d6cf] px-5 outline-none transition focus:border-[#2E4B2C]"
        />
      </div>

      {/* Accent */}

      <div>
        <label className="mb-2 block text-sm font-semibold text-[#1f2b1d]">
          Accent Text
        </label>

        <input
          value={accent}
          onChange={(e) => onAccentChange(e.target.value)}
          className="h-14 w-full rounded-xl border border-[#d9d6cf] px-5 outline-none transition focus:border-[#2E4B2C]"
        />
      </div>

      {/* Description */}

      <div>
        <label className="mb-2 block text-sm font-semibold text-[#1f2b1d]">
          Description
        </label>

        <textarea
          rows={5}
          value={description}
          onChange={(e) => onDescriptionChange(e.target.value)}
          className="w-full rounded-xl border border-[#d9d6cf] p-5 outline-none transition focus:border-[#2E4B2C]"
        />
      </div>
    </div>
  );
}