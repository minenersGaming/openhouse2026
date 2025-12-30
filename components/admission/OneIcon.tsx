import { isEmptyArray } from "formik";
import { stringify } from "querystring";
import React from "react";
import type { FC, ReactNode } from "react";
const SpecialWord = [
  "",
  "สิ่งของนอกเหนือจากที่กล่าวไปข้างต้น ไม่สามารถนำเข้าห้องสอบได้ เช่น",
  "อิมแพ็ค เมืองทองธานี จ.นนทบุรี",
];
const OneIcon: FC<{
  header?: string;
  icon?: ReactNode;
  description?: string;
  list: Array<string>;
}> = ({ header, icon, description, list }) => {
  return (
    <div
      className={`flex flex-row justify-start items-start" ${
        (description ?? "") === SpecialWord[1] ? "mt-4" : ""
      }`}
    >
      <div>{icon}</div>
      <div className="flex flex-col">
        <p
          className={
            SpecialWord.includes(description ?? "")
              ? `text-white font-semibold text-md lg:text-lg `
              : `text-[#F4F2C4] font-bold text-lg lg:text-4xl`
          }
        >
          {header}
        </p>
        <p
          className={
            (description ?? "") === SpecialWord[1]
              ? `text-white text-[10px]`
              : (description ?? "") === SpecialWord[2]
              ? "text-[#F4F2C4] text-xs lg:text-sm "
              : `text-[#F4F2C4] text-xs lg:text-lg `
          }
        >
          {description}
        </p>
        <ul
          className={`list-disc pl-5 pt-2 grid ${
            SpecialWord.includes(description ?? "") ? "grid-cols-2" : ""
          } gap-x-4`}
        >
          {list.map((item, index) => (
            <li
              id={`${index}`}
              className="text-[#F4F2C4] text-xs lg:text-sm py-[2px]"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default OneIcon;
