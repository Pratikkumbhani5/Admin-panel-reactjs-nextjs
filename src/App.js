import { Fragment } from "react";
import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import DashBoard from "./components/DashBoard";
import Footer from "./components/Footer";
// import Header from "./components/Header";
import Menu from "./components/Menu";
import Login from "./components/Login";
import RequireLogout from "./hooks/useLogout";
import RequireAuth from "./hooks/useAuth";
import Home from "./components/Home";
import RequireLogin from "./hooks/useLogin";
import User from "./components/user/User";
import Unauthorized from "./components/Unauthorized";
import AddUser from "./components/admin/AddUser";
import UserList from "./components/admin/UserList";
import EditUser from "./components/admin/EditUser";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ROLES = {
  Admin: "SuperAdmin",
  User: "User",
};

function App() {
  return (
    <div className="wrapper">
      <Router>
        <Fragment>
          <Routes>
            <Route path="/unauthorized" exact element={<Unauthorized />} />
            <Route exact path="/" element={<Home />} />
            <Route element={<RequireLogout />}>
              <Route path="/login" element={<Login />} />
            </Route>
            <Route
              element={
                <>
                  <RequireLogin />
                  <Menu />
                  <Footer />
                </>
              }
            >
              <Route element={<RequireAuth allowedRoles={ROLES.Admin} />}>
                <Route exact path="/add-user" element={<AddUser />} />
                <Route exact path="/users" element={<UserList />} />
                <Route exact path="/edit/:id" element={<EditUser />} />
              </Route>
              <Route
                element={
                  <RequireAuth allowedRoles={[ROLES.User, ROLES.Admin]} />
                }
              >
                <Route path="/dashBoard" exact element={<DashBoard />} />
                <Route path="/user" exact element={<User />} />
              </Route>
            </Route>
          </Routes>
        </Fragment>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
      </Router>
    </div>
  );
}

export default App;
