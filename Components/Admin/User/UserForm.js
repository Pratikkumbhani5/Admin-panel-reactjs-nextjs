import React from "react";
import Link from "next/link";
import axios from "axios";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import { useForm } from "react-hook-form";
import Header from "../Layout/Header";
import Menu from "../Layout/Menu";
import Footer from "../Layout/Footer";

const notify = () =>
  toast.success("User Edited Successfully", {
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

export const UserForm = ({ preLoadedValues }) => {
  const router = useRouter();

  const { id } = router.query;
  const nav = useRouter();
  const session = useSession();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: preLoadedValues });

  const onSubmit = (data, event) => {
    if (session.status === "authenticated") {
      // console.log(data);
      event.preventDefault();

      axios
        .put(
          `${process.env.NEXT_PUBLIC_APP_Base_URLa}/author/user-edit/${id}`,
          data,
          {
            headers: {
              Authorization: `Bearer ${session.data.user.token}`,
            },
          }
        )
        .then((res) => {
          // console.log(res);
          notify();
          nav.push("/admin/user");
        })
        .catch((error) => {
          console.log(error);
          notifyEmail(error.response.data.message);
        });
    }
  };

  return (
    <div>
      <Header />
      <Menu />
      <div className="content-wrapper">
        <section className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1>Edit User Information</h1>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item">
                    <Link href="/admin/dashboard">Home</Link>
                  </li>
                  <li className="breadcrumb-item active">Edit User</li>
                </ol>
              </div>
            </div>
          </div>
        </section>
        <section className="content">
          <div className="container-fluid">
            <div className="row  justify-content-center">
              <div className="col-md-8">
                <div className="card">
                  <div className="card-header">
                    <h3 className="card-title">Edit User Information</h3>
                  </div>
                  <form
                    className="form-horizontal"
                    onSubmit={handleSubmit(onSubmit)}
                  >
                    <div className="card-body">
                      <div className="form-group ">
                        <label
                          htmlFor="first_name"
                          className="col-sm-2 col-form-label"
                        >
                          First Name
                        </label>
                        <div className="col-sm-12">
                          <input
                            type="text"
                            className={`form-control ${
                              errors.first_name ? "is-invalid" : ""
                            }`}
                            id="first_name"
                            placeholder="First Name"
                            {...register("first_name", {
                              required: "Please enter the First Name",
                            })}
                          />
                          {errors.first_name && (
                            <div className="error invalid-feedback">
                              <p>{errors.first_name.message}</p>
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="form-group ">
                        <label
                          htmlFor="last_name"
                          className="col-sm-2 col-form-label"
                        >
                          Last Name
                        </label>
                        <div className="col-sm-12">
                          <input
                            type="text"
                            className={`form-control ${
                              errors.last_name ? "is-invalid" : ""
                            }`}
                            id="last_name"
                            placeholder="Last Name"
                            {...register("last_name", {
                              required: "Please check the Last Name",
                            })}
                          />
                          {errors.last_name && (
                            <div className="error invalid-feedback">
                              <p>{errors.last_name.message}</p>
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="form-group ">
                        <label
                          htmlFor="email"
                          className="col-sm-2 col-form-label"
                        >
                          Email
                        </label>
                        <div className="col-sm-12">
                          <input
                            type="email"
                            disabled
                            className={`form-control ${
                              errors.email ? "is-invalid" : ""
                            }`}
                            id="email"
                            placeholder="Email"
                            {...register("email", {
                              required: "Please enter the Email",
                            })}
                          />
                          {errors.email && (
                            <div className="invalid-feedback">
                              <p>{errors.email.message}</p>
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="form-group ">
                        <label
                          htmlFor="password"
                          className="col-sm-2 col-form-label"
                        >
                          Password
                        </label>
                        <div className="col-sm-12">
                          <input
                            type="password"
                            autoComplete="new-password"
                            className={`form-control ${
                              errors.password ? "is-invalid" : ""
                            }`}
                            id="password"
                            placeholder="Password"
                            {...register("password", {
                              minLength: {
                                value: 6,
                                message: "Please enter at least 6 chars",
                              },
                            })}
                          />
                          {errors.password && (
                            <div className="error invalid-feedback">
                              <p>{errors.password.message}</p>
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="form-group ">
                        <label
                          htmlFor="role"
                          className="col-sm-2 col-form-label"
                        >
                          Role
                        </label>
                        <div className="col-sm-12">
                          <select
                            className={`form-control ${
                              errors.role ? "is-invalid" : ""
                            }`}
                            id="role"
                            {...register("role", {
                              required: "Please check the Role",
                            })}
                          >
                            <option value="" hidden>
                              Select Role
                            </option>
                            <option value="1">Super Admin</option>
                            <option value="2">Manager</option>
                            <option value="3">Content</option>
                            <option value="4">Sales</option>
                          </select>
                          {errors.role && (
                            <div className="invalid-feedback">
                              <p>{errors.role.message}</p>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="card-footer">
                      <Link href="/admin/user">
                        <button type="button" className="btn btn-default">
                          Cancel
                        </button>
                      </Link>
                      <button
                        type="submit"
                        className="btn btn-info float-right"
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
