"use client";

interface AboutFooterProps {
  saving: boolean;
  onSave: () => void;
}

export default function AboutFooter({
  saving,
  onSave,
}: AboutFooterProps) {
  return (
    <div className="sticky bottom-0 z-20 border-t border-[#ebe7df] bg-white/95 backdrop-blur">
      <div className="flex items-center justify-end px-8 py-6">
        <button
          onClick={onSave}
          disabled={saving}
          className="inline-flex h-14 items-center rounded-xl bg-[#2E4B2C] px-8 font-medium text-white transition hover:bg-[#243d23] disabled:cursor-not-allowed disabled:opacity-60"
        >
          {saving ? "Saving..." : "Save Changes"}
        </button>
      </div>
    </div>
  );
}