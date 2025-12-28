import React, { FC } from "react";

const MRT: FC<{
  className?: string;
  currentTab: string;
}> = ({ className, currentTab }) => {
  const COLORS = {
    bts: "#01553B",
    bus: "#000CFF",
    mrt: "#001870",
    parking: "#6311D6",
  };
  return (
    <svg
      className={`w-[38px] md:w-14 xw:w-20 ${
        currentTab !== "bus" ? "w-[28px] text-[#C4C4C4]" : "w-[28px] text-white"
      }`}
      viewBox="0 0 72 63"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_1221_5087)">
        <path
          d="M12.5 55.1724V14.8398H27.1373L36.0674 32.2562L45.1146 14.8398H59.6208V55.1724H46.4992V33.5984L40.2683 46.2725H31.3537L25.0743 33.5984V55.1724H12.5Z"
          fill={currentTab === "mrt" ? "#FFFFFF" : "#C4C4C4"}
        />
        <path
          d="M12.5 55.1724V14.8398H27.1373L36.0674 32.2562L45.1146 14.8398H59.6208V55.1724H46.4992V33.5984L40.2683 46.2725H31.3537L25.0743 33.5984V55.1724H12.5Z"
          fill="black"
          fillOpacity="0.2"
        />
      </g>
      <defs>
        <clipPath id="clip0_1221_5087">
          <rect
            width="71.1069"
            height="61.8083"
            fill="white"
            transform="translate(0.515625 0.539062)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default MRT;

/*

style={{ maskType: 'alpha' }}

<g style={{ mixBlendMode: 'soft-light' }}>

className={`${className}`}

 */
