import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";
import "../../app/globals.css"


export function TimelineBlock() {
  const data = [
    {
      title: "Security",
      content: (
        <div>
          <p className="text-neutral-400 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Implemented advanced security measures in Nexus, including Clerk authentication, Google OAuth, and Passkeys for seamless and secure access.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/assets/account.png"
              alt="security feature"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-md"
            />
            <Image
              src="/assets/login.png"
              alt="Google OAuth"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-md"
            />
          </div>
        </div>
      ),
    },
    {
      title: "UI/UX",
      content: (
        <div>
          <p className="text-neutral-400 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Designed an intuitive and user-friendly interface for Nexus, ensuring seamless navigation and an efficient user experience.
          </p>
          <p className="text-neutral-400 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Every interaction is carefully crafted for clarity, efficiency, and ease of use, making automation simpler than ever.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/assets/landing.png"
              alt="Nexus Dashboard"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-md"
            />
            <Image
              src="/assets/welcome.png"
              alt="User Workflow"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-md"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Feature Enhancements",
      content: (
        <div>
          <p className="text-neutral-400 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            Added several powerful features to Nexus, enhancing automation capabilities and overall efficiency.
          </p>
          <div className="mb-8">
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ AI-powered task automation
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Real-time data processing and insights
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Seamless integration with databases and APIs
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Plugin support for extended functionality
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/assets/convo.png"
              alt="AI Automation"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-md"
            />
            <Image
              src="/assets/terminal.png"
              alt="Database Integration"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-md"
            />
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="w-full scrollbar-hide">
      <Timeline data={data} />
    </div>
  );
}
