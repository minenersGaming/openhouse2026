import BackIcon from "@/vector/InfoPage/BackIcon";
import MemberIcon from "@/vector/InfoPage/MemberIcon";
import StarBar from "@/vector/InfoPage/StarBar";
import TopCurtain from "@/vector/InfoPage/TopCurtain";
import Chandelier from "@/vector/InfoPage/Chandelier";
const SampleImg =
  "https://www.ondemand.in.th/wp-content/uploads/2020/07/%E0%B8%9F%E0%B8%B4%E0%B8%AA%E0%B8%B4%E0%B8%81%E0%B8%AA%E0%B9%8C_%E0%B8%A1%E0%B8%9B%E0%B8%A5%E0%B8%B2%E0%B8%A2-2.jpg";
const ClubsInfo = () => {
  return (
    <div className="h-720 [background:linear-gradient(180deg,#0B1956_0%,#042284_35%,#467BCA_77.37%,#F4F2C4_100%)]">
      <TopCurtain className="w-full absolute " />
      <div className="flex flex-col items-center space-y-3 ">
        <a className="flex flex-row items-center mt-25 hover:scale-105">
          <BackIcon className="w-5 mr-1 " />
          <p className="text-[#F3ECB7]">ย้อนกลับ</p>
        </a>
        <p className="text-[#F3ECB7] font-bold text-4xl text-center px-4 mt-2">
          ชมรมคนรักมัตจะลัตเต
        </p>
        <div className="flex flex-row items-center space-x-3">
          <div className="flex flex-row items-center space-x-3">
            <MemberIcon className="w-12" />
            <div className="flex flex-col justify-center items-center">
              <p className="font-semibold text-[#F3ECB7]">สมาชิก</p>
              <p className="text-[#F3ECB7] text-4xl font-bold">67</p>
            </div>
          </div>
          <div className="h-16 rounded-full bg-[#F3E29E] w-[4px] "></div>
          <div className="flex flex-col ">
            <p className="text-[#F3ECB7] font-light">IG: ITNeedSleep</p>
            <p className="text-[#F3ECB7] font-light">FB: ITNeedSleep</p>
            <p className="text-[#F3ECB7] font-light">อื่น ๆ : ITNeedSleep</p>
          </div>
        </div>
        <div className="m-5 w-[65%] flex flex-row items-center justify-center space-x-2">
          <div className="bg-[#F3E3A1] h-[3px] rounded-full w-full"></div>
          <StarBar className="w-[55px] " />
          <div className="bg-[#F3E3A1] h-[3px] rounded-full w-full"></div>
        </div>
      </div>
      <div className="flex flex-row justify-center">
        <div className="flex flex-row justify-center">
          <div className="flex flex-col justify-center">
            <div className="flex flex-col justify-center items-end">
              <p className="font-bold text-2xl bg-linear-to-r from-[#F4F2C4] to-[#F3E19D] bg-clip-text text-transparent">
                ชมรมนี้
              </p>
              <p className="font-bold text-2xl bg-linear-to-r from-[#F4F2C4] to-[#F3E19D] bg-clip-text text-transparent">
                ทำอะไร
              </p>
            </div>
            <Chandelier className="w-[20vw]" />
          </div>
          <div className="flex flex-col ">
            <img
              src={SampleImg}
              className="rounded-[6px] object-cover w-[50vw] aspect-8/5 ml-5"
            />
            <p className="text-[#F4F2C4B2] font-light text-sm">
              ไก่ไข่ควายฆ่างูจับฉันชู ฌ หญิง
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ClubsInfo;
