import Hero from "@/components/landingPage/hero";
import Herodev from "@/components/landingPage/herodev";
import ProgrammeSection from "@/components/landingPage/programmeSection";
import GiftedSection from "@/components/landingPage/GiftedSection";

const Home = () => {
  return (
    <>
      <div className="flex flex-col w-full overflow-x-clip ">
        <Herodev />
      </div>
    </>
  );
};
export default Home;
