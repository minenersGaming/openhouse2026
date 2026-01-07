{
  /* <a href="/" className="flex justify-start cursor-pointer md:pl-3 lg:pl-7">
  <Logo className="w-10 lg:w-13" />
  <div className="flex flex-col px-2 lg:px-3 -space-y-1 items-start justify-center">
    <h1 className="uppercase font-bold text-md lg:text-xl text-white tracking-wider">
      triam udom
    </h1>
    <h2 className="ml-px uppercase text-white text-xs lg:text-sm tracking-wider">
      OPEN HOUSE 2026
    </h2>
  </div>
</a>; */
}
const style = {
  Top: "font-bold text-md lg:text-xl text-white transtion-all",
  Bottom: "ml-px uppercase text-white text-xs lg:text-sm transtion-all",
};
const Toptext = ({ hover }: { hover: boolean }) => {
  return (
    <div className="flex flex-col px-2 lg:px-3 -space-y-1 items-start justify-center">
      <div className="justify-evenly flex w-full">
        <p
          className={`transition-all duration-400 ${style.Top} ${
            hover ? "drop-shadow-white drop-shadow-sm/100" : "drop-shadow-sm/0"
          }`}
        >
          T
        </p>
        <p
          className={`transition-all duration-400 ${style.Top} ${
            hover ? "drop-shadow-white drop-shadow-sm/100" : "drop-shadow-sm/0"
          }`}
        >
          R
        </p>
        <p
          className={`transition-all duration-400 ${style.Top} ${
            hover ? "drop-shadow-white drop-shadow-sm/100" : "drop-shadow-sm/0"
          }`}
        >
          I
        </p>
        <p
          className={`transition-all duration-400 ${style.Top} ${
            hover ? "drop-shadow-white drop-shadow-sm/100" : "drop-shadow-sm/0"
          }`}
        >
          A
        </p>
        <p
          className={`transition-all duration-400 ${style.Top} ${
            hover ? "drop-shadow-white drop-shadow-sm/100" : "drop-shadow-sm/0"
          }`}
        >
          M
        </p>
        <div className="w-1"></div>
        <p
          className={`transition-all duration-400 ${style.Top} ${
            hover ? "drop-shadow-white drop-shadow-sm/100" : "drop-shadow-sm/0"
          }`}
        >
          U
        </p>
        <p
          className={`transition-all duration-400 ${style.Top} ${
            hover ? "drop-shadow-white drop-shadow-sm/100" : "drop-shadow-sm/0"
          }`}
        >
          D
        </p>
        <p
          className={`transition-all duration-400 ${style.Top} ${
            hover ? "drop-shadow-white drop-shadow-sm/100" : "drop-shadow-sm/0"
          }`}
        >
          O
        </p>
        <p
          className={`transition-all duration-400 ${style.Top} ${
            hover ? "drop-shadow-white drop-shadow-sm/100" : "drop-shadow-sm/0"
          }`}
        >
          M
        </p>
      </div>
      <div className="justify-evenly flex w-full">
        <p
          className={`transition-all duration-400 ${style.Bottom} ${
            hover ? "drop-shadow-white drop-shadow-sm/100" : "drop-shadow-sm/0"
          }`}
        >
          O
        </p>
        <p
          className={`transition-all duration-400 ${style.Bottom} ${
            hover ? "drop-shadow-white drop-shadow-sm/100" : "drop-shadow-sm/0"
          }`}
        >
          P
        </p>
        <p
          className={`transition-all duration-400 ${style.Bottom} ${
            hover ? "drop-shadow-white drop-shadow-sm/100" : "drop-shadow-sm/0"
          }`}
        >
          E
        </p>
        <p
          className={`transition-all duration-400 ${style.Bottom} ${
            hover ? "drop-shadow-white drop-shadow-sm/100" : "drop-shadow-sm/0"
          }`}
        >
          N
        </p>
        <div className="w-1"></div>
        <p
          className={`transition-all duration-400 ${style.Bottom} ${
            hover ? "drop-shadow-white drop-shadow-sm/100" : "drop-shadow-sm/0"
          }`}
        >
          H
        </p>
        <p
          className={`transition-all duration-400 ${style.Bottom} ${
            hover ? "drop-shadow-white drop-shadow-sm/100" : "drop-shadow-sm/0"
          }`}
        >
          O
        </p>
        <p
          className={`transition-all duration-400 ${style.Bottom} ${
            hover ? "drop-shadow-white drop-shadow-sm/100" : "drop-shadow-sm/0"
          }`}
        >
          U
        </p>
        <p
          className={`transition-all duration-400 ${style.Bottom} ${
            hover ? "drop-shadow-white drop-shadow-sm/100" : "drop-shadow-sm/0"
          }`}
        >
          S
        </p>
        <p
          className={`transition-all duration-400 ${style.Bottom} ${
            hover ? "drop-shadow-white drop-shadow-sm/100" : "drop-shadow-sm/0"
          }`}
        >
          E
        </p>
        <div className="w-1"></div>
        <p
          className={`transition-all duration-400 ${style.Bottom} ${
            hover ? "drop-shadow-white drop-shadow-sm/100" : "drop-shadow-sm/0"
          }`}
        >
          2
        </p>
        <p
          className={`transition-all duration-400 ${style.Bottom} ${
            hover ? "drop-shadow-white drop-shadow-sm/100" : "drop-shadow-sm/0"
          }`}
        >
          0
        </p>
        <p
          className={`transition-all duration-400 ${style.Bottom} ${
            hover ? "drop-shadow-white drop-shadow-sm/100" : "drop-shadow-sm/0"
          }`}
        >
          2
        </p>
        <p
          className={`transition-all duration-400 ${style.Bottom} ${
            hover ? "drop-shadow-white drop-shadow-sm/100" : "drop-shadow-sm/0"
          }`}
        >
          6
        </p>
      </div>
    </div>
  );
};
export default Toptext;
