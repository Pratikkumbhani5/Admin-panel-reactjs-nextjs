import React, { Suspense } from "react";
import dynamic from "next/dynamic";
import Head from "next/head";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";
import LazyLoad from "react-lazyload";
const HomeForm = dynamic(() => import("../Components/Modal/HomeForm"));
const SliderSectionHome = dynamic(() =>
  import("../Components/Home/SliderSectionHome")
);
const Facts = dynamic(() => import("../Components/common/Facts"));
const WhyChooseUs = dynamic(() => import("../Components/Home/WhyChooseUs"));
const WhyPilates = dynamic(() => import("../Components/Home/WhyPilates"));
const Services = dynamic(() => import("../Components/Home/Services"));
const Header = dynamic(() => import("../Components/layout/Header"));
const Footer = dynamic(() => import("../Components/layout/Footer"));
const CopyRightFooter = dynamic(() =>
  import("../Components/layout/CopyRightFooter")
);

const Home = () => {
  return (
    <div className="home">
      <Head>
        <title>
          Best Pilates Studio | Teacher Training Certification Course
        </title>

        <meta
          name="description"
          content="Join iKorePilates for a dynamic and empowering Pilates experience. Doworkout with our Certified Pilates Instructors to improve your strength, flexibility, and posture. Book your class today!"
        />
        <meta
          name="keywords"
          content="Pilates, Pilates Classes Pune, Pilates Sessions, International Certification in Pilates, One-to-One Private Pilates Classes, Group Pilates Classes, Pilates Group Classes,Pilates Instructor Training, Pilates Teacher Training, Pilates Certification Courses, Pilates Education, Top Pilates Classes, Best Pilates Classes, Leading Pilates Classes, India, iKorePilates"
        />
      </Head>
      <Header />
      <SliderSectionHome />
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
        <Facts data="pb-120" />
        <WhyChooseUs />
        <WhyPilates />
        <Services />
        <LazyLoad once>
          <HomeForm />
        </LazyLoad>
        <Footer />
        <CopyRightFooter />
      </Suspense>
    </div>
  );
};

export default Home;
