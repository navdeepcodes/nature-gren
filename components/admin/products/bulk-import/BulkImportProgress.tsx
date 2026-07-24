"use client";

import { Loader2 } from "lucide-react";

interface Props {
  completed: number;
  total: number;
  progress: number;
  generating: boolean;
}

export default function BulkImportProgress({
  completed,
  total,
  progress,
  generating,
}: Props) {
  if (!generating && completed === 0)
    return null;

  return (
    <div className="rounded-2xl border border-[#ebe7df] bg-[#faf9f6] p-6">

      <div className="mb-5 flex items-center justify-between">

        <div>

          <h3 className="font-semibold">
            AI Generation Progress
          </h3>

          <p className="text-sm text-gray-500">
            {completed} of {total} images processed
          </p>

        </div>

        {generating && (
          <Loader2
            size={22}
            className="animate-spin text-[#2E4B2C]"
          />
        )}

      </div>

      <div className="h-3 overflow-hidden rounded-full bg-gray-200">

        <div
          className="h-full rounded-full bg-[#2E4B2C] transition-all duration-500"
          style={{
            width: `${progress}%`,
          }}
        />

      </div>

    </div>
  );
}