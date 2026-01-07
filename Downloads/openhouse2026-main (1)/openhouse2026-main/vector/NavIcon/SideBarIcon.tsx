import React from "react";
import type { FC } from "react";

const SidebarIcon: FC<{
  className?: string;
}> = ({ className }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 35 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="34.7471" height="3.88956" rx="1.94478" fill="white" />
      <rect
        y="14.7905"
        width="26.5757"
        height="3.88956"
        rx="1.94478"
        fill="white"
      />
    </svg>
  );
};

export default SidebarIcon;
