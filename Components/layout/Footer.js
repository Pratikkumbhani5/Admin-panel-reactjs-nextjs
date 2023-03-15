import React, { Suspense, useEffect, useRef } from "react";
import Link from "next/link";
import { FaEnvelope } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationArrow } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import LazyLoad from "react-lazyload";

const Footer = () => {
  const iframeRef = useRef(null);

  function encRot13(mailString) {
    const mapArray = [];
    const elements = "abcdefghijklmnopqrstuvwxyz";
    let outp = "";

    for (let i = 0; i < elements.length; i++) {
      const x = elements.charAt(i);
      const y = elements.charAt((i + 13) % 26);
      mapArray[x] = y;
      mapArray[x.toUpperCase()] = y.toUpperCase();
    }

    for (let i = 0; i < mailString.length; i++) {
      const c = mailString.charAt(i);
      outp +=
        (c >= "A" && c <= "z") || (c >= "a" && c <= "'") ? mapArray[c] : c;
    }

    return outp;
  }

  const mailString = "info@ikorepilates.com";
  const encString = encRot13(mailString);
  const linkString = `mailto:${encRot13(encString)}`;

  useEffect(() => {
    if (iframeRef.current) {
      const iframeContentWindow = iframeRef.current.contentWindow;
      const mapElement = iframeContentWindow.document.getElementById("map");
      const handleMapScroll = (e) => {
        // handle the scroll event
      };
      const options = {
        passive: true,
      };
      iframeContentWindow.addEventListener("wheel", handleMapScroll, options);
    }
  }, [iframeRef]);

  return (
    <footer className="footer_section footer-bg footer-p pt-40 ">
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
          >
            <div className="spinner-border" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        }
      >
        <div className="container pd1 pd4 ">
          <div className="row">
            <div className="col-lg-3">
              <div className="f-widget-title">
                <h5>Contact Us</h5>
              </div>
              <ul className="ft_icon_ul ">
                <li>
                  <FaLocationArrow />
                  <strong>Address</strong>
                  <br />
                  <p>
                    iKore Pilates (Formerly BeFit Pilates) 1st Floor, 253/1/1,
                    Trinity Building, Baner Park, Near Aundh Telephone Exchange,
                    Aundh, Pune
                  </p>
                </li>
                <li>
                  <FaPhoneAlt />
                  <strong>Phone</strong>
                  <br />
                  <a href="tel:09700448833">+91 9700448833</a>
                </li>
                <li>
                  <FaEnvelope />
                  <strong>Email</strong>
                  <br />
                  <a href={linkString}>{mailString}</a>
                  {/* <a href="mailto:info@ikorepilates.com">
                    info@ikorepilates.com
                  </a> */}
                </li>
              </ul>
            </div>

            <div className="col-lg-3">
              <div className="f-widget-title">
                <h5>Useful Links</h5>
              </div>
              <ul className="useful_link">
                <li className="footer-li">
                  <Link href="/">Home</Link>
                </li>
                <li className="footer-li">
                  <Link href="/about">About Us</Link>
                </li>
                <li className="footer-li">
                  <Link href="/offerings">Offerings</Link>
                </li>
                <li className="footer-li">
                  <Link href="/certification">Certification</Link>
                </li>
                <li className="footer-li">
                  <Link href="/testimonials">Testimonials</Link>
                </li>
                <li className="footer-li">
                  <Link href="/blog">Blog</Link>
                </li>
                <li className="footer-li">
                  <Link href="/FAQs">FAQs</Link>
                </li>
                <li className="footer-li">
                  <Link href="/career">Career</Link>
                </li>
                <li className="footer-li">
                  <Link href="/contact-us">Contact</Link>
                </li>
                <li className="footer-li">
                  <Link href="/fees-schedule">Fees & Schedule</Link>
                </li>
              </ul>
            </div>
            <div className="col-lg-3">
              <div className="f-widget-title">
                <h5>Other Links</h5>
              </div>
              <ul className="useful_link">
                <li className="footer-li">
                  <Link href="/privacy-policy">Privacy Policy</Link>
                </li>
                <li className="footer-li">
                  <Link href="/terms-conditions">Terms and Conditions</Link>
                </li>
                <li className="footer-li">
                  <Link href="/cancellation-policy">Cancellation Policy</Link>
                </li>
                <li className="footer-li">
                  <a target="_blank" href="/sitemap.xml">
                    Sitemap
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-lg-3">
              <div className="f-widget-title mb-5">
                <h5>Stay Connected</h5>
              </div>
              <div className="ft_social_links mb-5">
                <a
                  href="https://www.facebook.com/iKOREPILATES/"
                  target="_blank"
                  aria-label="facebook"
                  rel="noreferrer noopener"
                >
                  <FaFacebookF />
                </a>
                <a
                  href="https://www.instagram.com/ikore_pilates/?igshid=YmMyMTA2M2Y%3D"
                  target="_blank"
                  aria-label="instagram"
                  rel="noreferrer noopener"
                >
                  <FaInstagramSquare />
                </a>
                <a
                  href="https://www.linkedin.com/company/be-fit-pilates/"
                  target="_blank"
                  aria-label="linkedin"
                  rel="noreferrer noopener"
                >
                  <FaLinkedinIn />
                </a>
              </div>

              <div className="iframe-container ">
                <LazyLoad once>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3180.5459759348473!2d73.80280481199259!3d18.559249928969045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf259b0e76e3%3A0xd4dad5b80d5e9cd2!2siKore%20Pilates%20(Earlier%20BeFit%20Pilates)%20%7C%20Best%20Pilates%20Studio%20in%20Pune!5e0!3m2!1sen!2sin!4v1675337945233!5m2!1sen!2sin"
                    width="600"
                    height="450"
                    title="google map"
                    style={{ border: 1 }}
                    loading="lazy"
                    ref={iframeRef}
                  ></iframe>
                </LazyLoad>
              </div>
            </div>
          </div>
        </div>
      </Suspense>
    </footer>
  );
};

export default Footer;
