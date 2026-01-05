import type { FC } from "react";
const P4: FC<{ className?: string }> = ({ className }) => {
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
        d="M15.1887 14.52H14.3287V16H12.8587V14.52H9.80867V13.47L12.9387 8.86H14.3287V13.35H15.1887V14.52ZM12.8587 12.14C12.8587 12.0267 12.8587 11.8933 12.8587 11.74C12.8653 11.58 12.872 11.4233 12.8787 11.27C12.8853 11.11 12.892 10.97 12.8987 10.85C12.9053 10.7233 12.912 10.6367 12.9187 10.59H12.8787C12.8187 10.7233 12.7553 10.8533 12.6887 10.98C12.622 11.1067 12.542 11.2367 12.4487 11.37L11.1387 13.35H12.8587V12.14Z"
        fill="#F08054"
      />
    </svg>
  );
};
export default P4;
