"use client";

import { Loader2, Sparkles, Save, X } from "lucide-react";

interface BulkImportFooterProps {
  generating: boolean;
  saving: boolean;
  loadingCategories: boolean;

  imageCount: number;
  successCount: number;
  failedCount: number;

  hasResults: boolean;

  onGenerate: () => void;
  onSave: () => void;
  onCancel: () => void;
}

export default function BulkImportFooter({
  generating,
  saving,
  loadingCategories,

  imageCount,
  successCount,
  failedCount,

  hasResults,

  onGenerate,
  onSave,
  onCancel,
}: BulkImportFooterProps) {
  const generateDisabled =
    generating ||
    saving ||
    loadingCategories ||
    imageCount === 0;

  const saveDisabled =
    generating ||
    saving ||
    successCount === 0;

  return (
    <div className="border-t border-[#ebe7df] bg-white px-8 py-6">

      <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">

        <div>

          <p className="text-sm font-medium text-[#1f2b1d]">
            {imageCount} image{imageCount !== 1 && "s"} selected
          </p>

          <p className="mt-1 text-sm text-gray-500">
            {successCount} ready to save

            {failedCount > 0 && (
              <>
                {" • "}
                <span className="text-red-600">
                  {failedCount} failed
                </span>
              </>
            )}
          </p>

        </div>

        <div className="flex items-center gap-3">

          <button
            onClick={onCancel}
            disabled={generating || saving}
            className="inline-flex items-center gap-2 rounded-xl border border-[#ebe7df] px-5 py-3 font-medium transition hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-50"
          >
            <X size={18} />
            Cancel
          </button>

          <button
            onClick={onGenerate}
            disabled={generateDisabled}
            className="inline-flex items-center gap-2 rounded-xl bg-[#2E4B2C] px-5 py-3 font-medium text-white transition hover:bg-[#233a22] disabled:cursor-not-allowed disabled:opacity-50"
          >
            {generating ? (
              <>
                <Loader2
                  size={18}
                  className="animate-spin"
                />
                Generating...
              </>
            ) : (
              <>
                <Sparkles size={18} />
                Generate Products
              </>
            )}
          </button>

          <button
            onClick={onSave}
            disabled={saveDisabled}
            className="inline-flex items-center gap-2 rounded-xl bg-[#1f2b1d] px-5 py-3 font-medium text-white transition hover:bg-black disabled:cursor-not-allowed disabled:opacity-50"
          >
            {saving ? (
              <>
                <Loader2
                  size={18}
                  className="animate-spin"
                />
                Saving...
              </>
            ) : (
              <>
                <Save size={18} />
                Save All
              </>
            )}
          </button>

        </div>

      </div>

    </div>
  );
}