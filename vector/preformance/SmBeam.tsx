import type { FC } from "react";
const SmBeam: FC<{ className?: string }> = ({ className }) => {
  return (
    <svg
      width="590"
      height="1977"
      viewBox="0 0 590 1977"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g opacity="0.82">
        <g style={{ mixBlendMode: "plus-lighter" }} opacity="0.77">
          <path
            d="M611.986 -17.2461L835.81 79.8854L335.256 1768.19L6.73284 1625.62L611.986 -17.2461Z"
            fill="url(#paint0_linear_7095_7889)"
            fillOpacity="0.8"
          />
        </g>
        <g style={{ mixBlendMode: "plus-lighter" }} opacity="0.51">
          <path
            d="M489.808 -89.562L710.479 27.8886L161.02 1668.19L-162.876 1495.79L489.808 -89.562Z"
            fill="url(#paint1_linear_7095_7889)"
            fillOpacity="0.8"
          />
        </g>
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_7095_7889"
          x1="681.352"
          y1="135.886"
          x2="-279.477"
          y2="529.001"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F5EEBF" stopOpacity="0.4" />
          <stop offset="0.5" stopColor="#F5EEBF" stopOpacity="0.1" />
          <stop offset="1" stopColor="#15786C" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_7095_7889"
          x1="554.585"
          y1="69.7017"
          x2="-400.15"
          y2="419.169"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F5EEBF" stopOpacity="0.4" />
          <stop offset="0.5" stopColor="#F5EEBF" stopOpacity="0.1" />
          <stop offset="1" stopColor="#15786C" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
};
export default SmBeam;
