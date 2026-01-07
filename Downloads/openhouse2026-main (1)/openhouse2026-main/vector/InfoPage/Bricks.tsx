import React from "react";
import type { FC } from "react";

const Bricks: FC<{
  className?: string;
}> = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      viewBox="0 0 1148 465"
      fill="none"
    >
      <g style={{ mixBlendMode: "plus-lighter" }} opacity="0.26">
        <rect
          opacity="0.51"
          width="117.508"
          height="34.4966"
          rx="11.7602"
          transform="matrix(-1 0 0 1 1055.17 0)"
          fill="#477BCA"
        />
        <rect
          opacity="0.51"
          width="117.508"
          height="34.4966"
          rx="11.7602"
          transform="matrix(-1 0 0 1 975.396 41.5527)"
          fill="#477BCA"
        />
        <rect
          opacity="0.51"
          width="117.508"
          height="34.4966"
          rx="11.7602"
          transform="matrix(-1 0 0 1 274.117 18.3999)"
          fill="#477BCA"
        />
        <rect
          opacity="0.51"
          width="117.508"
          height="34.4966"
          rx="11.7602"
          transform="matrix(-1 0 0 1 234.186 61.3491)"
          fill="#477BCA"
        />
        <rect
          opacity="0.51"
          width="126.132"
          height="34.4966"
          rx="11.7602"
          transform="matrix(-1 0 0 1 1030.38 83.1055)"
          fill="#477BCA"
        />
      </g>
      <g style={{ mixBlendMode: "plus-lighter" }} opacity="0.26">
        <rect
          opacity="0.51"
          y="325.559"
          width="117.508"
          height="34.4966"
          rx="11.7602"
          fill="#477BCA"
        />
        <rect
          opacity="0.51"
          x="51.457"
          y="367.896"
          width="117.508"
          height="34.4966"
          rx="11.7602"
          fill="#477BCA"
        />
        <rect
          opacity="0.51"
          x="981.158"
          y="430.478"
          width="117.508"
          height="34.4966"
          rx="11.7602"
          fill="#477BCA"
        />
        <rect
          opacity="0.51"
          x="1030.41"
          y="384.346"
          width="117.508"
          height="34.4966"
          rx="11.7602"
          fill="#477BCA"
        />
      </g>
    </svg>
  );
};

export default Bricks;
