import React, { Suspense, useState } from "react";
import dynamic from "next/dynamic";
// import { Modal } from "react-bootstrap";
import ModalVideo from "react-modal-video";
import LazyLoad from "react-lazyload";
const HomeFormOfferingSectionForModal = dynamic(() =>
  import("../Modal/HomeFormOfferingSectionForModal")
);

// end
const Services = () => {
  // const [Display1, setDisplay1] = useState(false);
  // const [blog_id, setblog_id] = useState(false);
  const [isOpen, setOpen] = useState(false);
  const [isOpen2, setOpen2] = useState(false);
  const [isOpen3, setOpen3] = useState(false);

  // const navigate = usenavigate()
  // const pushtoContact = (e, post_id) => {
  //   e.preventDefault();

  //   setDisplay1(true);
  // };

  return (
    <div>
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
      <LazyLoad once>
        <div
          className="fade modal modal-backdrop-modal"
          id="offeringModal"
          tabIndex="-1"
          role="dialog"
          style={{ overflowY: "auto" }}
          aria-labelledby="example-modal-sizes-title-md-service"
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
                  id="example-modal-sizes-title-md-service"
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
      </LazyLoad>
      <section
        className="video fix p-relative"
        style={{ background: "#e586010d" }}
      >
        <div className="row pt-80">
          <div className="col-lg-12 text-center">
            <div className="section-title mb-50">
              <h1 className="custom-h1">Our Offerings</h1>
            </div>
          </div>
        </div>
        <section>
          <ModalVideo
            channel="youtube"
            autoplay
            youtube={{ mute: 1, rel: 0 }}
            isOpen={isOpen}
            videoId="ummMqSGq2Vc"
            onClose={() => setOpen(false)}
          />
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="section-title mb-25">
                  <h2 className="custom-h1">
                    Pilates Teacher Training Program
                  </h2>
                </div>
                <div className="mb-35">
                  <p>
                    With our comprehensive training program, you will be able to
                    confidently teach classes that are tailored to meet the
                    needs of your clients. Our program offers an in-depth look
                    at the fundamentals of Pilates, from anatomy and physiology
                    to teaching methods. Our program will also help you develop
                    your teaching style by providing guidance on effectively
                    communicating with clients, creating engaging classes that
                    meet their needs, and motivating them to reach their goals.
                  </p>
                  <p>
                    So don't miss out on this amazing opportunity – Enrol in our
                    Teacher's Training Program today!
                  </p>
                </div>
                <button
                  type="button"
                  // onClick={(e) => pushtoContact(e, 1)}
                  data-toggle="modal"
                  data-target="#offeringModal"
                  className="btn top-btn mb-5"
                >
                  Enquire Now
                </button>
              </div>
              <div className="col-lg-6">
                <LazyLoad once>
                  <div className="s-d-img p-relative">
                    <img
                      src="assets/img/teacher_training.webp?time=5225"
                      alt="img"
                    />
                  </div>
                </LazyLoad>
              </div>
            </div>
          </div>
        </section>

        <section>
          <ModalVideo
            channel="youtube"
            autoplay
            youtube={{ mute: 1, rel: 0 }}
            isOpen={isOpen2}
            videoId="A93mU0CDamA"
            onClose={() => setOpen2(false)}
          />
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 order-last order-lg-first">
                <LazyLoad once>
                  <div className="s-d-img-left p-relative">
                    <img
                      src="assets/img/group_class.webp?time=5225"
                      alt="img"
                    />
                  </div>
                </LazyLoad>
              </div>
              <div className="col-lg-6 order-first order-lg-last">
                <div className="section-title mb-25">
                  <h2 className="custom-h1">Group Sessions</h2>
                </div>
                <div className="mb-35">
                  <p>
                    Pilates group sessions are a great way to stay fit and
                    healthy while having fun and socializing with others. These
                    classes are designed for all levels of ability and
                    experience. Group sessions provide a supportive environment
                    where participants gain motivation from their peers. Our
                    enthusiastic Pilates Instructors keep it spiced up with all
                    Pilates variants and props.
                  </p>
                  <p>So why not Join a Pilates group session today?</p>
                </div>
                <button
                  type="button"
                  // onClick={(e) => pushtoContact(e, 1)}
                  data-toggle="modal"
                  data-target="#offeringModal"
                  className="btn top-btn mb-5"
                >
                  Enquire Now
                </button>
              </div>
            </div>
          </div>
        </section>
        <section>
          <ModalVideo
            channel="youtube"
            autoplay
            youtube={{ mute: 1, rel: 0 }}
            isOpen={isOpen3}
            videoId="ummMqSGq2Vc"
            onClose={() => setOpen3(false)}
          />
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="section-title mb-25">
                  <h2 className="custom-h1">
                    One-To-One Private Pilates Sessions
                  </h2>
                </div>
                <div className="mb-35">
                  <p>
                    Pilates one-to-one private sessions are an ideal way to
                    improve your physical and mental well-being. By working
                    closely with a Certified Pilates Instructor, you can develop
                    strength, flexibility and balance in your body while also
                    improving your posture and overall health. The sessions are
                    personalized as per your needs and goals. Whether you're
                    looking for an effective way to stay in shape or seeking
                    relief from chronic pain or injury, Pilates one-to-one
                    sessions are an ideal option for achieving your fitness
                    goals.
                  </p>
                </div>
                <button
                  type="button"
                  // onClick={(e) => pushtoContact(e, 1)}
                  data-toggle="modal"
                  data-target="#offeringModal"
                  className="btn top-btn mb-5"
                >
                  Enquire Now
                </button>
              </div>
              <div className="col-lg-6">
                <LazyLoad once>
                  <div className="s-d-img p-relative">
                    <img
                      src="assets/img/private_class.webp?time=5225"
                      alt="img"
                    />
                  </div>
                </LazyLoad>
              </div>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
};

export default Services;
