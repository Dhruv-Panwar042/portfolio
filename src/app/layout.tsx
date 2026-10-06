import type { Metadata, Viewport } from "next";
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

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Dhruv Panwar | Full-Stack Engineer & AI Systems Developer",
  description:
    "Portfolio of Dhruv Panwar — Final Year B.Tech CSE at Vellore Institute of Technology (VIT). Production full-stack systems, RAG microservices, low-latency computer vision, and competitive programming (400+ problems).",
  keywords: [
    "Dhruv Panwar",
    "Software Engineer",
    "Full-Stack Developer",
    "AI Engineer",
    "VIT",
    "Vellore Institute of Technology",
    "RAG Microservices",
    "FastAPI",
    "Node.js",
    "LeetCode",
    "PostgreSQL",
    "Prisma"
  ],
  authors: [{ name: "Dhruv Panwar" }],
  openGraph: {
    title: "Dhruv Panwar | Full-Stack Engineer & AI Systems Developer",
    description: "Production full-stack platforms, low-latency AI microservices, and high-concurrency architectures.",
    type: "website",
    locale: "en_US"
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth dark`}
    >
      <body className="min-h-screen bg-[#070a13] text-slate-100 antialiased selection:bg-cyan-500/30 selection:text-cyan-200">
        {children}
      </body>
    </html>
  );
}
