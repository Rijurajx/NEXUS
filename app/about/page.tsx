"use client";
import Image from "next/image";
import { Navbar } from "@/components/blocks/navbar";
import Footer from "@/components/blocks/Footer";

const About = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-screen mx-auto px-48 py-32 bg-black text-gray-300">
        {/* Heading Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white">
            Nexus: Redefining AI Automation
          </h1>
          <p className="text-gray-400 mt-2">
            Our journey towards intelligent automation, innovation, and efficiency.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Image */}
          <div className="md:col-span-2 relative h-72 rounded-2xl overflow-hidden">
            <Image
              src="/assets/landing.png"
              alt="Nexus AI"
              layout="fill"
              objectFit="cover"
            />
          </div>

          {/* About Us Box */}
          <div className="bg-[#3744aa]  p-6 rounded-2xl shadow-lg">
            <h2 className="text-xl text-[#00c995] font-semibold mb-3">ABOUT NEXUS</h2>
            <p className="text-sm leading-relaxed">
              Nexus is an AI-powered automation system designed to integrate with your workflow seamlessly.
              By leveraging state-of-the-art technology, we help businesses streamline operations, optimize
              efficiency, and unlock new possibilities in AI-driven automation.
            </p>
          </div>

          {/* Description */}
          <div className="bg-[#1A1A1A] p-6 rounded-2xl shadow-md md:col-span-2">
            <p className="text-gray-400 text-lg">
              Our intelligent automation solutions enhance productivity by handling complex tasks, freeing up
              valuable time for innovation. With Nexus, AI isn't just a tool—it’s an indispensable partner
              in your journey towards technological advancement.
            </p>
          </div>

          {/* Small Image */}
          <div className="relative h-48 rounded-2xl overflow-hidden">
            <Image
              src="/assets/logo.png"
              alt="AI Automation"
            //   layout="fill"
                          objectFit="cover"
                          height={300}
                            width={300}
                        
            />
          </div>
        </div>

        {/* Statistics */}
        <div className="flex flex-wrap justify-between mt-12 text-center">
          <div className="w-1/3">
            <h3 className="text-3xl font-bold text-[#6A00F4]">500K+</h3>
            <p className="text-gray-400">Automated Tasks</p>
          </div>
          <div className="w-1/3">
            <h3 className="text-3xl font-bold text-[#6A00F4]">10K+</h3>
            <p className="text-gray-400">Businesses Empowered</p>
          </div>
          <div className="w-1/3">
            <h3 className="text-3xl font-bold text-[#6A00F4]">99.9%</h3>
            <p className="text-gray-400">Uptime Guarantee</p>
          </div>
        </div>

        {/* Vision & Mission Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          <div className="bg-[#1A1A1A] p-6 rounded-2xl shadow-md">
            <h3 className="text-xl font-bold text-[#6A00F4] mb-3">VISION</h3>
            <p className="text-gray-400">
              Nexus envisions a future where AI seamlessly integrates with human potential, creating a
              world where technology enhances creativity, efficiency, and problem-solving.
            </p>
          </div>
          <div className="bg-[#1A1A1A] p-6 rounded-2xl shadow-md">
            <h3 className="text-xl font-bold text-[#6A00F4] mb-3">MISSION</h3>
            <p className="text-gray-400">
              Our mission is to develop cutting-edge AI solutions that simplify complex processes, allowing
              businesses and individuals to focus on what truly matters: innovation and progress.
            </p>
          </div>
        </div>
          </div>
          <Footer/>
    </>
  );
};

export default About;
