import type { FC } from "react";
const C17: FC<{ className?: string }> = ({ className }) => {
  return (
    <svg
      width="25"
      height="25"
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect width="25" height="25" rx="2" fill="#4284D8" />
      <circle cx="12.5" cy="12.5" r="7.5" fill="white" />
      <path
        d="M10.9073 16H9.39734V11.87C9.39734 11.7567 9.39734 11.6167 9.39734 11.45C9.40401 11.2833 9.41068 11.11 9.41734 10.93C9.42401 10.75 9.43068 10.59 9.43734 10.45C9.40401 10.49 9.33068 10.5633 9.21734 10.67C9.11068 10.77 9.01068 10.86 8.91734 10.94L8.09734 11.6L7.36734 10.69L9.66734 8.86H10.9073V16ZM13.61 16L16.29 10.13H12.77V8.86H17.89V9.81L15.19 16H13.61Z"
        fill="#4284D8"
      />
    </svg>
  );
};
export default C17;
