"use client";
import { Authenticated } from "convex/react";
import Header from "@/components/blocks/Header";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen">
      <Authenticated>
        <h1>helo</h1>
        {/* <Sidebar/> */}
      </Authenticated>
      <div className=" flex-1">
        <Header />
        <main>{children}</main>
      </div>
    </div>
  );
}
