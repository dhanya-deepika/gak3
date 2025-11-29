"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function WhyChooseUs() {
  const [current, setCurrent] = useState(0);

  const slides = [
    { type: "image", src: "/whychoose/why1.jpg" },
    { type: "image", src: "/whychoose/why2.jpg" },
    { type: "image", src: "/whychoose/why3.jpg" },
    { type: "image", src: "/whychoose/why4.jpg" },
    { type: "image", src: "/whychoose/why5.jpg" },
  ];

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full bg-white py-10 sm:py-14 md:py-20 flex items-center justify-center">
      <div className="max-w-[1200px] w-full flex flex-col md:flex-row items-center justify-between gap-8 px-4 sm:px-6 md:px-10">

        {/* Text Section */}
<div className="w-full md:w-1/3 lg:w-[300px] text-center md:text-right">
  <h2
    className="font-sora text-gray-900 text-[28px] sm:text-[40px] md:text-[48px]"
    style={{
      fontWeight: 400,
      lineHeight: "100%",
      letterSpacing: "-0.02em", // -2%
    }}
  >
    WHY <br className="hidden md:block" /> CHOOSE <br className="hidden md:block" /> US?
  </h2>
</div>






        {/* Slider Section */}
       {/* Slider Section */}
      {/* Slider Section */}
      <div
        className="relative w-full sm:max-w-[400px] md:max-w-[460px] lg:max-w-[500px]
                   h-[200px] sm:h-[300px] md:h-[380px] lg:h-[420px]
                   flex items-center justify-center mx-auto
                   pb-10 sm:pb-12 md:pb-14"
      >


          {slides.map((slide, i) => {
            const index = (i - current + slides.length) % slides.length;

            let scale = 1,
              translateX = 0,
              translateY = 40,
              zIndex = 0,
              opacity = 0;

            if (index === 0) {
              scale = 1;
              translateX = 0;
              translateY = 0;
              zIndex = 50;
              opacity = 1;
            } else if (index === 1) {
              scale = 0.9;
              translateX = 50;
              translateY = 20;
              zIndex = 40;
              opacity = 0.9;
            } else if (index === 2) {
              scale = 0.8;
              translateX = 90;
              translateY = 25;
              zIndex = 30;
              opacity = 0.8;
            } else if (index === 3) {
              scale = 0.7;
              translateX = 130;
              translateY = 30;
              zIndex = 20;
              opacity = 0.7;
            } else if (index === 4) {
              scale = 0.6;
              translateX = 170;
              translateY = 35;
              zIndex = 10;
              opacity = 0.6;
            }

            return (
              <div
                key={i}
                className="absolute flex items-center justify-center overflow-hidden transition-all duration-500 ease-in-out shadow-lg w-[240px] sm:w-[320px] md:w-[420px] h-[200px] sm:h-[280px] md:h-[360px] rounded-[28px]"
                style={{
                  transform: `translateX(${translateX}px) translateY(${translateY}px) scale(${scale})`,
                  zIndex,
                  opacity,
                  borderWidth: "2px",
                  borderStyle: "solid",
                  borderColor: "transparent",
                  background: "white",
                  backgroundImage:
                    "linear-gradient(white, white), linear-gradient(90deg, #B74254 0%, #231F51 100%)",
                  backgroundOrigin: "border-box",
                  backgroundClip: "padding-box, border-box",
                }}
              >
                {slide.type === "image" ? (
                  <Image
                    src={slide.src}
                    alt={`Slide ${i + 1}`}
                    fill
                    className="object-cover rounded-[24px]"
                  />
                ) : (
                  <div className="flex items-center justify-center w-full h-full text-lg sm:text-xl md:text-2xl font-medium text-black px-6 text-center">
                    {slide.type}
                  </div>
                )}
              </div>
            );
          })}

         {/* Left Arrow */}
         <button
           onClick={prevSlide}
           className="hidden md:block absolute -left-4 sm:-left-6 md:-left-8 top-1/2 -translate-y-1/2 hover:scale-110 text-black text-lg sm:text-xl z-50"
         >
           ◀
         </button>

         {/* Right Arrow */}
         <button
           onClick={nextSlide}
           className="hidden md:block absolute -right-10 sm:-right-20 md:-right-25 top-1/2 -translate-y-1/2 hover:scale-110 text-black text-lg sm:text-xl z-50"
         >
           ▶
         </button>


          {/* Dots */}
          <div className="absolute -bottom-6 sm:-bottom-8 left-1/2 -translate-x-1/2 flex gap-2 sm:gap-3 z-50">
            {slides.map((_, i) => (
              <span
                key={i}
                onClick={() => setCurrent(i)}
                className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full cursor-pointer transition-all duration-300"
                style={
                  i === current
                    ? { background: "linear-gradient(90deg, #B74254, #231F51)" }
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
      </div>
    </section>
  );
}