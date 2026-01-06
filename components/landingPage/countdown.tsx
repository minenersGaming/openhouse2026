"use client";

import { useEffect, useState } from "react";
import Loading from "../Loading";
import { OPH_FIRST_TIME_TIMESTAMP } from "@/config/time";

const zeroPadding = (n: number) => String(n).padStart(2, "0");

const Style = {
  pad: "w-17 h-17 flex items-center justify-center bg-white rounded-[14px] shadow-[1.904px_3.808px_7.616px_rgba(0,0,0,0.25)]",
  number:
    "font-bold text-4xl bg-linear-to-r from-[#042284] to-[#457BCA] bg-clip-text text-transparent",
  subtext: "text-center text-white/60 mt-2",
};

const Countdown = () => {
  const [time, setTime] = useState({
    days: 99,
    hours: 99,
    minutes: 99,
    seconds: 99,
  });

  useEffect(() => {
    const tick = () => {
      // Fix the time open if it not 7 am
      const diff = Math.floor((OPH_FIRST_TIME_TIMESTAMP - Date.now()) / 1000);

      if (diff <= 0) {
        setTime({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(diff / 86400);
      const hours = Math.floor((diff % 86400) / 3600);
      const minutes = Math.floor((diff % 3600) / 60);
      const seconds = diff % 60;

      setTime({ days, hours, minutes, seconds });
    };

    tick();
    const interval = setInterval(tick, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-row justify-between space-x-2 lg:space-x-3 ">
      {[
        { label: "Day", value: time.days },
        { label: "Hour", value: time.hours },
        { label: "Min", value: time.minutes },
        { label: "Sec", value: time.seconds },
      ].map(({ label, value }) => (
        <div key={label} className="flex flex-col">
          <div className={Style.pad}>
            <div className={Style.number} suppressHydrationWarning>
              {value != 99 ? zeroPadding(value) : <Loading />}
            </div>
          </div>
          <p className={Style.subtext}>{label}</p>
        </div>
      ))}
    </div>
  );
};

export default Countdown;
