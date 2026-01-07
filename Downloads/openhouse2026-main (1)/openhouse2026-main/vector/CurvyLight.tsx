import React from "react";
import type { FC } from "react";

const CurvyLight: FC<{
  className?: string;
}> = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      viewBox="0 0 532 2415"
      fill="none"
    >
      <mask
        id="mask0_7167_9801"
        style={{ mixBlendMode: "plus-lighter" }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="532"
        height="2415"
      >
        <rect width="531.762" height="2414.35" fill="#D9D9D9" />
      </mask>
      <g mask="url(#mask0_7167_9801)">
        <path
          d="M-89.3405 -11.6942C2.12238 -350.828 127.316 -816.932 127.316 -816.932H467.221V-217.304C467.221 -217.304 454.896 -120.643 424.084 -11.6942C393.272 97.2546 351.433 182.447 319.648 249.619C287.863 316.79 225.59 418.367 177.913 543.699C130.235 669.031 83.5309 827.129 94.2339 1041.75C104.937 1256.37 194.454 1471.81 276.835 1689.71C359.217 1907.61 449.837 2088.47 471.762 2303.89V2978.25H-47.5012V2476.93C-47.5012 2476.93 -145.84 2221.55 -140.975 2007.75C-136.11 1793.94 -47.5012 1256.37 -47.5012 1256.37L-89.3405 825.491C-89.3405 825.491 -180.803 327.439 -89.3405 -11.6942Z"
          fill="url(#paint0_linear_7167_9801)"
          fill-opacity="0.5"
        />
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_7167_9801"
          x1="191.211"
          y1="-67.9615"
          x2="191.211"
          y2="2440.83"
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
