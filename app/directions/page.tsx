"use client";

import { useEffect, useState } from "react";
import BTS from "@/vector/directions/BTS";
import Bus from "@/vector/directions/Bus";
import MRT from "@/vector/directions/MRT";
import P from "@/vector/directions/P";
import Light from "@/vector/directions/Light";

const COLORS = {
  bts: "#C5A064",
  bus: "#EC7A7A",
  mrt: "#001870",
  parking: "#EC7A7A",
};

export default function Directions() {
  const [currentTab, setCurrentTab] = useState<
    "bus" | "bts" | "mrt" | "parking"
  >("bts");
  const [map, setMap] = useState(
    <object
      key={"b"}
      data="/assets/images/directions/bts.svg"
      className="h-[404px] w-full lg:h-[884px] lg:w-[700px]"
    />
  );

  const des = {
    bts: (
      <div className="mt-10 space-y-10">
        <div className="flex space-x-4">
          <p
            style={{ backgroundColor: COLORS[currentTab] }}
            className="flex h-10 w-10 items-center justify-center rounded-full text-2xl font-black"
          >
            1
          </p>
          <div>
            <h2 className="text-xl font-semibold">
              เดินจากสถานี BTS สยาม
              <br /> หรือ สนามกีฬาฯ
            </h2>
            <p className="text-lg font-light">ฝั่งถนนพญาไท ประมาณ 900 เมตร</p>
          </div>
        </div>
        <div className="flex space-x-4">
          <p
            style={{ backgroundColor: COLORS[currentTab] }}
            className="flex h-10 w-10 items-center justify-center rounded-full text-2xl font-black"
          >
            2
          </p>
          <div>
            <h2 className="text-xl font-semibold">เดินจากสถานี BTS สยาม</h2>
            <p className="text-lg font-light">
              ฝั่งถนนอังรีดูนังต์ ประมาณ 700 เมตร
            </p>
          </div>
        </div>
      </div>
    ),
    bus: (
      <div className="mt-10 space-y-10">
        <div className="flex space-x-4">
          <p
            style={{ backgroundColor: COLORS[currentTab] }}
            className="flex h-10 w-10 items-center justify-center rounded-full text-2xl font-black"
          >
            1
          </p>
          <div>
            <h2 className="text-xl font-semibold">รถประจำทาง</h2>
            <p className="text-lg font-light">
              ลงป้ายรถประจำทางหน้าโรงเรียนเตรียมอุดมฯ
              <br />
              หรือหอพักนิสิตจุฬา
              <br />
              ฝั่งถนนพญาไท
              <br />
              สาย 4-68, 21, 25, 29, 34, 34E, 36, 40, 47
              <br />
              50, 93, 108, 113, 141, 163, 187, 501, 529
            </p>
          </div>
        </div>
        <div className="flex space-x-4">
          <p
            style={{ backgroundColor: COLORS[currentTab] }}
            className="flex h-10 w-10 items-center justify-center rounded-full text-2xl font-black"
          >
            2
          </p>
          <div>
            <h2 className="text-xl font-semibold">รถประจำทาง</h2>
            <p className="text-lg font-light">
              ลงป้ายรถประจำทางหน้าโรงเรียนสาธิตปทุมวัน
              <br />
              หรือคณะสัตวแพทย์ <br />
              ฝั่งถนนอังรีดูนังต์
              <br />
              สาย 16, 21, 21E, 141
            </p>
          </div>
        </div>
      </div>
    ),
    mrt: (
      <div className="mt-10 space-y-10">
        <div className="flex space-x-4">
          <p
            style={{ backgroundColor: COLORS[currentTab] }}
            className="flex h-10 w-10 items-center justify-center rounded-full text-2xl font-black"
          >
            1
          </p>
          <div>
            <h2 className="text-xl font-semibold">เดินจากสถานี MRT สามย่าน</h2>
            <p className="text-lg font-light">ฝั่งถนนพญาไท ประมาณ 800 เมตร</p>
          </div>
        </div>
        <div className="flex space-x-4">
          <p
            style={{ backgroundColor: COLORS[currentTab] }}
            className="flex h-10 w-10 items-center justify-center rounded-full text-2xl font-black"
          >
            2
          </p>
          <div>
            <h2 className="text-xl font-semibold">เดินจากสถานี MRT สามย่าน</h2>
            <p className="text-lg font-light">
              ฝั่งถนนอังรีดูนังต์ ประมาณ 1,200 เมตร
            </p>
          </div>
        </div>
      </div>
    ),
    parking: (
      <div className="mt-10 space-y-10">
        <div className="flex space-x-4">
          <p
            style={{ backgroundColor: COLORS[currentTab] }}
            className="flex h-10 w-10 items-center justify-center rounded-full text-2xl font-black"
          >
            1
          </p>
          <div>
            <h2 className="text-xl font-semibold">อาคารจอดรถ MBK Center</h2>
            <p className="text-lg font-light">
              ค่าบริการ : จอดฟรี 15 นาทีแรก ชั่วโมงต่อไป 20 บาท/ชม.
              <br />
              เวลา : 06.00-21.00 น.
            </p>
          </div>
        </div>
        <div className="flex space-x-4">
          <p
            style={{ backgroundColor: COLORS[currentTab] }}
            className="flex h-10 w-10 items-center justify-center rounded-full text-2xl font-black"
          >
            2
          </p>
          <div>
            <h2 className="text-xl font-semibold">อาคารจอดรถ Siam Scape</h2>
            <p className="text-lg font-light">
              ค่าบริการ : จอดฟรี 15 นาทีแรก ชั่วโมงต่อไป 20-40 บาท/ชม.
              <br />
              เวลา : 08.00-19.00 น.
            </p>
          </div>
        </div>
        <div className="flex space-x-4">
          <p
            style={{ backgroundColor: COLORS[currentTab] }}
            className="flex h-10 w-10 items-center justify-center rounded-full text-2xl font-black"
          >
            3
          </p>
          <div>
            <h2 className="text-xl font-semibold">
              อาคารจอดรถ 2 โรงอาหาร คณะอักษรศาสตร์
            </h2>
            <p className="text-lg font-light">
              ค่าบริการ : 15 บาท/ชม.
              <br />
              เวลา : 06.00-18.00 น.
            </p>
          </div>
        </div>
        <div className="flex space-x-4">
          <p
            style={{ backgroundColor: COLORS[currentTab] }}
            className="flex h-10 w-10 items-center justify-center rounded-full text-2xl font-black"
          >
            4
          </p>
          <div>
            <h2 className="text-xl font-semibold">
              อาคารจอดรถสามย่านมิตรทาวน์
            </h2>
            <p className="text-lg font-light">
              ค่าบริการ : จอดฟรี 2 ชม.แรก ชั่วโมงต่อไป 20-50 บาท/ชม.
              <br />
              เวลา : 06.00-22.00 น.
            </p>
          </div>
        </div>
      </div>
    ),
  };

  useEffect(() => {
    switch (currentTab) {
      case "bts":
        setMap(
          <object
            key={"b"}
            data="assets/images/directions/bts.svg"
            className="h-[404px] w-[100%] lg:h-[884px] lg:w-[700px]"
          />
        );
        break;
      case "bus":
        setMap(
          <object
            key={"a"}
            data="assets/images/directions/bus.svg"
            className="h-[404px] w-[100%] lg:h-[884px] lg:w-[700px]"
          />
        );
        break;
      case "mrt":
        setMap(
          <object
            key={"d"}
            data="assets/images/directions/mrt.svg"
            className="h-[404px] w-[100%] lg:h-[876px] lg:w-[700px]"
          />
        );
        break;
      case "parking":
        setMap(
          <object
            key={"d"}
            data="assets/images/directions/parking.svg"
            className="h-[404px] w-[100%] lg:h-[876px] lg:w-[700px]"
          />
        );
    }
  }, [currentTab]);

  return (
    <main className="relative -mt-20 min-h-screen overflow-hidden bg-gradient-to-r from-[#042284] via-[#3450B0] to-[#457BCA] text-white">
      <div className="absolute right-0 top-20 hidden lg:block">
        <Light className="w-[100vw] hidden" />
      </div>
      <div className="mx-auto max-w-[2200px] pb-24 pt-32">
        {/* การเดินทาง */}
        <div className="relative z-30 mt-4 flex flex-col lg:flex-row w-full justify-center items-center -space-y-4 lg:-space-y-16">
          <div className="relative z-10 xmx-auto min-w-[320px]">{map}</div>
          <div className="flex flex-col items-center justify-center lg:items-center mt-15 lg:mr-16">
            <div className="flex flex-col">
              <h1 className="text-center text-4xl font-extrabold text-white md:text-7xl m-7 drop-shadow-lg">
                การเดินทาง
              </h1>
              <div className="relative z-40 flex items-center justify-center space-x-4">
                <div>
                  <div
                    onClick={() => {
                      setCurrentTab("bus");
                    }}
                    style={{
                      backgroundColor:
                        currentTab === "bus" ? COLORS[currentTab] : "white",
                    }}
                    className="flex h-[60px] w-[60px] cursor-pointer items-center justify-center rounded-full shadow-md md:size-20 xw:size-24"
                  >
                    <Bus currentTab={currentTab} />
                  </div>
                  <h2 className="mt-1 text-center text-xs">รถประจำทาง</h2>
                </div>

                {/* bts */}
                <div>
                  <div
                    onClick={() => {
                      setCurrentTab("bts");
                    }}
                    style={{
                      backgroundColor:
                        currentTab === "bts" ? COLORS[currentTab] : "white",
                    }}
                    className="flex h-[60px] w-[60px] cursor-pointer items-center justify-center rounded-full shadow-md md:size-20 xw:size-24"
                  >
                    <BTS currentTab={currentTab} />
                  </div>

                  <h2 className="mt-1 text-center text-xs">BTS</h2>
                </div>

                {/* mrt */}
                <div>
                  <div
                    onClick={() => {
                      setCurrentTab("mrt");
                    }}
                    style={{
                      backgroundColor:
                        currentTab === "mrt" ? COLORS[currentTab] : "white",
                    }}
                    className="flex h-[60px] w-[60px] cursor-pointer items-center justify-center rounded-full shadow-md md:size-20 xw:size-24"
                  >
                    <MRT currentTab={currentTab} />
                  </div>

                  <h2 className="mt-1 text-center text-xs">MRT</h2>
                </div>

                {/*parking*/}

                <div>
                  <div
                    onClick={() => {
                      setCurrentTab("parking");
                    }}
                    style={{
                      backgroundColor:
                        currentTab === "parking" ? COLORS[currentTab] : "white",
                    }}
                    className="flex h-[60px] w-[60px] cursor-pointer items-center justify-center rounded-full shadow-md md:size-20 xw:size-24"
                  >
                    <P currentTab={currentTab} />
                  </div>
                  <h2 className="mt-1 text-center text-xs">จุดจอดรถ</h2>
                </div>
              </div>
            </div>
            <div className="">{des[currentTab]}</div>
          </div>
        </div>

        {/* Google Maps */}
        <div className="relative z-30 mx-auto mt-14 max-w-[1380px] px-6 py-4">
          <h2 className="mb-8 mt-8 text-center text-2xl font-semibold">
            Google Maps
          </h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.637467491092!2d100.52848511460412!3d13.740385290354828!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29ed3828ba8e5%3A0xf0db3be87e158217!2sTriam%20Udom%20Suksa%20School!5e0!3m2!1sen!2sth!4v1642656766845!5m2!1sen!2sth"
            width="600"
            height="450"
            className="mx-auto aspect-square w-full rounded-lg sm:aspect-video"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </main>
  );
}
