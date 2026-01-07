import type { FC } from "react";
const LgLight: FC<{ className?: string }> = ({ className }) => {
  return (
    <svg
      width="739"
      height="982"
      viewBox="0 0 739 982"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g style={{ mixBlendMode: "plus-lighter" }} opacity="0.32">
        <path
          d="M0.000549316 956.5L556.766 -192.5H741.184L830.328 53.3294L441.263 956.5H0.000549316Z"
          fill="url(#paint0_linear_6609_1470)"
        />
      </g>
      <g style={{ mixBlendMode: "plus-lighter" }} opacity="0.33">
        <path
          d="M243.532 998.5L800.297 -150.5H984.715L1073.86 95.3294L684.794 998.5H243.532Z"
          fill="url(#paint1_linear_6609_1470)"
        />
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_6609_1470"
          x1="591.822"
          y1="14.5"
          x2="59.5856"
          y2="389.683"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#F4F2C4" stop-opacity="0.82" />
          <stop offset="1" stop-color="#F3E19D" stop-opacity="0" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_6609_1470"
          x1="1122.41"
          y1="-444.198"
          x2="-84.2062"
          y2="408.066"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#F4F2C4" stop-opacity="0.82" />
          <stop offset="1" stop-color="#F3E19D" stop-opacity="0.18" />
        </linearGradient>
      </defs>
    </svg>
  );
};
export default LgLight;
