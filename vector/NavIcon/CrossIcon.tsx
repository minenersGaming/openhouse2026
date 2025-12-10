import React from "react";
import type { FC } from "react";

const CrossIcon: FC<{
  className?: string;
}> = ({ className }) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 25 25"
      fill="none"
    >
      <path
        d="M2.57067 2.08398L22.5386 22.0519M22.0519 2.08398L2.08398 22.0519"
        stroke="white"
        stroke-
        stroke-linecap="round"
      />
    </svg>
  );
};

export default CrossIcon;
