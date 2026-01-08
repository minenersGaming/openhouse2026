import { NextResponse,NextRequest } from "next/server";
import { prisma } from "@/lib/prisma";

type tucmcType = {
  AllBooking: number;
  AllEntry: number;
  Date1EntryAll: number;
  Date1EntryDoorP: number;
  Date1EntryDoorH: number;
  Date1EntryDoorB: number;

  Date2EntryAll: number;
  Date2EntryDoorP: number;
  Date2EntryDoorH: number;
  Date2EntryDoorB: number;
};

export async function GET(req: NextRequest) {
  try {
    const allBooking = await prisma.booking.count();
    const usersWithCheckIn = await prisma.user.findMany({
      where: {
        checkIn: {
          isNot: null,
        },
      },
      select: {
        checkIn: true,
      },
    });
    let allEntry = 0;
    let date1EntryAll = 0;
    let date1EntryDoorP = 0;
    let date1EntryDoorH = 0;
    let date1EntryDoorB = 0;
    let date2EntryAll = 0;
    let date2EntryDoorP = 0;
    let date2EntryDoorH = 0;
    let date2EntryDoorB = 0;

    usersWithCheckIn.forEach((user) => {
      const checkIn = user.checkIn;

      // Day 1 check-ins
      if (checkIn?.day1?.checkIn) {
        date1EntryAll++;
        allEntry++;

        const door = checkIn.day1.door;
        if (door === "PhayaThai") date1EntryDoorP++;
        else if (door === "Henri") date1EntryDoorH++;
        else if (door === "Building50") date1EntryDoorB++;
      }

      // Day 2 check-ins
      if (checkIn?.day2?.checkIn) {
        date2EntryAll++;
        allEntry++;

        const door = checkIn.day2.door;
        if (door === "PhayaThai") date2EntryDoorP++;
        else if (door === "Henri") date2EntryDoorH++;
        else if (door === "Building50") date2EntryDoorB++;
      }
    });

    const data: tucmcType = {
        AllBooking: allBooking,
        AllEntry: allEntry,
        Date1EntryAll: date1EntryAll,
        Date1EntryDoorP: date1EntryDoorP,
        Date1EntryDoorH: date1EntryDoorH,
        Date1EntryDoorB: date1EntryDoorB,
        Date2EntryAll: date2EntryAll,
        Date2EntryDoorP: date2EntryDoorP,
        Date2EntryDoorH: date2EntryDoorH,
        Date2EntryDoorB: date2EntryDoorB,
        };

    return NextResponse.json( { data,reason:"success" }, { status: 200 });
  } catch (err) {
    console.error("Error fetching TUCMC data:", err);
    return NextResponse.json(
      { data:null, error: "Failed to fetch data" },
      { status: 500 }
    );
  }
}
