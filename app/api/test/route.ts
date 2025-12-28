import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma"; // your prisma client
import { unique } from "next/dist/build/utils";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const {username, fullname, surname, userStatus, school, grade, registerId, userId} = body;

    if (!username || !fullname || !surname || !userStatus || !school || !grade || !registerId) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    const saved = await prisma.booking.create({
      data: {
        username,
        fullname,
        surname,
        userStatus,
        school,
        grade,
        registerId,
        userId
      },
    });

    return NextResponse.json(saved);
  } catch (err) {
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
