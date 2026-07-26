"use client";

import TimelineItem from "./TimelineItem";
import { legacyData } from "./legacyData";

export default function Timeline() {
  return (
    <div className="relative mx-auto mt-24 max-w-6xl">
      <div className="absolute left-1/2 hidden h-full w-px -translate-x-1/2 bg-[#2E4B2C]/20 lg:block" />

      <div className="space-y-16">
        {legacyData.map((item, index) => (
          <div key={item.year} className="relative">
            <div className="absolute left-1/2 top-12 hidden h-5 w-5 -translate-x-1/2 rounded-full border-4 border-white bg-[#2E4B2C] lg:block" />

            <TimelineItem
              {...item}
              isLeft={index % 2 === 0}
            />
          </div>
        ))}
      </div>
    </div>
  );
}