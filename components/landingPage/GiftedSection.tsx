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

const GiftedSection = () => {
  return (
    <section className="bg-linear-to-t to-[#042284] via-[#3450B0] from-[#F3E09D]">
      <div className=" block md:hidden  ">
        <div className="absolute flex flex-col justify-center items-center w-full mt-10 sm:mt-12 mb-10 px-5">
          <GiftedTextSm className="w-[80vw]" />
          <p className="font-bold bg-linear-to-t from-[#FBDE8C] to-[#F3F2CD] bg-clip-text text-transparent text-sm  sm:text-xl">
            โครงการพัฒนาความสามารถพิเศษ
          </p>
        </div>
        <div className="h-full xoverflow-hidden absolute flex flex-row justify-center items-start w-full space-x-1/7 mt-[80%]  ">
          <div className=" flex flex-col justify-start items-center xmt-10 sm:mt-12 mb-10 px-5 space-y-5">
            <GiftedMath className="w-[30vw] sm:w-55" />
            <GiftedThai className="w-[30vw] sm:w-55" />
          </div>
          <div className=" flex flex-col justify-start items-center xmt-10 sm:mt-12 mb-10 xpx-5 space-y-5">
            <GiftedSci className="w-[30vw] sm:w-55" />
            <GiftedEng className="w-[30vw] sm:w-55" />
          </div>
        </div>
        <GiftedSm className=" w-full left-0 " />
      </div>
      <div className="relative hidden md:block">
        <div className="absolute flex flex-col justify-center items-center w-full mt-9  mb-10 px-5">
          <GiftedTextLg className="w-[60vw]" />
          <p className="font-bold bg-linear-to-t from-[#FBDE8C] to-[#F3F2CD] bg-clip-text text-transparent text-sm  sm:text-2xl">
            โครงการพัฒนาความสามารถพิเศษ
          </p>
        </div>
        <div className="translate-y-[62%] absolute flex flex-row justify-center items-center w-full space-x-[9%]">
          <GiftedMathLg className="w-[15vw] transition-all hover:scale-105" />
          <GiftedSciLg className="w-[15vw] transition-all hover:scale-105" />
          <GiftedEngLg className="w-[15vw] transition-all hover:scale-105" />
          <GiftedThaiLg className="w-[15vw] transition-all hover:scale-105" />
        </div>
        <GiftedLg className="w-full" />
      </div>
    </section>
  );
};
export default GiftedSection;
