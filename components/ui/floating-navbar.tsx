"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { SignInButton, useUser } from "@clerk/nextjs";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: React.ReactNode;
  }[];
  className?: string;
}) => {
  const [visible, setVisible] = useState(true);
  const router = useRouter();
  const { isSignedIn } = useUser(); // Check if user is signed in

  useEffect(() => {
    let lastScrollY = 0;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY < 50) {
        setVisible(true);
      } else {
        setVisible(currentScrollY < lastScrollY);
      }
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.3 }}
          className={cn(
            "flex max-w-fit fixed top-10 inset-x-0 mx-auto border border-gray-600 dark:border-white/[0.2] rounded-full dark:bg-black bg-black shadow-lg z-[5000] pr-2 pl-8 py-2 items-center justify-center space-x-4 text-white",
            className
          )}
        >
          {navItems.map((navItem, idx) => (
            <Link
              key={`link=${idx}`}
              href={navItem.link}
              className="relative dark:text-neutral-50 items-center flex space-x-1 text-white dark:hover:text-neutral-300 hover:text-neutral-500"
            >
              <span className="block sm:hidden">{navItem.icon}</span>
              <span className="hidden sm:block text-sm">{navItem.name}</span>
            </Link>
          ))}

          {/* Conditional Button - Shows 'Dashboard' if Signed In, Otherwise 'Login' */}
          {isSignedIn ? (
            <button
              onClick={() => router.push("/dashboard")}
              className="border text-sm font-medium relative border-gray-700 dark:border-white/[0.2] text-white dark:text-white px-4 py-2 rounded-full"
            >
              <span>Dashboard</span>
              <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent h-px" />
            </button>
          ) : (
            <SignInButton
              mode="modal"
              fallbackRedirectUrl={"/dashboard"}
              forceRedirectUrl={"/dashboard"}
            >
              <button className="border text-sm font-medium relative border-gray-700 dark:border-white/[0.2] text-white dark:text-white px-4 py-2 rounded-full">
                <span>Login</span>
                <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent h-px" />
              </button>
            </SignInButton>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};
