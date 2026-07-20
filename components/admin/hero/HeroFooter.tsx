"use client";

import { Save } from "lucide-react";

interface HeroFooterProps {
  hasChanges: boolean;
  saving: boolean;
  onSave: () => void;
}

export default function HeroFooter({
  hasChanges,
  saving,
  onSave,
}: HeroFooterProps) {
  return (
    <div className="flex items-center justify-between border-t border-[#ebe7df] pt-6">
      <span className="text-sm text-gray-500">
        {hasChanges
          ? "You have unsaved changes."
          : "Everything is up to date."}
      </span>

      <button
        type="button"
        onClick={onSave}
        disabled={!hasChanges || saving}
        className="inline-flex h-14 items-center gap-3 rounded-xl bg-[#2E4B2C] px-8 font-medium text-white transition hover:bg-[#243d23] disabled:cursor-not-allowed disabled:opacity-50"
      >
        <Save size={18} />

        {saving ? "Saving..." : "Save Changes"}
      </button>
    </div>
  );
}