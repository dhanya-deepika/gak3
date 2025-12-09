"use client";
import React from "react";

export default function OurStory() {
  return (
    <section className="relative bg-white py-20 bg-white flex justify-center px-4 overflow-hidden">
      {/* Decorative Vector Image with custom rotation via inline style */}
      <img
        src="/lines/vector1.png"
        alt="Decorative Vector"
        className="absolute top-0 right-0 w-[400px] h-auto opacity-30 pointer-events-none"
        style={{ transform: "rotate(200deg)" }}
      />
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div>
          <h2
            className="mb-6 text-black"
            style={{
              fontFamily: "Sora, sans-serif",
              fontWeight: 400,
              fontSize: "clamp(20px, 5vw, 48px)", // min 20px, max 48px
              lineHeight: "120%",
              letterSpacing: "-0.02em",
            }}
          >
            Our story
          </h2>

          <p
            style={{
              fontFamily: "Source Sans 3, sans-serif",
              fontWeight: 400,
              fontSize: "16px",
              lineHeight: "150%",
              letterSpacing: "-0.02em",
            }}
            className="text-gray-700 leading-relaxed max-w-md md:max-w-lg mb-4"
          >
            At GAK, we’ve always believed that real estate shouldn’t feel like a
            maze of numbers. Developers are constantly searching for genuine
            buyers, while buyers and investors are left wondering when, where,
            and how to make the right move.
          </p>

          <p
            style={{
              fontFamily: "Source Sans 3, sans-serif",
              fontWeight: 400,
              fontSize: "16px",
              lineHeight: "150%",
              letterSpacing: "-0.02em",
            }}
            className="text-gray-700 leading-relaxed max-w-md md:max-w-lg mb-4"
          >
            Too often, both sides are left waiting for the right guidance at the
            right time. That’s the gap we chose to bridge.
          </p>

          <p
            style={{
              fontFamily: "Source Sans 3, sans-serif",
              fontWeight: 400,
              fontSize: "16px",
              lineHeight: "150%",
              letterSpacing: "-0.02em",
            }}
            className="text-gray-700 leading-relaxed max-w-md md:max-w-lg mb-4"
          >
            GAK was created to bring developers and buyers onto the same page,
            with a model that is transparent and built on trust. By combining 0%
            commission model, data-driven market insights, and strategies that
            look beyond the present moment, we help developers accelerate sales
            while guiding buyers toward decisions that truly create value.
          </p>

          <p
            style={{
              fontFamily: "Source Sans 3, sans-serif",
              fontWeight: 400,
              fontSize: "16px",
              lineHeight: "150%",
              letterSpacing: "-0.02em",
            }}
            className="text-gray-700 leading-relaxed max-w-md md:max-w-lg"
          >
            To us, real estate is the art of turning vision into value and
            opportunities into growth.
          </p>
        </div>

        {/* Image */}
        <div className="flex justify-center">
          <img
            src="/indian.webp"
            alt="Our Story"
            className="rounded-[40px] object-cover"
            style={{ width: "615px", height: "461px" }}
          />
        </div>
      </div>
    </section>
  );
}
