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
      className="flex flex-col z-67 bg-[linear-gradient(103deg,#0B1955_0%,rgba(4,34,132,0.6)_57.23%)]
  backdrop-blur-[3.5px] rounded-[15px] mt-5 p-[5%] md:p-[2%] w-[80%] md:w-[50%]"
    >
      <div className="flex flex-row w-auto">
        <img
          src={img}
          className="rounded-[10px] w-1/5 lg:wxx-1/6 md:w-1/4 lg:max-w-[500px] lg:max-h-[500px] aspect-square object-cover"
        />
        <div className="ml-3 -space-y-1 flex flex-col justify-start items-start space-y-0.5">
          <p className="text-[#F3E19E] font-bold text-2xl sm:text-3xl">
            {name}
          </p>
          <div className="flex flex-col justify-end -space-y-1">
            <p className="text-[#F3E19E] font-light text-md sm:text-lg md:text-lg">
              เตรียมอุดมฯ {gen}
            </p>
            <p className="text-[#F3E19E] font-light text-md sm:text-lg">
              {ig}
            </p>
          </div>
        </div>
      </div>
      <p className="text-sm font-bai-jamjuree pb-2 pt-3  *:text-white text-white text-shadow-[0_1.5px_1px_rgba(0,0,0,0.25)]">
        {text}
      </p>
    </div>
  );
};
export default ReviewBox;
