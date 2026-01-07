import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const clubs = await prisma.club.findMany({
      where: { status: { in: ["passed", "failed", "pending"] } }, //change later when its all "passed"
      select: {
        key: true,
        thainame: true,
        logo: true,
      },
      orderBy: { thainame: "asc" },
    });

    return NextResponse.json({ ok: true, data: clubs });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { ok: false, reason: "Failed to fetch" },
      { status: 500 }
    );
  }
}
