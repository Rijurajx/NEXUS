"use client";
import React, { useState } from "react";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { Navbar } from "@/components/blocks/navbar";
import { HiOutlineOfficeBuilding } from "react-icons/hi";
import { MdOutlineLocalPhone } from "react-icons/md";
import { CiMail } from "react-icons/ci";

const Contact: React.FC = () => {
  const sendContact = useMutation(api.contact.sendContact);

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      await sendContact({
        firstName: form.firstName,
        lastName: form.lastName,
        email: form.email,
        phoneNumber: form.phoneNumber || undefined,
        message: form.message,
      });

      setStatus("success");
      setForm({ firstName: "", lastName: "", email: "", phoneNumber: "", message: "" });

      setTimeout(() => setStatus("idle"), 3000); // Reset status after 3s
    } catch (error) {
      console.error("Error sending message:", error);
      setStatus("error");
    }
  };

  return (
    <>
      <Navbar />
      <div className="max-w-screen min-h-screen mx-auto p-8 bg-[#000000] flex justify-center items-center">
        <div className="grid md:grid-cols-2 gap-8 bg-[#000000] p-8 rounded-lg shadow-lg">
          {/* Left Side - Contact Info */}
          <div className="flex justify-center flex-col">
            <h2 className="text-5xl font-bold text-[#E0E0E0]">Connect with Nexus</h2>
            <p className="text-gray-400 mt-3">
              Need AI-powered assistance? Nexus is here to enhance your workflow, automate tasks, and provide intelligent insights.
              Reach out, and let's redefine efficiency together.
            </p>
            <div className="mt-6 space-y-4">
              <div className="flex items-center space-x-3">
                <span className="text-[#6D6D6D] text-2xl"><HiOutlineOfficeBuilding/></span>
                <p className="text-gray-300">Nexus AI Hub, Sector-9, Cyber City</p>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-[#6D6D6D] text-2xl"><MdOutlineLocalPhone/></span>
                <p className="text-gray-300">+1 (800) NEXUS-AI</p>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-[#6D6D6D] text-2xl"><CiMail/></span>
                <p className="text-gray-300">support@nexusai.io</p>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div>
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-300 font-medium">First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    value={form.firstName}
                    onChange={handleChange}
                    required
                    className="w-full bg-[#262626] border border-[#333] rounded-lg p-2 text-gray-200 focus:ring-2 focus:ring-[#6A00F4] outline-none"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 font-medium">Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    value={form.lastName}
                    onChange={handleChange}
                    required
                    className="w-full bg-[#262626] border border-[#333] rounded-lg p-2 text-gray-200 focus:ring-2 focus:ring-[#6A00F4] outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-300 font-medium">Email</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-[#262626] border border-[#333] rounded-lg p-2 text-gray-200 focus:ring-2 focus:ring-[#6A00F4] outline-none"
                />
              </div>

              <div>
                <label className="block text-gray-300 font-medium">Phone Number</label>
                <input
                  type="text"
                  name="phoneNumber"
                  value={form.phoneNumber}
                  onChange={handleChange}
                  className="w-full bg-[#262626] border border-[#333] rounded-lg p-2 text-gray-200 focus:ring-2 focus:ring-[#6A00F4] outline-none"
                />
              </div>

              <div>
                <label className="block text-gray-300 font-medium">Your Message</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  className="w-full bg-[#262626] border border-[#333] rounded-lg p-2 h-32 text-gray-200 focus:ring-2 focus:ring-[#6A00F4] outline-none"
                />
              </div>

              <button
                type="submit"
                disabled={status === "loading"}
                className={`w-full py-2 rounded-lg transition ${
                  status === "loading" ? "bg-gray-500 cursor-not-allowed" : "bg-[#6A00F4] hover:bg-[#5200C9] text-white"
                }`}
              >
                {status === "loading" ? "Sending..." : "Send Message"}
              </button>

              {status === "success" && (
                <p className="text-green-400 text-sm mt-2">Message sent successfully!</p>
              )}
              {status === "error" && (
                <p className="text-red-400 text-sm mt-2">Error sending message. Try again.</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
