import React, { useEffect } from "react";
import LazyLoad from "react-lazyload";

const ClassMat = () => {
  useEffect(() => {
    var d = document;
    var x = !d.getElementById("razorpay-embed-btn-js");
    if (d) {
      var s = d.createElement("script");
      s.defer = !0;
      s.id = "razorpay-embed-btn-js";
      s.src = "https://cdn.razorpay.com/static/embed_btn/bundle.js";
      d.body.appendChild(s);
    } else {
      var rzp = window["_rzp_"];
      rzp && rzp.init && rzp.init();
    }
  }, []);
  return (
    <section
      id="about"
      className="about-area about-p pb-80 p-relative classmat-margin"
    >
      <div className="container">
        <div className="classMat-padding">
          <div className="row ">
            <div className="col-lg-6 col-md-12 col-sm-12">
              <div className="about-content s-about-content ">
                <div className="section-title mb-30">
                  <h2>Mat Pilates</h2>
                </div>
                <p className="text-justify">
                  Pilates Mat is done on the floor on a mat. It may include
                  Pilates props like balls, foam rollers, Pilates magic circles
                  and other fitness tools. The batch strength of the session is
                  limited to a maximum of 12 students, so detailed attention can
                  be given to all.
                </p>
                <h4>Session Level</h4>
                <p className="class-p">Beginner, Intermediate, Expert.</p>
                <h4>Fees for Mat Sessions</h4>
                <p className="class-p">
                  1 month Group subscription (10 sessions) - INR 7500
                </p>
                <p className="class-p">
                  1 month Private subscription (10 sessions) - INR 18000
                </p>
              </div>{" "}
              <div
                className="razorpay-embed-btn"
                data-url="https://pages.razorpay.com/pl_LD3dgOAOKl5i3U/view"
                data-text="Pay Now"
                data-color="#528FF0"
                data-size="large"
              ></div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12">
              <LazyLoad once>
                <div className="img-fluid">
                  <img
                    src="assets/img/class_mat.webp?time=522556"
                    alt="img"
                    height="100%"
                    width="auto"
                  />
                </div>
              </LazyLoad>
            </div>
          </div>
        </div>
        <div className="classMat-padding mt-100 mb-100">
          <div className="row ">
            <div className="col-lg-6 col-md-12 col-sm-12 order-last order-lg-first">
              <LazyLoad once>
                <div className="img-fluid">
                  <img
                    src="assets/img/ft_gal_img6_2.webp?time=522556"
                    alt="img"
                    height="100%"
                    width="auto"
                  />
                </div>
              </LazyLoad>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 order-first order-lg-last">
              <div className="about-content s-about-content ">
                <div className="section-title mb-30">
                  <h2>Equipment Group</h2>
                </div>
                <p className="text-justify">
                  Group equipment Pilates sessions are fitness sessions that use
                  Pilates equipment such as reformers, barrels, or chairs to
                  provide a full-body workout for a group. The sessions are led
                  by our Certified Pilates Instructors and typically involve
                  participants performing exercises on the equipment as a group.
                  These exercises can include resistance training, core
                  strengthening, and balance and flexibility work. The use of
                  Pilates equipment allows for a wider range of exercises and
                  modifications to be made, making it a suitable form of
                  exercise for people of all ages and fitness levels. Group
                  equipment Pilates sessions can provide a fun, social, and
                  challenging workout experience, as well as the benefits of
                  Pilates exercise in a supportive group setting.
                </p>
                <h4>Session Level</h4>
                <p className="class-p">Beginner, Intermediate, Expert.</p>
                <h4>Fees for Group Sessions</h4>
                <p className="class-p">Single Group Trial Session - INR 1500</p>
                <p className="class-p">
                  1 month Group subscription (10 sessions) - INR 9440
                </p>
                <p className="class-p">
                  3 month Group subscription (36 sessions) - INR 27000
                </p>
                <p className="class-p">
                  6 month Group subscription (72 sessions) - INR 48600
                </p>
              </div>
              <div
                className="razorpay-embed-btn"
                data-url="https://pages.razorpay.com/pl_LD3dgOAOKl5i3U/view"
                data-text="Pay Now"
                data-color="#528FF0"
                data-size="large"
              ></div>
            </div>
          </div>
        </div>
        <div className="classMat-padding">
          <div className="row ">
            <div className="col-lg-6 col-md-12 col-sm-12">
              <div className="about-content s-about-content ">
                <div className="section-title mb-30">
                  <h2>Equipment Private</h2>
                </div>
                <p className="text-justify">
                  Private equipment Pilates sessions are one-on-one sessions
                  with our Certified Pilates instructor using Pilates equipment,
                  such as reformers, barrels, or chairs. These sessions are
                  designed to provide a personalized workout experience tailored
                  to your specific needs and goals. Our instructor will work
                  with you to create a customized workout plan, provide hands-on
                  corrections, and adjust the exercises to ensure proper form
                  and alignment. The use of Pilates equipment in private
                  sessions allows for a more targeted and efficient workout, as
                  well as the ability to modify exercises as per your physical
                  limitations or injuries. Private equipment Pilates sessions
                  can be especially beneficial for people who are new to
                  Pilates, have specific fitness goals, or need extra attention
                  and guidance. They can provide a more intimate and focused
                  workout experience, as well as the benefits of Pilates
                  exercise in a one-on-one setting.
                </p>
                <h4>Fees for Private Sessions</h4>
                <p className="class-p">
                  Single Private Trial Session - INR 2000
                </p>
                <p className="class-p">
                  Beginners Private Package (3 sessions) - INR 4500
                </p>
                <p className="class-p">
                  Private sessions starting from INR 15000
                </p>
              </div>
              <div
                className="razorpay-embed-btn"
                data-url="https://pages.razorpay.com/pl_LD3dgOAOKl5i3U/view"
                data-text="Pay Now"
                data-color="#528FF0"
                data-size="large"
              ></div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12">
              <LazyLoad once>
                <div className="img-fluid">
                  <img
                    src="assets/img/class_Equipment_Private_2.webp?time=522556"
                    alt="img"
                    height="100%"
                    width="auto"
                  />
                </div>
              </LazyLoad>
            </div>
          </div>
        </div>
        <div className="classMat-padding mt-100 mb-100">
          <div className="row  ">
            <div className="col-lg-6 col-md-12 col-sm-12 order-last order-lg-first">
              <LazyLoad once>
                <div className="img-fluid">
                  <img
                    src="assets/img/Rehab_Pilates_Classes_3.webp?time=522556"
                    alt="img"
                    height="100%"
                    width="auto"
                  />
                </div>
              </LazyLoad>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 order-first order-lg-last">
              <div className="about-content s-about-content ">
                <div className="section-title mb-30">
                  <h2>Rehab Pilates Sessions</h2>
                </div>

                <p className="text-justify">
                  Rehab Pilates sessions are Pilates sessions specifically
                  designed for clients who are recovering from an injury,
                  surgery, or other medical condition. These sessions are led by
                  our trained and certified Pilates instructors, who have
                  specialized knowledge and experience in working with people
                  who have physical limitations, pain, or other health
                  concerns.Rehab Pilates sessions are typically structured to
                  focus on rehabilitation and restoration of strength,
                  flexibility, stability, and balance to the affected areas of
                  the body. The exercises in these sessions are low-impact,
                  controlled movements that are carefully selected to help the
                  individual progress in their rehabilitation journey. They may
                  also incorporate the use of Pilates equipment, such as the
                  reformer, to assist with movement and to progress the
                  individual's strength and stability.Rehab Pilates sessions are
                  an excellent way for individuals to regain their physical
                  function and improve their overall health and wellness after
                  an injury or medical event. They offer a safe and effective
                  way to progress through rehabilitation while also helping to
                  prevent future injuries.
                </p>
                <h4>Fees for Rehab</h4>
                <p className="">
                  Special sessions for <b>Rehab</b> clients starting from INR
                  24000
                </p>
              </div>
              <div
                className="razorpay-embed-btn"
                data-url="https://pages.razorpay.com/pl_LD3dgOAOKl5i3U/view"
                data-text="Pay Now"
                data-color="#528FF0"
                data-size="large"
              ></div>
            </div>
          </div>
        </div>
        <div className="classMat-padding">
          <div className="row ">
            <div className="col-lg-6 col-md-12 col-sm-12">
              <div className="about-content s-about-content ">
                <div className="section-title mb-30">
                  <h2>Comprehensive Posture Assessment</h2>
                </div>

                <p className="text-justify">
                  Comprehensive Posture Assessment in Pilates is an evaluation
                  technique used to identify imbalances and misalignments in the
                  body. The Assessment is done by our expert Pilates instructor,
                  who uses a combination of observation, touch, and movement
                  analysis to assess the individual's posture, alignment, and
                  functional movement patterns. A Comprehensive Posture
                  Assessment aims to identify areas of weakness, imbalance, or
                  pain affecting your overall health, fitness, and quality of
                  life. This information can then be used to design a tailored
                  Pilates program that addresses these issues and helps to
                  restore optimal alignment, balance, and functionality.
                </p>
                <h4>Fees</h4>
                <p className="class-p">
                  Comprehensive Posture Assessment : <del>INR 2499</del> INR 299
                </p>
              </div>
              <div
                className="razorpay-embed-btn"
                data-url="https://pages.razorpay.com/pl_LD3dgOAOKl5i3U/view"
                data-text="Pay Now"
                data-color="#528FF0"
                data-size="large"
              ></div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12">
              <LazyLoad once>
                <div className="img-fluid">
                  <img
                    src="assets/img/Comprehensive_Postural_Assessment_2.webp?time=522556"
                    alt="img"
                    height="100%"
                    width="auto"
                  />
                </div>
              </LazyLoad>
            </div>
          </div>
        </div>
        <div className="classMat-padding mt-100 mb-100">
          <div className="row ">
            <div className="col-lg-6 col-md-12 col-sm-12 order-last order-lg-first">
              <LazyLoad once>
                <div className="img-fluid">
                  <img
                    src="assets/img/Online_Consulation_With_Deepali_Gupta.webp?time=522556"
                    alt="img"
                    height="100%"
                    width="auto"
                  />
                </div>
              </LazyLoad>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 order-first order-lg-last">
              <div className="about-content s-about-content ">
                <div className="section-title mb-30">
                  <h2>Online Consultation With Dr Deepali</h2>
                </div>
                <p className="text-justify">
                  In the online consultation with Dr Deepali Gupta, you can
                  discuss your symptoms, medical history, and other relevant
                  information with her. She may then make a diagnosis, provide
                  medical advice, and prescribe medication if necessary.
                </p>
                <h4>Fees for Online Consultation</h4>
                <p className="class-p">
                  Consultation with Dr. Deepali - INR 6000
                </p>
              </div>
              <div
                className="razorpay-embed-btn"
                data-url="https://pages.razorpay.com/pl_LD3dgOAOKl5i3U/view"
                data-text="Pay Now"
                data-color="#528FF0"
                data-size="large"
              ></div>
            </div>
          </div>
        </div>
        <div className="classMat-padding">
          <div className="row ">
            <div className="col-lg-6 col-md-12 col-sm-12">
              <div className="about-content s-about-content ">
                <div className="section-title mb-30">
                  <h2>Diet And Nutrition - Online Consultation</h2>
                </div>
                <p className="text-justify">
                  Online diet and nutrition consultation is a service offered by
                  our dietitians and nutritionists where you can receive
                  personalized nutritional advice and guidance, typically
                  through video conferencing or messaging. The consultation
                  includes a review of yourdietary habits, medical history, and
                  health goals and the development of a customized nutrition
                  plan to help you reach your goals. The convenience of online
                  consultations makes it easier to access professional nutrition
                  support, regardless of your location or schedule.
                </p>
                <h4>Fees</h4>
                <p className="class-p">Diet and Nutrition - INR 2500</p>
              </div>
              <div
                className="razorpay-embed-btn"
                data-url="https://pages.razorpay.com/pl_LD3dgOAOKl5i3U/view"
                data-text="Pay Now"
                data-color="#528FF0"
                data-size="large"
              ></div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12">
              <LazyLoad once>
                <div className="img-fluid">
                  <img
                    src="assets/img/Online_Diet_and_Nutrition_Consultation.webp?time=522556"
                    alt="img"
                    height="100%"
                    width="auto"
                  />
                </div>
              </LazyLoad>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClassMat;
