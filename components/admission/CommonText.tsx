import React from "react";
import type { FC } from "react";

const CommonText: FC<{ header?: string; element?: string }> = ({
  header,
  element,
}) => {
  return (
    <div className="flex flex-col -space-y-1">
      <p className="text-[#F4F2C4] font-bold text-lg lg:text-4xl">{header}</p>
      <p className="text-[#F4F2C4] text-xs lg:text-md lg:my-2">{element}</p>
    </div>
  );
};
export default CommonText;
