import GiftedSm from "@/vector/LandingPage/Gifted/GiftedSm";
import GiftedTextSm from "@/vector/LandingPage/Gifted/GiftedTextSm";
import GiftedMath from "@/vector/LandingPage/Gifted/Card/GiftedMath";

const GiftedSection = () => {
  return (
    <section className="bg-linear-to-t to-[#042284] via-[#3450B0] from-[#F3E09D]">
      <div className=" block md:hidden">
        <div className="absolute flex flex-col justify-center items-center w-full mt-10 sm:mt-12 mb-10 px-5">
          <GiftedTextSm className="w-[80vw]" />
          <p className="font-bold bg-linear-to-t from-[#FBDE8C] to-[#F3F2CD] bg-clip-text text-transparent text-sm  sm:text-xl">
            โครงการพัฒนาความสามารถพิเศษ
          </p>
        </div>
        <div className="absolute flex flex-col justify-center items-center w-full mt-10 sm:mt-12 mb-10 px-5">
          <GiftedMath className="w-20" />
          <GiftedMath className="w-20" />
        </div>
        <GiftedSm className=" w-full left-0 " />
      </div>
    </section>
  );
};
export default GiftedSection;
