"use client";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
const Box = ({
  img,
  head,
  desc,
  price,
  item,
}: {
  img: string;
  head: string;
  desc: string;
  price: string;
  item: number;
}) => {
  const params = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  function setPage() {
    const sp = new URLSearchParams(Array.from(params.entries()));
    sp.set("item", String(item));
    const search = sp.toString();
    router.push(`${pathname}${search ? `?${search}` : ""}`);
  }
  return (
    <div
      onClick={setPage}
      className="flex flex-col rounded-[20px] overflow-hidden w-[65vw] md:w-[20vw] md:max-w-auto shrink-0 aspect-10/11 md:aspect-auto max-h-[400px] hover:scale-105 cursor-pointer duration-400 "
    >
      <img src={img} className="min-h-1/2  object-cover" />
      <div className="bg-linear-to-t from-[#0B1855] p-[5%]  to-[#042284] w-full h-[55%]">
        <div className="flex flex-col justify-between h-full">
          <div className="flex flex-col w-full">
            <p className=" text-white font-noto-sans-thai text-lg md:text-2xl font-semibold">
              {head}
            </p>
            <p className=" text-white font-noto-sans-thai text-xs md:text-sm opacity-72 pb-[5%]">
              {desc}
            </p>
          </div>
          <div className="opacity-73 bg-white h-px w-full"></div>
          <p className="bg-linear-to-t from-[#E5C675]  to-[#F3E09D] bg-clip-text text-transparent font-noto-sans-thai text-xl md:text-3xl font-extrabold text-end *:">
            ฿{price}
          </p>
        </div>
      </div>
    </div>
  );
};
export default Box;
