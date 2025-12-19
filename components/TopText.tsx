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
  Top: "font-bold text-md lg:text-xl text-white",
  Bottom: "ml-px uppercase text-white text-xs lg:text-sm",
};
const Toptext = () => {
  return (
    <div className="flex flex-col px-2 lg:px-3 -space-y-1 items-start justify-center">
      <div className="justify-evenly flex w-full">
        <p className={style.Top}>T</p>
        <p className={style.Top}>R</p>
        <p className={style.Top}>I</p>
        <p className={style.Top}>A</p>
        <p className={style.Top}>M</p>
        <div className="w-1"></div>
        <p className={style.Top}>U</p>
        <p className={style.Top}>D</p>
        <p className={style.Top}>O</p>
        <p className={style.Top}>M</p>
      </div>
      <div className="justify-evenly flex w-full">
        <p className={style.Bottom}>O</p>
        <p className={style.Bottom}>P</p>
        <p className={style.Bottom}>E</p>
        <p className={style.Bottom}>N</p>
        <div className="w-1"></div>
        <p className={style.Bottom}>H</p>
        <p className={style.Bottom}>O</p>
        <p className={style.Bottom}>U</p>
        <p className={style.Bottom}>S</p>
        <p className={style.Bottom}>E</p>
        <div className="w-1"></div>
        <p className={style.Bottom}>2</p>
        <p className={style.Bottom}>0</p>
        <p className={style.Bottom}>2</p>
        <p className={style.Bottom}>6</p>
      </div>
    </div>
  );
};
export default Toptext;
