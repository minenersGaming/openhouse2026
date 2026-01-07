import React from "react";
import type { FC } from "react";

const TwitterIcon: FC<{
  className?: string;
}> = ({ className }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_8132_4736)">
        <mask
          id="mask0_8132_4736"
          style={{ maskType: "luminance" }}
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="32"
          height="32"
        >
          <path d="M0 0H31.4258V31.4258H0V0Z" fill="white" />
        </mask>
        <g mask="url(#mask0_8132_4736)">
          <path
            d="M24.7478 1.47266H29.5672L19.0395 13.5357L31.4258 29.9534H21.7287L14.1281 19.9982L5.44115 29.9534H0.617292L11.8767 17.0464L0 1.4749H9.94402L16.8038 10.5727L24.7478 1.47266ZM23.0531 27.0622H25.7242L8.48496 4.21343H5.62073L23.0531 27.0622Z"
            fill="#F4F2C4"
          />
        </g>
      </g>
      <defs>
        <clipPath id="clip0_8132_4736">
          <rect width="31.4258" height="31.4258" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default TwitterIcon;
