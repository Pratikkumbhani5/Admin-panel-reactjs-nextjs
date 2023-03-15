import React, { Fragment, Suspense } from "react";
import CareerFormSection from "../Modal/CareerFormSectionForModal";

const CareerBlocks = () => {
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
            <CareerFormSection blogData={{ blogid: blog_id ? blog_id : 0 }} />
          </Suspense>
        </Modal.Body>
      </Modal> */}
      <div
        className="modal fade modal-backdrop-modal"
        id="careerModal1"
        tabIndex="-1"
        role="dialog"
        style={{ overflowY: "auto" }}
        aria-labelledby="staticBackdropLabel-career"
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
                id="staticBackdropLabel-career"
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
                <CareerFormSection />
              </Suspense>
            </div>
          </div>
        </div>
      </div>
      <section
        id="about"
        className="about-area about-p mt-80 mb-10 pt-80  p-relative career-padding"
      >
        <div className="container ">
          <div className="row pd2">
            <div className="col-lg-12">
              <div className="bsingle__post-thumb mb-5">
                <img src="assets/img/career_img_2.png" alt="" />
              </div>
              <div className="bsingle__post mb-50">
                <div className="">
                  <div className="bsingle__content mb-5">
                    <div className="slider-btn  d-lg-flex align-items-center mb-20">
                      <h2>Counselling Psychologist</h2>
                      <button
                        type="button"
                        data-toggle="modal"
                        data-target="#careerModal1"
                        // href="#"
                        className="top-btn ml-lg-3"
                        // onClick={pushtoContact}
                      >
                        Apply Now
                      </button>
                    </div>
                    <p>
                      Looking for a counsellor psychologist with 0 to 3 years of
                      experience and who is well-versed in social-emotional
                      learning. The candidate will be responsible for offering
                      patient consultations and implementing individualized
                      psychological treatment.
                    </p>
                    <h6>JOB DESCRIPTION</h6>
                    <ul>
                      <li>
                        Listen to patients and identify their core problems.
                      </li>

                      <li>
                        Build strong, long-term relationships based on trust,
                        and monitor patient response to treatment over time.
                      </li>
                      <li>
                        Engage in discussions with patients and make them feel
                        comfortable.
                      </li>
                      <li>Implement individualized treatment programs.</li>
                      <li>Undertake psychometric tests</li>
                      <li>Evaluate patient response to treatment over time.</li>
                      <li>
                        Organize a long-term counselling plan that involves
                        multiple visits.
                      </li>
                      <li>Offer services to all age groups.</li>
                      <li>Conduct both one-on-one and group counselling.</li>
                      <li>
                        Keep a detailed account of the patient's mental health
                        history.
                      </li>
                    </ul>
                    <h6 className="mt-4">SKILLS REQUIRED</h6>
                    <ul>
                      <li>Should be PGDCP Certified</li>
                      <li>
                        Good observational skills and attention to detail.
                      </li>
                      <li>Exceptional interpersonal skills.</li>
                      <li>Excellent written and verbal communication.</li>
                      <li>Should be empathetic when dealing with patients.</li>
                      <li>Should have a highly analytical mindset.</li>
                      <li>Good diagnostic and problem-solving skills.</li>
                    </ul>
                    {/* <div className="slider-btn mt-5">
                      <Link className="top-btn " onClick={pushtoContact}>
                        Apply Now
                      </Link>
                    </div> */}
                  </div>
                  <div className="bsingle__content mb-5">
                    <div className="slider-btn d-lg-flex align-items-center mb-20">
                      <h2>Female Nutritionist (Part Time/ Full Time)</h2>
                      <button
                        // href="#"
                        type="button"
                        data-toggle="modal"
                        data-target="#careerModal1"
                        className="top-btn ml-lg-3"
                        // onClick={pushtoContact}
                      >
                        Apply Now
                      </button>
                    </div>

                    <p>
                      iKore Pilates is looking for an experienced and energetic
                      nutritionist (0 to 3 years’ experience) who will provide
                      our clients with professional advice on how to implement
                      and maintain a healthy lifestyle. As a specialist in food
                      and nutrition, clients will depend on how you guide them
                      towards better eating and exercise habits.
                    </p>
                    <h6>JOB DESCRIPTION</h6>
                    <ul>
                      <li>
                        Identifying Clients’ dietary needs by assessing their
                        health, exercise routine, and food habits.
                      </li>
                      <li>
                        Developing and helping implement personalized nutrition
                        plans for clients.
                      </li>
                      <li>
                        Offering advice on how to stay healthy and providing
                        support to help clients with their progress.
                      </li>
                      <li>
                        Consult with the team of healthcare practitioners and
                        work together with the client.
                      </li>
                      <li>
                        Simplifying important information for clients and
                        explaining the benefits of a healthy diet.
                      </li>
                      <li>
                        Ensuring that you stay updated on the latest nutritional
                        diets and trends.
                      </li>
                      <li>
                        Teaching the public and other health specialists about
                        nutrition through articles and group seminars.
                      </li>
                    </ul>
                    <h6 className="mt-4">SKILLS REQUIRED</h6>
                    <ul>
                      <li>
                        Bachelor’s degree in nutritional science, dietetics, or
                        a relevant field
                      </li>
                      <li>
                        A minimum of 2 years experience as a professional
                        nutritionist
                      </li>
                      <li>
                        In-depth knowledge of biochemistry, research methods,
                        and human physiology
                      </li>
                      <li>Excellent communication and presentation skills</li>
                      <li>
                        A critical thinker with outstanding interpersonal skills
                      </li>
                    </ul>

                    {/* <div className="slider-btn mt-5">
                      <Link className="top-btn " onClick={pushtoContact}>
                        Apply Now
                      </Link>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default CareerBlocks;
