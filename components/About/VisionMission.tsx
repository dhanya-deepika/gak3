"use client";

import { useState, useEffect } from "react";

/* ============================================================
   TEAM ARRAY (NO CONTACT FIELDS NEEDED)
   ============================================================ */

type TeamMember = {
  name: string;
  role: string;
  image: string;
  about: string;
  driveLink: string;
};

const team: TeamMember[] = [
  {
    name: "Ajay Patel",
    role: "General Manager Sales",
    image: "/team/ajay.webp",
    about:
      "Ajay Patel brings six years of leadership in real estate sales, specializing in business growth, sales strategy, and team management. Known for building strong client networks and delivering consistent revenue growth.",
    driveLink:
      "https://drive.google.com/drive/folders/1SxyJksf7umIftJg5JmjbP3PB3741clw7?usp=sharing",
  },

  {
    name: "Godavarthi Khyathi",
    role: "Sales Manager",
    image: "/team/khyathi.webp",
    about:
      "A dedicated real estate professional with strong communication skills and a customer-first approach. Khyathi excels in building client relationships.",
    driveLink:
      "https://drive.google.com/drive/folders/1SxyJksf7umIftJg5JmjbP3PB3741clw7?usp=sharing",
  },

  {
    name: "Vijay",
    role: "Sales Manager",
    image: "/team/vijay.webp",
    about:
      "Vijay is a customer-focused Sales Manager known for building long-term relationships and helping clients make confident property decisions.",
    driveLink:
      "https://drive.google.com/drive/folders/1SxyJksf7umIftJg5JmjbP3PB3741clw7?usp=sharing",
  },

  {
    name: "Syed Amanath Rasool",
    role: "Sales Manager",
    image: "/team/rasool.webp",
    about:
      "Syed Rasool is a results-driven Sales Manager with over four years of experience in real estate, focusing on long-term partnerships built on trust.",
    driveLink:
      "https://drive.google.com/drive/folders/1SxyJksf7umIftJg5JmjbP3PB3741clw7?usp=sharing",
  },

  {
    name: "Sayyad Sameer",
    role: "Sales Manager",
    image: "/team/sameer.webp",
    about:
      "Syed Sameer has extensive experience in the real estate industry with strong skills in client relationship management.",
    driveLink:
      "https://drive.google.com/drive/folders/1SxyJksf7umIftJg5JmjbP3PB3741clw7?usp=sharing",
  },

  {
    name: "Patan Khadarvali Khan",
    role: "Sales Manager",
    image: "/team/khadar.webp",
    about:
      "With eight years of experience, Patan Khadarvali Khan specializes in helping high-net-worth individuals grow wealth through real estate.",
    driveLink:
      "https://drive.google.com/drive/folders/1SxyJksf7umIftJg5JmjbP3PB3741clw7?usp=sharing",
  },

  {
    name: "Manikanta Veldi",
    role: "Graphic Designer",
    image: "/team/manikanta.webp",
    about:
      "A creative graphic designer crafting impactful visual stories for branding and campaigns in the real estate industry.",
    driveLink:
      "https://drive.google.com/drive/folders/1SxyJksf7umIftJg5JmjbP3PB3741clw7?usp=sharing",
  },
];

/* ============================================================
   COMPONENT
   ============================================================ */
