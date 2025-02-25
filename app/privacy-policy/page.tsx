"use client";
import { Navbar } from "@/components/blocks/navbar";
import Footer from "@/components/blocks/Footer";

const PrivacyPolicy = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-screen px-40 bg-black mx-auto  py-32 text-gray-300">
        <h1 className="text-4xl font-bold text-center text-[#E0E0E0] mb-8">
          Privacy Policy
        </h1>
        <p className="text-gray-400 mb-6">
          Last Updated: 25/02/2025
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-[#E0E0E0] mb-3">1. Introduction</h2>
          <p className="text-gray-400">
            Welcome to Nexus. Your privacy is important to us. This Privacy Policy explains how we
            collect, use, and safeguard your personal data when you use our AI automation platform.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-[#E0E0E0] mb-3">2. Information We Collect</h2>
          <p className="text-gray-400">
            We collect personal and usage data, including but not limited to:
          </p>
          <ul className="list-disc list-inside text-gray-400 mt-2">
            <li>Your name, email, and contact details when you sign up.</li>
            <li>Interaction logs, usage patterns, and system analytics.</li>
            <li>Any data you input into our AI system for automation purposes.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-[#E0E0E0] mb-3">3. How We Use Your Information</h2>
          <p className="text-gray-400">
            We use your data to enhance and provide AI automation services, including:
          </p>
          <ul className="list-disc list-inside text-gray-400 mt-2">
            <li>Improving AI responses and automation capabilities.</li>
            <li>Providing customer support and enhancing user experience.</li>
            <li>Ensuring security and compliance with legal obligations.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-[#E0E0E0] mb-3">4. Data Protection</h2>
          <p className="text-gray-400">
            Nexus takes appropriate security measures to protect your data from unauthorized access,
            disclosure, or alteration. We use encryption and secure storage practices.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-[#E0E0E0] mb-3">5. Your Rights</h2>
          <p className="text-gray-400">
            You have the right to access, modify, or delete your personal data. Contact us at
            <span className="text-[#6A00F4]"> support@nexusai.io</span> to make any requests.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-[#E0E0E0] mb-3">6. Policy Updates</h2>
          <p className="text-gray-400">
            We may update this Privacy Policy periodically. Continued use of Nexus after changes
            constitutes acceptance of the revised policy.
          </p>
        </section>
          </div>
          <Footer/>
    </>
  );
};

export default PrivacyPolicy;
