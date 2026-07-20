"use client";

import { Plus, Trash2 } from "lucide-react";
import { AboutFeature } from "@/lib/cms/aboutFeatures";

interface Props {
  features: AboutFeature[];
  onChange: (features: AboutFeature[]) => void;
}

export default function AboutFeaturesSection({
  features,
  onChange,
}: Props) {
  function update(
    index: number,
    key: keyof AboutFeature,
    value: any
  ) {
    const copy = [...features];
    copy[index] = {
      ...copy[index],
      [key]: value,
    };
    onChange(copy);
  }

  function remove(index: number) {
    const copy = [...features];
    copy.splice(index, 1);
    onChange(copy);
  }

  function add() {
    onChange([
      ...features,
      {
        title: "",
        description: "",
        icon: "Leaf",
        display_order: features.length + 1,
      },
    ]);
  }

  return (
    <section className="rounded-[28px] border border-[#ebe7df] bg-white p-8 shadow-sm">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-2xl font-semibold text-[#1f2b1d]">
          Features
        </h2>

        <button
          onClick={add}
          className="flex items-center gap-2 rounded-xl bg-[#2E4B2C] px-5 py-3 text-white"
        >
          <Plus size={18} />
          Add Feature
        </button>
      </div>

      <div className="space-y-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="rounded-2xl border border-[#ebe7df] p-6"
          >
            <div className="mb-4 flex justify-between">
              <h3 className="font-semibold">
                Feature {index + 1}
              </h3>

              <button
                onClick={() => remove(index)}
                className="text-red-500"
              >
                <Trash2 size={18} />
              </button>
            </div>

            <div className="space-y-4">
              <input
                placeholder="Title"
                value={feature.title}
                onChange={(e) =>
                  update(index, "title", e.target.value)
                }
                className="h-12 w-full rounded-xl border px-4"
              />

              <textarea
                rows={3}
                placeholder="Description"
                value={feature.description}
                onChange={(e) =>
                  update(index, "description", e.target.value)
                }
                className="w-full rounded-xl border p-4"
              />

              <input
                placeholder="Icon"
                value={feature.icon}
                onChange={(e) =>
                  update(index, "icon", e.target.value)
                }
                className="h-12 w-full rounded-xl border px-4"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}