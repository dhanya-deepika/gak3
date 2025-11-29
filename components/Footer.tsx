// "use client";

// import React, { useState } from "react";
// import { FaFacebookF, FaLinkedinIn, FaYoutube, FaInstagram } from "react-icons/fa";

// export default function FooterSection() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     message: "",
//   });

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => {
//     if (e.target.name === "message") {
//       const words = e.target.value.trim().split(/\s+/);
//       if (words.length > 150) return;
//     }
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     alert("Form submitted successfully!");
//     setFormData({ name: "", email: "", phone: "", message: "" });
//   };

//   return (
//     <footer className="bg-white pt-10 pb-10 px-6 lg:px-16 font-sans">
//       <div className="max-w-7xl mx-auto flex flex-col gap-20">
//         {/* 🔹 TOP SECTION: TEXT + FORM + CONTACT */}
//         <div className="grid grid-cols-1 lg:grid-cols-[3fr_2.5fr_2fr] gap-14 items-start">
//           {/* LEFT SIDE - TEXT */}
//           <div
//             className="flex justify-center lg:justify-end items-center
//                        text-center lg:text-right
//                        w-full lg:w-auto
//                        translate-y-0 lg:translate-y-[200%]"
//           >
//             <h3
//               className="text-gray-900 font-sora"
//               style={{
//                 fontWeight: 400,
//                 fontSize: "clamp(24px, 5vw, 48px)",
//                 lineHeight: "100%",
//                 letterSpacing: "-0.02em",
//                 textAlign: "center", // mobile center
//               }}
//             >
//               LET US GUIDE YOU <br className="hidden md:block" /> TO GROWTH
//             </h3>
//           </div>


//           {/* CENTER - CONTACT FORM */}
//           <div className="w-full flex flex-col items-center sm:items-center lg:items-start">
//             <h3 className="text-xl sm:text-2xl text-gray-900 font-semibold mb-8 w-full text-left lg:pl-8">
//               Post an enquiry
//             </h3>

//             <div className="w-full max-w-[700px] sm:max-w-[500px] p-[2px] rounded-[32px] bg-gradient-to-r from-[#B74254] to-[#231F51] shadow-lg">
//               <form
//                 className="bg-white rounded-[32px] p-6 sm:p-8 flex flex-col gap-6"
//                 onSubmit={handleSubmit}
//               >
//                 {/* Name */}
//                 <div className="relative text-black">
//                   <label className="absolute -top-3 left-3 text-black text-sm font-medium bg-white px-1">
//                     Name
//                   </label>
//                   <input
//                     type="text"
//                     name="name"
//                     value={formData.name}
//                     onChange={handleChange}
//                     placeholder="xyz"
//                     pattern="[A-Za-z\s]+"
//                     title="Name should only contain alphabets"
//                     required
//                     className="w-full px-4 py-3 border rounded-md placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-[#B74254]"
//                   />
//                 </div>

//                 {/* Email */}
//                 <div className="relative text-black">
//                   <label className="absolute -top-3 left-3 text-black text-sm font-medium bg-white px-1">
//                     Email
//                   </label>
//                   <input
//                     type="email"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     placeholder="xyz@abc.com"
//                     required
//                     className="w-full px-4 py-3 border rounded-md placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-[#B74254]"
//                   />
//                 </div>

//                 {/* Phone */}
//                 <div className="relative text-black">
//                   <label className="absolute -top-3 left-3 text-black text-sm font-medium bg-white px-1">
//                     Phone
//                   </label>
//                   <input
//                     type="tel"
//                     name="phone"
//                     value={formData.phone}
//                     onChange={handleChange}
//                     placeholder="Enter phone number"
//                     pattern="[0-9]{10}"
//                     title="Phone number should be 10 digits"
//                     required
//                     className="w-full px-4 py-3 border rounded-md placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-[#B74254]"
//                   />
//                 </div>

//                 {/* Message */}
//                 <div className="relative text-black">
//                   <label className="absolute -top-3 left-3 text-black text-sm font-medium bg-white px-1">
//                     Tell us more about what you’re looking for
//                   </label>
//                   <textarea
//                     name="message"
//                     value={formData.message}
//                     onChange={handleChange}
//                     placeholder="Type your message here..."
//                     rows={4}
//                     className="w-full px-4 pt-6 pb-3 border rounded-md placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-[#B74254]"
//                   />
//                 </div>

//                 {/* Submit Button */}
//                 <div className="flex justify-center mt-6">
//                   <div className="w-[120px] h-[40px] rounded-[36px] p-[2px] bg-gradient-to-r from-[#B74254] to-[#231F51]">
//                     <button
//                       type="submit"
//                       className="w-full h-full rounded-[36px] bg-white text-gray-800 font-medium hover:text-[#B74254] transition"
//                     >
//                       Submit
//                     </button>
//                   </div>
//                 </div>
//               </form>
//             </div>
//           </div>

//           {/* RIGHT SIDE - CONTACT INFO */}
//           <div
//             className="flex flex-col justify-center items-center lg:items-start gap-4 w-full lg:w-auto
//              text-center lg:text-left translate-y-0 lg:translate-y-[140%]"
//           >
//             <h4
//               className="mb-2 text-gray-900"
//               style={{
//                 fontFamily: "Sora, sans-serif",
//                 fontWeight: 400,
//                 fontSize: "30px",
//                 lineHeight: "100%",
//                 letterSpacing: "-0.02em",
//               }}
//             >
//               Or contact <br /> us on,
//             </h4>
//             <div
//               className="space-y-2 text-gray-800"
//               style={{
//                 fontFamily: "Sora, sans-serif",
//                 fontWeight: 400,
//                 fontSize: "15px",
//                 lineHeight: "150%",
//                 letterSpacing: "0%",
//                 verticalAlign: "middle",

//               }}
//             >
//               <p>+91 90890 80505</p>
//               <p>sales@gakgroup.in</p>
//             </div>
//           </div>
//         </div>

//         {/* 🔹 FOOTER BOTTOM */}
//         <div className="flex flex-col md:flex-row items-center justify-center md:justify-between gap-6 md:gap-12 w-full border-t border-gray-200 pt-6">
//           {/* Logo + Social */}
//           <div className="flex flex-col items-center md:flex-row md:items-center gap-6 md:gap-12 w-full md:w-auto">
//             <img src="/gakicon.png" alt="GAK Group" className="h-[66px] w-[90px]" />
//             <div className="flex flex-row gap-6 text-black text-xl justify-center md:justify-start">
//               <a href="https://www.facebook.com/gakgroupindia" target="_blank" rel="noopener noreferrer">
//                 <FaFacebookF />
//               </a>
//               <a href="https://www.linkedin.com/company/gak-reit/" target="_blank" rel="noopener noreferrer">
//                 <FaLinkedinIn />
//               </a>
//               <a href="https://www.youtube.com/@gakgroup/" target="_blank" rel="noopener noreferrer">
//                 <FaYoutube />
//               </a>
//               <a href="https://www.instagram.com/gakgroupindia/" target="_blank" rel="noopener noreferrer">
//                 <FaInstagram />
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }
"use client";

