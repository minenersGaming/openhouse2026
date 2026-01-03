import BackIcon from "@/vector/InfoPage/BackIcon";
import MemberIcon from "@/vector/InfoPage/MemberIcon";
import StarBar from "@/vector/InfoPage/StarBar";
import TopCurtain from "@/vector/InfoPage/TopCurtain";
import Chandelier from "@/vector/InfoPage/Chandelier";
import InfoTemplate from "@/components/InfoPage/InfoTemplate";
import ReviewBox from "@/components/InfoPage/ReviewBox";

const SampleImg =
  "https://www.ondemand.in.th/wp-content/uploads/2020/07/%E0%B8%9F%E0%B8%B4%E0%B8%AA%E0%B8%B4%E0%B8%81%E0%B8%AA%E0%B9%8C_%E0%B8%A1%E0%B8%9B%E0%B8%A5%E0%B8%B2%E0%B8%A2-2.jpg";

const ClubsInfo = () => {
  return (
    <div className="items-center px-3 [background:linear-gradient(180deg,#0B1956_0%,#042284_35%,#467BCA_77.37%,#F4F2C4_100%)]">
      <div className="relative ">
        <TopCurtain className="w-full absolute " />
      </div>
      <div className="relative flex flex-col items-center space-y-3 z-67">
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

      <div className="flex flex-col items-center justify-center">
        <InfoTemplate
          type="clubs"
          item={0}
          img={SampleImg}
          imgDescription="TESTESTEST"
          text="TEXTEXTEXTEXT "
        />
        <InfoTemplate
          type="clubs"
          item={1}
          img={SampleImg}
          imgDescription="TESTESTEST"
          text="TEXTEXTEXTEXT "
        />
        <InfoTemplate
          type="clubs"
          item={2}
          img={SampleImg}
          imgDescription="TESTESTEST"
          text="TEXTEXTEXTEXT "
        />
      </div>

      <div className="w-full flex flex-col justify-center items-center mt-5">
        <div className=" w-[80%] flex flex-row items-center justify-center space-x-2">
          <div className="bg-[#F3E3A1] h-[3px] rounded-full w-full hidden md:block"></div>
          <p className="font-bold text-3xl w-full text-center bg-linear-to-r from-[#F4F2C4] to-[#F3E19D] bg-clip-text text-transparent">
            รีวิวจากรุ่นพี่
          </p>
          <div className="bg-[#F3E3A1] h-[3px] rounded-full w-full hidden md:block"></div>
        </div>
        <ReviewBox
          name="โอ"
          img={SampleImg}
          gen="88"
          ig="o.kochpn"
          text="TEST"
        />
        <ReviewBox
          name="โอ"
          img={SampleImg}
          gen="88"
          ig="o.kochpn"
          text="TEST"
        />
        <ReviewBox
          name="โอ"
          img={SampleImg}
          gen="88"
          ig="o.kochpn"
          text="TEST"
        />
      </div>
    </div>
  );
};
export default ClubsInfo;
