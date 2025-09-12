import { useRef } from "react";

export default function Slider() {
  const sliderRef = useRef(null);

  const scrollPrev = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -window.innerWidth, behavior: "smooth" });
    }
  };

  const scrollNext = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: window.innerWidth, behavior: "smooth" });
    }
  };

  return (
    <div className="w-full pt-10">
      {/* Slider container */}
      <div className="overflow-x-auto flex snap-x snap-mandatory scroll-smooth scrollbar-hide" ref={sliderRef}>
        <div className="flex-none w-full h-64 snap-center bg-red-400 flex items-center justify-center text-white text-2xl">
          Slide 1
        </div>
        <div className="flex-none w-full h-64 snap-center bg-blue-400 flex items-center justify-center text-white text-2xl">
          Slide 2
        </div>
        <div className="flex-none w-full h-64 snap-center bg-green-400 flex items-center justify-center text-white text-2xl">
          Slide 3
        </div>
      </div>

      {/* Prev Button */}
      <button
        onClick={scrollPrev}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black/50 text-white px-3 py-2 rounded-full"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        </svg>

      </button>

      {/* Next Button */}
      <button
        onClick={scrollNext}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black/50 text-white px-3 py-2 rounded-full"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        </svg>

      </button>
    </div>
  );
}
