import type { FC } from "react";
const BrickTR: FC<{ className?: string }> = ({ className }) => {
  return (
    <svg
      width="227"
      height="151"
      viewBox="0 0 227 151"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect
        opacity="0.3"
        width="125.612"
        height="46.0578"
        rx="7.25312"
        transform="matrix(1 0 0 -1 0 98.3984)"
        fill="#042284"
      />
      <rect
        opacity="0.3"
        width="125.612"
        height="46.0578"
        rx="7.25312"
        transform="matrix(1 0 0 -1 101.389 150.949)"
        fill="#042284"
      />
      <rect
        opacity="0.3"
        width="125.612"
        height="46.0578"
        rx="7.25312"
        transform="matrix(1 0 0 -1 51.293 46.0586)"
        fill="#042284"
      />
    </svg>
  );
};
export default BrickTR;
