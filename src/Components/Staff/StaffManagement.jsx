import React from 'react'
import { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import avatar1 from "../../assets/img/avatars/7.png"


const validationSchema = Yup.object().shape({
  ProfilePicture: Yup.string().required('Profile Picture is required'),
  FullName: Yup.string().required('Full Name is required'),
  DateOfBirth: Yup.date().required('Date of Birth is required'),
  Gender: Yup.string().required('Gender is required'),
  PhoneNumber: Yup.string().required('Phone Number is required'),
  EmailAddress: Yup.string().email('Invalid Email').required('Email Address is required'),
  AadharNumber: Yup.string().required('Aadhar Number is required'),
  AadharCard: Yup.string().required('Aadhar Card is required'),
  Address: Yup.string().required('Address is required'),
  DisabilityStatus: Yup.string().required('Disability Status is required'),
  EmployeeID: Yup.string().required('Employee ID is required'),
  Designation: Yup.string().required('Designation is required'),
  Profession: Yup.string().required('Profession is required'),
  Subject: Yup.string().required('Subject is required'),
  Experience: Yup.string().required('Experience is required'),
  DateOfJoining: Yup.date().required('Date of Joining is required'),
  TeacherDescription: Yup.string().required('Teacher Description is required'),
  Qualifications: Yup.string().required('Qualifications are required'),
  DegreeCertificate: Yup.string().required('Degree Certificate is required'),
  SalaryPackage: Yup.string().required('Salary Package is required'),
  NetSalary: Yup.string().required('Net Salary is required'),
  UANNumber: Yup.string().required('UAN Number is required'),
  AccountHolderName: Yup.string().required('Account Holder Name is required'),
  AccountNumber: Yup.string().required('Account Number is required'),
  IFSCCode: Yup.string().required('IFSC Code is required'),
  BankBranchName: Yup.string().required('Bank Branch Name is required'),
  BankPassbook: Yup.string().required('Bank Passbook is required')
});

function StaffManagement() {

  const [step, setStep] = useState(1); // Step tracker

  const handleNext = () => setStep((prev) => prev + 1);
  const handlePrevious = () => setStep((prev) => prev - 1);

  const initialValues = {
    ProfilePicture: "",
    FullName: "",
    DateOfBirth: "",
    Gender: "",
    PhoneNumber: "",
    EmailAddress: "",
    AadharNumber: "",
    AadharCard: "",
    Address: "",
    DisabilityStatus: "",
    EmployeeID: "",
    Designation: "",
    Profession: "",
    Subject: "",
    Experience: "",
    DateOfJoining: "",
    TeacherDescription: "",
    Qualifications: "",
    DegreeCertificate: "",
    SalaryPackage: "",
    NetSalary: "",
    UANNumber: "",
    AccountHolderName: "",
    AccountNumber: "",
    IFSCCode: "",
    BankBranchName: "",
    BankPassbook: ""
  }

  const handleSubmit = (values) => {
    console.log('Form Data:', values);
  };
  return (
    <div>
      <div className="layout-wrapper layout-content-navbar">
        <div className="layout-container">
          <div className="layout-page">
            <div className="content-wrapper">
              <div className="container-fluid container-p-y">
                <h4 className="fw-bold py-3 mb-4"><span className="text-muted fw-light">Dashboard /</span> Staff Management</h4>
                <div className="row">
                  <div className="col-md-3 col-sm-6 mb-4">
                    <div className="card bg-primary">
                      <div className="card-body">
                        <h2 className="card-title mb-2 text-white">10</h2>
                        <p className="text-white fw-semibold">Total Teachers</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-6 mb-4">
                    <div className="card bg-success">
                      <div className="card-body">
                        <h2 className="card-title mb-2 text-white">5</h2>
                        <p className="text-white fw-semibold">Present Today</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-6 mb-4">
                    <div className="card bg-danger">
                      <div className="card-body">
                        <h2 className="card-title mb-2 text-white">3</h2>
                        <p className="text-white fw-semibold">Absent Today</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-6 mb-4">
                    <div className="card bg-info">
                      <div className="card-body">
                        <h2 className="card-title mb-2 text-white">2</h2>
                        <p className="text-white fw-semibold">Leave Today</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card mb-4">
                  <div className="card-body">
                    <div className="row">
                      <div className="col">
                        <p style={{ direction: 'rtl', cursor: 'pointer' }} className='btn w-100 mb-0 btn-danger' data-bs-toggle="modal" data-bs-target="#modalCenter0">Add New Staff &nbsp;<i className='bx bx-message-square-add me-1' ></i></p>
                      </div>
                      {/* Add new Acountant */}
                      <div className="modal fade" id="modalCenter0" tabIndex="-1" aria-hidden="true">
                        <div className="modal-dialog modal-dialog-centered manage-xl" role="document">
                          <div className="modal-content">
                            <div className="modal-header">
                              <h5 className="modal-title" id="modalCenterTitle">Demo School</h5>
                              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                              <div className="nav-align-top mb-4">
                                <h1 className='px-2 py-3' style={{ color: '#fff', fontSize: '25px', backgroundColor: '#8e8d8dfe' }}><i className="fa fa-plus-circle" aria-hidden="true"></i> Add Staff</h1>
                                <div className="table-responsive text-nowrap" style={{ border: 'none' }}>
                                  <Formik initialValues={initialValues} onSubmit={handleSubmit}>
                                    {({ values, errors, touched }) => (
                                      <Form className="border p-4 shadow rounded bg-white">
                                        {/* Step 1: Personal Details */}
                                        {step === 1 && (
                                          <div>
                                            <h4 className="mb-4">Personal Details</h4>
                                            <div className="row">
                                              <div className="col-md-6 mb-3">
                                                <label>Profile Picture</label>
                                                <Field name="ProfilePicture" type="file" className="form-control" />
                                              </div>
                                              <div className="col-md-6 mb-3">
                                                <label>Full Name</label>
                                                <Field name="FullName" type="text" placeholder="Enter your full name" className="form-control" />
                                              </div>
                                            </div>
                                            <div className="row">
                                              <div className="col-md-6 mb-3">
                                                <label>Date of Birth</label>
                                                <Field name="DateOfBirth" type="date" className="form-control" />
                                              </div>
                                              <div className="col-md-6 mb-3">
                                                <label>Gender</label>
                                                <Field as="select" name="Gender" className="form-control">
                                                  <option value="">Select Gender</option>
                                                  <option value="Male">Male</option>
                                                  <option value="Female">Female</option>
                                                </Field>
                                              </div>
                                            </div>
                                            <div className="row">
                                              <div className="col-md-6 mb-3">
                                                <label>Phone Number</label>
                                                <Field name="PhoneNumber" type="tel" placeholder="Enter your phone number" className="form-control" />
                                              </div>
                                              <div className="col-md-6 mb-3">
                                                <label>Email Address</label>
                                                <Field name="EmailAddress" type="email" placeholder="Enter your email" className="form-control" />
                                              </div>
                                            </div>
                                            <div className="row">
                                              <div className="col-md-6 mb-3">
                                                <label>Aadhar Card Number</label>
                                                <Field name="AadharNumber" type="text" placeholder="Enter your Aadhar card number" className="form-control" />
                                              </div>
                                              <div className="col-md-6 mb-3">
                                                <label>Upload Aadhar Card (Front/Back)</label>
                                                <Field name="AadharCard" type="file" className="form-control" />
                                              </div>
                                            </div>
                                            <div className="row">
                                              <div className="col-md-6">
                                                <label>Address</label>
                                                <Field name="Address" type="text" placeholder="Enter your address" className="form-control" />
                                              </div>
                                              <div className="col-md-6 mb-3">
                                                <label>Disability Status</label>
                                                <Field name="DisabilityStatus" type="text" placeholder="Enter disability status" className="form-control" />
                                              </div>
                                            </div>
                                          </div>
                                        )}

                                        {/* Step 2: Professional Details */}
                                        {step === 2 && (
                                          <div>
                                            <h4 className="mb-4">Professional Details</h4>
                                            <div className="row">
                                              <div className="col-md-6 mb-3">
                                                <label>Employee ID</label>
                                                <Field name="EmployeeID" type="text" placeholder="Enter your Employee ID" className="form-control" />
                                              </div>
                                              <div className="col-md-6 mb-3">
                                                <label>Designation</label>
                                                <Field name="Designation" type="text" placeholder="Enter your designation" className="form-control" />
                                              </div>
                                            </div>
                                            <div className="row">
                                              <div className="col-md-6 mb-3">
                                                <label>Profession</label>
                                                <Field name="Profession" type="text" placeholder="Enter your profession" className="form-control" />
                                              </div>
                                              <div className="col-md-6 mb-3">
                                                <label>Subject</label>
                                                <Field name="Subject" type="text" placeholder="Enter your subject" className="form-control" />
                                              </div>
                                            </div>
                                            <div className="row">
                                              <div className="col-md-6 mb-3">
                                                <label>Experience</label>
                                                <Field name="Experience" type="text" placeholder="Enter your experience" className="form-control" />
                                              </div>
                                              <div className="col-md-6 mb-3">
                                                <label>Date of Joining</label>
                                                <Field name="DateOfJoining" type="date" className="form-control" />
                                              </div>
                                            </div>
                                            <div className="mb-3">
                                              <label>Teacher Description</label>
                                              <Field name="TeacherDescription" as="textarea" placeholder="Enter a brief description" className="form-control" />
                                            </div>
                                          </div>
                                        )}

                                        {/* Step 3: Job and Bank Details */}
                                        {step === 3 && (
                                          <div>
                                            <h4 className="mb-4">Job and Bank Details</h4>
                                            <div className="row">
                                              <div className="col-md-6 mb-3">
                                                <label>Qualifications</label>
                                                <Field name="Qualifications" type="text" placeholder="Enter your qualifications" className="form-control" />
                                              </div>
                                              <div className="col-md-6 mb-3">
                                                <label>Degree Certificate</label>
                                                <Field name="DegreeCertificate" type="file" className="form-control" />
                                              </div>
                                            </div>
                                            <div className="row">
                                              <div className="col-md-6 mb-3">
                                                <label>Salary Package (Annual / Monthly)</label>
                                                <Field name="SalaryPackage" type="text" placeholder="Enter salary package" className="form-control" />
                                              </div>
                                              <div className="col-md-6 mb-3">
                                                <label>Net Salary</label>
                                                <Field name="NetSalary" type="text" placeholder="Enter net salary" className="form-control" />
                                              </div>
                                            </div>
                                            <div className="row">
                                              <div className="col-md-12  mb-3">
                                                <label>PF UAN Number</label>
                                                <Field name="UANNumber" type="text" placeholder="Enter UAN number" className="form-control" />
                                              </div>

                                            </div>
                                            <div className="row">
                                              <div className="col-md-6 mb-3">
                                                <label>Bank Account Holder Name</label>
                                                <Field name="AccountHolderName" type="text" placeholder="Enter account holder name" className="form-control" />
                                              </div>
                                              <div className="col-md-6 mb-3">
                                                <label>Bank Account Number</label>
                                                <Field name="AccountNumber" type="text" placeholder="Enter account number" className="form-control" />
                                              </div>
                                            </div>
                                            <div className="row">
                                              <div className="col-md-6 mb-3">
                                                <label>IFSC Code</label>
                                                <Field name="IFSCCode" type="text" placeholder="Enter IFSC code" className="form-control" />
                                              </div>
                                              <div className="col-md-6 mb-3">
                                                <label>Bank Branch Name</label>
                                                <Field name="BankBranchName" type="text" placeholder="Enter bank branch name" className="form-control" />
                                              </div>
                                            </div>
                                            <div className="mb-3">
                                              <label>Upload Bank Passbook</label>
                                              <Field name="BankPassbook" type="file" className="form-control" />
                                            </div>
                                          </div>
                                        )}

                                        <div className="d-flex justify-content-between mt-4">
                                          {step > 1 && (
                                            <button type="button" className="btn btn-outline-secondary" onClick={handlePrevious}>
                                              Previous
                                            </button>
                                          )}
                                          {step < 3 ? (
                                            <button type="button" className="btn btn-primary" onClick={(e) =>{e.preventDefault(); handleNext()}}>
                                              Next
                                            </button>
                                          ) : (
                                            <button type="submit" className="btn btn-success">
                                              Submit
                                            </button>
                                          )}
                                        </div>
                                      </Form>
                                    )}
                                  </Formik>

                                </div>

                              </div>
                              <div className='text-end'>
                                <button className='btn btn-secondary ' data-bs-dismiss="modal" aria-label="Close">Close</button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col">
                        <button type="button" className="btn btn-success w-100">
                          <i className="bx bx-pie-chart-alt me-1"></i> Teachers Performance Report
                        </button>
                      </div>
                      <div className="col">
                        <button type="button" className="btn btn-danger w-100">
                          <i className="bx bx-pie-chart-alt me-1"></i> Staff Attendance Overview
                        </button>
                      </div>
                      <div className="col">
                        <button type="button" className="btn btn-info w-100">
                          <i className="bx bx-money me-1"></i> Staff Salary Overview
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="card mb-4">
                  <div className="card-body">
                    <div className="row">
                      <div className="col">
                        <div className="input-group input-group-merge">
                          <span className="input-group-text"><i className="bx bx-search"></i></span>
                          <input type="text" className="form-control" placeholder="Search..." />
                        </div>
                      </div>
                      <div className="col">
                        <select className="form-select">
                          <option selected="">Open this select menu</option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </select>
                      </div>
                      <div className="col-auto">
                        <div className="btn-group">
                          <button type="button" className="btn btn-secondary">
                            <i className="tf-icons bx bx-pencil me-1"></i>
                            Edit All
                          </button>
                          <button type="button" className="btn btn-danger">
                            <i className='tf-icons bx bx-trash me-1'></i>
                            Delete All
                          </button>
                          <button type="button" className="btn btn-success">
                            <i className='tf-icons bx bxs-file me-1'></i>
                            Excel
                          </button>
                          <button type="button" className="btn btn-warning">
                            <i className='tf-icons bx bxs-file-doc me-1'></i>
                            CSV
                          </button>
                          <button type="button" className="btn btn-danger">
                            <i className='tf-icons bx bxs-file-pdf me-1'></i>
                            PDF
                          </button>
                          <button type="button" className="btn btn-info">
                            <i className='tf-icons bx bxs-printer me-1'></i>
                            Print
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <h5 className="card-header">Staff Information</h5>
                  <div className="table-responsive text-nowrap">
                    <table className="table table-striped">
                      <thead>
                        <tr>
                          <th>Emp ID</th>
                          <th>Name</th>
                          <th>Designation</th>
                          <th>Email</th>
                          <th>Phone Number</th>
                          <th>Reprts</th>
                          <th>Password</th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <tbody className="table-border-bottom-0">
                        <tr>
                          <td>096654</td>
                          <td>
                            <span className="d-flex align-items-center fw-bold">
                              <span className="me-2">
                                <img src={avatar1} alt="Avatar" className="rounded-circle border border-light" style={{ height: "50px" }} />
                              </span>
                              Ankush Sharma
                            </span>
                          </td>
                          <td>Teacher</td>
                          <td>staff@gmail.com</td>
                          <td>9876543210</td>
                          <td>
                            <div className="btn-group" id="dropdown-icon-demo">
                              <button type="button" className="btn btn-info dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                Certificate & Reports
                              </button>
                              <ul className="dropdown-menu">
                                <li>
                                  <a href="javascript:void(0);" className="dropdown-item"> Experience Certificate</a>
                                </li>
                                <li>
                                  <a href="javascript:void(0);" className="dropdown-item">Salary Report</a>
                                </li>
                                <li>
                                  <a href="javascript:void(0);" className="dropdown-item">Performance Report</a>
                                </li>
                                <li>
                                  <a href="javascript:void(0);" className="dropdown-item">Attendance Report</a>
                                </li>
                                <li>
                                  <a href="javascript:void(0);" className="dropdown-item">ID Card Generate</a>
                                </li>
                              </ul>
                            </div>
                          </td>
                          <td>
                            <a className="btn btn-warning" href="javascript:void(0);">
                              <i className="bx bxs-key me-1"></i>
                              Reset Password
                            </a>
                          </td>
                          <td>
                            <a className="btn btn-success btn-icon rounded-pill me-1" href="javascript:void(0);"><i className="bx bx-edit"></i></a>
                            <a className="btn btn-danger btn-icon rounded-pill" href="javascript:void(0);"><i className="bx bx-trash"></i></a>
                          </td>
                        </tr>
                        <tr>
                          <td>096654</td>
                          <td>
                            <span className="d-flex align-items-center fw-bold">
                              <span className="me-2">
                                <img src={avatar1} alt="Avatar" className="rounded-circle border border-light" style={{ height: "50px" }} />
                              </span>
                              Ankush Sharma
                            </span>
                          </td>
                          <td>Teacher</td>
                          <td>staff@gmail.com</td>
                          <td>9876543210</td>
                          <td>
                            <div className="btn-group" id="dropdown-icon-demo">
                              <button type="button" className="btn btn-info dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                Certificate & Reports
                              </button>
                              <ul className="dropdown-menu">
                                <li>
                                  <a href="javascript:void(0);" className="dropdown-item"> Experience Certificate</a>
                                </li>
                                <li>
                                  <a href="javascript:void(0);" className="dropdown-item">Salary Report</a>
                                </li>
                                <li>
                                  <a href="javascript:void(0);" className="dropdown-item">Performance Report</a>
                                </li>
                                <li>
                                  <a href="javascript:void(0);" className="dropdown-item">Attendance Report</a>
                                </li>
                                <li>
                                  <a href="javascript:void(0);" className="dropdown-item">ID Card Generate</a>
                                </li>
                              </ul>
                            </div>
                          </td>
                          <td>
                            <a className="btn btn-warning" href="javascript:void(0);">
                              <i className="bx bxs-key me-1"></i>
                              Reset Password
                            </a>
                          </td>
                          <td>
                            <a className="btn btn-success btn-icon rounded-pill me-1" href="javascript:void(0);"><i className="bx bx-edit"></i></a>
                            <a className="btn btn-danger btn-icon rounded-pill" href="javascript:void(0);"><i className="bx bx-trash"></i></a>
                          </td>
                        </tr>
                      </tbody>
                      <tfoot>
                        <tr>
                          <td colspan="8">
                            <nav aria-label="Page navigation">
                              <ul className="pagination my-2">
                                <li className="page-item prev">
                                  <a className="page-link" href="javascript:void(0);"><i className="tf-icon bx bx-chevrons-left"></i></a>
                                </li>
                                <li className="page-item active">
                                  <a className="page-link" href="javascript:void(0);">1</a>
                                </li>
                                <li className="page-item">
                                  <a className="page-link" href="javascript:void(0);">2</a>
                                </li>
                                <li className="page-item">
                                  <a className="page-link" href="javascript:void(0);">3</a>
                                </li>
                                <li className="page-item next">
                                  <a className="page-link" href="javascript:void(0);"><i className="tf-icon bx bx-chevrons-right"></i></a>
                                </li>
                              </ul>
                            </nav>
                          </td>
                        </tr>
                      </tfoot>
                    </table>
                  </div>
                </div>
              </div>
              <div className="content-backdrop fade"></div>
            </div>
          </div>
        </div>
        <div className="layout-overlay layout-menu-toggle"></div>
      </div>
    </div>
  )
}

export default StaffManagement
