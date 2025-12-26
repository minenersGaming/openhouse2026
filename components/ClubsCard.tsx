const ClubsCard = ({ text, img }: { text: string; img: string }) => {
  return (
    <div className="drop-shadow-xl  hover:scale-105 transition-all duration-300 overflow-clip aspect-square w-50 lg:max-w-50 rounded-[20px] flex flex-col">
      <img src={img} className="h-2/3 object-cover" />
      <div className="h-1/3 bg-linear-to-r from-[#3450B0] via-[#457BCA] to-[#F3E09D] flex flex-col">
        <p className="font-semibold text-white drop-shadow-xl py-2 px-3">
          {text}
        </p>
      </div>
    </div>
  );
};
export default ClubsCard;
