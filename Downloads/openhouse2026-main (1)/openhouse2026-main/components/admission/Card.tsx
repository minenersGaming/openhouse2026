import React from "react";
import type { FC } from "react";

const Card: FC<{ header?: string; element?: any }> = ({ header, element }) => {
  return (
    <>
      <div className="flex flex-col items-start justify-start my-1">
        <p className="text-[#F3E09D] text-xs lg:text-lg ml-3 p-1">{header}</p>
        {header === "7 มี.ค. 2569" && (
          <div className="absolute flex justify-center items-center rounded-[20px] translate-x-[220px] lg:translate-x-[480px] rotate-[6.7deg] translate-y-[15px] lg:translate-y-[25px] font-bold text-red px-2 bg-linear-to-r from-[#F08054] to-[#F8B044] drop-shadow-xl">
            <p className="text-white text-shadow-xl text-md lg:text-xl">
              D-DAY!
            </p>
          </div>
        )}
        <div className=" bg-linear-to-r from-[#0B1855] to-[#042284] px-5 pb-2 pt-2 w-[280px] lg:w-[540px] h-auto rounded-[8px] items-center">
          {element}
        </div>
      </div>
    </>
  );
};

export default Card;
