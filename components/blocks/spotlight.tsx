"use client";
import React from "react";
import { SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";
import { Spotlight } from "../ui/spotlight-new";
import ShimmerButton from "./shimmer-button";
import Link from "next/link";
import "../../app/globals.css"

export function SpotlightEffect() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden px-4 scrollbar-hide">
      <Spotlight />
      <div className="p-4 max-w-7xl mx-auto relative z-10 w-full text-center">
        <h1 className="text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          NEXUS <br />{" "}
          <p className="pt-6 text-3xl">Smart Automation for Your Workflow</p>
        </h1>
        <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg mx-auto">
          Nexus integrates with your system to automate tasks, manage databases,
          transcribe videos, and run custom tools—enhancing efficiency
          effortlessly.
        </p>

        {/* CTA Button Centered */}
        <div className="mt-6 flex justify-center">
          <SignedIn>
            <Link href="/dashboard">
            <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                Get Started
              </button>
            </Link>
          </SignedIn>
          <SignedOut>
            <SignInButton
              mode="modal"
              fallbackRedirectUrl={"/dashboard"}
              forceRedirectUrl={"/dashboard"}
            >
              <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                Sign In
              </button>
            </SignInButton>
          </SignedOut>
        </div>
      </div>
    </div>
  );
}
