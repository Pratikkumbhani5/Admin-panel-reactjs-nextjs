import React from "react";
import Header from "../components/Header";
import Menu from "../components/Menu";
import Footer from "../components/Footer";

const User = () => {
  return (
    <div className="wrapper">
      <Header />
      <Menu />
      <div className="content-wrapper">
        <h1>User</h1>
      </div>
      <Footer />
    </div>
  );
};

export default User;
