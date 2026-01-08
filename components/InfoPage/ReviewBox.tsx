import Image from "next/image";

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
  text: string;
}) => {
  return (
    <div
      className="flex flex-col z-67 bg-[linear-gradient(103deg,#0B1955_0%,rgba(4,34,132,0.6)_57.23%)]
  backdrop-blur-[3.5px] rounded-[15px] mt-5 p-[5%] md:p-[2%] w-[80%] md:w-[50%]"
    >
      <div className="flex flex-row w-auto">
        <Image
          src={img}
          alt={name}
          width={200}
          height={200}
          className="rounded-[10px] size-18 md:size-20 lg:size-22 aspect-square object-cover"
        />
        {/* w-1/5 md:w-1/4 min-w-[200px] min-h-[200px] lg:max-w-[200px]
        lg:max-h-[200px] */}
        <div className="ml-3 -space-y-1 flex flex-col justify-start items-start">
          <p className="text-[#F3E19E] font-bold text-2xl sm:text-3xl">
            {name}
          </p>
          <div className="flex flex-col justify-end -space-y-1">
            <p className="text-[#F3E19E] font-light text-md sm:text-lg md:text-lg">
              เตรียมอุดมฯ {gen}
            </p>
            <p className="text-[#F3E19E] font-light text-md sm:text-lg">{ig}</p>
          </div>
        </div>
      </div>
      <div
        dangerouslySetInnerHTML={{ __html: text }}
        className="text-sm font-bai-jamjuree pb-2 pt-3  *:text-white text-white text-shadow-[0_1.5px_1px_rgba(0,0,0,0.25)]"
      />
    </div>
  );
};
export default ReviewBox;
