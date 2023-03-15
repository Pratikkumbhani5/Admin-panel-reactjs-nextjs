import React, { Suspense, Fragment } from "react";
import { useState } from "react";
// import { Modal } from "react-bootstrap";
import ModalVideo from "react-modal-video";
import HomeFormSectionForModal from "../Modal/HomeFormOfferingSectionForModal";
import LazyLoad from "react-lazyload";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import Link from "next/link";

const SliderSectionEducation = () => {
  // const [Display1, setDisplay1] = useState(false);
  // const [blog_id, setblog_id] = useState(false);
  const [isOpen, setOpen] = useState(false);

  // const pushtoContact = (e, post_id) => {
  //   e.preventDefault();
  //   // console.log(post_id)
  //   setblog_id(post_id);

  //   // navigate("/contact-us",{ state: { name:'Xyz' }})
  //   // navigate('/contact-us', { state: { enroll_id: post_id } })
  //   setDisplay1(true);
  // };
  return (
    //  <!-- ======= Hero Section ======= -->
    <Fragment>
      {/* <div id="hero_classes" className="d-flex align-items-center"></div> */}
      {/* <div className='col-lg-8 p-0'>
        <div className='color_class_col'>
          <h2 className='headings2'>MAT CLASSES</h2>
          <p>Pilates Mat is done on the floor on a mat. It may include Pilates props like the balls,
            foam rollers, pilates magic circles and other fitness tools. Batch strength of the class is
            limited to a maximum of 12 students per batch so that detailed attention can be given to all.
            Class Level – Expert. Beginner, Intermediate Age Limit – Kids, Adults, Teens.</p>

        </div>
      </div>
      <div className='col-lg-4 p-0 image_col'>
        <img loading='lazy' src='assets/img/class_mat.webp' className='class_right_img' alt='cta' />
      </div> */}

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
            <HomeFormSectionForModal
              blogData={{ blogid: blog_id ? blog_id : 0 }}
            />
          </Suspense>
        </Modal.Body>
      </Modal> */}

      <div
        className="modal fade modal-backdrop-modal"
        id="certificationModal1"
        tabIndex="-1"
        role="dialog"
        style={{ overflowY: "auto" }}
        aria-labelledby="staticBackdropLabel-certification"
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
                id="staticBackdropLabel-certification"
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

      <section
        id="about"
        className="about-area about-p mt-185 mb-80 pt-120 pb-60 p-relative"
      >
        {/* <div className="parolx-text-right">Watch Us</div> */}
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
              <div className="s-about-img p-relative">
                <div className="iframe-container">
                  <LazyLoad once>
                    <LiteYouTubeEmbed
                      muted={true}
                      params="rel=0"
                      id="ummMqSGq2Vc"
                      title="Teacher Training - Chair"
                    />
                  </LazyLoad>
                  {/* <iframe
                    src={`https://www.youtube.com/embed/ummMqSGq2Vc?mute=1&rel=0`}
                    allowFullScreen
                    loading="lazy"
                    title="Embedded youtube"
                  /> */}
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12">
              <div className="about-content s-about-content pl-30">
                <div className="section-title mb-40">
                  <h3 className="mb-3">INTERNATIONAL PILATES</h3>
                  <h2 className="mb-3">CERTIFICATION</h2>
                  <p>
                    The most sought after Pilates certification, iKore Pilates
                    is the most trusted Pilates instructor training and{" "}
                    <strong>
                      Balanced Body,USA Authorised Training Centre
                    </strong>
                    &nbsp; founded by Dr. Deepali Gupta (Pilates Ambassador
                    India), who has a proven track-record of training and
                    mentoring over 150+ Pilates instructors globally.
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
                    // href="#"
                    // onClick={pushtoContact}
                    type="button"
                    data-toggle="modal"
                    data-target="#certificationModal1"
                    className="top-btn"
                  >
                    Enquire Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <div className="container ">
        <div className="row ">
          <div className="col-lg-6 ">
            <h1>
              INTERNATIONAL PILATES <br></br>
              <span className="dual-text">CERTIFICATION</span>
            </h1>
            <p>
              <strong>
                The most sought after Pilates certification, iKore Pilates
              </strong>{" "}
              is the most trusted Pilates instructor training and Balanced
              Body,USA Authorised Training Centre founded by Dr. Deepali Gupta
              (Pilates Ambassador India), who has a proven track-record of
              training and mentoring over 150+ Pilates instructors globally.
            </p>
            <div className="d-flex">
              <a
                href="https://www.youtube.com/watch?v=16txccVZSew"
                className="btn-slider"
              >
                Play Video
              </a>
              <Link onClick={pushtoContact} className="btn-slider">
                {" "}
                Enquire Now
              </Link>
            </div>
          </div>

          <div className="col-lg-6">
            <img
              loading="lazy"
              src="assets/img/slider7.webp"
              className="class_right_img_certification"
              alt="cta"
            />
          </div>
        </div>
      </div> */}
    </Fragment>
  );
};

export default SliderSectionEducation;
