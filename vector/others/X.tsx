import React, { FC } from "react";

const X: FC<{
  className?: string;
}> = ({ className }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M23.4339 16.6736L38.0933 0H34.6193L21.8892 14.4807L11.7245 0.00302895H0L15.3712 21.8953L0 39.3745H3.47404L16.9129 24.0881L27.65 39.3745H39.3745L23.4339 16.6736ZM18.6756 22.0861L17.1188 19.9053L4.72494 2.55934H10.0617L20.0628 16.5585L21.6196 18.7392L34.6193 36.9333H29.2855L18.6756 22.0861Z"
        fill="white"
      />
    </svg>
  );
};

export default X;

/*

style={{ maskType: 'alpha' }}

<g style={{ mixBlendMode: 'soft-light' }}>

className={`${className}`}

 */
