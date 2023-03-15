import React, { Suspense } from "react";
import dynamic from "next/dynamic";
import Head from "next/head";
const CancellationPolicyData = dynamic(() =>
  import("../Components/Policy/CancellationPloicyData")
);
const Header = dynamic(() => import("../Components/layout/Header"));
const Footer = dynamic(() => import("../Components/layout/Footer"));
const CopyRightFooter = dynamic(() =>
  import("../Components/layout/CopyRightFooter")
);

const CancellationPolicy = () => {
  return (
    <div className="home">
      <Head>
        <title>Cancellation Policy | iKore Pilates</title>
        <meta
          name="description"
          content="Our cancellation policy outlines the rules and procedures for cancelling a class/session or appointment. Please read our cacellation policy carefully before booking a class."
        />
        <meta name="keywords" content="iKore Pilates Cancellation Policy" />
      </Head>
      <Header />
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
        <CancellationPolicyData />
        <Footer />
        <CopyRightFooter />
      </Suspense>
    </div>
  );
};

export default CancellationPolicy;
