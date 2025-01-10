import axios from 'axios';
import { Formik, Form } from 'formik'
import React, { useState } from 'react'
import * as Yup from 'yup';


const validationSchema = Yup.object().shape({
    firmId: Yup.string().required('Firm ID is required'),
    name: Yup.string().required('Name is required'),
    alias: Yup.string().nullable(), // Optional
    state: Yup.string().required('State is required'),
    country: Yup.string().required('Country is required'),
    city: Yup.string().required('City is required'),
    address: Yup.string().required('Address is required'),
    phone: Yup.string()
        .matches(/^\d{10}$/, 'Phone number must be 10 digits')
        .required('Phone number is required'),
    alternatePhone: Yup.string()
        .matches(/^\d{10}$/, 'Alternate phone number must be 10 digits')
        .nullable(), // Optional
    email: Yup.string().email('Invalid email address').required('Email is required'),
    website: Yup.string()
        .url('Invalid website URL')
        .nullable(), // Optional
    contactPersons: Yup.array()
        .of(
            Yup.object().shape({
                name: Yup.string().required('Contact person name is required'),
                designation: Yup.string().nullable(), // Optional
                phone: Yup.string()
                    .matches(/^\d{10}$/, 'Phone number must be 10 digits')
                    .nullable(), // Optional
                email: Yup.string().email('Invalid email address').nullable(), // Optional
            })
        )
        .required('At least one contact person is required'),
    companyCategory: Yup.string().nullable(), // Optional
    currencyType: Yup.string().nullable(), // Optional
    aadharNumber: Yup.string()
        .matches(/^\d{12}$/, 'Aadhar number must be 12 digits')
        .nullable(), // Optional
    panNumber: Yup.string()
        .matches(/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/, 'Invalid PAN number format')
        .nullable(), // Optional
    bankDetails: Yup.array()
        .of(
            Yup.object().shape({
                accountHolderName: Yup.string().required('Account holder name is required'),
                accountNumber: Yup.string().required('Account number is required'),
                ifscCode: Yup.string().required('IFSC code is required'),
                bankName: Yup.string().required('Bank name is required'),
                branchName: Yup.string().nullable(), // Optional
            })
        )
        .required('Bank details are required'),
    businessType: Yup.string().required('Business type is required'),
    gst: Yup.object().shape({
        type: Yup.string().required('GST type is required'),
        gstPercentage: Yup.number()
            .min(0, 'GST percentage must be at least 0')
            .max(100, 'GST percentage cannot exceed 100')
            .nullable(), // Optional
        gstNumber: Yup.string().nullable(), // Optional
        firmType: Yup.string().nullable(), // Optional
    }),
    businessDetails: Yup.object().shape({
        registrationNumber: Yup.string().required('Registration number is required'),
        incorporationDate: Yup.date().required('Incorporation date is required'),
        industryType: Yup.string().nullable(), // Optional
    }),
});


