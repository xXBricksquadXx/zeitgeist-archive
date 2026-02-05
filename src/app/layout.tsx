import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ZEITGEIST | The Remastered Archive [2026]",
  description: "Non-profit preservation of the 2007 historical archive. Dedicated to restoring and maintaining high-fidelity documented evidence for the public record.",
  keywords: ["Zeitgeist", "Peter Joseph", "Remastered", "Documentary Archive", "History Preservation"],
  icons: {
    icon: "/favicon.png", // Ensure public/favicon.png exists
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    title: "ZEITGEIST | The Remastered Archive",
    description: "Truth is not told, it is realized.",
    url: "https://zeitgeist-archive.vercel.app",
    siteName: "Zeitgeist Archive",
    type: "website",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#07070a] text-white`}
      >
        {children}
      </body>
    </html>
  );
}