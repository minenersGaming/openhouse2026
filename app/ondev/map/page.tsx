"use client";

import { useState } from "react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { Noto_Sans_Thai } from "next/font/google";
import { mapItems, MapItem } from "@/components/map/Element";
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

const CirW = "h-9 w-9 text-[17.937px] md:h-7 md:w-7 md:text-[14px]";

const css = {
  header:
    "text-[#F3E19D] text-center font-inter font-bold leading-normal drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]" +
    "  text-[30px] sm:text-[32px] md:text-[35px] xl:text-[89.118px] ",
  header2:
    "text-[#F3E19D] text-center font-normal leading-normal tracking-[4.308px] drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] " +
    " text-[18px] sm:text-[20px] md:text-[24px] xl:text-[43.083px]  ",
  button: " px-3 py-1 md:px-5 lg:px-7 lg:py-1 ",
  buttonText: " text-[13px] sm:text-[14px] md:text-[16px] xl:text-[24px] ",
  searchBox:
    " w-full bg-white rounded-[30px] text-[#112E90] font-noto-sans-thai " +
    " pl-[40px] text-[19px] sm:text-[19px] lg:text-[24px] ",
  searchIcon: "absolute left-[27px] w-[24px] h-auto ",
  h2:
    " text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.25)] font-noto-sans-thai font-bold leading-normal " +
    " text-[24px] lg:text-[39.294px] ",
  whiteline: " h-[2px] bg-white " + " w-[150px] mb-4 lg:w-[400px] ",
  listicon: " h-auto w-[25px] ",
  h4:
    " flex items-center gap-2 text-white font-['Noto_Sans_Thai'] font-semibold leading-normal " +
    " text-[19px] lg:text-[22.997px] ",
  p:
    " text-white text-center font-noto-sans-thai leading-normal " +
    " text-[16px] md:text-[12px] lg:text-[17.937px] ",
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
    " flex flex-col justify-center border items-center gap-3 " +
    " my-4 sm:my-6 ",
  searchBox:
    " relative border flex items-center justify-center " +
    " w-[350px] px-4 sm:w-[420px] md:w-[560px] lg:w-[60vw] my-4 md:my-5  ",
  list: " flex border flex-col " + "mb-6 w-[180px] md:w-[270px] ",
  sublist: "flex flex-col md:w-full md:flex-row md:flex-wrap gap-1 lg:gap-2 ",
  Allbox:
    " flex flex-col items-center md:items-start md:flex-row rounded-[26px] bg-[#173083] " +
    " w-[360px] p-5 md:w-[760px] md:py-6 md:px-2 md:mt-4 lg:p-5 lg:mt-5 lg:w-[1200px] ",
  col: "flex border flex-col gap-3 " + " w-[300] ",
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
      <div className="w-full border flex flex-col items-center">
        <p className={css.header}>แผนผังงาน</p>
        <p
          className={css.header2}
          style={{ fontFamily: "var(--font-bethany)" }}
        >
          TRIAMUDOM OPEN HOUSE 2026
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
        <div className="relative border aspect-[555/884] w-[375px] sm:h-[663px] sm:w-[416.25px] md:h-[884px] md:w-[555px] lg:h-[1105px] lg:w-[693.75px] xl:h-[1326px] xl:w-[832.5px] 2xl:h-[1547px] 2xl:w-[971.25px] overflow-visible touch-none">
          <TransformWrapper
            minScale={1}
            maxScale={4}
            wheel={{ step: 0.15 }}
            pinch={{ step: 5 }}
            doubleClick={{ disabled: true }}
            centerOnInit={false}
            limitToBounds={false}
          >
            <TransformComponent
              wrapperStyle={{
                width: "100%",
                height: "100%",
                overflow: "hidden",
                border: "2px solid red", // Add border here
              }}
              contentStyle={{
                overflow: "visible",
                border: "2px solid blue", // Or add border here
              }}
            >
              <div className="absolute -top-[297px] -left-[187px] scale-[0.675] sm:scale-75 sm:-top-[332px] sm:-left-[210px] md:scale-100 md:-top-[443px] md:-left-[280px] lg:scale-125 lg:-top-[553px] lg:-left-[350px] xl:scale-150 xl:-top-[664px] xl:-left-[417px] 2xl:scale-175 2xl:-top-[775px] 2xl:-left-[490px] origin-top-left w-[555px] h-[884px] overflow-visible">
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

        <div className="flex justify-center border mt-10">
          <div className={container.list}>
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
          <div className={container.list}>
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
