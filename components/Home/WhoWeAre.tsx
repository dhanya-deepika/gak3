"use client";
import React from "react";

export default function WhoWeAre() {
  return (
    <section
      id="who-we-are"
      className="relative py-10 sm:py-16 px-4 sm:px-8 overflow-hidden bg-white"
    >
      {/* Decorative Background */}
      <div className="absolute inset-0 -z-10">
        <img
          src="/lines/vector2.png"
          alt="Decorative lines"
          className="hidden sm:block absolute left-[-150px] bottom-0 top-5 w-[1963px] h-[1910px] object-contain opacity-100"
        />
      </div>

      <div className="max-w-6xl mx-auto flex flex-col items-start relative z-10">
        {/* Header and Text */}
        <div className="mb-6 sm:mb-10 text-left w-full">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-gray-900 mb-4 font-[Sora]">
            WHO WE ARE
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-black leading-relaxed font-[Sora] max-w-3xl text-justify">
            GAK Group is a trusted wealth advisory firm specializing in strategic
            real estate investments. We provide residential and commercial real
            estate advisory services, property investment advisory, and real
            estate risk assessment — helping clients secure high-potential
            properties with confidence and long-term value.
          </p>
        </div>

        {/* Image Section */}
        <div className="w-full flex justify-center">
          {/* <div className="p-[1px] rounded-[40px] bg-gradient-to-r from-[#B74254] to-[#231F51] relative overflow-hidden w-full max-w-full sm:max-w-screen-md md:max-w-screen-lg lg:max-w-screen-xl 2xl:max-w-[1600px]">
            <img
              src="/whowe.jpg"
              alt="GAK Group Team Meeting"
              className="w-full h-auto object-cover rounded-[40px]"
            />

            { *//* Play Button *//* }
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="bg-white/90 hover:bg-white rounded-full p-6 shadow-lg transition-all duration-300 hover:scale-110 translate-y-4 sm:translate-y-0">
                <svg
                  className="w-10 h-10 sm:w-12 sm:h-12 text-gray-800 ml-1"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </button>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}