export default function Team() {
  const [selected, setSelected] = useState(team[0]);
  const [canScroll, setCanScroll] = useState(true);

  useEffect(() => {
    const list = document.querySelector(".custom-scroll");
    if (!list) return;

    const updateScroll = () => {
      const canScrollMore =
        list.scrollHeight > list.clientHeight &&
        list.scrollTop + list.clientHeight < list.scrollHeight - 5;
      setCanScroll(canScrollMore);
    };

    updateScroll();
    list.addEventListener("scroll", updateScroll);
    return () => list.removeEventListener("scroll", updateScroll);
  }, []);

  return (
    <section className="relative flex justify-center py-10 sm:py-14 lg:py-20 bg-white px-3 sm:px-4 overflow-hidden">
      {/* Background Line */}
      <img
        src="/lines/vector2.png"
        className="absolute -top-0 left-130 -translate-x-1/2 w-[760px] sm:w-[1100px] md:w-[1200px] opacity-100 pointer-events-none z-0"
      />

      {/* Outer Border */}
      <div
        className="rounded-[32px] md:rounded-[40px] p-[2px] w-full max-w-[1200px] z-10"
        style={{
          background:
            "linear-gradient(319deg, rgba(185,66,85,0) 7%, #B94255 52%, #231F51 90%)",
        }}
      >
        {/* Inner Box */}
        <div className="bg-white rounded-[28px] md:rounded-[36px] flex flex-row min-h-[480px] sm:min-h-[560px] md:h-[720px] lg:h-[900px] shadow-xl overflow-hidden">
          {/* LEFT LIST */}
          <div className="w-[60px] sm:w-[72px] md:w-[400px] border-r relative flex-shrink-0">
            <div className="h-full overflow-y-auto custom-scroll px-2 md:px-6 py-4 md:py-6 text-black">
              <h2 className="mb-2 sm:mb-3 md:mb-6 text-xs sm:text-sm md:text-3xl font-semibold">
                Team
              </h2>

              {/* MOBILE */}
              <ul className="md:hidden bg-gray-100/70 rounded-xl px-2 py-2 flex flex-col items-center gap-2">
                {team.map((member, i) => (
                  <li key={i}>
                    <button
                      onClick={() => setSelected(member)}
                      className={`block w-[44px] h-[44px] rounded-full overflow-hidden ${
                        selected.name === member.name
                          ? "p-[2px] bg-gradient-to-b from-[#B94255] to-[#0A0267]"
                          : ""
                      }`}
                    >
                      <img
                        src={member.image}
                        className="w-full h-full object-cover rounded-full"
                      />
                    </button>
                  </li>
                ))}
              </ul>

              {/* DESKTOP */}
              <ul className="hidden md:block space-y-8">
                {team.map((member, i) => (
                  <li
                    key={i}
                    onClick={() => setSelected(member)}
                    className="flex items-center gap-4 cursor-pointer"
                  >
                    <div
                      className={`w-[88px] h-[88px] rounded-full overflow-hidden ${
                        selected.name === member.name
                          ? "p-[3px] bg-gradient-to-b from-[#B94255] to-[#0A0267]"
                          : ""
                      }`}
                    >
                      <img
                        src={member.image}
                        className="w-full h-full object-cover rounded-full"
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">{member.name}</h3>
                      <p className="text-black text-base">{member.role}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Scroll Fade */}
            <div className="pointer-events-none absolute top-0 w-full h-10 bg-gradient-to-b from-white to-transparent" />
            <div className="pointer-events-none absolute bottom-0 w-full h-10 bg-gradient-to-t from-white to-transparent" />

            {/* Scroll Arrow */}
            <button
              disabled={!canScroll}
              onClick={() =>
                document
                  .querySelector(".custom-scroll")
                  ?.scrollBy({ top: 120, behavior: "smooth" })
              }
              className={`absolute bottom-3 left-1/2 -translate-x-1/2 z-50 text-black text-xl font-semibold transition ${
                canScroll
                  ? "hover:scale-125 cursor-pointer"
                  : "opacity-30 cursor-not-allowed"
              }`}
            >
              ▼
            </button>
          </div>

          {/* RIGHT PROFILE */}
          <div className="flex-1 p-3 sm:p-4 md:p-10 overflow-auto">
            <div className="flex flex-col md:flex-row gap-4">
              <img
                src={selected.image}
                className="rounded-[16px] w-[120px] h-[120px] sm:w-[140px] sm:h-[140px] md:w-[234px] md:h-[246px] object-cover"
              />

              <div>
                <h2 className="text-lg sm:text-xl md:text-4xl font-semibold text-black">
                  {selected.name}
                </h2>
                <p className="mt-1 sm:mt-2 text-sm sm:text-base md:text-lg text-black">
                  {selected.role}
                </p>
              </div>
            </div>

            {/* ABOUT */}
            <div className="mt-6 text-black">
              <h3 className="font-bold text-base md:text-xl">About</h3>
              <p className="mt-2 text-sm md:text-base leading-6">
                {selected.about}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Scrollbar Styling */}
      <style jsx>{`
        .custom-scroll::-webkit-scrollbar {
          width: 8px;
        }
        .custom-scroll::-webkit-scrollbar-track {
          background: linear-gradient(0deg, #b94255 34%, #0a0267 86%);
          border-radius: 7px;
        }
        .custom-scroll::-webkit-scrollbar-thumb {
          background: linear-gradient(0deg, #b94255, #0a0267);
          border-radius: 7px;
        }
      `}</style>
    </section>
  );
}
