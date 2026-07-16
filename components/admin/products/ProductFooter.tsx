"use client";

interface ProductFooterProps {
  editing: boolean;

  saving: boolean;

  onCancel: () => void;

  onSave: () => void;
}

export default function ProductFooter({
  editing,
  saving,
  onCancel,
  onSave,
}: ProductFooterProps) {
  return (
    <div className="flex justify-end gap-4 border-t px-8 py-6">
      <button
        onClick={onCancel}
        className="h-12 rounded-xl border px-6"
      >
        Cancel
      </button>

      <button
        onClick={onSave}
        disabled={saving}
        className="h-12 rounded-xl bg-[#2E4B2C] px-7 text-white transition hover:bg-[#243d23] disabled:cursor-not-allowed disabled:opacity-50"
      >
        {saving
          ? "Saving..."
          : editing
          ? "Update Product"
          : "Save Product"}
      </button>
    </div>
  );
}