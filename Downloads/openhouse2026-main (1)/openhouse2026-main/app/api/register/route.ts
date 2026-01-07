import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { auth } from '@/lib/auth'

export async function POST(req: Request) {
  try {
    const session = await auth.api.getSession({ headers: req.headers })

    if (!session?.user) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }

    if (session.user.isBooking) {
      return NextResponse.json(
        { error: "User already booked" },
        { status: 409 }
      );
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
    
    // ✅ TRANSACTION STARTS HERE
    const result = await prisma.$transaction(async (tx) => {
      // get last registerId
      const lastBooking = await tx.booking.findFirst({
        orderBy: { registerId: "desc" },
        select: { registerId: true },
      });

      const lastNumber = lastBooking
        ? parseInt(lastBooking.registerId, 10)
        : 0;

      const newRegisterId = String(lastNumber + 1).padStart(5, "0");

      const saved = await tx.booking.create({
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
          userId,
        },
      });

      const updateUser = await tx.user.update({
        where: { id: userId },
        data: { isBooking: true },
      });

      return { saved, updateUser };
    });
    // ✅ TRANSACTION ENDS HERE

    return NextResponse.json(result);
  } catch (err) {
    return NextResponse.json(
      { error: err },
      { status: 500 }
    );
  }
}
