import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import {
  OPH_FIRST_DAY_TIMESTAMP,
  OPH_SECOND_DAY_TIMESTAMP,
  IS_OPH_ONGOING,
  OPH_END_TIME_TIMESTAMP,
} from "@/config/time";

export async function POST(req: NextRequest) {
  try {
    const session = await auth.api.getSession({ headers: req.headers });

    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    if (!session.user.isStaff) {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }

    if (!IS_OPH_ONGOING) {
      return NextResponse.json(
        { error: "งานยังไม่เริ่มหรือสิ้นสุดแล้ว" },
        { status: 400 }
      );
    }

    const body = await req.json();
    const { door, registerId } = body;

    if (!door || !registerId) {
      return NextResponse.json(
        { error: "กรุณาใส่ประตูและรหัสเข้างาน" },
        { status: 400 }
      );
    }

    const guest = await prisma.booking.findUnique({
      where: { registerId },
      select: {
        userId: true,
      },
    });

    if (!guest) {
      return NextResponse.json(
        { error: "ไม่พบรหัสเข้างานนี้ในระบบ" },
        { status: 404 }
      );
    }

    const guestUserId = guest.userId;
    const now = Date.now();
    let checkInDay: "day1" | "day2";

    if (now >= OPH_FIRST_DAY_TIMESTAMP && now < OPH_SECOND_DAY_TIMESTAMP) {
      checkInDay = "day1";
    } else if (
      now >= OPH_SECOND_DAY_TIMESTAMP &&
      now < OPH_END_TIME_TIMESTAMP
    ) {
      checkInDay = "day2";
    } else {
      return NextResponse.json(
        { error: "ไม่อยู่ในช่วงเวลาของงาน" },
        { status: 400 }
      );
    }

    const user = await prisma.user.findUnique({
      where: { id: guestUserId },
      select: {
        checkIn: true,
      },
    });

    if (!user) {
      return NextResponse.json(
        { error: "ไม่พบผู้ใช้ในระบบ" },
        { status: 404 }
      );
    }

console.log("Current user checkIn:", JSON.stringify(user.checkIn, null, 2));
console.log("Checking day:", checkInDay);
console.log("checkIn exists?:", !!user.checkIn?.[checkInDay]?.checkIn);

    // FIX: Check if already checked in for this day
    if (user.checkIn?.[checkInDay]?.checkIn) {
      return NextResponse.json(
        { error: "รหัสเข้างานถูกเช็กอินไปแล้ว" },
        { status: 400 }
      );
    }

    // FIX: Update with proper nested structure for MongoDB
    const currentCheckIn = user.checkIn || { day1: null, day2: null };
    
    await prisma.user.update({
      where: { id: guestUserId },
      data: {
        checkIn: {
          ...currentCheckIn,
          [checkInDay]: {
            door,
            checkIn: new Date(), // Use DateTime instead of string
          },
        },
      },
    });

    return NextResponse.json({ message: "เช็กอินสำเร็จ" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
}
