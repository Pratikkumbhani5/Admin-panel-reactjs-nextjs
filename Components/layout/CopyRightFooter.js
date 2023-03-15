import React from "react";
const CopyRightFooter = () => {
  return (
    <section className="copy_right_footer">
      <div className="container">
        <div className="row">
          <div className="col-md-6 d-flex justify-content-between">
            <p>
              © Copyright {new Date().getFullYear()} Be Fit Wellness
              Solution LLP All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CopyRightFooter;
