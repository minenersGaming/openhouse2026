import Herodev from "@/components/landingPage/herodev";
import ProgrammeSection from "@/components/landingPage/programmeSection";
import GiftedSection from "@/components/landingPage/GiftedSection";
import OrgSection from "@/components/landingPage/OrgSection";
import ClubsSection from "@/components/landingPage/ClubsSection";
import OtherSection from "@/components/landingPage/OtherSection";
import ScrollObserver from "@/components/ScrollObserver";

const Home = () => {
  return (
    <>
      <ScrollObserver />
      <div className="flex flex-col w-screen overflow-x-clip">
        <div className="lg:-mt-[6rem]">
          <Herodev />
        </div>
        <ProgrammeSection />
        <GiftedSection />
        <OrgSection />
        <ClubsSection />
        <OtherSection />
      </div>
    </>
  );
};
export default Home;
