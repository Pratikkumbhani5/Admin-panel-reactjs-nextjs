import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { FaUserCircle } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaListAlt } from "react-icons/fa";
import { useForm } from "react-hook-form";
import axios from "axios";
import ReCAPTCHA from "react-google-recaptcha";
import { randomNum } from "../../utils/functions";

const CareerFormSection = () => {
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
  const [resume, setResume] = useState();

  // console.log(resume);
  const [pdfError, setPdfError] = useState(false);

  // console.log(pdfError);

  const [verfied, setVerifed] = useState(true);
  function onChange(value) {
    setVerifed(!verfied);
  }

  const API_URL = process.env.NEXT_PUBLIC_APP_Base_URLa;

  const onSubmit = (data) => {
    // setFormErrors(validate(formValues));
    // console.log(API_URL);
    // console.log(data);
    const formData = new FormData();
    formData.append("email", data.email);
    formData.append("experience", data.experience);
    formData.append("name", data.name);
    formData.append("phone", data.phone);
    formData.append("role", data.role);

    const file = resume;
    // console.log(file);
    if (resume !== undefined) {
      if (
        file.type != "application/pdf" &&
        file.type !=
          "application/vnd.openxmlformats-officedocument.wordprocessingml.document" &&
        file.type != "application/msword"
      ) {
        setPdfError(true);
        // console.log("Not valid File");
        return;
      }
    }

    if (resume !== undefined) {
      // console.log("IN");
      formData.append("resume", resume);
      setPdfError(false);
    } else {
      setPdfError(true);
      return;
    }

    // console.log("op");

    axios
      .post(`${API_URL}/enroll/career`, formData)
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

    // fetch(`${API_URL}/enroll/career`, {
    //   method: "POST",
    //   headers: myHeaders,
    //   body: JSON.stringify(formData),
    // })
    //   .then((data) => {
    //     return data.json();
    //   })
    //   .then((result) => {
    //     console.log(result);
    //     setdisplay(true);
    //     reset();

    //     setTimeout(() => {
    //       setdisplay(false);
    //     }, 5000);
    //     // if (isSubmit)
    //     // alert("data is submited");
    //   })
    //   .catch((error) => console.log(error));
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
                  controlId={`careerFormGridName${randomNum()}`}
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
                  controlId={`careerFormGridEmail${randomNum()}`}
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
                <Form.Group
                  className="col-md-6"
                  controlId={`careerFormGridPhone${randomNum()}`}
                >
                  <Form.Label className="modal_label">Phone</Form.Label>
                  <Form.Control
                    type="number"
                    // {...register('phone', { required: true, maxLength: 10, minLength: 10, })}
                    // {...register('phone', { required: true, maxLength: 10, minLength: 10, })}
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
                    <p className="form_error_message modal_error_msg">
                      Please Enter 10 Digit Phone Number
                    </p>
                  )}
                </Form.Group>

                {/* <FaListAlt className='form_icon_modal' /> */}
                {/* {errors.course && <p className='form_error_message modal_error_msg'>Please Select Course </p>} */}

                <Form.Group
                  className="col-md-6"
                  controlId={`careerFormGridExperience${randomNum()}`}
                >
                  <Form.Label className="modal_label">Experience</Form.Label>
                  <Form.Control
                    type="number"
                    {...register("experience", {
                      required: true,
                      pattern: [/[a-z]/, /[A-Z]/, /[0-9]/],
                    })}
                    name="experience"
                    placeholder="Enter Experience"
                  />
                  <FaListAlt className="form_icon_modal" />
                  {errors.experience && (
                    <p className="form_error_message modal_error_msg">
                      Please Enter Experience
                    </p>
                  )}
                </Form.Group>
              </Row>

              <Row className="mb-2 home_from_row">
                <Form.Group
                  className="col-md-6"
                  controlId={`careerFormGridRole${randomNum()}`}
                >
                  <Form.Label className="modal_label">Role</Form.Label>
                  <Form.Select
                    name="role"
                    className="form-control"
                    {...register("role", { required: true })}
                  >
                    <option value="">Select Role</option>
                    <option value="psychologist">
                      Counselling Psychologist
                    </option>
                    <option value="nutritionist">Female Nutritionist</option>
                  </Form.Select>
                  <FaListAlt className="form_icon_modal" />
                  {errors.role && (
                    <p className="form_error_message modal_error_msg">
                      Please Select role{" "}
                    </p>
                  )}
                </Form.Group>
                <Form.Group
                  className="col-md-6 upload-btn-wrapper"
                  controlId={`careerFormGridResume${randomNum()}`}
                >
                  <Form.Label className="modal_label">Resume</Form.Label>

                  <Form.Control
                    type="file"
                    accept="application/pdf,.docx,.doc"
                    className="ps-2"
                    // {...register("resume", {
                    //   required: "Please Select Resume",
                    //   // onChange: (e) => {
                    //   //   const values = getValues(); // { test: "test-input", test1: "test1-input" }
                    //   //   console.log(values);
                    //   //   const file = values.resume[0];
                    //   //   console.log(file);
                    //   //   if (file.type != "application/pdf") {
                    //   //     console.log("IN");
                    //   //     setError("resume", {
                    //   //       type: "filetype",
                    //   //       message: "Only PDFs are valid.",
                    //   //     });
                    //   //   }
                    //   // },
                    // })}
                    onChange={(e) => {
                      setResume(e.target.files[0]);
                    }}
                    name="resume"
                  />
                  {pdfError && (
                    <p className="form_error_message modal_error_msg mt-4">
                      Please Select Resume
                    </p>
                  )}
                </Form.Group>
              </Row>
              <Row>
                <div className="col">
                  <div className="captcha">
                    <ReCAPTCHA
                      className="mt-3 mb-3"
                      sitekey={process.env.NEXT_PUBLIC_APP_SITE_KEY}
                      onChange={onChange}
                    />
                  </div>
                </div>
              </Row>
              <div className="row">
                <div className="col-2">
                  <Button
                    className="top-btn mt-lg-4 "
                    disabled={!verfied}
                    onClick={() => {
                      if (resume !== undefined) {
                        setPdfError(false);
                      } else {
                        setPdfError(true);
                      }
                    }}
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

export default CareerFormSection;
