import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { FaUserCircle } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { useForm } from "react-hook-form";
import ReCAPTCHA from "react-google-recaptcha";
import { randomNum } from "../../utils/functions";

const HomeFormSectionForModal = () => {
  // console.log(blogId)
  // latest
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ mode: "onChange" });

  // 3
  const [display, setdisplay] = useState(false);

  const [verfied, setVerifed] = useState(true);
  function onChange(value) {
    setVerifed(!verfied);
  }

  const API_URL = process.env.NEXT_PUBLIC_APP_Base_URLa;

  const onSubmit = (data) => {
    // console.log(data);
    // setFormErrors(validate(formValues));
    // console.log(API_URL);
    // return false

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    // myHeaders.append("Authorization", `Basic WXUxOXQxbkUwVGpNd254eUQ5Og==`);

    fetch(`${API_URL}/enroll/course`, {
      method: "POST",
      headers: myHeaders,
      body: JSON.stringify(data),
    })
      .then((data) => {
        return data.json();
      })
      .then((result) => {
        // console.log(result);
        setdisplay(true);
        reset();

        setTimeout(() => {
          setdisplay(false);
        }, 5000);
        // if (isSubmit)
        // alert("data is submited");
      })
      .catch((error) => console.log(error));
  };

  return (
    <section
      className="services-area services-bg  booking-area p-relative"
      style={{ background: "#ffffff " }}
    >
      <div className="container">
        {/* <div className="row">
          <div className="col-lg-12 text-center">
            <div className="section-title mb-50">
              <h2>Let’s get going, Shall we?</h2>
            </div>
          </div>
        </div> */}

        <div className="row">
          <div className="col-lg-12">
            {/* {display ? (<div style={{ textAlign: "center" }}>
              <p style={{ padding: "5px", width: "30%", position: "relative", left: "36%", color: "white", boxShadow: "1px 1px gray", borderRadius: "4px", background: "#ed8c13", height: "41px" }}>Thank you for contacting us</p>
            </div>) : null} */}

            {display ? (
              <div className="row" style={{ textAlign: "center" }}>
                <div className="col-lg-4"></div>
                <div className="col-lg-4">
                  <p
                    style={{
                      background: "#ed8c13",
                      color: "white",
                      boxShadow: "1px 1px gray",
                      borderRadius: "4px",
                    }}
                  >
                    Thank you for getting in touch! <br></br>
                    One of our colleagues will get back in touch with you soon!
                    Have a great day!
                  </p>
                </div>
                <div className="col-lg-4"></div>
              </div>
            ) : null}

            <Form className="home_form " onSubmit={handleSubmit(onSubmit)}>
              <Row className="mb-2 home_from_row">
                <Form.Group
                  className="col-md-6"
                  controlId={`formGridName${randomNum()}`}
                >
                  <Form.Label className="modal_label">Name</Form.Label>
                  <Form.Control
                    type="text"
                    {...register("name", {
                      required: true,
                      pattern: [/[a-z]/, /[A-Z]/, /[0-9]/],
                    })}
                    name="name"
                    placeholder="Enter Name"
                  />
                  <FaUserCircle className="form_icon_modal" />
                  {errors.name && (
                    <p className="form_error_message modal_error_msg">
                      Please Enter Name
                    </p>
                  )}
                </Form.Group>

                <Form.Group
                  className="col-md-6"
                  controlId={`formGridEmail${randomNum()}`}
                >
                  <Form.Label className="modal_label">Email</Form.Label>
                  <Form.Control
                    type="text"
                    {...register("email", {
                      required: true,
                      pattern: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i,
                    })}
                    name="email"
                    placeholder="Enter email"
                  />
                  <FaEnvelope className="form_icon_modal" />
                  {errors.email && (
                    <p className="form_error_message modal_error_msg">
                      Please Check Email
                    </p>
                  )}
                </Form.Group>
              </Row>

              <Row className="mb-2 home_from_row">
                <div className="col-md-6 order-last order-lg-first">
                  <Row>
                    <Form.Group
                      className="col-md-12 home_form_padding mt-lg-0 mt-4"
                      controlId={`formGridPhone${randomNum()}`}
                    >
                      <Form.Label className="modal_label">Phone</Form.Label>
                      <Form.Control
                        type="text"
                        // {...register('phone', { required: true, maxLength: 10, minLength: 10, })}
                        // {...register('phone', { required: true, maxLength: 10, minLength: 10, })}
                        {...register("phone", { required: true })}
                        name="phone"
                        placeholder="Enter Phone Number"
                      />
                      <FaPhoneAlt className="form_icon_modal" />
                      {/* {errors.phone && <p className='form_error_message modal_error_msg'>Please Enter 10 Digit Phone Number</p>} */}
                    </Form.Group>
                    <div className="col-md-12 home_form_padding">
                      <div className="captcha">
                        <ReCAPTCHA
                          className="mt-3"
                          sitekey={process.env.NEXT_PUBLIC_APP_SITE_KEY}
                          onChange={onChange}
                        />
                      </div>
                    </div>
                  </Row>
                </div>
                <Form.Control
                  type="hidden"
                  {...register("course", {
                    required: true,
                    pattern: [/[a-z]/, /[A-Z]/, /[0-9]/],
                  })}
                  name="course"
                  placeholder="Enter text"
                  value="null"
                />

                {/* <FaListAlt className='form_icon_modal' /> */}
                {/* {errors.course && <p className='form_error_message modal_error_msg'>Please Select Course </p>} */}
                <div className="col-md-6 order-first order-lg-last">
                  <Row>
                    <Form.Group
                      as={Col}
                      className="col-md-12 home_form_padding"
                      controlId={`formGridMessage${randomNum()}`}
                    >
                      <Form.Label className="modal_label">Message</Form.Label>
                      <Form.Control
                        className="ddCol"
                        as="textarea"
                        rows={6}
                        {...register("message", {
                          required: true,
                          pattern: [/[a-z]/, /[A-Z]/, /[0-9]/],
                        })}
                        name="message"
                      />
                      {errors.message && (
                        <p className="form_error_message modal_error_msg">
                          Please Enter Message{" "}
                        </p>
                      )}
                    </Form.Group>
                  </Row>
                </div>
              </Row>

              <div className="row">
                <div className="col-2">
                  <Button
                    className="top-btn mt-lg-4 mb-4"
                    disabled={!verfied}
                    type="submit"
                  >
                    Submit
                  </Button>
                </div>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeFormSectionForModal;
