"use client";
import { Navbar } from "@/components/blocks/navbar";
import Footer from "@/components/blocks/Footer";

const TermsAndConditions = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-screen bg-black px-36 mx-auto py-24 text-gray-300">
        <h1 className="text-4xl font-bold text-white mb-6">
          Terms and Conditions
        </h1>
        <p className="text-gray-400 mb-8">Last Updated: February 2025</p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-[#6A00F4] mb-3">
            1. Acceptance of Terms
          </h2>
          <p>
            By accessing or using Nexus, you agree to be bound by these Terms
            and Conditions. If you do not agree with any part of these terms,
            please discontinue use of our services immediately.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-[#6A00F4] mb-3">
            2. User Accounts
          </h2>
          <p>
            To access certain features of Nexus, you may be required to create
            an account. You are responsible for maintaining the confidentiality
            of your account information and agree to notify us of any
            unauthorized access.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-[#6A00F4] mb-3">
            3. Use of Services
          </h2>
          <p>
            Nexus is an AI-powered automation tool. You agree to use our
            services in compliance with applicable laws and not for any illegal
            or unauthorized purposes, including but not limited to hacking,
            scraping, or distributing malicious software.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-[#6A00F4] mb-3">
            4. Intellectual Property
          </h2>
          <p>
            All content, trademarks, and intellectual property related to Nexus
            belong to Nexus AI Hub. Unauthorized reproduction, distribution, or
            modification of our content is strictly prohibited.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-[#6A00F4] mb-3">
            5. Limitation of Liability
          </h2>
          <p>
            Nexus is provided on an &quot;as-is&quot; basis. We make no
            warranties regarding the reliability or accuracy of the services
            provided. Nexus AI Hub shall not be held liable for any direct,
            indirect, incidental, or consequential damages arising from the use
            of our platform.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-[#6A00F4] mb-3">
            6. Changes to Terms
          </h2>
          <p>
            We reserve the right to update or modify these Terms and Conditions
            at any time. Continued use of Nexus after changes constitutes
            acceptance of the revised terms.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-[#6A00F4] mb-3">
            7. Contact Us
          </h2>
          <p>
            If you have any questions about these Terms and Conditions, please
            contact us at
            <span className="text-[#6A00F4]"> support@nexusai.io</span>.
          </p>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default TermsAndConditions;
