"use client";

import { useState, ChangeEvent, FormEvent } from "react";

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Form submitted successfully!");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div className="w-full max-w-xs mx-auto">
      <h3 className="text-base font-semibold mb-3 text-gray-900">
        Post an enquiry
      </h3>

      <div className="p-[2px] rounded-2xl bg-gradient-to-r from-[#B74254] to-[#231F51]">
        <form
          className="bg-white rounded-2xl p-4 flex flex-col gap-3"
          onSubmit={handleSubmit}
        >
         <input
  type="text"
  name="name"
  value={formData.name}
  onChange={handleChange}
  placeholder="xyz"
  pattern="[A-Za-z\s]+"
  title="Name should only contain alphabets"
  required
  className="w-full px-3 py-2 text-sm border rounded-md 
             text-black
             placeholder:text-gray-400 
             focus:outline-none focus:ring-1 focus:ring-[#B74254]"
/>

          <div className="relative">
            <label className="absolute -top-2 left-2 text-xs font-medium bg-white px-1 text-gray-700">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="xyz@abc.com"
              required
className="w-full px-3 py-2 text-sm border rounded-md 
             text-black
             placeholder:text-gray-400 
             focus:outline-none focus:ring-1 focus:ring-[#B74254]"            />
          </div>

          <div className="relative">
            <label className="absolute -top-2 left-2 text-xs font-medium bg-white px-1 text-gray-700">
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
className="w-full px-3 py-2 text-sm border rounded-md 
             text-black
             placeholder:text-gray-400 
             focus:outline-none focus:ring-1 focus:ring-[#B74254]"             />
          </div>

          <div className="relative">
            <label className="absolute -top-2 left-2 text-xs font-medium bg-white px-1 text-gray-700">
              Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Type your message..."
              rows={3}
className="w-full px-3 py-2 text-sm border rounded-md 
             text-black
             placeholder:text-gray-400 
             focus:outline-none focus:ring-1 focus:ring-[#B74254]"             />
          </div>

          <div className="flex justify-center mt-2">
            <div className="w-24 h-9 rounded-full p-[2px] bg-gradient-to-r from-[#B74254] to-[#231F51]">
              <button
  type="submit"
  className="w-full h-full rounded-full bg-white text-sm font-medium text-black hover:text-[#B74254] transition"
>
  Submit
</button>

            </div>
          </div>
        </form>
      </div>
    </div>
  );
}