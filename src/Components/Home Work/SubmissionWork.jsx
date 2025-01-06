import React from 'react'

const SubmissionWork = () => {
    const [filterData, setFilterData] = useState(null)


    const AllData = [
        {
            id: "HW1783925",
            class: "II",
            section: "C",
            subject: "Biology",
            homeworkDate: "14 May 2024",
            submissionDate: "16 May 2024",
            student: { name: "Lisa", img: "assets/img/students/student-05.jpg" },
        },
        {
            id: "HW1783924",
            class: "III",
            section: "A",
            subject: "Higher Math",
            homeworkDate: "15 May 2024",
            submissionDate: "17 May 2024",
            student: { name: "Ralph", img: "assets/img/students/student-06.jpg" },
        },
        {
            id: "HW1783923",
            class: "III",
            section: "B",
            subject: "Information Technology",
            homeworkDate: "16 May 2024",
            submissionDate: "18 May 2024",
            student: { name: "Julie", img: "assets/img/students/student-07.jpg" },
        },
        {
            id: "HW1783922",
            class: "IV",
            section: "A",
            subject: "Moral Education",
            homeworkDate: "17 May 2024",
            submissionDate: "19 May 2024",
            student: { name: "Ryan", img: "assets/img/students/student-08.jpg" },
        },
        {
            id: "HW1783921",
            class: "IV",
            section: "B",
            subject: "Finance",
            homeworkDate: "18 May 2024",
            submissionDate: "20 May 2024",
            student: { name: "Susan", img: "assets/img/students/student-09.jpg" },
        },
        {
            id: "HW1783920",
            class: "V",
            section: "A",
            subject: "Economics",
            homeworkDate: "19 May 2024",
            submissionDate: "21 May 2024",
            student: { name: "Richard", img: "assets/img/students/student-12.jpg" },
        },
    ]
    return (
        <>
            {/* Page Wrapper */}
            <div className="page-wrapper container pt-5">
                <div className="content">
                    {/* Page Header */}
                    <div className="d-md-flex d-block align-items-center justify-content-between mb-3">
                        <div className="my-auto mb-2">
                            <h3 className="page-title mb-1">Class Work</h3>
                            <nav>
                                <ol className="breadcrumb mb-0">
                                    <li className="breadcrumb-item">
                                        <a href="index.html">Dashboard</a>
                                    </li>
                                    <li className="breadcrumb-item">
                                        <a href="javascript:void(0);">Academic </a>
                                    </li>
                                    <li className="breadcrumb-item active" aria-current="page">
                                        Class Work
                                    </li>
                                </ol>
                            </nav>
                        </div>
                        <div className="d-flex my-xl-auto right-content align-items-center flex-wrap">
                            <div className="pe-1 mb-2">
                                <a
                                    href="index.htm#"
                                    className="btn btn-outline-light bg-white btn-icon me-1"
                                    data-bs-toggle="tooltip"
                                    data-bs-placement="top"
                                    aria-label="Refresh"
                                    data-bs-original-title="Refresh"
                                >
                                    <i className="ti ti-refresh" />
                                </a>
                            </div>
                            <div className="pe-1 mb-2">
                                <button
                                    type="button"
                                    className="btn btn-outline-light bg-white btn-icon me-1"
                                    data-bs-toggle="tooltip"
                                    data-bs-placement="top"
                                    aria-label="Print"
                                    data-bs-original-title="Print"
                                >
                                    <i className="ti ti-printer" />
                                </button>
                            </div>
                            <div className="dropdown me-2 mb-2">
                                <a
                                    href="javascript:void(0);"
                                    className="dropdown-toggle btn btn-light fw-medium d-inline-flex align-items-center"
                                    data-bs-toggle="dropdown"
                                >
                                    <i className="ti ti-file-export me-2" />
                                    Export
                                </a>
                                <ul className="dropdown-menu  dropdown-menu-end p-3">
                                    <li>
                                        <a
                                            href="javascript:void(0);"
                                            className="dropdown-item rounded-1"
                                        >
                                            <i className="ti ti-file-type-pdf me-1" />
                                            Export as PDF
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="javascript:void(0);"
                                            className="dropdown-item rounded-1"
                                        >
                                            <i className="ti ti-file-type-xls me-1" />
                                            Export as Excel{" "}
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="mb-2">
                                <a
                                    href="index.htm#"
                                    className="btn btn-primary"
                                    data-bs-toggle="modal"
                                    data-bs-target="#add_home_work"
                                >
                                    <i className="ti ti-square-rounded-plus-filled me-2" />
                                    Add Home Work
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* /Page Header */}
                    {/* Guardians List */}
                    <div className="card">
                        <div className="card-header d-flex align-items-center justify-content-between flex-wrap pb-0">
                            <h4 className="mb-3">Class Home Work</h4>
                            <div className="d-flex align-items-center flex-wrap">
                                <div className="input-icon-start mb-3 me-2 position-relative">
                                    <span className="icon-addon">
                                        <i className="ti ti-calendar" />
                                    </span>
                                    <input
                                        type="text"
                                        className="form-control date-range bookingrange"
                                        placeholder="Select"
                                        defaultValue="Academic Year : 2024 / 2025"
                                    />
                                </div>
                                <div className="dropdown mb-3 me-2">
                                    <a
                                        href="javascript:void(0);"
                                        className="btn border dropdown-toggle"
                                        data-bs-toggle="dropdown"
                                        data-bs-auto-close="outside"
                                    >
                                        <i className="ti ti-filter me-2" />
                                        Filter
                                    </a>
                                    <div className="dropdown-menu drop-width">
                                        <Formik
                                            initialValues={{
                                                subject: '',
                                                class: '',
                                                section: '',
                                                date: '',
                                            }}
                                            onSubmit={(values) => {
                                                // setSubmitting(true);
                                                const filterData = AllData.filter((item) => {
                                                    return (
                                                        (!values.subject || item.subject === values.subject) &&
                                                        (!values.class || item.class === values.class) &&
                                                        (!values.section || item.section === values.section) &&
                                                        (!values.date || item.date === values.date)
                                                    );
                                                });
                                                setFilterData(filterData);
                                            }}
                                        >
                                            {({ }) => (
                                                <Form className="p-3">
                                                    <div className="d-flex align-items-center border-bottom p-3">
                                                        <h4>Filter</h4>
                                                    </div>
                                                    <div className="p-3 border-bottom pb-0">
                                                        <div className="row">
                                                            <div className="col-md-12">
                                                                <div className="mb-3">
                                                                    <label className="form-label">Subject</label>
                                                                    <Field component="select" className="form-select" name="subject">
                                                                        <option>Select</option>
                                                                        <option>English</option>
                                                                        <option>Maths</option>
                                                                        <option>Physics</option>
                                                                    </Field>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-12">
                                                                <div className="mb-3">
                                                                    <label className="form-label">Class</label>
                                                                    <Field component="select" className="form-select" name="class">
                                                                        <option>Select</option>
                                                                        <option>I</option>
                                                                        <option>II</option>
                                                                        <option>III</option>
                                                                    </Field>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-12">
                                                                <div className="mb-3">
                                                                    <label className="form-label">Section</label>
                                                                    <Field component="select" className="form-select" name="section">
                                                                        <option>Select</option>
                                                                        <option>A</option>
                                                                        <option>B</option>
                                                                        <option>C</option>
                                                                    </Field>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-12">
                                                                <div className="mb-3">
                                                                    <label className="form-label">Date</label>
                                                                    <Field type="date" className="form-control" name="date" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="p-3 d-flex align-items-center justify-content-end">
                                                        <button type="reset" className="btn btn-light me-3">
                                                            Reset
                                                        </button>
                                                        <button type="submit" className="btn btn-primary">
                                                            Apply
                                                        </button>
                                                    </div>
                                                </Form>
                                            )}
                                        </Formik>
                                    </div>
                                </div>
                                <div className="dropdown mb-3">
                                    <a
                                        href="javascript:void(0);"
                                        className="btn border dropdown-toggle"
                                        data-bs-toggle="dropdown"
                                    >
                                        <i className="ti ti-sort-ascending-2 me-2" />
                                        Sort by A-Z
                                    </a>
                                    <ul className="dropdown-menu p-3">
                                        <li>
                                            <a
                                                href="javascript:void(0);"
                                                className="dropdown-item rounded-1 active"
                                            >
                                                Ascending
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="javascript:void(0);"
                                                className="dropdown-item rounded-1"
                                            >
                                                Descending
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="javascript:void(0);"
                                                className="dropdown-item rounded-1"
                                            >
                                                Recently Viewed
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="javascript:void(0);"
                                                className="dropdown-item rounded-1"
                                            >
                                                Recently Added
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="card-body p-0 py-3">
                            {/* Guardians List */}
                            <div className="custom-datatable-filter table-responsive">
                                <table className="table datatable">
                                    <thead className="thead-light">
                                        <tr>
                                            <th className="no-sort">
                                                <div className="form-check form-check-md">
                                                    <input
                                                        className="form-check-input"
                                                        type="checkbox"
                                                        id="select-all"
                                                    />
                                                </div>
                                            </th>
                                            <th>ID</th>
                                            <th>Class</th>
                                            <th>Section</th>
                                            <th>Subject</th>
                                            <th>Homework Date</th>
                                            <th>Submission Date</th>
                                            <th>Created By</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {(filterData || AllData).map((item, index) => (
                                            <tr key={index} className="border-bottom border-gray-200">
                                                <td className="">
                                                    <div className="form-check form-check-md">
                                                        <input className="form-check-input" type="checkbox" />
                                                    </div>
                                                </td>
                                                <td className="">
                                                    <a href="index.htm#" className="link-primary">
                                                        {item.id}
                                                    </a>
                                                </td>
                                                <td className="">{item.class}</td>
                                                <td className="">{item.section}</td>
                                                <td className="">{item.subject}</td>
                                                <td className="">{item.homeworkDate}</td>
                                                <td className="">{item.submissionDate}</td>
                                                <td className="">
                                                    <div className="d-flex align-items-center">
                                                        <a href="index.htm#" className="avatar avatar-md">
                                                            <img
                                                                src={item.student.img}
                                                                className="img-fluid rounded-circle"
                                                                alt="img"
                                                            />
                                                        </a>
                                                        <div className="ms-2">
                                                            <p className="text-dark mb-0">
                                                                <a href="index.htm#">{item.student.name}</a>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="">
                                                    <div className="d-flex align-items-center">
                                                        <div className="dropdown">
                                                            <a
                                                                href="index.htm#"
                                                                className="btn btn-white btn-icon btn-sm d-flex align-items-center justify-content-center rounded-circle p-0"
                                                                data-bs-toggle="dropdown"
                                                                aria-expanded="false"
                                                            >
                                                                <i class="fa fa-ellipsis-v fs-6" aria-hidden="true"></i>
                                                            </a>
                                                            <ul className="dropdown-menu dropdown-menu-right p-3">
                                                                <li>
                                                                    <a
                                                                        className="dropdown-item rounded-1"
                                                                        href="index.htm#"
                                                                        data-bs-toggle="modal"
                                                                        data-bs-target="#edit_home_work"
                                                                    >
                                                                        <i className="ti ti-edit-circle me-2" />
                                                                        Edit
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        className="dropdown-item rounded-1"
                                                                        href="index.htm#"
                                                                        data-bs-toggle="modal"
                                                                        data-bs-target="#delete-modal"
                                                                    >
                                                                        <i className="ti ti-trash-x me-2" />
                                                                        Delete
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        className="dropdown-item rounded-1"
                                                                        href="index.htm#"
                                                                        data-bs-toggle="modal"
                                                                        data-bs-target="#delete-modal"
                                                                    >
                                                                        <i className="ti ti-trash-x me-2" />
                                                                        View Detail
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            {/* /Guardians List */}
                        </div>
                    </div>
                    {/* /Guardians List */}
                </div>
            </div>
            {/* /Page Wrapper */}
            {/* Add Home Work */}
            <div className="modal fade" id="add_home_work">
                <div className="modal-dialog modal-dialog-centered modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title">Add Home Work</h4>
                            <button
                                type="button"
                                className="btn-close custom-btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            >
                                <i className="ti ti-x" />
                            </button>
                        </div>
                        <form action="class-home-work.html">
                            <div className="modal-body">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="mb-3">
                                            <label className="form-label">Class</label>
                                            <select className="form-select">
                                                <option value="">Select</option>
                                                <option value="X">X</option>
                                                <option value="XI">XI</option>
                                                <option value="XII">XII</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="mb-3">
                                            <label className="form-label">Section</label>
                                            <select className="form-select">
                                                <option value="">Select</option>
                                                <option value="A">A</option>
                                                <option value="B">B</option>
                                                <option value="C">C</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="mb-3">
                                            <label className="form-label">Subject</label>
                                            <select className="form-select">
                                                <option value="">Select</option>
                                                <option value="English">English</option>
                                                <option value="Physics">Physics</option>
                                                <option value="Chemistry">Chemistry</option>
                                                <option value="Biology">Biology</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="mb-3">
                                            <label className="form-label">Homework Date</label>
                                            <input type="date" className="form-control" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="mb-3">
                                            <label className="form-label">Submission Date</label>
                                            <input type="date" className="form-control" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="mb-3">
                                            <label className="form-label">Attachments</label>
                                            <input type="file" className="form-control" />
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Description</label>
                                    <textarea
                                        className="form-control"
                                        rows={3}
                                        defaultValue={""}
                                    />
                                </div>
                            </div>
                            <div className="modal-footer">
                                <a
                                    href="index.htm#"
                                    className="btn btn-light me-2"
                                    data-bs-dismiss="modal"
                                >
                                    Cancel
                                </a>
                                <button type="submit" className="btn btn-primary">
                                    Add Homework
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            {/* /Add Home Work */}
            {/* Edit Home Work */}
            <div className="modal fade" id="edit_home_work">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title">Edit Home Work</h4>
                            <button
                                type="button"
                                className="btn-close custom-btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            >
                                <i className="ti ti-x" />
                            </button>
                        </div>
                        <form action="class-home-work.html">
                            <div className="modal-body">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="mb-3">
                                            <label className="form-label">Class</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Enter Class"
                                                defaultValue="I"
                                            />
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="mb-3">
                                                    <label className="form-label">Section</label>
                                                    <select className="select">
                                                        <option>Select</option>
                                                        <option selected="">A</option>
                                                        <option>B</option>
                                                        <option>C</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="mb-3">
                                                    <label className="form-label">Subject</label>
                                                    <select className="select">
                                                        <option>Select</option>
                                                        <option selected="">English</option>
                                                        <option>Physics</option>
                                                        <option>Chemsitry</option>
                                                        <option>Biology</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="mb-3">
                                                    <label className="form-label">Homework Date</label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        placeholder="10 May 2024"
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="mb-3">
                                                    <label className="form-label">Submission Date</label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        placeholder="12 May 2024"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label">Attachments</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Placeholders"
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label">Attachments</label>
                                            <textarea
                                                className="form-control"
                                                placeholder="Add Comment"
                                                rows={4}
                                                defaultValue={""}
                                            />
                                        </div>
                                        <div className="d-flex align-items-center justify-content-between">
                                            <div className="status-title">
                                                <h5>Status</h5>
                                                <p>Change the Status by toggle </p>
                                            </div>
                                            <div className="form-check form-switch">
                                                <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    role="switch"
                                                    id="switch-sm2"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <a
                                    href="index.htm#"
                                    className="btn btn-light me-2"
                                    data-bs-dismiss="modal"
                                >
                                    Cancel
                                </a>
                                <button type="submit" className="btn btn-primary">
                                    Save Changes
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            {/* /Edit Home Work */}
            {/* Delete Modal */}
            <div className="modal fade" id="delete-modal">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <form action="class-home-work.html">
                            <div className="modal-body text-center">
                                <span className="delete-icon">
                                    <i className="ti ti-trash-x" />
                                </span>
                                <h4>Confirm Deletion</h4>
                                <p>
                                    You want to delete all the marked items, this cant be undone once
                                    you delete.
                                </p>
                                <div className="d-flex justify-content-center">
                                    <a
                                        href="javascript:void(0);"
                                        className="btn btn-light me-3"
                                        data-bs-dismiss="modal"
                                    >
                                        Cancel
                                    </a>
                                    <button type="submit" className="btn btn-danger">
                                        Yes, Delete
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            {/* /Delete Modal */}

        </>
    )
}

export default SubmissionWork
