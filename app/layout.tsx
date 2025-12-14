import type { Metadata } from "next";
import { Geist, Geist_Mono, Noto_Sans_Thai, Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/header";
import Footer from "../components/footer";

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
  description: "งานนิทรรศการประจำปีของโรงเรียนเตรียมอุดมศึกษา",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${FontInter.variable} ${NotoSansThai.variable}${geistSans.variable} ${geistMono.variable} antialiased overflow-x-clip`}
      >
        <div className="absolute w-full h-full z-10">
          <Header />
        </div>
        {children}
        <Footer />
      </body>
    </html>
  );
}
