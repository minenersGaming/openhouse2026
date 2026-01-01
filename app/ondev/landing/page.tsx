import Herodev from "@/components/landingPage/herodev";
import ProgrammeSection from "@/components/landingPage/programmeSection";
import GiftedSection from "@/components/landingPage/GiftedSection";
import OrgSection from "@/components/landingPage/OrgSection";

const Home = () => {
  return (
    <>
      <div className="flex flex-col w-screen overflow-x-clip">
        <Herodev />
        <ProgrammeSection />
        <GiftedSection />
        <OrgSection />{" "}
      </div>
    </>
  );
};
export default Home;
