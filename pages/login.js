import React, { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { signIn } from "next-auth/react";
import { useForm } from "react-hook-form";
import { useSession } from "next-auth/react";

const Login = () => {
  const { status, data } = useSession();
  const navigate = useRouter();

  if (status === "authenticated") {
    navigate.push("/dashboard");
  }

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const LoginHandler = async (data, e) => {
    console.log(data);
    e.preventDefault();
    // axios
    //   .post(`${process.env.NEXT_PUBLIC_API_URL}/admin/login`, {
    //     email,
    //     password,
    //   })
    //   .then((res) => {
    //     console.log(res);
    //     localStorage.setItem("role", res.data.role);
    //     localStorage.setItem("token", res.data.token);
    //     localStorage.setItem("userId", res.data.userId);
    //     navigate.push("/dashboard");
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //     setError(true);
    //   });

    const status = await signIn("credentials", {
      email: data.email,
      password: data.password,
      redirect: false,
      callbackUrl: "/dashboard",
    });

    console.log(status);
    if (status.ok) {
      navigate.push("/dashboard");
    }
    if (!status.ok) {
      setError(true);
    }
  };

  return (
    <div className="login-page">
      <div className="login-box">
        <div className="login-logo">
          <b>Login</b>
        </div>
        <div className="card">
          <div className="card-body login-card-body">
            <p className="login-box-msg">Good to see you again</p>
            {error ? (
              <div className="alert alert-danger">
                Username and password are invalid. Please enter correct username
                and password
              </div>
            ) : null}
            <form onSubmit={handleSubmit(LoginHandler)}>
              <div className="form-group">
                <div className="input-group mb-3">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                    id="email"
                    name="email"
                    {...register("email", {
                      required: "Please enter the email",
                    })}
                    // onChange={(e) => {
                    //   setEmail(e.target.value);
                    //   setError(false);
                    // }}
                  />
                  <div className="input-group-append">
                    <div className="input-group-text">
                      <span className="fas fa-envelope" />
                    </div>
                  </div>
                </div>
                {errors.email && (
                  <div className="error text-danger">
                    <p>{errors.email.message}</p>
                  </div>
                )}
              </div>
              <div className="form-group">
                <div className="input-group mb-3">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    id="password"
                    name="password"
                    // onChange={(e) => {
                    //   setPassword(e.target.value);
                    //   setError(false);
                    // }}
                    {...register("password", {
                      required: "Please enter the password",
                    })}
                  />
                  <div className="input-group-append">
                    <div className="input-group-text">
                      <span className="fas fa-lock" />
                    </div>
                  </div>
                </div>
                {errors.password && (
                  <div className="error text-danger">
                    <p>{errors.password.message}</p>
                  </div>
                )}
              </div>
              <div className="row">
                <div className="col-4">
                  <button
                    type="submit"
                    onClick={() => {
                      console.log("click");
                    }}
                    className="btn btn-primary btn-block"
                  >
                    Sign In
                  </button>
                </div>
              </div>
            </form>
            {/* <div className="social-auth-links text-center mb-3">
              <p>- OR -</p>
              <a href="/" className="btn btn-block btn-primary">
                <i className="fab fa-facebook mr-2" /> Sign in using Facebook
              </a>
              <a href="/" className="btn btn-block btn-danger">
                <i className="fab fa-google-plus mr-2" /> Sign in using Google+
              </a>
            </div> */}
            {/* <p className="mb-1">
              <a href="forgot-password.html">I forgot my password</a>
            </p>
            <p className="mb-0">
              <a href="register.html" className="text-center">
                Register a new membership
              </a>
            </p> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
