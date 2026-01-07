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
      <g opacity="0.28" filter="url(#filter0_f_6732_6736)">
        <path
          d="M18.5137 18.5137C23.0756 18.5137 26.7705 14.8187 26.7705 10.2568C26.7705 5.69493 23.0756 2 18.5137 2C13.9518 2 10.2568 5.69493 10.2568 10.2568C10.2568 14.8187 13.9518 18.5137 18.5137 18.5137ZM18.5137 22.6421C13.0022 22.6421 2 25.4081 2 30.8989V32.9631C2 34.0984 2.92889 35.0273 4.06421 35.0273H32.9631C34.0984 35.0273 35.0273 34.0984 35.0273 32.9631V30.8989C35.0273 25.4081 24.0251 22.6421 18.5137 22.6421Z"
          fill="black"
        />
      </g>
      <path
        d="M18.5137 17.2148C23.0756 17.2148 26.7705 13.5199 26.7705 8.95801C26.7705 4.39611 23.0756 0.701172 18.5137 0.701172C13.9518 0.701172 10.2568 4.39611 10.2568 8.95801C10.2568 13.5199 13.9518 17.2148 18.5137 17.2148ZM18.5137 21.3433C13.0022 21.3433 2 24.1093 2 29.6001V31.6643C2 32.7996 2.92889 33.7285 4.06421 33.7285H32.9631C34.0984 33.7285 35.0273 32.7996 35.0273 31.6643V29.6001C35.0273 24.1093 24.0251 21.3433 18.5137 21.3433Z"
        fill="white"
      />
      <defs>
        <filter
          id="filter0_f_6732_6736"
          x="0"
          y="0"
          width="37.0273"
          height="37.0273"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="1"
            result="effect1_foregroundBlur_6732_6736"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default PersonIcon;
