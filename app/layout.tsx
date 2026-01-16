import type { Metadata } from "next";
import { Fraunces, Outfit } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Matt Hamilton | Founder & Developer Advocate",
  description: "Technologist, founder, and developer advocate bridging the gap between complex emerging technologies and human-centric solutions. Expert in AI, Blockchain, and Digital Transformation.",
  keywords: ["Matt Hamilton", "Developer Advocate", "Tech Consulting", "Barbados", "AI", "Blockchain", "Web Development", "Founder"],
  authors: [{ name: "Matt Hamilton" }],
  openGraph: {
    title: "Matt Hamilton | Founder & Developer Advocate",
    description: "Technologist, founder, and developer advocate bridging the gap between complex emerging technologies and human-centric solutions.",
    url: "https://dharach.com",
    siteName: "Matt Hamilton",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://dharach.com/matt.jpg",
        width: 1200,
        height: 630,
        alt: "Matt Hamilton",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Matt Hamilton | Founder & Developer Advocate",
    description: "Technologist, founder, and developer advocate bridging the gap between complex emerging technologies and human-centric solutions.",
    creator: "@hammertoe",
    images: ["https://dharach.com/matt.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${fraunces.variable} ${outfit.variable} antialiased bg-slate-950 text-slate-100 font-sans selection:bg-teal-500/30 selection:text-teal-200`}
      >
        {children}
      </body>
    </html>
  );
}
