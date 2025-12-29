import Hero from "@/components/landingPage/hero";
import ProgrammeSection from "@/components/landingPage/programmeSection";
import GiftedSection from "@/components/landingPage/GiftedSection";

const Home = () => {
  return (
    <>
      <div className="flex flex-col w-screen overflow-x-clip">
        <Hero />
        <ProgrammeSection />
        <GiftedSection />
      </div>
    </>
  );
};
export default Home;
