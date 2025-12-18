"use client";

import { useEffect, useState } from "react";
import Logo from "@/vector/Logo";
import MenuIcon from "./MenuIcon";
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

const Header = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isWaitClose, setWaitClose] = useState(false);
  const [hidden, setHidden] = useState(false);

  async function ToggleSidebar() {
    if (isSidebarOpen) {
      setWaitClose(true);
      await new Promise((wait) => setTimeout(wait, 500));
      setWaitClose(false);
    }
    setSidebarOpen(!isSidebarOpen);
  }

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const onScroll = () => {
      if (isSidebarOpen) return;

      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setHidden(true);
      } else {
        setHidden(false);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isSidebarOpen]);

  return (
    <header
      className={`
        sticky top-0 -z-10
        transition-transform duration-300 ease-out
        ${hidden ? "-translate-y-full" : "translate-y-0"}
        w-full bg-linear-to-r from-[#0B1855]/80 to-[#042284]/80
        h-14 lg:h-16 backdrop-blur-sm
        flex justify-between items-center px-4 lg:px-10
      `}
    >
      <a href="/" className="flex justify-start cursor-pointer md:pl-3 lg:pl-7">
        <Logo className="w-10 lg:w-13" />
        <div className="flex flex-col px-2 lg:px-3 -space-y-1 items-start justify-center">
          <h1 className="uppercase font-bold text-md lg:text-xl text-white tracking-wider">
            triam udom
          </h1>
          <h2 className="ml-px uppercase text-white text-xs lg:text-sm tracking-wider">
            OPEN HOUSE 2026
          </h2>
        </div>
      </a>

      <div className="w-1/2 text-white justify-evenly lg:-mr-7 items-center hidden lg:flex">
        <a aria-current="page" href="/" className={`${Style.Link}`}>
          หน้าแรก
        </a>
        <a href="" className={Style.Link}>
          ตารางการแสดง
        </a>
        <a href="" className={Style.Link}>
          ชมรม
        </a>
        <a href="" className={Style.Link}>
          เพิ่มเติม
        </a>
        <a href="" className={Style.Link}>
          E-ticket
        </a>
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
          <div className="w-[90vw] p-3 bg-[#0B1855]/69 rounded-[18px] text-white space-y-1">
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
              href="/"
              Icon={<AccountIcon className={Style.NavIcon} />}
              text="บัญชี"
            />
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
