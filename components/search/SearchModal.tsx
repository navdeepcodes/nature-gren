"use client";

import {
  useEffect,
  useMemo,
  useState,
} from "react";

import { X } from "lucide-react";

import SearchInput from "./SearchInput";
import SearchResults from "./SearchResults";

import type { SearchProduct } from "@/lib/search/products";

interface SearchModalProps {
  open: boolean;
  onClose: () => void;
  products: SearchProduct[];
}

export default function SearchModal({
  open,
  onClose,
  products,
}: SearchModalProps) {
  const [query, setQuery] = useState("");

  useEffect(() => {
    if (!open) return;

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        onClose();
      }
    }

    window.addEventListener(
      "keydown",
      handleKeyDown
    );

    return () =>
      window.removeEventListener(
        "keydown",
        handleKeyDown
      );
  }, [open, onClose]);

  useEffect(() => {
    if (!open) {
      setQuery("");
    }
  }, [open]);

  const filteredProducts = useMemo(() => {
    const search = query.trim().toLowerCase();

    if (!search) {
      return products;
    }

    return products.filter((product) =>
      product.name
        .toLowerCase()
        .includes(search)
    );
  }, [products, query]);

  if (!open) return null;

  return (
    <div
      onClick={onClose}
      className="
        fixed
        inset-0
        z-[100]
        flex
        items-start
        justify-center
        bg-black/40
        px-4
        pt-24
        backdrop-blur-sm
      "
    >
      <div
        onClick={(e) =>
          e.stopPropagation()
        }
        className="
          w-full
          max-w-2xl
          rounded-[32px]
          bg-white
          p-8
          shadow-2xl
        "
      >
        <div className="mb-6 flex items-center justify-between">
          <h2 className="font-serif text-3xl">
            Search Products
          </h2>

          <button
            onClick={onClose}
            className="
              rounded-full
              p-2
              transition
              hover:bg-gray-100
            "
          >
            <X size={20} />
          </button>
        </div>

        <SearchInput
          value={query}
          onChange={setQuery}
        />

        <SearchResults
          products={filteredProducts}
          onClose={onClose}
        />
      </div>
    </div>
  );
}