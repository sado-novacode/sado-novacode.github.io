import type { Metadata, Viewport } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Sado — Full-Stack Developer | NovaCode",
  description:
    "Freelance full-stack developer building real-time dashboards, Telegram bots and AI (RAG) applications. Three open-source products, test-covered, USDT-friendly.",
  keywords: [
    "full-stack developer",
    "freelance",
    "Next.js",
    "TypeScript",
    "real-time dashboard",
    "Telegram bot",
    "RAG",
    "AI apps",
  ],
  openGraph: {
    title: "Sado — Full-Stack Developer | NovaCode",
    description:
      "Real-time dashboards, bots & AI apps — three open-source products, shipped end to end.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#09090b",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={`${spaceGrotesk.variable} antialiased`}>{children}</body>
    </html>
  );
}
