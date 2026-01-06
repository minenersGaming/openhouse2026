import React from "react";
import type { FC } from "react";

const Bricks: FC<{
  className?: string;
}> = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      viewBox="0 0 1256 155"
      fill="none"
    >
      <path
        opacity="0.32"
        d="M130.411 3.06056L47.3572 3.06055M141.484 37.6104H3.06204M91.6523 37.6104V3.06056"
        stroke="white"
        stroke-width="6.12182"
        stroke-linecap="round"
      />
      <path
        opacity="0.32"
        d="M1124.9 20.336L1207.95 20.3359M1113.82 54.8857H1252.25M1163.66 54.8857V20.336"
        stroke="white"
        stroke-width="6.12182"
        stroke-linecap="round"
      />
      <path
        opacity="0.32"
        d="M964.819 138.71L1037.47 138.71M1003.56 64.7852L1076.21 64.7852M955.133 101.748H1076.21M998.721 101.748V138.71M1047.15 64.7852V101.748"
        stroke="white"
        stroke-width="5.35482"
        stroke-linecap="round"
      />
      <path
        opacity="0.32"
        d="M285.669 151.741L181.733 151.741M230.236 79.8223L126.3 79.8223M299.527 115.782H126.3M237.165 115.782V151.741M167.874 79.8223V115.782"
        stroke="white"
        stroke-width="5.90253"
        stroke-linecap="round"
      />
    </svg>
  );
};

export default Bricks;
