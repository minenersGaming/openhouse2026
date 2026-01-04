const ReviewBox = ({
  img,
  name,
  gen,
  ig,
  text,
}: {
  img: string;
  name: string;
  gen: string;
  ig: string;
  text: any;
}) => {
  return (
    <div
      className="flex flex-col  bg-[linear-gradient(103deg,#0B1955_0%,rgba(4,34,132,0.6)_57.23%)]
  backdrop-blur-[3.5px] rounded-[6px] mt-5 p-[5%] md:p-[2%] w-[80%] md:w-[50%]"
    >
      <div className="flex flex-row ">
        <img
          src={img}
          className="rounded-[10px] w-3/10 lg:w-1/6 lg:max-w-[500px] aspect-square object-cover"
        />
        <div className="ml-3 -space-y-1 flex flex-col justify-center items-start">
          <p className="text-[#F3E19E] font-bold text-2xl">{name}</p>
          <p className="text-[#F3E19E] font-light text-md">เตรียมอุดมฯ {gen}</p>
          <p className="text-[#F3E19E] font-light text-md">IG: {ig}</p>
        </div>
      </div>
      <p className="text-sm font-bai-jamjuree py-2 text-white text-shadow-[0_1.5px_1px_rgba(0,0,0,0.25)]">
        {text}
      </p>
    </div>
  );
};
export default ReviewBox;
