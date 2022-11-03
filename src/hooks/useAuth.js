import { useLocation, Navigate, Outlet } from "react-router-dom";

const useAuth = () => {
  const isAuthCheck = localStorage.getItem("token");
  return isAuthCheck === null ? false : true;

  // console.log(auth);

  // console.log(allowedRoles.includes(auth));
  // if (allowedRoles?.includes("admin")) {
  //   console.log("if");
  // }
};

const RequireAuth = ({ allowedRoles }) => {
  const AuthRole = localStorage.getItem("role");

  const auth = useAuth();
  // console.log(auth);
  // console.log(allowedRoles);
  const location = useLocation();

  return allowedRoles.includes(AuthRole) ? (
    <Outlet />
  ) : auth ? (
    <Navigate to="/unauthorized" state={{ from: location }} replace />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default RequireAuth;
