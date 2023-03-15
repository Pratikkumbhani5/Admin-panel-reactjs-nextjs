import React, { Suspense } from "react";
import dynamic from "next/dynamic";
const FeesScheduleSection = dynamic(() =>
  import("../Components/FeesSchedule/FeesSchedule")
);
const Header = dynamic(() => import("../Components/layout/Header"));
const Footer = dynamic(() => import("../Components/layout/Footer"));
const CopyRightFooter = dynamic(() =>
  import("../Components/layout/CopyRightFooter")
);

const FeesSchedule = () => {
  return (
    <>
      <Header />
      <div className="mt-185 ">
        <Suspense
          fallback={
            <div
              style={{
                position: "absolute",
                left: "50%",
                top: "50%",
                WebkitTransform: "translate(-50%, -50%)",
                transform: "translate(-50%, -50%)",
              }}
              // className="h-100 d-flex justify-content-center align-items-center"
            >
              <div className="spinner-border" role="status">
                <span className="sr-only">Loading...</span>
              </div>
            </div>
          }
        >
          <FeesScheduleSection />
          <Footer />
          <CopyRightFooter />
        </Suspense>
      </div>
    </>
  );
};

export default FeesSchedule;