import React, { useState } from "react";
import { FaFacebookF, FaLinkedinIn, FaYoutube, FaInstagram } from "react-icons/fa";

export default function FooterSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (e.target.name === "message") {
      const words = e.target.value.trim().split(/\s+/);
      if (words.length > 150) return;
    }
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Form submitted successfully!");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <footer className="bg-white pt-10 pb-10 px-6 lg:px-16 font-sans">
      <div className="max-w-7xl mx-auto flex flex-col gap-20">
        {/* 🔹 TOP SECTION: TEXT + FORM + CONTACT */}
        <div className="grid grid-cols-1 lg:grid-cols-[3fr_2.5fr_2fr] gap-14 items-start">
          {/* LEFT SIDE - TEXT */}
          <div
            className="flex justify-center lg:justify-end items-center
                       text-center lg:text-right
                       w-full lg:w-auto
                       translate-y-0 lg:translate-y-[200%]"
          >
            <h3
              className="text-gray-900 font-sora"
              style={{
                fontWeight: 400,
                fontSize: "clamp(24px, 5vw, 48px)",
                lineHeight: "100%",
                letterSpacing: "-0.02em",
                textAlign: "center",
              }}
            >
              LET US GUIDE YOU <br className="hidden md:block" /> TO GROWTH
            </h3>
          </div>


          {/* CENTER - CONTACT FORM */}
          <div className="w-full flex flex-col items-center sm:items-center lg:items-start">
            <h3 className="text-xl sm:text-2xl text-gray-900 font-semibold mb-8 w-full text-left lg:pl-8">
              Post an enquiry
            </h3>

            <div className="w-full max-w-[700px] sm:max-w-[500px] p-[2px] rounded-[32px] bg-gradient-to-r from-[#B74254] to-[#231F51] shadow-lg">
              <form
                className="bg-white rounded-[32px] p-6 sm:p-8 flex flex-col gap-6"
                onSubmit={handleSubmit}
              >
                {/* Name */}
                <div className="relative text-black">
                  <label className="absolute -top-3 left-3 text-black text-sm font-medium bg-white px-1">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="xyz"
                    pattern="[A-Za-z\s]+"
                    title="Name should only contain alphabets"
                    required
                    className="w-full px-4 py-3 border rounded-md placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-[#B74254]"
                  />
                </div>

                {/* Email */}
                <div className="relative text-black">
                  <label className="absolute -top-3 left-3 text-black text-sm font-medium bg-white px-1">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="xyz@abc.com"
                    required
                    className="w-full px-4 py-3 border rounded-md placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-[#B74254]"
                  />
                </div>

                {/* Phone */}
                <div className="relative text-black">
                  <label className="absolute -top-3 left-3 text-black text-sm font-medium bg-white px-1">
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter phone number"
                    pattern="[0-9]{10}"
                    title="Phone number should be 10 digits"
                    required
                    className="w-full px-4 py-3 border rounded-md placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-[#B74254]"
                  />
                </div>

                {/* Message */}
                <div className="relative text-black">
                  <label className="absolute -top-3 left-3 text-black text-sm font-medium bg-white px-1">
                    Tell us more about what you're looking for
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Type your message here..."
                    rows={4}
                    className="w-full px-4 pt-6 pb-3 border rounded-md placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-[#B74254]"
                  />
                </div>

                {/* Submit Button */}
                <div className="flex justify-center mt-6">
                  <div className="w-[120px] h-[40px] rounded-[36px] p-[2px] bg-gradient-to-r from-[#B74254] to-[#231F51]">
                    <button
                      type="submit"
                      className="w-full h-full rounded-[36px] bg-white text-gray-800 font-medium hover:text-[#B74254] transition cursor-pointer"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>

          {/* RIGHT SIDE - CONTACT INFO */}
          <div
            className="flex flex-col justify-center items-center lg:items-start gap-4 w-full lg:w-auto
             text-center lg:text-left translate-y-0 lg:translate-y-[140%] lg:mt-5"
          >
            <h4
              className="mb-2 text-gray-900"
              style={{
                fontFamily: "Sora, sans-serif",
                fontWeight: 400,
                fontSize: "30px",
                lineHeight: "100%",
                letterSpacing: "-0.02em",
              }}
            >
              Or contact us on,
            </h4>
            <div
              className="space-y-2 text-gray-800"
              style={{
                fontFamily: "Sora, sans-serif",
                fontWeight: 400,
                fontSize: "15px",
                lineHeight: "150%",
                letterSpacing: "0%",
                verticalAlign: "middle",

              }}
            >
              <p>+91 90890 80505</p>
              <p>sales@gakgroup.in</p>
            </div>
          </div>
        </div>

        {/* 🔹 FOOTER BOTTOM */}
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-between gap-6 md:gap-12 w-full border-t border-gray-200 pt-6">
          {/* Logo + Social */}
          <div className="flex flex-col items-center md:flex-row md:items-center gap-6 md:gap-12 w-full md:w-auto">
            <img src="/gakicon.png" alt="GAK Group" className="h-[66px] w-[90px]" />
            <div className="flex flex-row gap-6 text-black text-xl justify-center md:justify-start">
              <a href="https://www.facebook.com/gakgroupindia" target="_blank" rel="noopener noreferrer">
                <FaFacebookF />
              </a>
              <a href="https://www.linkedin.com/company/gak-reit/" target="_blank" rel="noopener noreferrer">
                <FaLinkedinIn />
              </a>
              <a href="https://www.youtube.com/@gakgroup/" target="_blank" rel="noopener noreferrer">
                <FaYoutube />
              </a>
              <a href="https://www.instagram.com/gakgroupindia/" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>
            </div>
          </div>
           {/* Links */}
          <div className="flex flex-wrap gap-6 mt-4 md:mt-0 text-black font-sans text-base sm:text-lg justify-center md:justify-end">
            <a href="/services" className="hover:text-gray-700">
              Services
            </a>
            <a href="/projects" className="hover:text-gray-700">
              Projects
            </a>
            <a href="/about" className="hover:text-gray-700">
              About us
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}