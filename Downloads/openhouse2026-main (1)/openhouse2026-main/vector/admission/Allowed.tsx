import React from "react";
import type { FC } from "react";

const Allowed: FC<{
  className?: string;
}> = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      viewBox="0 0 51 51"
      fill="none"
    >
      <path
        d="M21.2582 7.97209H7.9711C5.03579 7.97209 2.65625 10.3516 2.65625 13.2869V42.5186C2.65625 45.454 5.03579 47.8335 7.9711 47.8335H37.2028C40.1381 47.8335 42.5177 45.454 42.5177 42.5186V29.2315M38.7595 4.21391C40.8351 2.13833 44.2002 2.13833 46.2758 4.21391C48.3514 6.28949 48.3514 9.65467 46.2758 11.7302L23.4597 34.5464H15.9434L15.9434 27.03L38.7595 4.21391Z"
        stroke="#FDFCDA"
        stroke-width="5.31485"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default Allowed;
