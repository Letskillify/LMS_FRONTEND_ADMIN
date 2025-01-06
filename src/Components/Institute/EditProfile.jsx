import { Field, Form, Formik } from 'formik';
import React, { useContext, useEffect, useState } from 'react'
import { MainContext } from '../Controller/MainProvider';


function EditProfile() {

    const { institute } = useContext(MainContext);
    console.log(institute);
    const [initialValues, setinitialValues] = useState()


    useEffect(() => {
        if (institute) {
            setinitialValues({
                name: institute?.name || '',
                contact: {
                    email: institute?.contact?.email || '',
                    mobile: institute?.contact?.mobile || '',
                    whatsapp: institute?.contact?.whatsapp || '',
                    landline: institute?.contact?.landline || '',
                    website: institute?.contact?.website || '',
                },
                address: {
                    line1: institute?.address?.line1 || '',
                    line2: institute?.address?.line2 || '',
                    city: institute?.address?.city || '',
                    state: institute?.address?.state || '',
                    country: institute?.address?.country || '',
                    postalCode: institute?.address?.postalCode || '',
                    MapLocationUrl: institute?.address?.MapLocationUrl || '',
                },
                establishedYear: institute?.establishedYear || 0,
                NoOfCoursesOffered: institute?.NoOfCoursesOffered || 0,
                NoOfStaffsEnrolled: institute?.NoOfStaffsEnrolled || 0,
                NoOfStudentsEnrolled: institute?.NoOfStudentsEnrolled || 0,
                accreditation: institute?.accreditation || 0,
                instituteType: institute?.instituteType || 0,
                aboutInstitute: institute?.aboutInstitute || 0,
                affiliationNO: institute?.affiliationNO || 0,
                affiliationYear: institute?.affiliationYear || 0,
                affiliationName: institute?.affiliationName || 0,
                disableStudentAdmission: institute?.disableStudentAdmission || false,
                acceptScholarshipAdmission: institute?.acceptScholarshipAdmission || false,
                libraryFacilities: institute?.libraryFacilities || false,
                cafeteriaFacilities: institute?.cafeteriaFacilities || false,
                hostelFacilities: institute?.hostelFacilities || false,

                AuthorizedPerson: {
                    name: institute?.name || null,
                    designation: institute?.designation || null,
                    IDproof: institute?.IDproof || null,
                    contactInfo: {
                        email: institute?.email || null,
                        mobile: institute?.mobile || null,
                        whatsapp: institute?.whatsapp || null,
                        alternateContact: institute?.alternateContact || null,
                        address: {
                            houseNo: institute?.houseNo || null,
                            streetName: institute?.streetName || null,
                            city: institute?.city || null,
                            pincode: institute?.pincode || null,
                            state: institute?.state || null,
                            country: institute?.country || null,
                        },
                        signature: institute?.signature || null,
                    },
                },
                bankDetails: {
                    accountHolderName: institute?.accountHolderName || null,
                    bankName: institute?.bankName || null,
                    branchName: institute?.branchName || null,
                    accountNumber: institute?.accountNumber || null,
                    ifscCode: institute?.ifscCode || null,
                    upiID: institute?.upiID || null,
                    panNo: institute?.panNo || null,
                },
                document: [
                    {
                        ISOcertificate: institute?.ISOcertificate || null,
                        GSTcertificate: institute?.GSTcertificate || null,
                        AffiliationCertificate: institute?.AffiliationCertificate || null,
                        PANcard: institute?.PANcard || null,
                        MSME: institute?.MSME || null,
                        TIN: institute?.TIN || null,
                        NAAC: institute?.NAAC || null,
                        UGCapprovedLetter: institute?.UGCapprovedLetter || null,
                    },
                ],
                loginPassword: institute?.loginPassword || "",

            });
        }
    }, [institute]);
    if (!initialValues) {
        return <div>Loading...</div>; // Or any placeholder if data isn't loaded yet
    }
    return (
        <>
            <div className="modal-body">
                <div className="nav-align-top mb-4">

                    <Formik initialValues={initialValues} enableReinitialize>
                        {({ values, errors, touched }) => (
                            <Form className="border p-4 shadow rounded bg-white">
                                <h2>Institute registration  </h2>
                                <div>
                                    <h4 className="mb-4">Contact :-</h4>
                                    <div className="row">
                                        <div className="col-md-4 mb-3">
                                            <label>Name <span className='text-danger'>*</span></label>
                                            <Field name="name" type="text" className="form-control" placeholder="Enter Your Name">

                                            </Field>
                                            < div className="text-danger">{errors?.name}</div>
                                        </div>
                                        <div className="col-md-4 mb-3">
                                            <label>Contact No. <span className='text-danger'>*</span></label>
                                            <Field name="contact.mobile" type="number" className="form-control" placeholder="Enter Your Mobile Number">

                                            </Field>
                                            < div className="text-danger">{errors?.contact?.mobile}</div>
                                        </div>
                                        <div className="col-md-4 mb-3">
                                            <label>Contact Email <span className='text-danger'>*</span></label>
                                            <Field name="contact.email" type="email" className="form-control" placeholder="Enter Your Mobile email">

                                            </Field>
                                            < div className="text-danger">{errors?.contact?.email}</div>
                                        </div>
                                        <div className="col-md-4 mb-3">
                                            <label>WhatsApp No. <span className='text-danger'>*</span></label>
                                            <Field name="contact.whatsapp" type="number" className="form-control" placeholder="Enter Your WhatsApp No.">

                                            </Field>
                                            < div className="text-danger">{errors?.contact?.whatsapp}</div>
                                        </div>
                                        <div className="col-md-4 mb-3">
                                            <label>Landline No. <span className='text-danger'>*</span></label>
                                            <Field name="contact.landline" type="number" className="form-control" placeholder="Enter Your Landline No.">

                                            </Field>
                                            < div className="text-danger">{errors?.contact?.landline}</div>
                                        </div>
                                        <div className="col-md-4 mb-3">
                                            <label>Website <span className='text-danger'>*</span></label>
                                            <Field name="contact.website" type="text" className="form-control" placeholder="Enter Your Website">

                                            </Field>
                                            < div className="text-danger">{errors?.contact?.website}</div>
                                        </div>
                                    </div>
                                </div>
                                {/* Adress  */}
                                <div>
                                    <h4 className="mb-4">Address :-</h4>
                                    <div className="row">
                                        <div className="col-md-4 mb-3">
                                            <label>Line1 <span className='text-danger'>*</span></label>
                                            <Field name="address.line1" type="text" className="form-control" placeholder="Enter Your Line1">

                                            </Field>
                                            < div className="text-danger">{errors?.address?.line1}</div>
                                        </div>
                                        <div className="col-md-4 mb-3">
                                            <label>Line2 <span className='text-danger'>*</span></label>
                                            <Field name="address.line2" type="text" className="form-control" placeholder="Enter Your Line2">

                                            </Field>
                                            < div className="text-danger">{errors?.address?.line2}</div>
                                        </div>
                                        <div className="col-md-4 mb-3">
                                            <label>City <span className='text-danger'>*</span></label>
                                            <Field name="address.city" type="text" className="form-control" placeholder="Enter Your City">

                                            </Field>
                                            < div className="text-danger">{errors?.address?.city}</div>
                                        </div>
                                        <div className="col-md-4 mb-3">
                                            <label>State <span className='text-danger'>*</span></label>
                                            <Field name="address.state" type="text" className="form-control" placeholder="Enter Your State">

                                            </Field>
                                            < div className="text-danger">{errors?.address?.state}</div>
                                        </div>
                                        <div className="col-md-4 mb-3">
                                            <label>Country <span className='text-danger'>*</span></label>
                                            <Field name="address.country" type="text" className="form-control" placeholder="Enter Your Country">

                                            </Field>
                                            < div className="text-danger">{errors?.address?.country}</div>
                                        </div>
                                        <div className="col-md-4 mb-3">
                                            <label>PostalCode <span className='text-danger'>*</span></label>
                                            <Field name="address.postalCode" type="number" className="form-control" placeholder="Enter Your PostalCode">

                                            </Field>
                                            < div className="text-danger">{errors?.address?.postalCode}</div>
                                        </div>
                                        <div className="col-md-4 mb-3">
                                            <label>MapLocationURL <span className='text-danger'>*</span></label>
                                            <Field name="address.city" type="url" className="form-control" placeholder="Enter Your MapLocationURL">

                                            </Field>
                                            < div className="text-danger">{errors?.address?.city}</div>
                                        </div>
                                    </div>
                                </div>
                                {/* other detail */}
                                <div>
                                    <h4 className="mb-4">Other Information :-</h4>
                                    <div className="row">
                                        <div className="col-md-4 mb-3">
                                            <label>Established Year <span className='text-danger'>*</span></label>
                                            <Field name="establishedYear" type="number" className="form-control" placeholder="Enter Your Established Year">

                                            </Field>
                                            < div className="text-danger">{errors?.establishedYear}</div>
                                        </div>
                                        <div className="col-md-4 mb-3">
                                            <label>No. Of Courses Offered <span className='text-danger'>*</span></label>
                                            <Field name="NoOfCoursesOffered" type="number" className="form-control" placeholder="Enter Your No.Of Courses Offered">

                                            </Field>
                                            < div className="text-danger">{errors?.NoOfCoursesOffered}</div>
                                        </div>
                                        <div className="col-md-4 mb-3">
                                            <label>No. Of Staffs Enrolled <span className='text-danger'>*</span></label>
                                            <Field name="NoOfStaffsEnrolled" type="number" className="form-control" placeholder="Enter Your No. Of Staffs Enrolled  ">

                                            </Field>
                                            < div className="text-danger">{errors?.NoOfStaffsEnrolled}</div>
                                        </div>
                                        <div className="col-md-4 mb-3">
                                            <label>No. Of Students Enrolled<span className='text-danger'>*</span></label>
                                            <Field name="NoOfStudentsEnrolled" type="number" className="form-control" placeholder="Enter Your No. Of Students Enrolled">

                                            </Field>
                                            < div className="text-danger">{errors?.NoOfStudentsEnrolled}</div>
                                        </div>

                                        <div className="col-md-4 mb-3 ">
                                            <label>Accreditation <span className='text-danger'>*</span></label>
                                            <Field name="accreditation" type="text" className="form-control" placeholder="Enter Your Accreditation">

                                            </Field>

                                            < div className="text-danger">{errors?.accreditation}</div>
                                        </div>
                                        <div className="col-md-4 mb-3 ">
                                            <label>Institute Type <span className='text-danger'>*</span></label>
                                            <Field name="instituteType" type="text" className="form-select" as="select" placeholder="Enter Your Institute Type">
                                                <option value="">Select</option>
                                                <option value="School">School</option>
                                                <option value="Collage">Collage</option>
                                                <option value="University">University</option>
                                                <option value="Coaching Center">Coaching Center</option>
                                            </Field>
                                            < div className="text-danger">{errors?.instituteType}</div>
                                        </div>
                                        <div className="col-md-4 mb-3 ">
                                            <label>Logo <span className='text-danger'>*</span></label>
                                            <Field name="logo" type="file" className="form-control">

                                            </Field>
                                            < div className="text-danger">{errors?.logo}</div>
                                        </div>
                                        <div className="col-md-4 mb-3">
                                            <label htmlFor="aboutInstitute" className="form-label">
                                                About Institute <span className="text-danger">*</span>
                                            </label>
                                            <Field
                                                name="comment"
                                                id="aboutInstitute"
                                                className="form-control shadow-sm rounded"
                                                rows="4"
                                                placeholder="Write about the institute here..."
                                                style={{
                                                    resize: "none",
                                                    border: "1px solid #ccc",
                                                    fontFamily: "Arial, sans-serif",
                                                    fontSize: "14px",
                                                    padding: "10px",
                                                    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
                                                }}
                                                required
                                            />
                                            < div className="text-danger">{errors?.aboutInstitute}</div>
                                        </div>
                                        <div className="col-md-4 mb-3 ">
                                            <label>Affiliation No <span className='text-danger'>*</span></label>
                                            <Field name="affiliationNo" type="text" className="form-control" placeholder="Affiliation No">

                                            </Field>
                                            < div className="text-danger">{errors?.affiliationNo}</div>
                                        </div>
                                        <div className="col-md-4 mb-3 ">
                                            <label> Affiliation Year <span className='text-danger'>*</span></label>
                                            <Field name="affiliationYear" type="text" className="form-control" placeholder="Affiliation Year">

                                            </Field>
                                            < div className="text-danger">{errors?.affiliationYear}</div>
                                        </div>
                                        <div className="col-md-4 mb-3">
                                            <label>Affiliation Name <span className='text-danger'>*</span></label>
                                            <Field name="affiliationName" type="text" className="form-control" placeholder="Affiliation Name">

                                            </Field>
                                            < div className="text-danger">{errors?.affiliationName}</div>
                                        </div>
                                        <div className='mb-3'>
                                            <div className="col-md-4">
                                                <Field
                                                    name="disableStudentAdmission"
                                                    type="checkbox"
                                                    className="form-check-input me-2"
                                                >
                                                </Field>
                                                <label>
                                                    Accept Disable Student Admission ? <span className="text-danger">*</span>
                                                </label>
                                                < div className="text-danger">{errors?.disableStudentAdmission}</div>

                                            </div>
                                            <div className="col-md-4">
                                                <Field
                                                    name="acceptScholarshipAdmission"
                                                    type="checkbox"
                                                    className="form-check-input me-2"
                                                >
                                                </Field>
                                                <label>
                                                    Accept Scholarship Admission ?  <span className="text-danger">*</span>
                                                </label>
                                                < div className="text-danger">{errors?.acceptScholarshipAdmission}</div>
                                            </div>
                                            <div className="col-md-4 ">
                                                <Field
                                                    name="libraryFacilities"
                                                    type="checkbox"
                                                    className="form-check-input me-2"
                                                >
                                                </Field>
                                                <label>
                                                    Provide Library Facilities ?  <span className="text-danger">*</span>
                                                </label>
                                                < div className="text-danger">{errors?.libraryFacilities}</div>

                                            </div>
                                            <div className="col-md-4 ">
                                                <Field
                                                    name="cafeteriaFacilities"
                                                    type="checkbox"
                                                    className="form-check-input me-2"
                                                >
                                                </Field>
                                                <label>
                                                    Provide Cafeteria Facilities ?  <span className="text-danger">*</span>
                                                </label>
                                                < div className="text-danger">{errors?.cafeteriaFacilities}</div>

                                            </div>
                                            <div className="col-md-4 ">
                                                <Field
                                                    name="hostelFacilities"
                                                    type="checkbox"
                                                    className="form-check-input me-2"
                                                >
                                                </Field>
                                                <label>
                                                    Provide Hostel Facilities ?  <span className="text-danger">*</span>
                                                </label>
                                                < div className="text-danger">{errors?.hostelFacilities}</div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Authorized person */}
                                <div>
                                    <h4 className="mb-4">Authorized Person :-</h4>
                                    <div className="row">
                                        <div className="col-md-4 mb-3">
                                            <label>Name <span className='text-danger'>*</span></label>
                                            <Field name="name" type="text" className="form-control" placeholder="Enter Your Name">

                                            </Field>
                                            < div className="text-danger">{errors?.name}</div>
                                        </div>
                                        <div className="col-md-4 mb-3">
                                            <label>Designation <span className='text-danger'>*</span></label>
                                            <Field name="designation" type="number" className="form-control" placeholder="Enter Your Designation">

                                            </Field>
                                            < div className="text-danger">{errors?.designation}</div>
                                        </div>
                                        <div className="col-md-4 mb-3">
                                            <label>ID Proof <span className='text-danger'>*</span></label>
                                            <Field name="IDproof" type="number" className="form-control" placeholder="Enter Your ID proof">

                                            </Field>
                                            < div className="text-danger">{errors?.IDproof}</div>
                                        </div>
                                        <div className="col-md-4 mb-3">
                                            <label>Email <span className='text-danger'>*</span></label>
                                            <Field name="contactInfo.email" type="email" className="form-control" placeholder="Enter Your email">

                                            </Field>
                                            < div className="text-danger">{errors?.contactInfo?.email}</div>
                                        </div>
                                        <div className="col-md-4 mb-3">
                                            <label>Mobile <span className='text-danger'>*</span></label>
                                            <Field name="contactInfo.mobile" type="number" className="form-control" placeholder="Enter Your Mobile No.">

                                            </Field>
                                            < div className="text-danger">{errors?.contactInfo?.mobile}</div>
                                        </div>
                                        <div className="col-md-4 mb-3">
                                            <label>WhatsApp No.<span className='text-danger'>*</span></label>
                                            <Field name="contactInfo.whatsapp" type="number" className="form-control" placeholder="Enter Your WhatsApp No.">

                                            </Field>
                                            < div className="text-danger">{errors?.contactInfo?.whatsapp}</div>
                                        </div>
                                        <div className="col-md-4 mb-3">
                                            <label>Alternate Contact<span className='text-danger'>*</span></label>
                                            <Field name="contactInfo.alternateContact" type="number" className="form-control" placeholder="Enter Your Alternate Contact No.">

                                            </Field>
                                            < div className="text-danger">{errors?.contactInfo?.alternateContact}</div>
                                        </div>
                                        <div className="col-md-4 mb-3">
                                            <label>House No.<span className='text-danger'>*</span></label>
                                            <Field name="address.houseNo" type="text" className="form-control" placeholder="Enter Your House No.">

                                            </Field>
                                            < div className="text-danger">{errors?.contactInfo?.houseNo}</div>
                                        </div>
                                        <div className="col-md-4 mb-3">
                                            <label>Street Name<span className='text-danger'>*</span></label>
                                            <Field name="address.streetName" type="text" className="form-control" placeholder="Enter Your Street Name">

                                            </Field>
                                            < div className="text-danger">{errors?.contactInfo?.streetName}</div>
                                        </div>
                                        <div className="col-md-4 mb-3">
                                            <label>City<span className='text-danger'>*</span></label>
                                            <Field name="address.city" type="text" className="form-control" placeholder="Enter Your city">

                                            </Field>
                                            < div className="text-danger">{errors?.contactInfo?.city}</div>
                                        </div>
                                        <div className="col-md-4 mb-3">
                                            <label>Pin code<span className='text-danger'>*</span></label>
                                            <Field name="address.pincode" type="text" className="form-control" placeholder="Enter Your Pin code">

                                            </Field>
                                            < div className="text-danger">{errors?.contactInfo?.pincode}</div>
                                        </div>
                                        <div className="col-md-4 mb-3">
                                            <label>state<span className='text-danger'>*</span></label>
                                            <Field name="address.state" type="text" className="form-control" placeholder="Enter Your State">

                                            </Field>
                                            < div className="text-danger">{errors?.contactInfo?.state}</div>
                                        </div>
                                        <div className="col-md-4 mb-3">
                                            <label>Country<span className='text-danger'>*</span></label>
                                            <Field name="address.country" type="text" className="form-control" placeholder="Enter Your Country">

                                            </Field>
                                            < div className="text-danger">{errors?.contactInfo?.country}</div>
                                        </div>
                                        <div className="col-md-4 mb-3">
                                            <label>Signature<span className='text-danger'>*</span></label>
                                            <Field name="signature" type="file" className="form-control" placeholder="Upload Your Signature">

                                            </Field>
                                            < div className="text-danger">{errors?.signature}</div>
                                        </div>
                                    </div>
                                </div>
                                {/* Bank Details */}
                                <div>
                                    <h4 className="mb-4">Bank Details :-</h4>
                                    <div className="row">
                                        <div className="col-md-4 mb-3">
                                            <label>Account Holder Name <span className='text-danger'>*</span></label>
                                            <Field name="bankDetails.accountHolderName" type="text" className="form-control" placeholder="Enter Account Holder Name">

                                            </Field>
                                            <div className="text-danger">{errors?.bankDetails?.accountHolderName}</div>
                                        </div>
                                        <div className="col-md-4 mb-3">
                                            <label>Bank Name <span className='text-danger'>*</span></label>
                                            <Field name="bankDetails.bankName" type="text" className="form-control" placeholder="Enter Bank Name">

                                            </Field>
                                            <div className="text-danger">{errors?.bankDetails?.bankName}</div>
                                        </div>
                                        <div className="col-md-4 mb-3">
                                            <label>Branch Name <span className='text-danger'>*</span></label>
                                            <Field name="bankDetails.branchName" type="text" className="form-control" placeholder="Enter Branch Name">

                                            </Field>
                                            <div className="text-danger">{errors?.bankDetails?.branchName}</div>
                                        </div>
                                        <div className="col-md-4 mb-3">
                                            <label>State <span className='text-danger'>*</span></label>
                                            <Field name="bankDetails.state" type="text" className="form-control" placeholder="Enter Your State">

                                            </Field>
                                            <div className="text-danger">{errors?.bankDetails?.state}</div>
                                        </div>
                                        <div className="col-md-4 mb-3">
                                            <label>Account Number <span className='text-danger'>*</span></label>
                                            <Field name="bankDetails.accountNumber" type="text" className="form-control" placeholder="Enter Account Number">

                                            </Field>
                                            <div className="text-danger">{errors?.bankDetails?.accountNumber}</div>

                                        </div>
                                        <div className="col-md-4 mb-3">
                                            <label>IFSC Code<span className='text-danger'>*</span></label>
                                            <Field name="bankDetails.ifscCode" type="text" className="form-control" placeholder="Enter IFSC Code">

                                            </Field>
                                            <div className="text-danger">{errors?.bankDetails?.ifscCode}</div>

                                        </div>
                                        <div className="col-md-4 mb-3">
                                            <label>UPI ID <span className='text-danger'>*</span></label>
                                            <Field name="bankDetails.upiID" type="url" className="form-control" placeholder="Enter UPI ID">

                                            </Field>
                                            <div className="text-danger">{errors?.bankDetails?.upiID}</div>

                                        </div>
                                        <div className="col-md-4 mb-3">
                                            <label>PAN No. <span className='text-danger'>*</span></label>
                                            <Field name="bankDetails.panNo" type="number" className="form-control" placeholder="Enter PAN No.">

                                            </Field>
                                            <div className="text-danger">{errors?.bankDetails?.panNo}</div>

                                        </div>
                                    </div>
                                </div>
                                {/* Document */}
                                <div>
                                    <h4 className="mb-4">Document :-</h4>
                                    <div className="row">
                                        <div className="col-md-4 mb-3">
                                            <label>ISO Certificate <span className='text-danger'>*</span></label>
                                            <Field name="document.ISOcertificate" type="text" className="form-control" placeholder="Enter ISO Certificate">

                                            </Field>
                                            <div className="text-danger">{errors?.document?.ISOcertificate}</div>
                                        </div>
                                        <div className="col-md-4 mb-3">
                                            <label>GST Certificate <span className='text-danger'>*</span></label>
                                            <Field name="document.GSTcertificate" type="text" className="form-control" placeholder="Enter GST Certificate">

                                            </Field>
                                            <div className="text-danger">{errors?.document?.GSTcertificate}</div>
                                        </div>
                                        <div className="col-md-4 mb-3">
                                            <label>Affiliation Certificate <span className='text-danger'>*</span></label>
                                            <Field name="document.AffiliationCertificate" type="text" className="form-control" placeholder="Enter Affiliation Certificate">

                                            </Field>
                                            <div className="text-danger">{errors?.document?.AffiliationCertificate}</div>
                                        </div>
                                        <div className="col-md-4 mb-3">
                                            <label>PAN Card <span className='text-danger'>*</span></label>
                                            <Field name="document.PANcard" type="text" className="form-control" placeholder="Enter PAN Card">

                                            </Field>
                                            <div className="text-danger">{errors?.document?.PANcard}</div>
                                        </div>
                                        <div className="col-md-4 mb-3">
                                            <label>MSME <span className='text-danger'>*</span></label>
                                            <Field name="document.MSME" type="text" className="form-control" placeholder="Enter MSME">

                                            </Field>
                                            <div className="text-danger">{errors?.document?.MSME}</div>
                                        </div>
                                        <div className="col-md-4 mb-3">
                                            <label>TIN <span className='text-danger'>*</span></label>
                                            <Field name="document.TIN" type="text" className="form-control" placeholder="Enter TIN">

                                            </Field>
                                            <div className="text-danger">{errors?.document?.TIN}</div>
                                        </div>
                                        <div className="col-md-4 mb-3">
                                            <label>NAAC <span className='text-danger'>*</span></label>
                                            <Field name="document.NAAC" type="text" className="form-control" placeholder="Enter NAAC">

                                            </Field>
                                            <div className="text-danger">{errors?.document?.NAAC}</div>
                                        </div>
                                        <div className="col-md-4 mb-3">
                                            <label>UG Capproved Letter <span className='text-danger'>*</span></label>
                                            <Field name="document.UGCapprovedLetter" type="text" className="form-control" placeholder="Enter UG Capproved Letter">

                                            </Field>
                                            <div className="text-danger">{errors?.document?.UGCapprovedLetter}</div>
                                        </div>

                                    </div>
                                </div>
                                <div>
                                    <h4 className="mb-4">Login ID :-</h4>
                                    <div className="row">
                                        <div className="col-md-4 mb-3">
                                            <label>Login Password <span className='text-danger'>*</span></label>
                                            <Field name="loginPassword" type="text" className="form-control" placeholder="Enter Password">

                                            </Field>
                                            <div className="text-danger">{errors?.loginPassword}</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-center mt-3">
                                    <input
                                        type="submit"
                                        className="btn btn-primary btn-lg px-4 py-2 "
                                        value="Save"
                                    />
                                </div>

                                {/* Status */}
                                {/* <div>
                                    <h4 className="mb-4">Status :-</h4>
                                    <div className="row">
                                       
                                    </div>
                                </div>
                                FeedBack
                                <div>
                                    <h4 className="mb-4">FeedBack :-</h4>
                                    <div className="row">
                                       
                                    </div>
                                </div> */}
                            </Form>

                        )}
                    </Formik>

                </div>
            </div>
        </>
    )
}

export default EditProfile