"use client";

import { useState } from "react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { Noto_Sans_Thai } from "next/font/google";
import MapBg from "@/vector/map/MapBg";
import Toilet from "@/vector/map/toilet";
import B1 from "@/vector/map/building/B1";
import B2 from "@/vector/map/building/ฺB2";
import BArt from "@/vector/map/building/BArt";
import B3 from "@/vector/map/building/ฺB3";
import B8 from "@/vector/map/building/ฺB8";
import B72 from "@/vector/map/building/B72";
import B9 from "@/vector/map/building/ฺB9";
import B50 from "@/vector/map/building/B50";
import B55 from "@/vector/map/building/B55";
import B80 from "@/vector/map/building/B80";
import B81 from "@/vector/map/building/ฺB81";
import BRung from "@/vector/map/building/BRung";
import OuterOrg from "@/vector/map/OuterOrg";
import Kubua from "@/vector/map/other/kubua";
import Cafeteria1 from "@/vector/map/other/Cafeteria1";
import Plant from "@/vector/map/other/plant";
import B60 from "@/vector/map/building/B60";
import PE from "@/vector/map/other/PE";
import Lan70 from "@/vector/map/other/lan70";
import LanBanYen from "@/vector/map/other/lanbanyen";
import TennisCourt from "@/vector/map/other/TennisCourt";
import BasketBallCourt from "@/vector/map/other/BasketBallCourt";
import Football from "@/vector/map/other/Football";
import VolleyBall from "@/vector/map/other/volleyball";
import Auditorium from "@/vector/map/other/auditorium";
import P1 from "@/vector/map/programs/P1";
import P2 from "@/vector/map/programs/P2";
import P3 from "@/vector/map/programs/P3";
import P4 from "@/vector/map/programs/P4";
import P5 from "@/vector/map/programs/P5";
import P6 from "@/vector/map/programs/P6";
import P7 from "@/vector/map/programs/P7";
import P8 from "@/vector/map/programs/P8";
import SearchIcon from "@/vector/Contact/SearchIcon";
import R1 from "@/vector/map/icon/R1";
import R2 from "@/vector/map/icon/R2";
import R3 from "@/vector/map/icon/R3";
import R4 from "@/vector/map/icon/R4";
import R5 from "@/vector/map/icon/R5";
import R6 from "@/vector/map/icon/R6";
import R7 from "@/vector/map/icon/R7";
import R8 from "@/vector/map/icon/R8";

const NotoSansThai = Noto_Sans_Thai({
  variable: "--font-noto-sans-thai",
  subsets: ["thai", "latin"],
});

type MapItem = {
  element: React.ReactElement;
  keyword: string[];
  type: string;
};

