import GiftedMath from "@/vector/LandingPage/Gifted/CardSm/GiftedMath";
import GiftedSci from "@/vector/LandingPage/Gifted/CardSm/GiftedSci";
import GiftedThai from "@/vector/LandingPage/Gifted/CardSm/GiftedThai";
import GiftedEng from "@/vector/LandingPage/Gifted/CardSm/GiftedEng";

import GiftedMathLg from "@/vector/LandingPage/Gifted/CardLg/GiftedMathLg";
import GiftedSciLg from "@/vector/LandingPage/Gifted/CardLg/GiftedSciLg";
import GiftedThaiLg from "@/vector/LandingPage/Gifted/CardLg/GiftedThaiLg";
import GiftedEngLg from "@/vector/LandingPage/Gifted/CardLg/GiftedEngLg";

import GiftedSm from "@/vector/LandingPage/Gifted/GiftedSm";
import GiftedTextSm from "@/vector/LandingPage/Gifted/GiftedTextSm";

import GiftedLg from "@/vector/LandingPage/Gifted/GiftedLg";
import GiftedTextLg from "@/vector/LandingPage/Gifted/GiftedTextLg";
const SmBanner =
  "w-[30vw] cursor-pointer  duration-400 transition-all hover:scale-105";
const LgBanner =
  "w-[14vw] transition-all hover:scale-105 duration-400 cursor-pointer";
const GiftedSection = () => {
  return (
    <section
      id="gifted"
      className="[background:linear-gradient(180deg,#042284_1.28%,#3450B0_14.51%,#F3E09D_37.42%)]"
    >
      <div className=" block md:hidden  ">
        <div className="absolute flex flex-col justify-center items-center w-full mt-[10%] mb-10 px-5">
          <GiftedTextSm className="w-[90vw]  -translate-x-[4%]" />
          {/* <p className="font-bold bg-linear-to-t from-[#FBDE8C] to-[#F3F2CD] bg-clip-text text-transparent text-sm  sm:text-xl">
            โครงการพัฒนาความสามารถพิเศษ
          </p> */}
        </div>
        <div className="h-full xoverflow-hidden absolute flex flex-row justify-center items-start w-full space-x-[5%] mt-[80%] fade-in-scroll  ">
          <div className=" flex flex-col justify-start items-center xmt-10 sm:mt-12 mb-10 space-y-5">
            <GiftedMath className={SmBanner} />
            <GiftedThai className={SmBanner} />
          </div>
          <div className=" flex flex-col justify-start items-center xmt-10 sm:mt-12 mb-10 space-y-5">
            <GiftedSci className={SmBanner} />
            <GiftedEng className={SmBanner} />
          </div>
        </div>
        <GiftedSm className=" w-full left-0 " />
      </div>
      <div className="relative hidden md:block">
        <div className="absolute flex flex-col justify-center items-center w-full mt-[1.5%] mb-10 px-5">
          <GiftedTextLg className="w-[65vw]" />
          {/* <p className="-translate-y-[80%]  font-bold bg-linear-to-t from-[#FBDE8C] to-[#F3F2CD] bg-clip-text text-transparent text-sm  sm:text-2xl">
            โครงการพัฒนาความสามารถพิเศษ
          </p> */}
        </div>
        <div className="translate-y-[70%] absolute flex flex-row justify-center items-center w-full space-x-[10.5%] xfade-in-scroll">
          <a href="/ondev/gifted/gifted-math" className="block">
            <GiftedMathLg className={LgBanner} />
          </a>

          <a href="/ondev/gifted/gifted-science" className="block">
            <GiftedSciLg className={LgBanner} />
          </a>

          <a href="/ondev/gifted/gifted-english" className="block">
            <GiftedEngLg className={LgBanner} />
          </a>

          <a href="/ondev/gifted/gifted-thai" className="block">
            <GiftedThaiLg className={LgBanner} />
          </a>
        </div>
        <GiftedLg className="w-full" />
      </div>
    </section>
  );
};
export default GiftedSection;
