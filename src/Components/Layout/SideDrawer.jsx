import React, { useState } from 'react'
import black from "../../assets/img/logo_black.svg"
import { Link, NavLink, useLocation } from 'react-router-dom'
function SideDrawer() {
    const location = useLocation();
    const [OpenToggle, setOpenToggle] = useState()
    const [SubopenToggle, setSubopenToggle] = useState()
    const stutoggle = () => {
        setOpenToggle(OpenToggle === "stuinfo" ? '' : 'stuinfo')
    }
    const admtoggle = () => {
        setSubopenToggle(SubopenToggle === "admission" ? '' : 'admission')
    }
    const admintoggle = () => {
        setOpenToggle(OpenToggle === "admissionIn" ? '' : 'admissionIn')
    }
    const partoggle = () => {
        setOpenToggle(OpenToggle === "parentinfo" ? '' : 'parentinfo')
    }
    const idCardStu = () => {
        setOpenToggle(OpenToggle === "idCard" ? '' : 'idCard')
    }
    const manageAttendance = () => {
        setOpenToggle(OpenToggle === "manageAtt" ? '' : 'manageAtt')
    }
    const staffSalaryGenerate = () => {
        setOpenToggle(OpenToggle === "staffsalary" ? '' : 'staffsalary')
    }
    const attendanceReport = () => {
        setSubopenToggle(SubopenToggle === "report" ? '' : 'report')
    }
    const TimeTableManagement = () => {
        setOpenToggle(OpenToggle === "timetables" ? '' : 'timetables')
    }
    const classNamelogic = () => {
        setOpenToggle(OpenToggle === "classNamelogic" ? '' : 'classNamelogic')
    }
    const Library = () => {
        setOpenToggle(OpenToggle === "Library" ? '' : 'Library')
    }
    const staffToggle = () => {
        setOpenToggle(OpenToggle === "staffinfo" ? '' : 'staffinfo')
    }
    const time_Table = [
        '/addtimetable'
    ]
    const activeRoutes = [
        '/student-info',
        '/student-promote',
        '/student-transfer',
        '/student-birthdays',
        '/studentInfo'
    ];
    const admission_activeRoutes = [
        '/admit-students',
        '/admit-bulk-students',

    ];
    const admissionIn_activeRoutes = [


    ];

    const parents_info = [
        '/manage-accounts',
        '/account-requests',
        '/parents-info-report'
    ]

    const Id_cardStudent = [
        '/student-id-Card',
        '/staff-id-card',
        '/id-card-stu'
    ]
    const Manage_Attendance = [
        '/manage-attendance'
    ]
    const attendance_report = [
        '/student-report',
        '/staff-report'
    ]
    const stf_Salary = [
        '/StaffSalaryGeneration'
    ]
    const librarypath = [
        '/librarymember',
        '/booklist',
        '/bookreturn',
        '/bookissue'
    ]
    const staff_info = [
        '/staff-management'
    ]
    // const admission
    const isActive = activeRoutes.includes(location.pathname);
    const Adm_isActive = admission_activeRoutes.includes(location.pathname);
    const AdmIn_isActive = admissionIn_activeRoutes.includes(location.pathname);
    const parent_Active = parents_info.includes(location.pathname);
    const Id_card = Id_cardStudent.includes(location.pathname);
    const Attendance = Manage_Attendance.includes(location.pathname);
    const studentReport = attendance_report.includes(location.pathname);
    const timetable = time_Table.includes(location.pathname);
    const staff = staff_info.includes(location.pathname);
    const Stf_salary = stf_Salary.includes(location.pathname);
    const librarypaths = librarypath.includes(location.pathname);

    return (
        <>
            <aside id="layout-menu" className=" layout-menu menu-vertical menu bg-menu-theme" style={{ overflowY: 'scroll', height: '100vh', width: 'auto', scrollbarWidth: 'thin' }}>
                <div className="app-brand demo ">
                    <Link to={'/'} className="app-brand-link">
                        <span className="app-brand-logo demo">
                            <img src={black} alt="" style={{ maxHeight: "50px" }} />
                        </span>
                    </Link>

                    <a href="javascript:void(0);" className="layout-menu-toggle menu-link text-large ms-auto d-block d-xl-none">
                        <i className="bx bx-chevron-left bx-sm align-middle"></i>
                    </a>
                </div>

                <div className="menu-inner-shadow"></div>

                <ul className="menu-inner py-1">
                    <NavLink className="menu-item" activeclassname="active" to="/">
                        <Link to="/" className="menu-link">
                            <i className="menu-icon tf-icons bx bx-home-circle"></i>
                            <div data-i18n="Analytics" >Dashboard</div>
                        </Link>
                    </NavLink>
                    <li className={`menu-item ${Adm_isActive ? 'active' : ''} ${OpenToggle == 'admissionIn' ? 'open' : ''}`} id='admissionIn' >
                        <a href="javascript:void(0);" className="menu-link menu-toggle" onClick={admintoggle}>
                            <i className='menu-icon tf-icons bx bxs-user-rectangle'></i>
                            <div>Admission Management</div>
                        </a>
                        <ul className="menu-sub">
                            <NavLink to="/admit-students" activeclassname="active" className="menu-item" >
                                <a href="javascript:void(0);" className="menu-link">
                                    <div>Admit Students</div>
                                </a>
                            </NavLink>
                            <NavLink to="/admit-bulk-students" activeclassname="active" className="menu-item">
                                <a href="javascript:void(0);" className="menu-link">
                                    <div>Admit Bulk Students</div>
                                </a>
                            </NavLink>
                            <li className={`menu-item ${Adm_isActive ? 'active' : ''} ${SubopenToggle == 'admission' ? 'open' : ''}`} id='admission' >
                                <a href="javascript:void(0);" className="menu-link menu-toggle" onClick={admtoggle}>
                                    <div>Admission Inquiries</div>
                                </a>
                                <ul className="menu-sub pl-5">
                                    <NavLink to="/admit-students" activeclassname="active" className="menu-item">
                                        <Link to={"/admissionenquiry"} className="menu-link">
                                            <div>Manage Inquiries</div>
                                        </Link>
                                    </NavLink>
                                    <NavLink to="/admit-bulk-students" activeclassname="active" className="menu-item">
                                        <a href="javascript:void(0);" className="menu-link">
                                            <div>Send SMS to Inquiries</div>
                                        </a>
                                    </NavLink>
                                </ul>
                            </li>
                            <NavLink activeclassname="active" className="menu-item" to="/admission-enquiries">
                                <a href="javascript:void(0);" className="menu-link">
                                    <div>Admission Requests</div>
                                </a>
                            </NavLink>
                            <NavLink activeclassname="active" className="menu-item" to="/Studymaterial">
                                <a href="javascript:void(0);" className="menu-link">
                                    <div>Study Materials</div>
                                </a>
                            </NavLink>
                            <NavLink activeclassname="active" className="menu-item" to="/exams">
                                <a href="javascript:void(0);" className="menu-link">
                                    <div>Exams</div>
                                </a>
                            </NavLink>
                            <NavLink activeclassname="active" className="menu-item" to="/">
                                <a href="javascript:void(0);" className="menu-link">
                                    <div>Admission Report</div>
                                </a>
                            </NavLink>
                        </ul>
                    </li>
                    <li className={`menu-item ${librarypaths ? 'active' : ''} ${OpenToggle == 'Library' ? 'open' : ''}`} id='Library' >
                        <a href="javascript:void(0);" className="menu-link menu-toggle" onClick={Library}>
                            <i className='menu-icon tf-icons bx bxs-user-rectangle'></i>
                            <div>Library</div>
                        </a>
                        <ul className="menu-sub">
                            <NavLink activeclassname="active" className="menu-item" to="/librarymember">
                                <a href="javascript:void(0);" className="menu-link">
                                    <div>Library Member</div>
                                </a>
                            </NavLink>
                            <NavLink activeclassname="active" className="menu-item" to="/booklist">
                                <a href="javascript:void(0);" className="menu-link">
                                    <div>Book List</div>
                                </a>
                            </NavLink>
                            <NavLink activeclassname="active" className="menu-item" to="/bookreturn">
                                <a href="javascript:void(0);" className="menu-link">
                                    <div>Book Return</div>
                                </a>
                            </NavLink>
                            <NavLink activeclassname="active" className="menu-item" to="/bookissue">
                                <a href="javascript:void(0);" className="menu-link">
                                    <div>Book Issue</div>
                                </a>
                            </NavLink>
                        </ul>
                    </li>

                    <NavLink className="menu-item" activeclassname="active" to="homeWork">
                        <Link to="/homeWork" className="menu-link">
                            <i className='menu-icon tf-icons bx bxs-group'></i>
                            <div>Home Work</div>
                        </Link>
                    </NavLink>
                    <li className={`menu-item ${isActive ? 'active' : ''} ${OpenToggle == 'stuinfo' ? 'open' : ''}`} id='stuinfo' >
                        <a href="javascript:void(0);" className="menu-link menu-toggle" onClick={stutoggle}>
                            <i className='menu-icon tf-icons bx bxs-user-rectangle'></i>
                            <div>Students Management</div>
                        </a>
                        <ul className="menu-sub">
                            <NavLink activeclassname="active" className="menu-item" to="/student-info">
                                <a href="javascript:void(0);" className="menu-link">
                                    <div>Students Information</div>
                                </a>
                            </NavLink>
                            <NavLink activeclassname="active" className="menu-item" to="/student-promote">
                                <a href="javascript:void(0);" className="menu-link">
                                    <div>Students Promotions</div>
                                </a>
                            </NavLink>
                            <NavLink activeclassname="active" className="menu-item" to="/student-transfer">
                                <a href="javascript:void(0);" className="menu-link">
                                    <div>Students Transfer</div>
                                </a>
                            </NavLink>
                            <NavLink activeclassname="active" className="menu-item" to="/student-birthdays">
                                <a href="javascript:void(0);" className="menu-link">
                                    <div>Students Birthdays</div>
                                </a>
                            </NavLink>
                            <NavLink activeclassname="active" className="menu-item" to="/studentInfo">
                                <a href="javascript:void(0);" className="menu-link">
                                    <div>Student Info Report</div>
                                </a>
                            </NavLink>
                        </ul>
                    </li>

                    <li className={`menu-item ${parent_Active ? 'active' : ''} ${OpenToggle == 'parentinfo' ? 'open' : ''}`} id='parentinfo' >
                        <a href="javascript:void(0);" className="menu-link menu-toggle" onClick={partoggle}>
                            <i className='menu-icon tf-icons bx bxs-user-rectangle'></i>
                            <div>Parents Account</div>
                        </a>
                        <ul className="menu-sub">
                            <NavLink activeclassname="active" className="menu-item" to="/manage-accounts">
                                <a href="javascript:void(0);" className="menu-link">
                                    <div>Manage Accounts</div>
                                </a>
                            </NavLink>
                            <NavLink activeclassname="active" className="menu-item" to="/account-requests">
                                <a href="javascript:void(0);" className="menu-link">
                                    <div>Account Requests</div>
                                </a>
                            </NavLink>
                            <NavLink activeclassname="active" className="menu-item" to="/parents-info-report">
                                <a href="javascript:void(0);" className="menu-link">
                                    <div>Parents Info Report</div>
                                </a>
                            </NavLink>
                        </ul>
                    </li>


                    <li className={`menu-item ${staff ? 'active' : ''} ${OpenToggle == 'staffinfo' ? 'open' : ''}`} id='staffinfo' >
                        <a href="javascript:void(0);" className="menu-link menu-toggle" onClick={staffToggle}>
                            <i className='menu-icon tf-icons bx bx-user'></i>
                            <div>Staff</div>
                        </a>
                        <ul className="menu-sub">
                            <NavLink activeclassname="active" className="menu-item" to="/staff-management">
                                <a href="javascript:void(0);" className="menu-link">
                                    <div>Staff Management</div>
                                </a>
                            </NavLink>
                            <NavLink activeclassname="active" className="menu-item" to="/teaching-staff">
                                <a href="javascript:void(0);" className="menu-link">
                                    <div>Teaching Staff</div>
                                </a>
                            </NavLink>
                            <NavLink activeclassname="active" className="menu-item" to="/non-teaching-staff">
                                <a href="javascript:void(0);" className="menu-link">
                                    <div>Non Teaching Staff</div>
                                </a>
                            </NavLink>
                        </ul>
                    </li>
                    <li className={`menu-item ${Id_card ? 'active' : ''} ${OpenToggle == 'idCard' ? 'open' : ''}`} id='idCard' >
                        <a href="javascript:void(0);" className="menu-link menu-toggle" onClick={idCardStu}>
                            <i className='menu-icon tf-icons bx bx-id-card'></i>
                            <div>Id Card Printing </div>
                        </a>
                        <ul className="menu-sub">
                            <NavLink activeclassname="active" className="menu-item" to="/student-id-card">
                                <a href="javascript:void(0);" className="menu-link">
                                    <div>Print Student Cards</div>
                                </a>
                            </NavLink>
                            <NavLink activeclassname="active" className="menu-item" to="/staff-id-card">
                                <a href="javascript:void(0);" className="menu-link">
                                    <div>Print Staff Cards</div>
                                </a>
                            </NavLink>
                            <NavLink activeclassname="active" className="menu-item" to="/">
                                <a href="javascript:void(0);" className="menu-link">
                                    <div>ID Card Settings</div>
                                </a>
                            </NavLink>
                        </ul>
                    </li>

                    <NavLink className="menu-item" activeclassname="active" to="accountant">
                        <Link to="/accountant" className="menu-link">
                            <i className='menu-icon tf-icons bx bxs-group'></i>
                            <div>Accountant</div>
                        </Link>
                    </NavLink>
                    <NavLink className="menu-item" activeclassname="active" to="feepayment">
                        <Link to="/feepayment" className="menu-link">
                            <i className='menu-icon tf-icons bx bx-rupee'></i>
                            <div>Fee Payment</div>
                        </Link>
                    </NavLink>
                    <li className={`menu-item ${timetable ? 'active' : ''} ${OpenToggle == 'timetables' ? 'open' : ''}`} id='timetables' >
                        <a href="javascript:void(0);" className="menu-link menu-toggle" onClick={TimeTableManagement}>
                            <i className='menu-icon tf-icons bx bx-rupee'></i>
                            <div>Fee Management</div>
                        </a>
                        <ul className="menu-sub">
                            <NavLink activeclassname="active" className="menu-item" to="/feesoverview">
                                <a href="javascript:void(0);" className="menu-link">
                                    <div>Fees Overview</div>
                                </a>
                            </NavLink>
                            <NavLink activeclassname="active" className="menu-item" to="/feesdetails">
                                <a href="javascript:void(0);" className="menu-link">
                                    <div>Fees Accounts</div>
                                </a>
                            </NavLink>
                            <NavLink activeclassname="active" className="menu-item" to="/pendingfees">
                                <a href="javascript:void(0);" className="menu-link">
                                    <div>Pending Fees</div>
                                </a>
                            </NavLink>
                            <NavLink activeclassname="active" className="menu-item" to="/feestructure">
                                <a href="javascript:void(0);" className="menu-link">
                                    <div>Fees Structure</div>
                                </a>
                            </NavLink>
                            <NavLink activeclassname="active" className="menu-item" to="/feeremindertoall">
                                <a href="javascript:void(0);" className="menu-link">
                                    <div>Fees Reminder</div>
                                </a>
                            </NavLink>
                        </ul>

                    </li>
                    <li className={`menu-item ${timetable ? 'active' : ''} ${OpenToggle == 'timetables' ? 'open' : ''}`} id='timetables' >
                        <a href="javascript:void(0);" className="menu-link menu-toggle" onClick={TimeTableManagement}>
                            <i className='menu-icon tf-icons bx bx-calendar'></i>
                            <div>Time Table Management</div>
                        </a>
                        <ul className="menu-sub">
                            <NavLink activeclassname="active" className="menu-item" to="/">
                                <a href="javascript:void(0);" className="menu-link">
                                    <div>Add Timetable</div>
                                </a>
                            </NavLink>
                            <NavLink activeclassname="active" className="menu-item" to="/addtimetable">
                                <a href="javascript:void(0);" className="menu-link">
                                    <div>Manage Timetable</div>
                                </a>
                            </NavLink>
                        </ul>

                    </li>
                    <NavLink activeclassname="active" className="menu-item" to="/liveclass">
                        <a href="javascript:void(0);" className="menu-link">
                            <i className="menu-icon  fa fa-video-camera" aria-hidden="true"></i>
                            <div>Live Classes</div>
                        </a>
                    </NavLink>
                    <li className={`menu-item ${Attendance ? 'active' : ''} ${OpenToggle == 'manageAtt' ? 'open' : ''}`} id='manageAtt' >
                        <Link to="/manage-attendance" className="menu-link menu-link menu-toggle" onClick={manageAttendance}>
                            <i className='menu-icon tf-icons bx bx-id-card'></i>
                            <div>Manage Attendance</div>
                        </Link>

                        <ul className="menu-sub">
                            <NavLink activeclassname="active" className="menu-item" to="/student-attendance">
                                <a href="javascript:void(0);" className="menu-link">
                                    <div>Students Attendance</div>
                                </a>
                            </NavLink>
                            <NavLink activeclassname="active" className="menu-item" to="/staff-attendance">
                                <a href="javascript:void(0);" className="menu-link">
                                    <div>Staff Attendance</div>
                                </a>
                            </NavLink>
                            <NavLink activeclassname="active" className="menu-item" to="/">
                                <a href="javascript:void(0);" className="menu-link">
                                    <div>Attendance Accounts</div>
                                </a>
                            </NavLink>
                            <li className={`menu-item ${studentReport ? 'active' : ''} ${SubopenToggle == 'report' ? 'open' : ''}`} id='report' >
                                <a href="javascript:void(0);" className="menu-link menu-toggle" onClick={attendanceReport}>
                                    <div> Attendance Report </div>
                                </a>
                                <ul className="menu-sub">
                                    <NavLink activeclassname="active" className="menu-item" to="/student-report">
                                        <a href="javascript:void(0);" className="menu-link">
                                            <div>Students Attendance Report</div>
                                        </a>
                                    </NavLink>
                                    <NavLink activeclassname="active" className="menu-item" to="/staff-report">
                                        <a href="javascript:void(0);" className="menu-link">
                                            <div>Staff Attendance Report</div>
                                        </a>
                                    </NavLink>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li className={`menu-item ${Stf_salary ? 'active' : ''} ${OpenToggle == 'staffsalary' ? 'open' : ''}`} id='staffsalary' >
                        <a href="javascript:void(0);" className="menu-link menu-toggle" onClick={staffSalaryGenerate}>
                            <i className='menu-icon tf-icons bx bx-money'></i>
                            <div>Staff Salary Management</div>
                        </a>
                        <ul className='menu-sub'>

                            <NavLink activeclassname="active" className="menu-item" to="/staffsalarysetting">
                                <a href="javascript:void(0);" className="menu-link">

                                    <div>Salary Generation setting</div>
                                </a>
                            </NavLink>
                            <NavLink activeclassname="active" className="menu-item" to="/salaryGeneration">
                                <a href="javascript:void(0);" className="menu-link">
                                    <div>Salary Generation</div>
                                </a>
                            </NavLink>
                            <NavLink activeclassname="active" className="menu-item" to="/managesalaries">
                                <a href="javascript:void(0);" className="menu-link">
                                    <div>Manage Salaries</div>
                                </a>
                            </NavLink>
                            <NavLink activeclassname="active" className="menu-item" to="/loanmanagement">
                                <a href="javascript:void(0);" className="menu-link">
                                    <div>Loan Management</div>
                                </a>
                            </NavLink>
                            <NavLink activeclassname="active" className="menu-item" to="/salaryloanreport">
                                <a href="javascript:void(0);" className="menu-link">
                                    <div>Salary & Loan Reports</div>
                                </a>
                            </NavLink>
                        </ul>
                    </li>

                    <NavLink activeclassname="active" className="menu-item" to="/balancesheet">
                        <a href="javascript:void(0);" className="menu-link">
                            <i className="menu-icon  tf-icons bx bx-credit-card-front" ></i>
                            <div>Accounting</div>
                        </a>
                    </NavLink>


                    <li className="menu-item">
                        <a href="index.html" className="menu-link">
                            <i className='menu-icon tf-icons bx bx-chat'></i>
                            <div>Public Massages</div>
                        </a>
                    </li>

                    <li className={`menu-item ${Stf_salary ? 'active' : ''} ${OpenToggle == 'classNamelogic' ? 'open' : ''}`}>
                        <a href="javascript:void(0);" className="menu-link menu-toggle" onClick={classNamelogic}>
                            <i className="menu-icon tf-icons bx bx-layout"></i>
                            <div>Class Management</div>
                        </a>

                        <ul className="menu-sub">
                            <li className="menu-item">
                                <Link to={"/addclasses"} className="menu-link">
                                    <div>Add Class</div>
                                </Link>
                            </li>
                            <li className="menu-item">
                                <Link to={"/allclasses&subjects"} className="menu-link">
                                    <div>Classes & Subjects</div>
                                </Link>
                            </li>
                        </ul>
                    </li>

                    <li className="menu-item">
                        <a href="index.html" className="menu-link">
                            <i className='menu-icon tf-icons bx bxs-group'></i>
                            <div>Subject</div>
                        </a>
                    </li>
                    <li className="menu-item">
                        <a href="index.html" className="menu-link">
                            <i className='menu-icon tf-icons bx bxs-group'></i>
                            <div>Manage Attendance</div>
                        </a>
                    </li>
                    <li className="menu-item">
                        <a href="index.html" className="menu-link">
                            <i className='menu-icon tf-icons bx bx-calendar'></i>
                            <div>Time Table Management</div>
                        </a>
                    </li>


                    <li className="menu-item">
                        <a href="index.html" className="menu-link">
                            <i className='menu-icon tf-icons bx bx-wallet'></i>
                            <div>Expense Management</div>
                        </a>
                    </li>

                    <li className="menu-item">
                        <a href="index.html" className="menu-link">
                            <i className='menu-icon tf-icons bx bx-file'></i>
                            <div>Reporting Area</div>
                        </a>
                    </li>
                    <li className="menu-item">
                        <a href="index.html" className="menu-link">
                            <i className='menu-icon tf-icons bx bx-layer'></i>
                            <div>Stock & Inventory</div>
                        </a>
                    </li>
                    <li className="menu-item">
                        <a href="index.html" className="menu-link">
                            <i className='menu-icon tf-icons bx bx-book-open'></i>
                            <div>Exam Management</div>
                        </a>
                    </li>
                    <li className="menu-item">
                        <a href="index.html" className="menu-link">
                            <i className='menu-icon tf-icons bx bx-certification' ></i>
                            <div>Certification</div>
                        </a>
                    </li>
                    <li className="menu-item">
                        <a href="index.html" className="menu-link">
                            <i className='menu-icon tf-icons bx bx-timer'></i>
                            <div>Daily Home Work Dairy</div>
                        </a>
                    </li>
                    <li className="menu-item">
                        <a href="index.html" className="menu-link">
                            <i className='menu-icon tf-icons bx bx-pencil'></i>
                            <div>Study Material LMS</div>
                        </a>
                    </li>
                    <li className="menu-item">
                        <a href="index.html" className="menu-link">
                            <i className='menu-icon tf-icons bx bx-book-add'></i>
                            <div>Library Management</div>
                        </a>
                    </li>
                    <li className="menu-item">
                        <a href="index.html" className="menu-link">
                            <i className='menu-icon tf-icons bx bx-book-reader'></i>
                            <div>Leave Management</div>
                        </a>
                    </li>
                    <li className="menu-item">
                        <a href="index.html" className="menu-link">
                            <i className='menu-icon tf-icons bx bx-message-rounded-dots'></i>
                            <div>SMS Management</div>
                        </a>
                    </li>
                    <li className="menu-item">
                        <a href="index.html" className="menu-link">
                            <i className='menu-icon tf-icons bx bx-mobile-alt' ></i>
                            <div>Mobile App Notification</div>
                        </a>
                    </li>
                    <li className="menu-item">
                        <a href="index.html" className="menu-link">
                            <i className='menu-icon tf-icons bx bx-envelope' ></i>
                            <div>Email Alerts</div>
                        </a>
                    </li>
                    <li className="menu-item">
                        <a href="index.html" className="menu-link">
                            <i className='menu-icon tf-icons bx bx-chalkboard' ></i>
                            <div>School Notice Board</div>
                        </a>
                    </li>
                    <li className="menu-item">
                        <a href="index.html" className="menu-link">
                            <i className='menu-icon tf-icons bx bxs-school'></i>
                            <div>Manage Campus</div>
                        </a>
                    </li>
                    <li className="menu-item">
                        <a href="index.html" className="menu-link">
                            <i className='menu-icon tf-icons bx bxs-group'></i>
                            <div>Admin Roles Management</div>
                        </a>
                    </li>
                    <li className="menu-item">
                        <a href="index.html" className="menu-link">
                            <i className='menu-icon tf-icons bx bx-globe'></i>
                            <div>Website Management</div>
                        </a>
                    </li>
                    <li className="menu-item">
                        <a href="index.html" className="menu-link">
                            <i className='menu-icon tf-icons bx bx-book'></i>
                            <div>Books & Stationery</div>
                        </a>
                    </li>
                    <li className="menu-item">
                        <a href="index.html" className="menu-link">
                            <i className='menu-icon tf-icons bx bx-building-house' ></i>
                            <div>Hostel Management</div>
                        </a>
                    </li>
                    <li className="menu-item">
                        <a href="index.html" className="menu-link">
                            <i className='menu-icon tf-icons bx bx-bus-school' ></i>
                            <div>Bus Management</div>
                        </a>
                    </li>
                    <li className="menu-item">
                        <a href="index.html" className="menu-link">
                            <i className='menu-icon tf-icons bx bx-run' ></i>
                            <div>Sports</div>
                        </a>
                    </li>
                    <li className="menu-item">
                        <a href="index.html" className="menu-link">
                            <i className='menu-icon tf-icons bx bxs-school'></i>
                            <div>School Information Management</div>
                        </a>
                    </li>
                    <li className="menu-item">
                        <a href="index.html" className="menu-link">
                            <i className='menu-icon tf-icons bx bx-cog' ></i>
                            <div>Setting</div>
                        </a>
                    </li>

                    <li className="menu-item">
                        <a href="" target="_blank" className="menu-link" >
                            <i className="menu-icon tf-icons bx bx-support"></i>
                            <div data-i18n="Support">Support</div>
                        </a>
                    </li>
                    <li className="menu-item">
                        <a href="" target="_blank" className="menu-link">
                            <i className="menu-icon tf-icons bx bx-file"></i>
                            <div>Documentation</div>
                        </a>
                    </li>
                    <li className="menu-item">
                        <a href="" target="_blank" className="menu-link">
                            <i className='menu-icon tf-icons bx bx-recycle'></i>
                            <div>Recycle</div>
                        </a>
                    </li>
                </ul>
            </aside>
        </>
    )
}

export default SideDrawer
