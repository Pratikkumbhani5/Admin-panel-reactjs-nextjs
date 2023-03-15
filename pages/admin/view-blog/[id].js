import React, { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import Header from "../../../Components/Admin/Layout/Header";
import Menu from "../../../Components/Admin/Layout/Menu";
import Footer from "../../../Components/Admin/Layout/Footer";

const ViewBlog = () => {
  const [image, setImage] = useState();
  const [description, setDescription] = useState();
  const [title, setTitle] = useState();

  const router = useRouter();

  const { id } = router.query;

  const session = useSession();
  useEffect(() => {
    if (session.status === "authenticated") {
      getBlogData();
    }
    // eslint-disable-next-line
  }, [session.status]);

  const getBlogData = async () => {
    await axios
      .get(`${process.env.NEXT_PUBLIC_APP_Base_URLa}/author/blog-edit/${id}`, {
        headers: {
          Authorization: `Bearer ${session.data.user.token}`,
        },
      })
      .then((res) => {
        setImage(res.data[0].imgsrc);
        setDescription(res.data[0].description);
        setTitle(res.data[0].title);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <Header />
      <Menu />
      <div className="content-wrapper ">
        <section className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1>View Blog</h1>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item ">
                    <Link className="text-dark" href="/admin/dashboard">
                      Home
                    </Link>
                  </li>
                  <li className="breadcrumb-item active text-dark">
                    View Blog
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </section>
        <section className="content ">
          <div className="container-fluid">
            <div className="row  justify-content-center">
              <div className="col-md-10">
                <div className="card mb-100 mt-50">
                  <div className="card-header text-right">
                    <h3 className="card-title">View Blog</h3>
                    <Link href="/admin/blog">
                      <button className="btn btn-primary">Back</button>
                    </Link>
                  </div>

                  <div className="card-body">
                    <div className="blog-details-wrap mb-50 text-justify">
                      <div className="bsingle__post-thumb mb-30">
                        <img
                          src={`${process.env.NEXT_PUBLIC_APP_Base_URLa}/uploads/blog/${image}`}
                          alt=""
                        />
                      </div>
                      <div className="details__content ">
                        <h2>{title}</h2>
                        <div>
                          <p
                            dangerouslySetInnerHTML={{ __html: description }}
                          ></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default ViewBlog;
