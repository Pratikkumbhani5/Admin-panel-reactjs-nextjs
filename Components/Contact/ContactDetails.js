import React from "react";
import { FaHeadphonesAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import Facts from "../common/Facts";

const ContactDetails = () => {
  return (
    <section
      className="about-area about-p mt-80 mb-10 pt-120 p-relative contact-padding"
      id="about"
    >
      <Facts data="pb-80" />
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="contact_details_box">
              <div className="contact_icon">
                <FaHeadphonesAlt />
              </div>
              <div className="deatis">
                <h4>Phone Number</h4>
                <p>
                  <a href="tel:+91 9700448833">+91 9700448833</a>
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="contact_details_box">
              <div className="contact_icon">
                <FaEnvelope />
              </div>
              <div className="deatis">
                <h4>Email Address</h4>
                <p>
                  <a href="mailto:info@ikorepilates.com">
                    info@ikorepilates.com
                  </a>
                </p>{" "}
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="contact_details_box">
              <div className="contact_icon">
                <FaMapMarkerAlt />
              </div>
              <div className="deatis">
                <h4>Location</h4>
                <p>
                  1st Floor, 253/1/1, Trinity Building, Baner Park, Near Aundh
                  Telephone Exchange, Aundh, Pune -7
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row p-3">
          <div className="iframe-container ">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3180.5459759348473!2d73.80280481199259!3d18.559249928969045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf259b0e76e3%3A0xd4dad5b80d5e9cd2!2siKore%20Pilates%20(Earlier%20BeFit%20Pilates)%20%7C%20Best%20Pilates%20Studio%20in%20Pune!5e0!3m2!1sen!2sin!4v1675337945233!5m2!1sen!2sin"
              width="600"
              loading="lazy"
              title="Google map"
              height="450"
              style={{ border: 1 }}
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactDetails;
