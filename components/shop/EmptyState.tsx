import Link from "next/link";
import { PackageSearch } from "lucide-react";

export default function EmptyState() {
  return (
    <section className="py-24">
      <div className="mx-auto flex max-w-xl flex-col items-center rounded-[36px] border border-[var(--border)] bg-white px-10 py-20 text-center shadow-sm">
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#f4efe8]">
          <PackageSearch
            size={36}
            className="text-[var(--primary)]"
          />
        </div>

        <h2 className="mt-8 font-serif text-3xl text-[var(--text)]">
          No Products Found
        </h2>

        <p className="mt-4 max-w-md leading-7 text-[var(--text-muted)]">
          We couldn't find any products matching your
          selection. Please browse all products or check
          back again soon.
        </p>

        <Link
          href="/shop"
          className="
            mt-10
            inline-flex
            h-12
            items-center
            rounded-full
            bg-[var(--primary)]
            px-8
            font-medium
            text-white
            transition
            hover:opacity-90
          "
        >
          View All Products
        </Link>
      </div>
    </section>
  );
}