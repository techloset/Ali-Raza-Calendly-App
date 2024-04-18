import { withAuth } from "next-auth/middleware";
import { NextRequest } from "next/server";

export default withAuth(
  // This function can be marked `async` if using `await` inside
  function middleware(request: NextRequest) {
    // return NextResponse.redirect(new URL("/", request.url));
  },
  {
    secret: process.env.NEXTAUTH_SECRET,
  }
);
// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/", "/events", "/date", "/availability"],
};
