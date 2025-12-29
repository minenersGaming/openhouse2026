import React from "react";
import type { FC } from "react";

const ProgrammeLg: FC<{
  className?: string;
}> = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      viewBox="0 0 278 912"
      fill="none"
    >
      <rect
        y="181.62"
        width="277.95"
        height="729.92"
        fill="url(#paint0_linear_5907_2805)"
      />
      <mask
        id="mask0_5907_2805"
        style={{ maskType: "alpha" }}
        maskUnits="userSpaceOnUse"
        x="12"
        y="0"
        width="254"
        height="912"
      >
        <path
          d="M12.0117 126.965C12.0117 56.8442 68.856 0 138.977 0C209.098 0 265.942 56.8442 265.942 126.965V911.707H12.0117V126.965Z"
          fill="url(#paint1_linear_5907_2805)"
        />
      </mask>
      <g mask="url(#mask0_5907_2805)">
        <path
          d="M12.0117 126.965C12.0117 56.8442 68.856 0 138.977 0C209.098 0 265.942 56.8442 265.942 126.965V911.707H12.0117V126.965Z"
          fill="url(#paint2_linear_5907_2805)"
        />
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_5907_2805"
          x1="138.975"
          y1="355.822"
          x2="138.975"
          y2="911.54"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#F7E49F" stop-opacity="0" />
          <stop offset="1" stop-color="#F7E49F" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_5907_2805"
          x1="138.977"
          y1="0"
          x2="138.977"
          y2="911.707"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#0B1855" />
          <stop offset="0.572115" stop-color="#042284" />
          <stop offset="1" stop-color="#0B1855" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_5907_2805"
          x1="138.977"
          y1="0"
          x2="138.977"
          y2="911.707"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#0B1855" />
          <stop offset="0.572115" stop-color="#042284" />
          <stop offset="1" stop-color="#0B1855" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default ProgrammeLg;
