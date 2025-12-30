import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
export default async function proxy(request: NextRequest) {
  const path = request.nextUrl.pathname;
  const currentPath = decodeURIComponent(path);
  const url = new URL(request.url);

  const res = await fetch(`${url.origin}/api/auth/check-session`, {
    headers: request.headers,
  });
  const json = await res.json();
  
  if (json.ok) {
    const user = json.data.user;
    console.log(user);
    if(currentPath !== "/register" && currentPath !== "/" && !user.isBooking)return NextResponse.redirect(new URL("/register", request.url));
    if(currentPath === "/register" && user.isBooking)return NextResponse.redirect(new URL("/", request.url));
    return NextResponse.next();
}
  if(currentPath !== "/") return NextResponse.redirect(new URL("/", request.url));
  return NextResponse.next();
}

export const config = {
 matcher: [
    "/",
    "/ticket",
    "/register"
  ],
}