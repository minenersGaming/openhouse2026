import React, { FC } from "react";

const FB: FC<{
  className?: string;
}> = ({ className }) => {
  return (
    <svg
    className={className}
      viewBox="0 0 49 49"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M48.5726 24.2863C48.5726 10.8803 37.6923 0 24.2863 0C10.8803 0 0 10.8803 0 24.2863C0 36.0409 8.35449 45.8282 19.429 48.0869V31.5722H14.5718V24.2863H19.429V18.2147C19.429 13.5275 23.242 9.71452 27.9292 9.71452H34.0008V17.0004H29.1436C27.8078 17.0004 26.7149 18.0933 26.7149 19.429V24.2863H34.0008V31.5722H26.7149V48.4512C38.9795 47.2368 48.5726 36.8909 48.5726 24.2863Z"
        fill="white"
      />
    </svg>
  );
};

export default FB;

/*

style={{ maskType: 'alpha' }}

<g style={{ mixBlendMode: 'soft-light' }}>

className={`${className}`}

 */
