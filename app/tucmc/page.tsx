"use client";
import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";

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
  Box2: "w-[90%] flex flex-col",
};
type tucmcType = {
  AllBooking: number;
  AllEntry: number;
  Date1EntryAll: number;
  Date1EntryDoorP: number;
  Date1EntryDoorH: number;
  Date1EntryDoorB: number;

  Date2EntryAll: number;
  Date2EntryDoorP: number;
  Date2EntryDoorH: number;
  Date2EntryDoorB: number;
};

async function fetchTucmc(): Promise<tucmcType> {
  const res = await fetch("/api/tucmc", {
    method: "GET",
    credentials: "include", // IMPORTANT for Better Auth cookies
  });

  if (!res.ok) {
    throw new Error("Failed to fetch tucmc");
  }

  const json = await res.json();
  return json.data;
}

const Backend = () => {
  const [date, setDate] = useState<"FRI 9 JAN" | "SAT 10 JAN">("FRI 9 JAN");
  const { isPending, isError, data, error } = useQuery({
    queryKey: ["tucmc"],
    queryFn: fetchTucmc,
  });

  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setNow(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const weekday = now.toLocaleDateString("th-TH", {
    timeZone: "Asia/Bangkok",
    weekday: "long",
  });

  const dates = now.toLocaleDateString("th-TH", {
    timeZone: "Asia/Bangkok",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const time = now
    .toLocaleTimeString("th-TH", {
      timeZone: "Asia/Bangkok",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    })
    .replace(/:/g, " : ");

  if (isPending) {
    return (
      <div className="w-screen h-screen bg-[linear-gradient(0deg,#0B1855_-3.97%,#042284_35.32%,#3450B0_100%),linear-gradient(180deg,#042284_1.28%,#3450B0_11.64%,#F3E09D_29.58%),linear-gradient(180deg,#457BCA_-6.32%,#3450B0_54.58%,#042284_100%)] flex justify-center items-center text-[30px]">
        Loading...
      </div>
    );
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  return (
    <div className="w-full bg-[linear-gradient(0deg,#0B1855_-3.97%,#042284_35.32%,#3450B0_100%),linear-gradient(180deg,#042284_1.28%,#3450B0_11.64%,#F3E09D_29.58%),linear-gradient(180deg,#457BCA_-6.32%,#3450B0_54.58%,#042284_100%)] ">
      <div className=" w-[500px] mx-auto flex flex-col ">
        <div className={" bg-white/10" + container.Box2}>
          <p>วัน{weekday}</p>
          <p>{dates}</p>
          <p>{time}</p>
        </div>
        <div className={container.Box2 + " bg-white "}>
          <p>จำนวนคนลงทะเบียน</p>
          <p>{data.AllBooking}</p>
        </div>
        <div className={container.Box2 + " bg-white "}>
          <p>จำนวนคนเข้างาน</p>
          <p>{data.AllEntry}</p>
        </div>
        <div className="w-full overflow-hidden">
          <div
            className={
              "z-10 relative mx-auto bg-[#0B1855]/30 cursor-pointer" +
              css.ButtonAll
            }
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
              {/* add day 1 data */}
              <div className={container.Box2 + " bg-white "}>
                <p>ผู้เข้าร่วมทั้งหมด</p>
                <p>{data.Date1EntryAll}</p>
              </div>

              <div className={container.Box2 + " bg-white "}>
                <p>ประตูพญาไท</p>
                <p>{data.Date1EntryDoorP}</p>
              </div>

              <div className={container.Box2 + " bg-white "}>
                <p>ประตูอังรีดูนังต์</p>
                <p>{data.Date1EntryDoorH}</p>
              </div>

              <div className={container.Box2 + " bg-white "}>
                <p>ประตูตึก 50 ปี</p>
                <p>{data.Date1EntryDoorB}</p>
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
              {/*add day 2 data */}
              {/* add day 1 data */}
              <div className={container.Box2 + " bg-white "}>
                <p>ผู้เข้าร่วมทั้งหมด</p>
                <p>{data.Date2EntryAll}</p>
              </div>

              <div className={container.Box2 + " bg-white "}>
                <p>ประตูพญาไท</p>
                <p>{data.Date2EntryDoorP}</p>
              </div>

              <div className={container.Box2 + " bg-white "}>
                <p>ประตูอังรีดูนังต์</p>
                <p>{data.Date2EntryDoorH}</p>
              </div>

              <div className={container.Box2 + " bg-white "}>
                <p>ประตูตึก 50 ปี</p>
                <p>{data.Date2EntryDoorB}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Backend;
