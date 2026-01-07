import ClubsLgPillar from "@/vector/LandingPage/Clubs/ClubsLgPillar";
import ClubsLgMoon from "@/vector/LandingPage/Clubs/ClubsLgMoon";
import ClubsLgComet from "@/vector/LandingPage/Clubs/ClubsLgComet";

import ClubsSmPillar from "@/vector/LandingPage/Clubs/ClubsSmPillar";
import ClubsSmMoon from "@/vector/LandingPage/Clubs/ClubsSmMoon";
import ClubsSmComet from "@/vector/LandingPage/Clubs/ClubsSmComet";

const ClubsSection = () => {
  return (
    <section
      id="clubs"
      className="w-full h-auto [background:radial-gradient(122.77%_76.67%_at_50%_79.6%,#F4F2C3_17.02%,#457BCA_62.05%,#042284_100%)]"
    >
      <div className="hidden md:block w-full h-auto overflow-hidden">
        <div className="relative z-6 w-full flex justify-center ">
          <ClubsLgComet className="absolute w-full" />
        </div>
        <a
          href="./clubs"
          target="_blank"
          className=" relative z-7 w-full h-full flex justify-center "
        >
          <ClubsLgMoon className="rounded-full duration-500 absolute w-[75%] translate-y-[7%] hover:translate-y-[5%] hover:scale-103 transition-all " />
        </a>

        <ClubsLgPillar className="w-full relative z-67 pointer-events-none" />

        <div className="relative  z-6969 w-full ">
          <div className="bg-transparent absolute z-6767 -translate-y-[73%] h-[20vw]  w-full "></div>
        </div>
      </div>

      <div className="block md:hidden w-full h-auto overflow-hidden">
        <div className="relative z-6 w-full flex justify-center ">
          <ClubsSmComet className="absolute w-full" />
        </div>
        <a
          href="./clubs"
          target="_blank"
          className="relative z-7 w-full h-full flex justify-center "
        >
          <ClubsSmMoon className="duration-500 absolute w-[140%] translate-y-[20%] hover:translate-y-[18%] hover:scale-103 transition-all " />
        </a>
        <ClubsSmPillar className="w-full relative z-67 pointer-events-none" />
        <div className="relative  z-6969 w-full ">
          <div className="bg-transparent absolute z-6767 -translate-y-[72%]  h-[80vw]   w-full "></div>
        </div>
      </div>
    </section>
  );
};
export default ClubsSection;
