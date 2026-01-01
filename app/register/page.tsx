"use client";
import { signIn } from "@/lib/auth-client";
import GoogleIcon from "@/vector/signInPage/GoogleIcon";
import LgStarTL from "@/vector/signInPage/LgStarTL";
import LgStarML from "@/vector/signInPage/LgStarML";
import LgStarR from "@/vector/signInPage/LgStarR";
import SmStarLeft from "@/vector/signInPage/SmStarLeft";
import SmStarRight from "@/vector/signInPage/SmStarRight";
import Pole from "@/vector/signInPage/Pole";
import LgWindow from "@/vector/signInPage/Lgwindow";
import Lgtop from "@/vector/signInPage/LGtop";
import LgLight from "@/vector/signInPage/LgLight";
import LgBrickL from "@/vector/signInPage/LgBrickL";
import LgBrickR from "@/vector/signInPage/LgBrickR";
import LgBrickM from "@/vector/signInPage/LgBrickM";
import SmWindow from "@/vector/signInPage/SmWindow";
import SmTop from "@/vector/signInPage/SmTop";
import SmLight from "@/vector/signInPage/SmLight";
import BrickTL from "@/vector/signInPage/brickTL";
import BrickTR from "@/vector/signInPage/BrickTR";
import BrickBL from "@/vector/signInPage/BrickBL";
import BrickBR from "@/vector/signInPage/BrickBR";

export default function Home() {
  const handleLogin = async () => {
    await signIn.social({
      provider: "google",
      callbackURL: "/register/user",
    });
  };

  return (
    <section className="h-screen bg-linear-to-bl from-[#467BCA] via-[#354FB0] via-41% to-[#042284] relative overflow-clip">
      {/* Pole */}
      <Pole className="hidden lg:block absolute right-0 top-0 h-full w-auto z-10" />
      {/* Brick right */}
      <LgBrickR className=" hidden lg:block absolute bottom-[35vh] right-30 h-[12vh] w-auto " />
      <BrickBL className=" z-0 lg:hidden absolute bottom-[18vh] left-[4vw] md:bottom-50 md:left-45  w-[120px] h-auto " />
      <BrickTL className=" z-0 lg:hidden absolute top-[26vh] left-[4vw] md:top-60 md:left-30  w-[120px] h-auto " />
      <BrickBR className=" z-0 lg:hidden absolute bottom-[27vh] right-[2vw] md:bottom-80 md:right-25  w-[120px] h-auto " />
      <BrickTR className=" z-0 lg:hidden absolute top-[10vh] right-[1vw] md:top-30 md:right-20  w-[120px] h-auto " />
      {/*top line */}
      <Lgtop className="hidden lg:block absolute right-45 xl:right-55 top-0 h-[330px] xl:h-[25vw] w-auto z-0" />
      {/* Light Effect */}
      <LgLight className=" hidden lg:block absolute right-0 top-0 h-full w-auto " />
      <SmLight className=" lg:hidden absolute right-0 top-0 h-full w-auto " />
      {/* object  */}
      <div className="flex h-screen mx-auto w-[90%] md:w-[70%] flex-col lg:flex-row lg:w-screen lg:justify-start lg:items-center">
        {/* sm box */}
        <div className=" lg:hidden border relative w-full h-[20vh] md:h-[18vh] max-w-[470px] md:max-w-[570px] mx-auto">
          <SmTop className="z-0 absolute w-full h-auto top-0 left-0 md:top-auto md:left-auto md:-bottom-20 md:right-0 border" />
        </div>
        <div className="z-20 relative lg:hidden mx-auto w-[80%] max-w-[380px] h-auto md:h-[45vh] md:w-auto border">
          <SmWindow className="w-full h-auto  md:absolute md:h-full md:w-auto md:left-1/2 md:-translate-x-1/2 border" />

          <SmStarLeft className="block lg:hidden absolute top-27 -left-12 w-[210px] md:top-27 md:-left-25 md:w-[300px] h-auto" />
          <SmStarRight className="block lg:hidden absolute -top-9 -right-12 w-[210px] md:-top-27 md:-right-27 md:w-[300px] h-auto" />
        </div>

        {/* lg box */}
        {/* window box */}
        <div className=" hidden lg:block lg:w-[46%] xl:w-[50%] xl:max-w-[710px] 2xl:w-[70vh] h-full relative">
          {/* Bricks */}
          <LgBrickL className="hidden lg:block absolute top-20 left-10 xl:left-30 h-[8.5vh] w-auto xl:h-[9vh] xl:w-auto" />
          <LgBrickM className="hidden lg:block absolute top-20 -right-[20vw] 2xl:-right-[12.5vw] h-[75vh] w-auto" />
          {/* Window */}
          <LgWindow className="hidden lg:block absolute bottom-0 right-0 h-[91vh] w-auto 2xl:w-auto 2xl:h-[91vh] 2xl:bottom-0 2xl:left-0" />
        </div>
        <div className="flex-1 flex lg:w-[50%] xl:flex-1 h-full border justify-center lg:items-center mt-[7vh] md:mt-[10vh]">
          {/* register box */}
          <div className="h-40 border relative flex flex-col items-center justify-center space-y-2 w-[250px] md:w-[300px]">
            <LgStarTL className="hidden lg:block absolute -top-45 -left-50 z-40" />
            <LgStarML className="hidden lg:block absolute top-10 -left-35 z-40" />
            <LgStarR className="hidden lg:block absolute top-30 -right-35 z-40" />

            <h1
              style={{ fontFamily: "var(--font-bethany)" }}
              className=" z-20 border bg-clip-text text-transparent bg-linear-to-r from-[#FAD1CF] to-[#F4F2C4] to-66% text-5xl md:text-7xl py-4"
            >
              REGISTER
            </h1>
            <div className="flex justify-between items-center w-[90%] md:w-full">
              <div className="bg-[#F9D4CE] h-[0.15rem] rounded-full w-[70%] m-2"></div>
              <p className="bg-clip-text z-20 text-transparent font-bold bg-linear-to-r from-[#FAD1CF] to-[#F4F2C4] text-xl md:text-3xl text-nowrap">
                ลงทะเบียน
              </p>
            </div>
            <button
              onClick={handleLogin}
              className="mt-2 bg-linear-to-r from-[#FAD1CF] from-[1.12%] to-[#F4F2C4] to-[66.02%] cursor-pointer hover:scale-105 transition-all py-3 px-4 md:px-11 md:py-5 rounded-full flex justify-evenly items-center  z-9999"
            >
              <GoogleIcon className="h-5 md:h-7 mr-2" />
              <p className="font-bold text-[#193596] font-[Noto_Sans_Thai] text-nowrap md:text-xl">
                Sign In With Google
              </p>
            </button>
            <div className="z-20 flex items-center justify-center mt-2">
              <p
                translate="no"
                className="text-[#F4F2C4] text-4xl font-semibold text-shadow-black tracking-tight"
              >
                กช.
              </p>
              <div className="mx-3 h-6 w-0.5 bg-[#F4F2C4] sm:h-8"></div>
              <div className="flex flex-col text-[#F4F2C4] text-xs">
                <p>งานกิจกรรมพัฒนาผู้เรียน</p>
                <p>โรงเรียนเตรียมอุดมศึกษา</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* dark line */}
      <div className="flex flex-col-reverse absolute bottom-0 z-10">
        <div className="bg-[#0B1956] w-screen h-[8vh]"></div>
        <div className="bg-[#0B1956] w-screen h-[3vh] mb-3"></div>
      </div>
      <div></div>
    </section>
  );
}
