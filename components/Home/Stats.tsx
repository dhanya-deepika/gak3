"use client";

import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const stats = [
  { number: 10, suffix: "+", label: <>Years of<br />Service</> },
  { number: 400, suffix: "+", label: <>Satisfied<br />Customers</> },
  { number: 2500, suffix: "+", label: <>Channel<br />Partners</> },
  { number: 50, suffix: "+", label: "Projects" },
];

export default function Stats() {
  const { ref, inView } = useInView({
    triggerOnce: false, // re-trigger each time it scrolls into view
    threshold: 0.3,
  });

  const [startCount, setStartCount] = useState(false);

  useEffect(() => {
    if (inView) setStartCount(true);
    else setStartCount(false);
  }, [inView]);

  const duration = 2.5;

  return (
    <section
      ref={ref}
      className="relative py-6 sm:py-10 flex justify-center bg-white overflow-hidden"
    >
      {/* Decorative background */}
      <div className="absolute inset-0 -z-10 flex justify-center">
        <img
          src="/lines/vector1.png"
          alt="Decorative lines"
          className="left-[-150px] bottom-0 w-[1963px] h-[1910px] object-contain opacity-100"
        />
      </div>

      {/* Outer gradient border */}
      <div
        className="p-[1px] sm:p-[2px] rounded-[40px] w-[90%] max-w-[1110px] relative z-10"
        style={{
          background:
            "linear-gradient(to bottom right, #FFFFFF 0%, #B74254 20%, #231F51 80%, #FFFFFF 100%)",
        }}
      >
        {/* Inner content box */}
        <div className="bg-white rounded-[38px] w-full h-full grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8 text-center px-2 sm:px-8 py-6 sm:py-10">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
            >
              <h4
                className="text-[#231F51]"
                style={{
                  fontFamily: "'Source Sans 3', sans-serif",
                  fontWeight: 700,
                  fontSize: "clamp(32px, 5vw, 64px)",
                  lineHeight: "120%",
                  letterSpacing: "-0.02em",
                }}
              >
                {startCount ? (
                  <CountUp
                    start={0}
                    end={s.number}
                    duration={duration}
                    separator=","
                    suffix={s.suffix}
                    useEasing={true}
                  />
                ) : (
                  `0${s.suffix}`
                )}
              </h4>

              <p
                className="text-gray-600"
                style={{
                  fontFamily: "Sora, sans-serif",
                  fontWeight: 400,
                  fontSize: "clamp(14px, 2vw, 20px)",
                  lineHeight: "140%",
                  letterSpacing: "-0.02em",
                  textAlign: "center",
                }}
              >
                {s.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
