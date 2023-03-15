import React from "react";
import Link from "next/link";
import Header from "../../Components/Admin/Layout/Header";
import Menu from "../../Components/Admin/Layout/Menu";
import Footer from "../../Components/Admin/Layout/Footer";

const DashBoard = () => {
  return (
    <div>
      <Header />
      <Menu />
      <div className="content-wrapper">
        <div className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1 className="m-0 text-dark">Dashboard</h1>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item">
                    <Link href="/admin/dashboard" className="text-dark">
                      Home
                    </Link>
                  </li>
                  <li className="breadcrumb-item active text-dark">
                    Dashboard{" "}
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DashBoard;
