import React, { Fragment } from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { FaUserCircle } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaListAlt } from "react-icons/fa";
import TeacherTrainingBlogsData from "../Certification/Data/TeacherTrainingBlogsData";
import { useForm } from "react-hook-form";
import ReCAPTCHA from "react-google-recaptcha";
import { randomNum } from "../../utils/functions";

const CertificationFormSection = () => {
  const [verfied, setVerifed] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ mode: "onChange" });

  const [display, setdisplay] = useState(false);

  const API_URL = process.env.NEXT_PUBLIC_APP_Base_URLa;

  const onSubmit = (data) => {
    // console.log(data);
    // setFormErrors(validate(formValues));
    // console.log(API_URL);
    // return false

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    // myHeaders.append("Authorization");
    // myHeaders.append("Authorization", `Basic WXUxOXQxbkUwVGpNd254eUQ5Og==`);

    fetch(`${API_URL}/enroll/course`, {
      method: "POST",
      headers: myHeaders,
      // headers: {
      //   'Accept': 'application/json',
      //   'Content-Type': 'application/json',
      //   'Authorization': "Basic WXUxOXQxbkUwVGpNd254eUQ5Og==' \"
      // },
      body: JSON.stringify(data),
    })
      .then((data) => {
        return data.json();
      })
      .then((result) => {
        // console.log(result);
        // setIsSubmit(true);
        setdisplay(true);
        reset();

        setTimeout(() => {
          // setIsSubmit(false);
          setdisplay(false);
          // data=[]
          // for (const prop of Object.getOwnPropertyNames(data)) {
          //   delete data[prop];
          // }

          // console.log(data);
        }, 5000);
        // if (isSubmit)
        // alert("data is submited");
      })
      .catch((error) => console.log(error));
  };

  //recaptcha function
  function onChange(value) {
    setVerifed(!verfied);
  }

  return (
    <Fragment>
      <section
        className="services-area services-bg pt-80 pb-120 booking-area p-relative"
        style={{ background: "#ffffff" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <div className="section-title mb-50">
                <h2>Let’s get going, Shall we?</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
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
                      One of our colleagues will get back in touch with you
                      soon! Have a great day!
                    </p>
                  </div>
                  <div className="col-lg-4"></div>
                </div>
              ) : null}

              <Form
                className="home_form contact-form"
                onSubmit={handleSubmit(onSubmit)}
              >
                <Row className="mb-2 home_from_row">
                  <Form.Group
                    className="col-md-6"
                    controlId={`certificationFormGridName${randomNum()}`}
                  >
                    <Form.Label>Name</Form.Label>
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
                      <p className="form_error_message">Please Enter Name</p>
                    )}
                  </Form.Group>

                  <Form.Group
                    className="col-md-6"
                    controlId={`certificationFormGridEmail${randomNum()}`}
                  >
                    <Form.Label>Email</Form.Label>
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
                      <p className="form_error_message">Please Check Email</p>
                    )}
                  </Form.Group>
                </Row>

                <Row className="mb-2 home_from_row">
                  <Form.Group
                    className="col-md-6"
                    controlId={`certificationFormGridPhone${randomNum()}`}
                  >
                    <Form.Label>Phone</Form.Label>
                    <Form.Control
                      type="number"
                      {...register("phone", {
                        required: true,
                        maxLength: 10,
                        minLength: 10,
                      })}
                      name="phone"
                      placeholder="Enter Phone Number"
                    />
                    <FaPhoneAlt className="form_icon_modal" />
                    {errors.phone && (
                      <p className="form_error_message">
                        Please Enter 10 Digit Phone Number
                      </p>
                    )}
                  </Form.Group>

                  <Form.Group
                    className="col-md-6"
                    controlId={`certificationFormGridCourse${randomNum()}`}
                  >
                    <Form.Label>Course</Form.Label>
                    <Form.Select
                      name="course"
                      className="form-control"
                      {...register("course", { required: true })}
                    >
                      <option value=""></option>
                      {TeacherTrainingBlogsData.map((item, id) => {
                        return (
                          <option
                            // selected={item.id == blogId ? true : false}
                            key={item.id}
                            value={item.post_title}
                          >
                            {item.post_title}
                          </option>
                        );
                      })}
                    </Form.Select>
                    <FaListAlt className="form_icon_modal" />
                    {errors.course && (
                      <p className="form_error_message">
                        Please Select Course{" "}
                      </p>
                    )}
                  </Form.Group>
                </Row>

                <Row className="mb-3">
                  <Form.Group
                    as={Col}
                    className="col-md-6"
                    controlId={`certificationFormGridMessage${randomNum()}`}
                  >
                    <Form.Label>Message</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={3}
                      {...register("message", {
                        required: true,
                        pattern: [/[a-z]/, /[A-Z]/, /[0-9]/],
                      })}
                      name="message"
                    />
                    {errors.message && (
                      <p className="form_error_message">Please Enter Message</p>
                    )}
                  </Form.Group>
                  <div className="col-md-6 mt-3">
                    <div className="captcha">
                      <ReCAPTCHA
                        className="mt-3"
                        sitekey={process.env.NEXT_PUBLIC_APP_SITE_KEY}
                        onChange={onChange}
                      />
                    </div>
                  </div>
                </Row>

                <div className="row">
                  <div className="col-2">
                    <Button
                      className="top-btn mt-lg-4"
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
    </Fragment>
  );
};

export default CertificationFormSection;
