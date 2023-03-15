import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
import jwt_decode from "jwt-decode";

const Header = () => {
  const [mounted, setMounted] = useState(false);
  const [first_name, setFirst_name] = useState("");
  const [last_name, setLast_name] = useState("");

  const { status, data } = useSession();

  useEffect(() => {
    if (status === "authenticated") {
      // console.log(data.user);
      const decoded = jwt_decode(data.user.token);
      // console.log(decoded);
      setFirst_name(decoded.first_name);
      setLast_name(decoded.last_name);
    }
  }, [status]);

  useEffect(() => {
    setMounted(true);
  }, []);

  const navigate = useRouter();

  return (
    mounted && (
      <div>
        <nav className="main-header navbar navbar-expand navbar-white navbar-light mr-0 mt-0">
          <ul className="navbar-nav">
            <li className="nav-item">
              <div
                className="nav-link"
                data-widget="pushmenu"
                href="/"
                role="button"
              >
                <i className="fas fa-bars"></i>
              </div>
            </li>
          </ul>
          {/* Right navbar links */}

          <ul className="navbar-nav ml-auto">
            <ul className="mb-0 nav-item">
              <li className="nav-link text-dark font-weight-bolder">
                {first_name}&nbsp;
                {last_name}
              </li>
            </ul>
            {/* Messages Dropdown Menu */}
            <li className="nav-item dropdown">
              <a className="nav-link" data-toggle="dropdown" href="/">
                <img
                  src="/dist/img/user1-128x128.jpg"
                  alt="User Avatar"
                  className=" mr-3 img-circle"
                  style={{ height: 30, width: 30 }}
                />
              </a>
              <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                <div
                  onClick={() => {
                    signOut({
                      redirect: false,
                    });
                    navigate.push("/");
                  }}
                  className="dropdown-item"
                >
                  {/* Message Start */}
                  <div className="media-body">
                    <p className="text-sm " role="button">
                      <i className="fas fa-sign-out-alt mr-2"></i>
                      Logout
                    </p>
                  </div>
                  {/* Message End */}
                </div>
              </div>
            </li>
          </ul>
        </nav>
      </div>
    )
  );
};

export default Header;
