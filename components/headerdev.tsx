"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { useSession, signOut } from "@/lib/auth-client";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

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
  Link: "cursor-pointer aria-[current=page]:font-bold",
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

  const { scrollY } = useScroll();

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
    console.log("Mouse entered!");
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    console.log("Mouse left!");
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
        fixed top-0 left-0 right-0 z-50
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
          className={`w-10 lg:w-13 transition-all duration-400 drop-shadow-sm/0 drop-shadow-white ${isHovering && "drop-shadow-sm/100"
            } `} />
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
        <a href="" className={Style.Link}>
          ตารางการแสดง
        </a>
        <a href="" className={Style.Link}>
          ชมรม
        </a>
        <a href="" className={Style.Link}>
          เพิ่มเติม
        </a>
        {/* {true ? ( */}
        {isPending || !data?.user ? (
          <Link
            href="/register"
            // href="/"
            aria-current={pathname === "/register" ? "page" : undefined}
            className={Style.Link}
          >
            ลงทะเบียน
            {/* E-ticket */}
          </Link>
        ) : (
          <a
            href="/ticket"
            className="cursor-pointer font-bold bg-linear-to-r from-[#C5A064] to-[#E5C675] px-3 py-1 rounded-full"
          >
            <p className="text-shadow-sm/15 font-noto-sans-thai">E-ticket</p>
          </a>
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
            ${isWaitClose ? "outro-fade-down" : "intro-fade-down"} ${hidden ? "hidden" : "fixed"
            }
          `}
        >
          <div className="w-[90vw] p-3 bg-[#0B1855]/69 rounded-[18px] text-white space-y-3.5">
            <NavRow
              href="/"
              Icon={<HomeIcon className={Style.NavIcon} />}
              text="หน้าแรก"
            />
            <NavRow
              href="/"
              Icon={<ScheduleIcon className={Style.NavIcon} />}
              text="ตารางการแสดง"
            />
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
