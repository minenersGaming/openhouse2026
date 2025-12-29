import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { auth } from '@/lib/auth'

export async function POST(req: Request) {
  try {
    // ✅ Read session from BetterAuth
    const session = await auth.api.getSession({ headers: req.headers })

    if (!session?.user) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }

    const userId = session.user.id

    const body = await req.json();
    const {username, fullname, surname, userStatus, school, grade, receivedInfo, purpose} = body;

    if (!username || !fullname || !surname || !userStatus || !school || !grade) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }
    //auto generate registerId
    const bookingCount = await prisma.booking.count();
    const newRegisterId = String(bookingCount + 1).padStart(5, '0');

    const saved = await prisma.booking.create({
      data: {
        username,
        fullname,
        surname,
        userStatus,
        school,
        grade,
        registerId: newRegisterId,
        receivedInfo,
        purpose,
        userId
      },
    });

    return NextResponse.json(saved);
  } catch (err) {
    return NextResponse.json(
      { error: err },
      { status: 500 }
    );
  }
}
