import type { FC } from "react";
const LgBrickL: FC<{ className?: string }> = ({ className }) => {
  return (
    <svg
      width="196"
      height="90"
      viewBox="0 0 196 90"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect
        opacity="0.3"
        x="195.863"
        y="89.3652"
        width="139.068"
        height="41.8285"
        rx="5.34911"
        transform="rotate(180 195.863 89.3652)"
        fill="#042284"
      />
      <rect
        opacity="0.3"
        x="139.07"
        y="41.8301"
        width="139.068"
        height="41.8285"
        rx="5.34911"
        transform="rotate(180 139.07 41.8301)"
        fill="#042284"
      />
    </svg>
  );
};
export default LgBrickL;
