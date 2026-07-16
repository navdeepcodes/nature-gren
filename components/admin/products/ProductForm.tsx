"use client";

interface ProductFormProps {
  name: string;
  description: string;

  onNameChange: (value: string) => void;
  onDescriptionChange: (value: string) => void;
}

export default function ProductForm({
  name,
  description,
  onNameChange,
  onDescriptionChange,
}: ProductFormProps) {
  return (
    <>
      <div>
        <label className="mb-2 block text-sm font-semibold">
          Product Name
        </label>

        <input
          value={name}
          onChange={(e) => onNameChange(e.target.value)}
          placeholder="Premium Jute Bag"
          className="h-14 w-full rounded-xl border px-5 outline-none transition focus:border-[#2E4B2C]"
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-semibold">
          Description
        </label>

        <textarea
          rows={4}
          value={description}
          onChange={(e) =>
            onDescriptionChange(e.target.value)
          }
          placeholder="Write product description..."
          className="w-full rounded-xl border p-5 outline-none transition focus:border-[#2E4B2C]"
        />
      </div>
    </>
  );
}