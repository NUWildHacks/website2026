"use client";

import Countdown from "../components/Countdown";
import Image from "next/image";
import { LuExternalLink } from "react-icons/lu";
import WildHacksLogo from "../../public/wildhacks-no-bg.png";

export default function Home() {
  return (
    <div className="flex flex-col gap-2 sm:gap-4 w-full flex-1 items-center justify-center p-4 lg:p-8">
      <Image
        src={WildHacksLogo}
        alt="WildHacks logo"
        className="w-24 sm:w-[100px] h-auto"
      />
      <p className="opacity-80 text-sm sm:text-base text-center">
        Northwestern&apos;s largest hackathon <br /> WildHacks 2026 coming
        soon...
      </p>
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