function Stock() {
    const [stockApi, setstockApi] = useState()

    const [initialvalue, setinitialvalue] = useState({

        firmId: '',
        name: '',
        alias: '',
        state: '',
        country: '',
        city: '',
        address: '',
        phone: '',
        alternatePhone: '',
        email: '',
        website: '',
        contactPersons: [{ name: '', designation: '', phone: '', email: '' }],
        companyCategory: '',
        currencyType: '',
        aadharNumber: '',
        panNumber: '',
        bankDetails: [{
            accountHolderName: '',
            accountNumber: '',
            ifscCode: '',
            bankName: '',
            branchName: ''
        }],
        businessType: '',
        gst: {
            type: '',
            gstPercentage: '',
            gstNumber: '',
            firmType: ''
        },
        businessDetails: {
            registrationNumber: '',
            incorporationDate: '',
            industryType: ''
        },
    })


    const StockPostApi = async (v) => {
        try {
            const response = await axios.post('', v, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                }
            });
            if (response.status === 201) {
                alert("Data Sent Successfully")

            }

        } catch (error) {
            console.error(" Something is Error :", error)
        }
    }
    console.log();




    return (
        <>

            {/* <!-- Stock Account Buttons --> */}
            <h2 className='text-center mt-4'>Stock Account</h2>
            <div className="stockAccount text-center mt-3">
                <button className='btn btn-info m-2'>Create</button>
                <button className='btn btn-warning m-2'>Edit / Delete</button>
                <button className='btn btn-secondary m-2'>Display</button>
            </div>
            <Formik initialvalue={initialvalue} onSubmit={StockPostApi} validationSchema={validationSchema}>
                {({ errors }) => (

                    <div className="container mt-5">
                        <Form>
                            <div className="card shadow-lg  rounded">
                                <div className="card-header d-flex justify-content-between align-items-center ">
                                    <h2 className="text-dark">Account Management</h2>
                                </div>

                                <div className="card-body text-capitalize">
                                    <div className="row">
                                        {/* <!-- Personal Info Section --> */}
                                        <div class="accordion" id="accordionExample">
                                            {/* <!-- Personal Info Section --/> */}
                                            <div class="accordion-item border">
                                                <h2 class="accordion-header " id="headingPersonalInfo">
                                                    <button class="accordion-button fs-4" type="button" data-bs-toggle="collapse" data-bs-target="#collapsePersonalInfo" aria-expanded="true" aria-controls="collapsePersonalInfo">
                                                        Personal Info
                                                    </button>
                                                </h2>
                                                <div id="collapsePersonalInfo " class="accordion-collapse collapse border  m-4 rounded show" aria-labelledby="headingPersonalInfo" data-bs-parent="#accordionExample">
                                                    <div class="accordion-body">
                                                        <div class="row mb-3">
                                                            <div class="col-md-6">
                                                                <label class="col-form-label">Company Name:</label>
                                                                <input type="text" class="form-control" placeholder="Enter Name" />
                                                            </div>

                                                            <div class="col-md-6">
                                                                <label class="col-form-label">Alias:</label>
                                                                <input type="text" class="form-control" placeholder="Enter Alias" />
                                                            </div>
                                                        </div>
                                                        <div class="row mb-3">
                                                            <div class="col-md-6">
                                                                <label class="col-form-label">State:</label>
                                                                <input type="text" class="form-control" placeholder="Enter State" />
                                                            </div>
                                                            <div class="col-md-6">
                                                                <label class="col-form-label">Country:</label>
                                                                <input type="text" class="form-control" placeholder="Enter Country" />
                                                            </div>
                                                        </div>
                                                        <div class="row mb-3">
                                                            <div class="col-md-6">
                                                                <label class="col-form-label">City:</label>
                                                                <input type="text" class="form-control" placeholder="Enter City" />
                                                            </div>
                                                            <div class="col-md-6">
                                                                <label class="col-form-label">Address:</label>
                                                                <input type="text" class="form-control" placeholder="Enter Address" />
                                                            </div>
                                                        </div>
                                                        <div class="row mb-3">
                                                            <div class="col-md-6">
                                                                <label class="col-form-label">Phone No:</label>
                                                                <input type="text" class="form-control" placeholder="Enter Phone" />
                                                            </div>
                                                            <div class="col-md-6">
                                                                <label class="col-form-label">Email:</label>
                                                                <input type="email" class="form-control" placeholder="Enter Email" />
                                                            </div>
                                                        </div>
                                                        <div class="row mb-3">
                                                            <div class="col-md-6">
                                                                <label class="col-form-label">Alternate Phone No:</label>
                                                                <input type="text" class="form-control" placeholder="Enter Telephone" />
                                                            </div>
                                                            <div class="col-md-6">
                                                                <label class="col-form-label">Website:</label>
                                                                <input type="text" class="form-control" placeholder="Enter Website" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>




                                        </div>


                                        {/* <!-- Firm Info Section --> */}
                                        <div className="accordion" id="accordionExample">
                                            {/* Firm Info Section */}
                                            <div className="accordion-item border mt-3">
                                                <h2 className="accordion-header " id="headingOne">
                                                    <button className="accordion-button collapsed fs-4" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                                        Firm Info
                                                    </button>
                                                </h2>
                                                <div id="collapseOne" className="accordion-collapse collapse border rounded m-3" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                                    <div className="accordion-body">
                                                        {/* Firm Info Fields */}
                                                        <div className="row mb-3">
                                                            <div className="col-md-6">
                                                                <label className="col-form-label">Company Category:</label>
                                                                <input type="text" className="form-control" placeholder="Enter Category" />
                                                            </div>
                                                            <div className="col-md-6">
                                                                <label className="col-form-label">Currency Type:</label>
                                                                <select className="form-control">
                                                                    <option value="">Select Currency</option>
                                                                    <option value="AED">AED - United Arab Emirates Dirham</option>
                                                                    <option value="AFN">AFN - Afghan Afghani</option>
                                                                    <option value="ALL">ALL - Albanian Lek</option>
                                                                    {/* Add other options as needed */}
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div className="row mb-3">
                                                            <div className="col-md-6">
                                                                <label className="col-form-label">Adhar No:</label>
                                                                <input type="text" className="form-control" placeholder="Enter Telephone" />
                                                            </div>
                                                            <div className="col-md-6">
                                                                <label className="col-form-label">GST Type:</label>
                                                                <select className="form-control">
                                                                    <option value="">Select GST Type</option>
                                                                    <option value="regular">Regular</option>
                                                                    <option value="composition">Composition</option>
                                                                    <option value="none">None</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div className="row mb-3">
                                                            <div className="col-md-6">
                                                                <label className="col-form-label">GST No:</label>
                                                                <input type="text" className="form-control" placeholder="Enter GSTN" />
                                                            </div>
                                                            <div className="col-md-6">
                                                                <label className="col-form-label">PAN:</label>
                                                                <input type="text" className="form-control" placeholder="Enter PAN" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* <!-- Contact Person Info Section --> */}
                                            <div class="accordion-item border mt-3">
                                                <h2 class="accordion-header  " id="headingContactPersonInfo">
                                                    <button class="accordion-button collapsed fs-4" type="button" data-bs-toggle="collapse" data-bs-target="#collapseContactPersonInfo" aria-expanded="false" aria-controls="collapseContactPersonInfo">
                                                        Contact Person Info
                                                    </button>
                                                </h2>
                                                <div id="collapseContactPersonInfo" class="accordion-collapse collapse border rounded m-3" aria-labelledby="headingContactPersonInfo" data-bs-parent="#accordionExample">
                                                    <div class="accordion-body">
                                                        <div class="row mb-3">
                                                            <div class="col-md-6">
                                                                <label class="col-form-label">Contact Person Name:</label>
                                                                <input type="text" class="form-control" placeholder="Enter Name" />
                                                            </div>
                                                            <div class="col-md-6">
                                                                <label class="col-form-label">Designation:</label>
                                                                <input type="text" class="form-control" placeholder="Enter Designation" />
                                                            </div>
                                                        </div>
                                                        <div class="row mb-3">
                                                            <div class="col-md-6">
                                                                <label class="col-form-label">Phone:</label>
                                                                <input type="text" class="form-control" placeholder="Enter Phone" />
                                                            </div>
                                                            <div class="col-md-6">
                                                                <label class="col-form-label">Email:</label>
                                                                <input type="text" class="form-control" placeholder="Enter Email" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Bank Details Section */}
                                            <div className="accordion-item border mt-3">
                                                <h2 className="accordion-header " id="headingTwo">
                                                    <button className="accordion-button collapsed fs-4" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                        Bank Details
                                                    </button>
                                                </h2>
                                                <div id="collapseTwo" className="accordion-collapse collapse border rounded m-3" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                                    <div className="accordion-body">
                                                        {/* Bank Details Fields */}
                                                        <div className="row mb-3">
                                                            <div className="col-md-6">
                                                                <label className="col-form-label">Bank Account No:</label>
                                                                <input type="text" className="form-control" placeholder="Enter Bank Account" />
                                                            </div>
                                                            <div className="col-md-6">
                                                                <label className="col-form-label">IFSC No:</label>
                                                                <input type="text" className="form-control" placeholder="Enter IFSC No" />
                                                            </div>
                                                        </div>
                                                        <div className="row mb-3">
                                                            <div className="col-md-6">
                                                                <label className="col-form-label">Bank Holder Name:</label>
                                                                <input type="text" className="form-control" placeholder="Enter Bank Holder Name" />
                                                            </div>
                                                            <div className="col-md-6">
                                                                <label className="col-form-label">Bank Name:</label>
                                                                <input type="text" className="form-control" placeholder="Enter Bank Name" />
                                                            </div>
                                                        </div>
                                                        <div className="row mb-3">
                                                            <div className="col-md-6">
                                                                <label className="col-form-label">Branch Name:</label>
                                                                <input type="text" className="form-control" placeholder="Enter Branch Name" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Business Details Section */}
                                            <div className="accordion-item  border mt-3">
                                                <h2 className="accordion-header" id="headingThree">
                                                    <button className="accordion-button collapsed fs-4" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                        Business Details
                                                    </button>
                                                </h2>
                                                <div id="collapseThree" className="accordion-collapse collapse border rounded m-3" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                                    <div className="accordion-body">
                                                        {/* Business Details Fields */}
                                                        <div className="row mb-3">
                                                            <div className="col-md-6">
                                                                <label className="col-form-label">Registration Number:</label>
                                                                <input type="text" className="form-control" placeholder="Enter Registration Number" />
                                                            </div>
                                                            <div className="col-md-6">
                                                                <label className="col-form-label">Incorporation Date:</label>
                                                                <input type="date" className="form-control" />
                                                            </div>
                                                        </div>
                                                        <div className="row mb-3">
                                                            <div className="col-md-6">
                                                                <label className="col-form-label">Select Industry Type:</label>
                                                                <select className="form-control">
                                                                    <option value="">Select Industry Type</option>
                                                                    <option value="Agriculture & Farming">Agriculture & Farming</option>
                                                                    <option value="Fishing & Aquaculture">Fishing & Aquaculture</option>
                                                                    <option value="Forestry & Logging">Forestry & Logging</option>
                                                                    {/* Add other options as needed */}
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>


                                        {/* <div>
                                        <div>
                                           
                                            <div className="row mb-3">
                                                <label className="col-md-4 col-form-label">Payment Mode:</label>
                                                <div className="col-md-8">
                                                    <select
                                                        className="form-control"
                                                        value={paymentMode}
                                                        onChange={(e) => setPaymentMode(e.target.value)}
                                                    >
                                                        <option value="">Select Your Type</option>
                                                        <option value="mobile">Mobile Payment</option>
                                                        <option value="cash">Cash Payment</option>
                                                        <option value="check">Check Payment</option>
                                                        <option value="bank">Bank Transfer</option>
                                                    </select>
                                                </div>
                                            </div>


                                            {paymentMode === 'bank' && (
                                                <div>
                                                    <div className="row mb-3">
                                                        <label className="col-md-4 col-form-label">Bank Account:</label>
                                                        <div className="col-md-8">
                                                            <input type="text" className="form-control" placeholder="Enter Bank Account" />
                                                        </div>
                                                    </div>
                                                    <div className="row mb-3">
                                                        <label className="col-md-4 col-form-label">IFSC No:</label>
                                                        <div className="col-md-8">
                                                            <input type="text" className="form-control" placeholder="Enter IFSC No" />
                                                        </div>
                                                    </div>
                                                    <div className="row mb-3">
                                                        <label className="col-md-4 col-form-label">Bank Holder Name:</label>
                                                        <div className="col-md-8">
                                                            <input type="text" className="form-control" placeholder="Enter Bank Holder Name" />
                                                        </div>
                                                    </div>
                                                    <div className="row mb-3">
                                                        <label className="col-md-4 col-form-label">Bank Name:</label>
                                                        <div className="col-md-8">
                                                            <input type="text" className="form-control" placeholder="Enter Bank Name" />
                                                        </div>
                                                    </div>
                                                    <div />
                                                </div>
                                            )}

                                            {paymentMode === 'mobile' && (
                                                <div>
                                                    <div className="row mb-3">
                                                        <label className="col-md-4 col-form-label">Upi No :</label>
                                                        <div className="col-md-8">
                                                            <input type="text" className="form-control" placeholder="Enter Bank Account" />
                                                        </div>
                                                    </div>
                                                    <div className="row mb-3">
                                                        <label className="col-md-4 col-form-label">UPI ID :</label>
                                                        <div className="col-md-8">
                                                            <input type="text" className="form-control" placeholder="Enter Bank Account" />
                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                            {paymentMode === 'check' && (
                                                <div>
                                                    <div className="row mb-3">
                                                        <label className="col-md-4 col-form-label">Check NO : </label>
                                                        <div className="col-md-8">
                                                            <input type="text" className="form-control" placeholder="Enter Bank Account" />
                                                        </div>
                                                    </div>
                                                    <div className="row mb-3">
                                                        <label className="col-md-4 col-form-label">Check Date</label>
                                                        <div className="col-md-8">
                                                            <input type="date" className="form-control" placeholder="Enter Bank Account" />
                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                            
                                        </div>
                                    </div> */}

                                        {/* <!-- Buttons --> */}
                                    </div>
                                </div>
                                <div className="mt-4 mb-4 text-center">
                                    <button type="button" className="btn btn-secondary me-2">Cancel</button>
                                    <button type="submit" className="btn btn-primary">Save</button>
                                </div>
                            </div>
                        </Form >
                    </div>
                )}

            </Formik>

            {/* </div > */}

        </>
    )
}

export default Stock