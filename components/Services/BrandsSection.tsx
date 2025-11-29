"use client";

import { useRef } from "react";

export default function BrandsSection() {
  const scrollerRef = useRef<HTMLDivElement>(null);

  const scrollByLogos = (dir: "left" | "right") => {
    const el = scrollerRef.current;
    if (!el) return;
    const logoWidth = el.firstElementChild
      ? (el.firstElementChild as HTMLElement).offsetWidth + 32 // width + gap
      : 0;

    const screenWidth = window.innerWidth;
    let visible = 5;
    if (screenWidth < 640) visible = 3;
    else if (screenWidth < 768) visible = 3;
    else if (screenWidth < 1024) visible = 4;

    const amount = logoWidth * visible;
    el.scrollBy({
      left: dir === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  const brands = Array.from(
    { length: 27 },
    (_, i) => `/projectlogos/logo${i + 1}.jpg`
  );

  return (
    <section className="relative py-12 bg-white overflow-visible">
      {/* Curved line */}
      {/* <img
        src="/assets/line.png"
        alt=""
        aria-hidden
        className="pointer-events-none select-none absolute -top-6 right-0 w-full max-w-none"
        style={{ transform: "rotate(180deg)" }}
      /> */}

      {/* Heading */}
<div
  className={`
    w-full
    flex
    justify-center
    items-center
    mb-8
    px-6
  `}
>
  <h2
    className="font-normal text-black text-center"
    style={{
      fontFamily: "Sora",
      fontSize: "30px",
      lineHeight: "100%",
      letterSpacing: "-0.02em",
    }}
  >
    Associated brands & projects
  </h2>
</div>




      {/* Logos row with arrows */}
      <div className="flex items-center justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-12">
        {/* Left arrow (hidden on small screens) */}
        <button
          aria-label="Scroll left"
          onClick={() => scrollByLogos("left")}
          className="hidden md:block select-none text-black hover:opacity-80 transition-opacity"
        >
          <span className="text-[24px] leading-none align-middle">◀</span>
        </button>

        {/* Scroll container */}
        <div
          ref={scrollerRef}
          className="flex gap-6 sm:gap-8 md:gap-10 lg:gap-12 overflow-x-auto snap-x snap-mandatory px-2 w-full max-w-[1100px] sm:w-auto scroll-smooth scrollbar-none"
        >
          {brands.map((logo, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-[140px] sm:w-[200px] md:w-[200px] lg:w-[200px] h-[100px] sm:h-[200px] md:h-[140px] lg:h-[160px] flex justify-center items-center snap-center"
            >
              <img
                src={logo}
                alt={`brand ${i + 1}`}
                className="object-contain w-full h-full"
              />
            </div>
          ))}
        </div>

        {/* Right arrow (hidden on small screens) */}
        <button
          aria-label="Scroll right"
          onClick={() => scrollByLogos("right")}
          className="hidden md:block select-none text-black hover:opacity-80 transition-opacity"
        >
          <span className="text-[24px] leading-none align-middle">▶</span>
        </button>
      </div>

      {/* Hide scrollbar CSS */}
      <style jsx>{`
        .scrollbar-none::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-none {
          -ms-overflow-style: none; /* IE and Edge */
          scrollbar-width: none; /* Firefox */
        }
      `}</style>
    </section>
  );
}
