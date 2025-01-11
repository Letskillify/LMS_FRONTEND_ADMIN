import React from 'react'

const Dashboard = () => {
    return (
        <>
            <>
                <div className="page-wrapper">
                    <div className="content">
                        {/* Page Header */}
                        <div className="d-md-flex d-block align-items-center justify-content-between mb-3">
                            <div className="my-auto mb-2">
                                <h3 className="page-title mb-1">Teacher Dashboard</h3>
                                <nav>
                                    <ol className="breadcrumb mb-0">
                                        <li className="breadcrumb-item">
                                            <a href="index.html">Dashboard</a>
                                        </li>
                                        <li className="breadcrumb-item active" aria-current="page">
                                            Teacher Dashboard
                                        </li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                        {/* /Page Header */}
                        {/* Greeting Section */}
                        <div className="row">
                            <div className="col-md-12 d-flex">
                                <div className="card flex-fill bg-info bg-03">
                                    <div className="card-body">
                                        <h1 className="text-white mb-1"> Good Morning Ms.Teena</h1>
                                        <p className="text-white mb-3">Have a Good day at work</p>
                                        <p className="text-light">
                                            Notice : There is a staff meeting at 9AM today, Dont forget to
                                            Attend!!!
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* /Greeting Section */}
                        {/* Teacher-Profile */}
                        <div className="row">
                            <div className="col-xxl-8 col-xl-12">
                                <div className="row">
                                    <div className="col-xxl-7 col-xl-8 d-flex">
                                        <div className="card bg-dark position-relative flex-fill">
                                            <div className="card-body pb-1">
                                                <div className="d-sm-flex align-items-center justify-content-between row-gap-3">
                                                    <div className="d-flex align-items-center overflow-hidden mb-3">
                                                        <div className="avatar avatar-xxl rounded flex-shrink-0 border border-2 border-white me-3">
                                                            <img
                                                                src="assets/img/teachers/teacher-05.jpg"
                                                                alt="Img"
                                                            />
                                                        </div>
                                                        <div className="overflow-hidden">
                                                            <span className="badge bg-transparent-primary text-primary mb-1">
                                                                #T594651
                                                            </span>
                                                            <h3 className="text-white mb-1 text-truncate">
                                                                Henriques Morgan{" "}
                                                            </h3>
                                                            <div className="d-flex align-items-center flex-wrap text-light row-gap-2">
                                                                <span className="me-2">Classes : I-A, V-B</span>
                                                                <span className="d-flex align-items-center">
                                                                    <i className="ti ti-circle-filled text-warning fs-7 me-1" />
                                                                    Physics
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <a
                                                        href="edit-teacher.html"
                                                        className="btn btn-primary flex-shrink-0 mb-3"
                                                    >
                                                        Edit Profile
                                                    </a>
                                                </div>
                                                <div className="student-card-bg">
                                                    <img src="assets/img/bg/circle-shape.png" alt="Bg" />
                                                    <img src="assets/img/bg/shape-02.png" alt="Bg" />
                                                    <img src="assets/img/bg/shape-04.png" alt="Bg" />
                                                    <img src="assets/img/bg/blue-polygon.png" alt="Bg" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xxl-5 col-xl-4 d-flex">
                                        <div className="card flex-fill">
                                            <div className="card-body">
                                                <div className="row align-items-center justify-content-between">
                                                    <div className="col-sm-5">
                                                        <div
                                                            id="plan_chart"
                                                            className="mb-3 mb-sm-0 text-center text-sm-start"
                                                        ></div>
                                                    </div>
                                                    <div className="col-sm-7">
                                                        <div className=" text-center text-sm-start">
                                                            <h4 className="mb-3">Syllabus</h4>
                                                            <p className="mb-2">
                                                                <i className="ti ti-circle-filled text-success me-1" />
                                                                Completed : <span className="fw-semibold">85%</span>
                                                            </p>
                                                            <p>
                                                                <i className="ti ti-circle-filled text-danger me-1" />
                                                                Pending :<span className="fw-semibold">10%</span>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Today's Class */}
                                <div className="card">
                                    <div className="card-header d-flex align-items-center justify-content-between">
                                        <div className="d-flex align-items-center">
                                            <h4 className="me-2">Today's Class</h4>
                                            <div className="owl-nav slide-nav2 text-end nav-control" />
                                        </div>
                                        <div className="d-inline-flex align-items-center class-datepick">
                                            <span className="icon">
                                                <i className="ti ti-chevron-left me-2" />
                                            </span>
                                            <input
                                                type="text"
                                                className="form-control datetimepicker border-0"
                                                placeholder="16 May 2024"
                                            />
                                            <span className="icon">
                                                <i className="ti ti-chevron-right" />
                                            </span>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <div className="owl-carousel owl-theme task-slider">
                                            <div className="item">
                                                <div className="bg-light-400 rounded p-3">
                                                    <span className="text-decoration-line-through badge badge-danger badge-lg mb-2">
                                                        <i className="ti ti-clock me-1" />
                                                        09:00 - 09:45
                                                    </span>
                                                    <p className="text-dark">Class V, B</p>
                                                </div>
                                            </div>
                                            <div className="item">
                                                <div className="bg-light-400 rounded p-3">
                                                    <span className="text-decoration-line-through badge badge-danger badge-lg mb-2">
                                                        <i className="ti ti-clock me-1" />
                                                        09:00 - 09:45
                                                    </span>
                                                    <p className="text-dark">Class IV, C</p>
                                                </div>
                                            </div>
                                            <div className="item">
                                                <div className="bg-light-400 rounded p-3">
                                                    <span className="badge badge-primary badge-lg mb-2">
                                                        <i className="ti ti-clock me-1" />
                                                        11:30 - 12:150
                                                    </span>
                                                    <p className="text-dark">Class V, B</p>
                                                </div>
                                            </div>
                                            <div className="item">
                                                <div className="bg-light-400 rounded p-3">
                                                    <span className="badge badge-primary badge-lg mb-2">
                                                        <i className="ti ti-clock me-1" />
                                                        01:30 - 02:15
                                                    </span>
                                                    <p className="text-dark">Class V, B</p>
                                                </div>
                                            </div>
                                            <div className="item">
                                                <div className="bg-light-400 rounded p-3">
                                                    <span className="badge badge-primary badge-lg mb-2">
                                                        <i className="ti ti-clock me-1" />
                                                        02:15 - 03:00
                                                    </span>
                                                    <p className="text-dark">Class V, B</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* /Today's Class */}
                                <div className="row">
                                    {/* Attendance */}
                                    <div className="col-xxl-6 col-xl-6 col-md-6 d-flex">
                                        <div className="card flex-fill">
                                            <div className="card-header d-flex align-items-center justify-content-between">
                                                <h4 className="card-title">Attendance</h4>
                                                <div className="card-dropdown">
                                                    <a
                                                        href="javascript:void(0);"
                                                        className="dropdown-toggle p-2"
                                                        data-bs-toggle="dropdown"
                                                    >
                                                        <i className="ti ti-calendar-due" />
                                                        This Week
                                                    </a>
                                                    <div className="dropdown-menu  dropdown-menu-end">
                                                        <ul>
                                                            <li>
                                                                <a href="javascript:void(0);">This Week</a>
                                                            </li>
                                                            <li>
                                                                <a href="javascript:void(0);">Last Week</a>
                                                            </li>
                                                            <li>
                                                                <a href="javascript:void(0);">Last Month</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card-body pb-0">
                                                <div className="bg-light-300 rounde border p-3 mb-3">
                                                    <div className="d-flex align-items-center justify-content-between flex-wrap">
                                                        <h6 className="mb-2">Last 7 Days </h6>
                                                        <p className="mb-2">14 May 2024 - 21 May 2024</p>
                                                    </div>
                                                    <div className="d-flex align-items-center gap-1 flex-wrap">
                                                        <a
                                                            href="javascript:void(0);"
                                                            className="badge badge-lg bg-success"
                                                        >
                                                            M
                                                        </a>
                                                        <a
                                                            href="javascript:void(0);"
                                                            className="badge badge-lg bg-success"
                                                        >
                                                            T
                                                        </a>
                                                        <a
                                                            href="javascript:void(0);"
                                                            className="badge badge-lg bg-success"
                                                        >
                                                            W
                                                        </a>
                                                        <a
                                                            href="javascript:void(0);"
                                                            className="badge badge-lg bg-success"
                                                        >
                                                            T
                                                        </a>
                                                        <a
                                                            href="javascript:void(0);"
                                                            className="badge badge-lg bg-danger"
                                                        >
                                                            F
                                                        </a>
                                                        <a
                                                            href="javascript:void(0);"
                                                            className="badge badge-lg bg-white border text-default"
                                                        >
                                                            S
                                                        </a>
                                                        <a
                                                            href="javascript:void(0);"
                                                            className="badge badge-lg  bg-white border text-gray-1"
                                                        >
                                                            S
                                                        </a>
                                                    </div>
                                                </div>
                                                <p className="mb-3">
                                                    <i className="ti ti-calendar-heart text-primary me-2" />
                                                    No of total working days{" "}
                                                    <span className="fw-medium text-dark"> 28 Days</span>
                                                </p>
                                                <div className="border rounded p-3">
                                                    <div className="row">
                                                        <div className="col text-center border-end">
                                                            <p className="mb-1">Present</p>
                                                            <h5>25</h5>
                                                        </div>
                                                        <div className="col text-center border-end">
                                                            <p className="mb-1">Absent</p>
                                                            <h5>2</h5>
                                                        </div>
                                                        <div className="col text-center border-end">
                                                            <p className="mb-1">Halfday</p>
                                                            <h5>0</h5>
                                                        </div>
                                                        <div className="col text-center">
                                                            <p className="mb-1">Late</p>
                                                            <h5>1</h5>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="attendance-chart text-center">
                                                    <div id="attendance_chart" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* /Attendance */}
                                    {/* Best Performers */}
                                    <div className="col-xxl-6 col-xl-6 col-md-6 d-flex flex-column">
                                        <div className="card">
                                            <div className="card-header d-flex align-items-center justify-content-between">
                                                <h4 className="card-title">Best Performers</h4>
                                                <a
                                                    href="student-list.html"
                                                    className="link-primary fw-medium"
                                                >
                                                    View All
                                                </a>
                                            </div>
                                            <div className="card-body pb-1">
                                                <div className="d-sm-flex align-items-center mb-1">
                                                    <div className="w-50 mb-2">
                                                        <h6>Class IV, C</h6>
                                                    </div>
                                                    <div className="class-progress w-100 ms-sm-3 mb-3">
                                                        <div
                                                            className="progress justify-content-between"
                                                            role="progressbar"
                                                            aria-label="Basic example"
                                                            aria-valuenow={0}
                                                            aria-valuemin={0}
                                                            aria-valuemax={100}
                                                        >
                                                            <div
                                                                className="progress-bar bg-primary"
                                                                style={{ width: "80%" }}
                                                            >
                                                                <div className="avatar-list-stacked avatar-group-xs d-flex">
                                                                    <span className="avatar avatar-rounded">
                                                                        <img
                                                                            className="border border-white"
                                                                            src="assets/img/students/student-01.jpg"
                                                                            alt="img"
                                                                        />
                                                                    </span>
                                                                    <span className="avatar avatar-rounded">
                                                                        <img
                                                                            className="border border-white"
                                                                            src="assets/img/students/student-02.jpg"
                                                                            alt="img"
                                                                        />
                                                                    </span>
                                                                    <span className="avatar avatar-rounded">
                                                                        <img
                                                                            src="assets/img/students/student-03.jpg"
                                                                            alt="img"
                                                                        />
                                                                    </span>
                                                                </div>
                                                            </div>
                                                            <span className="badge">80%</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="d-sm-flex align-items-center">
                                                    <div className="w-50 mb-2">
                                                        <h6>Class III, B</h6>
                                                    </div>
                                                    <div className="class-progress w-100 ms-sm-3 mb-3">
                                                        <div
                                                            className="progress justify-content-between"
                                                            role="progressbar"
                                                            aria-label="Basic example"
                                                            aria-valuenow={0}
                                                            aria-valuemin={0}
                                                            aria-valuemax={100}
                                                        >
                                                            <div
                                                                className="progress-bar bg-warning"
                                                                style={{ width: "54%" }}
                                                            >
                                                                <div className="avatar-list-stacked avatar-group-xs d-flex">
                                                                    <span className="avatar avatar-rounded">
                                                                        <img
                                                                            className="border border-white"
                                                                            src="assets/img/profiles/avatar-27.jpg"
                                                                            alt="img"
                                                                        />
                                                                    </span>
                                                                    <span className="avatar avatar-rounded">
                                                                        <img
                                                                            className="border border-white"
                                                                            src="assets/img/students/student-05.jpg"
                                                                            alt="img"
                                                                        />
                                                                    </span>
                                                                    <span className="avatar avatar-rounded">
                                                                        <img
                                                                            src="assets/img/students/student-06.jpg"
                                                                            alt="img"
                                                                        />
                                                                    </span>
                                                                </div>
                                                            </div>
                                                            <span className="badge">54%</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="d-sm-flex align-items-center mb-1">
                                                    <div className="w-50 mb-2">
                                                        <h6>Class V, A</h6>
                                                    </div>
                                                    <div className="class-progress w-100 ms-sm-3 mb-3">
                                                        <div
                                                            className="progress justify-content-between"
                                                            role="progressbar"
                                                            aria-label="Basic example"
                                                            aria-valuenow={0}
                                                            aria-valuemin={0}
                                                            aria-valuemax={100}
                                                        >
                                                            <div
                                                                className="progress-bar bg-skyblue"
                                                                style={{ width: "76%" }}
                                                            >
                                                                <div className="avatar-list-stacked avatar-group-xs d-flex">
                                                                    <span className="avatar avatar-rounded">
                                                                        <img
                                                                            className="border border-white"
                                                                            src="assets/img/profiles/avatar-27.jpg"
                                                                            alt="img"
                                                                        />
                                                                    </span>
                                                                    <span className="avatar avatar-rounded">
                                                                        <img
                                                                            className="border border-white"
                                                                            src="assets/img/students/student-05.jpg"
                                                                            alt="img"
                                                                        />
                                                                    </span>
                                                                    <span className="avatar avatar-rounded">
                                                                        <img
                                                                            src="assets/img/students/student-06.jpg"
                                                                            alt="img"
                                                                        />
                                                                    </span>
                                                                </div>
                                                            </div>
                                                            <span className="badge">7%</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card flex-fill">
                                            <div className="card-header d-flex align-items-center justify-content-between">
                                                <h4 className="card-title">Student Progress</h4>
                                                <div className="dropdown">
                                                    <a
                                                        href="javascript:void(0);"
                                                        className="bg-white dropdown-toggle"
                                                        data-bs-toggle="dropdown"
                                                    >
                                                        <i className="ti ti-calendar me-2" />
                                                        This Month
                                                    </a>
                                                    <ul className="dropdown-menu mt-2 p-3">
                                                        <li>
                                                            <a
                                                                href="javascript:void(0);"
                                                                className="dropdown-item rounded-1"
                                                            >
                                                                This Month
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a
                                                                href="javascript:void(0);"
                                                                className="dropdown-item rounded-1"
                                                            >
                                                                This Year
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a
                                                                href="javascript:void(0);"
                                                                className="dropdown-item rounded-1"
                                                            >
                                                                Last Week
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="card-body">
                                                <div className="d-flex align-items-center justify-content-between p-3 mb-2 border br-5">
                                                    <div className="d-flex align-items-center overflow-hidden me-2">
                                                        <a
                                                            href="javascript:void(0);"
                                                            className="avatar avatar-lg flex-shrink-0 br-6 me-2"
                                                        >
                                                            <img
                                                                src="assets/img/students/student-09.jpg"
                                                                alt="student"
                                                            />
                                                        </a>
                                                        <div className="overflow-hidden">
                                                            <h6 className="mb-1 text-truncate">
                                                                <a href="javascript:void(0);">Susan Boswell</a>
                                                            </h6>
                                                            <p>III, B</p>
                                                        </div>
                                                    </div>
                                                    <div className="d-flex align-items-center">
                                                        <img src="assets/img/icons/medal.svg" alt="icon" />
                                                        <span className="badge badge-success ms-2">98%</span>
                                                    </div>
                                                </div>
                                                <div className="d-flex align-items-center justify-content-between p-3 mb-2 border br-5">
                                                    <div className="d-flex align-items-center overflow-hidden me-2">
                                                        <a
                                                            href="javascript:void(0);"
                                                            className="avatar avatar-lg flex-shrink-0 br-6 me-2"
                                                        >
                                                            <img
                                                                src="assets/img/students/student-12.jpg"
                                                                alt="student"
                                                            />
                                                        </a>
                                                        <div className="overflow-hidden">
                                                            <h6 className="mb-1 text-truncate">
                                                                <a href="javascript:void(0);">Richard Mayes</a>
                                                            </h6>
                                                            <p>V, A</p>
                                                        </div>
                                                    </div>
                                                    <div className="d-flex align-items-center">
                                                        <img src="assets/img/icons/medal-2.svg" alt="icon" />
                                                        <span className="badge badge-success ms-2">98%</span>
                                                    </div>
                                                </div>
                                                <div className="d-flex align-items-center justify-content-between p-3 mb-0 border rounded">
                                                    <div className="d-flex align-items-center overflow-hidden me-2">
                                                        <a
                                                            href="javascript:void(0);"
                                                            className="avatar avatar-lg flex-shrink-0 br-6 me-2"
                                                        >
                                                            <img
                                                                src="assets/img/students/student-11.jpg"
                                                                alt="student"
                                                            />
                                                        </a>
                                                        <div className="overflow-hidden">
                                                            <h6 className="mb-1 text-truncate">
                                                                <a href="javascript:void(0);">Veronica Randle</a>
                                                            </h6>
                                                            <p>V, B</p>
                                                        </div>
                                                    </div>
                                                    <div className="d-flex align-items-center">
                                                        <span className="badge bg-info">78%</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* /Best Performers */}
                                </div>
                            </div>
                            {/* Schedules */}
                            <div className="col-xxl-4 col-xl-12 d-flex">
                                <div className="card flex-fill">
                                    <div className="card-header d-flex align-items-center justify-content-between">
                                        <h4 className="card-title">Schedules</h4>
                                        <a
                                            href="index.htm#"
                                            className="link-primary fw-medium me-2"
                                            data-bs-toggle="modal"
                                            data-bs-target="#add_event"
                                        >
                                            <i className="ti ti-square-plus me-1" />
                                            Add New
                                        </a>
                                    </div>
                                    <div className="card-body">
                                        <div className="datepic mb-4" />
                                        <h4 className="mb-3">Upcoming Events</h4>
                                        <div className="event-scroll">
                                            {/* Event Item */}
                                            <div className="border-start border-danger border-3 shadow-sm p-3 mb-3">
                                                <div className="d-flex align-items-center mb-3 pb-3 border-bottom">
                                                    <span className="avatar p-1 me-2 bg-danger-transparent flex-shrink-0">
                                                        <i className="ti ti-vacuum-cleaner fs-24" />
                                                    </span>
                                                    <div className="flex-fill">
                                                        <h6 className="mb-1">Vacation Meeting</h6>
                                                        <p className="d-flex align-items-center">
                                                            <i className="ti ti-calendar me-1" />
                                                            07 July 2024 - 07 July 2024
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <p className="mb-0">
                                                        <i className="ti ti-clock me-1" />
                                                        09:10 AM - 10:50 PM
                                                    </p>
                                                    <div className="avatar-list-stacked avatar-group-sm">
                                                        <span className="avatar border-0">
                                                            <img
                                                                src="assets/img/parents/parent-11.jpg"
                                                                className="rounded-circle"
                                                                alt="img"
                                                            />
                                                        </span>
                                                        <span className="avatar border-0">
                                                            <img
                                                                src="assets/img/parents/parent-13.jpg"
                                                                className="rounded-circle"
                                                                alt="img"
                                                            />
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* /Event Item */}
                                            {/* Event Item */}
                                            <div className="border-start border-skyblue border-3 shadow-sm p-3 mb-3">
                                                <div className="d-flex align-items-center mb-3 pb-3 border-bottom">
                                                    <span className="avatar p-1 me-2 bg-teal-transparent flex-shrink-0">
                                                        <i className="ti ti-user-edit text-info fs-20" />
                                                    </span>
                                                    <div className="flex-fill">
                                                        <h6 className="mb-1">Parents, Teacher Meet</h6>
                                                        <p className="d-flex align-items-center">
                                                            <i className="ti ti-calendar me-1" />
                                                            15 July 2024
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <p className="mb-0">
                                                        <i className="ti ti-clock me-1" />
                                                        09:10AM - 10:50PM
                                                    </p>
                                                    <div className="avatar-list-stacked avatar-group-sm">
                                                        <span className="avatar border-0">
                                                            <img
                                                                src="assets/img/parents/parent-01.jpg"
                                                                className="rounded-circle"
                                                                alt="img"
                                                            />
                                                        </span>
                                                        <span className="avatar border-0">
                                                            <img
                                                                src="assets/img/parents/parent-07.jpg"
                                                                className="rounded-circle"
                                                                alt="img"
                                                            />
                                                        </span>
                                                        <span className="avatar border-0">
                                                            <img
                                                                src="assets/img/parents/parent-02.jpg"
                                                                className="rounded-circle"
                                                                alt="img"
                                                            />
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* /Event Item */}
                                            {/* Event Item */}
                                            <div className="border-start border-info border-3 shadow-sm p-3 mb-3">
                                                <div className="d-flex align-items-center mb-3 pb-3 border-bottom">
                                                    <span className="avatar p-1 me-2 bg-info-transparent flex-shrink-0">
                                                        <i className="ti ti-users-group fs-20" />
                                                    </span>
                                                    <div className="flex-fill">
                                                        <h6 className="mb-1">Staff Meeting</h6>
                                                        <p className="d-flex align-items-center">
                                                            <i className="ti ti-calendar me-1" />
                                                            10 July 2024
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <p className="mb-0">
                                                        <i className="ti ti-clock me-1" />
                                                        09:10AM - 10:50PM
                                                    </p>
                                                    <div className="avatar-list-stacked avatar-group-sm">
                                                        <span className="avatar border-0">
                                                            <img
                                                                src="assets/img/parents/parent-05.jpg"
                                                                className="rounded-circle"
                                                                alt="img"
                                                            />
                                                        </span>
                                                        <span className="avatar border-0">
                                                            <img
                                                                src="assets/img/parents/parent-06.jpg"
                                                                className="rounded-circle"
                                                                alt="img"
                                                            />
                                                        </span>
                                                        <span className="avatar border-0">
                                                            <img
                                                                src="assets/img/parents/parent-07.jpg"
                                                                className="rounded-circle"
                                                                alt="img"
                                                            />
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* /Event Item */}
                                            {/* Event Item */}
                                            <div className="border-start border-secondary border-3 shadow-sm p-3 mb-0">
                                                <div className="d-flex align-items-center mb-3 pb-3 border-bottom">
                                                    <span className="avatar p-1 me-2 bg-secondary-transparent flex-shrink-0">
                                                        <i className="ti ti-campfire fs-24" />
                                                    </span>
                                                    <div className="flex-fill">
                                                        <h6 className="mb-1">Admission Camp</h6>
                                                        <p className="d-flex align-items-center">
                                                            <i className="ti ti-calendar me-1" />
                                                            12 July 2024
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <p className="mb-0">
                                                        <i className="ti ti-clock me-1" />
                                                        09:10 AM - 10:50 PM
                                                    </p>
                                                    <div className="avatar-list-stacked avatar-group-sm">
                                                        <span className="avatar border-0">
                                                            <img
                                                                src="assets/img/parents/parent-11.jpg"
                                                                className="rounded-circle"
                                                                alt="img"
                                                            />
                                                        </span>
                                                        <span className="avatar border-0">
                                                            <img
                                                                src="assets/img/parents/parent-13.jpg"
                                                                className="rounded-circle"
                                                                alt="img"
                                                            />
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* /Event Item */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* /Schedules */}
                        </div>
                        {/* Teacher-profile */}
                        {/* Syllabus */}
                        <div className="row">
                            <div className="col-md-12">
                                <div className="card">
                                    <div className="card-header d-flex align-items-center justify-content-between">
                                        <h4 className="card-title">Syllabus / Lesson Plan</h4>
                                        <a href="class-syllabus.html" className="link-primary fw-medium">
                                            View All
                                        </a>
                                    </div>
                                    <div className="card-body">
                                        <div className="owl-carousel owl-theme lesson">
                                            <div className="item">
                                                <div className="card mb-0">
                                                    <div className="card-body">
                                                        <div className="bg-success-transparent rounded p-2 fw-semibold mb-3 text-center">
                                                            Class V, B
                                                        </div>
                                                        <div className="border-bottom mb-3">
                                                            <h5 className="mb-3">
                                                                Introduction Note to Physics on Tech
                                                            </h5>
                                                            <div className="progress progress-xs mb-3">
                                                                <div
                                                                    className="progress-bar bg-success"
                                                                    role="progressbar"
                                                                    style={{ width: "80%" }}
                                                                    aria-valuenow={25}
                                                                    aria-valuemin={0}
                                                                    aria-valuemax={100}
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="d-flex align-items-center justify-content-between">
                                                            <a href="schedule-classes.html" className="fw-medium">
                                                                <i className="ti ti-edit me-1" />
                                                                Reschedule
                                                            </a>
                                                            <a href="index.htm#" className="link-primary">
                                                                <i className="ti ti-share-3 me-1" />
                                                                Share
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="item">
                                                <div className="card mb-0">
                                                    <div className="card-body">
                                                        <div className="bg-warning-transparent br-5 p-2 fw-semibold mb-3 text-center">
                                                            Class V, A
                                                        </div>
                                                        <div className="border-bottom mb-3">
                                                            <h5 className="mb-3">
                                                                Biometric &amp; their Working Functionality
                                                            </h5>
                                                            <div className="progress progress-xs mb-3">
                                                                <div
                                                                    className="progress-bar bg-warning"
                                                                    role="progressbar"
                                                                    style={{ width: "80%" }}
                                                                    aria-valuenow={25}
                                                                    aria-valuemin={0}
                                                                    aria-valuemax={100}
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="d-flex align-items-center justify-content-between">
                                                            <a href="schedule-classes.html" className="fw-medium">
                                                                <i className="ti ti-edit me-1" />
                                                                Reschedule
                                                            </a>
                                                            <a href="index.htm#" className="link-primary">
                                                                <i className="ti ti-share-3 me-1" />
                                                                Share
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="item">
                                                <div className="card mb-0">
                                                    <div className="card-body">
                                                        <div className="bg-info-transparent br-5 p-2 fw-semibold mb-3 text-center">
                                                            Class IV, C
                                                        </div>
                                                        <div className="border-bottom mb-3">
                                                            <h5 className="mb-3">
                                                                Analyze and interpret literary texts skills
                                                            </h5>
                                                            <div className="progress progress-xs mb-3">
                                                                <div
                                                                    className="progress-bar bg-info"
                                                                    role="progressbar"
                                                                    style={{ width: "80%" }}
                                                                    aria-valuenow={25}
                                                                    aria-valuemin={0}
                                                                    aria-valuemax={100}
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="d-flex align-items-center justify-content-between">
                                                            <a href="schedule-classes.html" className="fw-medium">
                                                                <i className="ti ti-edit me-1" />
                                                                Reschedule
                                                            </a>
                                                            <a href="index.htm#" className="link-primary">
                                                                <i className="ti ti-share-3 me-1" />
                                                                Share
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="item">
                                                <div className="card mb-0">
                                                    <div className="card-body">
                                                        <div className="bg-danger-transparent br-5 p-2 fw-semibold mb-3 text-center">
                                                            Class V, A
                                                        </div>
                                                        <div className="border-bottom mb-3">
                                                            <h5 className="mb-3">
                                                                Enhance vocabulary and grammar skills
                                                            </h5>
                                                            <div className="progress progress-xs mb-3">
                                                                <div
                                                                    className="progress-bar bg-danger"
                                                                    role="progressbar"
                                                                    style={{ width: "30%" }}
                                                                    aria-valuenow={25}
                                                                    aria-valuemin={0}
                                                                    aria-valuemax={100}
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="d-flex align-items-center justify-content-between">
                                                            <a href="schedule-classes.html" className="fw-medium">
                                                                <i className="ti ti-edit me-1" />
                                                                Reschedule
                                                            </a>
                                                            <a href="index.htm#" className="link-primary">
                                                                <i className="ti ti-share-3 me-1" />
                                                                Share
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="item">
                                                <div className="card mb-0">
                                                    <div className="card-body">
                                                        <div className="bg-secondary-transparent br-5 p-2 fw-semibold mb-3 text-center">
                                                            Class VII, A
                                                        </div>
                                                        <div className="border-bottom mb-3">
                                                            <h5 className="mb-3">
                                                                Atomic structure and periodic table skills
                                                            </h5>
                                                            <div className="progress progress-xs mb-3">
                                                                <div
                                                                    className="progress-bar bg-secondary"
                                                                    role="progressbar"
                                                                    style={{ width: "70%" }}
                                                                    aria-valuenow={25}
                                                                    aria-valuemin={0}
                                                                    aria-valuemax={100}
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="d-flex align-items-center justify-content-between">
                                                            <a href="schedule-classes.html" className="fw-medium">
                                                                <i className="ti ti-edit me-1" />
                                                                Reschedule
                                                            </a>
                                                            <a href="index.htm#" className="link-primary">
                                                                <i className="ti ti-share-3 me-1" />
                                                                Share
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* /Syllabus */}
                        <div className="row">
                            {/* Student Marks */}
                            <div className="col-xxl-8 col-xl-7 d-flex">
                                <div className="card flex-fill">
                                    <div className="card-header d-flex align-items-center justify-content-between flex-wrap">
                                        <h4 className="card-title">Student Marks</h4>
                                        <div className="d-flex align-items-center">
                                            <div className="dropdown me-2 ">
                                                <a
                                                    href="javascript:void(0);"
                                                    className="bg-white dropdown-toggle"
                                                    data-bs-toggle="dropdown"
                                                >
                                                    <i className="ti ti-calendar me-2" />
                                                    All Classes
                                                </a>
                                                <ul className="dropdown-menu mt-2 p-3">
                                                    <li>
                                                        <a
                                                            href="javascript:void(0);"
                                                            className="dropdown-item rounded-1"
                                                        >
                                                            I
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            href="javascript:void(0);"
                                                            className="dropdown-item rounded-1"
                                                        >
                                                            II
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            href="javascript:void(0);"
                                                            className="dropdown-item rounded-1"
                                                        >
                                                            III
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="dropdown ">
                                                <a
                                                    href="javascript:void(0);"
                                                    className="bg-white dropdown-toggle"
                                                    data-bs-toggle="dropdown"
                                                >
                                                    <i className="ti ti-calendar me-2" />
                                                    All Sections
                                                </a>
                                                <ul className="dropdown-menu mt-2 p-3">
                                                    <li>
                                                        <a
                                                            href="javascript:void(0);"
                                                            className="dropdown-item rounded-1"
                                                        >
                                                            A
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            href="javascript:void(0);"
                                                            className="dropdown-item rounded-1"
                                                        >
                                                            B
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            href="javascript:void(0);"
                                                            className="dropdown-item rounded-1"
                                                        >
                                                            C
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-body px-0">
                                        <div className="custom-datatable-filter table-responsive">
                                            <table className="table ">
                                                <thead className="thead-light">
                                                    <tr>
                                                        <th>ID</th>
                                                        <th>Name</th>
                                                        <th>Class </th>
                                                        <th>Section</th>
                                                        <th>Marks %</th>
                                                        <th>CGPA</th>
                                                        <th>Status</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>35013</td>
                                                        <td>
                                                            <div className="d-flex align-items-center">
                                                                <a
                                                                    href="student-details.html"
                                                                    className="avatar avatar-md"
                                                                >
                                                                    <img
                                                                        src="assets/img/students/student-01.jpg"
                                                                        className="img-fluid rounded-circle"
                                                                        alt="img"
                                                                    />
                                                                </a>
                                                                <div className="ms-2">
                                                                    <p className="text-dark mb-0">
                                                                        <a href="student-details.html">Janet</a>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td>III</td>
                                                        <td>A</td>
                                                        <td>89%</td>
                                                        <td>4.2</td>
                                                        <td>
                                                            <span className="badge bg-success">Pass</span>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>35013</td>
                                                        <td>
                                                            <div className="d-flex align-items-center">
                                                                <a
                                                                    href="student-details.html"
                                                                    className="avatar avatar-md"
                                                                >
                                                                    <img
                                                                        src="assets/img/students/student-02.jpg"
                                                                        className="img-fluid rounded-circle"
                                                                        alt="img"
                                                                    />
                                                                </a>
                                                                <div className="ms-2">
                                                                    <p className="text-dark mb-0">
                                                                        <a href="staff-details.html">Joann</a>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td>IV</td>
                                                        <td>B</td>
                                                        <td>88%</td>
                                                        <td>3.2</td>
                                                        <td>
                                                            <span className="badge bg-success">Pass</span>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>35011</td>
                                                        <td>
                                                            <div className="d-flex align-items-center">
                                                                <a
                                                                    href="student-details.html"
                                                                    className="avatar avatar-md"
                                                                >
                                                                    <img
                                                                        src="assets/img/students/student-03.jpg"
                                                                        className="img-fluid rounded-circle"
                                                                        alt="img"
                                                                    />
                                                                </a>
                                                                <div className="ms-2">
                                                                    <p className="text-dark mb-0">
                                                                        <a href="student-details.html">Kathleen</a>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td>II</td>
                                                        <td>A</td>
                                                        <td>69%</td>
                                                        <td>4.5</td>
                                                        <td>
                                                            <span className="badge bg-success">Pass</span>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>35010</td>
                                                        <td>
                                                            <div className="d-flex align-items-center">
                                                                <a
                                                                    href="student-details.html"
                                                                    className="avatar avatar-md"
                                                                >
                                                                    <img
                                                                        src="assets/img/students/student-04.jpg"
                                                                        className="img-fluid rounded-circle"
                                                                        alt="img"
                                                                    />
                                                                </a>
                                                                <div className="ms-2">
                                                                    <p className="text-dark mb-0">
                                                                        <a href="student-details.html">Gifford</a>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td>I</td>
                                                        <td>B</td>
                                                        <td>21%</td>
                                                        <td>4.5</td>
                                                        <td>
                                                            <span className="badge bg-success">Pass</span>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>35009</td>
                                                        <td>
                                                            <div className="d-flex align-items-center">
                                                                <a
                                                                    href="student-details.html"
                                                                    className="avatar avatar-md"
                                                                >
                                                                    <img
                                                                        src="assets/img/students/student-05.jpg"
                                                                        className="img-fluid rounded-circle"
                                                                        alt="img"
                                                                    />
                                                                </a>
                                                                <div className="ms-2">
                                                                    <p className="text-dark mb-0">
                                                                        <a href="student-details.html">Lisa</a>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td>II</td>
                                                        <td>B</td>
                                                        <td>31%</td>
                                                        <td>3.9</td>
                                                        <td>
                                                            <span className="badge bg-danger">Fail</span>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* /Student Marks */}
                            {/* Leave Status */}
                            <div className="col-xxl-4 col-xl-5 d-flex">
                                <div className="card flex-fill">
                                    <div className="card-header d-flex align-items-center justify-content-between">
                                        <h4 className="card-title">Leave Status</h4>
                                        <div className="dropdown">
                                            <a
                                                href="javascript:void(0);"
                                                className="bg-white dropdown-toggle"
                                                data-bs-toggle="dropdown"
                                            >
                                                <i className="ti ti-calendar me-2" />
                                                This Month
                                            </a>
                                            <ul className="dropdown-menu mt-2 p-3">
                                                <li>
                                                    <a
                                                        href="javascript:void(0);"
                                                        className="dropdown-item rounded-1"
                                                    >
                                                        This Month
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        href="javascript:void(0);"
                                                        className="dropdown-item rounded-1"
                                                    >
                                                        This Year
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        href="javascript:void(0);"
                                                        className="dropdown-item rounded-1"
                                                    >
                                                        Last Week
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <div className="bg-light-300 d-sm-flex align-items-center justify-content-between p-3 mb-3">
                                            <div className="d-flex align-items-center mb-2 mb-sm-0">
                                                <div className="avatar avatar-lg bg-danger-transparent flex-shrink-0 me-2">
                                                    <i className="ti ti-brand-socket-io" />
                                                </div>
                                                <div>
                                                    <h6 className="mb-1">Emergency Leave</h6>
                                                    <p>Date : 15 Jun 2024</p>
                                                </div>
                                            </div>
                                            <span className="badge bg-skyblue d-inline-flex align-items-center">
                                                <i className="ti ti-circle-filled fs-5 me-1" />
                                                Pending
                                            </span>
                                        </div>
                                        <div className="bg-light-300 d-sm-flex align-items-center justify-content-between p-3 mb-3">
                                            <div className="d-flex align-items-center mb-2 mb-sm-0">
                                                <div className="avatar avatar-lg bg-info-transparent flex-shrink-0 me-2">
                                                    <i className="ti ti-medical-cross" />
                                                </div>
                                                <div>
                                                    <h6 className="mb-1">Medical Leave</h6>
                                                    <p>Date : 15 Jun 2024</p>
                                                </div>
                                            </div>
                                            <span className="badge bg-success d-inline-flex align-items-center">
                                                <i className="ti ti-circle-filled fs-5 me-1" />
                                                Approved
                                            </span>
                                        </div>
                                        <div className="bg-light-300 d-sm-flex align-items-center justify-content-between p-3 mb-3">
                                            <div className="d-flex align-items-center mb-2 mb-sm-0">
                                                <div className="avatar avatar-lg bg-info-transparent flex-shrink-0 me-2">
                                                    <i className="ti ti-medical-cross" />
                                                </div>
                                                <div>
                                                    <h6 className="mb-1">Medical Leave</h6>
                                                    <p>Date : 16 Jun 2024</p>
                                                </div>
                                            </div>
                                            <span className="badge bg-danger d-inline-flex align-items-center">
                                                <i className="ti ti-circle-filled fs-5 me-1" />
                                                Declined
                                            </span>
                                        </div>
                                        <div className="bg-light-300 d-sm-flex align-items-center justify-content-between p-3">
                                            <div className="d-flex align-items-center mb-2 mb-sm-0">
                                                <div className="avatar avatar-lg bg-danger-transparent flex-shrink-0 me-2">
                                                    <i className="ti ti-brand-socket-io" />
                                                </div>
                                                <div>
                                                    <h6 className="mb-1">Not Well</h6>
                                                    <p>Date : 16 Jun 2024</p>
                                                </div>
                                            </div>
                                            <span className="badge bg-success d-inline-flex align-items-center">
                                                <i className="ti ti-circle-filled fs-5 me-1" />
                                                Approved
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* /Leave Status */}
                        </div>
                    </div>
                </div>
                {/* /Page Wrapper */}
                {/* Add Event */}
                <div className="modal fade" id="add_event">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h4 className="modal-title">New Event</h4>
                                <button
                                    type="button"
                                    className="btn-close custom-btn-close"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                >
                                    <i className="ti ti-x" />
                                </button>
                            </div>
                            <form action="teacher-dashboard.html">
                                <div className="modal-body">
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div>
                                                <label className="form-label">Event For</label>
                                                <div className="d-flex align-items-center flex-wrap">
                                                    <div className="form-check me-3 mb-3">
                                                        <input
                                                            className="form-check-input"
                                                            type="radio"
                                                            name="event"
                                                            id="all"
                                                            defaultChecked=""
                                                        />
                                                        <label className="form-check-label" htmlFor="all">
                                                            All
                                                        </label>
                                                    </div>
                                                    <div className="form-check me-3 mb-3">
                                                        <input
                                                            className="form-check-input"
                                                            type="radio"
                                                            name="event"
                                                            id="students"
                                                        />
                                                        <label className="form-check-label" htmlFor="students">
                                                            Students
                                                        </label>
                                                    </div>
                                                    <div className="form-check me-3 mb-3">
                                                        <input
                                                            className="form-check-input"
                                                            type="radio"
                                                            name="event"
                                                            id="staffs"
                                                        />
                                                        <label className="form-check-label" htmlFor="staffs">
                                                            Staffs
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="all-content" id="all-student">
                                                <div className="mb-3">
                                                    <label className="form-label">Classes</label>
                                                    <select className="select">
                                                        <option>All Classes</option>
                                                        <option>I</option>
                                                        <option>II</option>
                                                        <option>III</option>
                                                        <option>IV</option>
                                                    </select>
                                                </div>
                                                <div className="mb-3">
                                                    <label className="form-label">Sections</label>
                                                    <select className="select">
                                                        <option>All Sections</option>
                                                        <option>A</option>
                                                        <option>B</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="all-content" id="all-staffs">
                                                <div className="mb-3">
                                                    <div className="bg-light-500 p-3 pb-2 rounded">
                                                        <label className="form-label">Role</label>
                                                        <div className="row">
                                                            <div className="col-md-6">
                                                                <div className="form-check form-check-sm mb-2">
                                                                    <input
                                                                        className="form-check-input"
                                                                        type="checkbox"
                                                                    />
                                                                    Admin
                                                                </div>
                                                                <div className="form-check form-check-sm mb-2">
                                                                    <input
                                                                        className="form-check-input"
                                                                        type="checkbox"
                                                                        defaultChecked=""
                                                                    />
                                                                    Teacher
                                                                </div>
                                                                <div className="form-check form-check-sm mb-2">
                                                                    <input
                                                                        className="form-check-input"
                                                                        type="checkbox"
                                                                    />
                                                                    Driver
                                                                </div>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <div className="form-check form-check-sm mb-2">
                                                                    <input
                                                                        className="form-check-input"
                                                                        type="checkbox"
                                                                    />
                                                                    Accountant
                                                                </div>
                                                                <div className="form-check form-check-sm mb-2">
                                                                    <input
                                                                        className="form-check-input"
                                                                        type="checkbox"
                                                                    />
                                                                    Librarian
                                                                </div>
                                                                <div className="form-check form-check-sm mb-2">
                                                                    <input
                                                                        className="form-check-input"
                                                                        type="checkbox"
                                                                    />
                                                                    Receptionist
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="mb-3">
                                                    <label className="form-label">All Teachers</label>
                                                    <select className="select">
                                                        <option>Select</option>
                                                        <option>I</option>
                                                        <option>II</option>
                                                        <option>III</option>
                                                        <option>IV</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label">Event Title</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Enter Title"
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label">Event Category</label>
                                            <select className="select">
                                                <option>Select</option>
                                                <option>Celebration</option>
                                                <option>Training</option>
                                                <option>Meeting</option>
                                                <option>Holidays</option>
                                            </select>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="mb-3">
                                                <label className="form-label">Start Date</label>
                                                <div className="date-pic">
                                                    <input
                                                        type="text"
                                                        className="form-control datetimepicker"
                                                        placeholder="15 May 2024"
                                                    />
                                                    <span className="cal-icon">
                                                        <i className="ti ti-calendar" />
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="mb-3">
                                                <label className="form-label">End Date</label>
                                                <div className="date-pic">
                                                    <input
                                                        type="text"
                                                        className="form-control datetimepicker"
                                                        placeholder="21 May 2024"
                                                    />
                                                    <span className="cal-icon">
                                                        <i className="ti ti-calendar" />
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="mb-3">
                                                <label className="form-label">Start Time</label>
                                                <div className="date-pic">
                                                    <input
                                                        type="text"
                                                        className="form-control timepicker"
                                                        placeholder="09:10 AM"
                                                    />
                                                    <span className="cal-icon">
                                                        <i className="ti ti-clock" />
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="mb-3">
                                                <label className="form-label">End Time</label>
                                                <div className="date-pic">
                                                    <input
                                                        type="text"
                                                        className="form-control timepicker"
                                                        placeholder="12:50 PM"
                                                    />
                                                    <span className="cal-icon">
                                                        <i className="ti ti-clock" />
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="mb-3">
                                                <div className="bg-light p-3 pb-2 rounded">
                                                    <div className="mb-3">
                                                        <label className="form-label">Attachment</label>
                                                        <p>Upload size of 4MB, Accepted Format PDF</p>
                                                    </div>
                                                    <div className="d-flex align-items-center flex-wrap">
                                                        <div className="btn btn-primary drag-upload-btn mb-2 me-2">
                                                            <i className="ti ti-file-upload me-1" />
                                                            Upload
                                                            <input
                                                                type="file"
                                                                className="form-control image_sign"
                                                                multiple=""
                                                            />
                                                        </div>
                                                        <p className="mb-2">Fees_Structure.pdf</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mb-0">
                                                <label className="form-label">Message</label>
                                                <textarea
                                                    className="form-control"
                                                    rows={4}
                                                    defaultValue={
                                                        "Meeting with Staffs on the Quality Improvement s and completion of syllabus before the August,  enhance the students health issue"
                                                    }
                                                />
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
                {/* /Add Event */}
            </>

        </>
    )
}

export default Dashboard
