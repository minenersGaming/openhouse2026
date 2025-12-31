import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { auth } from "@/lib/auth";

export async function GET(
  request: NextRequest,
  ctx: { params: Promise<{ registerId: string }> }
) {
  const { registerId } = await ctx.params; // ✅ REQUIRED

  if (!registerId) {
    return NextResponse.json(
      { error: "Missing registerId" },
      { status: 400 }
    );
  }

  const session = await auth.api.getSession({
    headers: request.headers,
  });

  if (!session || !session.user?.isStaff) {
    return NextResponse.json(
      { error: "Unauthorized" },
      { status: 401 }
    );
  }

  const booking = await prisma.booking.findUnique({
    where: { registerId },
    include: { user: true },
  });

  if (!booking) {
    return NextResponse.json(
      { error: "Booking not found" },
      { status: 404 }
    );
  }

  return NextResponse.json({
    fullname: booking.fullname,
    surname: booking.surname,
    userStatus: booking.userStatus,
    checkedIn: booking.user.checkedIn,
  });
}
