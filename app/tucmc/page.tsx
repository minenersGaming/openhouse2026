"use client";
import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";

const css = {
  header1:
    " z-10 text-[#F3E19D] text-nowrap font-noto-sans-thai font-bold text-center " +
    " text-[36px] leading-[37px] sm:text-[55px] sm:leading-[50px] md:text-[60px] md:leading-[55px] lg:text-[75px] lg:leading-[70px] 2xl:text-[80.784px] 2xl:leading-[75px]",
  header2:
    " z-10  text-[#F3E19D] text-nowrap font-noto-sans-thai font-semibold leading-normal " +
    " text-[30px] mb-3 sm:text-[30px] sm:mb-4 md:mb-5 md:text-[40px] md:mb-7 lg:text-[40px] lg:mb-8 2xl:text-[50px] 2xl:mb-10 ",
  ButtonText:
    " z-10 text-[#122F91] font-noto-sans-thai font-bold [text-shadow:0_3.419px_5.699px_rgba(0,0,0,0.38)] " +
    " text-[21px] sm:text-[24px] md:text-[25px] lg:text-[39px] 2xl:text-[45.65px] ",
  ButtonAll:
    " w-[290px] h-[45px] rounded-[15px] sm:w-[330px] sm:h-[52px] sm:rounded-[18px] md:w-[340px] md:h-[55px] md:rounded-[20px] lg:w-[480px] lg:h-[80px] lg:rounded-[18.034px] 2xl:w-[574.023px] 2xl:h-[88.482px] 2xl:rounded-[18.034px] ",
  ButtonBox:
    " w-[145px] rounded-[15px] sm:w-[165px] sm:rounded-[18px] md:w-[170px] md:rounded-[20px] lg:w-[240px] lg:rounded-[18.034px] 2xl:w-[291px] 2xl:rounded-[18.034px] ",
  h1:
    "  font-noto-sans-thai font-bold " +
    " translate-y-[5.5px] text-[34px] sm:text-[45px] md:text-[40px] lg:text-[44.967px] 2xl:text-[54.967px] ",
  p:
    " font-noto-sans-thai border-0 font-semibold " +
    " text-[17px] leading-[18px] sm:text-[21px] sm:leading-[23px] md:text-[22px] md:leading-[26px] lg:text-[26px] lg:leading-[30px] 2xl:text-[29.271px] 2xl:leading-[33.669px] ",
};
const container = {
  MdAll:
    " w-screen overflow-hidden relative bg-[linear-gradient(0deg,#0B1855_-3.97%,#042284_35.32%,#3450B0_100%),linear-gradient(180deg,#042284_1.28%,#3450B0_11.64%,#F3E09D_29.58%),linear-gradient(180deg,#457BCA_-6.32%,#3450B0_54.58%,#042284_100%)]  " +
    " py-25 sm:py-30 md:py-30 lg:py-40 2xl:py-40 ",
  Box1: " flex flex-col " + " gap-4 md:gap-4 lg:gap-4 2xl:gap-6 ",
  Box2: "w-[80%] rounded-xl p-4 my-4 flex flex-col justify-center",
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
      <div className="w-screen h-screen text-white font-bold bg-[linear-gradient(0deg,#0B1855_-3.97%,#042284_35.32%,#3450B0_100%),linear-gradient(180deg,#042284_1.28%,#3450B0_11.64%,#F3E09D_29.58%),linear-gradient(180deg,#457BCA_-6.32%,#3450B0_54.58%,#042284_100%)] flex justify-center items-center text-[30px]">
        Loading...
      </div>
    );
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }
  {
    /**"
  text-[#F3E19D]
  text-center
  font-['Noto_Sans_Thai']
  text-[32.574px]
  font-semibold
  leading-[33.951px]
  "
  text-[#F3E19D]
  text-center
  font-['Noto_Sans_Thai']
  text-[54.512px]
  font-bold
  leading-[56.816px]
"
" */
  }
  return (
    <div className={container.MdAll}>
      <div className="w-[80vw] md:w-[60vw] border-0 overflow-visible mx-auto flex flex-col justify-center items-center ">
        <div className="w-full flex flex-col justify-center items-center">
          <p className={css.header1}>Triam Udom</p>
          <p className={css.header1}>Open House 2026</p>
          <p className={css.header2}>ระบบหลังบ้าน กช.</p>
        </div>
        <div
          className={
            " bg-white/30 " +
            "text-white  text-center  font-['Noto_Sans_Thai']  text-[53.544px] font-bold  leading-[55.807px] " +
            container.Box2
          }
        >
          <p className={css.h1 + " text-white mb-2 "}>{weekday}</p>
          <p className={css.p + " text-white "}>{dates}</p>
          <p className={css.h1 + "text-white mt-3 "}>{time}</p>
        </div>
        <div className={container.Box2 + " bg-white "}>
          <p className={css.p + " text-[#122F91] "}>จำนวนคนลงทะเบียน</p>
          <p className={css.h1 + " text-[#122F91] "}>{data.AllBooking} คน</p>
        </div>
        <div className={container.Box2 + " bg-white "}>
          <p className={css.p + " text-[#122F91] "}>จำนวนคนเข้างาน</p>
          <p className={css.h1 + " text-[#122F91] "}>{data.AllEntry} คน</p>
        </div>
        <div className="w-full overflow-hidden">
          <div
            className={
              "z-10 relative mt-5 my-2 mx-auto bg-[#E6E6E6] cursor-pointer" +
              css.ButtonAll
            }
          >
            {/* Left date label */}
            <button
              onClick={() => setDate("FRI 9 JAN")}
              className={
                ` ${
                  date === "FRI 9 JAN"
                    ? "text-[#122F91] opacity-0"
                    : "text-[#122F91] opacity-60"
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
                ` z-10 absolute top-1/2 -translate-y-1/2 left-0
                bg-white shadow-xl
                transition-transform duration-300
                flex items-center justify-center h-[90%]
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
                    ? "text-[#122F91] opacity-0"
                    : "text-[#122F91] opacity-60"
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
                <p className={css.p + " text-[#122F91] "}>ผู้เข้าร่วมทั้งหมด</p>
                <p className={css.h1 + " text-[#122F91] "}>
                  {data.Date1EntryAll} คน
                </p>
              </div>

              <div className={container.Box2 + " bg-white "}>
                <p className={css.p + " text-[#122F91] "}>ประตูพญาไท</p>
                <p className={css.h1 + " text-[#122F91] "}>
                  {data.Date1EntryDoorP} คน
                </p>
              </div>

              <div className={container.Box2 + " bg-white "}>
                <p className={css.p + " text-[#122F91] "}>ประตูอังรีดูนังต์</p>
                <p className={css.h1 + " text-[#122F91] "}>
                  {data.Date1EntryDoorH} คน
                </p>
              </div>

              <div className={container.Box2 + " bg-white "}>
                <p className={css.p + " text-[#122F91] "}>ประตูตึก 50 ปี</p>
                <p className={css.h1 + " text-[#122F91] "}>
                  {data.Date1EntryDoorB} คน
                </p>
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
                <p className={css.p + " text-[#122F91] "}>ผู้เข้าร่วมทั้งหมด</p>
                <p className={css.h1 + " text-[#122F91] "}>
                  {data.Date2EntryAll} คน
                </p>
              </div>

              <div className={container.Box2 + " bg-white "}>
                <p className={css.p + " text-[#122F91] "}>ประตูพญาไท</p>
                <p className={css.h1 + " text-[#122F91] "}>
                  {data.Date2EntryDoorP} คน
                </p>
              </div>

              <div className={container.Box2 + " bg-white "}>
                <p className={css.p + " text-[#122F91] "}>ประตูอังรีดูนังต์</p>
                <p className={css.h1 + " text-[#122F91] "}>
                  {data.Date2EntryDoorH} คน
                </p>
              </div>

              <div className={container.Box2 + " bg-white "}>
                <p className={css.p + " text-[#122F91] "}>ประตูตึก 50 ปี</p>
                <p className={css.h1 + " text-[#122F91] "}>
                  {data.Date2EntryDoorB} คน
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Backend;
