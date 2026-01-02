import OtherLg from "@/vector/LandingPage/Other/OtherLg";
import OtherList from "./OtherList";
import OtherSmBg from "@/vector/LandingPage/Other/OtherSmBg";
import OtherStatue from "@/vector/LandingPage/Other/OtherStatue";

const List = (
  <>
    <OtherList text="สินค้าที่ระลึก" href="/" />
    <OtherList text="การสอบเข้า ม.4" href="./admission" />
    <OtherList text="การเดินทางมาโรงเรียน" href="./directions" />
    <OtherList text="แผนผังซุ้มในงาน" href="/" />
    <OtherList text="ตารางการแสดง" href="/" />
    <OtherList text="ช่องทางการติดต่อ" href="/" />
  </>
);

const Style = { BigText: "font-bold text-6xl lg:text-8xl text-[#F3E09D]" };

const OtherSection = () => {
  return (
    <section className="relative w-full overflow-hidden bg-linear-to-t from-[#0B1855] via-[#042284] to-[#499FED]">
      <div className="hidden md:block w-full">
        <div className="flex z-6767 absolute items-center  flex-row w-full h-[85%] px-[5%] justify-between">
          <div className="flex flex-col space-y-2">
            <p className={Style.BigText}>ข้อมูล</p>
            <p className={Style.BigText}>เพิ่มเติม</p>
          </div>
          <div className="flex flex-col h-8/10 justify-center space-y-[6%]">
            {List}
          </div>
        </div>
        <OtherLg className="w-full relative" />
      </div>
      <div className="block md:hidden h-full w-full ">
        <div className="absolute flex flex-col w-full">
          <OtherStatue className="w-full translate-y-[10%] " />
          <div className="pt-[20%] flex flex-col space-y-[5%] items-center justify-center">
            {List}
          </div>
        </div>
        <OtherSmBg className="w-full " />
      </div>
    </section>
  );
};

export default OtherSection;
