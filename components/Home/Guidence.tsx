"use client";
import React from "react";

export default function GuidenceImage() {
  return (
    <div className="relative flex justify-center py-12 px-4 bg-white overflow-hidden">
      {/* Decorative Lines in the Background */}
      <img
        src="/lines/vector3.png"
        alt="Decorative lines"
        className="absolute bottom-0 left-1/2 transform -translate-x-1/2
        w-[1900px] h-auto object-cover opacity-100"
      />

      {/* Large screen image */}
      <img
        src="/stepflow.svg"
        alt="Guidence"
        className="hidden sm:block relative w-full max-w-[1127px] h-auto rounded-[40px] object-cover"
      />

      {/* Mobile screen image */}
      <img
        src="/step.svg"
        alt="Guidence Mobile"
        className="block sm:hidden relative w-full max-w-[1127px] h-auto rounded-[40px] object-cover"
      />
    </div>
  );
}