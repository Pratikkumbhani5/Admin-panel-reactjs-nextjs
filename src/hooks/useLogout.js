import { Navigate, Outlet } from "react-router-dom";

const useAuth = () => {
  const isAuthCheck = localStorage.getItem("token");
  return isAuthCheck === null ? false : true;

  // console.log(auth);

  // console.log(allowedRoles.includes(auth));
  // if (allowedRoles?.includes("admin")) {
  //   console.log("if");
  // }
};

const RequireLogout = () => {
  const auth = useAuth();

  return auth ? <Navigate to="/dashboard" /> : <Outlet />;
};

export default RequireLogout;
