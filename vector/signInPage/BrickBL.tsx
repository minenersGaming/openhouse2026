import type { FC } from "react";
const BrickBL: FC<{ className?: string }> = ({ className }) => {
  return (
    <svg
      width="193"
      height="108"
      viewBox="0 0 193 108"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect
        opacity="0.3"
        x="192.621"
        y="107.139"
        width="136.772"
        height="50.1497"
        rx="9.11813"
        transform="rotate(180 192.621 107.139)"
        fill="#042284"
      />
      <rect
        opacity="0.3"
        x="136.773"
        y="50.1504"
        width="136.772"
        height="50.1497"
        rx="9.11813"
        transform="rotate(180 136.773 50.1504)"
        fill="#042284"
      />
    </svg>
  );
};
export default BrickBL;
