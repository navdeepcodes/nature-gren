"use client";

import { useState } from "react";
import Image from "next/image";

import Container from "@/components/layout/Container";

const images = [
  "/images/product/product-1.jpg",
  "/images/product/product-2.jpg",
  "/images/product/product-3.jpg",
  "/images/product/product-4.jpg",
];

export default function Gallery() {
  const [selected, setSelected] = useState(images[0]);

  return (
    <section className="py-20">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[110px_1fr]">
          <div className="space-y-4">
            {images.map((image) => (
              <button
                key={image}
                onClick={() => setSelected(image)}
                className={`relative aspect-square w-full overflow-hidden rounded-2xl border ${
                  selected === image
                    ? "border-[var(--primary)]"
                    : "border-[#ece6dc]"
                }`}
              >
                <Image
                  src={image}
                  alt=""
                  fill
                  className="object-cover"
                />
              </button>
            ))}
          </div>

          <div className="relative aspect-square overflow-hidden rounded-[36px] bg-[#faf7f2]">
            <Image
              src={selected}
              alt="Product"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}