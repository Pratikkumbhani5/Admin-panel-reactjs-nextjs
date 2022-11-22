import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Header from "../components/Header";
import Menu from "../components/Menu";
import Footer from "../components/Footer";
import axios from "axios";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSession } from "next-auth/react";

const notify = () =>
  toast.success("User Added Successfully", {
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

const AddUser = () => {
  const nav = useRouter();
  const { data } = useSession();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (userData, event) => {
    event.preventDefault();
    console.log(userData);
    await axios
      .post(`${process.env.NEXT_PUBLIC_NEXT_API}/admin/adduser`, userData, {
        headers: {
          Authorization: `Bearer ${data.user.token}`,
        },
      })
      .then((res) => {
        console.log(res);
        notify();
        nav.push("/users");
      })
      .catch((error) => {
        console.log(error);
        notifyEmail(error.response.data.message);
      });
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
                <h1>Create New User</h1>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item">
                    <Link href="/dashboard">Home</Link>
                  </li>
                  <li className="breadcrumb-item active">New User</li>
                </ol>
              </div>
            </div>
          </div>
        </section>
        <section className="content">
          <div className="container-fluid">
            <div className="row  justify-content-center">
              <div className="col-md-6">
                <div className="card">
                  <div className="card-header">
                    <h3 className="card-title">Create New User</h3>
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
                          <select
                            className={`form-control ${
                              errors.title ? "is-invalid" : ""
                            }`}
                            {...register("title", {
                              required: "Please check the Title",
                            })}
                          >
                            <option value="" hidden>
                              Select Title
                            </option>
                            <option value="Mr">Mr</option>
                            <option value="Mrs">Mrs</option>
                          </select>
                          {errors.title && (
                            <div className="invalid-feedback">
                              <p>{errors.title.message}</p>
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="form-group ">
                        <label
                          htmlFor="firstName"
                          className="col-sm-2 col-form-label"
                        >
                          First Name
                        </label>
                        <div className="col-sm-12">
                          <input
                            type="text"
                            className={`form-control ${
                              errors.firstName ? "is-invalid" : ""
                            }`}
                            id="firstName"
                            placeholder="First Name"
                            {...register("firstName", {
                              required: "Please enter the First Name",
                            })}
                          />
                          {errors.firstName && (
                            <div className="error invalid-feedback">
                              <p>{errors.firstName.message}</p>
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="form-group ">
                        <label
                          htmlFor="lastName"
                          className="col-sm-2 col-form-label"
                        >
                          Last Name
                        </label>
                        <div className="col-sm-12">
                          <input
                            type="text"
                            className={`form-control ${
                              errors.lastName ? "is-invalid" : ""
                            }`}
                            id="lastName"
                            placeholder="Last Name"
                            {...register("lastName", {
                              required: "Please check the Last Name",
                            })}
                          />
                          {errors.lastName && (
                            <div className="error invalid-feedback">
                              <p>{errors.lastName.message}</p>
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
                              required: "Please enter the Password",
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
                            <option value="SuperAdmin">Super Admin</option>
                            <option value="User">User</option>
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
                      <Link href="/users">
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

export default AddUser;
