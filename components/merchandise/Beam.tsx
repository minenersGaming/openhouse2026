const Beam = ({ className }: { className: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      viewBox="0 0 1213 3819"
      fill="none"
    >
      <mask
        id="mask0_7725_5195"
        style={{ maskType: "alpha" }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="1213"
        height="3819"
      >
        <rect width="1212.14" height="3818.66" fill="#D9D9D9" />
      </mask>
      <g mask="url(#mask0_7725_5195)">
        <g style={{ mixBlendMode: "plus-lighter" }} opacity="0.77">
          <path
            d="M1268.5 -309.882L1619.82 -120.641L1419.89 2922.64L318.469 2890.9L1268.5 -309.882Z"
            fill="url(#paint0_linear_7725_5195)"
            fillOpacity="0.8"
          />
        </g>
        <g style={{ mixBlendMode: "plus-lighter" }} opacity="0.51">
          <path
            d="M1017.34 -450.863L1363.71 -222.035L501.263 2973.75L-7.1338 2637.88L1017.34 -450.863Z"
            fill="url(#paint1_linear_7725_5195)"
            fillOpacity="0.8"
          />
        </g>
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_7725_5195"
          x1="1377.37"
          y1="-11.5365"
          x2="250.813"
          y2="565.591"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F5EEBF" stopOpacity="0.4" />
          <stop offset="0.5" stopColor="#F5EEBF" stopOpacity="0.1" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_7725_5195"
          x1="1119.02"
          y1="-140.571"
          x2="-444.392"
          y2="320.47"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F5EEBF" stopOpacity="0.4" />
          <stop offset="0.5" stopColor="#F5EEBF" stopOpacity="0.1" />
          <stop offset="1" stopColor="#15786C" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
};
export default Beam;
