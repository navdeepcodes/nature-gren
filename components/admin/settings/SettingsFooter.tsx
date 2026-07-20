"use client";

interface SettingsFooterProps {
  saving: boolean;
  onSave: () => void;
}

export default function SettingsFooter({
  saving,
  onSave,
}: SettingsFooterProps) {
  return (
    <div className="sticky bottom-0 z-20 border-t border-[#ebe7df] bg-white/95 backdrop-blur">
      <div className="flex items-center justify-between px-8 py-6">
        <div>
          <h3 className="font-medium text-[#1f2b1d]">
            Website Settings
          </h3>

          <p className="mt-1 text-sm text-gray-500">
            Save your changes to update branding, business details and SEO across the website.
          </p>
        </div>

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