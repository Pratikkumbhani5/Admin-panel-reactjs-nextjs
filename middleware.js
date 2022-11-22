import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth({
  callbacks: {
    authorized({ req, token }) {
      // console.log(req.nextUrl.pathname, "path");
      // console.log(token);

      const AdminRoles = ["/users", "/add-user"];
      const DynamicRoute = ["/edit/"];
      const UserRoles = ["/user"];

      // `/users` requires admin role
      for (let i = 0; i < AdminRoles.length; i++) {
        if (req.nextUrl.pathname === AdminRoles[i]) {
          // console.log(AdminRoles, "AdminRoles");
          return token?.role === "SuperAdmin";
        }
      }

      // `/user` requires admin role
      // for (let i = 0; i < UserRoles.length; i++) {
      //   if (req.nextUrl.pathname === UserRoles[i]) {
      //     console.log(UserRoles, "UserRoles");
      //     return token?.role === "User";
      //   }
      // }

      if (req.nextUrl.pathname === "/user") {
        return token?.role === "User" || token?.role === "SuperAdmin";
      }

      // for (let i = 0; i < DynamicRoute.length; i++) {
      //   if (req.nextUrl.pathname.includes(DynamicRoute[i])) {
      //     console.log(DynamicRoute, "IN");
      //     return token?.role === "SuperAdmin";
      //   } else {
      //     console.log("ELSE");
      //     return NextResponse.redirect(new URL("/", req.url));
      //   }
      // }

      // if (req.nextUrl.pathname === ["/user"]) {
      //   return token?.role === "User";
      // }

      // `/dashboard` only requires the user to be logged in

      return !!token;
    },
  },
});

export const config = {
  matcher: ["/user", "/dashboard", "/users", "/add-user", "/edit/:path*"],
};
