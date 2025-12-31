import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { auth } from "@/lib/auth";

export async function POST(req: Request) {
  try {
    const session = await auth.api.getSession({ headers: req.headers });

    if (!session?.user) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    const body = await req.json();
    const { passworddd } = body;

    if (!passworddd) {
      return NextResponse.json(
        { error: "Enter Secret Code!" },
        { status: 400 }
      );
    }

//Check Staff Code
    if (passworddd !== process.env.STAFF_SECRET_CODE) {
      return NextResponse.json(
        { error: "Invalid Secret Code" },
        { status: 401 }
      );
    }

//Update User isStaff to true
    const updateUser = await prisma.user.update({
      where: { id: session.user.id },
      data: { isStaff: true },
    });

    return NextResponse.json({ success: true, user: updateUser });

  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: "Server error" },
      { status: 500 }
    );
  }
}
