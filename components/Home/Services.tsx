"use client";
import Image from "next/image";
import Link from "next/link";

export default function ServicesSection() {
  return (
    <section className="relative z-10 isolate flex flex-col items-center py-16 sm:py-20 bg-white overflow-visible">
      {/* Decorative Lines */}
      <img
        src="/lines/vector1.png"
        alt="Decorative lines"
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[2000px] h-auto object-cover opacity-100 mt-20 pointer-events-none z-0"
      />

      {/* Heading */}
      <h2
        className="text-[28px] sm:text-[36px] lg:text-[48px] font-normal text-black text-center relative z-10"
        style={{
          fontFamily: "Sora, sans-serif",
          lineHeight: "100%",
          letterSpacing: "-0.02em",
        }}
      >
        OUR SERVICES
      </h2>

      {/* Services Cards */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-7 sm:gap-8 lg:gap-12 items-stretch relative z-10 px-4 w-full max-w-[900px]">
        {[
          {
            src: "/images/card2.jpg",
            alt: "Customer Icon",
            type: "customer",
            title: "FOR CUSTOMERS",
            icon: "/icons/userprofile.svg",
            items: [
              ["Insights", "Advisory"],
              ["Guidance", "Support"],
            ],
            link: "/services", // <-- navigation link
          },
          {
            src: "/images/card1.svg",
            alt: "Developer Icon",
            type: "developer",
            title: "FOR DEVELOPERS",
            icon: "/icons/userdeveloper.svg",
            items: [
              ["Sales"],
              ["Engagement"],
            ],
            link: "/services", // <-- navigation link
          },
        ].map((card, i) => (
          <Link
            key={i}
            href={card.link}
            className="cursor-pointer w-full h-[450px] sm:h-[450px] flex items-center justify-center rounded-[40px] overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-xl relative"
          >
            {/* Background Image */}
            <div className="relative w-full h-full rounded-[40px] overflow-hidden">
              <Image
                src={card.src}
                alt={card.alt}
                fill
                className="object-cover rounded-[40px]"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 460px"
              />
            </div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
              <img
                src={card.icon}
                alt={`${card.type} Icon`}
                className="mb-0 w-25 h-50 object-contain"
              />
              <h2 className="text-lg font-semibold tracking-wider mb-6">{card.title}</h2>
              <div className="flex flex-col gap-2 text-sm font-light">
                {card.items.map((row, idx) => (
                  <div key={idx} className="flex justify-center gap-8">
                    {row.map((item, j) => (
                      <span key={j}>{item}</span>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
