import type { FC } from "react";
const BrickBR: FC<{ className?: string }> = ({ className }) => {
  return (
    <svg
      width="197"
      height="131"
      viewBox="0 0 197 131"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect
        opacity="0.3"
        x="196.611"
        y="85.2246"
        width="108.797"
        height="39.8922"
        rx="7.25312"
        transform="rotate(180 196.611 85.2246)"
        fill="#042284"
      />
      <rect
        opacity="0.3"
        x="108.797"
        y="130.742"
        width="108.797"
        height="39.8922"
        rx="7.25312"
        transform="rotate(180 108.797 130.742)"
        fill="#042284"
      />
      <rect
        opacity="0.3"
        x="152.188"
        y="39.8926"
        width="108.797"
        height="39.8922"
        rx="7.25312"
        transform="rotate(180 152.188 39.8926)"
        fill="#042284"
      />
    </svg>
  );
};
export default BrickBR;
