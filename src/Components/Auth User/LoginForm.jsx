import React, { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";

const LoginForm = () => {
  const navigate = useNavigate();
  const [Message, setMessage] = useState()
  const [ResData, setResData] = useState()

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email format").required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  const handleSubmit = (values) => {
    fetch("http://localhost:5500/api/institute/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.message !== "Login successful.") {
          setMessage(data.message);
        } else {
          setMessage("Login successful.");
          // Save token and instituteID in sessionStorage
          sessionStorage.setItem("token", data.savedLoggedDetails.token);
          sessionStorage.setItem("instituteID", data.savedLoggedDetails.instituteID);
          navigate("/");
          window.location.reload();
        }
      })
      .catch((error) => console.error("Error:", error));
  };

  console.log(ResData);


  return (
    <section className="h-100" style={{ backgroundColor: "#9A616D" }}>
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col col-xl-10">
            <div className="card" style={{ borderRadius: "1rem" }}>
              <div className="row g-0">
                <div className="col-md-6 col-lg-5 d-none d-md-block">
                  <img
                    src="https://m.economictimes.com/thumb/msid-88607879,width-1200,height-1400,resizemode-4,imgsize-55812/education.jpg"
                    alt="login form"
                    className="img-fluid"
                    style={{ borderRadius: "1rem 0 0 1rem" }}
                  />
                </div>
                <div className="col-md-6 col-lg-7 d-flex align-items-center">
                  <div className="card-body p-4 p-lg-5 text-black">
                    <Formik
                      initialValues={{ email: "", password: "" }}
                      validationSchema={validationSchema}
                      onSubmit={handleSubmit}
                    >
                      {({ isSubmitting, status }) => (
                        <Form>
                          <div className="d-flex align-items-center mb-3 pb-1">
                            <i
                              className="fas fa-cubes fa-2x me-3"
                              style={{ color: "#ff6219" }}
                            ></i>
                            <span className="h1 fw-bold mb-0">Logo</span>
                          </div>

                          <h5
                            className="fw-normal mb-3 pb-3"
                            style={{ letterSpacing: "1px" }}
                          >
                            Sign into your account
                          </h5>

                          <div className="form-outline mb-4">
                            <Field
                              type="email"
                              name="email"
                              placeholder="Enter Email Address"
                              className="form-control form-control-lg"
                            />
                            <ErrorMessage
                              name="email"
                              component="h6"
                              className="text-danger ms-2 mt-2"
                            />
                          </div>

                          <div className="form-outline mb-4">
                            <Field
                              type="password"
                              name="password"
                              placeholder="Enter Password"
                              className="form-control form-control-lg"
                            />
                            <ErrorMessage
                              name="password"
                              component="h6"
                              className="text-danger ms-2 mt-2"
                            />
                          </div>
                          <h6 className={` ms-2 ${Message === "Login successful." ? "text-success" : "text-danger"}`}>{Message}</h6>
                          <div className="pt-1 mb-4">
                            <button
                              className="btn btn-primary btn-lg w-100 btn-lg btn-block"
                              type="submit"
                            >
                              Login Now
                            </button>
                          </div>

                          <a className="text-muted" href="#!">
                            Forgot password?
                          </a>
                          <p
                            className="mb-5 pb-lg-2 mt-2"
                            style={{ color: "#393f81" }}
                          >
                            Don't have an account?{" "}
                            <Link to="/instituteregister" style={{ color: "#393f81" }}>
                              Register here
                            </Link>
                          </p>
                        </Form>
                      )}
                    </Formik>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginForm;
