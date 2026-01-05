import React from "react";
import type { FC } from "react";

const Smoke2: FC<{
  className?: string;
}> = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      viewBox="0 0 1252 1893"
      fill="none"
    >
      <g style={{ mixBlendMode: "plus-lighter" }} opacity="0.35">
        <path
          d="M58.3475 761.637C-318.232 1466.64 1251.27 1892.49 1251.27 1892.49L1219.58 1504.44C971.942 1402.14 703.54 1261.89 500.654 1076.35C775.849 1148.76 924.191 1134.97 1183.39 1061.4L1034.69 -2.97409e-06C1034.69 -2.97409e-06 594.093 38.6571 871.602 621.884C871.602 621.884 243.556 414.906 58.3475 761.637Z"
          fill="url(#paint0_linear_6642_6840)"
        />
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_6642_6840"
          x1="907.832"
          y1="170.137"
          x2="493.711"
          y2="1658.94"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#499FEE" stop-opacity="0" />
          <stop offset="1" stop-color="#9CD6FF" stop-opacity="0.27" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default Smoke2;
