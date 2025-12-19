import Image from "next/image";
import TriamudomOpenhouse26 from "@/vector/TriamudomOpenhouse26";
import TriamudomOpenhouse26Sm from "@/vector/TriamudomOpenhouse26Sm";
import LandingBackground from "@/vector/LandingBackground";
import Countdown from "@/components/countdown";

const Style = {
  Radial:
    "bg-[radial-gradient(122.77%_76.67%_at_50%_79.6%,_#F4F2C3_17.02%,_#457BCA_62.05%,_#042284_100%)]",
};

const Home = () => {
  return (
    <section
      className={`${Style.Radial} h-auto w-full relative overflow-hidden -z-20`}
    >
      <div className="absolute top-[18%] lg:top-[15%] -translate-y-[15%] left-1/2 -translate-x-1/2 ">
        <TriamudomOpenhouse26 className="w-[70vw] lg:w-[65vw] hidden sm:block" />
        <TriamudomOpenhouse26Sm className="w-[85vw] block sm:hidden" />
      </div>
      <div className="relative -z-10">
        {/* THIS WON'T WORK  <LandingBackground className="hidden sm:block min-w-full min-h-[70vh] bottom-0 object-cover" />*/}
        <img
          className="hidden sm:block min-w-full min-h-[70vh] bottom-0 object-cover"
          src="/LandingBg.svg"
        />
        {/* <LandingBackground className="hidden sm:block min-w-full min-h-[70vh] bottom-0 object-cover" /> */}
        <img
          className="block sm:hidden min-w-full min-h-[50vh] bottom-0 object-cover"
          src="/LandingBgSm.svg"
        />
      </div>
      <div className=" bottom-[5%] lg:-bottom-1/5 lg:top-1/2 left-1/2 -translate-x-1/2 absolute flex flex-col items-center justify-center space-y-5 z-40">
        <div className="hover:scale-105 rounded-full py-2 lg:py-2 px-8 bg-linear-to-r from-[#467BCA]/87 via-[#354FB0]/87 to-[#042284]/87 backdrop-blur-[0.5px]">
          <p className="uppercase bg-radial from-[#F4F2C3] to-[#F3E09D] bg-clip-text text-transparent font-bold text-center text-xl lg:text-2xl pt-0.5">
            9-10 January 2026
          </p>
        </div>
        <Countdown />
        <p className="text-white/95 text-xs lg:text-sm -translate-y-1">
          เว็บไซต์เปิดทำการในวันที่ 2 มกราคม 2569
        </p>
      </div>
    </section>
  );
};
export default Home;
