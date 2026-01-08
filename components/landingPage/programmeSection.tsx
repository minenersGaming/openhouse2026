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
import Bricks from "@/vector/LandingPage/Programme/Bricks";

import ProgrammeLg from "@/vector/LandingPage/Programme/ProgrammeLg";
import ProgrammeBigLg from "@/vector/LandingPage/Programme/ProgrammeBigLg";
import Link from "next/link";
const Style = {
  LgCard: "w-[25vw] hover:scale-105 transition-all duration-400",
  LgFlex:
    "flex flex-col justify-center items-center left-0 translate-x- z-6 -space-y-15 -space-xx-1 scale-100 xfade-in-scroll",
  LgPadding: "w-[17vw] left-0 -translate-y-10",
};

const ProgrammeSection = () => {
  return (
    <section
      id="programs"
      className=" relative w-screen overflow-hidden bg-linear-to-t from-[#457BCA] via-[#3450B0] to-[#457BCA] h-auto md:maxx-h-[1600px]"
    >
      <div className="md:block absolute left-0 z-67 hidden overflow-hidden h-full">
        <LeftPillar className="pointer-events-none" />
      </div>
      <div className="md:block absolute right-0 z-67 hidden overflow-hidden h-full">
        <RightPillar className=" pointer-events-none" />
      </div>
      <div className="h-full top-0 w-screen relative">
        <div className="hidden md:flex w-full items-center justify-center">
          <Bricks className=" absolute w-[70vw] translate-y-[70%] z-2" />
        </div>
      </div>
      <div className="hidden absolute min-w-full xlg:flex flex-row justify-center h-[105%]">
        <ProgrammeBigLg className="left-0 translate-x-1/2 min-w-[1500px] w-[70%]" />
      </div>

      <div className=" absolute md:relative flex flex-col justify-center items-center w-full mt-[10%] md:mt-[3%] z-677">
        <p className="text-center font-bold bg-linear-to-t from-[#FBDE8C] to-[#F3F2CD] bg-clip-text text-transparent text-[2rem] sm:text-[2rem] md:text-[3rem] lg:text-[5rem]">
          สายการเรียน
        </p>
        <p className="font-bold text-center bg-linear-to-t from-[#FBDE8C] to-[#F3F2CD] bg-clip-text text-transparent text-md sm:text-xl md:text-md">
          คลิกที่ธงเพื่อดูข้อมูลสายการเรียนที่สนใจ
        </p>
      </div>

      <div className="hidden overflow-hidden md:flex w-full justify-center items-center">
        <div
          className={
            "mt-15 w-[66vw] flex flex-row justify-between items-center"
          }
        >
          <div className={Style.LgFlex}>
            <ProgrammeLg className={Style.LgPadding} />
            <div className="absolute flex flex-col -space-y-[40%] -translate-y-10 -translate-x-[1.5%]">
              <Link href="/programs/sci-math" className="block">
                <SciMath className={Style.LgCard} />
              </Link>
              <Link href="/programs/arts-math" className="block">
                <ArtsMath className={Style.LgCard} />
              </Link>
            </div>
          </div>
          <div className={Style.LgFlex}>
            <ProgrammeLg className={Style.LgPadding} />
            <div className="absolute flex flex-col -space-y-[40%] translate-x-[1%] -translate-y-10">
              <Link href="/programs/arts-french" className="block">
                <ArtsFr className={Style.LgCard} />
              </Link>

              <Link href="/programs/arts-german" className="block">
                <ArtsDe className={Style.LgCard} />
              </Link>
            </div>
          </div>
          <div className={Style.LgFlex}>
            <ProgrammeLg className={Style.LgPadding} />
            <div className="absolute flex flex-col -space-y-[40%] -translate-y-10">
              <Link href="/programs/arts-japanese" className="block">
                <ArtJp className={Style.LgCard} />
              </Link>

              <Link href="/programs/arts-espanol" className="block">
                <ArtsEs className={Style.LgCard} />
              </Link>
            </div>
          </div>
          <div className={Style.LgFlex}>
            <ProgrammeLg className={Style.LgPadding} />
            <div className="absolute flex flex-col -space-y-[40%] -translate-x-[2.5%] -translate-y-10">
              <Link href="/programs/arts-chinese" className="block">
                <ArtsCn className={Style.LgCard} />
              </Link>
              <Link href="/programs/arts-korean" className="block">
                <ArtsKr className={Style.LgCard} />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="block md:hidden">
        <div className="-translate-x-[12%] fade-in-scroll w-[56vw] overflow-clip absolute z-67 -space-y-[40%] flex flex-col justify-center items-center left-0 translate-y-[11%]">
          <Link href="./programs/sci-math">
            <SciMathSm className="w-5/4 hover:scale-110 duration-400" />
          </Link>
          <Link href={"/programs/arts-french"}>
            <ArtsFrSm className="w-5/4 hover:scale-110 duration-400" />
          </Link>
          <Link href={"/programs/arts-japanese"}>
            <ArtsJpSm className="w-5/4 hover:scale-110 duration-400" />
          </Link>
          <Link href={"/programs/arts-chinese"}>
            <ArtsCnSm className="w-5/4 hover:scale-110 duration-400" />
          </Link>
        </div>
        <div className="-translate-x-[12%] fade-in-scroll w-[56vw] overflow-clip absolute z-67 -space-y-[40%] flex flex-col justify-center items-center right-0 translate-y-[15%]">
          <Link href={"/programs/arts-math"}>
            <ArtsMathSm className="w-5/4 hover:scale-110 duration-400" />
          </Link>
          <Link href={"/programs/arts-german"}>
            <ArtsDeSm className="w-5/4 hover:scale-110 duration-400" />
          </Link>
          <Link href={"/programs/arts-espanol"}>
            <ArtsEsSm className="w-5/4 hover:scale-110 duration-400" />
          </Link>
          <Link href={"/programs/arts-korean"}>
            <ArtsKrSm className="w-5/4 scale-110 duration-400" />
          </Link>
        </div>
        <div className=" w-full ">
          <ProgrammeSm className=" left-0 w-full" />
        </div>
      </div>
    </section>
  );
};

export default ProgrammeSection;
