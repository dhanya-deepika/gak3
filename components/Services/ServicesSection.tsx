"use client";
import Image from "next/image";

export default function ServicesSection() {
  const customerServices = [
    {
      icon: "/logos/pricing.png",
      title: "Pricing Insights",
      points: [
        "Transparent price tracking",
        "Alerts on price increases or decreases",
        "Zero-commission transactions",
      ],
    },


    {
      icon: "/logos/strategy.png",
      title: "Market Strategy & Advisory",
      points: [
        "Location analysis & future potential",
        "Capital rotation strategies",
        "Long-term vs. short-term investment outlook",
      ],
    },
    {
      icon: "/logos/investment.png",
      title: "Investment Guidance",
      points: [
        "When to invest",
        "What to invest in (property type, size, etc.)",
        "How to invest (steps, support, advisory)",
      ],
    },
    
    {
      icon: "/logos/decision.png",
      title: "Decision Support",
      points: ["Why investing in this market matters", "Post-service support"],
    },
  ];

  const developerServices = [
    {
      icon: "/logos/sales.png",
      title: "Sales Acceleration",
      points: ["Access to pre-qualified buyers & investors"],
    },
    {
      icon: "/logos/investors.png",
      title: "Investor Engagement",
      points: [
        "Connecting with the right investment profiles",
        "Educating buyers on why your project matters",
      ],
    },
  ];

  return (
    <section 
  className="relative py-16 sm:py-20 bg-white overflow-hidden"
  style={{
    backgroundImage: "url(/lines/vector9.png)",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center 38px",
    backgroundSize: "calc(100%) auto",
  }}
>
  <div className="mx-auto max-w-7xl px-6 lg:px-12 relative z-10">
    {/* Introductory text */}
    <div className="flex justify-center mb-16">
      <div className="text-justify max-w-[731px] mx-auto mb-5">
        <p
          className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[18px] text-black"
          style={{
            fontFamily: "Sora, sans-serif",
            lineHeight: "1.4",
            letterSpacing: "-0.02em",
          }}
        >
          At GAK Group, we go beyond property sales to offer a complete
          spectrum of investment and growth solutions for both customers and
          developers. Our focus is on clarity, strategy, and long-term value
          creation.
        </p>
      </div>
    </div>

    {/* Customer section */}
    <div className="flex flex-col items-center mb-20">
      <Image
        src="/logos/Customer.png"
        alt="Customer Icon"
        width={80}
        height={80}
      />
      <p
        className="text-[20px] text-black mt-6"
        style={{
          fontFamily: "Sora, sans-serif",
          fontWeight: 400,
          lineHeight: "100%",
          letterSpacing: "-0.02em",
        }}
      >
        FOR CUSTOMERS
      </p>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-20 gap-y-14 max-w-6xl mx-auto mb-20">
      {customerServices.map((service, i) => (
        <div
          key={`customer-${i}`}
          className="flex items-center gap-4 p-2"
          style={{ minHeight: "150px" }}
        >
          {/* Icon */}
          <div className="flex-shrink-0 flex items-center justify-center w-[100px] h-[100px]">
            <Image
              src={service.icon}
              alt={service.title}
              width={100}
              height={100}
              className="object-contain"
              quality={100}
              priority
            />
          </div>

          {/* Text */}
          <div className="flex-1">
            <h3
              className="text-[22px] text-black mb-1"
              style={{
                fontFamily: "Sora, sans-serif",
                fontWeight: 500,
                lineHeight: "120%",
                letterSpacing: "-0.02em",
              }}
            >
              {service.title}
            </h3>

            <ul className="space-y-[2px]">
              {service.points.map((point, j) => (
                <li key={j} className="flex items-start gap-2">
                  <span className="flex-shrink-0 w-1.5 h-1.5 bg-black mt-[7px]"></span>
                  <p
                    className="text-[16px] text-black"
                    style={{
                      fontFamily: "Sora, sans-serif",
                      fontWeight: 400,
                      lineHeight: "1.4",
                      letterSpacing: "-0.02em",
                    }}
                  >
                    {point}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>

    {/* Developer section */}
    <div className="flex flex-col items-center mb-16">
      <Image
        src="/logos/developer.png"
        alt="Developer Icon"
        width={80}
        height={80}
      />
      <p
        className="text-[20px] text-black mt-6"
        style={{
          fontFamily: "Sora, sans-serif",
          fontWeight: 400,
          lineHeight: "100%",
          letterSpacing: "-0.02em",
        }}
      >
        FOR DEVELOPERS
      </p>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-20 gap-y-14 max-w-6xl mx-auto">
      {developerServices.map((service, i) => (
        <div
          key={`developer-${i}`}
          className="flex items-center gap-4 p-2"
          style={{ minHeight: "150px" }}
        >
          {/* Icon */}
          <div className="flex-shrink-0 flex items-center justify-center w-[100px] h-[100px]">
            <Image
              src={service.icon}
              alt={service.title}
              width={100}
              height={100}
              className="object-contain"
            />
          </div>

          {/* Text */}
          <div className="flex-1">
            <h3
              className="text-[24px] text-black mb-1"
              style={{
                fontFamily: "Sora, sans-serif",
                fontWeight: 500,
                lineHeight: "120%",
                letterSpacing: "-0.02em",
              }}
            >
              {service.title}
            </h3>

            <ul className="space-y-[2px]">
              {service.points.map((point, j) => (
                <li key={j} className="flex items-start gap-2">
                  <span className="flex-shrink-0 w-1.5 h-1.5 bg-black mt-[6px]"></span>
                  <p
                    className="text-[16px] text-black"
                    style={{
                      fontFamily: "Sora, sans-serif",
                      fontWeight: 400,
                      lineHeight: "1.4",
                      letterSpacing: "-0.02em",
                    }}
                  >
                    {point}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>
  );
}
