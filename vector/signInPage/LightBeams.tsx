import React from "react";
import type { FC } from "react";

const Lamp: FC<{
  className?: string;
}> = ({ className }) => {
  return (
    <svg
      className={`${className}`}
      viewBox="0 0 1048 1920"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        opacity="0.32"
        d="M0 1867L846.217 -51H1126.51L1262 359.358L670.667 1867H0Z"
        fill="url(#paint0_linear_1723_518)"
      />
      <path
        opacity="0.33"
        d="M371 1938L1217.22 20H1497.51L1633 430.358L1041.67 1938H371Z"
        fill="url(#paint1_linear_1723_518)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_1723_518"
          x1="899.498"
          y1="294.54"
          x2="41.8845"
          y2="844.983"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F4F2C4" stopOpacity="0.82" />
          <stop offset="1" stopColor="#F3E19D" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_1723_518"
          x1="1706.79"
          y1="-470.264"
          x2="-237.791"
          y2="780.32"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F4F2C4" stopOpacity="0.82" />
          <stop offset="1" stopColor="#F3E19D" stopOpacity="0.18" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default Lamp;

/*

style={{ maskType: 'alpha' }}

<g style={{ mixBlendMode: 'soft-light' }}>

className={`${className}`}

 */
