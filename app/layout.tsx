import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { inter, spaceGrotesk } from "./fonts";
import { siteConfig } from "@/site.config";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Blue Bison Digital | AI Automation for Small Business",
    template: "%s | Blue Bison Digital",
  },
  description:
    "Blue Bison Digital builds AI automations that answer leads, chase follow-ups and handle the busywork for small businesses. Book a free discovery call.",
  // "./" resolves against metadataBase and the current pathname, so every
  // route self-canonicalizes to its own apex URL. Without this, the www and
  // apex copies of a page are identical with no declared preference and
  // Google files one of them as a duplicate.
  alternates: {
    canonical: "./",
  },
  openGraph: {
    type: "website",
    siteName: "Blue Bison Digital",
    // Relative, for the same reason as the canonical above: a hardcoded
    // siteConfig.url made every page share the homepage's og:url.
    url: "./",
    title: "Blue Bison Digital | AI Automation for Small Business",
    description:
      "AI automations that answer leads, chase follow-ups and handle the busywork for small businesses.",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <head>
        {/* Progressive enhancement: without JS the scroll-reveal never fires,
            so ensure all revealable content is visible. */}
        <noscript>
          <style>{`[data-reveal]{opacity:1 !important;transform:none !important}`}</style>
        </noscript>
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
