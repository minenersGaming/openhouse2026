"use client";

import { useState } from "react";
import { Noto_Sans_Thai } from "next/font/google";
import Mdleft from "@/vector/preformance/Mdleft";
import Mdright from "@/vector/preformance/Mdright";
import Mdbottom from "@/vector/preformance/Mdbottom";
import Mdbeam from "@/vector/preformance/Mdbeam";
import SmUpper from "@/vector/preformance/SmUpper";
import SmBeam2 from "@/vector/preformance/SmBeam2";
import SmBottom from "@/vector/preformance/SmBottom";

const NotoSansThai = Noto_Sans_Thai({
  variable: "--font-noto-sans-thai",
  subsets: ["thai", "latin"],
});

const timeTable9 = [
  {
    timeStart: "10:05",
    timeEnd: "10:17",
    activity: "การแสดงของคณะคัลเลอร์การ์ด",
  },
  { timeStart: "10:17", timeEnd: "10:23", activity: "การแสดงคทากร" },
  {
    timeStart: "10:26",
    timeEnd: "10:33",
    activity: (
      <p>
        การเเสดงของผู้นำเชียร์ประจำ
        <br />
        โรงเรียนเตรียมอุดมศึกษา รุ่นที่ 42
      </p>
    ),
  },
  { timeStart: "10:40", timeEnd: "10:45", activity: "การแสดงเต้นโซรัน" },
  {
    timeStart: "10:50",
    timeEnd: "11:10",
    activity: (
      <p>
        The Eternal Garden Of Bliss - <br />
        สวนแห่งความสุขนิรันดร์
      </p>
    ),
  },
  {
    timeStart: "11:15",
    timeEnd: "11:33",
    activity: "Le Carrousel; the madman’s cirque",
  },
  {
    timeStart: "11:40",
    timeEnd: "12:05",
    activity: (
      <p>
        สัมภาษณ์ศิลป์ตะวันออก
        <br />
        (ศิลป์ญี่ปุ่น, ศิลป์จีน, ศิลป์เกาหลี)
      </p>
    ),
  },
  { timeStart: "12:30", timeEnd: "12:55", activity: "สัมภาษณ์ศิลป์-คำนวณ" },
  { timeStart: "13:02", timeEnd: "13:12", activity: "ระบำ Cumbia" },
  { timeStart: "13:17", timeEnd: "13:47", activity: "K-POP Random Dance" },
  {
    timeStart: "14:25",
    timeEnd: "14:50",
    activity: "petite fête du thé (little tea party)",
  },
  { timeStart: "15:00", timeEnd: "15:30", activity: "คอนเสิร์ตดนตรีสากล" },
  { timeStart: "15:40", timeEnd: "16:10", activity: "คอนเสิร์ตวงครู" },
];
const timeTable10 = [
  {
    timeStart: "09:10",
    timeEnd: "09:35",
    activity: "สัมภาษณ์ด้วยแทนโครงการพัฒนาความสามารถพิเศษ",
  },
  {
    timeStart: "09:40",
    timeEnd: "10:10",
    activity: "More Than Words",
  },
  {
    timeStart: "10:15",
    timeEnd: "10:40",
    activity: (
      <p>
        สัมภาษณ์ศิลป์ตะวันตก
        <br />
        (ศิลป์ฝรั่งเศส, ศิลป์เยอรมัน, ศิลป์สเปน)
      </p>
    ),
  },
  {
    timeStart: "10:45",
    timeEnd: "10:50",
    activity: "การแสดงเต้นโซรัน",
  },
  {
    timeStart: "10:55",
    timeEnd: "11:20",
    activity: "สัมภาษณ์วิทย์-คณิต",
  },
  {
    timeStart: "11:55",
    timeEnd: "12:10",
    activity: (
      <p>
        Flowers of The Mystical Garden
        <br />
        (หมู่ดอกไม้แห่งสวนพิศวง)
      </p>
    ),
  },
  {
    timeStart: "12:15",
    timeEnd: "12:35",
    activity: "K-POP Random Dance",
  },
  {
    timeStart: "12:40",
    timeEnd: "12:58",
    activity: "Le Carrousel; the madman's cirque",
  },
  {
    timeStart: "13:35",
    timeEnd: "14:35",
    activity: "คอนเสิร์ตดนตรีสากล",
  },
  {
    timeStart: "14:45",
    timeEnd: "15:25",
    activity: "คอนเสิร์ตวงดนตรีไทย",
  },
  {
    timeStart: "15:35",
    timeEnd: "16:00",
    activity: "คอนเสิร์ตวงครู",
  },
];

