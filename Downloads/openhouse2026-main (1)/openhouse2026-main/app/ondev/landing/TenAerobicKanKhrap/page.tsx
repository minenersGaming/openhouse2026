import SciMath from "@/vector/LandingPage/Programme/CardLg/SciMath";
import ArtsFr from "@/vector/LandingPage/Programme/CardLg/ArtsFr";
import ArtsKr from "@/vector/LandingPage/Programme/CardLg/ArtsKr";
import ArtsCn from "@/vector/LandingPage/Programme/CardLg/ArtsCn";
import ArtJp from "@/vector/LandingPage/Programme/CardLg/ArtJp";
import ArtsDe from "@/vector/LandingPage/Programme/CardLg/ArtsDe";
import ArtsEs from "@/vector/LandingPage/Programme/CardLg/ArtsEs";
import ArtsMath from "@/vector/LandingPage/Programme/CardLg/ArtsMath";
import ProgramsLgBg from "@/vector/LandingPage/Programme/ProgramsLgBg";
import ProgrammeLg from "@/vector/LandingPage/Programme/ProgrammeLg";
import P from "@/vector/directions/P";
const LgFlex = "-space-y-[35%] -translate-y-[11%]";
const Banner =
  "hover:scale-105 duration-400 cursor-pointer transition-all -translate-x-[16.1%] -translate-y-[150%] w-[22vw] ";
const HongChueatIT = () => {
  return (
    <>
      <div className="h-70 flex flex-col justify-center  bg-pink-400">
        <p className="text-9xl  flex flex-col justify-center font-bold w-full items-center text-white">
          รัก กช.
        </p>
      </div>
      <section
        id="program"
        className="hidden md:block relative w-full overflow-hidden bg-linear-to-t from-[#457BCA] via-[#3450B0] to-[#457BCA]"
      >
        {/*COPY FROM HERE**/}
        <div className="z-6969 absolute flex flex-col translate-y-[3vw]  w-full justify-center items-center">
          <p className="font-bold text-6xl lg:text-7xl bg-linear-to-t from-[#FBDE8C] to-[#F3F2CD] bg-clip-text text-transparent">
            สายการเรียน
          </p>
          <p className="font-medium text-md bg-linear-to-t from-[#FBDE8C] to-[#F3F2CD] bg-clip-text text-transparent">
            คลิกที่ธงเพื่อดูข้อมูลสายการเรียนที่สนใจ
          </p>
        </div>
        <div className="w-full flex flex-row justify-center">
          <div className="absolute border-0 flex flex-row justify-between items-center -translate-x-[1%] translate-y-[25%] -space-x-[6.9%] w-2/3 h-full">
            <div className="h-full">
              <ProgrammeLg className="h-3/4" />
              <div className={LgFlex}>
                <div>
                  <SciMath className={Banner} />
                </div>
                <div>
                  <ArtsMath className={Banner} />
                </div>
              </div>
            </div>
            <div className="h-full space-x-[5%]">
              <ProgrammeLg className="h-3/4" />
              <div className={LgFlex}>
                <div>
                  <ArtsFr className={Banner} />
                </div>
                <div>
                  <ArtsDe className={Banner} />
                </div>
              </div>
            </div>
            <div className="h-full space-x-[5%]">
              <ProgrammeLg className="h-3/4" />
              <div className={LgFlex}>
                <div>
                  <ArtJp className={Banner} />
                </div>
                <div>
                  <ArtsEs className={Banner} />
                </div>
              </div>
            </div>
            <div className="h-full space-x-[5%]">
              <ProgrammeLg className="h-3/4" />
              <div className={LgFlex}>
                <div>
                  <ArtsCn className={Banner} />
                </div>
                <div>
                  <ArtsKr className={Banner} />
                </div>
              </div>
            </div>
          </div>
          <ProgramsLgBg className="pointer-events-none w-full z-6767" />
        </div>
        {/*ends here**/}
      </section>
      <div className="h-70 flex flex-col justify-center  items-center bg-pink-400">
        <p className="text-9xl flex flex-col justify-center font-bold w-full items-center text-white">
          รัก กช.
        </p>
      </div>
    </>
  );
};
export default HongChueatIT;
