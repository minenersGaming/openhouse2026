import LeftPillar from "@/vector/LandingPage/Programme/LeftPillar";
import RightPillar from "@/vector/LandingPage/Programme/RightPillar";
import ProgrammeSm from "@/vector/LandingPage/Programme/ProgrammeSm";
import SciMath from "@/vector/LandingPage/Programme/Card/SciMath";
import ProgrammeLg from "@/vector/LandingPage/Programme/ProgrammeLg";
const Style = {
  LgCard: "w-4/3 hover:scale-110 duration-400",
  LgFlex:
    "flex flex-col justify-center items-center left-0 translate-x- z-67 -space-y-15",
  LgPadding: "w-[17vw] left-0",
};

const ProgrammeSection = () => {
  return (
    <section className="w-full overflow-clip bg-linear-to-t from-[#457BCA] via-[#3450B0] to-[#457BCA] h-auto">
      <div className="absolute flex flex-col  justify-center items-center w-full translate-y-12 sm:translate-y-30 md:translate-y-5 lg:translate-y-15 z-10 px-5">
        <p className="font-bold bg-linear-to-t from-[#FBDE8C] to-[#F3F2CD] bg-clip-text text-transparent text-5xl sm:text-7xl md:text-6xl lg:text-8xl">
          สายการเรียน
        </p>
        <p className="font-bold  bg-linear-to-t from-[#FBDE8C] to-[#F3F2CD] bg-clip-text text-transparent text-xs sm:text-xl md:text-md">
          คลิกที่ธงเพื่อดูข้อมูลสายการเรียนที่สนใจ
        </p>
      </div>

      <div className="hidden  md:flex w-full justify-center items-center">
        <div
          className={
            "mt-40 w-[70vw] absolute flex flex-row justify-between items-center"
          }
        >
          <div className={Style.LgFlex}>
            <SciMath className={Style.LgCard} />
            <SciMath className={Style.LgCard} />
          </div>
          <div className={Style.LgFlex}>
            <SciMath className={Style.LgCard} />
            <SciMath className={Style.LgCard} />
          </div>
          <div className={Style.LgFlex}>
            <SciMath className={Style.LgCard} />
            <SciMath className={Style.LgCard} />
          </div>
          <div className={Style.LgFlex}>
            <SciMath className={Style.LgCard} />
            <SciMath className={Style.LgCard} />
          </div>
        </div>
        <div className="relative flex items-center mt-50 flex-row space-x-2 justify-center w-full">
          <ProgrammeLg className={Style.LgPadding} />
          <ProgrammeLg className={Style.LgPadding} />
          <ProgrammeLg className={Style.LgPadding} />
          <ProgrammeLg className={Style.LgPadding} />
        </div>
      </div>

      <div className="block md:hidden">
        <div className="w-[56vw] overflow-clip absolute z-67 -space-y-20 sm:-space-y-40 md:-space-y-50 flex flex-col justify-center items-center left-0 translate-y-35 sm:translate-y-60 md:translate-y-90">
          <SciMath className="w-5/4 hover:scale-110 duration-400" />
          <SciMath className="w-5/4 hover:scale-110 duration-400" />
          <SciMath className="w-5/4 hover:scale-110 duration-400" />
          <SciMath className="w-5/4 hover:scale-110 duration-400" />
        </div>
        <div className=" w-[56vw] overflow-clip absolute z-67 -space-y-20 sm:-space-y-40 md:-space-y-50 flex flex-col justify-center items-center right-0 translate-y-42 sm:translate-y-76 md:translate-y-106">
          <SciMath className="w-5/4 hover:scale-110 duration-400" />
          <SciMath className="w-5/4 hover:scale-110 duration-400" />
          <SciMath className="w-5/4 hover:scale-110 duration-400" />
          <SciMath className="w-5/4 hover:scale-110 duration-400" />
        </div>
        <div>
          <ProgrammeSm className="relative left-0  w-full" />
        </div>
      </div>
    </section>
  );
};

export default ProgrammeSection;
