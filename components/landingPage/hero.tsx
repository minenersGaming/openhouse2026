import Countdown from "./countdown";
import TriamudomOpenHouse26Sm from "@/vector/LandingPage/TriamudomOpenhouse26Sm";
import TriamudomOpenhouse2026 from "@/vector/LandingPage/TriamudomOpenhouse26";
import Button from "./Button";
// import StaffButton from "./StaffButton";

const Style = {
  Radial:
    "bg-[radial-gradient(122.77%_76.67%_at_50%_79.6%,_#F4F2C3_17.02%,_#457BCA_62.05%,_#042284_100%)]",
};

const Hero = () => {
  return (
    <section className={`${Style.Radial} w-full relative overflow-hidden`}>
      <div className="absolute top-[18%] lg:top-[15%] -translate-y-[15%] left-1/2 -translate-x-1/2 z-10">
        <TriamudomOpenhouse2026 className="w-[70vw] lg:w-[65vw] hidden sm:block" />
        <TriamudomOpenHouse26Sm className="w-[85vw] block sm:hidden" />
      </div>
      <div className="relative z-0">
        <img
          className="hidden sm:block min-w-full min-h-[70vh] bottom-0 object-cover "
          src="/LandingBg.svg"
        />
        <img
          className="block sm:hidden min-w-full min-h-[50vh] bottom-0 object-cover"
          src="/LandingBgSm.svg"
        />
      </div>
      <div className="absolute bottom-[5%] lg:-bottom-1/5 lg:top-1/3 left-1/2 -translate-x-1/2 lg:translate-y-[2%] flex flex-col items-center justify-center space-y-5 z-20">
        <div className="relative flex flex-col items-center justify-center space-y-5">
          <Button />
          <div className=" rounded-full py-2 lg:py-2 px-8 bg-linear-to-r from-[#467BCA]/87 via-[#354FB0]/87 to-[#042284]/87 backdrop-blur-[0.5px]">
            <p className="uppercase bg-radial from-[#F4F2C3] to-[#F3E09D] bg-clip-text text-transparent font-bold text-center text-xl lg:text-2xl pt-0.5">
              9-10 January 2026
            </p>
          </div>
          <Countdown />
        </div>
      </div>
      {/* <StaffButton /> */}
    </section>
  );
};

export default Hero;
