import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { signOut } from "next-auth/react";

const Header = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  const navigate = useRouter();
  // const logout = (e) => {
  //   e.preventDefault();
  //   // localStorage.clear();
  //   signOut({ callbackUrl: "http://localhost:3000" });
  // };
  return (
    mounted && (
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

          <ul className="navbar-nav ml-auto">
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
                  <div className="media-body">
                    <p className="text-sm " role="button">
                      <i className="fas fa-sign-out-alt mr-2"></i>
                      Logout
                    </p>
                  </div>
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
