"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(true);
  const lastScroll = useRef(0);

  const navLinks: { href: string; label: string }[] = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/projects", label: "Projects" },
    { href: "/about", label: "About Us" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      setShow(currentScroll === 0);
      lastScroll.current = currentScroll;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const gradientUnderline =
    "linear-gradient(90deg, rgba(185, 66, 85, 0) 0%, #B94255 52.88%, #231F51 98.08%)";

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        show ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
      }`}
    >
      {/* Desktop Navbar */}
      <div
        className="relative z-10 flex items-center justify-between w-full max-w-8xl mx-auto sm:px-10 px-4 sm:h-[90px] h-auto
        sm:backdrop-blur-md sm:bg-white/10 sm:border-b sm:border-white/10 sm:shadow-[0_4px_12px_rgba(0,0,0,0.05)]"
        style={{ WebkitBackdropFilter: "blur(12px)" }}
      >
        {/* Logo */}
        <Link href="/">
          <Image
            src="/gakicon.png"
            alt="GAK Group Logo"
            width={100}
            height={70}
            className="object-contain sm:w-[100px] sm:h-[70px] w-[60px] h-[45px]"
            priority
          />
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8 text-sm font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative text-black font-medium group cursor-pointer"
            >
              {link.label}
              <span
                className="absolute left-0 -bottom-1 h-[3px] w-0 rounded-[3.5px] transition-all duration-300 group-hover:w-full"
                style={{ background: gradientUnderline }}
              ></span>
            </Link>
          ))}
        </div>

        {/* Contact Info (Desktop) */}
        <div className="hidden sm:flex gap-6 items-center text-sm font-medium">
          <a
            href="tel:+916958998112"
            className="text-black hover:underline px-1 rounded"
          >
            +91 90890 80505
          </a>
          <a
            href="mailto:sales@gakgroup.in"
            className="text-black hover:underline"
          >
            sales@gakgroup.in
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex flex-col space-y-1.5"
          onClick={() => setOpen(!open)}
        >
          <span className="w-6 h-[2px] bg-black"></span>
          <span className="w-6 h-[2px] bg-black"></span>
          <span className="w-6 h-[2px] bg-black"></span>
        </button>
      </div>

     {/* Mobile Sidebar */}
<div
  className={`fixed top-0 right-0 h-full w-64 transform transition-transform duration-300 md:hidden z-50 ${
    open ? "translate-x-0" : "translate-x-full"
  }`}
  style={{
  backgroundColor: "rgba(255, 255, 255, 0.9)", // 0.9 = 90% opacity
  boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
}}
>
  {/* Overlay behind sidebar */}
  {open && (
    <div
      className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
      onClick={() => setOpen(false)}
    />
  )}

  {/* Mobile Links with stronger white gradient */}
  <div
    className="flex flex-col mt-10 gap-6 px-8 font-medium relative z-10 py-6 rounded-l-md"
    style={{
      background:
        "linear-gradient(2.47deg, rgba(255, 255, 255, 0.9) 2.06%, rgba(255, 255, 255, 0.95) 53.69%)",
      backdropFilter: "blur(1px)",
    }}
  >
    {navLinks.map((link) => (
      <Link
        key={link.href}
        href={link.href}
        className="relative text-lg tracking-wide text-gray-800 group cursor-pointer"
        onClick={() => setOpen(false)}
      >
        {link.label}
        <span
          className="absolute left-0 -bottom-1 h-[3px] w-0 rounded-[3.5px] transition-all duration-300 group-hover:w-full"
          style={{ background: gradientUnderline }}
        ></span>
      </Link>
    ))}

    {/* Contact info below links */}
    <div className="mt-6 flex flex-col gap-1 text-sm text-gray-800">
      <a href="tel:+916958998112" className="hover:underline">
        +91 90890 80505
      </a>
      <a href="mailto:sales@gakgroup.in" className="hover:underline">
        sales@gakgroup.in
      </a>
    </div>
  </div>
</div>

    </nav>
  );
}


// "use client";
//
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { useState, useEffect, useRef } from "react";
// import Image from "next/image";
//
// export default function Navbar() {
//   const pathname = usePathname();
//   const [open, setOpen] = useState(false);
//   const [show, setShow] = useState(true);
//   const lastScroll = useRef(0);
//
//   const navLinks: { href: string; label: string }[] = [
//     { href: "/", label: "Home" },
//     { href: "/services", label: "Services" },
//     { href: "/projects", label: "Projects" },
//     { href: "/about", label: "About Us" },
//   ];
//
//   useEffect(() => {
//     const handleScroll = () => {
//       const currentScroll = window.scrollY;
//       setShow(currentScroll === 0);
//       lastScroll.current = currentScroll;
//     };
//     window.addEventListener("scroll", handleScroll, { passive: true });
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);
//
//   const gradientUnderline =
//     "linear-gradient(90deg, rgba(185, 66, 85, 0) 0%, #B94255 52.88%, #231F51 98.08%)";
//
//   return (
//     <nav className="fixed top-0 w-full z-50 px-4 sm:px-10 py-3 flex items-center justify-between">
//   {/* Logo container */}
//   <div
//     className="flex items-center rounded-md px-3 py-2"
//     style={{
//       backgroundColor: "rgba(255, 255, 255, 0.85)",
//       backdropFilter: "blur(10px)",
//       WebkitBackdropFilter: "blur(10px)",
//     }}
//   >
//     <Link href="/">
//       <Image
//         src="/gakicon.png"
//         alt="GAK Group Logo"
//         width={100}
//         height={70}
//         className="object-contain w-[60px] h-[45px] sm:w-[100px] sm:h-[70px]"
//         priority
//       />
//     </Link>
//   </div>
//
//   {/* Mobile Hamburger container */}
//   <div
//     className="md:hidden flex items-center rounded-md px-3 py-2"
//     style={{
//       backgroundColor: "rgba(255, 255, 255, 0.85)",
//       backdropFilter: "blur(10px)",
//       WebkitBackdropFilter: "blur(10px)",
//     }}
//   >
//     <button
//       className="flex flex-col space-y-1.5"
//       onClick={() => setOpen(!open)}
//     >
//       <span className="w-6 h-[2px] bg-black rounded"></span>
//       <span className="w-6 h-[2px] bg-black rounded"></span>
//       <span className="w-6 h-[2px] bg-black rounded"></span>
//     </button>
//   </div>
//
//   {/* Desktop links */}
//   <div className="hidden md:flex space-x-8 text-sm font-medium">
//     {navLinks.map((link) => (
//       <Link
//         key={link.href}
//         href={link.href}
//         className="relative text-black font-medium group cursor-pointer"
//       >
//         {link.label}
//         <span
//           className="absolute left-0 -bottom-1 h-[3px] w-0 rounded-[3.5px] transition-all duration-300 group-hover:w-full"
//           style={{ background: gradientUnderline }}
//         />
//       </Link>
//     ))}
//   </div>
// </nav>
//
//
//   );
// }
