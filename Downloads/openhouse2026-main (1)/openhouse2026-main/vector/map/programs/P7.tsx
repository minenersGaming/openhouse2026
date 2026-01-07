import type { FC } from "react";
const P7: FC<{ className?: string }> = ({ className }) => {
  return (
    <svg
      width="85"
      height="25"
      viewBox="0 0 85 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect width="85" height="25" rx="2" fill="#F08054" />
      <circle cx="42.5" cy="12.5" r="7.5" fill="white" />
      <path
        d="M40.7487 16L43.4287 10.13H39.9087V8.86H45.0287V9.81L42.3287 16H40.7487Z"
        fill="#F08054"
      />
    </svg>
  );
};
export default P7;
