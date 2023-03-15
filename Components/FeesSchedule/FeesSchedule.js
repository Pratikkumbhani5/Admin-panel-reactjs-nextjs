import React, { useEffect } from "react";

const FeesSchedule = () => {
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
      className="about-area about-p mt-80 pb-80 p-relative  classmat-margin"
    >
      <div className="container">
        <div className="pricing classMat-padding">
          <div className="row justify-content-center">
            <div className="col-lg-12 text-center">
              <div className="section-title mb-50">
                <h2>Fees & Schedule</h2>
              </div>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-md-12 pricing-parent">
              {/* <img
                className="img-fluid pricing-img"
                src="assets/img/amico.png"
                alt=""
              /> */}

              <p>
                Fees for <span>Comprehensive Posture Assessment</span> : INR 299
              </p>
              <p className="py-3">
                Fees for <span>Group Classes </span>:
              </p>
              <p>Single Group Trial Class - INR 1500</p>

              <p>1 month Group subscription (10 classes) - INR 9440</p>

              <p>3 month Group subscription (36 classes) - INR 27000</p>

              <p>6 month Group subscription (72 classes) - INR 48600</p>
              <p className="py-3">
                Fees for <span>Private Classes</span> :{" "}
              </p>

              <p>Single Private Trial Class - INR 2000</p>

              <p>Beginners Private Package (3 classes) - INR 4500</p>

              <p>Private classes starting from INR 15000</p>

              <p>
                Special classes for <span> Rehab</span> clients starting from
                INR 24000
              </p>
              <div className="py-3">
                <p>
                  Timing - 7 am to 7 pm (Please share your preferred option and
                  we can try to accomodate)
                </p>
                <p> Class duration : 55 mins</p>
              </div>
              <p className="py-3">
                Fees for <span>Online Consultation</span> :
              </p>
              <p>Consultation with Dr. Deepali - INR 6000</p>

              <p>Diet and Nutrition - INR 2500</p>
            </div>
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
    </section>
  );
};

export default FeesSchedule;
