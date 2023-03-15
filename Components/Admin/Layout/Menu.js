import React, { useEffect, useState } from "react";
import Link from "next/link";
import jwt_decode from "jwt-decode";
import { useSession } from "next-auth/react";

const Menu = () => {
  const [decoded, setDecode] = useState(4);

  // const token = localStorage.getItem("token");

  // const { decoded } = useContext(Context);

  //  console.log(token, "Menu");

  const { status, data } = useSession();

  useEffect(() => {
    if (status === "authenticated") {
      const decoded = jwt_decode(data.user.token);
      setDecode(decoded);
    }
  }, [status]);

  // useEffect(() => {
  //   setDecode(decodedValue);
  // }, [token]);

  // const loadScript = (src) => {
  //   return new Promise((resovle) => {
  //     const script = document.createElement("script");
  //     script.src = src;

  //     script.onload = () => {
  //       resovle(true);
  //     };
  //     script.onerror = () => {
  //       resovle(false);
  //     };

  //     document.body.appendChild(script);
  //   });
  // };

  // const displayRazorpay = async (amount) => {
  //   const res = await loadScript(
  //     "https://checkout.razorpay.com/v1/checkout.js"
  //   );

  //   if (!res) {
  //     alert("You are offline");
  //     return;
  //   }

  //   const options = {
  //     key: "rzp_test_cRPZQIOeXHBctw",
  //     currency: "INR",
  //     amount: amount * 100,
  //     name: "Pratik kumbhani",
  //     description: "Thanks for shopping",

  //     handler: function (response) {
  //       alert(response.razorpay_payment_id);
  //       alert("Payment successfully");
  //     },
  //     prefill: {
  //       name: "Pratik Kumbhani",
  //     },
  //   };
  //   const paymentObject = new window.Razorpay(options);
  //   paymentObject.open();
  // };

  return (
    <div>
      <aside className="main-sidebar sidebar-dark-primary elevation-4 hide-whatsapp">
        {/* Brand Logo */}
        <Link
          href="/admin/dashboard"
          className="brand-link text-decoration-none text-center"
        >
          <span className="brand-text font-weight-light text-white sidebar-collapse">
            IKore Admin
          </span>
        </Link>
        {/* Sidebar */}
        <div className="sidebar">
          {/* Sidebar user panel (optional) */}
          {/* <div className="user-panel mt-3 pb-3 mb-3 d-flex">
            <div className="image">
              <img
                src="/dist/img/user2-160x160.jpg"
                className="img-circle elevation-2"
                alt=""
              />
            </div>
            <div className="info">
              <a href="/" className="d-block">
                Alexander Pierce
              </a>
            </div>
          </div> */}
          {/* Sidebar Menu */}
          <nav className="mt-2">
            <ul
              className="nav-sidebar flex-column"
              data-widget="treeview"
              role="menu"
              data-accordion="false"
            >
              {/* Add icons to the links using the .nav-icon class
         with font-awesome or any other icon font library */}
              <li className="nav-item has-treeview menu-open">
                <Link
                  href="/admin/dashboard"
                  className="nav-link active text-white"
                >
                  <i className="nav-icon fas fa-tachometer-alt" />
                  <p>
                    Dashboard
                    <i className="right fas fa-angle-left" />
                  </p>
                </Link>
                <ul className="nav nav-treeview">
                  {decoded.role == 1 ||
                  decoded.role == 2 ||
                  decoded.role == 3 ? (
                    <li className="nav-item">
                      <Link
                        href="/admin/add-blog"
                        className="nav-link text-white"
                      >
                        <i className="nav-icon fas fa-plus" />
                        <p>Add Blog</p>
                      </Link>
                    </li>
                  ) : (
                    ""
                  )}
                  {decoded.role == 1 ||
                  decoded.role == 2 ||
                  decoded.role == 3 ? (
                    <li className="nav-item">
                      <Link href="/admin/blog" className="nav-link text-white">
                        <i className="nav-icon fas fa-list" />
                        <p>Blog</p>
                      </Link>
                    </li>
                  ) : (
                    ""
                  )}
                  {decoded.role == 1 && (
                    <li className="nav-item">
                      <Link
                        href="/admin/add-user"
                        className="nav-link text-white"
                      >
                        <i className="nav-icon fas fa-user-plus" />
                        <p>Add User</p>
                      </Link>
                    </li>
                  )}
                  {decoded.role == 1 || decoded.role == 2 ? (
                    <li className="nav-item">
                      <Link href="/admin/user" className="nav-link text-white">
                        <i className="nav-icon fas fa-user" />
                        <p>User</p>
                      </Link>
                    </li>
                  ) : (
                    ""
                  )}
                  {decoded.role == 1 ||
                  decoded.role == 2 ||
                  decoded.role == 4 ? (
                    <li className="nav-item">
                      <Link href="/admin/leads" className="nav-link text-white">
                        <i className="nav-icon fas fa-address-book" />
                        <p>Leads</p>
                      </Link>
                    </li>
                  ) : (
                    ""
                  )}
                  {/* <li className="nav-item">
                    <div
                      className="nav-link"
                      style={{ cursor: "pointer" }}
                      onClick={() => displayRazorpay(2000)}
                    >
                      Payment
                    </div>
                  </li> */}
                </ul>
              </li>
            </ul>
          </nav>
          {/* /.sidebar-menu */}
        </div>
        {/* /.sidebar */}
      </aside>
    </div>
  );
};

export default Menu;
