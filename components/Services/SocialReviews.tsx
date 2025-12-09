"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

// ▶️ 1. Define Type for your reviews
type Review = {
  logo: string;
  platform: string;
  text: string;
  author: string;
};

export default function SocialReviews() {
  // ▶️ 2. Add type to state
  const [reviews, setReviews] = useState<Review[]>([]);
  const [active, setActive] = useState(0);

  // Fetch JSON file
  useEffect(() => {
    fetch("/data/reviews.json", { cache: "no-store" })
      .then((res) => res.json())
      .then((data: Review[]) => {
        console.log("Loaded reviews:", data);
        setReviews(data);
      })
      .catch((err) => console.error("JSON Error:", err));
  }, []);

  // If no reviews yet → don't render
  if (reviews.length === 0) return null;

  const next = () => setActive((active + 1) % reviews.length);
  const prev = () => setActive((active - 1 + reviews.length) % reviews.length);

  return (
    <section className="bg-white py-12 sm:py-20 flex flex-col items-center px-4 sm:px-8">
      {/* Heading */}
      <div className="w-full max-w-[1200px] mx-auto mb-8 sm:mb-12">
        <h2
          className="font-normal text-black text-left w-full"
          style={{
            fontFamily: "Sora",
            fontSize: "clamp(22px, 5vw, 48px)",
            lineHeight: "110%",
            letterSpacing: "-0.02em",
          }}
        >
          Social channels reviews
        </h2>
      </div>

      {/* Content wrapper */}
      <div className="relative flex items-center justify-center w-full max-w-[1200px]">
        {/* Left arrow */}
        <button
          onClick={prev}
          aria-label="Previous"
          className="absolute -left-3 sm:-left-8 text-black text-sm sm:text-lg hover:scale-110 transition"
        >
          ◀
        </button>

        {/* Review Content */}
        <div className="flex flex-col sm:flex-row w-full max-w-[1120px] mx-auto gap-4 sm:gap-6">
          {/* Logo side */}
          <div className="flex items-center justify-center w-[140px] h-[140px] sm:w-[220px] sm:h-[220px] bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl sm:rounded-3xl shadow-md mx-auto sm:mx-0">
            <Image
              src={reviews[active]?.logo ?? "/placeholder.png"}  // SAFE
              alt="brand logo"
              width={80}
              height={80}
              className="object-contain rounded-xl"
            />
          </div>

          {/* Text side */}
          <div className="flex flex-col justify-center px-3 sm:px-6 py-3 sm:py-6 text-black w-full">
            <p
              className="text-[11px] sm:text-sm mb-1 sm:mb-2"
              style={{ fontFamily: "Sora", color: "#7a7a5c" }}
            >
              {reviews[active]?.platform}
            </p>

            <p
              className="text-[13px] sm:text-base leading-snug mb-1 sm:mb-2"
              style={{ fontFamily: "Sora" }}
            >
              {reviews[active]?.text}
            </p>

            <p
              className="text-[11px] sm:text-sm"
              style={{ fontFamily: "Sora", color: "#7a7a5c" }}
            >
              {reviews[active]?.author}
            </p>
          </div>
        </div>

        {/* Right arrow */}
        <button
          onClick={next}
          aria-label="Next"
          className="absolute -right-3 sm:-right-8 text-black text-sm sm:text-lg hover:scale-110 transition"
        >
          ▶
        </button>
      </div>

      {/* Pagination Dots */}
      <div className="flex gap-3 mt-5 sm:mt-8">
        {reviews.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className="w-2 h-2 sm:w-4 sm:h-4 rounded-full transition-all duration-300"
            style={{
              border: "2px solid transparent",
              borderRadius: "50%",
              backgroundClip: "padding-box, border-box",
              backgroundOrigin: "border-box",
              backgroundImage:
                active === i
                  ? "linear-gradient(#B74355, #B74355), linear-gradient(90deg, #B74254, #231F51)"
                  : "linear-gradient(white, white), linear-gradient(90deg, #B74254, #231F51)",
            }}
          ></button>
        ))}
      </div>
    </section>
  );
}

