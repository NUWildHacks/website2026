import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "WildHacks 2026",
  description: "WildHacks 2026 coming soon...",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="apple-mobile-web-app-title" content="WildHacks" />
      </head>
      <body>{children}</body>
    </html>
  );
}