const mapItems: MapItem[] = [
  {
    element: <MapBg className="w-full h-full" />,
    keyword: [" "],
    type: "others",
  },
  {
    element: (
      <Toilet className="absolute left-[36px] top-[210px] scale-50 origin-top-left" />
    ),
    keyword: ["toilet", "ห้องน้ำ"],
    type: "toilet",
  },
  {
    element: (
      <B1 className="absolute left-[400px] top-[690px] w-1/2 scale-50 origin-top-left" />
    ),
    keyword: ["ตึก1", "building1"],
    type: "building",
  },
  {
    element: (
      <B2 className="absolute left-[385px] top-[425px] w-1/2 scale-50 origin-top-left" />
    ),
    keyword: ["ตึก2", "building2"],
    type: "building",
  },
  {
    element: (
      <BArt className="absolute left-[285px] top-[706px] w-1/2 scale-50 origin-top-left" />
    ),
    keyword: ["ตึกศิลปะ", "ArtBuilding"],
    type: "building",
  },
  {
    element: (
      <B3 className="absolute left-[400px] top-[150px] w-1/2 scale-50 origin-top-left" />
    ),
    keyword: ["ตึก3", "building3"],
    type: "building",
  },
  {
    element: (
      <B8 className="absolute -left-[19px] top-[246px] w-1/2 scale-50 origin-top-left" />
    ),
    keyword: ["ตึก8", "building8"],
    type: "building",
  },
  {
    element: (
      <B72 className="absolute -left-[19px] top-[332px] w-1/2 scale-50 origin-top-left" />
    ),
    keyword: ["ตึก72", "building72"],
    type: "building",
  },
  {
    element: (
      <B9 className="absolute left-[186px] top-[475px] w-1/2 scale-50 origin-top-left" />
    ),
    keyword: ["ตึก9", "building9"],
    type: "building",
  },
  {
    element: (
      <B50 className="absolute left-[100px] top-[70px] w-1/2 scale-50 origin-top-left" />
    ),
    keyword: ["ตึก50ปี", "building 50 years"],
    type: "building",
  },
  {
    element: (
      <B55 className="absolute left-[155px] top-[70px] w-1/2 scale-50 origin-top-left" />
    ),
    keyword: ["ตึก55ปี", "building 55 years"],
    type: "building",
  },
  {
    element: (
      <B80 className="absolute left-[290px] top-[460px] w-1/2 scale-50 origin-top-left" />
    ),
    keyword: ["ตึก80ปี", "building 80 years"],
    type: "building",
  },
  {
    element: (
      <B81 className="absolute left-[235px] top-[337px] w-1/2 scale-50 origin-top-left" />
    ),
    keyword: ["ตึก81ปี", "building 81 years"],
    type: "building",
  },
  {
    element: (
      <BRung className="absolute left-[27px] top-[70px] w-1/2 scale-50 origin-top-left" />
    ),
    keyword: ["ตึกคุณหญิงหรั่ง", "lady rung building"],
    type: "building",
  },
  {
    element: (
      <B60 className="absolute left-[70px] top-[540px] w-1/2 scale-50 origin-top-left" />
    ),
    keyword: ["ตึก60ปี", "60 years building"],
    type: "building",
  },
  {
    element: (
      <Kubua className="absolute left-[343px] top-[692px] w-1/2 scale-50 origin-top-left" />
    ),
    keyword: ["คูบัว", "pool"],
    type: "others",
  },
  {
    element: (
      <Cafeteria1 className="absolute left-[123px] top-[152px] w-1/2 scale-50 origin-top-left" />
    ),
    keyword: ["โดมทอง", "cafeteria", "โรงอาหาร"],
    type: "others",
  },
  {
    element: (
      <Plant className="absolute -left-[19px] top-[473px] w-1/2 scale-50 origin-top-left" />
    ),
    keyword: ["เรือนเกษตร", "plant"],
    type: "others",
  },
  {
    element: (
      <PE className="absolute left-[197px] top-[549px] w-1/2 scale-50 origin-top-left" />
    ),
    keyword: ["โรงพละ", "PE"],
    type: "others",
  },
  {
    element: (
      <Lan70 className="absolute left-[200px] top-[503px] w-1/2 scale-50 origin-top-left" />
    ),
    keyword: ["ลาน70ปี", "lan 70 years"],
    type: "others",
  },
  {
    element: (
      <LanBanYen className="absolute left-[70px] top-[464px] w-1/2 scale-50 origin-top-left" />
    ),
    keyword: ["ลานบานเย็น", "lan Ban Yen"],
    type: "others",
  },
  {
    element: (
      <TennisCourt className="absolute left-[360px] top-[350px] w-1/2 scale-50 origin-top-left" />
    ),
    keyword: ["สนามเท็นนิส", "TennisCourt"],
    type: "others",
  },
  {
    element: (
      <BasketBallCourt className="absolute left-[360px] top-[424px] w-1/2 scale-50 origin-top-left" />
    ),
    keyword: ["สนามบาสเก็ตบอล", "BasketBallCourt"],
    type: "others",
  },
  {
    element: (
      <Football className="absolute left-[85px] top-[155px] w-1/2 scale-70 origin-top-left" />
    ),
    keyword: ["สนามฟุตบอล", "FootBallCourt"],
    type: "others",
  },
  {
    element: (
      <OuterOrg className="absolute left-[333px] top-[410px] w-1/2 scale-50 origin-top-left" />
    ),
    keyword: ["องค์กรณ์ภายนอก", "outer organization"],
    type: "outer organization",
  },
  {
    element: (
      <VolleyBall className="absolute left-[373px] top-[540px] w-1/2 scale-50 origin-top-left" />
    ),
    keyword: ["สนามวอลเลย์บอล", "volleyballcourt"],
    type: "others",
  },
  {
    element: (
      <Auditorium className="absolute left-[290px] top-[590px] w-1/2 scale-50 origin-top-left" />
    ),
    keyword: ["หอประชุม", "Auditorium"],
    type: "others",
  },
  {
    element: (
      <P1 className="absolute left-[47px] top-[447px] w-1/2 scale-50 origin-top-left" />
    ),
    keyword: ["สายการเรียนภาษา-ภาษาญี่ปุ่น", "Program japanease"],
    type: "Program",
  },
  {
    element: (
      <P2 className="absolute left-[61px] top-[447px] w-1/2 scale-50 origin-top-left" />
    ),
    keyword: ["สายการเรียนภาษา-ภาษาจีน", "Program chinease"],
    type: "Program",
  },
  {
    element: (
      <P3 className="absolute left-[75px] top-[447px] w-1/2 scale-50 origin-top-left" />
    ),
    keyword: ["สายการเรียนภาษา-ภาษาเกาหลี", "Program korea"],
    type: "Program",
  },
  {
    element: (
      <P4 className="absolute left-[89px] top-[447px] w-1/2 scale-50 origin-top-left" />
    ),
    keyword: ["สายการเรียนภาษา-ภาษาสเปน", "Program spain"],
    type: "Program",
  },
  {
    element: (
      <P5 className="absolute left-[103px] top-[447px] w-1/2 scale-50 origin-top-left" />
    ),
    keyword: ["สายการเรียนภาษา-ภาษาฝรั่งเศส", "Program french"],
    type: "Program",
  },
  {
    element: (
      <P6 className="absolute left-[117px] top-[447px] w-1/2 scale-50 origin-top-left" />
    ),
    keyword: ["สายการเรียนภาษา-ภาษาเยอรมัน", "Program germen"],
    type: "Program",
  },
  {
    element: (
      <P7 className="absolute left-[55px] top-[470px] w-1/2 scale-50 origin-top-left" />
    ),
    keyword: ["สายการเรียนวิทยาศาสตร์-คณิตศาสตร์", "Program science math"],
    type: "Program",
  },
  {
    element: (
      <P8 className="absolute left-[93px] top-[470px] w-1/2 scale-50 origin-top-left" />
    ),
    keyword: ["สายการเรียนภาษา-คณิตศาสตร์", "Program english math"],
    type: "Program",
  },
];

