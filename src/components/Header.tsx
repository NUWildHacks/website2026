import React from "react";
import LogoButton from "./LogoButton";

type HeaderLink = {
  label: string;
  href: string;
};

const headerLinks: HeaderLink[] = [
];

const Header = ({ links = headerLinks }: { links?: HeaderLink[] }) => {
  return (
    <header className="flex gap-2 sm:gap-4 items-center w-full justify-between border-b border-border py-3 sm:py-4 px-4 sm:px-8 md:px-12">
      <LogoButton href="/" width="48" />
      {links.map((link) => (
        <a href={link.href} key={link.label} className="opacity-80 text-sm sm:text-base text-center">
          {link.label}
        </a>
      ))}
    </header>
  );
};

export default Header;
