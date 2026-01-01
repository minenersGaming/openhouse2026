"use client";
import PersonIcon from "@/vector/LandingPage/PersonIcon";
import { useRouter } from "next/navigation";
import { useSession, signOut } from "@/lib/auth-client";

import { Noto_Sans_Thai } from "next/font/google";

const NotoSansThai = Noto_Sans_Thai({
  variable: "--font-noto-sans-thai",
  subsets: ["thai", "latin"],
});

const style =
  "shadow-sm/35  z-6767 hover:scale-105 flex flex-row bg-linear-to-r from-[#C5A064] to-[#E5C675] lg:py-2 lg:px-5 py-2 px-5 rounded-full";
const TextStyle =
  "font-bold text-shadow-sm/10 text-white text-lg lg:text-2xl font-noto-sans-thai";
const Button = () => {
  const { data, isPending } = useSession();
  const router = useRouter();

  // const handleLogin = async () => {
  //   // to register page
  //   router.push("/register");
  // };

  return (
    <>
      {!isPending ? (
        !data?.user ? (
          <div
            //   onClick={handleLogin}
            className={style}
          >
            <p className={TextStyle}>Register</p>
          </div>
        ) : (
          <div
            //   onClick={handleLogin}
            className={style}
          >
            <p className={TextStyle}>E-ticket</p>
          </div>
        )
      ) : (
        <a href="/ticket" className={style}>
          <p className={TextStyle}>Loading..</p>
        </a>
      )}
    </>
  );
};

export default Button;
