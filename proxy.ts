import { NextResponse } from "next/server";
import { headers } from "next/headers";
import type { NextRequest } from "next/server";
import { auth } from "./lib/auth";

export default async function proxy(request: NextRequest) {
  const path = request.nextUrl.pathname;
  const currentPath = decodeURIComponent(path);

  const session = await auth.api.getSession({
    headers: await headers()
  })

  if (currentPath.startsWith("/checkin")) {
    if (!session?.user.isStaff) {
      return NextResponse.redirect(new URL("/", request.url));
    }
    return NextResponse.next();
  }


  if (
    currentPath !== "/register/user" &&
    !session?.user.isBooking
  ) {
    return NextResponse.redirect(new URL("/register/user", request.url));
  }

  if (currentPath === "/register/user" && session?.user.isBooking) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/",
    "/ticket",
    "/register/user",
    "/checkin",
  ],
};
