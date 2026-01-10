"use client";
import { signIn } from "@/lib/auth-client";
import LgStarTL from "@/vector/signInPage/LgStarTL";
import LgStarML from "@/vector/signInPage/LgStarML";
import LgStarR from "@/vector/signInPage/LgStarR";
import SmStarLeft from "@/vector/signInPage/SmStarLeft";
import SmStarRight from "@/vector/signInPage/SmStarRight";
import Pole from "@/vector/signInPage/Pole";
import LgWindow from "@/vector/signInPage/Lgwindow";
import LgTopLine from "@/vector/signInPage/LgTopLine";
import LgLight from "@/vector/signInPage/LgLight";
import LgBrickL from "@/vector/signInPage/LgBrickL";
import LgBrickR from "@/vector/signInPage/LgBrickR";
import LgBrickM from "@/vector/signInPage/LgBrickM";
import SmWindow from "@/vector/signInPage/SmWindow";
import SmTopLine from "@/vector/signInPage/SmTopLine";
import SmLight from "@/vector/signInPage/SmLight";
import BrickTL from "@/vector/signInPage/brickTL";
import BrickTR from "@/vector/signInPage/BrickTR";
import BrickBL from "@/vector/signInPage/BrickBL";
import BrickBR from "@/vector/signInPage/BrickBR";
import RegisterText from "@/vector/signInPage/RegisterText";
import GoogleButton from "@/vector/signInPage/GoogleButton";
import TucmcLogo from "@/vector/signInPage/TucmcLogo";

export default function Home() {
  const handleLogin = async () => {
    await signIn.social({
      provider: "google",
      callbackURL: "/register/user",
    });
  };

  return (
    <section className="h-screen bg-linear-to-bl from-[#467BCA] via-[#354FB0] via-41% to-[#042284] relative overflow-clip z-0">
      {/* Pole */}
      <Pole className="hidden lg:block absolute right-0 top-0 h-full w-auto z-10" />
      {/* Brick right */}
      <LgBrickR className=" z-0 hidden lg:block absolute bottom-[35vh] right-30 h-[12vh] w-auto " />
      <BrickBL className=" z-0 lg:hidden absolute bottom-[18vh] left-[4vw] md:bottom-50 md:left-45  w-[120px] h-auto " />
      <BrickTL className=" z-0 lg:hidden absolute top-[26vh] left-[4vw] md:top-60 md:left-30  w-[120px] h-auto " />
      <BrickBR className=" z-0 lg:hidden absolute bottom-[27vh] right-[2vw] md:bottom-80 md:right-25  w-[120px] h-auto " />
      <BrickTR className=" z-0 lg:hidden absolute top-[10vh] right-[1vw] md:top-30 md:right-20  w-[120px] h-auto " />
      {/*top line */}
      <LgTopLine className="z-0 hidden lg:block absolute right-45 xl:right-55 top-0 h-[380px] xl:h-[25vw] w-auto" />
      {/* Light Effect */}
      <LgLight className=" hidden lg:block absolute right-0 top-0 h-full w-auto " />
      <SmLight className=" lg:hidden absolute right-0 top-0 h-full w-auto " />
      {/* object  */}
      <div className="flex h-screen mx-auto w-[90%] md:w-[70%] flex-col lg:flex-row lg:w-screen lg:justify-start lg:items-center">
        {/* sm box */}
        <div className=" lg:hidden relative w-full h-[20vh] md:h-[18vh] max-w-[470px] md:max-w-[570px] mx-auto">
          <SmTopLine className="z-40 absolute w-full h-auto top-0 left-0 md:top-auto md:left-auto md:-bottom-20 md:right-0 " />
        </div>
        <div className="z-20 relative lg:hidden mx-auto w-[80%] max-w-[320px] h-auto md:h-[45vh] md:w-[320px] ">
          <SmWindow className="w-full h-auto  md:absolute md:h-full md:w-auto md:left-1/2 md:-translate-x-1/2 " />

          <SmStarLeft className="block lg:hidden absolute top-27 -left-12 w-[210px] md:top-23 md:-left-25 md:w-[270px] h-auto" />
          <SmStarRight className="block lg:hidden absolute -top-9 -right-12 w-[210px] md:-top-24 md:-right-26 md:w-[270px] h-auto" />
        </div>

        {/* lg box */}
        {/* window box */}
        <div className=" hidden lg:block lg:w-[46%] lg:max-w-[69vh] xl:w-[50%] 2xl:w-[71vh] h-full relative">
          {/* Bricks */}
          <LgBrickL className="-z-10 hidden lg:block absolute top-20 left-10 xl:left-30 h-[8.5vh] w-auto xl:h-[9vh] xl:w-auto" />
          <LgBrickM className="-z-10 hidden lg:block absolute top-20 -right-[20vw] 2xl:-right-[12.5vw] h-[75vh] w-auto" />
          {/* Window */}
          <LgWindow className="z-10 hidden lg:block absolute bottom-0 right-0 h-[91vh] w-auto 2xl:w-auto 2xl:h-[91vh] 2xl:bottom-0 2xl:left-0" />
        </div>
        <div className="flex-1 flex lg:w-[50%] xl:flex-1 h-full justify-center lg:items-center mt-[7vh] md:mt-[10vh]">
          {/* register box */}
          <div className="h-40 relative flex flex-col items-center justify-center space-y-2 w-[250px] md:w-[300px]">
            <LgStarTL className="hidden lg:block absolute -top-45 -left-50 z-40" />
            <LgStarML className="hidden lg:block absolute top-10 -left-35 z-40" />
            <LgStarR className="hidden lg:block absolute top-30 -right-35 z-40" />

            <RegisterText className=" z-40 absolute w-[270px] -top-5 sm:w-[270px] sm:-top-5 md:w-[320px] md:-top-12 lg:w-[400px] lg:-top-14 h-auto" />
            <GoogleBu
              tton
              // onClick={handleLogin}
              className="hidden lg:block cursor-not-allowed z-50 absolute w-[270px] top-19 sm:top-19 sm:w-[270px] md:w-[320px] md:top-16 lg:w-[400px] lg:top-20 hover: scale-105 transition-all h-auto "
            />
            <TucmcLogo className=" z-40 absolute w-[210px] top-38 sm:w-[210px] sm:top-38 md:w-[230px] md:top-39 lg:w-[280px] lg:top-48 h-auto" />
          </div>
        </div>
      </div>

      {/* dark line */}
      <div className="flex flex-col-reverse absolute bottom-0 z-0">
        <div className="bg-[#0B1956]/35 w-screen h-[8vh]"></div>
        <div className="bg-[#0B1956]/35 w-screen h-[3vh] mb-3"></div>
      </div>
    </section>
  );
}
