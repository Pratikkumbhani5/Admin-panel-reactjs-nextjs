import React, { Suspense } from "react";
import dynamic from "next/dynamic";
import Head from "next/head";
const SliderSectionCertification = dynamic(() =>
  import("../Components/Certification/SliderSectionCertification")
);
const TeacherTrainingSection = dynamic(() =>
  import("../Components/Certification/TeacherTrainingSection")
);
const Testimonial = dynamic(() =>
  import("../Components/Certification/Testimonial")
);
const TeacherTrainingBlogs = dynamic(() =>
  import("../Components/Certification/TeacherTrainingBlogs")
);
const CertificationFormSection = dynamic(() =>
  import("../Components/Modal/CertificationFormSection")
);
const Header = dynamic(() => import("../Components/layout/Header"));
const Footer = dynamic(() => import("../Components/layout/Footer"));
const CopyRightFooter = dynamic(() =>
  import("../Components/layout/CopyRightFooter")
);

const Certification = () => {
  return (
    <div className="home">
      <Head>
        <title>Balanced Body Certification|International Teacher Course</title>

        <meta
          name="description"
          content="Grab Our EARN while you LEARN Programme. Join iKore PilatesComprehensive Pilates Instructor Certification Course. Develop your skills, knowledge and confidence to teach Pilates. Start your journey today!"
        />
        <meta
          name="keywords"
          content="Pilates Instructor Training, Pilates Teacher Training, Pilates Training, Pilates Certification Course, Pilates MAT Training, Pilates Reformer Training."
        />
      </Head>
      <Header />
      <SliderSectionCertification />
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
        <TeacherTrainingBlogs />
        <TeacherTrainingSection />
        <Testimonial />
        <CertificationFormSection />
        <Footer />
        <CopyRightFooter />
      </Suspense>
    </div>
  );
};

export default Certification;
