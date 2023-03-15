import React from "react";
import Link from "next/link";

const PageNotFound = () => {
  return (
    <div className="mt-5 pt-5">
      <section className="content">
        <div>
          <h2 className="headline col-12 text-warning text-center">
            Page Not Found
          </h2>
          <div className="error-content text-center" style={{ margin: 0 }}>
            <h3>
              <i className="fas fa-exclamation-triangle text-warning"></i>{" "}
              Something went wrong
            </h3>
            <p>
              We could not find the page you were looking for. Meanwhile, you
              may <br />
              <Link href="/">
                <button className="btn btn-primary mt-3">
                  Return to Home Page
                </button>
              </Link>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PageNotFound;
