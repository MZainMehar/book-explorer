"use client";

import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    image: "/library-hero-1.png",
    eyebrow: "Explore the library",
    title: "For minds that wander and words that last.",
    description:
      "Discover books from around the world and explore their ratings, authors, and publication history.",
    button: "Explore books",
  },
  {
    image: "/library-hero-2.png",
    eyebrow: "Find your next read",
    title: "Every great journey starts with a book.",
    description:
      "Search thousands of books and find something worth getting lost in.",
    button: "Browse books",
  },
  {
    image: "/library-hero-3.png",
    eyebrow: "Discover something new",
    title: "Stories waiting to be discovered.",
    description:
      "Explore popular titles, discover new authors, and see what other readers are rating.",
    button: "Start exploring",
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((current) =>
      current === slides.length - 1 ? 0 : current + 1,
    );
  };

  const previousSlide = () => {
    setCurrentSlide((current) =>
      current === 0 ? slides.length - 1 : current - 1,
    );
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[420px] overflow-hidden sm:h-[450px] lg:h-[480px]">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.image}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
            index === currentSlide
              ? "opacity-100"
              : "pointer-events-none opacity-0"
          }`}
        >
          <img
            src={slide.image}
            alt=""
            className="h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-stone-950/60" />
        </div>
      ))}

      {/* Content */}
      <div className="relative mx-auto flex h-full max-w-7xl items-center justify-center px-5 text-center lg:px-8">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-amber-300">
            {slides[currentSlide].eyebrow}
          </p>

          <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
            {slides[currentSlide].title}
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-stone-200 sm:text-lg">
            {slides[currentSlide].description}
          </p>

          <a
            href="#explore"
            className="mt-8 inline-flex rounded-full bg-amber-500 px-6 py-3 text-sm font-medium text-white transition hover:bg-amber-600"
          >
            {slides[currentSlide].button}
          </a>
        </div>
      </div>

      {/* Previous */}
      <button
        type="button"
        onClick={previousSlide}
        aria-label="Previous slide"
        className="absolute left-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-black/20 text-white backdrop-blur-sm transition hover:bg-black/40"
      >
        <ChevronLeft size={20} />
      </button>

      {/* Next */}
      <button
        type="button"
        onClick={nextSlide}
        aria-label="Next slide"
        className="absolute right-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-black/20 text-white backdrop-blur-sm transition hover:bg-black/40"
      >
        <ChevronRight size={20} />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 items-center gap-2">
        {slides.map((slide, index) => (
          <button
            key={slide.image}
            type="button"
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "w-6 bg-amber-400"
                : "w-2 bg-white/60 hover:bg-white"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
