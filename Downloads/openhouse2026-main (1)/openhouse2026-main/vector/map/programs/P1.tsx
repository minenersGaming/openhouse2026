import type { FC } from "react";
const P1: FC<{ className?: string }> = ({ className }) => {
  return (
    <svg
      width="25"
      height="25"
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect width="25" height="25" rx="2" fill="#F08054" />
      <circle cx="12.5" cy="12.5" r="7.5" fill="white" />
      <path
        d="M13.7687 16H12.2587V11.87C12.2587 11.7567 12.2587 11.6167 12.2587 11.45C12.2653 11.2833 12.272 11.11 12.2787 10.93C12.2853 10.75 12.292 10.59 12.2987 10.45C12.2653 10.49 12.192 10.5633 12.0787 10.67C11.972 10.77 11.872 10.86 11.7787 10.94L10.9587 11.6L10.2287 10.69L12.5287 8.86H13.7687V16Z"
        fill="#F08054"
      />
    </svg>
  );
};
export default P1;
