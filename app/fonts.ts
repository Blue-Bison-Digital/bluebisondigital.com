import { Space_Grotesk, Inter } from "next/font/google";

/**
 * Fonts (PLAN.md 4.0): Space Grotesk 500/700 for display, Inter 400/500/600/700
 * for UI and body. Loaded via next/font with display: swap, latin subset.
 * Exposed as CSS variables consumed throughout globals.css and modules.
 */

export const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "700"],
  display: "swap",
  variable: "--font-display",
});

export const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-sans",
});
