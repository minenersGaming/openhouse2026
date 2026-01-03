import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import {
  Geist,
  Geist_Mono,
  Noto_Sans_Thai,
  Inter,
  Bai_Jamjuree,
} from "next/font/google";

import localFont from "next/font/local";
import "./globals.css";
import Header from "../components/header";
import HeaderDev from "@/components/headerdev";
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
const FontBaiJamjuree = Bai_Jamjuree({
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-bai-jamjuree",
  subsets: ["thai", "latin"],
});

const bethanyFont = localFont({
  src: "../public/fonts/BethanyElingston.woff2", // adjust the extension based on your file
  variable: "--font-bethany",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Triam Udom Open House 2026",
    template: "%s | Triam Udom Open House 2026",
  },
  description:
    "88 ปีงานนิทรรศการวิชาการเตรียมอุดมศึกษา (Triam Udom Open House 2026)",
  metadataBase: new URL("https://openhouse.triamudom.ac.th"),
  openGraph: {
    title: "Triam Udom Open House 2026",
    description:
      "88 ปีงานนิทรรศการวิชาการเตรียมอุดมศึกษา (Triam Udom Open House 2026)",
    url: "https://openhouse.triamudom.ac.th",
    siteName: "Triam Udom Open House 2026",
    // images: ["/og.png"],
    type: "website",
  },
  // twitter: {
  //   card: "summary_large_image",
  // },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th">
      <body
        className={`${FontInter.variable} ${NotoSansThai.variable} ${geistSans.variable} ${geistMono.variable} ${bethanyFont.variable} antialiased overflow-x-clip`}
      >
        <Providers>
          <div className="fixed w-full top-0 left-0 z-9999 ">
            <HeaderDev />
          </div>
          {children}
          <Footer />
          <Analytics />
        </Providers>
      </body>
    </html>
  );
}
