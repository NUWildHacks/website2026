"use client";

import Countdown from "./components/Countdown";
import Image from "next/image";
import { LuExternalLink } from "react-icons/lu";

export default function Home() {
  return (
    <div className="flex flex-col gap-2 sm:gap-4 h-screen w-full items-center justify-center p-4 lg:p-8 select-none">
      <Image
        src="/website2026/wildhacks-logo-no-padding.svg"
        alt="WildHacks 2025 logo"
        width={75}
        height={75}
        className="w-16 h-16 sm:w-[75px] sm:h-[75px]"
      />
      <p className="opacity-80 text-sm sm:text-base">WildHacks 2026 coming soon...</p>
      <Countdown />
      <a
        target="_blank"
        rel="noopener noreferrer"
        className="flex w-full max-w-md opacity-80 items-center justify-center gap-1 text-nowrap text-sm sm:text-base hover:underline hover:underline-offset-4"
        href="https://wildhacks-2025.devpost.com/project-gallery"
      >
        In the meantime, check out last year&apos;s winners <LuExternalLink />
      </a>
    </div>
  );
}
