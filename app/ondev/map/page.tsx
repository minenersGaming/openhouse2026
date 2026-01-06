"use client";

import { useState, useEffect } from "react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { Noto_Sans_Thai } from "next/font/google";
import { mapItems, MapItem } from "@/components/map/Element";
import type { itemList } from "@/components/map/nameList";
import { itemLists } from "@/components/map/nameList";
import SearchIcon from "@/vector/Contact/SearchIcon";
import R1 from "@/vector/map/icon/R1";
import R2 from "@/vector/map/icon/R2";
import R3 from "@/vector/map/icon/R3";
import R4 from "@/vector/map/icon/R4";
import R5 from "@/vector/map/icon/R5";
import R6 from "@/vector/map/icon/R6";
import R7 from "@/vector/map/icon/R7";
import R8 from "@/vector/map/icon/R8";

//error on super small screen (จอเลื่อนนึดหน่อย)

const NotoSansThai = Noto_Sans_Thai({
  variable: "--font-noto-sans-thai",
  subsets: ["thai", "latin"],
});

const CirW = "h-9 w-9 text-[17.937px] md:h-7 md:w-7 md:text-[14px]";

const css = {
  header:
    "text-[#F3E19D] text-center font-inter font-bold leading-normal drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]" +
    "  text-[30px] sm:text-[34px] md:text-[38px] lg:text-[60px] xl:text-[89.118px] ",
  header2:
    "text-[#F3E19D] text-center font-normal leading-normal tracking-[4.308px] drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] " +
    " text-[18px] sm:text-[22px] md:text-[26px] lg:text-[32px] xl:text-[43.083px]  ",
  button:
    " hover:scale-105 transition-all " +
    " px-3 py-1 sm:px-4 sm:py-1 md:px-5 lg:px-8 lg:py-1  ",
  buttonText:
    " text-[13px] sm:text-[16px] md:text-[17px] lg:text-[21px] xl:text-[24px] ",
  searchBox:
    " w-full bg-white rounded-[30px] text-[#112E90] font-noto-sans-thai " +
    " pl-[40px] text-[19px] sm:text-[19px] md:text-[20px] lg:text-[25px] ",
  searchIcon: "absolute left-[27px] w-[24px] h-auto ",
  h2:
    " text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.25)] font-noto-sans-thai font-bold leading-normal " +
    " text-[24px] sm:text-[25px] md:text-[27px] lg:text-[39.294px] ",
  whiteline:
    " h-[2px] bg-white " + " w-[150px] mb-4 sm:w-[160px] lg:w-[300px] ",
  listicon: " h-auto w-[25px] md:w-[29px]",
  h4:
    " flex items-center gap-2 text-white font-noto-sans-thai font-semibold leading-normal " +
    " text-[19px] sm:text-[19px] md:text-[20px] lg:text-[22.997px] ",
  p:
    " text-white font-noto-sans-thai leading-normal " +
    " text-[16px] sm:text-[20px] md:text-[12px] lg:text-[18px] ",
  CirOr:
    "flex items-center justify-center rounded-full bg-[#F08054] text-white text-center font-noto-sans-thai font-black leading-normal " +
    CirW,
  CirDB:
    "flex items-center justify-center rounded-full bg-[#042284] border-2 text-white text-center font-noto-sans-thai font-black leading-normal " +
    CirW,
  CirBl:
    "flex items-center justify-center rounded-full bg-[#4284D8] text-white text-center font-noto-sans-thai font-black leading-normal " +
    CirW,
  CirG:
    "flex items-center justify-center rounded-full bg-[#E5C675] text-white text-center font-noto-sans-thai font-black leading-normal " +
    CirW,
  CirB:
    "flex items-center justify-center rounded-full bg-[#C5A064] text-white text-center font-noto-sans-thai font-black leading-normal " +
    CirW,
};
const container = {
  smallBox: "flex items-center gap-2",
  buttonBox:
    " flex flex-col justify-center items-center gap-3 " + " my-4 sm:my-6 ",
  searchBox:
    " relative flex items-center justify-center " +
    " w-[350px] px-4 sm:w-[420px] md:w-[560px] lg:w-[60vw] my-4 md:my-5  ",
  list1:
    " flex flex-col " + "mb-6 w-[180px] md:w-[270px] lg:my-6 lg:w-[350px] ",
  list2:
    " flex flex-col " + "mb-6 w-[180px] md:w-[360px] lg:mt-5 lg:w-[400px] ",
  sublist: "flex flex-col md:w-full md:flex-row md:flex-wrap gap-1 lg:gap-2 ",
  Allbox:
    " flex flex-col items-center md:items-start md:flex-row rounded-[26px] bg-[#173083] " +
    " w-full max-w-[360px] p-5 mt-8 sm:max-w-[500px] sm:py-9 md:mt-6 md:max-w-[760px] md:p-5 md:mt-4 lg:p-5 lg:mt-7 lg:max-w-[1000px] ",
  grid: " p-4 grid gap-2 grid-cols-1 md:grid-flow-col md:grid-rows-[repeat(23,minmax(0,1fr))] lg:gap-2",
};

