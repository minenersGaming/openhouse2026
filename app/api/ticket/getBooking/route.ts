import { NextResponse,NextRequest } from "next/server";
import { prisma } from "@/lib/prisma";
import { auth } from '@/lib/auth'

export async function GET(req: NextRequest) {
  try {
    const session = await auth.api.getSession({
      headers: req.headers,
    });
    if (!session) {
      return NextResponse.json(
        { ok: false, reason: "unauthorized" },
        { status: 401 }
      );
    }
    const userId = session.user.id;

    const booking = await prisma.booking.findUnique({
      where: { userId },
      select: {
        userId:true,
        registerId: true,
        username: true,
        fullname: true,
        surname: true,
        userStatus: true,
      },
    });

    if (!booking) {
      return NextResponse.json(
        { ok: false, reason: "booking not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      ok: true,
      data: booking,
    });

  } catch (err) {
    return NextResponse.json(
      { error: err },
      { status: 500 }
    );
  }
}
