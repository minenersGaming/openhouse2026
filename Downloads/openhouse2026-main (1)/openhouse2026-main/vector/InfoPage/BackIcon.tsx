import React from "react";
import type { FC } from "react";

const BackIcon: FC<{
  className?: string;
}> = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      viewBox="0 0 38 38"
      fill="none"
    >
      <path
        d="M18.8918 1.03359C9.02898 1.03359 1.03359 9.02897 1.03359 18.8918C1.03359 28.7546 9.02898 36.75 18.8918 36.75C28.7546 36.75 36.75 28.7546 36.75 18.8918C36.75 9.02898 28.7546 1.03359 18.8918 1.03359Z"
        stroke="#F3ECB7"
        stroke-width="2.06692"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M9.9582 18.8914L27.8164 18.8914M9.9582 18.8914L17.1015 26.0347M9.9582 18.8914L17.1015 11.7481"
        stroke="#F3ECB7"
        stroke-width="2.06692"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default BackIcon;
