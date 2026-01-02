import ClubsCard from "@/components/clubPage/ClubsCard";
import SearchIcon from "@/vector/Contact/SearchIcon";
import CurvyLight from "@/vector/CurvyLight";
const EXAMPLE = {
  text: "นักเรียนที่ประจำในตึกเฉลิมพระเกียรติ 72 พรรษา บรมราชินีนาถ",
  img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQY-FVilyTDynNHsp1gBYCCjLI6zkYmy41Fyg&s",
};

const Clubs = () => {
  return (
    <div className="w-full h-[1000px] lg:h-[4500px] bg-linear-to-t from-[#042284] via-[#3450B0] to-[#457BCA] w-screen overflow-hidden">
      <div className="flex flex-col absolute left-0 w-full items-center justify-center  ">
        <div className="px-20 py-30 flex flex-col w-full  justify-center items-center">
          <p className="text-5xl font-bold bg-linear-to-r from-[#F3E09D] to-[#FDFAE0] bg-clip-text text-transparent w-full text-center text-shadow-xl">
            ชมรม
          </p>
          <div className="drop-shadow-xl bg-white px-5 h-10 w-80 md:w-120 lg:w-150 rounded-[20px] m-5 flex justify-start">
            <SearchIcon className="w-5" />
          </div>
        </div>
        <div className="w-full flex justify-center flex-col px-10 md:px-10 lg:px-20 py-5 items-center">
          <div className="flex flex-row flex-wrap justify-center space-x-5 space-y-5 max-w-250">
            {Array.from({ length: 67 }).map((_, i) => (
              <ClubsCard
                key={i}
                text={`ชมรม${EXAMPLE.text}`}
                img={EXAMPLE.img}
              />
            ))}
          </div>
        </div>
      </div>
      <CurvyLight className="min-h-720 h-full" />
    </div>
  );
};
export default Clubs;
