const Loading = () => {
  return (
    <div
      className="
        w-10 h-10
        animate-spin flex items-center justify-center
      "
    >
      <svg width="160" height="160" viewBox="0 0 160 160">
        <defs>
          <linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#042284" />
            <stop offset="100%" stopColor="#457BCA" />
          </linearGradient>
        </defs>
        <path
          d="M10,80 A70,70 0 0 1 150,80"
          fill="none"
          stroke="url(#g)"
          strokeWidth="15"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
};

export default Loading;
