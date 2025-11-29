"use client";

import React, { useState } from "react";

type Project = {
  name: string;
  description: string;
};

type ProjectPopupProps = {
  project: Project | null;
  onClose: () => void;
};

export default function ProjectPopup({ project, onClose }: ProjectPopupProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    message: "",
  });

  if (!project) return null;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (e.target.name === "message") {
      const words = e.target.value.split(/\s+/);
      if (words.length > 150) return;
    }
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Form submitted successfully!");
    setFormData({ name: "", email: "", number: "", message: "" });
  };

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl p-6 w-[90%] max-w-lg relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-600 hover:text-black"
        >
          ✕
        </button>

        <h2 className="text-2xl font-bold mb-4 text-black">{project.name}</h2>
        <p className="text-gray-700 mb-6">{project.description}</p>

        {/* Form */}
        <div className="w-full p-[2px] rounded-2xl bg-gradient-to-r from-[#B74254] to-[#231F51]">
          <form
            className="bg-white rounded-2xl p-6 flex flex-col gap-8"
            onSubmit={handleSubmit}
          >
            {/* Name */}
            <div className="relative">
              <label className="absolute -top-5 left-3 text-black text-sm font-medium bg-white px-1">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="abc"
                pattern="[A-Za-z\s]+"
                title="Name should only contain alphabets"
                required
                className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-1 focus:ring-[#B74254]"
              />
            </div>

            {/* Email */}
            <div className="relative">
              <label className="absolute -top-5 left-3 text-black text-sm font-medium bg-white px-1">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="abc@gmail.com"
                required
                className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-1 focus:ring-[#B74254]"
              />
            </div>

            {/* Message */}
            <div className="relative">
              <label className="absolute -top-5 left-3 text-black text-sm font-medium bg-white px-1">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Type your message here..."
                rows={4}
                className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-1 focus:ring-[#B74254]"
              />
              <p className="text-right text-xs text-gray-500 mt-1">
                {formData.message.split(/\s+/).filter(Boolean).length}/150 words
              </p>
            </div>

            {/* Gradient submit button */}
            <div className="w-[118px] h-[40px] rounded-[40px] p-[2px] bg-gradient-to-r from-[#B74254] to-[#231F51] mt-2">
              <button
                type="submit"
                className="w-full h-full rounded-[40px] bg-white text-gray-800 font-medium"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
