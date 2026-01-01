import OrgLg from "@/vector/LandingPage/Org/OrgLg";
import OrgSm from "@/vector/LandingPage/Org/OrgSm";
import TUCMCCard from "@/vector/LandingPage/Org/Card/TUCMCCard";
import TUSCCard from "@/vector/LandingPage/Org/Card/TUSCCard";
import AnusornCard from "@/vector/LandingPage/Org/Card/AnusornCard";
import AICCard from "@/vector/LandingPage/Org/Card/AICCard";
import TUNSOCard from "@/vector/LandingPage/Org/Card/TUNSOCard";
import TUPROCard from "@/vector/LandingPage/Org/Card/TUPROCard";

const OrgSection = () => {
  return (
    <section className="bg-linear-to-t to-[#0B1855] via-[#042284] from-[#3450B0]">
      <div className="hidden md:block">
        <div className="absolute flex w-full flex-row justify-end">
          <div className="w-[80%] h-[170%] p-10 -space-y-10 flex flex-row justify-between">
            <div
              className=" flex flex-col space-y-10 
  [&>*:nth-child(odd)]:self-start
  [&>*:nth-child(even)]:self-end"
            >
              <TUSCCard className="w-[20vw]" />
              <AnusornCard className="w-[20vw]" />
            </div>
            <div className=" flex flex-col self-end">
              <TUCMCCard className="w-[20vw]" />
              <AICCard className="w-[20vw]" />
            </div>
            <div>
              <TUPROCard className="w-[20vw]" />
              <TUNSOCard className="w-[20vw]" />
            </div>
          </div>
          <div className="w-1/3 flex flex-col items-center justify-center py-15">
            <div className="flex flex-col items-end">
              <p className="font-bold text-5xl lg:text-7xl bg-linear-to-r from-[#F3F2CD] via-[#FBDE8C] to-[#FBDE8C] bg-clip-text text-transparent">
                หน่วยงาน
              </p>
              <p className="font-bold text-5xl lg:text-7xl bg-linear-to-r from-[#F3F2CD] via-[#FBDE8C] to-[#FBDE8C] bg-clip-text text-transparent">
                นักเรียน
              </p>
            </div>
            <div className="h-[2px] w-5/7 m-4 rounded-full bg-linear-to-r from-[#F3F2CD] to-[#FBDE8C]"></div>
            <p className=" text-sm lg:text-xl w-3/5 bg-linear-to-r from-[#F3F2CD] via-[#FBDE8C] to-[#FBDE8C] bg-clip-text text-transparent">
              อยากนอนอยากนอนอยากนอนอยากนอนอยากนอนอยากนอนอยากนอนอยากนอนอยากนอนอยากนอนอยากนอนอยากนอนอยากนอนอยากนอนอยากนอนอยากนอนอยากนอนอยากนอนอยากนอนอยากนอนอยากนอนอยากนอนอยากนอนอยากนอนอยากนอนอยากนอนอยากนอนอยากนอนอยากนอน
            </p>
          </div>
        </div>
        <OrgLg className="w-full" />
      </div>
      <div className="block md:hidden">
        <div className="absolute flex flex-col w-full items-center justify-center py-10 px-5 space-y-5">
          <div className="flex flex-col items-center">
            <p className="font-bold text-5xl bg-linear-to-r from-[#F3F2CD] via-[#FBDE8C] to-[#FBDE8C] bg-clip-text text-transparent">
              หน่วยงาน
            </p>
            <p className="font-bold text-5xl bg-linear-to-r from-[#F3F2CD] via-[#FBDE8C] to-[#FBDE8C] bg-clip-text text-transparent">
              นักเรียน
            </p>
          </div>
          <div
            className="w-[80%] h-3/5 -space-y-10 flex flex-col
  [&>*:nth-child(odd)]:self-start
  [&>*:nth-child(even)]:self-end"
          >
            <TUCMCCard className="w-[50vw]" />
            <TUSCCard className="w-[50vw]" />
            <AnusornCard className="w-[50vw]" />
            <AICCard className="w-[50vw]" />
            <TUNSOCard className="w-[50vw]" />
            <TUPROCard className="w-[50vw]" />
          </div>
          <div className="flex items-center justify-center w-full">
            <p className="font-medium text-center text-lg w-3/5 bg-linear-to-r from-[#F3F2CD] via-[#FBDE8C] to-[#FBDE8C] bg-clip-text text-transparent">
              อยากนอนอยากนอนอยากนอนอยากนอนอยากนอนอยากนอนอยากนอนอยากนอนอยากนอนอยากนอนอยากนอนอยากนอนอยากนอนอยากนอนอยากนอนอยากนอนอยากนอนอยากนอนอยากนอนอยากนอนอยากนอนอยากนอนอยากนอนอยากนอนอยากนอนอยากนอนอยากนอนอยากนอนอยากนอน
            </p>
          </div>
        </div>
        <OrgSm className="w-full" />
      </div>
    </section>
  );
};

export default OrgSection;
