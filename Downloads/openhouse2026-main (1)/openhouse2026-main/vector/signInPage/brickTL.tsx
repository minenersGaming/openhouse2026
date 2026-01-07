import type { FC } from "react";
const BrickTL: FC<{ className?: string }> = ({ className }) => {
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
        width="136.772"
        height="50.1497"
        rx="9.11813"
        transform="matrix(1 0 0 -1 0 107.139)"
        fill="#042284"
      />
      <rect
        opacity="0.3"
        width="136.772"
        height="50.1497"
        rx="9.11813"
        transform="matrix(1 0 0 -1 55.8477 50.1504)"
        fill="#042284"
      />
    </svg>
  );
};
export default BrickTL;
