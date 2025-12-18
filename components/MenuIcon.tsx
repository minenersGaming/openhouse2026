"use client";

export default function MenuIcon({
  open,
  className,
}: {
  open: boolean;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <line
        x1="3"
        y1="7"
        x2="21"
        y2="7"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
        style={{
          transformOrigin: "12px 12px",
          transition: "transform 0.35s cubic-bezier(.4,0,.2,1)",
          transform: open
            ? "rotate(45deg) translateY(5px)"
            : "rotate(0deg) translateY(0px)",
        }}
      />

      <line
        x1="3"
        y1="17"
        x2="21"
        y2="17"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
        style={{
          transformOrigin: "12px 12px",
          transition:
            "transform 0.35s cubic-bezier(.4,0,.2,1), stroke-dashoffset 0.35s cubic-bezier(.4,0,.2,1)",
          strokeDasharray: "18",
          strokeDashoffset: open ? "0" : "4.5",
          transform: open
            ? "rotate(-45deg) translateY(-5px)"
            : "rotate(0deg) translateY(0px)",
        }}
      />
    </svg>
  );
}
