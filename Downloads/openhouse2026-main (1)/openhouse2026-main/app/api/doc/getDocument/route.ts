import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";


export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);

    const type = searchParams.get("type");
    const rawKey = searchParams.get("key");

    if (!type || !rawKey) {
      return NextResponse.json(
        { ok: false, reason: "Missing type or key", data: null },
        { status: 400 }
      );
    }

    const key = decodeURIComponent(rawKey);

    let document: any;

    switch (type) {
      case "clubs":
        document = await prisma.club.findUnique({ where: { key } });
        break;
      case "programs":
        document = await prisma.program.findUnique({ where: { key } });
        break;
      case "gifted":
        document = await prisma.gifted.findUnique({ where: { key } });
        break;
      case "organizations":
        document = await prisma.organization.findUnique({ where: { key } });
        break;
      default:
        return NextResponse.json(
          { ok: false, reason: "Invalid type", data: null },
          { status: 400 }
        );
    }

    if (!document) {
      return NextResponse.json(
        { ok: false, reason: "Document not found", data: null },
        { status: 404 }
      );
    }

    return NextResponse.json({
      ok: true,
      reason: "Preview data",
      data: document,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { ok: false, reason: "Server error", data: null },
      { status: 500 }
    );
  }
}
