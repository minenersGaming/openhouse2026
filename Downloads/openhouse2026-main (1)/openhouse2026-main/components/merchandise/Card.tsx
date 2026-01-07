import { useSearchParams, useRouter, usePathname } from "next/navigation";
const Card = ({
  img,
  text,
  item,
}: {
  img: string;
  text: string;
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
      className="rounded-md md:rounded-[20px] overflow-hidden aspect-square cursor-pointer shrink-0 flex flex-col w-[21vw] md:w-[12vw]  hover:scale-105 duration-400 transition-all"
    >
      <img src={img} className="h-60/100 md:[30vw] object-cover " />
      <div className="h-full bg-linear-to-t from-[#0B1855] to-[#042284]  ">
        <p className="text-white font-semibold font-noto-sans-thai p-1 md:p-2 text-[8px] sm:text-[10px] md:text-md lg:text-[15px]">
          {text}
        </p>
      </div>
    </div>
  );
};

export default Card;
