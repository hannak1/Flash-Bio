"use client";

import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

interface CarouselIndicatorProps {
  current: number;     // e.g., 1
  total: number;       // e.g., 4
  onPrev?: () => void; // callback
  onNext?: () => void; // callback
}

export default function CarouselIndicator({
  current,
  total,
  onPrev,
  onNext,
}: CarouselIndicatorProps) {
  return (
    <div
      className="flex items-center justify-between px-4 select-none"
      style={{
        width: 172,
        height: 41,
        borderRadius: 20,
        borderWidth: 2,
        borderColor: "#094B35",
        borderStyle: "solid",
        backgroundColor: "white",
      }}
    >
      {/* LEFT BUTTON */}
      <button
        onClick={onPrev}
        className="p-1"
      >
        <FaChevronLeft className="text-black text-lg" />
      </button>

      {/* TEXT */}
      <span className="text-gray-700 font-medium">
        {current} of {total}
      </span>

      {/* RIGHT BUTTON */}
      <button
        onClick={onNext}
        className="p-1"
      >
        <FaChevronRight className="text-black text-lg" />
      </button>
    </div>
  );
}
