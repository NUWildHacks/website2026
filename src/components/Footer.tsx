import React from "react";

type FooterLink = {
  label: string;
  href: string;
};

const footerLinks: FooterLink[] = [
  {
    label: "MLH Code of Conduct",
    href: "/code-of-conduct",
  },
];

const Footer = ({ links = footerLinks }: { links?: FooterLink[] }) => {
  return (
    <footer className="flex gap-2 sm:gap-4 items-center justify-center w-full py-3 sm:py-4 px-4 sm:px-8 md:px-12 border-t border-gray-200 dark:border-gray-800">
      {links.map((link) => (
        <a href={link.href} key={link.label} className="opacity-80 text-sm sm:text-base text-center">
          {link.label}
        </a>
      ))}
    </footer>
  );
};

export default Footer;
