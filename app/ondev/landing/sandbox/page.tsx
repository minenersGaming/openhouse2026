import Hero from "@/components/landingPage/hero";
import ProgrammeSection from "@/components/landingPage/programmeSection";
import GiftedSection from "@/components/landingPage/GiftedSection";
import OrgSection from "@/components/landingPage/OrgSection";

const Home = () => {
  return (
    <>
      <div className="flex flex-col w-screen overflow-x-clip">
        <GiftedSection />
        <ProgrammeSection />
      </div>
    </>
  );
};
export default Home;
