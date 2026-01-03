import Herodev from "@/components/landingPage/herodev";
import ProgrammeSection from "@/components/landingPage/programmeSection";
import GiftedSection from "@/components/landingPage/GiftedSection";
import OrgSection from "@/components/landingPage/OrgSection";
import OtherSection from "@/components/landingPage/OtherSection";
import ScrollObserver from "@/components/ScrollObserver";

const Home = () => {
  return (
    <>
      <ScrollObserver />
      <div className="flex flex-col w-screen overflow-x-clip">
        <Herodev />
        <ProgrammeSection />
        <GiftedSection />
        <OrgSection />
        <OtherSection />
      </div>
    </>
  );
};
export default Home;
