import React, { useContext } from "react";
import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { MainContext } from "../Controller/MainProvider";
const AddClass = () => {
    // Validation schema using Yup
    const validationSchema = Yup.object({
        courseName: Yup.string().required("Course Name is required"),
        courseCode: Yup.string().required("Course Code is required"),
        courseDescription: Yup.string().required("Course Description is required"),
        courseBoard: Yup.string().required("Course Board/University is required"),
        courseSection: Yup.array()
            .of(Yup.string())
            .min(1, "At least one section must be selected"),
        courseDepartment: Yup.string().required("Course Department is required"),
        courseSemester: Yup.number().required("Course Semester is required"),
        courseYear: Yup.number()
            .typeError("Course Year must be a number")
            .required("Course Year is required"),

    });

    const { instituteID } = useContext(MainContext);
    // Initial form values
    const initialValues = {
        instituteId: instituteID,
        courseName: "",
        courseCode: "",
        courseDescription: "",
        courseBoard: "",
        courseSection: [],
        courseDepartment: "",
        courseSemester: "",
        courseYear: "",

    };

    // Handle form submission
    const handleSubmit = async (values, { resetForm }) => {
        try {
            // Format the data to match backend requirements
            const formattedValues = {
                ...values,
                courseCompleted: values.courseCompleted === "true",
            };

            const response = await axios.post(
                "http://localhost:5500/api/courses/post",
                formattedValues
            );
            console.log("Success:", response.data);
            alert("Form submitted successfully!");

            // reset the form
            resetForm();
        } catch (error) {
            if (error.response) {
                console.error("Server Error:", error.response.data);
                alert(error.response.data.message || "Submission failed.");
            } else {
                console.error("Unknown Error:", error.message);
            }
        }
    };

    return (
        <div className="container">
            <div className="m-5 border rounded shadow p-5">
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                >
                    {({ setFieldValue }) => (
                        <Form>
                            <h2 className="form-header">Add Course</h2>
                            <div className="row">
                                <div className="col-6 mt-3">
                                    <label htmlFor="courseName">Course Name</label>
                                    <Field
                                        type="text"
                                        className="form-control"
                                        name="courseName"
                                        placeholder="Enter Course Name"
                                    />
                                    <ErrorMessage
                                        name="courseName"
                                        component="div"
                                        className="error fs-6"
                                    />
                                </div>

                                <div className="col-6 mt-3">
                                    <label htmlFor="courseCode">Course Code</label>
                                    <Field
                                        type="text"
                                        className="form-control"
                                        name="courseCode"
                                        placeholder="Enter Course Code"
                                    />
                                    <ErrorMessage
                                        name="courseCode"
                                        component="div"
                                        className="error fs-6"
                                    />
                                </div>

                                <div className="col-6 mt-3">
                                    <label htmlFor="courseDescription">Course Description</label>
                                    <Field
                                        type="text"
                                        className="form-control"
                                        name="courseDescription"
                                        placeholder="Enter Course Description"
                                    />
                                    <ErrorMessage
                                        name="courseDescription"
                                        component="div"
                                        className="error fs-6"
                                    />
                                </div>



                                <div className="col-6 mt-3">
                                    <label htmlFor="courseBoard">Course Board</label>
                                    <Field
                                        type="text"
                                        className="form-control"
                                        name="courseBoard"
                                        placeholder="Enter Course Board"
                                    />
                                    <ErrorMessage
                                        name="courseBoard"
                                        component="div"
                                        className="error fs-6"
                                    />
                                </div>

                                <div className="col-6 mt-3">
                                    <label htmlFor="courseDepartment">Course Department</label>
                                    <Field
                                        type="text"
                                        className="form-control"
                                        name="courseDepartment"
                                        placeholder="Enter Course Department"
                                    />
                                    <ErrorMessage
                                        name="courseDepartment"
                                        component="div"
                                        className="error fs-6"
                                    />
                                </div>

                                <div className="col-6 mt-3">
                                    <label htmlFor="courseSemester">Course Semester</label>
                                    <Field
                                        type="number"
                                        className="form-control"
                                        name="courseSemester"
                                        placeholder="Enter Course Semester"
                                    />
                                    <ErrorMessage
                                        name="courseSemester"
                                        component="div"
                                        className="error fs-6"
                                    />
                                </div>

                                <div className="col-6 mt-3">
                                    <label htmlFor="courseYear">Course Year</label>
                                    <Field
                                        type="number"
                                        className="form-control"
                                        name="courseYear"
                                        placeholder="Enter Course Year"
                                    />
                                    <ErrorMessage
                                        name="courseYear"
                                        component="div"
                                        className="error fs-6"
                                    />
                                </div>

                                <div className="col-6 mt-4" style={{ color: "black" }}>
                                    <span className="me-2">Course Section</span>
                                    <div className="btn-group" data-bs-toggle="buttons">
                                        {["A", "B", "C", "D"].map((sectionName, index) => (
                                            <>
                                                <div key={index}>

                                                    <label
                                                        key={sectionName}
                                                        className="ms-2"
                                                    >
                                                        <Field
                                                            type="checkbox"
                                                            name="courseSection"
                                                            value={sectionName}
                                                            className="ms-2"

                                                        />
                                                    </label>
                                                    <span className="ms-1">{sectionName}</span>
                                                </div>
                                            </>
                                        ))}
                                    </div>
                                    <ErrorMessage
                                        name="courseSection"
                                        component="div"
                                        className="error ms-2 fs-6"
                                    />
                                </div>

                            </div>

                            <div className="mt-4">
                                <button type="submit" className="btn btn-primary w-50">Submit</button>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    );
};

export default AddClass;
