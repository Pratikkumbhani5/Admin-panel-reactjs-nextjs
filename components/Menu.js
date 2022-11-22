import { useState, useEffect } from "react";
import Link from "next/link";

const Menu = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  const loadScript = (src) => {
    return new Promise((resovle) => {
      const script = document.createElement("script");
      script.src = src;

      script.onload = () => {
        resovle(true);
      };
      script.onerror = () => {
        resovle(false);
      };

      document.body.appendChild(script);
    });
  };

  const displayRazorpay = async (amount) => {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      alert("You are offline");
      return;
    }

    const options = {
      key: "rzp_test_cRPZQIOeXHBctw",
      currency: "INR",
      amount: amount * 100,
      name: "Pratik kumbhani",
      description: "Thanks for shopping",

      handler: function (response) {
        alert(response.razorpay_payment_id);
        alert("Payment successfully");
      },
      prefill: {
        name: "Pratik Kumbhani",
      },
    };
    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  return (
    mounted && (
      <div>
        <aside className="main-sidebar sidebar-dark-primary elevation-4">
          {/* Brand Logo */}
          <Link href="/dashboard" className="brand-link">
            <h3 className="brand-text text-center font-weight-light">
              VMR Admin
            </h3>
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
                className="nav nav-pills nav-sidebar flex-column"
                data-widget="treeview"
                role="menu"
                data-accordion="false"
              >
                {/* Add icons to the links using the .nav-icon class
         with font-awesome or any other icon font library */}
                <li className="nav-item has-treeview menu-open">
                  <a href="/" className="nav-link active">
                    <i className="nav-icon fas fa-tachometer-alt" />
                    <p>
                      Dashboard
                      <i className="right fas fa-angle-left" />
                    </p>
                  </a>
                  <ul className="nav nav-treeview">
                    <li className="nav-item  nav-link">
                      <Link href="/add-user">
                        <p>Add User </p>
                      </Link>
                    </li>
                    <li className="nav-item nav-link">
                      <Link href="/users">
                        <p>Users</p>
                      </Link>
                    </li>
                    <li className="nav-item nav-link">
                      <Link href="/user">
                        <p>User</p>
                      </Link>
                    </li>
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
    )
  );
};

export default Menu;
