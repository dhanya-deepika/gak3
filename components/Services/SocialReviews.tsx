"use client";
import React, { useState } from "react";
import Image from "next/image";

export default function SocialReviews() {
  const reviews = [

    {
      logo: "/logos/mimimail.png",
      platform: "Google reviews",
      text: "We had an excellent experience with GAK Group in our property search. A special thanks to Gowtham and Khyathi for their exceptional support, guidance, and patience throughout the process. They understood our requirements well, provided us with the right options, and ensured complete transparency at every step. Their professionalism and commitment made the entire journey smooth and hassle-free. We are extremely satisfied with our purchase and would highly recommend GAK Group to anyone looking for trusted and reliable property consultants.",
      author: "Amaresh Killam",
    },
    {
      logo: "/logos/mimimail.png",
      platform: "Google reviews",
      text: "We had a wonderful experience with GAK Group during our property search. A special thanks to Gowtham and Khyathi for their constant support and guidance in helping us find the right property. Their professionalism, transparency, and dedication made the entire process smooth and stress-free. We are very happy with our purchase and would highly recommend GAK Group to anyone looking for a reliable property consultant.",
      author: "Satya Hari",
    },
    {
      logo: "/logos/mimimail.png",
      platform: "Google reviews", 
      text: "Wonderful experience with GAK! They suggested the right options tailored to my needs and were very genuine and trustworthy throughout the process. I interacted with several people in their team, and all were professional and supportive. I especially appreciated Subhash, who was fair, transparent, and clear in his communication, making the entire experience smooth and reassuring.",
      author: "Laxmi Anil",
    },
  ];

  const [active, setActive] = useState(0);

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
    <div className="flex flex-col sm:flex-row w-full max-w-[1120px] min-h-[200px] sm:min-h-[256px] mx-auto">
      {/* Logo side */}
      <div className="flex items-center justify-center w-[140px] h-[140px] sm:w-[220px] sm:h-[220px] bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl sm:rounded-3xl shadow-md mx-auto sm:mx-0">
        <Image
          src={reviews[active].logo}
          alt="brand logo"
          width={80}
          height={80}
          className="object-contain rounded-xl"
        />
      </div>

      {/* Text side */}
      <div className="flex flex-col justify-center px-3 sm:px-6 py-3 sm:py-6 text-black sm:w-[850px] w-full max-w-[400px] sm:max-w-full mx-auto">
        <p
          className="text-[11px] sm:text-sm mb-1 sm:mb-2"
          style={{ fontFamily: "Sora", color: "#7a7a5c" }}
        >
          {reviews[active].platform}
        </p>
        <p
          className="text-[13px] sm:text-base leading-snug mb-1 sm:mb-2"
          style={{
            fontFamily: "Sora",
            maxWidth: "100%",
          }}
        >
          {reviews[active].text}
        </p>
        <p
          className="text-[11px] sm:text-sm"
          style={{ fontFamily: "Sora", color: "#7a7a5c" }}
        >
          {reviews[active].author}
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
        className={`w-2 h-2 sm:w-4 sm:h-4 rounded-full transition-all duration-300`}
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
