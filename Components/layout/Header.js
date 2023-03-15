import React, { Fragment, useEffect, Suspense } from "react";
import dynamic from "next/dynamic";
import Head from "next/head";
// import { Modal } from "react-bootstrap";
import Link from "next/link";
import LazyLoad from "react-lazyload";
const HomeFormSectionForModal = dynamic(() =>
  import("../Modal/HomeFormSectionForModal")
);

const Header = () => {
  // const [Display, setDisplay] = useState(false);
  // const [blog_id, setblog_id] = useState(false);

  useEffect(() => {
    let elementId = document.getElementById("navbar");
    document.addEventListener("scroll", () => {
      if (window.scrollY > 170) {
        elementId.classList.add("is-sticky");
      } else {
        elementId.classList.remove("is-sticky");
      }
    });
    window.scrollTo(0, 0);
  }, []);

  // const pushtoContact = (e, post_id) => {
  //   e.preventDefault();
  //   setblog_id(post_id);

  //   setDisplay(true);
  // };

  return (
    <Fragment>
      <Head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
          (function (w, d, s, c, r, a, m) {
            w["KiwiObject"] = r;
            w[r] =
              w[r] ||
              function () {
                (w[r].q = w[r].q || []).push(arguments);
              };
            w[r].l = 1 * new Date();
            a = d.createElement(s);
            m = d.getElementsByTagName(s)[0];
            a.async = 1;
            a.src = c;
            m.parentNode.insertBefore(a, m);
          })(
            window,
            document,
            "script",
            "https://app.interakt.ai/kiwi-sdk/kiwi-sdk-17-prod-min.js?v=" +
              new Date().getTime(),
            "kiwi"
          );
          window.addEventListener("load", function () {
            kiwi.init("", "Ch1CAu6SCWM5ilsGbMxFEwd4qWTdvtby", {});
          });
        `,
          }}
        />
      </Head>
      {/* <Modal
        size="lg"
        show={Display}
        onHide={() => setDisplay(false)}
        aria-labelledby="example-modal-sizes-title-md"
        className="modal-dialog-scrollable"
        centered
      >
        <Modal.Header className="text-center">
          <h3 className="modal-title w-100">Let’s get going, Shall we?</h3>
          <button
            type="button"
            className="close"
            onClick={() => setDisplay(false)}
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </Modal.Header>

        <Modal.Body className="success text-center ">
          <Suspense fallback={<h1>loading..</h1>}>
            <HomeFormSectionForModal
              blogData={{ blogid: blog_id ? blog_id : 0 }}
            />
          </Suspense>
        </Modal.Body>
      </Modal> */}

      <LazyLoad once>
        <div
          className="modal fade modal-backdrop-modal"
          id="staticBackdrop"
          tabIndex="-1"
          role="dialog"
          style={{ overflowY: "auto" }}
          aria-labelledby="staticBackdropLabel-header"
          aria-hidden="true"
        >
          <div
            className="modal-dialog modal-lg modal-dialog-centered"
            role="document"
          >
            <div className="modal-content">
              <div className="modal-header">
                <h3
                  className="modal-title w-100 text-center"
                  id="staticBackdropLabel-header"
                >
                  Let’s get going, Shall we?
                </h3>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body success text-center">
                <Suspense fallback={<h1>loading..</h1>}>
                  <HomeFormSectionForModal />
                </Suspense>
              </div>
            </div>
          </div>
        </div>
      </LazyLoad>
      <div id="navbar" className="navbar-area navbar-style-3">
        <nav className="navbar-expand-md">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-2 col-lg-2 d-flex justify-content-between">
                <Link href="/" className="navbar-brand">
                  <img
                    src="/assets/img/ikore-pilates-logo.webp"
                    className="header-logo"
                    alt="logo"
                  />
                </Link>
                <button
                  className="navbar-toggler navbar-toggler-right collapsed"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="icon-bar top-bar"></span>
                  <span className="icon-bar middle-bar"></span>
                  <span className="icon-bar bottom-bar"></span>
                </button>
              </div>

              <div className="col-xl-8 col-lg-6">
                <div className="main-menu text-right pr-15">
                  <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent"
                  >
                    <ul className="navbar-nav">
                      <li className="has-sub">
                        <Link
                          data-toggle="collapse"
                          data-target="#navbarSupportedContent"
                          href="/"
                        >
                          Home
                        </Link>
                      </li>
                      <li className="has-sub">
                        <Link
                          data-toggle="collapse"
                          data-target="#navbarSupportedContent"
                          href="/about"
                        >
                          About us
                        </Link>
                      </li>
                      <li className="has-sub">
                        <Link
                          data-toggle="collapse"
                          data-target="#navbarSupportedContent"
                          href="/offerings"
                        >
                          Offerings
                        </Link>
                      </li>
                      <li className="has-sub">
                        <Link
                          data-toggle="collapse"
                          data-target="#navbarSupportedContent"
                          href="/certification"
                        >
                          Certification
                        </Link>
                      </li>
                      <li className="has-sub">
                        <Link
                          data-toggle="collapse"
                          data-target="#navbarSupportedContent"
                          href="/testimonials"
                        >
                          Testimonials
                        </Link>
                      </li>
                      <li className="has-sub">
                        <Link
                          data-toggle="collapse"
                          data-target="#navbarSupportedContent"
                          href="/blog"
                        >
                          Blog
                        </Link>
                      </li>
                      <li className="has-sub">
                        <Link
                          data-toggle="collapse"
                          data-target="#navbarSupportedContent"
                          href="/FAQs"
                        >
                          FAQs
                        </Link>
                      </li>
                      <li className="has-sub">
                        <Link
                          data-toggle="collapse"
                          data-target="#navbarSupportedContent"
                          href="/career"
                        >
                          Career
                        </Link>
                      </li>
                      <li className="has-sub">
                        <Link
                          data-toggle="collapse"
                          data-target="#navbarSupportedContent"
                          href="/contact-us"
                        >
                          Contact
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-2 col-lg-4 d-none d-lg-flex justify-content-end">
                <ul>
                  <li>
                    {/* <Link
                      href=""
                      // onClick={pushtoContact}
                      data-toggle="modal"
                      data-target="#staticBackdrop"
                      className="top-btn text-white"
                    >
                      Enquire Now
                    </Link> */}
                    <button
                      type="button"
                      data-toggle="modal"
                      data-target="#staticBackdrop"
                      className="top-btn text-white"
                    >
                      Enquire Now
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </Fragment>
  );
};

export default Header;
