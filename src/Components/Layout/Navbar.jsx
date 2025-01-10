import React, { useContext } from 'react'
import Avatar from "../../assets/img/avatars/1.png"
import avatar2 from "../../assets/img/avatars/1.png"
import { MainContext } from '../Controller/MainProvider'
import { Link } from 'react-router-dom'
function Navbar() {

    const { userId, HandleLogOut, institute } = useContext(MainContext)
    return (
        <>
            <nav className="layout-navbar container-fluid navbar navbar-expand-xl navbar-detached align-items-center bg-navbar-theme" id="layout-navbar" >
                <div className="layout-menu-toggle navbar-nav align-items-xl-center me-3 me-xl-0 d-xl-none">
                    <a className="nav-item nav-link px-0 me-xl-4" href="javascript:void(0)">
                        <i className="bx bx-menu bx-sm"></i>
                    </a>
                </div>

                <div className="navbar-nav-right d-flex align-items-center" id="navbar-collapse">
                    <div className="navbar-nav align-items-center">
                        <div className="nav-item d-flex align-items-center">
                            <i className="bx bx-search fs-4 lh-0"></i>
                            <input type="text" className="form-control border-0 shadow-none" placeholder="Search..." aria-label="Search..." />
                        </div>
                    </div>

                    <ul className="navbar-nav flex-row align-items-center ms-auto">
                        <li className="nav-item lh-1 me-3">
                            <select id="smallSelect" className="form-select form-select-sm">
                                <option>Language</option>
                                <option value="1">Hindi</option>
                                <option value="2">English</option>
                                <option value="3">Urdu</option>
                            </select>
                        </li>
                        <li className="nav-item lh-1 me-3">
                            <select id="smallSelect" className="form-select form-select-sm">
                                <option>Main Campus</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </li>
                        <li className="nav-item lh-1 me-2">
                            <a href=""><i className=' menu-icon tf-icons bx bx-bell'></i></a>
                        </li>
                        <li className="nav-item lh-1 me-2">
                            <a href=""><i className=' menu-icon tf-icons bx bx-heart'></i></a>
                        </li>
                        <li className="nav-item lh-1 me-2">
                            <a href=""><i className=' menu-icon tf-icons bx bx-envelope'></i></a>
                        </li>


                        <li className="nav-item navbar-dropdown dropdown-user dropdown">
                            <a className="nav-link dropdown-toggle hide-arrow" href="javascript:void(0);" data-bs-toggle="dropdown">
                                <div className="avatar avatar-online">
                                    <img src={Avatar} alt className="w-px-40 h-auto rounded-circle" />
                                </div>
                            </a>
                            <ul className="dropdown-menu dropdown-menu-end">
                                <li>
                                    <a className="dropdown-item" href="#">
                                        <div className="d-flex">
                                            <div className="flex-shrink-0 me-3">
                                                <div className="avatar avatar-online">
                                                    <img src={avatar2} alt className="w-px-40 h-auto rounded-circle" />
                                                </div>
                                            </div>
                                            <Link className="flex-grow-1" to={'/instituteprofile'}>
                                                <span className="fw-semibold d-block">{institute?.name}</span>
                                                <small className="text-muted">Id : {userId}</small>
                                            </Link>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <div className="dropdown-divider"></div>
                                </li>
                                <li>
                                    <Link className="dropdown-item" to={'/instituteprofile'}>
                                        <i className="bx bx-user me-2"></i>
                                        <span className="align-middle">My Profile</span>
                                    </Link>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#">
                                        <i className="bx bx-cog me-2"></i>
                                        <span className="align-middle">Settings</span>
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#">
                                        <span className="d-flex align-items-center align-middle">
                                            <i className="flex-shrink-0 bx bx-credit-card me-2"></i>
                                            <span className="flex-grow-1 align-middle">Billing</span>
                                            <span className="flex-shrink-0 badge badge-center rounded-pill bg-danger w-px-20 h-px-20">4</span>
                                        </span>
                                    </a>
                                </li>
                                <li>
                                    <div className="dropdown-divider"></div>
                                </li>
                                <li>
                                    <Link className="dropdown-item" onClick={HandleLogOut}>
                                        <i className="bx bx-power-off me-2"></i>
                                        <a className="align-middle">Log Out</a>
                                    </Link>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar
