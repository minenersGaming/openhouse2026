import { Noto_Sans_Thai, Inter, Bai_Jamjuree } from "next/font/google";
import localFont from "next/font/local";

const NotoSansThai = Noto_Sans_Thai({
  variable: "--font-noto-sans-thai",
  subsets: ["thai", "latin"],
});

const FontInter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});
const FontBaiJamjuree = Bai_Jamjuree({
  weight: ["400", "500", "600", "700"],
  variable: "--font-bai-jamjuree",
  subsets: ["thai", "latin"],
});

const BethanyFont = localFont({
  src: "../public/fonts/BethanyElingston.woff2",
  variable: "--font-bethany",
  display: "swap",
});

export { NotoSansThai, FontInter, BethanyFont, FontBaiJamjuree };
