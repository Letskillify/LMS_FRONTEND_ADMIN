import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
    return (
        <>
            {/* Sidebar */}
            <div className="sidebar" id="sidebar">
                <div className="sidebar-inner slimscroll">
                    <div id="sidebar-menu" className="sidebar-menu">
                        <ul>
                            <li>
                                <Link className="d-flex align-items-center border bg-white rounded p-2 mb-4">
                                    <img src="assets/img/icons/global-img.svg" className="avatar avatar-md img-fluid rounded" alt="Profile" />
                                    <span className="text-dark ms-2 fw-normal">Global International</span>
                                </Link>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <h6 className="submenu-hdr"><span>Main</span></h6>
                                <ul>
                                    <li className="">
                                        <Link to={'/'} className=""><i className="ti ti-layout-dashboard" /><span>Teacher Dashboard</span></Link>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <ul>
                                    <li>
                                        <h6 className="submenu-hdr"><span>Dashboard</span></h6>
                                        <ul>
                                            <li className="submenu">
                                                <Link ><i className="ti ti-school" /><span>Students</span><span className="menu-arrow" /></Link>
                                                <ul>
                                                    <li><Link to={'/allstudent'}>All Students</Link></li>
                                                    <li><Link >Student List</Link></li>
                                                    <li><Link >Student Details</Link></li>
                                                    <li><Link >Student Promotion</Link></li>
                                                </ul>
                                            </li>
                                            <li><Link to={'/homework'}><i className="ti ti-license" /><span>Home Work</span></Link></li>
                                        </ul>
                                    </li>

                                    {/* <li className="submenu">
                                        <Link ><i className="ti ti-user-bolt" /><span>Parents</span><span className="menu-arrow" /></Link>
                                        <ul>
                                            <li><Link >All Parents</Link></li>
                                            <li><Link >Parent List</Link></li>
                                        </ul>
                                    </li>
                                    <li className="submenu">
                                        <Link ><i className="ti ti-user-shield" /><span>Guardians</span><span className="menu-arrow" /></Link>
                                        <ul>
                                            <li><Link >All Guardians</Link></li>
                                            <li><Link >Guardian List</Link></li>
                                        </ul>
                                    </li>
                                    <li className="submenu">
                                        <Link ><i className="ti ti-users" /><span>Teachers</span><span className="menu-arrow" /></Link>
                                        <ul>
                                            <li><Link >All Teachers</Link></li>
                                            <li><Link >Teacher List</Link></li>
                                            <li><Link >Teacher Details</Link></li>
                                            <li><Link >Routine</Link></li>
                                        </ul>
                                    </li> */}
                                </ul>
                            </li>
                            {/* <li>
                                <h6 className="submenu-hdr"><span>Academic</span></h6>
                                <ul>
                                    <li className="submenu">
                                        <Link ><i className="ti ti-school-bell" /><span>Classes</span><span className="menu-arrow" /></Link>
                                        <ul>
                                            <li><Link >All Classes</Link></li>
                                            <li><Link >Schedule</Link></li>
                                        </ul>
                                    </li>
                                    <li><Link ><i className="ti ti-building" /><span>Class Room</span></Link>
                                    </li>
                                    <li><Link ><i className="ti ti-bell-school" /><span>Class
                                        Routine</span></Link></li>
                                    <li><Link ><i className="ti ti-square-rotated-forbid-2" /><span>Section</span></Link></li>
                                    <li><Link ><i className="ti ti-book" /><span>Subject</span></Link></li>
                                    <li><Link ><i className="ti ti-book-upload" /><span>Syllabus</span></Link></li>
                                    <li><Link ><i className="ti ti-table" /><span>Time
                                        Table</span></Link></li>
                                    <li className="submenu">
                                        <Link ><i className="ti ti-hexagonal-prism-plus" /><span>Examinations</span><span className="menu-arrow" /></Link>
                                        <ul>
                                            <li><Link >Exam</Link></li>
                                            <li><Link >Exam Schedule</Link></li>
                                            <li><Link >Grade</Link></li>
                                            <li><Link >Exam Attendance</Link></li>
                                            <li><Link >Exam Results</Link></li>
                                        </ul>
                                    </li>
                                    <li><Link ><i className="ti ti-lifebuoy" /><span>Reasons</span></Link></li>
                                </ul>
                            </li>
                            <li>
                                <h6 className="submenu-hdr"><span>Management</span></h6>
                                <ul>
                                    <li className="submenu">
                                        <Link ><i className="ti ti-report-money" /><span>Fees
                                            Collection</span><span className="menu-arrow" /></Link>
                                        <ul>
                                            <li><Link >Fees Group</Link></li>
                                            <li><Link >Fees Type</Link></li>
                                            <li><Link >Fees Master</Link></li>
                                            <li><Link >Fees Assign</Link></li>
                                            <li><Link >Collect Fees</Link></li>
                                        </ul>
                                    </li>
                                    <li className="submenu">
                                        <Link ><i className="ti ti-notebook" /><span>Library</span><span className="menu-arrow" /></Link>
                                        <ul>
                                            <li><Link >Library Members</Link></li>
                                            <li><Link >Books</Link></li>
                                            <li><Link >Issue Book</Link></li>
                                            <li><Link >Return</Link></li>
                                        </ul>
                                    </li>
                                    <li><Link ><i className="ti ti-run" /><span>Sports</span></Link></li>
                                    <li><Link ><i className="ti ti-play-football" /><span>Players</span></Link>
                                    </li>
                                    <li className="submenu">
                                        <Link ><i className="ti ti-building-fortress" /><span>Hostel</span><span className="menu-arrow" /></Link>
                                        <ul>
                                            <li><Link >Hostel List</Link></li>
                                            <li><Link >Hostel Rooms</Link></li>
                                            <li><Link >Room Type</Link></li>
                                        </ul>
                                    </li>
                                    <li className="submenu">
                                        <Link ><i className="ti ti-bus" /><span>Transport</span><span className="menu-arrow" /></Link>
                                        <ul>
                                            <li><Link >Routes</Link></li>
                                            <li><Link >Pickup Points</Link></li>
                                            <li><Link >Vehicle Drivers</Link></li>
                                            <li><Link >Vehicle</Link></li>
                                            <li><Link >Assign Vehicle</Link></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <h6 className="submenu-hdr"><span>HRM</span></h6>
                                <ul>
                                    <li><Link ><i className="ti ti-users-group" /><span>Staffs</span></Link></li>
                                    <li><Link ><i className="ti ti-layout-distribute-horizontal" /><span>Departments</span></Link>
                                    </li>
                                    <li><Link ><i className="ti ti-user-exclamation" /><span>Designation</span></Link></li>
                                    <li className="submenu">
                                        <Link ><i className="ti ti-calendar-share" /><span>Attendance</span><span className="menu-arrow" /></Link>
                                        <ul>
                                            <li><Link >Student Attendance</Link></li>
                                            <li><Link >Teacher Attendance</Link></li>
                                            <li><Link >Staff Attendance</Link></li>
                                        </ul>
                                    </li>
                                    <li className="submenu">
                                        <Link ><i className="ti ti-calendar-stats" /><span>Leaves</span><span className="menu-arrow" /></Link>
                                        <ul>
                                            <li><Link >List of leaves</Link></li>
                                            <li><Link >Approve Request</Link></li>
                                        </ul>
                                    </li>
                                    <li><Link ><i className="ti ti-briefcase" /><span>Holidays</span></Link>
                                    </li>
                                    <li><Link ><i className="ti ti-moneybag" /><span>Payroll</span></Link></li>
                                </ul>
                            </li>
                            <li>
                                <h6 className="submenu-hdr"><span>Finance &amp; Accounts</span></h6>
                                <ul>
                                    <li className="submenu">
                                        <Link >
                                            <i className="ti ti-swipe" /><span>Accounts</span><span className="menu-arrow" />
                                        </Link>
                                        <ul>
                                            <li><Link >Expenses</Link></li>
                                            <li><Link >Expense Category</Link></li>
                                            <li><Link >Income</Link></li>
                                            <li><Link >Invoices</Link></li>
                                            <li><Link >Invoice View</Link></li>
                                            <li><Link >Transactions</Link></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <h6 className="submenu-hdr"><span>Announcements</span></h6>
                                <ul>
                                    <li><Link ><i className="ti ti-clipboard-data" /><span>Notice
                                        Board</span></Link></li>
                                    <li><Link ><i className="ti ti-calendar-question" /><span>Events</span></Link>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <h6 className="submenu-hdr"><span>Reports</span></h6>
                                <ul>
                                    <li><Link ><i className="ti ti-calendar-due" /><span>Attendance
                                        Report</span></Link></li>
                                    <li><Link ><i className="ti ti-graph" /><span>Class Report</span></Link>
                                    </li>
                                    <li><Link ><i className="ti ti-chart-infographic" /><span>Student
                                        Report</span></Link></li>
                                    <li><Link ><i className="ti ti-calendar-x" /><span>Grade
                                        Report</span></Link></li>
                                    <li><Link ><i className="ti ti-line" /><span>Leave Report</span></Link>
                                    </li>
                                    <li><Link ><i className="ti ti-mask" /><span>Fees Report</span></Link>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <h6 className="submenu-hdr"><span>User Management</span></h6>
                                <ul>
                                    <li><Link ><i className="ti ti-users-minus" /><span>Users</span></Link></li>
                                    <li><Link ><i className="ti ti-shield-plus" /><span>Roles &amp;
                                        Permissions</span></Link></li>
                                    <li><Link ><i className="ti ti-user-question" /><span>Delete
                                        Account Request</span></Link></li>
                                </ul>
                            </li>
                            <li>
                                <h6 className="submenu-hdr"><span>Membership</span></h6>
                                <ul>
                                    <li><Link ><i className="ti ti-user-plus" /><span>Membership
                                        Plans</span></Link></li>
                                    <li><Link ><i className="ti ti-cone-plus" /><span>Membership
                                        Addons</span></Link></li>
                                    <li><Link ><i className="ti ti-file-power" /><span>Transactions</span></Link></li>
                                </ul>
                            </li>
                            <li>
                                <h6 className="submenu-hdr"><span>Content</span></h6>
                                <ul>
                                    <li><Link ><i className="ti ti-page-break" /><span>Pages</span></Link></li>
                                    <li className="submenu">
                                        <Link >
                                            <i className="ti ti-brand-blogger" /><span>Blog</span><span className="menu-arrow" />
                                        </Link>
                                        <ul>
                                            <li><Link >All Blogs</Link></li>
                                            <li><Link >Categories</Link></li>
                                            <li><Link >Comments</Link></li>
                                            <li><Link >Tags</Link></li>
                                        </ul>
                                    </li>
                                    <li className="submenu">
                                        <Link >
                                            <i className="ti ti-map-pin-search" /><span>Location</span><span className="menu-arrow" />
                                        </Link>
                                        <ul>
                                            <li><Link >Countries</Link></li>
                                            <li><Link >States</Link></li>
                                            <li><Link >Cities</Link></li>
                                        </ul>
                                    </li>
                                    <li><Link ><i className="ti ti-quote" /><span>Testimonials</span></Link>
                                    </li>
                                    <li><Link ><i className="ti ti-question-mark" /><span>FAQ</span></Link></li>
                                </ul>
                            </li>

                            <li>
                                <h6 className="submenu-hdr"><span>Pages</span></h6>
                                <ul>
                                    <li><Link ><i className="ti ti-user" /><span>Profile</span></Link></li>
                                    <li className="submenu">
                                        <Link >
                                            <i className="ti ti-lock-open" /><span>Authentication</span><span className="menu-arrow" />
                                        </Link>
                                        <ul>
                                            <li className="submenu submenu-two"><Link  className>Login<span className="menu-arrow inside-submenu" /></Link>
                                                <ul>
                                                    <li><Link >Cover</Link></li>
                                                    <li><Link >Illustration</Link></li>
                                                    <li><Link >Basic</Link></li>
                                                </ul>
                                            </li>
                                            <li className="submenu submenu-two"><Link  className>Register<span className="menu-arrow inside-submenu" /></Link>
                                                <ul>
                                                    <li><Link >Cover</Link></li>
                                                    <li><Link >Illustration</Link></li>
                                                    <li><Link >Basic</Link></li>
                                                </ul>
                                            </li>
                                            <li className="submenu submenu-two"><Link >Forgot
                                                Password<span className="menu-arrow inside-submenu" /></Link>
                                                <ul>
                                                    <li><Link >Cover</Link></li>
                                                    <li><Link >Illustration</Link></li>
                                                    <li><Link >Basic</Link></li>
                                                </ul>
                                            </li>
                                            <li className="submenu submenu-two"><Link >Reset
                                                Password<span className="menu-arrow inside-submenu" /></Link>
                                                <ul>
                                                    <li><Link >Cover</Link></li>
                                                    <li><Link >Illustration</Link></li>
                                                    <li><Link >Basic</Link></li>
                                                </ul>
                                            </li>
                                            <li className="submenu submenu-two"><Link >Email
                                                Verification<span className="menu-arrow inside-submenu" /></Link>
                                                <ul>
                                                    <li><Link >Cover</Link></li>
                                                    <li><Link >Illustration</Link></li>
                                                    <li><Link >Basic</Link></li>
                                                </ul>
                                            </li>
                                            <li className="submenu submenu-two"><Link >2 Step
                                                Verification<span className="menu-arrow inside-submenu" /></Link>
                                                <ul>
                                                    <li><Link >Cover</Link></li>
                                                    <li><Link >Illustration</Link></li>
                                                    <li><Link >Basic</Link></li>
                                                </ul>
                                            </li>
                                            <li><Link >Lock Screen</Link></li>
                                        </ul>
                                    </li>
                                    <li className="submenu">
                                        <Link >
                                            <i className="ti ti-error-404" /><span>Error Pages</span><span className="menu-arrow" />
                                        </Link>
                                        <ul>
                                            <li><Link >404 Error</Link></li>
                                            <li><Link >500 Error</Link></li>
                                        </ul>
                                    </li>
                                    <li><Link ><i className="ti ti-brand-nuxt" /><span>Blank
                                        Page</span></Link></li>
                                    <li><Link ><i className="ti ti-file" /><span>Coming Soon</span></Link>
                                    </li>
                                    <li><Link ><i className="ti ti-moon-2" /><span>Under
                                        Maintenance</span></Link></li>
                                </ul>
                            </li>
                            <li>
                                <h6 className="submenu-hdr"><span>Settings</span></h6>
                                <ul>
                                    <li className="submenu">
                                        <Link >
                                            <i className="ti ti-shield-cog" /><span>General Settings</span><span className="menu-arrow" />
                                        </Link>
                                        <ul>
                                            <li><Link >Profile Settings</Link></li>
                                            <li><Link >Security Settings</Link></li>
                                            <li><Link >Notifications Settings</Link></li>
                                            <li><Link >Connected Apps</Link></li>
                                        </ul>
                                    </li>
                                    
                                    <li className="submenu">
                                        <Link >
                                            <i className="ti ti-device-laptop" /><span>Website Settings</span><span className="menu-arrow" />
                                        </Link>
                                        <ul>
                                            <li><Link >Company Settings</Link></li>
                                            <li><Link >Localization</Link></li>
                                            <li><Link >Prefixes</Link></li>
                                            <li><Link >Preferences</Link></li>
                                            <li><Link >Social Authentication</Link></li>
                                            <li><Link >Language</Link></li>
                                        </ul>
                                    </li>
                                    <li className="submenu">
                                        <Link >
                                            <i className="ti ti-apps" /><span>App Settings</span><span className="menu-arrow" />
                                        </Link>
                                        <ul>
                                            <li><Link >Invoice Settings</Link></li>
                                            <li><Link >Custom Fields</Link></li>
                                        </ul>
                                    </li>
                                    <li className="submenu">
                                        <Link >
                                            <i className="ti ti-file-symlink" /><span>System Settings</span><span className="menu-arrow" />
                                        </Link>
                                        <ul>
                                            <li><Link >Email Settings</Link></li>
                                            <li><Link >Email Templates</Link></li>
                                            <li><Link >SMS Settings</Link></li>
                                            <li><Link >OTP</Link></li>
                                            <li><Link >GDPR Cookies</Link></li>
                                        </ul>
                                    </li>
                                    <li className="submenu">
                                        <Link >
                                            <i className="ti ti-zoom-money" /><span>Financial Settings</span><span className="menu-arrow" />
                                        </Link>
                                        <ul>
                                            <li><Link >Payment Gateways </Link></li>
                                            <li><Link >Tax Rates</Link></li>
                                        </ul>
                                    </li>
                                    <li className="submenu">
                                        <Link >
                                            <i className="ti ti-calendar-repeat" /><span>Academic Settings</span><span className="menu-arrow" />
                                        </Link>
                                        <ul>
                                            <li><Link >School Settings </Link></li>
                                            <li><Link >Religion</Link></li>
                                        </ul>
                                    </li>
                                    <li className="submenu">
                                        <Link >
                                            <i className="ti ti-flag-cog" /><span>Other Settings</span><span className="menu-arrow" />
                                        </Link>
                                        <ul>
                                            <li><Link >Storage</Link></li>
                                            <li><Link >Ban IP Address</Link></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <h6 className="submenu-hdr"><span>Help</span></h6>
                                <ul>
                                    <li><Link ><i className="ti ti-file-text" /><span>Documentation</span></Link></li>
                                    <li><Link ><i className="ti ti-exchange" /><span>Changelog</span><span className="badge badge-primary badge-xs text-white fs-10 ms-auto">v1.8.3</span></Link></li>
                                    <li className="submenu">
                                        <Link ><i className="ti ti-menu-2" /><span>Multi
                                            Level</span><span className="menu-arrow" /></Link>
                                        <ul>
                                            <li><Link >Multilevel 1</Link></li>
                                            <li className="submenu submenu-two"><Link >Multilevel 2<span className="menu-arrow inside-submenu" /></Link>
                                                <ul>
                                                    <li><Link >Multilevel 2.1</Link></li>
                                                    <li className="submenu submenu-two submenu-three"><Link >Multilevel 2.2<span className="menu-arrow inside-submenu inside-submenu-two" /></Link>
                                                        <ul>
                                                            <li><Link >Multilevel 2.2.1</Link></li>
                                                            <li><Link >Multilevel 2.2.2</Link></li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li><Link >Multilevel 3</Link></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <h6 className="submenu-hdr"><span>Support</span></h6>
                                <ul>
                                    <li><Link ><i className="ti ti-message" /><span>Contact
                                        Messages</span></Link></li>
                                    <li><Link ><i className="ti ti-ticket" /><span>Tickets</span></Link></li>
                                </ul>
                            </li> */}
                        </ul>
                    </div>
                </div>
            </div>
            {/* /Sidebar */}
        </>
    )
}

export default Sidebar
