import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(req: NextRequest) {
  const type = req.nextUrl.searchParams.get("type");
  const key = req.nextUrl.searchParams.get("key");

  if (!type || !key) {
    return NextResponse.json(
      { reason: "Missing type or key" },
      { status: 400 }
    );
  }

  let data = null;

  switch (type) {
    case "clubs":
      data = await prisma.club.findUnique({ where: { key } });
      break;
    case "programs":
      data = await prisma.program.findUnique({ where: { key } });
      break;
    case "gifted":
      data = await prisma.gifted.findUnique({ where: { key } });
      break;
    case "organizations":
      data = await prisma.organization.findUnique({ where: { key } });
      break;
    default:
      return NextResponse.json(
        { reason: "Invalid type" },
        { status: 400 }
      );
  }

  if (!data) {
    return NextResponse.json(
      { reason: "Not found" },
      { status: 404 }
    );
  }

  return NextResponse.json(data);
}