const css = {
  header1:
    " z-10 text-white font-noto-sans-thai font-medium " +
    " text-[24px] leading-[10px] sm:text-[30px] sm:leading-[15px] md:text-[34px] md:leading-[10px] lg:text-[38px] lg:leading-[10px] 2xl:leading-[10px] 2xl:text-[46.784px] ",
  header2:
    " z-10 text-white font-noto-sans-thai font-bold leading-normal " +
    " text-[40px] mb-3 sm:text-[55px] sm:mb-4 md:mb-5 md:text-[60px] md:mb-7 lg:text-[70px] lg:mb-8 2xl:text-[87.958px] 2xl:mb-10 ",
  ButtonText:
    " z-10 text-white font-noto-sans-thai font-bold [text-shadow:0_3.419px_5.699px_rgba(0,0,0,0.38)] " +
    " text-[21px] sm:text-[24px] md:text-[25px] lg:text-[39px] 2xl:text-[45.65px] ",
  ButtonAll:
    " w-[290px] h-[45px] rounded-[15px] sm:w-[330px] sm:h-[52px] sm:rounded-[18px] md:w-[340px] md:h-[55px] md:rounded-[20px] lg:w-[480px] lg:h-[80px] lg:rounded-[18.034px] 2xl:w-[574.023px] 2xl:h-[88.482px] 2xl:rounded-[18.034px] ",
  ButtonBox:
    " w-[145px] rounded-[15px] sm:w-[165px] sm:rounded-[18px] md:w-[170px] md:rounded-[20px] lg:w-[240px] lg:rounded-[18.034px] 2xl:w-[291px] 2xl:rounded-[18.034px] ",
  h1:
    " text-[#FDFCE5] font-noto-sans-thai font-bold leading-normal [text-shadow:0_3.164px_3.164px_rgba(0,0,0,0.25)]  " +
    " text-[28px] my-3 sm:text-[33px] sm:my-4 md:text-[35px] md:my-4 lg:text-[44.967px] lg:my-5 2xl:my-6  2xl:text-[54.967px] ",
  timeStart:
    "text-[#F4F2C4] text-right font-noto-sans-thai font-bold " +
    " text-[25px] leading-[23px] sm:text-[32px] sm:leading-[31px] md:text-[32px] md:leading-[31px] lg:text-[35.812px] lg:leading-[34.595px] 2xl:text-[45.812px] 2xl:leading-[44.595px] ",
  timeEnd:
    " text-[#F4F2C4] text-right font-noto-sans-thai font-medium " +
    " text-[18px] leading-[16px] sm:text-[20px] sm:leading-[19px] md:text-[20px] md:leading-[19px] lg:text-[23.203px] lg:leading-[22.454px] 2xl:text-[28.203px] 2xl:leading-[27.454px] ",
  ActivityBox:
    " rounded-lg  bg-[linear-gradient(180deg,_#042284_-6.54%,_#0B1855_100%)] shadow-[0_2.538px_2.538px_rgba(0,0,0,0.25)] flex items-center " +
    " w-[270px] px-4 py-3 sm:w-[380px] sm:px-5 sm:py-3 md:w-[400px] md:px-3 md:py-3.25 lg:px-8 lg:py-2 lg:w-[520.32px] 2xl:px-10 2xl:py-2.5 2xl:w-[710.32px] ",
  ActivityText:
    " text-[#F4F2C4] font-noto-sans-thai font-semibold flex flex-col " +
    " text-[17px] leading-[18px] sm:text-[21px] sm:leading-[23px] md:text-[22px] md:leading-[26px] lg:text-[26px] lg:leading-[30px] 2xl:text-[29.271px] 2xl:leading-[33.669px] ",
};
const container = {
  MdAll:
    " w-screen overflow-hidden relative bg-[linear-gradient(13deg,#042284_6.23%,#3450B0_45.79%,#457BCA_98.77%)] " +
    " h-[1600px] py-25 sm:h-[2000px] py-30 md:h-[1430px] md:py-30 lg:h-[1600px] lg:py-40 2xl:py-40 2xl:h-[2100px]  ",
  Box1: " flex flex-col " + " gap-4 md:gap-4 lg:gap-4 2xl:gap-6 ",
  Box2:
    " z-10 flex justify-center items-center " +
    " gap-4 md:gap-2.5 lg:gap-6 2xl:gap-7 ",
};

