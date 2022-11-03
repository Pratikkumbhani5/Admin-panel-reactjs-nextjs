import React from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const nav = useNavigate();
  const logout = () => {
    localStorage.clear();
    nav("/");
  };
  return (
    <div>
      <nav className="main-header navbar navbar-expand navbar-white navbar-light">
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
              <div onClick={logout} className="dropdown-item">
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
  );
};

export default Header;