const typeClassMap: Record<string, string> = {
  club: css.CirBl,
  organization: css.CirG,
  program: css.CirOr,
  gifted: css.CirDB,
  outer: css.CirB,
  // add more types freely
};

const MapPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [width, setWidth] = useState<number | null>(null);
  const [selectedType, setSelectedType] = useState<string>("ALL");
  //set selected type and show only selected type

  useEffect(() => {
    const update = () => setWidth(window.innerWidth);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  if (!width) return null;

  function getInitialScale(width: number) {
    if (width < 640) return 0.675;
    if (width < 768) return 0.75;
    if (width < 1024) return 1;
    if (width < 1280) return 1.25;
    if (width < 1536) return 1.5;
    return 1.75;
  }

  const matchesFilter = (item: MapItem) => {
    // 1. Keyword search
    const matchesSearch =
      searchQuery.trim() === "" ||
      item.keyword.some((keyword) =>
        keyword.toLowerCase().includes(searchQuery.toLowerCase())
      );

    // 2. Type filter
    const matchesType = selectedType === "ALL" || item.type === selectedType;

    // 3. Must satisfy BOTH
    return matchesSearch && matchesType;
  };

  const IsmatchesList = (item: itemList) => {
    // 1. search filter
    const matchesSearch =
      searchQuery.trim() === "" ||
      item.name.toLowerCase().includes(searchQuery.toLowerCase());

    // 2. type filter
    const matchesType = selectedType === "ALL" || item.type === selectedType;

    // 3. both must be true
    return matchesSearch && matchesType;
  };

  const getButtonStyle = (type: string) =>
    type === selectedType
      ? "bg-[#457BCA] text-white"
      : "bg-white text-[#112E90]";

  return (
    <div className="w-screen overflow-hidden bg-[linear-gradient(270deg,#042284_0%,#3450B0_100%)] py-20 lg:py-30">
      <div className="w-full flex flex-col items-center">
        <p className={css.header}>แผนผังงาน</p>
        <p
          className={css.header2}
          style={{ fontFamily: "var(--font-bethany)" }}
        >
          TRIAMUDOM OPEN HOUSE 2026
        </p>
        <div className={container.buttonBox}>
          <div className="flex gap-2">
            <button
              onClick={() => setSelectedType("ALL")}
              className={`rounded-3xl ${css.button} ${getButtonStyle("ALL")}`}
            >
              <p
                className={
                  "text-center font-noto-sans-thai font-bold leading-normal" +
                  css.buttonText
                }
              >
                ALL
              </p>
            </button>
            <button
              onClick={() => setSelectedType("program")}
              className={`rounded-3xl ${css.button} ${getButtonStyle(
                "program"
              )}`}
            >
              <p
                className={
                  "text-center font-noto-sans-thai font-bold leading-normal" +
                  css.buttonText
                }
              >
                สายการเรียน
              </p>
            </button>
            <button
              onClick={() => setSelectedType("gifted")}
              className={`rounded-3xl ${css.button} ${getButtonStyle(
                "gifted"
              )}`}
            >
              <p
                className={
                  "text-center font-noto-sans-thai font-bold leading-normal" +
                  css.buttonText
                }
              >
                Gifted
              </p>
            </button>
            <button
              onClick={() => setSelectedType("club")}
              className={`rounded-3xl ${css.button} ${getButtonStyle("club")}`}
            >
              <p
                className={
                  " text-center font-noto-sans-thai font-bold leading-normal" +
                  css.buttonText
                }
              >
                ชมรม
              </p>
            </button>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => setSelectedType("organization")}
              className={`rounded-3xl ${css.button} ${getButtonStyle(
                "organization"
              )}`}
            >
              <p
                className={
                  " text-center font-noto-sans-thai font-bold leading-normal" +
                  css.buttonText
                }
              >
                องค์กรณ์ภายใน
              </p>
            </button>
            <button
              onClick={() => setSelectedType("outer")}
              className={`rounded-3xl ${css.button} ${getButtonStyle("outer")}`}
            >
              <p
                className={
                  "text-center font-noto-sans-thai font-bold leading-normal" +
                  css.buttonText
                }
              >
                องค์กรณ์ภายนอก
              </p>
            </button>
            <button
              onClick={() => setSelectedType("building")}
              className={`rounded-3xl ${css.button} ${getButtonStyle(
                "building"
              )}`}
            >
              <p
                className={
                  " text-center font-noto-sans-thai font-bold leading-normal" +
                  css.buttonText
                }
              >
                อาคารเรียน
              </p>
            </button>
            <button
              onClick={() => setSelectedType("toilet")}
              className={`rounded-3xl ${css.button} ${getButtonStyle(
                "toilet"
              )}`}
            >
              <p
                className={
                  " text-center font-noto-sans-thai font-bold leading-normal" +
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
        <div className="relative aspect-[555/884] rounded-xl w-[374.625px] sm:w-[416.25px] md:w-[555px] lg:w-[693.75px] xl:w-[832.5px] 2xl:w-[971.25px] overflow-hidden touch-none">
          <TransformWrapper
            initialScale={getInitialScale(width)}
            minScale={getInitialScale(width)}
            maxScale={4}
            wheel={{ step: 0.15 }}
            pinch={{ step: 5 }}
            doubleClick={{ disabled: true }}
          >
            <TransformComponent
              wrapperStyle={{
                width: "100%",
                height: "100%",
                overflow: "hidden",
                //border: "2px solid red", // Add border here
              }}
              contentStyle={{
                overflow: "visible",
                //border: "2px solid blue", // Or add border here
              }}
            >
              <div className="relative w-[555px] h-[884px]">
                {mapItems.map((item, index) => {
                  const isMatch = matchesFilter(item);
                  const opacity =
                    searchQuery.trim() !== "" || selectedType !== "ALL"
                      ? isMatch
                        ? 1
                        : 0.2
                      : 1;
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

        <div className="flex justify-center mt-10">
          <div className={container.list1}>
            <p className={css.h2}>พื้นที่ภายใน</p>
            <div className={css.whiteline}></div>
            <div className={container.sublist}>
              <div className={css.h4}>
                <R1 className={css.listicon} />
                มีการแสดง
              </div>
              <div className={css.h4}>
                {" "}
                <R2 className={css.listicon} />
                ห้องน้ำ
              </div>
              <div className={css.h4}>
                {" "}
                <R3 className={css.listicon} />
                มีการจัดซุ้ม
              </div>
            </div>
          </div>
          <div className={container.list2}>
            <p className={css.h2}>สัญลักษณ์ซุ้ม</p>
            <div className={css.whiteline}></div>
            <div className={container.sublist}>
              <div className={css.h4}>
                {" "}
                <R4 className={css.listicon} />
                สายการเรียน
              </div>
              <div className={css.h4}>
                {" "}
                <R6 className={css.listicon} />
                Gifted
              </div>
              <div className={css.h4}>
                {" "}
                <R8 className={css.listicon} />
                ชมรม
              </div>
              <div className={css.h4}>
                {" "}
                <R5 className={css.listicon} />
                องค์กรณ์ภายใน
              </div>
              <div className={css.h4}>
                {" "}
                <R7 className={css.listicon} />
                องค์กรณ์ภายนอก
              </div>
            </div>
          </div>
        </div>

        <div className={container.Allbox}>
          <div className={container.grid}>
            {itemLists.map((item, index) => {
              const isMatch = IsmatchesList(item);
              if (!isMatch) return null;

              return (
                <div key={index} className={container.smallBox}>
                  <p className={typeClassMap[item.type]}>{item.num}</p>
                  <p className={css.p}>{item.name}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapPage;
