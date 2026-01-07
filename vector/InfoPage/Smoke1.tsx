import React from "react";
import type { FC } from "react";

const Smoke1: FC<{
  className?: string;
}> = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      viewBox="0 0 1261 1892"
      fill="none"
    >
      <g style={{ mixBlendMode: "plus-lighter" }} opacity="0.52">
        <path
          d="M1189.21 810.229C1613.53 1535.93 0.000851965 1891.52 0.000851965 1891.52L15.103 1503.08C268.067 1411.7 540.894 1283.14 743.462 1106.06C460.442 1166.15 305.449 1145.46 32.3457 1059.6L138.196 5.39258e-05C138.196 5.39258e-05 598.439 59.134 336.539 632.354C336.539 632.354 980.522 453.317 1189.21 810.229Z"
          fill="url(#paint0_linear_6642_6839)"
        />
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_6642_6839"
          x1="278.033"
          y1="176.789"
          x2="629.736"
          y2="1725.31"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#499FEE" stopOpacity="0" />
          <stop offset="1" stopColor="#9CD6FF" stopOpacity="0.27" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default Smoke1;
