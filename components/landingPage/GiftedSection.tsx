import GiftedSm from "@/vector/LandingPage/Gifted/GiftedSm";
import GiftedTextSm from "@/vector/LandingPage/Gifted/GiftedTextSm";
import GiftedMath from "@/vector/LandingPage/Gifted/Card/GiftedMath";
import GiftedLg from "@/vector/LandingPage/Gifted/GiftedLg";
import GiftedTextLg from "@/vector/LandingPage/Gifted/GiftedTextLg";

const GiftedSection = () => {
  return (
    <section className="bg-linear-to-t to-[#042284] via-[#3450B0] from-[#F3E09D]">
      <div className=" block md:hidden">
        <div className="absolute flex flex-col justify-center items-center w-full mt-10 sm:mt-12 mb-10 px-5">
          <GiftedTextSm className="w-[80vw]" />
          <p className="font-bold bg-linear-to-t from-[#FBDE8C] to-[#F3F2CD] bg-clip-text text-transparent text-sm  sm:text-xl">
            โครงการพัฒนาความสามารถพิเศษ
          </p>
        </div>
        <div className="h-full absolute flex flex-row justify-center items-start w-full space-x-1/7 translate-y-1/3 mt-7 xtranslate-y-[40%] sm:translate-y-[40%] ">
          <div className=" flex flex-col justify-start items-center xmt-10 sm:mt-12 mb-10 px-5 space-y-5">
            <GiftedMath className="w-[30vw] sm:w-55" />
            <GiftedMath className="w-[30vw] sm:w-55" />
          </div>
          <div className=" flex flex-col justify-start items-center xmt-10 sm:mt-12 mb-10 px-5 space-y-5">
            <GiftedMath className="w-[30vw] sm:w-55" />
            <GiftedMath className="w-[30vw] sm:w-55" />
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
        <div className="relative z-69 flex-row"></div>

        <GiftedLg className=" w-full left-0 " />
      </div>
    </section>
  );
};
export default GiftedSection;
