import { NextResponse } from "next/server";

export async function middleware(request) {
  const path = request.nextUrl.pathname;
  if (path.split("/")[1] !== "auth" && !request.cookies.has("uat_multikart")) {
    return NextResponse.redirect(new URL(`/auth/login`, request.url));
  }

  if (path.split("/")[1] == "auth" && request.cookies.has("uat_multikart")) {
    return NextResponse.redirect(new URL(`/dashboard`, request.url));
  }

  if (path != `/auth/login`) {
    if (path == `/auth/otp-verification` && !request.cookies.has("ue_multikart")) {
      return NextResponse.redirect(new URL(`/auth/login`, request.url));
    }
    if (path == `/auth/update-password` && (!request.cookies.has("uo_multikart") || !request.cookies.has("ue_multikart"))) {
      return NextResponse.redirect(new URL(`/auth/login`, request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
