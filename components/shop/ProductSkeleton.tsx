export default function ProductSkeleton() {
  return (
    <div
      className="
        overflow-hidden
        rounded-[30px]
        border
        border-[var(--border)]
        bg-white
        animate-pulse
      "
    >
      {/* Image */}

      <div className="aspect-square bg-[#ece7df]" />

      {/* Content */}

      <div className="space-y-4 p-6">
        <div className="h-6 w-24 rounded-full bg-[#ece7df]" />

        <div className="space-y-3">
          <div className="h-7 w-4/5 rounded bg-[#ece7df]" />

          <div className="h-4 w-full rounded bg-[#ece7df]" />

          <div className="h-4 w-3/4 rounded bg-[#ece7df]" />
        </div>

        <div className="flex items-center justify-between pt-4">
          <div className="h-6 w-20 rounded bg-[#ece7df]" />

          <div className="h-5 w-16 rounded bg-[#ece7df]" />
        </div>
      </div>
    </div>
  );
}