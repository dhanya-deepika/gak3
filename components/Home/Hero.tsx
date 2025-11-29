"use client";
import React, { useState, useEffect } from "react";

export default function HeroSection() {
  const slides = [
    { src: "/homepagebanners/gak5.jpg", text: "Your Shortcut to Smart Real Estate Investment" },
    { src: "/homepagebanners/gak4.jpg", text: "Real Estate Investment, Reimagined" },
    { src: "/homepagebanners/gak3.jpg", text: "India's First Sky-High Residences" },
    { src: "/homepagebanners/gak1.jpg", text: "A Life in CinQ" },
    { src: "/homepagebanners/gak2.jpg", text: "Exclusivity at its Peak" },
  ];

  const [current, setCurrent] = useState(0);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section id="hero" className="relative w-full overflow-hidden">
      {/* Slides */}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide, i) => (
          <div key={i} className="flex-shrink-0 w-full relative">
            {/* Background Image */}
            <img
              src={slide.src}
              alt={`Slide ${i + 1}`}
              className="w-full h-auto sm:h-[100vh] md:h-screen object-cover"
            />

            {/* Optional Black Overlay */}
            <div className="absolute inset-0 bg-black/30"></div>

            {/* Centered Text */}
            <div
              className={`absolute inset-0 flex transition-all duration-700 ${
                i === 2
                  ? "justify-center items-end pb-10 text-center"           // Slide 3 → bottom center
                  : i === 3
                  ? "justify-start items-center text-left pl-10 sm:pl-20"   // Slide 4 → left center + padding
                  : i === 4
                  ? "justify-center items-end pb-10 text-center"            // Slide 5 → bottom center
                  : "justify-center items-center text-center"               // Others → center center
              }`}
            >
              <h2
                className={`text-white font-semibold text-2xl sm:text-2xl md:text-4xl leading-snug tracking-tight transition-opacity duration-1000 ${
                  i === current ? "opacity-100" : "opacity-0"
                }`}
                style={{
                  fontFamily: "Sora, sans-serif",
                  textShadow: "2px 2px 8px rgba(0,0,0,0.7)",
                }}
              >
                {slide.text}
              </h2>
            </div>


          </div>
        ))}
      </div>

     <div className="relative w-full">
  {/* Slides */}
  <div className="overflow-hidden">
    {slides.map((slide, idx) => (
      <div key={idx}>{/* your slide content */}</div>
    ))}
  </div>

  {/* Dots */}
  <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-3 z-10">
    {slides.map((_, i) => (
      <span
        key={i}
        onClick={() => setCurrent(i)}
        className="w-3 h-3 sm:w-4 sm:h-4 rounded-full cursor-pointer transition-all duration-300"
        style={
          i === current
            ? { background: "linear-gradient(90deg, #B74254 0%, #231F51 100%)" }
            : {
                background:
                  "linear-gradient(white, white) padding-box, linear-gradient(90deg, #B74254, #231F51) border-box",
                border: "2px solid transparent",
              }
        }
      />
    ))}
  </div>
</div>

    </section>
  );
}
