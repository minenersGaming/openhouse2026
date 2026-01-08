"use client";

import { useEffect, useState } from "react";
import ClubsCard from "@/components/clubPage/ClubsCard";
import SearchIcon from "@/vector/Contact/SearchIcon";
import Star1 from "@/vector/clubs/Star1";
import Star2 from "@/vector/clubs/Star2";
import Star3 from "@/vector/clubs/Star3";
import Star4 from "@/vector/clubs/Star4";
import StarL from "@/vector/clubs/StarL";
import StarR from "@/vector/clubs/StarR";
import clubData from "@public/data/clubs.json";

export default function ClubsPage() {
  const [search, setSearch] = useState("");

  const filtered = clubData.filter((club) =>
    club.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="relative w-screen min-h-screen bg-linear-to-t from-[#042284] via-[#3450B0] to-[#457BCA] overflow-hidden">
      <StarL className="absolute top-0 -left-10 hidden md:block translate-y-[5%] w-[11%] pointer-events-none" />
      <StarR className="absolute top-0 -right-10 hidden md:block translate-y-[5%] w-[11%] pointer-events-none" />
      <Star1 className="absolute w-[10vw] right-0 top-0 -translate-x-[7vw] translate-y-[110%] block md:hidden" />
      <Star2 className="absolute w-[8vw] left-0 top-0 translate-x-[7vw] translate-y-[1250%] md:hidden" />
      <Star3 className="absolute w-[10vw] left-0 top-0 translate-x-[7vw] translate-y-[1500%] md:hidden" />
      <Star4 className="absolute w-[10vw] right-0 top-0 -translate-x-[7vw] translate-y-[2550%] md:hidden" />
      <div className="flex flex-col items-center pt-30 pb-10">
        <p className="text-5xl font-bold bg-linear-to-r from-[#F3E09D] to-[#FDFAE0] bg-clip-text text-transparent">
          ชมรม
        </p>

        <div className="drop-shadow-xl bg-white px-5 h-10 w-80 md:w-120 lg:w-150 rounded-[20px] m-5 flex items-center">
          <SearchIcon className="w-5" />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="ค้นหาชมรม"
            className="ml-3 w-full outline-none"
          />
        </div>
      </div>

      <div className="flex justify-center px-6 md:px-10 lg:px-20 pb-20">
        <div className="flex flex-wrap justify-center gap-6 max-w-[1000px]">
          {filtered.map((club) => (
            <ClubsCard
              key={club.key}
              id={club.key}
              text={club.name}
              img={club.logo}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
