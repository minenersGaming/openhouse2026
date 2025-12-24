import ClubsCard from "@/components/ClubsCard";
const EXAMPLE = { text: "ชมร" };

const Clubs = () => {
  return (
    <div className="w-full h-720 bg-linear-to-t from-[#042284] via-[#3450B0] to-[#457BCA]">
      <div className="px-20 py-30 flex flex-col">
        <p className="text-5xl font-bold bg-linear-to-r from-[#F3E09D] to-[#FDFAE0] bg-clip-text text-transparent w-full text-center text-shadow-xl">
          ชมรม
        </p>
      </div>
      <div className="flex flex-col lg:space-y-2">
        <ClubsCard text={EXAMPLE.text} />
      </div>
    </div>
  );
};
export default Clubs;
