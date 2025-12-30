import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { Geist, Geist_Mono, Noto_Sans_Thai, Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/header";
import Footer from "../components/footer";
import Providers from "@/components/provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const NotoSansThai = Noto_Sans_Thai({
  variable: "--font-noto-sans-thai",
  subsets: ["thai", "latin"],
});
const FontInter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Triam Udom Open House 2026",
  description:
    "88 ปีงานนิทรรศการวิชาการเตรียมอุดมศึกษา (Triam Udom Open House 2026)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th">
      <body
        className={`${FontInter.variable} ${NotoSansThai.variable}${geistSans.variable} ${geistMono.variable} antialiased overflow-x-clip`}
      >
        <Providers>
          <div className="fixed w-full top-0 left-0 z-6767">
            <Header />
          </div>
          {children}
          <Footer />
          <Analytics />
        </Providers>
      </body>
    </html>
  );
}
