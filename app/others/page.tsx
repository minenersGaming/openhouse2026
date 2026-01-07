import React from "react";
import CandleL from "@/vector/others/CandleL";
import CandleR from "@/vector/others/CandleR";
import IG from "@/vector/others/IG";
import TT from "@/vector/others/TT";
import FB from "@/vector/others/FB";
import X from "@/vector/others/X";
import Link from "next/link";

interface SocialProps {
  display: string;
  text: string;
  href: string;
}

export const Social: React.FC<SocialProps> = ({ display, text, href }) => {
  return (
    <Link
      href={href}
      target="_blank"
      className="flex items-center justify-center space-x-4 bg-linear-to-b from-[#2643A4] to-[#082688] px-4 py-2 rounded-full hover:opacity-70"
    >
      {getSVG(display)}
      <p className="font-semibold text-white">{text}</p>
    </Link>
  );
};

const getSVG = (display: string) => {
  switch (display) {
    case "IG":
      return <IG className="w-8" />;
    case "FB":
      return <FB className="w-8" />;
    case "TT":
      return <TT className="w-8" />;
    case "X":
      return <X className="w-8" />;
    default:
      return null;
  }
};

const page = () => {
  return (
    <section className="min-h-screen bg-linear-to-b from-[#569FF0] to-[#385CB7] flex justify-center items-start">
      <div className="flex flex-col items-center justify-center space-y-10 mt-28">
        <div className="flex flex-col items-center justify-center md:flex-row md:space-x-8 lg:space-x-20">
          <div className="flex flex-col items-center justify-center md:items-start space-y-[0.75rem]">
            <p className="text-xl text-white font-bold md:text-3xl">ช่องทางการติดต่อ</p>
            <Social
              display="IG"
              text="traimudom.oph"
              href="https://www.instagram.com/triamudom.oph/"
            />
            <Social
              display="FB"
              text="Triam Udom Open House"
              href="https://www.facebook.com/TriamUdomOPH"
            />
            <Social
              display="TT"
              text="triamudomoph"
              href="https://www.tiktok.com/@triamudom.oph"
            />
            <Social
              display="X"
              text="triamudomoph"
              href="https://x.com/triamudomoph"
            />
          </div>
          <div className="hidden md:block">
            <CandleR className="w-40 md:w-56" />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center md:flex-row md:space-x-8 lg:space-x-20">
            <div className="hidden md:block">
            <CandleL className="w-40 md:w-56" />
            </div>
          <div className="flex flex-col items-center justify-center md:items-end space-y-[0.75rem]">
            <p className="text-xl text-white font-bold md:text-3xl">ติดต่อเพิ่มเติม</p>
            <Social
              display="IG"
              text="tucmc_official"
              href="https://www.instagram.com/tucmc_official/"
            />
            <Social
              display="FB"
              text="TUCMC"
              href="https://www.facebook.com/triamudomclubs/"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
