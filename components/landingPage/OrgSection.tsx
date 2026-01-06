import OrgLg from "@/vector/LandingPage/Org/OrgLg";
import OrgSm from "@/vector/LandingPage/Org/OrgSm";
import TUCMCCard from "@/vector/LandingPage/Org/CardSm/TUCMCCard";
import TUSCCard from "@/vector/LandingPage/Org/CardSm/TUSCCard";
import AnusornCard from "@/vector/LandingPage/Org/CardSm/AnusornCard";
import AICCard from "@/vector/LandingPage/Org/CardSm/AICCard";
import TUNSOCard from "@/vector/LandingPage/Org/CardSm/TUNSOCard";
import TUPROCard from "@/vector/LandingPage/Org/CardSm/TUPROCard";
import TUCMCLg from "@/vector/LandingPage/Org/CardLg/TUCMCLg";
import TUSCLg from "@/vector/LandingPage/Org/CardLg/TUSCLg";
import AnusornLg from "@/vector/LandingPage/Org/CardLg/AnusornLg";
import AICLg from "@/vector/LandingPage/Org/CardLg/AICLg";
import TUNSOLg from "@/vector/LandingPage/Org/CardLg/TUNSOLg";
import TUPROLg from "@/vector/LandingPage/Org/CardLg/TUPROLg";

const OrgSection = () => {
  return (
    <section className="overflow-hidden bg-linear-to-t to-[#0B1855] via-[#042284] from-[#3450B0]">
      <div className="hidden md:block">
        <div className="absolute flex w-full flex-row justify-end">
          <div className="w-[80%] h-[170%] p-10  -translate-x-[2.75%] -space-x-32 -space-y-10 flex flex-row justify-between">
            <div
              className=" flex flex-col  -space-y-0
  [&>*:nth-child(odd)]:self-start
  [&>*:nth-child(even)]:self-end"
            >
              <a href="/ondev/organizations/TUSC" className="block">
                <TUSCLg className=" fade-in-scroll w-[25vw] hover:scale-105 cursor-pointer transition-all" />
              </a>
              <a href="/ondev/organizations/TUANUSORN" className="block">
                <AnusornLg className=" fade-in-scroll w-[25vw] hover:scale-105  cursor-pointer  transition-all" />
              </a>
            </div>
            <div className=" flex flex-col h-[140%] -space-y-8 mt-[20%] self-end">
              <a href="/ondev/organizations/TUCMC" className="block">
                <TUCMCLg className=" fade-in-scroll w-[25vw] hover:scale-105  cursor-pointer  transition-all" />
              </a>
              <a href="/ondev/organizations/AIC" className="block">
                <AICLg className=" fade-in-scroll w-[25vw] hover:scale-105  cursor-pointer  transition-all" />
              </a>
            </div>
            <div className="flex flex-col h-[140%] -space-y-10">
              <a href="/ondev/organizations/TUPRO" className="block">
                <TUPROLg className=" fade-in-scroll w-[25vw] hover:scale-105  cursor-pointer  transition-all" />
              </a>
              <a href="/ondev/organizations/TUNSO" className="block">
                <TUNSOLg className=" fade-in-scroll w-[25vw] hover:scale-105  cursor-pointer  transition-all" />
              </a>
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
            {/* <div className="h-[2px] w-5/7 m-4 rounded-full bg-linear-to-r from-[#F3F2CD] to-[#FBDE8C]"></div>
            <p className=" text-sm lg:text-xl w-3/5 bg-linear-to-r from-[#F3F2CD] via-[#FBDE8C] to-[#FBDE8C] bg-clip-text text-transparent">
              หน่วยงานนักเรียนที่รับผิดชอบงานต่าง ๆ ในโรงเรียน ประกอบด้วย
              คณะกรรมการงานกิจกรรมพัฒนาผู้เรียน (กช.) คณะกรรมการนักเรียน (กน.)
              นักเรียนผู้ช่วยงานประชาสัมพันธ์ (ปชส.) นักเรียนกลุ่ม AIC (กอ.)
              กลุ่มนักเรียนอาสาพยาบาลและความปลอดภัย และคณะกรรมการหนังสืออนุสรณ์ฯ
            </p> */}
          </div>
        </div>
        <OrgLg className="w-full top-0" />
      </div>
      <div className="block md:hidden">
        <div className="absolute flex flex-col w-full items-center justify-center py-10 px-5 space-y-3">
          <div className="flex flex-col items-center translate-y-[14%] ">
            <p className="font-bold text-6xl sm:text-6xl bg-linear-to-r from-[#F3F2CD] via-[#FBDE8C] to-[#FBDE8C] bg-clip-text text-transparent">
              หน่วยงาน
            </p>
            <p className="font-bold text-6xl sm:text-6xl bg-linear-to-r from-[#F3F2CD] via-[#FBDE8C] to-[#FBDE8C] bg-clip-text text-transparent">
              นักเรียน
            </p>
          </div>
          <div
            className="w-[90%] h-3/5 -space-y-15 flex flex-col
  [&>*:nth-child(odd)]:self-start
  [&>*:nth-child(even)]:self-end"
          >
            <TUCMCCard className=" fade-in-scroll w-[60vw] hover:scale-105 duration-400  transition-all cursor-pointer " />
            <TUSCCard className=" fade-in-scroll w-[60vw] hover:scale-105  duration-400 transition-all cursor-pointer " />
            <AnusornCard className=" fade-in-scroll w-[60vw] hover:scale-105  duration-400 transition-all cursor-pointer " />
            <AICCard className=" fade-in-scroll w-[60vw] hover:scale-105  duration-400 transition-all cursor-pointer " />
            <TUNSOCard className=" fade-in-scroll w-[60vw] hover:scale-105  duration-400 transition-all cursor-pointer " />
            <TUPROCard className=" fade-in-scroll w-[60vw] hover:scale-105  duration-400 transition-all cursor-pointer " />
          </div>
          <div className="flex items-center justify-center w-full">
            <p className="font-medium text-center text-md sm:text-xl w-39/40 sm:w-2/3  bg-linear-to-r from-[#F3F2CD] via-[#FBDE8C] to-[#FBDE8C] bg-clip-text text-transparent">
              กลุ่มหรือองค์กรที่จัดตั้งขึ้นภายในสถานศึกษา
              โดยมีนักเรียนเป็นสมาชิกหลัก ทำหน้าที่ช่วยเหลือ สนับสนุน
              และมีส่วนร่วมในการบริหารจัดการกิจกรรมต่าง ๆ ของโรงเรียน
              ภายใต้การดูแลของครูหรือผู้บริหาร
            </p>
          </div>
        </div>
        <OrgSm className="w-full" />
      </div>
    </section>
  );
};

export default OrgSection;
