import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "@/components/ThemeProvider";

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
      <body className="min-h-screen flex flex-col">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className="flex-1 flex min-h-0 p-4">{children}</main>
          <a
            id="mlh-trust-badge"
            style={{
              display: "block",
              maxWidth: "100px",
              minWidth: "60px",
              position: "fixed",
              right: "50px",
              top: "0",
              width: "10%",
              zIndex: "10000",
            }}
            href="https://mlh.io/na?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2026-season&utm_content=gray"
            target="_blank"
          >
            <img
              src="https://s3.amazonaws.com/logged-assets/trust-badge/2026/mlh-trust-badge-2026-gray.svg"
              alt="Major League Hacking 2026 Hackathon Season"
              style={{ width: "100%" }}
            />
          </a>
          <Toaster />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
