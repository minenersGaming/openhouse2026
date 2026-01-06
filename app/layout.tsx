import { Analytics } from "@vercel/analytics/next";

import "./globals.css";
import Header from "../components/header";
import HeaderDev from "@/components/headerdev";
import Footer from "../components/footer";
import Providers from "@/components/provider";
import { NotoSansThai, FontInter, BethanyFont } from "@/config/font";
import { getMetadata } from "@/config/metadata";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th" suppressHydrationWarning>
      <body
        className={`${FontInter.variable} ${NotoSansThai.variable} ${BethanyFont.variable} antialiased overflow-x-clip`}
      >
        <Providers>
          <HeaderDev />
          {/* 
              Line below is spacer for removing empty space in header, 
              you may remove this and replace with a better one (Please)
          */}
          <div className="h-14 lg:h-16" />
          {children}
          <Footer />
          <Analytics />
        </Providers>
      </body>
    </html>
  );
}

export const metadata = getMetadata();
