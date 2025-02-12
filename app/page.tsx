import Image from "next/image";
import { SpotlightEffect } from "@/components/blocks/spotlight";
import { Navbar } from "@/components/blocks/navbar";

export default function LandingPage() {
  return (
    <>
      <Navbar/>
      <SpotlightEffect/>
    </>
  );
}
