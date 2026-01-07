import type { FC } from "react";
const Mdbeam: FC<{ className?: string }> = ({ className }) => {
  return (
    <svg
      width="1323"
      height="1977"
      viewBox="0 0 1323 1977"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g style={{ mixBlendMode: "plus-lighter" }} opacity="0.77">
        <path
          d="M1342.74 -17.2456L1664.74 79.8859L944.63 1768.19L472.01 1625.62L1342.74 -17.2456Z"
          fill="url(#paint0_linear_7095_6343)"
          fillOpacity="0.8"
        />
      </g>
      <g style={{ mixBlendMode: "plus-lighter" }} opacity="0.51">
        <path
          d="M1112.55 -89.6074L1430.01 27.8432L639.547 1668.14L173.586 1495.75L1112.55 -89.6074Z"
          fill="url(#paint1_linear_7095_6343)"
          fillOpacity="0.8"
        />
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_7095_6343"
          x1="1442.53"
          y1="135.886"
          x2="244.078"
          y2="841.293"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F5EEBF" stopOpacity="0.4" />
          <stop offset="0.5" stopColor="#F5EEBF" stopOpacity="0.1" />
          <stop offset="1" stopColor="#15786C" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_7095_6343"
          x1="1205.74"
          y1="69.6562"
          x2="-13.6568"
          y2="711.771"
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
export default Mdbeam;
