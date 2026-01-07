import type { FC } from "react";
const DownloadIcon: FC<{ className?: string }> = ({ className }) => {
  return (
    <svg
      width="63"
      height="57"
      viewBox="0 0 63 57"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M10.418 37.827L10.418 40.1911C10.418 44.1083 13.9165 47.2837 18.2321 47.2837L44.2794 47.2837C48.595 47.2837 52.0935 44.1082 52.0935 40.1911L52.0935 37.827M41.6746 28.3702L31.2558 37.827M31.2558 37.827L20.8369 28.3702M31.2558 37.827L31.2557 9.45679"
        stroke="white"
        strokeWidth="4.72836"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
export default DownloadIcon;
