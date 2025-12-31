import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { auth } from "@/lib/auth";

export async function POST(request: NextRequest) {
  const session = await auth.api.getSession({
    headers: request.headers,
  });

  if (!session || !session.user?.isStaff) {
    return NextResponse.json(
      { error: "Unauthorized" },
      { status: 401 }
    );
  }

  const body = await request.json();
  const { registerId } = body;

  if (!registerId) {
    return NextResponse.json(
      { error: "Missing registerId" },
      { status: 400 }
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

  if (booking.user.checkedIn) {
    return NextResponse.json(
      { error: "Already checked in" },
      { status: 409 }
    );
  }

  await prisma.user.update({
    where: { id: booking.userId },
    data: { checkedIn: true },
  });

  return NextResponse.json({
    ok: true,
    message: "Checked in successfully",
  });
}
