import React, { Suspense, Fragment } from "react";
import { useState } from "react";
// import { Modal } from "react-bootstrap";
import ModalVideo from "react-modal-video";
import Link from "next/link";
import HomeFormOfferingSectionForModal from "../Modal/HomeFormOfferingSectionForModal";

const SliderSectionClasses = () => {
  // const [Display1, setDisplay1] = useState(false);
  // const [blog_id, setblog_id] = useState(false);
  const [isOpen, setOpen] = useState(false);

  // const pushtoContact = (e, post_id) => {
  //   e.preventDefault();

  //   setblog_id(post_id);

  //   setDisplay1(true);
  // };
  return (
    <Fragment>
      {/* <Modal
        size="lg"
        show={Display1}
        onHide={() => setDisplay1(false)}
        aria-labelledby="example-modal-sizes-title-md"
        className="modal-dialog-scrollable"
        centered
      >
        <Modal.Header className="text-center">
          <h3 className="modal-title w-100">Let’s get going, Shall we?</h3>
          <button
            type="button"
            className="close"
            onClick={() => setDisplay1(false)}
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </Modal.Header>

        <Modal.Body className="success text-center ">
          <Suspense fallback={<h1>loading..</h1>}>
            <HomeFormOfferingSectionForModal
              blogData={{ blogid: blog_id ? blog_id : 0 }}
            />
          </Suspense>
        </Modal.Body>
      </Modal> */}

      <div
        className="modal fade modal-backdrop-modal"
        id="offeringModal1"
        tabIndex="-1"
        role="dialog"
        style={{ overflowY: "auto" }}
        aria-labelledby="staticBackdropLabel-classes"
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
                id="staticBackdropLabel-classes"
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
                <HomeFormOfferingSectionForModal />
              </Suspense>
            </div>
          </div>
        </div>
      </div>

      <section
        id="about"
        className="about-area about-p mt-185 mb-80 pt-120 pb-60 p-relative slidersection-padding"
      >
        <ModalVideo
          channel="youtube"
          autoplay
          youtube={{ mute: 1, rel: 0 }}
          isOpen={isOpen}
          videoId="16txccVZSew"
          onClose={() => setOpen(false)}
        />
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12 col-sm-12">
              <div className="about-content s-about-content pl-30">
                <div className="section-title mb-40">
                  <h3 className="mb-3">Excellent Pilates Sessions</h3>
                  <h2 className="mb-3">Guided by Experts</h2>
                  <p>
                    If you are looking for an excellent Pilates class, guided by
                    experts, then you have come to the right place. Our
                    experienced instructors will help you get the most out of
                    your Pilates sessions. With our sessions, you can improve
                    your posture, build strength and flexibility, and reduce
                    stress levels. We offer a variety of sessions for all levels
                    – from beginner to advanced – so everyone can benefit from
                    our Pilates sessions!
                  </p>
                </div>

                <div className="slider-btn d-flex">
                  <Link
                    href="#"
                    onClick={() => setOpen(true)}
                    className="top-btn"
                  >
                    Play Video
                  </Link>
                  <button
                    type="button"
                    data-toggle="modal"
                    data-target="#offeringModal1"
                    // onClick={pushtoContact}
                    className="top-btn"
                  >
                    Enquire Now
                  </button>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12">
              <img
                loading="lazy"
                src="assets/img/slider7.webp?time=5225"
                className="img-fluid mt-lg-0 mt-5 about-section-img"
                alt="cta"
                height="100%"
                width="auto"
              />
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default SliderSectionClasses;
