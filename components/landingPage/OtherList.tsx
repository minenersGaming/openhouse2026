import Link from "next/link";
const OtherList = ({ text, href }: { text: string; href: string }) => {
  return (
    <Link
      href={href}
      className="drop-shadow-md/30 z-667 transition-all hover:scale-105 flex items-center bg-linear-to-t bg-[linear-gradient(180deg,#F3E09D_-28.17%,#477BCA_47.34%,#3450B0_100%),linear-gradient(180deg,#6EAFE8_-6.54%,#477BCA_42.32%,#3450B0_106.26%),linear-gradient(180deg,#499FED_-42.58%,#457BCA_100%)] w-[80vw] md:w-[180px] lg:w-[260px] xl:min-w-[310px] xl:w-[23vw] p-2 rounded-full"
    >
      <p className="font-semibold ml-2 text-white text-xl md:text-[16px] lg:text-2xl xl:text-3xl text-shadow-md/20">
        {text}
      </p>
    </Link>
  );
};
export default OtherList;