const PerformancePage = () => {
  const [date, setDate] = useState<"FRI 9 JAN" | "SAT 10 JAN">("FRI 9 JAN");

  return (
    <>
      <div className={container.MdAll}>
        <Mdleft className="hidden md:block absolute w-auto bottom-[5.6vw] left-0 md:h-[1300px] lg:h-[1470px] 2xl:h-[2000px]" />
        <Mdright className="hidden md:block absolute w-auto bottom-[5.6vw] right-0 md:h-[1300px] lg:h-[1450px] 2xl:h-[2020px]" />
        <Mdbeam className="hidden md:block absolute w-auto top-0 right-0 md:h-[1300px] lg:h-[1400px] 2xl:h-[1800px]" />
        <Mdbottom className=" hidden md:block absolute w-screen h-auto bottom-0 " />
        <SmUpper className=" md:hidden absolute h-auto w-[98%] top-[60px] sm:top-[70px] right-0" />
        <SmBottom className="md:hidden absolute bottom-0 left-0 h-auto w-full" />
        <SmBeam2 className="md:hidden absolute top-0 right-0 w-auto h-[95%]" />
        <div className=" flex flex-col items-center mx-auto">
          <p className={css.header1}>ตารางการแสดง</p>
          <p className={css.header2}>ลาน 70 ปีฯ</p>

          <div
            className={"z-10 relative mx-auto bg-[#0B1855]/30 cursor-pointer" + css.ButtonAll}
          >
            {/* Left date label */}
            <button
              onClick={() => setDate("FRI 9 JAN")}
              className={
                ` ${
                  date === "FRI 9 JAN"
                    ? "text-white opacity-0"
                    : "text-white opacity-60"
                } absolute cursor-pointer left-0 top-0 h-full flex items-center justify-center transition-opacity duration-300` +
                css.ButtonBox +
                css.ButtonText
              }
            >
              FRI 9 JAN
            </button>

            {/* Sliding toggle */}
            <div
              className={
                ` z-10 absolute top-0 left-0
                bg-[linear-gradient(265deg,_#E6C674_3.67%,_#C5A064_94.65%)]
                transition-transform duration-300
                flex items-center justify-center h-full
                ${
                  date === "SAT 10 JAN"
                    ? " translate-x-[145px] sm:translate-x-[165px] md:translate-x-[170px] lg:translate-x-[240px] 2xl:translate-x-[290px]"
                    : "translate-x-0"
                }
                ` + css.ButtonBox
              }
            >
              <p className={css.ButtonText}>{date}</p>
            </div>

            {/* Right date label */}
            <button
              onClick={() => setDate("SAT 10 JAN")}
              className={
                ` ${
                  date === "SAT 10 JAN"
                    ? "text-white opacity-0"
                    : "text-white opacity-60"
                } absolute cursor-pointer right-0 top-0 h-full flex items-center justify-center transition-opacity duration-300 ` +
                css.ButtonText +
                css.ButtonBox
              }
            >
              SAT 10 JAN
            </button>
          </div>
          <div className="relative min-h-[1000px] w-full">
            <div
              key="fri-9"
              className={`
                          absolute inset-0
                mx-auto flex flex-col items-center
                transition-all duration-300 ease-in
                transform
                ${
                  date === "FRI 9 JAN"
                    ? "translate-x-0 "
                    : "translate-x-10 opacity-0 pointer-events-none"
                }
              `}
            >
              <p className={css.h1}>FRI 9 JAN 2026</p>
              <div className={container.Box1}>
                {timeTable9.map((item, index) => (
                  <div key={index} className={container.Box2}>
                    <div className="flex flex-col gap-1 items-end">
                      <p className={css.timeStart}>{item.timeStart}</p>
                      <p className={css.timeEnd}>-{item.timeEnd}</p>
                    </div>
                    <div className={css.ActivityBox}>
                      <p className={css.ActivityText}>{item.activity}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div
              key="sat-10"
              className={`
                absolute inset-0
                mx-auto flex flex-col items-center
                transition-all duration-300 ease-in
                transform
                ${
                  date === "SAT 10 JAN"
                    ? "translate-x-0 "
                    : "-translate-x-10 opacity-0 pointer-events-none"
                }
              `}
            >
              <p className={css.h1}>SAT 10 JAN 2026</p>
              <div className={container.Box1}>
                {timeTable10.map((item, index) => (
                  <div key={index} className={container.Box2}>
                    <div className="flex flex-col gap-1 items-end">
                      <p className={css.timeStart}>{item.timeStart}</p>
                      <p className={css.timeEnd}>-{item.timeEnd}</p>
                    </div>
                    <div className={css.ActivityBox}>
                      <p className={css.ActivityText}>{item.activity}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default PerformancePage;