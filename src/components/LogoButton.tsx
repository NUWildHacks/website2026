"use client";
import Image from "next/image";
import WildHacksLogo from "../../public/wildhacks-no-bg.png";

export default function LogoButton({
  href,
  width = "24",
}: {
  href: string;
  width?: string;
}) {
  return (
    <a
      href={href}
      rel="noopener noreferrer"
    >
      <Image
        src={WildHacksLogo}
        alt="WildHacks logo"
        className={`h-auto transition-all duration-200`}
        style={{
          width: `${width}px`,
          opacity: 0.8,
          transition: "opacity 0.2s ease-in-out",
          cursor: "pointer",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.opacity = "1";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.opacity = "0.8";
        }}
      />
    </a>
  );
}
