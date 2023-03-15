import React, { Suspense } from "react";
import dynamic from "next/dynamic";
// import { Modal } from "react-bootstrap";
import Link from "next/link";
import SliderData from "./Data/SliderData";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import LazyLoad from "react-lazyload";
// import LazyLoad from "react-lazyload";
const HomeFormSectionForModal = dynamic(() =>
  import("../Modal/HomeFormSectionForModal")
);

const SliderSectionHome = () => {
  // const [Display, setDisplay] = useState(false);
  // // const [mounted, setMounted] = useState(false);
  // const [blog_id, setblog_id] = useState(false);

  // const pushtoContact = (e, post_id) => {
  //   e.preventDefault();

  //   setblog_id(post_id);

  //   setDisplay(true);
  // };

  // useEffect(() => {
  //   setMounted(true);
  // }, []);

  return (
    <div>
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
          id="exampleModal"
          tabIndex="-1"
          role="dialog"
          style={{ overflowY: "auto" }}
          aria-labelledby="example-modal-sizes-title-md-home"
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
                  id="example-modal-sizes-title-md-home"
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

      <section
        id="about"
        className="about-area about-p mt-185 mb-10 pt-120 pb-120 p-relative"
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12 col-sm-12">
              <div className="s-about-img p-relative">
                <div className="iframe-container">
                  {/* <iframe
                    src={`https://www.youtube.com/embed/P7CqRpiCHOE?mute=1&rel=0`}
                    allowFullScreen
                    loading="lazy"
                    title="Embedded youtube"
                  /> */}
                  {/* {mounted ? ( */}
                  {/* <LazyLoad once> */}
                  <LiteYouTubeEmbed
                    muted={true}
                    params="rel=0"
                    id="Ss5TMQUZECo"
                    title="TTC FEB 2023"
                  />
                  {/* </LazyLoad> */}
                  {/* ) : (
                    <div
                      style={{
                        position: "absolute",
                        left: "50%",
                        top: "50%",
                        WebkitTransform: "translate(-50%, -50%)",
                        transform: "translate(-50%, -50%)",
                      }}
                    >
                      <div className="spinner-border" role="status">
                        <span className="sr-only">Loading...</span>
                      </div>
                    </div>
                  )} */}
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12">
              <div className="about-content s-about-content pl-30">
                <div className="section-title mb-40">
                  <h3 className="mb-3">{SliderData[1].text1}</h3>
                  <h1 className="mb-3 custom-h1">{SliderData[1].text2}</h1>
                  <p>{SliderData[1].text3}</p>
                </div>

                <div className="slider-btn d-flex">
                  <button
                    // href=""
                    // onClick={pushtoContact}
                    className="top-btn"
                    type="button"
                    data-toggle="modal"
                    data-target="#exampleModal"
                  >
                    Book a Trial
                  </button>
                  <Link
                    href="/contact-us"
                    className="top-btn"
                    data-animation="fadeInRight"
                    data-delay=".8s"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SliderSectionHome;
