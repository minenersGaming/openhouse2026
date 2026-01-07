"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { useSession, signOut } from "@/lib/auth-client";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";

import Logo from "@/vector/Logo";
import AureateLogo from "@/vector/AureateLogo";
import MenuIcon from "./MenuIcon";
import Toptext from "./TopText";
import SidebarIcon from "@/vector/NavIcon/SideBarIcon";
import CrossIcon from "@/vector/NavIcon/CrossIcon";
import NavRow from "./NavRow";
import HomeIcon from "@/vector/NavIcon/HomeIcon";
import ScheduleIcon from "@/vector/NavIcon/ScheduleIcon";
import MapIcon from "@/vector/NavIcon/MapIcon";
import DirectionIcon from "@/vector/NavIcon/DirectionIcon";
import SouvenirIcon from "@/vector/NavIcon/SouvenirIcon";
import AccountIcon from "@/vector/NavIcon/AccountIcon";


const Style = {
  Link: "cursor-pointer aria-[current=page]:font-bold hover:font-bold transition-all",
  NavIcon: "w-4 mr-3",
};

const HeaderDev = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isWaitClose, setWaitClose] = useState(false);
  const [hidden, setHidden] = useState(false);
  const pathname = usePathname();
  const { data, isPending } = useSession();
  const router = useRouter();
  const [isHovering, setIsHovering] = useState(false);
  const [shows, setShows] = useState(false)
  const { scrollY } = useScroll();
  const [showShows, setShowShows] = useState(false)
  const arrow = `w-2 h-[2px] bg-white transition ease transform duration-300`



  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (isSidebarOpen) return;

    if (latest > previous && latest > 80) {
      setHidden(true);
    } else if (latest < previous) {
      setHidden(false);
    }
  });

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  async function ToggleSidebar() {
    if (isSidebarOpen) {
      setWaitClose(true);
      await new Promise((wait) => setTimeout(wait, 500));
      setWaitClose(false);
    }
    setSidebarOpen(!isSidebarOpen);
  }

  return (
    <motion.header
      initial={{ y: 0 }}
      animate={{ y: hidden ? "-100%" : 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={`
        z-9967 fixed top-0 left-0 right-0
        w-full bg-linear-to-r from-[#0B1855]/80 to-[#042284]/80
        h-14 lg:h-16 backdrop-blur-sm
        flex justify-between items-center px-4 lg:px-10
      `}
    >
      <Link
        href="/"
        className="flex justify-start cursor-pointer md:pl-3 lg:pl-7"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Logo
          className={`w-10 lg:w-13 transition-all duration-400 drop-shadow-sm/0 drop-shadow-white opacity-100 ${
            isHovering &&
            "drop-shadow-sm/100 bg-linear-to-t from-[#E6C674] via-[#F3E19D] to-[#FFFEEF] bg-clip-text opacity-0"
          } `}
        />
        {/* {isHovering && <AureateLogo className={`z-20 absolute w-10 lg:w-13 transition-all duration-400 drop-shadow-sm/0 drop-shadow-white ${
            isHovering ? "drop-shadow-sm/100 opacity-0": "opacity-100"
          } `}/>} */}

        <Toptext hover={isHovering} />
      </Link>

      <div className="w-1/2 text-white justify-evenly lg:-mr-7 items-center hidden lg:flex">
        <Link
          href="/"
          aria-current={pathname === "/" ? "page" : undefined}
          className={Style.Link}
        >
          หน้าแรก
        </Link>
        <div
            className={`group relative inline-block cursor-pointer ${pathname.startsWith('/performance/lan70') || pathname.startsWith('/performance/auditorium')
              ? 'font-semibold'
              : ''
              } `}
            onMouseOver={() => setShows(true)}
            onClick={() => setShows(true)}
            onMouseLeave={() => setShows(false)}
          >
            <span className="hover:font-bold transition-all">ตารางการแสดง</span>
            <AnimatePresence>
              {shows && (
                <motion.div
                  key={'dropdown'}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute -bottom-[6.03rem] bg-[#1C3BA2] -left-4 z-20 flex w-36 cursor-pointer flex-col items-center justify-center rounded-xl bg-opacity-70"
                >
                  <Link href="/" className="py-2 hover:bg-opacity-100 cursor-pointer">
                    หอประชุมฯ
                  </Link>
                  <div className="h-px w-full bg-white opacity-40" />
                  <Link href="/" className="py-2 hover:bg-opacity-100 cursor-pointer">
                    ลาน 70 ปีฯ
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        <Link href="/" className={Style.Link}>
          ชมรม
        </Link>
        <Link href="/" className={Style.Link}>
          เพิ่มเติม
        </Link>
        {/* {true ? ( */}
        {isPending || !data?.user ? (
          <Link
            href="/register"
            aria-current={pathname === "/register" ? "page" : undefined}
            className={Style.Link}
          >
            ลงทะเบียน
            {/* E-ticket */}
          </Link>
        ) : (
          <Link
            href="/ticket"
            className="cursor-pointer font-bold bg-linear-to-r from-[#C5A064] to-[#E5C675] px-3 py-1 rounded-full"
          >
            <p className="text-shadow-sm/15 font-noto-sans-thai">E-ticket</p>
          </Link>
        )}
      </div>

      <div onClick={ToggleSidebar} className={`block p-0 lg:hidden`}>
        <MenuIcon
          open={!isWaitClose && isSidebarOpen}
          className="w-7 cursor-pointer md:lr-5"
        />
      </div>

      {isSidebarOpen && (
        <div
          className={`
             w-[95vw] justify-center items-center top-16 block lg:hidden
            ${isWaitClose ? "outro-fade-down" : "intro-fade-down"} ${
            hidden ? "hidden" : "fixed"
          }
          `}
        >
          <div className="w-[90vw] p-3 bg-[#0B1855]/69 rounded-[18px] text-white space-y-3.5">
            <NavRow
              href="/"
              Icon={<HomeIcon className={Style.NavIcon} />}
              text="หน้าแรก"
            />
            {/* <NavRow
              href="/"
              Icon={<ScheduleIcon className={Style.NavIcon} />}
              text="ตารางการแสดง"
            /> */}
            <div
              className="flex w-full items-center justify-between"
              onClick={() => setShowShows(!showShows)}
            >
              <div className="p-1 flex ">
                <ScheduleIcon className={Style.NavIcon} />
                <p className="text-left text-lg text-white active:underline">ตารางการแสดง</p>
              </div>
              <div className="relative mr-8 flex">
                <div
                  className={`${arrow} ${showShows
                    ? 'absolute -left-[5px] top-0 rounded-l-full'
                    : 'absolute -left-[5px] top-0 rotate-45 rounded-l-full'
                    }`}
                />
                <div
                  className={`${arrow} ${showShows ? 'rounded-r-full' : '-rotate-45 rounded-r-full'}`}
                />
              </div>
            </div>
            <AnimatePresence>
              {showShows && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{
                    duration: 0.3,
                    delay: 0,
                  }}
                  className="bg-[#0B1855]/80 px-4 rounded-xl"
                >
                  <NavRow href="/performance/auditorium" text="หอประชุมฯ" />
                  <div className="w-full bg-white h-px"></div>
                  <NavRow href="/performance/lan70" text="ลาน 70 ปีฯ" />
                </motion.div>
              )}
            </AnimatePresence>
            <NavRow
              href="/"
              Icon={<MapIcon className={Style.NavIcon} />}
              text="แผนผังงาน"
            />
            <NavRow
              href="/"
              Icon={<DirectionIcon className={Style.NavIcon} />}
              text="การเดินทางมาโรงเรียน"
            />
            <NavRow
              href="/"
              Icon={<SouvenirIcon className={Style.NavIcon} />}
              text="สินค้าที่ระลึก"
            />
            <NavRow
              href={isPending || !data?.user ? "/register" : "/ticket"}
              // href="/"
              Icon={<AccountIcon className={Style.NavIcon} />}
              // text="บัญชี"
              text={isPending || !data?.user ? "ลงทะเบียน" : "E-ticket"}
            />
          </div>
        </div>
      )}
    </motion.header>
  );
};

export default HeaderDev;
