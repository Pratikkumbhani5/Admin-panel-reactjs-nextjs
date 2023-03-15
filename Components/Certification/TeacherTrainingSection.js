import React, { Suspense } from "react";
// import { Modal } from "react-bootstrap";
import LazyLoad from "react-lazyload";
import dynamic from "next/dynamic";
const HomeFormSectionForModal = dynamic(() =>
  import("../Modal/HomeFormOfferingSectionForModal")
);

const TeacherTrainingSection = () => {
  // const [Display1, setDisplay1] = useState(false);
  // const [blog_id, setblog_id] = useState(false);

  // const pushtoContact = (e, post_id) => {
  //   e.preventDefault();
  //   setblog_id(post_id);

  //   setDisplay1(true);
  // };

  return (
    <section className="team-area-content">
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
        id="certificationModal3"
        tabIndex="-1"
        role="dialog"
        style={{ overflowY: "auto" }}
        aria-labelledby="staticBackdropLabel-training"
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
                id="staticBackdropLabel-training"
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
      <div className="container">
        <div className="lower-content">
          <div className="row">
            <div className="col-lg-4 col-md-12 col-sm-12 text-center">
              <div className="team-img-box image_col">
                <LazyLoad once>
                  <img
                    loading="lazy"
                    src="assets/img/slider7.webp?time=5225"
                    className="training_col_img"
                    alt="cta"
                  />
                </LazyLoad>
              </div>
            </div>

            <div className="text-column col-lg-8 col-md-12 col-sm-12">
              <div
                className="s-about-content pl-30 wow fadeInRight"
                data-animation="fadeInRight"
                data-delay=".2s"
              >
                <h2>Pilates Teacher Training Program</h2>

                <p>
                  An exciting opportunity is awaiting you. Join our Teacher’s
                  Training Program and become a Pilates Instructor and have the
                  potential to earn a higher income.
                </p>

                <div className="social mt-30">
                  <button
                    type="button"
                    data-toggle="modal"
                    data-target="#certificationModal3"
                    // onClick={pushtoContact}
                    className="top-btn"
                  >
                    Enquire Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeacherTrainingSection;
