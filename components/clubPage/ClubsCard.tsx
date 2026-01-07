import Link from "next/link";
import Image from "next/image";

const ClubsCard = ({
  id,
  text,
  img,
}: {
  id: string;
  text: string;
  img: string;
}) => {
  if (!img) {
    return null;
  }
  return (
    <Link
      href={`/ondev/clubs/${encodeURIComponent(id)}`} //remove the ondev later
      className={String(img) === "" ? "hidden" : "block"}
    >
      <div className="drop-shadow-xl hover:scale-105 transition-all duration-300 overflow-clip aspect-square w-50 max-h-50 rounded-[20px] flex flex-col cursor-pointer">
        <Image src={img} width={200} height={200} alt="Hello" className="h-2/3 object-cover pointer-events-none" />
        <div className="h-1/3 bg-linear-to-r from-[#3450B0] via-[#457BCA] to-[#F3E09D]">
          <p className="font-semibold text-white drop-shadow-xl py-2 px-3">
            {text}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ClubsCard;
