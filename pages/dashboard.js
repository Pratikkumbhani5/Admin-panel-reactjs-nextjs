import Header from "../components/Header";
import Menu from "../components/Menu";
import Footer from "../components/Footer";
import Link from "next/link";
import { useSession } from "next-auth/react";

const DashBoard = () => {
  const { status, data } = useSession();
  console.log(status, data);
  return (
    <div className="wrapper">
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
                    <Link href="/">Home</Link>
                  </li>
                  <li className="breadcrumb-item active">Dashboard </li>
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
