import React, { Suspense } from "react";
import dynamic from "next/dynamic";
import Head from "next/head";
const Policy = dynamic(() => import("../Components/Policy/Policy"));
const Header = dynamic(() => import("../Components/layout/Header"));
const Footer = dynamic(() => import("../Components/layout/Footer"));
const CopyRightFooter = dynamic(() =>
  import("../Components/layout/CopyRightFooter")
);

const PrivacyPolicy = () => {
  return (
    <div className="home">
      <Head>
        <title>Privacy Policy | iKore Pilates</title>
        <meta
          name="description"
          content="Your privacy is important to us. Learn about the information we collect, how we use it, and how we protect your privacy in our Privacy Policy."
        />
        <meta name="keywords" content="iKore Pilates Privacy Policy" />
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
        <Policy />
        <Footer />
        <CopyRightFooter />
      </Suspense>
    </div>
  );
};

export default PrivacyPolicy;
