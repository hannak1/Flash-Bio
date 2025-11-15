"use client";

import Image from "next/image";
import CarouselIndicator from "@/components/Carousel/carousel";

const events = [
  { title: "Giants at Dodgers", img: "/images/giants.png" },
  { title: "NBA YoungBoy", img: "/images/NBAyoung.png" },
  { title: "Warriors at Lakers", img: "/images/lakers.png" },
  { title: "Tate McRae", img: "/images/tate.png" },
];

export default function TrendingEvents() {
  return (
    <section className="mb-16">

      {/* TITLE + CAROUSEL ON RIGHT */}
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-2xl font-semibold text-green-800">
          Trending Events Near Claremont
        </h3>

        {/* INLINE CAROUSEL CONTROL */}
        <div className="flex items-center">
          <CarouselIndicator
            current={1}
            total={events.length}
            onPrev={() => {}}
            onNext={() => {}}
          />
        </div>
      </div>

      {/* EVENT CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {events.map((event, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition"
          >
            <img
              src={event.img}
              alt={event.title}
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h4 className="font-semibold text-gray-800">{event.title}</h4>
              <p className="text-sm text-gray-500">Date Here</p>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}
