import React from "react";
import type { FC } from "react";

const PersonIcon: FC<{
  className?: string;
}> = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      viewBox="0 0 38 38"
      fill="none"
    >
      <g filter="url(#filter0_d_6694_4284)">
        <path
          d="M18.5137 16.5137C23.0756 16.5137 26.7705 12.8187 26.7705 8.25684C26.7705 3.69493 23.0756 0 18.5137 0C13.9518 0 10.2568 3.69493 10.2568 8.25684C10.2568 12.8187 13.9518 16.5137 18.5137 16.5137ZM18.5137 20.6421C13.0022 20.6421 2 23.4081 2 28.8989V30.9631C2 32.0984 2.92889 33.0273 4.06421 33.0273H32.9631C34.0984 33.0273 35.0273 32.0984 35.0273 30.9631V28.8989C35.0273 23.4081 24.0251 20.6421 18.5137 20.6421Z"
          fill="white"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_6694_4284"
          x="0"
          y="0"
          width="37.0273"
          height="37.0273"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="2" />
          <feGaussianBlur stdDeviation="1" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_6694_4284"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_6694_4284"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default PersonIcon;
