import React from "react";
import type { FC } from "react";

const Bubble1: FC<{
  className?: string;
}> = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      viewBox="0 0 260 334"
      fill="none"
    >
      <g style={{ mixBlendMode: "screen" }} opacity="0.64">
        <circle
          cx="83.0332"
          cy="83.0332"
          r="83.0332"
          transform="matrix(-0.807666 0.589641 0.589641 0.807666 161.383 0)"
          fill="url(#paint0_linear_6642_6565)"
        />
      </g>
      <g style={{ mixBlendMode: "plus-lighter" }} opacity="0.64">
        <circle
          cx="49.4029"
          cy="49.4029"
          r="49.4029"
          transform="matrix(-0.886706 -0.462334 -0.462334 0.886706 133.293 158.147)"
          fill="url(#paint1_linear_6642_6565)"
        />
      </g>
      <g style={{ mixBlendMode: "plus-lighter" }} opacity="0.64">
        <circle
          cx="49.4029"
          cy="49.4029"
          r="49.4029"
          transform="matrix(-0.886706 -0.462334 -0.462334 0.886706 230.332 245.759)"
          fill="url(#paint2_linear_6642_6565)"
        />
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_6642_6565"
          x1="83.0332"
          y1="0"
          x2="83.0332"
          y2="166.066"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F4F2C3" stopOpacity="0" />
          <stop offset="1" stopColor="#F4F2C3" stopOpacity="0.4" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_6642_6565"
          x1="49.3826"
          y1="-25.7696"
          x2="49.4029"
          y2="98.8058"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F8B044" stopOpacity="0" />
          <stop offset="1" stopColor="#F8B044" stopOpacity="0.5" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_6642_6565"
          x1="49.4029"
          y1="0"
          x2="49.4029"
          y2="98.8058"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#9CD6FF" stopOpacity="0" />
          <stop offset="1" stopColor="#9CD6FF" stopOpacity="0.4" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default Bubble1;
