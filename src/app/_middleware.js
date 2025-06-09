import { NextResponse } from "next/server";
import { isAuthenticatedServer } from "../lib/auth";

export function middleware(request) {
  const url = request.nextUrl.pathname;

  // Protect all routes under /protected
  if (url.startsWith("/protected")) {
    if (!isAuthenticatedServer()) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/protected/:path*"],
};
