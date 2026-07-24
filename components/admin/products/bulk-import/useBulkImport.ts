"use client";

import { useEffect, useMemo, useState } from "react";

import {
  createProduct,
  getProducts,
} from "@/lib/cms/products";

import {
  getCategories,
  type Category,
} from "@/lib/cms/categories";

import type {
  AIProduct,
} from "./types";

const CONCURRENT_REQUESTS = 5;

interface UseBulkImportProps {
  onClose: () => void;
  onSaved?: () => void;
}

interface BulkImportState {
  images: string[];

  results: AIProduct[];

  categories: Category[];

  generating: boolean;

  saving: boolean;

  loadingCategories: boolean;

  completed: number;
}

const createPendingProduct = (
  imageUrl: string
): AIProduct => ({
  imageUrl,

  name: "",

  description: "",

  category: "",

  sku: "",

  features: [],

  materials: "",

  seoTitle: "",

  seoDescription: "",

  altText: "",

  tags: [],

  status: "pending",
});

export default function useBulkImport({
  onClose,
  onSaved,
}: UseBulkImportProps) {
  const [state, setState] =
    useState<BulkImportState>({
      images: [],

      results: [],

      categories: [],

      generating: false,

      saving: false,

      loadingCategories: false,

      completed: 0,
    });

  /* ---------------- Images ---------------- */

  const setImages = (
    images: string[]
  ) => {
    setState((prev) => ({
      ...prev,
      images,
    }));
  };

  /* ---------------- Categories ---------------- */

  async function loadCategories() {
    try {
      setState((prev) => ({
        ...prev,
        loadingCategories: true,
      }));

      const categories =
        await getCategories();

      setState((prev) => ({
        ...prev,
        categories,
      }));
    } finally {
      setState((prev) => ({
        ...prev,
        loadingCategories: false,
      }));
    }
  }

  useEffect(() => {
    loadCategories();
  }, []);

  /* ---------------- Helpers ---------------- */
  /* ---------------- Helpers ---------------- */

function updateResult(
  index: number,
  value: AIProduct
) {
  setState((prev) => {
    const results = [...prev.results];

    results[index] = value;

    return {
      ...prev,
      results,
    };
  });
}

function removeResult(
  index: number
) {
  setState((prev) => ({
    ...prev,
    results: prev.results.filter(
      (_, i) => i !== index
    ),
  }));
}

function editResult(
  index: number,
  updates: Partial<AIProduct>
) {
  setState((prev) => {
    const results = [...prev.results];

    results[index] = {
      ...results[index],
      ...updates,
    };

    return {
      ...prev,
      results,
    };
  });
}

function findCategoryId(
  name: string
) {
  const normalized =
    name.toLowerCase().trim();

  const exact =
    state.categories.find(
      (category) =>
        category.name
          .toLowerCase()
          .trim() === normalized
    );

  if (exact) return exact.id;

  const partial =
    state.categories.find(
      (category) => {
        const value =
          category.name
            .toLowerCase()
            .trim();

        return (
          normalized.includes(value) ||
          value.includes(normalized)
        );
      }
    );

  return partial?.id ?? null;
}

/* ---------------- Stats ---------------- */

const successCount = useMemo(
  () =>
    state.results.filter(
      (p) => p.status === "success"
    ).length,
  [state.results]
);

const failedCount = useMemo(
  () =>
    state.results.filter(
      (p) => p.status === "failed"
    ).length,
  [state.results]
);

const progress = useMemo(() => {
  if (!state.images.length) {
    return 0;
  }

  return (
    (state.completed /
      state.images.length) *
    100
  );
}, [
  state.completed,
  state.images,
]);

/* ---------------- AI Generation ---------------- */

async function generateSingle(
  imageUrl: string,
  index: number
) {
  try {
    const response = await fetch(
      "/api/admin/ai/product",
      {
        method: "POST",

        headers: {
          "Content-Type":
            "application/json",
        },

        body: JSON.stringify({
          imageUrl,

          categories:
            state.categories.map(
              (category) => ({
                id: category.id,
                name: category.name,
              })
            ),
        }),
      }
    );

    if (!response.ok) {
      throw new Error(
        "AI generation failed."
      );
    }

    const data =
      await response.json();

    updateResult(index, {
      imageUrl,

      name: data.name ?? "",

      description:
        data.description ?? "",

      category:
        data.category ?? "",

      sku: data.sku ?? "",

      features:
        data.features ?? [],

      materials:
        data.materials ?? "",

      seoTitle:
        data.seoTitle ?? "",

      seoDescription:
        data.seoDescription ?? "",

      altText:
        data.altText ?? "",

      tags:
        data.tags ?? [],

      status: "success",
    });
  } catch (err) {
    updateResult(index, {
      imageUrl,

      name: "",

      description: "",

      category: "",

      sku: "",

      features: [],

      materials: "",

      seoTitle: "",

      seoDescription: "",

      altText: "",

      tags: [],

      status: "failed",

      error:
        err instanceof Error
          ? err.message
          : "Unknown Error",
    });
  } finally {
    setState((prev) => ({
      ...prev,
      completed:
        prev.completed + 1,
    }));
  }
}

/* ---------------- Retry ---------------- */

async function retryProduct(
  index: number
) {
  updateResult(index, {
    ...state.results[index],
    status: "pending",
    error: undefined,
  });

  await generateSingle(
    state.results[index].imageUrl,
    index
  );
}

/* ---------------- Generate ---------------- */

async function handleGenerate() {
  if (!state.images.length) {
    return;
  }

  if (
    state.categories.length === 0
  ) {
    alert(
      "No categories found."
    );
    return;
  }

  const pending =
    state.images.map(
      createPendingProduct
    );

  setState((prev) => ({
    ...prev,

    generating: true,

    completed: 0,

    results: pending,
  }));

  try {
    for (
      let start = 0;
      start <
      state.images.length;
      start +=
        CONCURRENT_REQUESTS
    ) {
      const batch =
        state.images.slice(
          start,
          start +
            CONCURRENT_REQUESTS
        );

      await Promise.all(
        batch.map(
          (
            image,
            offset
          ) =>
            generateSingle(
              image,
              start + offset
            )
        )
      );
    }
  } finally {
    setState((prev) => ({
      ...prev,
      generating: false,
    }));
  }
}
/* ---------------- Save ---------------- */

async function handleSaveAll() {
  if (state.saving) {
    return;
  }

  const successful =
    state.results.filter(
      (product) =>
        product.status === "success"
    );

  if (!successful.length) {
    alert(
      "No products are ready to save."
    );
    return;
  }

  setState((prev) => ({
    ...prev,
    saving: true,
  }));

  try {
    const existing =
      await getProducts();

    let displayOrder =
      existing.length;

    for (const product of successful) {
      await createProduct({
        name: product.name,

        description:
          product.description,

        category_id:
          findCategoryId(
            product.category
          ),

        image_url:
          product.imageUrl,

        sku:
          product.sku.trim() || null,

        featured: false,

        active: true,

        display_order:
          ++displayOrder,
      });
    }

    alert(
      `${successful.length} products imported successfully.`
    );

    onSaved?.();

    handleClose();
  } catch (err) {
    console.error(err);

    alert(
      "Failed to save products."
    );
  } finally {
    setState((prev) => ({
      ...prev,
      saving: false,
    }));
  }
}

/* ---------------- Close ---------------- */

function handleClose() {
  setState((prev) => ({
    images: [],

    results: [],

    categories:
      prev.categories,

    generating: false,

    saving: false,

    loadingCategories: false,

    completed: 0,
  }));

  onClose();
}

/* ---------------- Exports ---------------- */

return {
  ...state,

  progress,

  successCount,

  failedCount,

  setImages,

  updateResult,

  editResult,

  removeResult,

  retryProduct,

  handleGenerate,

  handleSaveAll,

  handleClose,
};
}