const css = {
  header:
    "text-[#F3E19D] text-center font-inter text-[89.118px] font-bold leading-normal drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]",
  header2:
    "text-[#F3E19D] text-center text-[43.083px] font-normal leading-normal tracking-[4.308px] drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]",
  p: "text-white text-center font-noto-sans-thai text-[17.937px] leading-normal",
  h2: " text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.25)] font-noto-sans-thai text-[39.294px] font-bold leading-normal",
  h4: " flex items-center gap-2 text-white font-['Noto_Sans_Thai'] text-[22.997px] font-semibold leading-normal",
  button: " px-7 py-1 ",
  buttonText: " text-[24px] ",
  searchBox:
    " w-full pl-[40px] bg-white rounded-[30px] text-[#112E90] font-noto-sans-thai text-[24px] ",
  searchIcon: "absolute left-[27px] w-[24px] h-auto ",
  CirOr:
    "flex h-9 w-9 items-center justify-center rounded-full bg-[#F08054] text-white text-center font-noto-sans-thai text-[17.937px] font-black leading-normal",
  CirDB:
    "flex h-9 w-9 items-center justify-center rounded-full bg-[#042284] border-2 text-white text-center font-noto-sans-thai text-[17.937px] font-black leading-normal",
  CirBl:
    "flex h-9 w-9 items-center justify-center rounded-full bg-[#4284D8] text-white text-center font-noto-sans-thai text-[17.937px] font-black leading-normal",
  CirG: "flex h-9 w-9 items-center justify-center rounded-full bg-[#E5C675] text-white text-center font-noto-sans-thai text-[17.937px] font-black leading-normal",
  CirB: "flex h-9 w-9 items-center justify-center rounded-full bg-[#C5A064] text-white text-center font-noto-sans-thai text-[17.937px] font-black leading-normal",
};
const container = {
  smallBox: "flex items-center gap-2",
  buttonBox: " flex flex-col justify-center border items-center gap-3 my-5",
  searchBox:
    " relative border px-4 flex items-center justify-center w-[60vw] mt-3 mb-6 ",
  Allbox: " flex space-evenly mt-4 w-[1200px] rounded-[26px] bg-[#173083] p-5 ",
  col: "flex flex-col gap-3",
};
const MapPage = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const matchesSearch = (item: MapItem) => {
    if (searchQuery.trim() === "") return true;

    const query = searchQuery.toLowerCase();
    return item.keyword.some((keyword) =>
      keyword.toLowerCase().includes(query)
    );
  };
  return (
    <div className="w-screen overflow-hidden bg-[linear-gradient(270deg,#042284_0%,#3450B0_100%)] py-20">
      <div className="w-full flex flex-col items-center">
        <p className={css.header}>แผนผังงาน</p>
        <p
          className={css.header2}
          style={{ fontFamily: "var(--font-bethany)" }}
        >
          TRIAMUDON OPEN HOUSE 2026
        </p>
        <div className={container.buttonBox}>
          <div className="flex gap-2">
            <button className={"bg-[#457BCA] rounded-3xl" + css.button}>
              <p
                className={
                  "text-white text-center font-noto-sans-thai font-bold leading-normal" +
                  css.buttonText
                }
              >
                ALL
              </p>
            </button>
            <button className={" bg-white rounded-3xl" + css.button}>
              <p
                className={
                  "text-[#112E90] text-center font-noto-sans-thai font-bold leading-normal" +
                  css.buttonText
                }
              >
                สายการเรียน
              </p>
            </button>
            <button className={" bg-white rounded-3xl" + css.button}>
              <p
                className={
                  "text-[#112E90] text-center font-noto-sans-thai font-bold leading-normal" +
                  css.buttonText
                }
              >
                Gifted
              </p>
            </button>
            <button className={" bg-white rounded-3xl" + css.button}>
              <p
                className={
                  "text-[#112E90] text-center font-noto-sans-thai font-bold leading-normal" +
                  css.buttonText
                }
              >
                ชมรม
              </p>
            </button>
          </div>
          <div className="flex gap-2">
            <button className={" bg-white rounded-3xl" + css.button}>
              <p
                className={
                  "text-[#112E90] text-center font-noto-sans-thai font-bold leading-normal" +
                  css.buttonText
                }
              >
                องค์กรณ์ภายใน
              </p>
            </button>
            <button className={" bg-white rounded-3xl" + css.button}>
              <p
                className={
                  "text-[#112E90] text-center font-noto-sans-thai font-bold leading-normal" +
                  css.buttonText
                }
              >
                องค์กรณ์ภายนอก
              </p>
            </button>
            <button className={" bg-white rounded-3xl" + css.button}>
              <p
                className={
                  "text-[#112E90] text-center font-noto-sans-thai font-bold leading-normal" +
                  css.buttonText
                }
              >
                อาคารเรียน
              </p>
            </button>
            <button className={" bg-white rounded-3xl" + css.button}>
              <p
                className={
                  "text-[#112E90] text-center font-noto-sans-thai font-bold leading-normal" +
                  css.buttonText
                }
              >
                ห้องน้ำ
              </p>
            </button>
          </div>
        </div>

        <div className={container.searchBox}>
          <input
            type="text"
            placeholder="ค้นหา"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className={css.searchBox}
          />
          <SearchIcon className={css.searchIcon} />
        </div>

        {/* MAP CONTAINER */}
        <div className="relative h-[442px] w-[277.5px] sm:h-[663px] sm:w-[416.25px] md:h-[884px] md:w-[555px]  overflow-hidden touch-none">
          <TransformWrapper
            minScale={1}
            maxScale={4}
            wheel={{ step: 0.15 }}
            pinch={{ step: 5 }}
            doubleClick={{ disabled: true }}
          >
            <TransformComponent>
              <div className="scale-50 sm:scale-75 md:scale-100 origin-top-left w-[555px] h-[884px]">
                {mapItems.map((item, index) => {
                  const isMatch = matchesSearch(item);
                  const opacity =
                    searchQuery.trim() !== "" ? (isMatch ? 1 : 0.2) : 1;
                  return (
                    <div
                      key={index}
                      className="transition-opacity duration-300"
                      style={{ opacity }}
                    >
                      {item.element}
                    </div>
                  );
                })}
              </div>
            </TransformComponent>
          </TransformWrapper>
        </div>

        <div className="flex justify-center gap-4 border mt-10">
          <div className="flex flex-col ">
            <p className={css.h2}>พื้นที่ภายใน</p>
            <div className="w-[300px] h-[2px] bg-white"></div>
            <div className="flex gap-2 ">
              <div className={css.h4}>
                <R1 />
                มีการแสดง
              </div>
              <div className={css.h4}>
                {" "}
                <R2 />
                ห้องน้ำ
              </div>
            </div>
            <div className="flex gap-2 ">
              <div className={css.h4}>
                {" "}
                <R3 />
                มีการจัดซุ้ม
              </div>
            </div>
          </div>
          <div className="flex  flex-col">
            <p className={css.h2}>สัญลักษณ์ซุ้ม</p>
            <div className="w-[400px] h-[2px] bg-white"></div>
            <div className="flex gap-2">
              <div className={css.h4}>
                {" "}
                <R4 />
                สายการเรียน
              </div>
              <div className={css.h4}>
                {" "}
                <R6 />
                Gifted
              </div>
              <div className={css.h4}>
                {" "}
                <R8 />
                ชมรม
              </div>
            </div>
            <div className="flex gap-2">
              <div className={css.h4}>
                {" "}
                <R5 />
                องค์กรณ์ภายใน
              </div>
              <div className={css.h4}>
                {" "}
                <R7 />
                องค์กรณ์ภายนอก
              </div>
            </div>
          </div>
        </div>
        <div className={container.Allbox}>
          <div className={container.col}>
            <div className={container.smallBox}>
              <p className={css.CirOr}>1</p>{" "}
              <p className={css.p}>สายการเรียนภาษา-ภาษาญี่ปุ่น</p>
            </div>
            <div className={container.smallBox}>
              <p className={css.CirOr}>2</p>{" "}
              <p className={css.p}>สายการเรียนภาษา-ภาษาจีน</p>
            </div>
            <div className={container.smallBox}>
              <p className={css.CirOr}>3</p>{" "}
              <p className={css.p}>สายการเรียนภาษา-ภาษาเกาหลี</p>
            </div>
            <div className={container.smallBox}>
              <p className={css.CirOr}>4</p>{" "}
              <p className={css.p}>สายการเรียนภาษา-ภาษาสเปน</p>
            </div>
            <div className={container.smallBox}>
              <p className={css.CirOr}>5</p>{" "}
              <p className={css.p}>สายการเรียนภาษา-ภาษาฝรั่งเศส</p>
            </div>
            <div className={container.smallBox}>
              <p className={css.CirOr}>6</p>{" "}
              <p className={css.p}>สายการเรียนภาษา-ภาษาเยอรมัน</p>
            </div>
            <div className={container.smallBox}>
              <p className={css.CirOr}>7</p>{" "}
              <p className={css.p}>สายการเรียนวิทยาศาสตร์-คณิตศาสตร์</p>
            </div>
            <div className={container.smallBox}>
              <p className={css.CirOr}>8</p>{" "}
              <p className={css.p}>สายการเรียนภาษา-คณิตศาสตร์</p>
            </div>

            <div className={container.smallBox}>
              <p className={css.CirDB}>9</p>{" "}
              <p className={css.p}>Gifted Science</p>
            </div>
            <div className={container.smallBox}>
              <p className={css.CirDB}>10</p>{" "}
              <p className={css.p}>Gifted Math</p>
            </div>
            <div className={container.smallBox}>
              <p className={css.CirDB}>11</p>{" "}
              <p className={css.p}>Gifted English</p>
            </div>
            <div className={container.smallBox}>
              <p className={css.CirDB}>12</p>{" "}
              <p className={css.p}>Gifted Thai</p>
            </div>

            <div className={container.smallBox}>
              <p className={css.CirBl}>13</p>{" "}
              <p className={css.p}>ชมรม Quant การเงินเชิงปริมาณ</p>
            </div>
            <div className={container.smallBox}>
              <p className={css.CirBl}>14</p>{" "}
              <p className={css.p}>ชมรมคณิตศาสตร์</p>
            </div>
            <div className={container.smallBox}>
              <p className={css.CirBl}>15</p>{" "}
              <p className={css.p}>ชมรมเพาะพันธุ์ไม้</p>
            </div>
            <div className={container.smallBox}>
              <p className={css.CirBl}>16</p>{" "}
              <p className={css.p}>ชมรมการ์ตูน</p>
            </div>
            <div className={container.smallBox}>
              <p className={css.CirBl}>17</p>{" "}
              <p className={css.p}>ชมรมสิ่งละอันพันละน้อย</p>
            </div>
            <div className={container.smallBox}>
              <p className={css.CirBl}>18</p>{" "}
              <p className={css.p}>ชมรมสิ่งละอันพันละน้อย (โครเชต์)</p>
            </div>
            <div className={container.smallBox}>
              <p className={css.CirBl}>19</p>{" "}
              <p className={css.p}>ชมรม Crossword</p>
            </div>
            <div className={container.smallBox}>
              <p className={css.CirBl}>20</p>{" "}
              <p className={css.p}>ชมรมดนตรีสากล</p>
            </div>
            <div className={container.smallBox}>
              <p className={css.CirBl}>21</p>{" "}
              <p className={css.p}>ชมรมภาพยนตร์สั้นและสื่อโทรทัศน์</p>
            </div>
            <div className={container.smallBox}>
              <p className={css.CirBl}>22</p>{" "}
              <p className={css.p}>ชมรมผู้บำเพ็ญประโยชน์</p>
            </div>
            <div className={container.smallBox}>
              <p className={css.CirBl}>23</p>{" "}
              <p className={css.p}>ชมรมวรรณศิลป์ ต.อ.</p>
            </div>
          </div>
          <div className={container.col}>
            <div className={container.smallBox}>
              <p className={css.CirBl}>24</p>{" "}
              <p className={css.p}>ชมรมสร้างสรรค์หนังสือ</p>
            </div>
            <div className={container.smallBox}>
              <p className={css.CirBl}>25</p>{" "}
              <p className={css.p}>ชมรมนิเทศศิลป</p>
            </div>
            <div className={container.smallBox}>
              <p className={css.CirBl}>26</p>{" "}
              <p className={css.p}>ชมรมจิตวิทยา</p>
            </div>
            <div className={container.smallBox}>
              <p className={css.CirBl}>27</p>{" "}
              <p className={css.p}>ชมรมเพื่อนที่ปรึกษา</p>
            </div>
            <div className={container.smallBox}>
              <p className={css.CirBl}>28</p> <p className={css.p}>ชมรม MUN</p>
            </div>
            <div className={container.smallBox}>
              <p className={css.CirBl}>29</p>{" "}
              <p className={css.p}>ชมรม Debate</p>
            </div>
            <div className={container.smallBox}>
              <p className={css.CirBl}>30</p>{" "}
              <p className={css.p}>ชมรมกฎหมายน่ารู้</p>
            </div>
            <div className={container.smallBox}>
              <p className={css.CirBl}>31</p>{" "}
              <p className={css.p}>ชมรมหนังสังคม</p>
            </div>
            <div className={container.smallBox}>
              <p className={css.CirBl}>32</p>{" "}
              <p className={css.p}>ชมรมภาคีสังคม</p>
            </div>
            <div className={container.smallBox}>
              <p className={css.CirBl}>33</p>{" "}
              <p className={css.p}>ชมรมหลากทัศนะประวัติศาสตร์</p>
            </div>
            <div className={container.smallBox}>
              <p className={css.CirBl}>34</p>{" "}
              <p className={css.p}>ชมรมสรรพศึกษา</p>
            </div>
            <div className={container.smallBox}>
              <p className={css.CirBl}>35</p>{" "}
              <p className={css.p}>ชมรมบริหารธุรกิจ</p>
            </div>
            <div className={container.smallBox}>
              <p className={css.CirBl}>36</p>{" "}
              <p className={css.p}>ชมรมศิลปศึกษา</p>
            </div>
            <div className={container.smallBox}>
              <p className={css.CirBl}>37</p>{" "}
              <p className={css.p}>ชมรมของเล่นเพื่อการเรียนรู้</p>
            </div>
            <div className={container.smallBox}>
              <p className={css.CirBl}>38</p>{" "}
              <p className={css.p}>ชมรมวิทยาศาสตร์</p>
            </div>
            <div className={container.smallBox}>
              <p className={css.CirBl}>39</p> <p className={css.p}>ชมรมวิจัย</p>
            </div>
            <div className={container.smallBox}>
              <p className={css.CirBl}>40</p>{" "}
              <p className={css.p}>ชมรมฟิตเนส</p>
            </div>
            <div className={container.smallBox}>
              <p className={css.CirBl}>41</p>{" "}
              <p className={css.p}>ชมรมหมากกระดาน</p>
            </div>
            <div className={container.smallBox}>
              <p className={css.CirBl}>42</p>{" "}
              <p className={css.p}>ชมรมผู้นำเยาวชนสาธารณสุข</p>
            </div>
            <div className={container.smallBox}>
              <p className={css.CirBl}>43</p>{" "}
              <p className={css.p}>ชมรมผู้นำเชียร์</p>
            </div>
            <div className={container.smallBox}>
              <p className={css.CirBl}>44</p>{" "}
              <p className={css.p}>ชมรมวาทศิลป์</p>
            </div>
            <div className={container.smallBox}>
              <p className={css.CirBl}>45</p> <p className={css.p}>งานแนะแนว</p>
            </div>
            <div className={container.smallBox}>
              <p className={css.CirBl}>46</p>{" "}
              <p className={css.p}>ชมรมถ่ายภาพ</p>
            </div>
          </div>
          <div className={container.col}>
            <div className={container.smallBox}>
              <p className={css.CirBl}>47</p>{" "}
              <p className={css.p}>ชมรมภาษาไทย</p>
            </div>
            <div className={container.smallBox}>
              <p className={css.CirBl}>48</p>{" "}
              <p className={css.p}>ชมรมภาษาเกาหลี</p>
            </div>
            <div className={container.smallBox}>
              <p className={css.CirBl}>49</p>{" "}
              <p className={css.p}>ชมรมภาษาญี่ปุ่น</p>
            </div>
            <div className={container.smallBox}>
              <p className={css.CirBl}>50</p>{" "}
              <p className={css.p}>ชมรมภาษาจีน</p>
            </div>
            <div className={container.smallBox}>
              <p className={css.CirBl}>51</p>{" "}
              <p className={css.p}>ชมรมภาษาเยอรมัน</p>
            </div>
            <div className={container.smallBox}>
              <p className={css.CirBl}>52</p>{" "}
              <p className={css.p}>ชมรมภาษาฝรั่งเศส</p>
            </div>
            <div className={container.smallBox}>
              <p className={css.CirBl}>53</p>{" "}
              <p className={css.p}>ชมรมภาษาสเปน</p>
            </div>

            <div className={container.smallBox}>
              <p className={css.CirG}>54</p>{" "}
              <p className={css.p}>กลุ่มนักเรียนอาสาพยาบาล</p>
            </div>
            <div className={container.smallBox}>
              <p className={css.CirG}>55</p>{" "}
              <p className={css.p}>คณะกรรมการหนังสืออนุสรณ์</p>
            </div>
            <div className={container.smallBox}>
              <p className={css.CirG}>56</p> <p className={css.p}>สปค.ต.อ.</p>
            </div>
            <div className={container.smallBox}>
              <p className={css.CirG}>57</p> <p className={css.p}>สนตอ.</p>
            </div>
            <div className={container.smallBox}>
              <p className={css.CirG}>58</p>{" "}
              <p className={css.p}>สปค.รร.ต.อ.</p>
            </div>
            <div className={container.smallBox}>
              <p className={css.CirG}>59</p> <p className={css.p}>กช.</p>
            </div>
            <div className={container.smallBox}>
              <p className={css.CirG}>60</p> <p className={css.p}>กน.</p>
            </div>
            <div className={container.smallBox}>
              <p className={css.CirG}>61</p> <p className={css.p}>AIC</p>
            </div>
            <div className={container.smallBox}>
              <p className={css.CirG}>62</p>{" "}
              <p className={css.p}>สโมสรอาจารย์โรงเรียนฯ</p>
            </div>
            <div className={container.smallBox}>
              <p className={css.CirG}>63</p> <p className={css.p}>TUPRO</p>
            </div>
            <div className={container.smallBox}>
              <p className={css.CirB}>64</p>{" "}
              <p className={css.p}>องค์กรภายนอก</p>
            </div>
            <div className={container.smallBox}>
              <p className={css.CirB}>65</p>{" "}
              <p className={css.p}>องค์กรภายนอก</p>
            </div>
            <div className={container.smallBox}>
              <p className={css.CirB}>66</p>{" "}
              <p className={css.p}>องค์กรภายนอก</p>
            </div>
            <div className={container.smallBox}>
              <p className={css.CirB}>67</p>{" "}
              <p className={css.p}>องค์กรภายนอก</p>
            </div>
            <div className={container.smallBox}>
              <p className={css.CirB}>68</p>{" "}
              <p className={css.p}>องค์กรภายนอก</p>
            </div>
            <div className={container.smallBox}>
              <p className={css.CirB}>69</p>{" "}
              <p className={css.p}>องค์กรภายนอก</p>
            </div>
          </div>
          <div className={container.col}>
            <div className={container.smallBox}>
              <p className={css.CirB}>70</p>{" "}
              <p className={css.p}>องค์กรภายนอก</p>
            </div>
            <div className={container.smallBox}>
              <p className={css.CirB}>71</p>{" "}
              <p className={css.p}>องค์กรภายนอก</p>
            </div>
            <div className={container.smallBox}>
              <p className={css.CirB}>72</p>{" "}
              <p className={css.p}>องค์กรภายนอก</p>
            </div>
            <div className={container.smallBox}>
              <p className={css.CirB}>73</p>{" "}
              <p className={css.p}>องค์กรภายนอก</p>
            </div>
            <div className={container.smallBox}>
              <p className={css.CirB}>74</p>{" "}
              <p className={css.p}>องค์กรภายนอก</p>
            </div>
            <div className={container.smallBox}>
              <p className={css.CirB}>75</p>{" "}
              <p className={css.p}>องค์กรภายนอก</p>
            </div>
            <div className={container.smallBox}>
              <p className={css.CirB}>76</p>{" "}
              <p className={css.p}>องค์กรภายนอก</p>
            </div>

            <div className={container.smallBox}>
              <p className={css.CirB}>77</p>{" "}
              <p className={css.p}>องค์กรภายนอก</p>
            </div>
            <div className={container.smallBox}>
              <p className={css.CirB}>78</p>{" "}
              <p className={css.p}>องค์กรภายนอก</p>
            </div>
            <div className={container.smallBox}>
              <p className={css.CirB}>79</p>{" "}
              <p className={css.p}>องค์กรภายนอก</p>
            </div>
            <div className={container.smallBox}>
              <p className={css.CirB}>80</p>{" "}
              <p className={css.p}>องค์กรภายนอก</p>
            </div>
            <div className={container.smallBox}>
              <p className={css.CirB}>81</p>{" "}
              <p className={css.p}>องค์กรภายนอก</p>
            </div>
            <div className={container.smallBox}>
              <p className={css.CirB}>82</p>{" "}
              <p className={css.p}>องค์กรภายนอก</p>
            </div>
            <div className={container.smallBox}>
              <p className={css.CirB}>83</p>{" "}
              <p className={css.p}>องค์กรภายนอก</p>
            </div>
            <div className={container.smallBox}>
              <p className={css.CirB}>84</p>{" "}
              <p className={css.p}>องค์กรภายนอก</p>
            </div>
            <div className={container.smallBox}>
              <p className={css.CirB}>85</p>{" "}
              <p className={css.p}>องค์กรภายนอก</p>
            </div>
            <div className={container.smallBox}>
              <p className={css.CirB}>86</p>{" "}
              <p className={css.p}>องค์กรภายนอก</p>
            </div>
            <div className={container.smallBox}>
              <p className={css.CirB}>87</p>{" "}
              <p className={css.p}>องค์กรภายนอก</p>
            </div>
            <div className={container.smallBox}>
              <p className={css.CirB}>88</p>{" "}
              <p className={css.p}>องค์กรภายนอก</p>
            </div>
            <div className={container.smallBox}>
              <p className={css.CirB}>89</p>{" "}
              <p className={css.p}>องค์กรภายนอก</p>
            </div>
            <div className={container.smallBox}>
              <p className={css.CirB}>90</p>{" "}
              <p className={css.p}>องค์กรภายนอก</p>
            </div>
            <div className={container.smallBox}>
              <p className={css.CirB}>91</p>{" "}
              <p className={css.p}>องค์กรภายนอก</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapPage;
