"use client";
import { signIn } from "@/lib/auth-client";
import GoogleIcon from "@/vector/signInPage/GoogleIcon";
import Topline from "@/vector/signInPage/Topline";
import Windows from "@/vector/signInPage/Windows";
import LightBeams from "@/vector/signInPage/LightBeams";
import StarL from "@/vector/signInPage/StarL";
import StarR from "@/vector/signInPage/StarR";
import StarLLg from "@/vector/signInPage/StarLLg";
import StarRLg from "@/vector/signInPage/StarRLg";
import MobileBrick from "@/vector/signInPage/MobileBrick";
import ToplineLg from "@/vector/signInPage/ToplineLg";
import LgBrick from "@/vector/signInPage/LgBrick";
import Pillar from "@/vector/signInPage/Pillar";

import MdStarTL from "@/vector/signInPage/MdStarTL";
import MdStarML from "@/vector/signInPage/MdStarML";
import MdStarR from "@/vector/signInPage/MdStarR";
import SmStarLeft from "@/vector/signInPage/SmStarLeft";
import SmStarRight from "@/vector/signInPage/SmStarRight";

export default function Home() {
  const handleLogin = async () => {
    await signIn.social({
      provider: "google",
      callbackURL: "/register/user",
    });
  };

  return (
    <section className="h-screen bg-linear-to-bl from-[#467BCA] via-[#354FB0] via-41% to-[#042284] relative overflow-clip">
      {/*TopLine md*/}
      <div className="absolute w-full h-auto flex justify-center pt-0 lg:hidden z-45">
        <Topline className="w-[80vw] h-auto block" />
      </div>
      {/*TopLine lg*/}
      <div className="hidden lg:block absolute w-full h-auto -top-5 -right-3/5 z-5">
        <ToplineLg className="h-[50vh] block" />
      </div>
      {/**pillar */}
      <div className="hidden lg:block absolute h-full right-0 top-0 z-25">
        <Pillar className="h-screen block" />
      </div>
      {/*mobile brick*/}
      <div className="absolute flex items-center justify-center w-screen h-screen left-0 z-0 lg:hidden">
        <MobileBrick className="w-[95vw] " />
      </div>
      {/** Lg Brick */}
      <div className="absolute h-full w-full p-5 -top-10 justify-center z-0 hidden lg:flex">
        <LgBrick className="w-[90vw]" />
      </div>
      {/*light beam */}
      <div className="absolute top-0 right-0 z-20">
        <LightBeams className="h-screen" />
      </div>

      <div className=" flex flex-col lg:flex-row items-center justify-center lg:justify-end h-full lg:w-[80vw] space-y-16 z-30 lg:relative">
        <div className="-mt-10 lg:absolute lg:right-1/2 -bottom-40 z-30">
          <Windows className="h-[40vh] lg:h-[105vh] " />
        </div>
        <div className="h-40 relative flex flex-col items-center justify-center space-y-2 w-[250px] lg:w-[300px]">
          <MdStarTL className="hidden lg:block absolute -top-45 -left-50 z-40" />
          <MdStarML className="hidden lg:block absolute top-10 -left-35 z-40" />
          <MdStarR className="hidden lg:block absolute top-30 -right-35 z-40" />
          <SmStarLeft className="block lg:hidden absolute -top-75 -left-17 z-40 w-[200px] md:w-[300px] md:-top-108 md:-left-40 h-auto" />
          <SmStarRight className="block lg:hidden absolute -top-110 -right-18 z-40 w-[200px] md:w-[300px] md:-top-150 md:-right-42 h-auto" />
          <h1 className=" bg-clip-text text-transparent font-bold bg-linear-to-r from-[#FAD1CF] to-[#F4F2C4] to-66% text-5xl lg:text-7xl">
            REGISTER
          </h1>
          <div className="flex justify-between items-center w-[90%] lg:w-full">
            <div className="bg-[#F9D4CE] h-[0.15rem] rounded-full w-[70%] m-2"></div>
            <p className="bg-clip-text text-transparent font-bold bg-linear-to-r from-[#FAD1CF] to-[#F4F2C4] text-xl lg:text-3xl text-nowrap">
              ลงทะเบียน
            </p>
          </div>
          <button
            onClick={handleLogin}
            className="mt-2 bg-linear-to-r from-[#FAD1CF] from-[1.12%] to-[#F4F2C4] to-[66.02%] cursor-pointer hover:scale-105 transition-all py-3 px-4 lg:px-11 lg:py-5 rounded-full flex justify-evenly items-center  z-9999"
          >
            <GoogleIcon className="h-5 lg:h-7 mr-2" />
            <p className="font-bold text-[#193596] font-[Noto_Sans_Thai] text-nowrap lg:text-xl">
              Sign In With Google
            </p>
          </button>
          <div className="flex items-center justify-center mt-2">
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
      <div className="flex flex-col-reverse absolute bottom-0 z-10">
        <div className="bg-[#0B1956] w-screen h-[8vh]"></div>
        <div className="bg-[#0B1956] w-screen h-[3vh] mb-3"></div>
      </div>
      <div></div>
    </section>
  );
}
