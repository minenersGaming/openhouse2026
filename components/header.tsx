"use client";

import { useState } from "react";
import Logo from "@/vector/Logo";
import SidebarIcon from "@/vector/NavIcon/SideBarIcon";
import CrossIcon from "@/vector/NavIcon/CrossIcon";
import NavRow from "./NavRow";
import HomeIcon from "@/vector/NavIcon/HomeIcon";
import ScheduleIcon from "@/vector/NavIcon/ScheduleIcon";
import MapIcon from "@/vector/NavIcon/MapIcon";
import DirectionIcon from "@/vector/NavIcon/DirectionIcon";
import SouvenirIcon from "@/vector/NavIcon/SouvenirIcon";
import AccountIcon from "@/vector/NavIcon/AccountIcon";
import Home from "@/app/page";
const Style = {
  Link: "cursor-pointer aria-[current=page]:font-bold",
  NavIcon: "w-4 mr-3",
};

const Header = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isWaitClose, setWaitClose] = useState(false);

  async function ToggleSidebar() {
    if (isSidebarOpen) {
      setWaitClose(true);
      await new Promise((wait) => setTimeout(wait, 500));
      setWaitClose(false);
    }
    setSidebarOpen(!isSidebarOpen);
  }

  return (
    <header className="w-screen bg-linear-to-r from-[#0B1855] to-[#042284] h-14 lg:h-16 backdrop-blur-sm flex justify-between items-center px-4 lg:px-10">
      <div className="flex justify-start">
        <Logo className="w-10 lg:w-12" />
        <div className="flex flex-col px-2 lg:px-3 -space-y-1 items-center justify-center">
          <h1 className="uppercase font-bold text-md lg:text-xl text-white tracking-wider lg:tracking-wider ">
            triam udom
          </h1>
          <h2 className="uppercase text-white text-xs lg:text-sm lg:tracking-wider">
            open house 2026
          </h2>
        </div>
      </div>
      <div className="w-1/2 text-white justify-evenly items-center hidden lg:flex">
        <a href="/" className={`${Style.Link}`}>
          หน้าแรก
        </a>
        <a href="" className={`${Style.Link}`}>
          ตารางการเรียน
        </a>
        <a href="" className={`${Style.Link}`}>
          ชมรม
        </a>
        <a href="" className={`${Style.Link}`}>
          เพิ่มเติม
        </a>
        <a href="" className={`${Style.Link}`}>
          E-ticket
        </a>
      </div>
      <div onClick={ToggleSidebar} className="block p-0 lg:hidden">
        {isSidebarOpen ? (
          <CrossIcon className="w-5 cursor-pointer stroke-4" />
        ) : (
          <SidebarIcon className="w-7 cursor-pointer" />
        )}
      </div>
      {isSidebarOpen && (
        <div
          className={`
            absolute w-[95vw] justify-center items-center top-16 ${
              isWaitClose ? "outro-fade-down" : "intro-fade-down"
            }`}
        >
          <div className=" w-[90vw] p-3 bg-[#0B1855]/69 rounded-[20px] text-white">
            <NavRow
              href="/"
              Icon={<HomeIcon className={`${Style.NavIcon}`} />}
              text="หน้าแรก"
            />
            <NavRow
              href="/"
              Icon={<ScheduleIcon className={`${Style.NavIcon}`} />}
              text="ตารางการแสดง"
            />
            <NavRow
              href="/"
              Icon={<MapIcon className={`${Style.NavIcon}`} />}
              text="แผนผังงาน"
            />
            <NavRow
              href="/"
              Icon={<DirectionIcon className={`${Style.NavIcon}`} />}
              text="การเดินทางมาโรงเรียน"
            />
            <NavRow
              href="/"
              Icon={<SouvenirIcon className={`${Style.NavIcon}`} />}
              text="สินค้าที่ระลึก"
            />
            <NavRow
              href="/"
              Icon={<AccountIcon className={`${Style.NavIcon}`} />}
              text="บัญชี"
            />
          </div>
        </div>
      )}
    </header>
  );
};
export default Header;
