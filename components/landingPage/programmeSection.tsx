import LeftPillar from "@/vector/LandingPage/Programme/LeftPillar";
import RightPillar from "@/vector/LandingPage/Programme/RightPillar";

import SciMath from "@/vector/LandingPage/Programme/CardLg/SciMath";
import ArtsFr from "@/vector/LandingPage/Programme/CardLg/ArtsFr";
import ArtsKr from "@/vector/LandingPage/Programme/CardLg/ArtsKr";
import ArtsCn from "@/vector/LandingPage/Programme/CardLg/ArtsCn";
import ArtJp from "@/vector/LandingPage/Programme/CardLg/ArtJp";
import ArtsDe from "@/vector/LandingPage/Programme/CardLg/ArtsDe";
import ArtsEs from "@/vector/LandingPage/Programme/CardLg/ArtsEs";
import ArtsMath from "@/vector/LandingPage/Programme/CardLg/ArtsMath";

import SciMathSm from "@/vector/LandingPage/Programme/CardSm/SciMathSm";
import ArtsFrSm from "@/vector/LandingPage/Programme/CardSm/ArtsFrSm";
import ArtsKrSm from "@/vector/LandingPage/Programme/CardSm/ArtsKrSm";
import ArtsCnSm from "@/vector/LandingPage/Programme/CardSm/ArtsCnSm";
import ArtsJpSm from "@/vector/LandingPage/Programme/CardSm/ArtsJpSm";
import ArtsDeSm from "@/vector/LandingPage/Programme/CardSm/ArtsDeSm";
import ArtsEsSm from "@/vector/LandingPage/Programme/CardSm/ArtsEsSm";
import ArtsMathSm from "@/vector/LandingPage/Programme/CardSm/ArtsMathSm";
import ProgrammeSm from "@/vector/LandingPage/Programme/ProgrammeSm";

import ProgrammeLg from "@/vector/LandingPage/Programme/ProgrammeLg";
import ProgrammeBigLg from "@/vector/LandingPage/Programme/ProgrammeBigLg";
const Style = {
  LgCard: "w-[24vw] hover:scale-105 transition-all duration-400",
  LgFlex:
    "flex flex-col justify-center items-center left-0 translate-x- z-6 -space-y-15  fade-in-scroll",
  LgPadding: "w-[17vw] left-0 -translate-y-10",
};

const ProgrammeSection = () => {
  return (
    <section className="relative w-full overflow-hidden bg-linear-to-t from-[#457BCA] via-[#3450B0] to-[#457BCA] h-auto md:max-h-[1600px]">
      <div className="h-full top-0">
        <div className=" -translate-y-[50px]  absolute right-0 z-67 pointer-events-none w-screen hidden md:flex justify-between overflow-hidden">
          <LeftPillar className="h-[200%] -translate-x-[13%] z-67" />
          <RightPillar className="h-[200%] translate-x-[13%] z-67" />
        </div>
      </div>
      <div className="hidden absolute min-w-full xlg:flex flex-row justify-center h-[105%]">
        <ProgrammeBigLg className="left-0 translate-x-1/2 min-w-[1500px] w-[125%]" />
      </div>

      <div className=" absolute md:relative flex flex-col  justify-center items-center w-full mt-[10%] md:mt-[5%] ">
        <p className="text-center font-bold bg-linear-to-t from-[#FBDE8C] to-[#F3F2CD] bg-clip-text text-transparent text-5xl sm:text-7xl md:text-8xl lg:text-8xl">
          สายการเรียน
        </p>
        <p className="font-bold text-center bg-linear-to-t from-[#FBDE8C] to-[#F3F2CD] bg-clip-text text-transparent text-md sm:text-xl md:text-md">
          คลิกที่ธงเพื่อดูข้อมูลสายการเรียนที่สนใจ
        </p>
      </div>

      <div className="hidden overflow-hidden md:flex w-full justify-center items-center">
        <div
          className={
            "mt-15 w-[70vw] flex flex-row justify-between items-center"
          }
        >
          <div className={Style.LgFlex}>
            <ProgrammeLg className={Style.LgPadding} />
            <div className="absolute flex flex-col -space-y-[40%] -translate-y-5">
              <a href="/ondev/programs/sci-math" className="block">
                <SciMath className={Style.LgCard} />
              </a>
              <a href="/ondev/programs/arts-math" className="block">
                <ArtsMath className={Style.LgCard} />
              </a>
            </div>
          </div>
          <div className={Style.LgFlex}>
            <ProgrammeLg className={Style.LgPadding} />
            <div className="absolute flex flex-col -space-y-[40%] -translate-y-5">
              <a href="/ondev/programs/arts-french" className="block">
                <ArtsFr className={Style.LgCard} />
              </a>

              <a href="/ondev/programs/arts-german" className="block">
                <ArtsDe className={Style.LgCard} />
              </a>
            </div>
          </div>
          <div className={Style.LgFlex}>
            <ProgrammeLg className={Style.LgPadding} />
            <div className="absolute flex flex-col -space-y-[40%] -translate-y-5">
              <a href="/ondev/programs/arts-japanese" className="block">
                <ArtJp className={Style.LgCard} />
              </a>

              <a href="/ondev/programs/arts-espanol" className="block">
                <ArtsEs className={Style.LgCard} />
              </a>
            </div>
          </div>
          <div className={Style.LgFlex}>
            <ProgrammeLg className={Style.LgPadding} />
            <div className="absolute flex flex-col -space-y-[40%] -translate-y-5">
              <a href="/ondev/programs/arts-chinese" className="block">
                <ArtsCn className={Style.LgCard} />
              </a>
              <a href="/ondev/programs/arts-korean" className="block">
                <ArtsKr className={Style.LgCard} />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="block md:hidden">
        <div className=" fade-in-scroll w-[56vw] overflow-clip absolute z-67 -space-y-[40%] flex flex-col justify-center items-center left-0 translate-y-[11%]">
          <SciMathSm className="w-5/4 hover:scale-110 duration-400" />
          <ArtsFrSm className="w-5/4 hover:scale-110 duration-400" />
          <ArtsJpSm className="w-5/4 hover:scale-110 duration-400" />
          <ArtsCnSm className="w-5/4 hover:scale-110 duration-400" />
        </div>
        <div className=" fade-in-scroll w-[56vw] overflow-clip absolute z-67 -space-y-[40%] flex flex-col justify-center items-center right-0  translate-y-[15%]">
          <ArtsMathSm className="w-5/4 hover:scale-110 duration-400" />
          <ArtsDeSm className="w-5/4 hover:scale-110 duration-400" />
          <ArtsEsSm className="w-5/4 hover:scale-110 duration-400" />
          <ArtsKrSm className="w-5/4 hover:scale-110 duration-400" />
        </div>
        <div className=" w-full ">
          <ProgrammeSm className=" left-0  w-full" />
        </div>
      </div>
    </section>
  );
};

export default ProgrammeSection;
