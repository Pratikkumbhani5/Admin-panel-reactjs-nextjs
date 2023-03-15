import React, { useEffect } from "react";
import axios from "axios";
import dynamic from "next/dynamic";
import Head from "next/head";
import { useRouter } from "next/router";
const Header = dynamic(() => import("../../Components/layout/Header"));
const Footer = dynamic(() => import("../../Components/layout/Footer"));
const CopyRightFooter = dynamic(() =>
  import("../../Components/layout/CopyRightFooter")
);

// end
const BlogView = ({ data }) => {
  const navigate = useRouter();

  useEffect(() => {
    if (data.length === 0) {
      navigate.push("/blog");
    }
  }, [data]);

  return (
    <section className="inner-blog pt-100 pb-50 mt-80">
      <Head>
        <title>{data[0]?.meta_title}</title>

        <meta name="description" content={data[0]?.meta_description} />
        <meta name="keywords" content={data[0]?.meta_keywords} />
      </Head>
      <Header />
      <div className="container">
        <div className="row pd2">
          <div className="col-lg-12">
            <div className="blog-details-wrap mb-50 text-justify">
              <div className="bsingle__post-thumb mb-30">
                <img
                  src={`${process.env.NEXT_PUBLIC_APP_Base_URLa}/uploads/blog/${data[0]?.imgsrc}`}
                  alt={data[0]?.title}
                />
              </div>
              <div className="details__content ">
                <h2>{data[0]?.title}</h2>
                <div
                  dangerouslySetInnerHTML={{ __html: data[0]?.description }}
                ></div>
              </div>
            </div>
          </div>
          {/* <div className="col-lg-4">
            <aside>
              <div className="widget mb-40">
                <div className="widget-title text-center">
                  <h4>Instagram</h4>
                </div>
                 <ul className="widget-insta-post">
                  <li>
                    <a href="#">
                      <img
                        src="/assets/img/blog/aside/insta_01.jpg"
                        alt="img"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img
                        src="/assets/img/blog/aside/insta_02.jpg"
                        alt="img"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img
                        src="/assets/img/blog/aside/insta_03.jpg"
                        alt="img"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img
                        src="/assets/img/blog/aside/insta_04.jpg"
                        alt="img"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img
                        src="/assets/img/blog/aside/insta_05.jpg"
                        alt="img"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img
                        src="/assets/img/blog/aside/insta_06.jpg"
                        alt="img"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img
                        src="/assets/img/blog/aside/insta_07.jpg"
                        alt="img"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img
                        src="/assets/img/blog/aside/insta_08.jpg"
                        alt="img"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img
                        src="/assets/img/blog/aside/insta_09.jpg"
                        alt="img"
                      />
                    </a>
                  </li>
                </ul>
                <div className="insta-default text-center">
                  <a
                    href="https://www.instagram.com/ikore_pilates"
                    target="_blank"
                    className="insta-default"
                  >
                    Visit Us on Instagram{" "}
                    <i className="fab fa-instagram ml-1"></i>
                  </a>
                </div>
              </div>
              <div className="widget mb-40">
                <div className="widget-title text-center">
                  <h4>Follow Us</h4>
                </div>
                <div className="widget-social text-center">
                  <a
                    href="https://www.facebook.com/iKOREPILATES/"
                    target="_blank"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a
                    href="https://www.instagram.com/ikore_pilates/?igshid=YmMyMTA2M2Y%3D"
                    target="_blank"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a
                    href="https://www.linkedin.com/company/be-fit-pilates/"
                    target="_blank"
                  >
                    <i className="fab fa-linkedin"></i>
                  </a>
                </div>
              </div>
            </aside>
          </div> */}
        </div>
      </div>
      <Footer />
      <CopyRightFooter />
    </section>
  );
};

export default BlogView;

BlogView.getInitialProps = async (ctx) => {
  // console.log(ctx);
  const { query } = ctx;

  const res = await axios(
    `${process.env.NEXT_PUBLIC_APP_Base_URLa}/enroll/blog/${query.id}`
  );

  const json = res.data;
  return { data: json };
};
