// "use client";

// import { ReactNode, useEffect, useState } from "react";
// import { usePathname } from "next/navigation";
// import Navbar from "../../components/Navbar";  // adjust if path differs
// import Footer from "../../components/Footer";
// import Footer2 from "../../components/Footer2"; // import your second footer

// export default function LayoutClientWrapper({ children }: { children: ReactNode }) {
//   const pathname = usePathname();
//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth < 1024); // Tailwind lg breakpoint
//     };
//     handleResize();
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   const isProjectsPage = pathname === "/projects";

//   return (
//     <>
//       <Navbar />
//       <main>{children}</main>

//       {/* Only on /projects → show Footer on mobile, Footer2 on desktop */}
//       {isProjectsPage ? (
//         isMobile ? <Footer /> : <Footer2 />
//       ) : (
//         // On all other pages → show Footer only
//         <Footer />
//       )}
//     </>
//   );
// }


"use client";

import { ReactNode } from "react";
import { usePathname } from "next/navigation";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Footer2 from "../../components/ContactForm";

export default function LayoutClientWrapper({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  const isProjectsPage = pathname === "/projects";

  return (
    <>
      <Navbar />
      <main>{children}</main>

      {/* Always show both footers on /projects */}
      {isProjectsPage ? (
        <>
          <Footer />
         
        </>
      ) : (
        // Show only Footer on all other pages
        <Footer />
      )}
    </>
  );
}
