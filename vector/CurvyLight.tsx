import React from "react";
import type { FC } from "react";

const CurvyLight: FC<{
  className?: string;
}> = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`${className}`}
      viewBox="0 0 532 1432"
      fill="none"
    >
      <mask
        id="mask0_5801_2698"
        style={{ maskType: "alpha" }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="532"
        height="1432"
      >
        <rect width="531.762" height="1431.14" fill="#D9D9D9" />
      </mask>
      <g mask="url(#mask0_5801_2698)">
        <path
          d="M-89.3405 -6.9317C2.12238 -207.959 127.316 -484.25 127.316 -484.25H467.221V-128.811C467.221 -128.811 454.896 -71.5129 424.084 -6.9317C393.272 57.6495 351.433 108.149 319.648 147.966C287.863 187.783 225.59 247.994 177.913 322.287C130.235 396.579 83.5308 490.295 94.2339 617.515C104.937 744.735 194.454 872.441 276.835 1001.6C359.217 1130.77 449.837 1237.98 471.762 1365.67V1765.41H-47.5012V1468.24C-47.5012 1468.24 -145.84 1316.86 -140.975 1190.13C-136.11 1063.39 -47.5012 744.735 -47.5012 744.735L-89.3405 489.324C-89.3405 489.324 -180.803 194.096 -89.3405 -6.9317Z"
          fill="url(#paint0_linear_5801_2698)"
          fill-opacity="0.5"
        />
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_5801_2698"
          x1="191.211"
          y1="-93.9211"
          x2="191.21"
          y2="1707.58"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#F4F2C3" />
          <stop offset="1" stop-color="#F4F2C3" stop-opacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default CurvyLight;
