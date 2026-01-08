"use client";

import { useState } from "react";
import { Noto_Sans_Thai } from "next/font/google";
import Mdleft from "@/vector/preformance/Mdleft";
import Mdright from "@/vector/preformance/Mdright";
import Mdbottom from "@/vector/preformance/Mdbottom";
import Mdbeam from "@/vector/preformance/Mdbeam";
import SmBeam2 from "@/vector/preformance/SmBeam2";
import SmBottom from "@/vector/preformance/SmBottom";
import Mdcurtain from "@/vector/auditory/Mdcurtain";
import BottomCastle from "@/vector/auditory/BottomCastle";
import Image from "next/image";
import SmCurtain from "@/vector/auditory/SmCurtain";
import ScrollObserver from "@/components/ScrollObserver";

const NotoSansThai = Noto_Sans_Thai({
  variable: "--font-noto-sans-thai",
  subsets: ["thai", "latin"],
});

const timeTable9 = [
  {
    time: "9:00-10:40",
    overall: "100 นาที",
    name: (
      <p>
        Oh! My Orb The Musical
        <br />
        ลูกแก้วอลหม่านเรือสำราญอลเวง
      </p>
    ),
    caption: "ชมรมนิเทศศิลป",
    img: "/assets/images/auditory/นิเทศศิลป_Tusp.jpg",
  },
  {
    time: "10.50-11.40",
    overall: "50 นาที",
    name: "ภาพยนตร์สั้น",
    caption: "ชมรมภาพยนตร์สั้นและสื่อโทรทัศน์",
    img: "/assets/images/auditory/ภาพยนตร์สั้นและสื่อโทรทัศน์.jpg",
  },
  {
    time: "12.10-12.40",
    overall: "30 นาที",
    name: "My O'Clock",
    caption: "ชมรมสันทนากร",
    img: "/assets/images/auditory/tuent.jpg",
  },
  {
    time: "12.45-13.20",
    overall: "35 นาที",
    name: "ไกล",
    caption: "ชมรมสังคมศึกษา (หนังสังคม) ฝ่าย Documentary Maker",
    img: "/assets/images/auditory/ไกล.jpg",
  },
  {
    time: "13.20-14.05",
    overall: "45 นาที",
    name: "More than words",
    caption: "ชมรมดุริยางค์",
    img: "/assets/images/auditory/ดุริยางค์.jpg",
  },
  {
    time: "14.10-15.10",
    overall: "60 นาที",
    name: "Dearest Dreamers",
    caption: "ชมรมภาษาอังกฤษ (ขับร้องประสานเสียง)",
    img: "/assets/images/auditory/epcho.jpg",
  },
  {
    time: "15.15-16.35",
    overall: "80 นาที",
    name: (
      <p>
        In the Name of
        <br />
        Desires the Musical
      </p>
    ),
    caption: "ชมรมภาษาอังกฤษ (English Drama)",
    img: "/assets/images/auditory/engma.jpg",
  },
];
const timeTable10 = [
  {
    time: "9.00-9.35",
    overall: "35 นาที",
    name: "ไกล",
    caption: "ชมรมสังคมศึกษา (หนังสังคม) ฝ่าย Documentary Maker",
    img: "/assets/images/auditory/ไกล.jpg",
  },
  {
    time: "9.40-10.35",
    overall: "55 นาที",
    name: "ภาพยนตร์สั้น",
    caption: "ชมรมภาพยนตร์สั้นและสื่อโทรทัศน์",
    img: "/assets/images/auditory/ภาพยนตร์สั้นและสื่อโทรทัศน์.jpg",
  },
  {
    time: "10.35-11.00",
    overall: "25 นาที",
    name: (
      <p>
        สายรุ้งแห่งศรัทธา : คริสตชนไทย
        <br />
        กับความหลากหลายทางเพศ
      </p>
    ),
    caption: "ชมรมหลากทัศนะประวัติศาสตร์",
    img: "/assets/images/auditory/หลากทัศน์.jpg",
  },
  {
    time: "11.05-11.25",
    overall: "20 นาที",
    name: (
      <p>
        The last wish maker
        <br />
        ตะเกียงแห่งมนตรา
      </p>
    ),
    caption: "ชมรมนาฏศิลป์",
    img: "/assets/images/auditory/The_Last_With_Maker.jpg",
  },
  {
    time: "11.25-12.00",
    overall: "35 นาที",
    name: "My O'Clock",
    caption: "ชมรมสันทนากร",
    img: "/assets/images/auditory/tuent.jpg",
  },
  {
    time: "12.25-13.25",
    overall: "60 นาที",
    name: "Dearest Dreamers",
    caption: "ชมรมภาษาอังกฤษ (ขับร้องประสานเสียง)",
    img: "/assets/images/auditory/epcho.jpg",
  },
  {
    time: "13.30-15.10",
    overall: "100 นาที",
    name: (
      <p>
        Oh! My Orb The Musical
        <br />
        ลูกแก้วอลหม่านเรือสำราญอลเวง
      </p>
    ),
    caption: "ชมรมนิเทศศิลป",
    img: "/assets/images/auditory/นิเทศศิลป_Tusp.jpg",
  },
  {
    time: "15.15-16.35",
    overall: "20 นาที",
    name: (
      <p>
        In the Name of
        <br />
        Desires the Musical
      </p>
    ),
    caption: "ชมรมภาษาอังกฤษ (English Drama)",
    img: "/assets/images/auditory/engma.jpg",
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
  nameText:
    "z-10 text-[#F4F2C4] font-noto-sans-thai font-semibold flex flex-col " +
    " text-[17px] leading-[18px] sm:text-[21px] sm:leading-[23px] md:text-[20px] md:leading-[20px] lg:text-[26px] lg:leading-[30px] 2xl:text-[29.271px] 2xl:leading-[33.669px] ",
  castle: "absolute bottom-0 right-0 w-full h-auto",
  caption:
    " z-10 text-[#F4F2C4] font-noto-sans-thai leading-normal [text-shadow:0_3.041px_3.041px_rgba(0,0,0,0.25)] " +
    " text-[13px] sm:text-[15px] md:text-[13px] lg:text-[15px] 2xl:text-[18.659px] ",
  time:
    " text-white text-right font-noto-sans-thai font-bold " +
    " text-[17px] leading-[20px] sm:text-[21px] sm:leading-[23px] md:text-[22px] md:leading-[21px] lg:text-[25px] lg:leading-[24px] 2xl:text-[29.58px] 2xl:leading-[28.795px]",
  overall:
    "text-white text-right font-noto-sans-thai font-semibold " +
    " text-[14px] leading-[13px]  sm:text-[16px] sm:leading-[15px] md:text-[17px] md:leading-[16px] lg:text-[18px] lg:leading-[17px] 2xl:text-[20.51px] 2xl:leading-[19.966px] ",
};
const container = {
  MdAll:
    " w-screen overflow-hidden relative bg-[linear-gradient(13deg,#042284_6.23%,#3450B0_45.79%,#457BCA_98.77%)] " +
    " h-[2100px] py-25 sm:h-[2500px] py-30 md:h-[1940px] md:py-30 lg:h-[2350px] lg:py-30 2xl:py-40 2xl:h-[2600px]  ",
  Box1: " flex flex-col " + " gap-4 md:gap-4 lg:gap-4 2xl:gap-6 ",
  Box2:
    " relative overflow-hidden flex bg-[linear-gradient(180deg,#042284_-6.54%,#0B1855_100%),linear-gradient(264deg,#3450B0_-9.13%,#042284_97.88%)] shadow-[0_1.009px_1.009px_0_rgba(0,0,0,0.25)] " +
    "drop-down-scroll w-[370px] rounded-[15px] sm:w-[450px] sm:rounded-[15px] md:w-[400px] md:rounded-[12px] lg:w-[570px] lg:rounded-[12px] 2xl:w-[636.734px] 2xl:rounded-[12.724px] ",
  Img:
    "aspect-[131.23/185] h-auto overflow-hidden relative flex-shrink-0 " +
    " w-[90px] m-3 rounded-[12px] sm:w-[100px] sm:m-3 sm:rounded-[12px] md:w-[105px] md:m-3 md:rounded-[10px] lg:w-[120px] lg:m-5 lg:rounded-[10px] 2xl:m-4 2xl:rounded-[10px] 2xl:w-[131.23px] ",
  inner: "flex flex-col flex-1 " + " py-3 sm:py-3 md:py-3 lg:py-4 ",
};

const PerformancePage = () => {
  const [date, setDate] = useState<"FRI 9 JAN" | "SAT 10 JAN">("FRI 9 JAN");

  return (
    <>
      <ScrollObserver />
      <div className={container.MdAll}>
        <Mdleft className="hidden md:block absolute w-auto bottom-[5.6vw] left-0 md:h-[1400px] lg:h-[1650px] 2xl:h-[2000px]" />
        <Mdright className="hidden md:block absolute w-auto bottom-[5.6vw] right-0 md:h-[1400px] lg:h-[1650px] 2xl:h-[2020px]" />
        <Mdcurtain className="hidden md:block absolute w-full h-auto -top-[37px] lg:-top-[55px] xl:-top-[79px] right-0" />
        <Mdbeam className="hidden md:block absolute w-auto top-0 right-0 md:h-[1300px] lg:h-[1400px] 2xl:h-[1800px]" />
        <Mdbottom className=" hidden md:block absolute w-screen h-auto bottom-0 " />
        <SmBottom className="md:hidden absolute bottom-0 left-0 h-auto w-full" />
        <SmCurtain className="md:hidden absolute -top-[75px] left-0 h-auto w-full" />
        <SmBeam2 className="md:hidden absolute top-0 right-0 w-auto h-[95%]" />
        <div className=" flex flex-col items-center mx-auto">
          <p className={css.header1}>ตารางการแสดง</p>
          <p className={css.header2}>บนหอประชุมฯ</p>

          <div
            className={"z-10 relative mx-auto bg-[#0B1855]/30 " + css.ButtonAll}
          >
            {/* Left date label */}
            <button
              onClick={() => setDate("FRI 9 JAN")}
              className={
                ` ${
                  date === "FRI 9 JAN"
                    ? "text-white opacity-0"
                    : "text-white opacity-60"
                } absolute left-0 top-0 h-full flex items-center justify-center transition-opacity duration-300 ` +
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
                } absolute right-0 top-0 h-full flex items-center justify-center transition-opacity duration-300 ` +
                css.ButtonText +
                css.ButtonBox
              }
            >
              SAT 10 JAN
            </button>
          </div>
          <div className="relative min-h-[1000px] w-full cursor-pointer">
            <div
              key="fri-9"
              className={`
                          absolute inset-0
                mx-auto flex flex-col items-center
                transition-all duration-300 ease-in
                transform cursor-pointer
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
                    <BottomCastle className={css.castle} />

                    {/* Add flex-shrink-0 and explicit dimensions */}
                    <div className={container.Img}>
                      <Image
                        src={item.img}
                        alt="img"
                        fill
                        className="object-cover"
                      />
                    </div>

                    <div className={container.inner}>
                      <p className={css.nameText}>{item.name}</p>
                      <p className={css.caption}>{item.caption}</p>
                    </div>

                    <div className="absolute right-4 bottom-4">
                      <p className={css.time}>{item.time}</p>
                      <p className={css.overall}>{item.overall}</p>
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
                    <BottomCastle className={css.castle} />
                    <div className={container.Img}>
                      <Image
                        src={item.img}
                        alt="img"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className={container.inner}>
                      <p className={css.nameText}>{item.name}</p>
                      <p className={css.caption}>{item.caption}</p>
                    </div>
                    <div className="absolute right-4 bottom-4">
                      <p className={css.time}>{item.time}</p>
                      <p className={css.overall}>{item.overall}</p>
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
