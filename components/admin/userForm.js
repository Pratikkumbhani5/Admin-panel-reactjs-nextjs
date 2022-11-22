import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import axios from "axios";
import { useForm } from "react-hook-form";
import Header from "../Header";
import Menu from "../Menu";
import Footer from "../Footer";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSession } from "next-auth/react";

const notify = () =>
  toast.success("User Updated Successfully", {
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
  // const { id } = useParams();

  const router = useRouter();

  const { data } = useSession();
  const { id } = router.query;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: preLoadedValues });

  const onSubmit = (userData) => {
    console.log(userData);
    axios
      .put(`${process.env.NEXT_PUBLIC_NEXT_API}/admin/user/${id}`, userData, {
        headers: {
          Authorization: `Bearer ${data.user.token}`,
        },
      })
      .then((res) => {
        console.log(res);
        notify();
        router.push("/users");
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
                <h1>Edit User Information</h1>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item">
                    <Link href="/dashboard">Home</Link>
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
              <div className="col-md-6">
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
                            <option value="SuperAdmin">Super Admin</option>
                            <option value="User">User</option>
                          </select>
                          <div className="invalid-feedback">
                            {errors.role && (
                              <div className="invalid-feedback">
                                <p>{errors.role.message}</p>
                              </div>
                            )}
                          </div>
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
      {/* <div className="content-wrapper">
        <div className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1 className="m-0 text-dark">User Add</h1>
              </div>
            </div>
            <div className="row justify-content-center ">
              <div className="col-md-6">
                <form
                  className="form-horizontal"
                  onSubmit={handleSubmit(onSubmit)}
                >
                  <div className="card-body">
                    <div className="form-group row">
                      <label
                        htmlFor="title"
                        className="col-sm-2 col-form-label"
                      >
                        Title
                      </label>
                      <div className="col-sm-4">
                        <select
                          name="title"
                          className={`form-control ${
                            errors.title ? "is-invalid" : ""
                          }`}
                          // value={title}
                          {...register("title", { required: true })}
                        >
                          <option hidden value="">
                            Select Category
                          </option>
                          <option value="Mr">Mr</option>
                          <option value="Mrs">Mrs</option>
                        </select>
                        <div className="invalid-feedback">
                          {errors.title && <p>Please check the Title</p>}
                        </div>
                      </div>
                    </div>
                    <div className="form-group row">
                      <label
                        htmlFor="firstName"
                        className="col-sm-2 col-form-label"
                      >
                        First Name
                      </label>
                      <div className="col-sm-10">
                        <input
                          // defaultValue={firstName}
                          type="text"
                          className={`form-control ${
                            errors.firstName ? "is-invalid" : ""
                          }`}
                          id="firstName"
                          name="firstName"
                          placeholder="First Name"
                          {...register("firstName", { required: true })}
                        />
                        <div className="invalid-feedback">
                          {errors.firstName && (
                            <p>Please check the First Name</p>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="form-group row">
                      <label
                        htmlFor="lastName"
                        className="col-sm-2 col-form-label"
                      >
                        Last Name
                      </label>
                      <div className="col-sm-10">
                        <input
                          // defaultValue={lastName}
                          name="lastName"
                          autoComplete="off"
                          type="text"
                          className={`form-control ${
                            errors.lastName ? "is-invalid" : ""
                          }`}
                          id="lastName"
                          placeholder="Last Name"
                          {...register("lastName", { required: true })}
                        />
                        <div className="invalid-feedback">
                          {errors.lastName && <p>Please check the Last Name</p>}
                        </div>
                      </div>
                    </div>
                    <div className="form-group row">
                      <label
                        htmlFor="email"
                        className="col-sm-2 col-form-label"
                      >
                        Email
                      </label>
                      <div className="col-sm-10">
                        <input
                          // defaultValue={email}
                          disabled
                          name="email"
                          type="email"
                          className={`form-control ${
                            errors.email ? "is-invalid" : ""
                          }`}
                          id="email"
                          placeholder="Email"
                          {...register("email", { required: true })}
                        />
                        <div className="invalid-feedback">
                          {errors.email && <p>Please check the Email</p>}
                        </div>
                      </div>
                    </div>
                    <div className="form-group row">
                      <label
                        htmlFor="password"
                        className="col-sm-2 col-form-label"
                      >
                        Password
                      </label>
                      <div className="col-sm-10">
                        <input
                          autoComplete="off"
                          type="password"
                          className={`form-control  ${
                            errors.password ? "is-invalid" : ""
                          }`}
                          id="password"
                          placeholder="Password"
                          {...register("password", {
                            minLength: 6,
                          })}
                        />
                        <div className="error invalid-feedback">
                          {errors.password && (
                            <p>Please enter minimum 6 character password</p>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="form-group row">
                      <label htmlFor="role" className="col-sm-2 col-form-label">
                        Role
                      </label>
                      <div className="col-sm-10">
                        <select
                          name="role"
                          className={`form-control ${
                            errors.role ? "is-invalid" : ""
                          }`}
                          id="role"
                          // defaultValue={role}
                          {...register("role", { required: true })}
                        >
                          <option value="" hidden>
                            Select Role
                          </option>
                          <option value="SuperAdmin">Super Admin</option>
                          <option value="User">User</option>
                        </select>
                        <div className="invalid-feedback">
                          {errors.role && <p>Please check the Role</p>}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="card-footer">
                    <Link to="/users">
                      <button type="button" className="btn btn-default ">
                        Cancel
                      </button>
                    </Link>
                    <button type="submit" className="btn btn-info float-right">
                      Save
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};