// "use client";
// import React, { useState, useEffect } from "react";
// import Image from "next/image";

// export default function SocialReviews() {
//   const [reviews, setReviews] = useState<any[]>([]);
//   const [active, setActive] = useState(0);

//   useEffect(() => {
//     // Fetch reviews from your backend or Next.js API route
//     fetch("/api/google-reviews")
//       .then((res) => res.json())
//       .then((data) => setReviews(data))
//       .catch((err) => console.error("Error fetching reviews:", err));
//   }, []);

//   const next = () => setActive((prev) => (prev + 1) % reviews.length);
//   const prev = () => setActive((prev) => (prev - 1 + reviews.length) % reviews.length);

//   if (reviews.length === 0) return <p className="text-center">Loading reviews...</p>;

//   return (
//     <section className="bg-white py-12 sm:py-20 flex flex-col items-center px-4 sm:px-8">
//       <div className="w-full max-w-[1200px] mx-auto mb-8 sm:mb-12">
//         <h2
//           className="font-normal text-black text-left w-full"
//           style={{
//             fontFamily: "Sora",
//             fontSize: "clamp(22px, 5vw, 48px)",
//             lineHeight: "110%",
//             letterSpacing: "-0.02em",
//           }}
//         >
//           Social channels reviews
//         </h2>
//       </div>

//       <div className="relative flex items-center justify-center w-full max-w-[1200px]">
//         <button
//           onClick={prev}
//           aria-label="Previous"
//           className="absolute -left-3 sm:-left-8 text-black text-sm sm:text-lg hover:scale-110 transition"
//         >
//           ◀
//         </button>

//         <div className="flex flex-col sm:flex-row w-full max-w-[1120px] min-h-[200px] sm:min-h-[256px] mx-auto">
//           <div className="flex items-center justify-center w-[140px] h-[140px] sm:w-[220px] sm:h-[220px] bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl sm:rounded-3xl shadow-md mx-auto sm:mx-0">
//             <Image
//               src={"/logos/mimimail.png"}
//               alt="brand logo"
//               width={80}
//               height={80}
//               className="object-contain rounded-xl"
//             />
//           </div>

//           <div className="flex flex-col justify-center px-3 sm:px-6 py-3 sm:py-6 text-black sm:w-[850px] w-full max-w-[400px] sm:max-w-full mx-auto">
//             <p
//               className="text-[11px] sm:text-sm mb-1 sm:mb-2"
//               style={{ fontFamily: "Sora", color: "#7a7a5c" }}
//             >
//               Google Reviews
//             </p>
//             <p
//               className="text-[13px] sm:text-base leading-snug mb-1 sm:mb-2"
//               style={{
//                 fontFamily: "Sora",
//                 maxWidth: "100%",
//               }}
//             >
//               {reviews[active].text}
//             </p>
//             <p
//               className="text-[11px] sm:text-sm"
//               style={{ fontFamily: "Sora", color: "#7a7a5c" }}
//             >
//               {reviews[active].author_name}
//             </p>
//           </div>
//         </div>

//         <button
//           onClick={next}
//           aria-label="Next"
//           className="absolute -right-3 sm:-right-8 text-black text-sm sm:text-lg hover:scale-110 transition"
//         >
//           ▶
//         </button>
//       </div>

//       <div className="flex gap-3 mt-5 sm:mt-8">
//         {reviews.map((_, i) => (
//           <button
//             key={i}
//             onClick={() => setActive(i)}
//             className={`w-2 h-2 sm:w-4 sm:h-4 rounded-full transition-all duration-300`}
//             style={{
//               border: "2px solid transparent",
//               borderRadius: "50%",
//               backgroundClip: "padding-box, border-box",
//               backgroundOrigin: "border-box",
//               backgroundImage:
//                 active === i
//                   ? "linear-gradient(#B74355, #B74355), linear-gradient(90deg, #B74254, #231F51)"
//                   : "linear-gradient(white, white), linear-gradient(90deg, #B74254, #231F51)",
//             }}
//           ></button>
//         ))}
//       </div>
//     </section>
//   );
// }
