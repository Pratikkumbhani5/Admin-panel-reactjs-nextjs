import React, { Suspense } from "react";
import TeacherTrainingBlogsData from "./Data/TeacherTrainingBlogsData";
// import { Modal } from "react-bootstrap";
import { useState } from "react";
import HomeFormSectionForModal from "../Modal/HomeFormOfferingSectionForModal";
import LazyLoad from "react-lazyload";

const TeacherTrainingBlogs = () => {
  // const [Display1, setDisplay1] = useState(false);
  const [blog_id, setblog_id] = useState(false);

  const pushtoContact = (e, post_id) => {
    e.preventDefault();
    setblog_id(post_id);

    // setDisplay1(true);
  };

  return (
    <section
      className="services-area services-bg pt-80 pb-40 p-relative"
      style={{ background: "#fbfaff 0% 0% no-repeat padding-box" }}
      id="certification"
    >
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
        id="certificationModal2"
        tabIndex="-1"
        role="dialog"
        style={{ overflowY: "auto" }}
        aria-labelledby="staticBackdropLabel-blog"
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
                id="staticBackdropLabel-blog"
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
                <HomeFormSectionForModal
                  blogData={{ blogid: blog_id ? blog_id : 0 }}
                />
              </Suspense>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <div className="section-title mb-50">
              <h2>Pilates Teacher Training Program</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <p className="text-center">
            Transform your life, and the lives of others, with our Pilates
            Teacher Training Program. Whether you're looking to start a new
            career or just become a better version of yourself, our certified
            instructors will help you achieve your goals. Get certified to teach
            Pilates and learn the science behind the movements in our
            comprehensive course. Unleash your potential and become an expert
            with Pilates Teacher Training!
          </p>
        </div>

        <section id="team" className="team-area pt-30 pb-40">
          <div className="container">
            <div className="row">
              {TeacherTrainingBlogsData.map((val) => {
                return (
                  <div className="col-xl-4" key={val.id}>
                    <div className="single-team mb-30">
                      <div className="team-thumb">
                        <LazyLoad once>
                          <div className="brd post_img_link">
                            <img src={val.post_imgsrc} alt="img" />
                          </div>
                        </LazyLoad>
                      </div>
                      <div className="team-info">
                        <h4>
                          <a className="post_title team-info-title" href="#">
                            {val.post_title}
                          </a>
                        </h4>
                        <p className="d-block mb-4">{val.post_description}</p>
                        <button
                          onClick={(e) => pushtoContact(e, val.id)}
                          type="button"
                          data-toggle="modal"
                          data-target="#certificationModal2"
                          className="top-btn "
                        >
                          Enquire Now
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default TeacherTrainingBlogs;
