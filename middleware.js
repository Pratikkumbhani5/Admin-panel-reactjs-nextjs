import { withAuth } from "next-auth/middleware";

export default withAuth({
  callbacks: {
    authorized({ req, token }) {
      const getTimestampInSeconds = () => {
        return Math.floor(Date.now() / 1000);
      };

      // console.log(token, "mw");
      if (token) {
        if (token.expTime <= getTimestampInSeconds()) {
          // console.log("ON");
          return false;
        }
      }

      if (req.nextUrl.pathname === "/admin/dashboard") {
        return (
          token?.role === 1 ||
          token?.role === 2 ||
          token?.role === 3 ||
          token?.role === 4
        );
      }

      if (
        req.nextUrl.pathname === "/admin/add-blog" ||
        req.nextUrl.pathname === "/admin/blog" ||
        req.nextUrl.pathname.match(/^\/admin\/view-blog\/.+$/) ||
        req.nextUrl.pathname.match(/^\/admin\/edit-blog\/.+$/)
      ) {
        return token?.role === 1 || token?.role === 2 || token?.role === 3;
      }

      if (req.nextUrl.pathname === "/admin/leads") {
        return token?.role === 1 || token?.role === 2 || token?.role === 4;
      }

      if (req.nextUrl.pathname === "/admin/user") {
        return token?.role === 1 || token?.role === 2;
      }

      if (
        req.nextUrl.pathname === "/admin/add-user" ||
        req.nextUrl.pathname.match(/^\/admin\/edit-user\/.+$/)
      ) {
        return token?.role === 1;
      }

      // if (req.nextUrl.pathname.match(/^\/admin\/edit-user\/.+$/)) {
      //   return token?.role === 1;
      // }

      return !!token;
    },
  },
});

export const config = {
  matcher: [
    "/admin/dashboard",
    "/admin/add-blog",
    "/admin/blog",
    "/admin/edit-blog/:path*",
    "/admin/view-blog/:path*",
    "/admin/user",
    "/admin/add-user",
    "/admin/edit-user/:path*",
    "/admin/leads",
  ],
};
