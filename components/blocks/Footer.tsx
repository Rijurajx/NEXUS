'use client';

import Link from 'next/link';
import { FaFacebookF, FaInstagram, FaXTwitter, FaYoutube, FaWhatsapp } from 'react-icons/fa6';

export default function Footer() {
  return (
    <footer className="bg-black text-white py-16 px-6 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-10 md:space-y-0">
        {/* Logo */}
        <div className="text-center md:text-left">
          <Link href="/">
            <h1 className='text-4xl text-neutral-300 font-bold'>NEXUS</h1>
          </Link>
          <p className="text-gray-400 mt-2 max-w-xs">Empowering automation with AI-driven intelligence.</p>
        </div>

        {/* Navigation Links */}
        <nav className="text-center">
          <ul className="flex flex-col md:flex-row justify-center gap-4 md:gap-8 text-sm">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About Nexus</Link></li>
            <li><Link href="/features">Features</Link></li>
            <li><Link href="/contact">Contact</Link></li>
            <li><Link href="/support">Support</Link></li>
          </ul>
        </nav>

        {/* Social Icons */}
        <div className="flex gap-6 text-2xl">
          <Link href="#" aria-label="Facebook" className="hover:text-gray-400"><FaFacebookF /></Link>
          <Link href="#" aria-label="Instagram" className="hover:text-gray-400"><FaInstagram /></Link>
          <Link href="#" aria-label="Twitter" className="hover:text-gray-400"><FaXTwitter /></Link>
          <Link href="#" aria-label="YouTube" className="hover:text-gray-400"><FaYoutube /></Link>
          <Link href="#" aria-label="WhatsApp" className="hover:text-gray-400"><FaWhatsapp /></Link>
        </div>
      </div>

      {/* Divider */}
      <hr className="border-gray-700 my-10" />

      {/* Copyright and Policies */}
      <div className="text-center text-sm text-gray-400 space-y-4">
        <p>&copy; {new Date().getFullYear()} Nexus AI. All rights reserved.</p>
        <div className="flex flex-col md:flex-row justify-center gap-6">
          <Link href="/privacy-policy">Privacy Policy</Link>
          <Link href="/terms-of-service">Terms of Service</Link>
          <Link href="/cookies-settings">Cookies Settings</Link>
        </div>
      </div>
    </footer>
  );
}