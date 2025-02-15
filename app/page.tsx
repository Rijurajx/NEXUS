import Image from "next/image";
import { SpotlightEffect } from "@/components/blocks/spotlight";
import { Navbar } from "@/components/blocks/navbar";
import { TimelineBlock } from "@/components/blocks/timelineBlock";
import "./globals.css"

export default function LandingPage() {
  return (
    <div className="scrollbar-hide overflow-y-hidden">
      <Navbar/>
      <SpotlightEffect />
      <TimelineBlock/>
    </div>
  );
}
