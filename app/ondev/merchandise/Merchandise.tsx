"use client";

import Box from "@/components/merchandise/Box";
import BackIcon from "@/components/merchandise/BackIcon";
import Card from "@/components/merchandise/Card";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import Beam from "@/components/merchandise/Beam";

const valid = ["0", "1", "2", "3"];

const SampleImg =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOeKKhUS-RWX12esBlBAtUvR38Uo6ZLbOmAg&s";
const Samp2 =
  "https://images.emojiterra.com/google/android-12l/512px/1f62d.png";

const ImgData = [
  [SampleImg, Samp2, SampleImg],
  [Samp2, SampleImg, SampleImg],
  [SampleImg, SampleImg, Samp2],
  [SampleImg, SampleImg, Samp2],
];

const TextData = [
  ["KEYCHAIN", "SUBTITLE1", "67", "งานเริ่มไฟไหม้อีกละ"],
  ["ANSWER BOOK", "SUBTITLE2", "67", "งานเริ่มไฟไหม้อีกละ"],
  ["POSTCARD", "SUBTITLE3", "67", "งานเริ่มไฟไหม้อีกละ"],
  ["STICKER", "SUBTITLE4", "67", "งานเริ่มไฟไหม้อีกละ"],
];

const RecommendBar = [
  [1, 2, 3],
  [0, 2, 3],
  [0, 1, 3],
  [0, 1, 2],
];

export default function Merchandise() {
  const searchParams = useSearchParams();
  const params = searchParams.get("item");
  const [page, setPage] = useState(0);

  function prevPage() {
    setPage(page === 0 ? 2 : page - 1);
  }

  function nextPage() {
    setPage(page === 2 ? 0 : page + 1);
  }

  if (valid.includes(params ?? "")) {
    const index = Number(params);

    return (
      <div className="w-full bg-linear-to-t from-[#E5C675] to-[#F4F2C3] flex flex-col justify-center  items-center">
        <Beam className="absolute h-full right-0" />
        <div className="py-20 md:py-[10%] w-[90vw] md:w-[50vw] z-67">
          <div className="flex w-full flex-row justify-start items-center">
            <a
              href="./merchandise?item=none"
              className=" flex flex-row justify-start items-center hover:scale-110 transition-all duration-400"
            >
              <BackIcon className="w-5 mr-1" />
              <p className="text-md font-semibold text-[#042284]">ย้อนกลับ</p>
            </a>
          </div>
          <div className="flex flex-col md:flex-row justify-center md:justify-between items-center md:items-start w-full">
            <div>
              <div className="flex flex-row justify-between items-center w-full mt-[10%] mb-[4%]">
                <p
                  onClick={prevPage}
                  className="text-2xl cursor-pointer md:text-4xl opacity-51 font-bold text-[#04217F]"
                >
                  {page === 0 ? " " : "<"}
                </p>

                {/* CAROUSEL */}
                <div className="overflow-hidden w-[70vw] md:w-[30vw] mx-2">
                  <div
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{
                      transform: `translateX(-${page * 100}%)`,
                    }}
                  >
                    {ImgData[Number(params)].map((img, i) => (
                      <img
                        key={i}
                        src={img}
                        className="w-[70vw] md:w-[30vw] rounded-[20px] aspect-square shrink-0"
                      />
                    ))}
                  </div>
                </div>

                <p
                  onClick={nextPage}
                  className="text-2xl md:text-4xl opacity-51 cursor-pointer font-bold text-[#04217F]"
                >
                  {page === 2 ? " " : ">"}
                </p>
              </div>

              <div className="flex flex-col w-[75vw] md:w-97/100  p-2 pl-5">
                <div className="flex flex-row justify-between w-full">
                  <p className="text-[#04217F] text-xl sm:text-3xl md:text-4xl font-bold font-noto-sans-thai">
                    {TextData[Number(params)][0]}
                  </p>
                  <p className="text-[#04217F] text-xl sm:text-3xl  md:text-4xl font-bold ">{`฿${
                    TextData[Number(params)][2]
                  }`}</p>
                </div>
                <p className="text-[#04217F] text-sm sm:text-lg md:text-xl font-bold font-noto-sans-thai ">
                  {TextData[Number(params)][1]}
                </p>
              </div>
              <div className="text-[#04217F] mt-1 ml-[3%] md:-ml-[-2.9%] w-[40vw] items-start">
                <p className="text-xs font-normal sm:text-md md:text-lg font-noto-sans-thai">
                  {TextData[Number(params)][3]}
                </p>
              </div>
            </div>
            <div className="flex flex-col w-7/10 md:w-1/7 justify-start items-start mxt-[5%]">
              <p className="font-medium text-sm md:text-[13px] lg:text-xl py-1 md:py-3 text-[#04217F] ">
                สินค้าอื่น ๆ
              </p>
              <div className="flex flex-row md:flex-col space-x-2 md:space-y-2">
                <Card
                  img={ImgData[RecommendBar[Number(params)][0]][0]}
                  text={TextData[RecommendBar[Number(params)][0]][0]}
                  item={RecommendBar[Number(params)][0]}
                />
                <Card
                  img={ImgData[RecommendBar[Number(params)][1]][0]}
                  text={TextData[RecommendBar[Number(params)][1]][0]}
                  item={RecommendBar[Number(params)][1]}
                />
                <Card
                  img={ImgData[RecommendBar[Number(params)][2]][0]}
                  text={TextData[RecommendBar[Number(params)][2]][0]}
                  item={RecommendBar[Number(params)][2]}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full bg-linear-to-t from-[#E5C675] to-[#F4F2C3]">
      <Beam className="absolute h-full right-0" />
      <div className="py-20  sm:py-[10%] w-full flex flex-col justify-center items-center">
        <div className="flex flex-col w-4/5 py-2">
          <p className="text-[#0020A9] text-4xl md:text-7xl text-center font-bold ">
            สินค้าที่ระลึก
          </p>
          <p className="text-[#0020A9] text-center text-xs md:text-lg font-medium mt-2">
            สามารถซื้อสินค้าได้ที่ซุ้ม
          </p>
          <p className="text-[#0020A9] text-center font-medium text-xs md:text-lg">
            คณะกรรมการงานกิจกรรมพัฒนาผู้เรียน (กช.)
          </p>
          <p className="text-[#0020A9] text-center font-medium text-xs md:text-lg">
            บริเวณหน้าตึก 80 ปี
          </p>
        </div>
        <div className="flex flex-col md:flex-row space-x-4  md:space-y-0 space-y-2 mt-4 intro-fade-down">
          <Box
            img={ImgData[0][0]}
            head={TextData[0][0]}
            desc={TextData[0][3]}
            price={TextData[0][2]}
            item={0}
          />
          <Box
            img={ImgData[1][0]}
            head={TextData[1][0]}
            desc={TextData[1][3]}
            price={TextData[1][2]}
            item={1}
          />
          <Box
            img={ImgData[2][0]}
            head={TextData[2][0]}
            desc={TextData[2][3]}
            price={TextData[2][2]}
            item={2}
          />
          <Box
            img={ImgData[3][0]}
            head={TextData[3][0]}
            desc={TextData[3][3]}
            price={TextData[3][2]}
            item={3}
          />
        </div>
      </div>
    </div>
  );
}
