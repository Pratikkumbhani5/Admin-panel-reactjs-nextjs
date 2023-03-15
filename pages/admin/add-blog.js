import React, { useState } from "react";
import Link from "next/link";
import axios from "axios";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { CKEditor } from "ckeditor4-react";
import Header from "../../Components/Admin/Layout/Header";
import Menu from "../../Components/Admin/Layout/Menu";
import Footer from "../../Components/Admin/Layout/Footer";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

const notify = () =>
  toast.success("Blog Added Successfully", {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
  });
const notifyEmail = (data) =>
  toast.error(data, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
  });

const AddBlog = () => {
  const [image, setImage] = useState();
  const [imageError, setImageError] = useState(false);
  const [descriptionError, setDescriptionError] = useState(false);
  const [description, setDescription] = useState();

  const session = useSession();

  const nav = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const API_URL = process.env.NEXT_PUBLIC_APP_Base_URLa;

  const onSubmit = async (data, event) => {
    if (session.status === "authenticated") {
      event.preventDefault();

      const formData = new FormData();
      formData.append("title", data.title);
      formData.append("pre_description", data.pre_description);
      formData.append("description", description);
      formData.append("meta_title", data.meta_title);
      formData.append("meta_description", data.meta_description);
      formData.append("meta_keywords", data.meta_keywords);

      const file = image;

      if (description == undefined) {
        return;
      }

      if (image !== undefined) {
        if (
          file.type != "image/jpg" &&
          file.type != "image/jpeg" &&
          file.type != "image/webp" &&
          file.type != "image/png"
        ) {
          setImageError(true);
          // console.log("Not valid File");
          return;
        }
      }

      if (image !== undefined) {
        formData.append("imgsrc", image);
        setImageError(false);
      } else {
        setImageError(true);
        return;
      }

      // for (var pair of formData.entries()) {
      //   console.log(pair[0] + ", " + pair[1]);
      // }

      await axios
        .post(`${API_URL}/author/add-blog`, formData, {
          headers: {
            Authorization: `Bearer ${session.data.user.token}`,
          },
        })
        .then((res) => {
          // console.log(res);
          notify();
          nav.push("/admin/blog");
        })
        .catch((error) => {
          console.log(error);
          notifyEmail(error.response.data.error);
        });
    }
  };

  return (
    <div>
      <Header />
      <Menu />
      <div className="content-wrapper ">
        <section className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1>Add New Blog</h1>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item">
                    <Link className="text-dark" href="/admin/dashboard">
                      Home
                    </Link>
                  </li>
                  <li className="breadcrumb-item active text-dark">New Blog</li>
                </ol>
              </div>
            </div>
          </div>
        </section>
        <section className="content">
          <div className="container-fluid">
            <div className="row justify-content-center">
              <div className="col-md-8">
                <div className="card mb-100 mt-50">
                  <div className="card-header">
                    <h3 className="card-title">Add New Blog</h3>
                  </div>
                  <form
                    className="form-horizontal"
                    onSubmit={handleSubmit(onSubmit)}
                  >
                    <div className="card-body">
                      <div className="form-group ">
                        <label
                          htmlFor="title"
                          className="col-sm-2 col-form-label"
                        >
                          Title
                        </label>
                        <div className="col-sm-12">
                          <input
                            type="text"
                            className={`form-control ${
                              errors.title ? "is-invalid" : ""
                            }`}
                            id="title"
                            placeholder="Title"
                            {...register("title", {
                              required: "Please enter the Title",
                            })}
                          />
                          {errors.title && (
                            <div className="error invalid-feedback">
                              <p>{errors.title.message}</p>
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="form-group ">
                        <label
                          htmlFor="pre_description"
                          className="col-sm-3 col-form-label"
                        >
                          Pre Description
                        </label>
                        <div className="col-sm-12">
                          <textarea
                            rows={3}
                            className={`form-control ${
                              errors.pre_description ? "is-invalid" : ""
                            }`}
                            id="pre_description"
                            placeholder="Pre Description"
                            {...register("pre_description", {
                              required: "Please enter the Pre Description",
                            })}
                          />
                          {errors.pre_description && (
                            <div className="error invalid-feedback">
                              <p>{errors.pre_description.message}</p>
                            </div>
                          )}
                        </div>
                      </div>

                      <div className="form-group ">
                        <label
                          htmlFor="description"
                          className="col-sm-2 col-form-label"
                        >
                          Description
                        </label>
                        <div className="col-sm-12">
                          <CKEditor
                            initData={description}
                            onChange={(evt) => {
                              setDescription(evt.editor.getData());
                              setDescriptionError(false);
                            }}
                            type="classic"
                          />
                          {/* <input
                            type="text"
                            id="description"
                            {...register("description", {
                              required: "Please enter the Description",
                            })}
                            placeholder="Description"
                          /> */}
                          {descriptionError && (
                            <div className="d-block invalid-feedback">
                              <p>Please enter the Description</p>
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="form-group ">
                        <label
                          htmlFor="meta_title"
                          className="col-sm-2 col-form-label"
                        >
                          Meta Title
                        </label>
                        <div className="col-sm-12">
                          <input
                            type="text"
                            className={`form-control ${
                              errors.meta_title ? "is-invalid" : ""
                            }`}
                            id="meta_title"
                            placeholder="Meta Title"
                            {...register("meta_title", {
                              required: "Please enter the Meta Title",
                            })}
                          />
                          {errors.meta_title && (
                            <div className="invalid-feedback">
                              <p>{errors.meta_title.message}</p>
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="form-group ">
                        <label
                          htmlFor="meta_description"
                          className="col-sm-3 col-form-label"
                        >
                          Meta Description
                        </label>
                        <div className="col-sm-12">
                          <textarea
                            rows={3}
                            className={`form-control ${
                              errors.meta_description ? "is-invalid" : ""
                            }`}
                            id="meta_description"
                            placeholder="Meta Description"
                            {...register("meta_description", {
                              required: "Please enter the Meta Description",
                            })}
                          />
                          {errors.meta_description && (
                            <div className="invalid-feedback">
                              <p>{errors.meta_description.message}</p>
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="form-group ">
                        <label
                          htmlFor="meta_keywords"
                          className="col-sm-3 col-form-label"
                        >
                          Meta Keywords
                        </label>
                        <div className="col-sm-12">
                          <input
                            type="text"
                            className={`form-control ${
                              errors.meta_keywords ? "is-invalid" : ""
                            }`}
                            id="meta_keywords"
                            placeholder="Meta Keywords"
                            {...register("meta_keywords", {
                              required: "Please enter the Meta Keywords",
                            })}
                          />
                          {errors.meta_keywords && (
                            <div className="invalid-feedback">
                              <p>{errors.meta_keywords.message}</p>
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="form-group upload-btn-wrapper">
                        <label
                          htmlFor="imgsrc"
                          className="col-sm-3 col-form-label"
                        >
                          Image
                        </label>
                        <div className="col-sm-12">
                          <input
                            type="file"
                            className={`form-control ${
                              imageError ? "is-invalid" : ""
                            }`}
                            accept="image/jpg,image/jpeg,image/webp,image/png"
                            id="imgsrc"
                            // placeholder="Image"
                            {...register("imgsrc", {
                              required: "Please Select valid Image",
                            })}
                            onChange={(e) => {
                              setImage(e.target.files[0]);
                              setImageError(false);
                            }}
                          />
                          {imageError && (
                            <div className="invalid-feedback">
                              <p>Please Select Valid File</p>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="card-footer">
                      <Link href="/admin/blog">
                        <button type="button" className="btn btn-default">
                          Cancel
                        </button>
                      </Link>
                      <button
                        type="submit"
                        className="btn btn-info float-right"
                        onClick={() => {
                          if (image !== undefined) {
                            setImageError(false);
                          } else {
                            setImageError(true);
                          }

                          if (description !== undefined) {
                            setDescriptionError(false);
                          } else {
                            setDescriptionError(true);
                          }
                        }}
                      >
                        Save
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};
export default AddBlog;
