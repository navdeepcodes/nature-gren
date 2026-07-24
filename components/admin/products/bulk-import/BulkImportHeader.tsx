"use client";

import { Sparkles, X } from "lucide-react";

interface BulkImportHeaderProps {
  onClose: () => void;
  generating: boolean;
  saving: boolean;
}

export default function BulkImportHeader({
  onClose,
  generating,
  saving,
}: BulkImportHeaderProps) {
  const disabled = generating || saving;

  return (
    <div className="border-b border-[#ebe7df] px-8 py-6">
      <div className="flex items-center justify-between">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-[#f3f7f2] px-3 py-1 text-sm font-medium text-[#2E4B2C]">
            <Sparkles size={15} />
            AI Bulk Import
          </div>

          <h2 className="mt-3 text-3xl font-bold text-[#1f2b1d]">
            Bulk Import Products
          </h2>

          <p className="mt-2 text-gray-500">
            Upload multiple product images and let AI create product
            information automatically.
          </p>
        </div>

        <button
          onClick={onClose}
          disabled={disabled}
          className="rounded-xl p-2 transition hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-50"
        >
          <X size={22} />
        </button>
      </div>
    </div>
  );
}