import React, { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import CryptoJS from "crypto-js";

const LoginForm = () => {
  const navigate = useNavigate();
  const [Message, setMessage] = useState();
  const [Success, setSuccess] = useState()
  const SECRET_KEY = "brigatech&letskillify";

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email format").required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
    designation: Yup.string().required("Please select a user type"), 
  });

  const handleSubmit = async (values) => {

    try {
      const res = await axios.post("http://localhost:5500/login", values);

      if (res.status === 200) {
        const { token, userId, designation, message, success } = res.data;

        // Ensure SECRET_KEY is valid
        console.log("SECRET_KEY:", SECRET_KEY);

        // Encrypt and store data in sessionStorage
        sessionStorage.setItem(
          "token",
          CryptoJS.AES.encrypt(token || "", SECRET_KEY).toString()
        );
        sessionStorage.setItem(
          "userId",
          CryptoJS.AES.encrypt(userId || "", SECRET_KEY).toString()
        );
        sessionStorage.setItem(
          "designation",
          CryptoJS.AES.encrypt(designation || "", SECRET_KEY).toString()
        );
        sessionStorage.setItem(
          "Islogin",
          CryptoJS.AES.encrypt(String(success) || "", SECRET_KEY).toString()
        );

        setMessage(message);
        setSuccess(success)
        window.location.reload();
        navigate("/", {
          state: { userId, designation, token },
        });
      }
    } catch (err) {
      console.error(err);
      setMessage(err?.response?.data?.message || "An error occurred");
    }
  };


  return (
    <section className="h-100" style={{ backgroundColor: "#9A616D" }}>
      <div className="container py-5">
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col col-xl-10">
            <div className="card" style={{ borderRadius: "1rem" }}>
              <div className="row d-flex justify-content-center align-items-center g-0">
                <div className="col-md-6 col-lg-5 d-md-block ">
                  <img
                    src="https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-83.jpg?t=st=1736500280~exp=1736503880~hmac=27583bc02cd98c8530105f634b1f720a0bc13296274b73692df18f339793d9b2&w=740"
                    alt="login form"
                    className="img-fluid"
                    style={{ borderRadius: "1rem 0 0 1rem", objectFit: "cover" }}
                  />
                </div>
                <div className="col-md-6 col-lg-7 d-flex align-items-center">
                  <div className="card-body p-4 p-lg-5 text-black">
                    <Formik
                      initialValues={{ email: "", password: "", designation: "" }}
                      validationSchema={validationSchema}
                      onSubmit={handleSubmit}
                    >
                      {({ isSubmitting, status }) => (
                        <Form>
                          <h4 className="fw-bold mb-4 text-center">Sign into your account</h4>
                          <hr />
                          <div className="form-outline mb-4 mt-5">
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
                              as="select"
                              name="designation"
                              className="form-control form-control-lg"
                            >
                              <option value="" className="text-muted" disabled>
                                Select User Type
                              </option>
                              <option value="Student">Student</option>
                              <option value="Staff">Staff</option>
                              <option value="Institute">Institute</option>
                            </Field>
                            <ErrorMessage
                              name="designation"
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



                          <h6
                            className={`ms-2 ${Success ? "text-success" : "text-danger"
                              }`}
                          >
                            {Message}
                          </h6>

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
