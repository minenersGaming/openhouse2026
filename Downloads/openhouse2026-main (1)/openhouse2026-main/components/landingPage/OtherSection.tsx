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

const Style = {
  BigText: "font-bold text-6xl lg:text-8xl text-[#F3E09D]",
  Text: "w-full text-center font-bold text-5xl sm:text-7xl text-[#F3E09D]",
};

const OtherSection = () => {
  return (
    <section
      id="others"
      className="relative w-full overflow-hidden bg-linear-to-t from-[#3450B0] to-[#042284]"
    >
      <div className="hidden md:block w-full">
        <div className="flex z-6767 absolute items-center  flex-row w-full h-[85%] px-[5%] justify-between">
          <div className="flex flex-col space-y-2">
            <p className={Style.BigText}>ข้อมูล</p>
            <p className={Style.BigText}>เพิ่มเติม</p>
          </div>
          <div className="translate-y-[5%] flex flex-col h-8/10 justify-center space-y-[6%] fade-in-scroll">
            {List}
          </div>
        </div>
        <OtherLg className="w-full relative" />
      </div>
      <div className="block md:hidden h-full w-full z-6767">
        <div className="absolute w-full translate-y-[15vw] z-67">
          <p className={Style.Text}>ข้อมูลเพิ่มเติม</p>
        </div>
        <div className="absolute flex flex-col w-full">
          <OtherStatue className="w-full translate-y-[4%] " />
          <div className="pt-[10%] flex flex-col space-y-[5%] items-center justify-center">
            {List}
          </div>
        </div>
        <OtherSmBg className="w-full" />
      </div>
    </section>
  );
};

export default OtherSection;
