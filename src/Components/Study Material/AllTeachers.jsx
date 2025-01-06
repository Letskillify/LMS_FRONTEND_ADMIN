import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
function AllTeacher() {
  const [teacherData, setTeacherData] = useState([
    {
      id: "T849127",
      status: "Active",
      actions: [
        { label: "Edit", icon: "ti-edit-circle", link: "edit-teacher.html" },
        { label: "Delete", icon: "ti-trash-x", modal: "#delete-modal" },
      ],
      profile: {
        name: "Teresa",
        grade: "III A",
        avatar: "assets/img/teachers/teacher-01.jpg",
        email: "[email protected]",
        phone: "+1 82392 37359",
      },
      subject: "Physics",
      date: "28 Nov 2024",
      detailsLink: "teacher-details.html",
    },
    {
      id: "T849128",
      status: "Inactive",
      actions: [
        { label: "Edit", icon: "ti-edit-circle", link: "edit-teacher.html" },
        { label: "Delete", icon: "ti-trash-x", modal: "#delete-modal" },
      ],
      profile: {
        name: "Michael",
        grade: "II B",
        avatar: "assets/img/teachers/teacher-02.jpg",
        email: "[email protected]",
        phone: "+1 82392 12345",
      },
      subject: "Math",
      date: "11 Apr 2024",
      detailsLink: "teacher-details.html",
    },
    {
      id: "T849129",
      status: "Active",
      actions: [
        { label: "Edit", icon: "ti-edit-circle", link: "edit-teacher.html" },
        { label: "Delete", icon: "ti-trash-x", modal: "#delete-modal" },
      ],
      profile: {
        name: "Sophia",
        grade: "IV C",
        avatar: "assets/img/teachers/teacher-03.jpg",
        email: "[email protected]",
        phone: "+1 82392 56789",
      },
      subject: "Biology",
      date: "15 Apr 2024",
      detailsLink: "teacher-details.html",
    },
    {
      id: "T849130",
      status: "Active",
      actions: [
        { label: "Edit", icon: "ti-edit-circle", link: "edit-teacher.html" },
        { label: "Delete", icon: "ti-trash-x", modal: "#delete-modal" },
      ],
      profile: {
        name: "Ethan",
        grade: "I D",
        avatar: "assets/img/teachers/teacher-04.jpg",
        email: "[email protected]",
        phone: "+1 82392 98765",
      },
      subject: "History",
      date: "2 Nov 2023",
      detailsLink: "teacher-details.html",
    },
    {
      id: "T849131",
      status: "Inactive",
      actions: [
        { label: "Edit", icon: "ti-edit-circle", link: "edit-teacher.html" },
        { label: "Delete", icon: "ti-trash-x", modal: "#delete-modal" },
      ],
      profile: {
        name: "Olivia",
        grade: "II E",
        avatar: "assets/img/teachers/teacher-05.jpg",
        email: "[email protected]",
        phone: "+1 82392 24680",
      },
      subject: "English",
      date: "25 Dec 2023",
      detailsLink: "teacher-details.html",
    },
    {
      id: "T849132",
      status: "Active",
      actions: [
        { label: "Edit", icon: "ti-edit-circle", link: "edit-teacher.html" },
        { label: "Delete", icon: "ti-trash-x", modal: "#delete-modal" },
      ],
      profile: {
        name: "Liam",
        grade: "III F",
        avatar: "assets/img/teachers/teacher-06.jpg",
        email: "[email protected]",
        phone: "+1 82392 13579",
      },
      subject: "Chemistry",
      date: "2 Nov 2023",
      detailsLink: "teacher-details.html",
    },
    {
      id: "T849133",
      status: "Inactive",
      actions: [
        { label: "Edit", icon: "ti-edit-circle", link: "edit-teacher.html" },
        { label: "Delete", icon: "ti-trash-x", modal: "#delete-modal" },
      ],
      profile: {
        name: "Emma",
        grade: "I G",
        avatar: "assets/img/teachers/teacher-07.jpg",
        email: "[email protected]",
        phone: "+1 82392 97531",
      },
      subject: "Art",
      date: "18 Mar 2024",
      detailsLink: "teacher-details.html",
    },
    {
      id: "T849134",
      status: "Active",
      actions: [
        { label: "Edit", icon: "ti-edit-circle", link: "edit-teacher.html" },
        { label: "Delete", icon: "ti-trash-x", modal: "#delete-modal" },
      ],
      profile: {
        name: "Noah",
        grade: "V H",
        avatar: "assets/img/teachers/teacher-08.jpg",
        email: "[email protected]",
        phone: "+1 82392 86420",
      },
      subject: "Geography",
      date: "22 Mar 2024",
      detailsLink: "teacher-details.html",
    },
    {
      id: "T849135",
      status: "Inactive",
      actions: [
        { label: "Edit", icon: "ti-edit-circle", link: "edit-teacher.html" },
        { label: "Delete", icon: "ti-trash-x", modal: "#delete-modal" },
      ],
      profile: {
        name: "Ava",
        grade: "III I",
        avatar: "assets/img/teachers/teacher-09.jpg",
        email: "[email protected]",
        phone: "+1 82392 12321",
      },
      subject: "Computer Science",
      date: "15 Apr 2024",
      detailsLink: "teacher-details.html",
    },
    {
      id: "T849136",
      status: "Active",
      actions: [
        { label: "Edit", icon: "ti-edit-circle", link: "edit-teacher.html" },
        { label: "Delete", icon: "ti-trash-x", modal: "#delete-modal" },
      ],
      profile: {
        name: "Lucas",
        grade: "IV J",
        avatar: "assets/img/teachers/teacher-10.jpg",
        email: "[email protected]",
        phone: "+1 82392 34343",
      },
      subject: "Social Studies",
      date: "11 Apr 2024",
      detailsLink: "teacher-details.html",
    },
    {
      id: "T849137",
      status: "Inactive",
      actions: [
        { label: "Edit", icon: "ti-edit-circle", link: "edit-teacher.html" },
        { label: "Delete", icon: "ti-trash-x", modal: "#delete-modal" },
      ],
      profile: {
        name: "Mia",
        grade: "V K",
        avatar: "assets/img/teachers/teacher-07.jpg",
        email: "[email protected]",
        phone: "+1 82392 45454",
      },
      subject: "Economics",
      date: "28 Mar 2024",
      detailsLink: "teacher-details.html",
    },
    {
      id: "T849138",
      status: "Active",
      actions: [
        { label: "Edit", icon: "ti-edit-circle", link: "edit-teacher.html" },
        { label: "Delete", icon: "ti-trash-x", modal: "#delete-modal" },
      ],
      profile: {
        name: "Ella",
        grade: "III L",
        avatar: "assets/img/teachers/teacher-02.jpg",
        email: "[email protected]",
        phone: "+1 82392 56565",
      },
      subject: "Music",
      date: "28 feb 2024",
      detailsLink: "teacher-details.html",
    },
    {
      id: "T849134",
      status: "Active",
      actions: [
        { label: "Edit", icon: "ti-edit-circle", link: "edit-teacher.html" },
        { label: "Delete", icon: "ti-trash-x", modal: "#delete-modal" },
      ],
      profile: {
        name: "Noah",
        grade: "V H",
        avatar: "assets/img/teachers/teacher-08.jpg",
        email: "[email protected]",
        phone: "+1 82392 86420",
      },
      subject: "Geography",
      date: "22 Mar 2024",
      detailsLink: "teacher-details.html",
    },
    {
      id: "T849135",
      status: "Inactive",
      actions: [
        { label: "Edit", icon: "ti-edit-circle", link: "edit-teacher.html" },
        { label: "Delete", icon: "ti-trash-x", modal: "#delete-modal" },
      ],
      profile: {
        name: "Ava",
        grade: "III I",
        avatar: "assets/img/teachers/teacher-09.jpg",
        email: "[email protected]",
        phone: "+1 82392 12321",
      },
      subject: "Computer Science",
      date: "15 Apr 2024",
      detailsLink: "teacher-details.html",
    },
    {
      id: "T849136",
      status: "Active",
      actions: [
        { label: "Edit", icon: "ti-edit-circle", link: "edit-teacher.html" },
        { label: "Delete", icon: "ti-trash-x", modal: "#delete-modal" },
      ],
      profile: {
        name: "Lucas",
        grade: "IV J",
        avatar: "assets/img/teachers/teacher-10.jpg",
        email: "[email protected]",
        phone: "+1 82392 34343",
      },
      subject: "Social Studies",
      date: "11 Apr 2024",
      detailsLink: "teacher-details.html",
    },
    {
      id: "T849137",
      status: "Inactive",
      actions: [
        { label: "Edit", icon: "ti-edit-circle", link: "edit-teacher.html" },
        { label: "Delete", icon: "ti-trash-x", modal: "#delete-modal" },
      ],
      profile: {
        name: "Mia",
        grade: "V K",
        avatar: "assets/img/teachers/teacher-07.jpg",
        email: "[email protected]",
        phone: "+1 82392 45454",
      },
      subject: "Economics",
      date: "28 Mar 2024",
      detailsLink: "teacher-details.html",
    },
    {
      id: "T849138",
      status: "Active",
      actions: [
        { label: "Edit", icon: "ti-edit-circle", link: "edit-teacher.html" },
        { label: "Delete", icon: "ti-trash-x", modal: "#delete-modal" },
      ],
      profile: {
        name: "Ella",
        grade: "III L",
        avatar: "assets/img/teachers/teacher-02.jpg",
        email: "[email protected]",
        phone: "+1 82392 56565",
      },
      subject: "Music",
      date: "28 feb 2024",
      detailsLink: "teacher-details.html",
    },
    {
      id: "T849127",
      status: "Active",
      actions: [
        { label: "Edit", icon: "ti-edit-circle", link: "edit-teacher.html" },
        { label: "Delete", icon: "ti-trash-x", modal: "#delete-modal" },
      ],
      profile: {
        name: "Teresa",
        grade: "III A",
        avatar: "assets/img/teachers/teacher-01.jpg",
        email: "[email protected]",
        phone: "+1 82392 37359",
      },
      subject: "Physics",
      date: "28 Mar 2024",
      detailsLink: "teacher-details.html",
    },
  ]);

  const [visibleTeachers, setVisibleTeachers] = useState(9);
  const [sortBy, setSortBy] = useState("Sort by A-Z");
  const [gridList, setGridList] = useState("Grid");
  const [find, setFind] = useState("");
  const [classdropdown, setClassDropDown] = useState("");
  console.log(classdropdown);

  const loadMoreTeachers = () => {
    setVisibleTeachers((prevCount) => prevCount + 3);
  };

  const sortData = (option) => {
    console.log("Sorting option:", option);
    let sortedData = [];
    switch (option) {
      case "Ascending":
        sortedData = [...teacherData].sort((a, b) =>
          a.profile.name.localeCompare(b.profile.name)
        );
        break;
      case "Descending":
        sortedData = [...teacherData].sort((a, b) =>
          b.profile.name.localeCompare(a.profile.name)
        );
        break;
      case "Recently Added":
        sortedData = [...teacherData].sort(
          (a, b) => new Date(b.date) - new Date(a.date)
        );
        break;
      default:
        sortedData = teacherData;
        break;
    }
    console.log("Sorted Data:", sortedData);
    setFilteredData(sortedData);
  };

  const handleSortChange = (option) => {
    setSortBy(option);
    sortData(option);
  };

  // Filter select or search bar

  const [filteredData, setFilteredData] = useState(teacherData);

  const applyFilter = (e) => {
    e.preventDefault();
    const newFilteredData = teacherData.filter((teacher) => {
      const matchesName = teacher.profile.name
        .toLowerCase()
        .includes(find.toLowerCase());

      const matchesClass =
        !classdropdown ||
        teacher.profile.grade
          .toLowerCase()
          .includes(classdropdown.toLowerCase());

      return matchesName && matchesClass;
    });

    setFilteredData(newFilteredData);
  };
  const resetFilters = (e) => {
    e.preventDefault();
    setFind("");
    setClassDropDown("");
    setFilteredData(teacherData);
  };

  function refreshBtn() {
    window.location.reload(true);
  }
  return (
    <>
      {/* Main Wrapper */}
      <div className="main-wrapper container mt-5">
        {/* Page Wrapper */}
        <div className="page-wrapper">
          <div className="content content-two">
            {/* Page Header */}
            <div className="d-md-flex d-block align-items-center justify-content-between mb-3">
              <div className="my-auto mb-2">
                <h3 className="page-title mb-1">Teachers </h3>
                <nav>
                  <ol className="breadcrumb mb-0">
                    <li className="breadcrumb-item">
                      <Link to="/">Dashboard</Link>
                    </li>
                    {/* <li className="breadcrumb-item">Peoples</li> */}
                    <li className="breadcrumb-item active" aria-current="page">
                      Teachers
                    </li>
                  </ol>
                </nav>
              </div>
              <div className="d-flex my-xl-auto right-content align-items-center flex-wrap">
                <div className="pe-1 mb-2">
                  <p
                    onClick={refreshBtn}
                    className="btn btn-outline-light bg-white btn-icon me-1"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    aria-label="Refresh"
                    data-bs-original-title="Refresh"
                  >
                    <i className="ti ti-refresh" />
                  </p>
                </div>
              </div>
            </div>
            {/* /Page Header */}

            {/* Teacher Grid Second Header */}
            <div className="bg-white p-3 border rounded-1 d-flex align-items-center justify-content-between flex-wrap mb-4 pb-0">
              <h4 className="mb-3">Teachers {gridList}</h4>
              <div className="d-flex align-items-center flex-wrap">
                <div className="dropdown mb-3 me-2">
                  <a
                    href="javascript:void(0);"
                    className="btn btn-outline-light bg-white dropdown-toggle"
                    data-bs-toggle="dropdown"
                    data-bs-auto-close="outside"
                  >
                    <i className="ti ti-filter me-2" />
                    Filter
                  </a>
                  <div className="dropdown-menu drop-width">
                    <form>
                      <div className="d-flex align-items-center border-bottom p-3">
                        <h4>Filter</h4>
                      </div>
                      <div className="p-3 pb-0 border-bottom">
                        <div className="row align-items-center">
                          <div className="col-md-7 pe-0">
                            <div className="mb-3">
                              <label className="form-label me-2">Name</label>
                              <input
                                type="search"
                                placeholder="Search Name"
                                className="w-75 p-1 border rounded"
                                onChange={(e) => setFind(e.target.value)}
                              />
                            </div>
                          </div>
                          <div className="col-md-5 ps-0">
                            <div className="mb-3">
                              <label className="form-label me-2 ms-2 ">
                                Class
                              </label>
                              <select
                                className="select p-1 border rounded"
                                onChange={(e) =>
                                  setClassDropDown(e.target.value)
                                }
                              >
                                <option>Select</option>
                                <option>III A</option>
                                <option>II (A)</option>
                                <option>VI (A)</option>
                              </select>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="p-3 d-flex align-items-center justify-content-end">
                        <button
                          className="btn btn-light me-3"
                          onClick={resetFilters}
                        >
                          Reset
                        </button>
                        <button
                          className="btn btn-primary"
                          onClick={applyFilter}
                        >
                          Apply
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="d-flex align-items-center bg-white border rounded-2 p-1 mb-3 me-2">
                  {/* Grid & List Button */}
                  <button
                    className="btn btn-icon btn-sm me-1 bg-light primary-hover"
                    onClick={() => setGridList("List")}
                  >
                    <i className="ti ti-list-tree" />
                  </button>
                  <button
                    className="btn btn-icon btn-sm primary-hover"
                    onClick={() => setGridList("Grid")}
                  >
                    <i className="ti ti-grid-dots" />
                  </button>
                  {/* Grid & List Button */}
                </div>
                <div className="dropdown mb-3">
                  <a
                    className="btn btn-outline-light bg-white dropdown-toggle"
                    data-bs-toggle="dropdown"
                  >
                    <i className="ti ti-sort-ascending-2 me-2" />
                    {sortBy}
                  </a>
                  <ul className="dropdown-menu p-3">
                    <li>
                      <p
                        className={`dropdown-item rounded-1 ${
                          sortBy === "Ascending" ? "active" : ""
                        }`}
                        onClick={() => handleSortChange("Ascending")}
                      >
                        Ascending
                      </p>
                    </li>
                    <li>
                      <p
                        className={`dropdown-item rounded-1 ${
                          sortBy === "Descending" ? "active" : ""
                        }`}
                        onClick={() => handleSortChange("Descending")}
                      >
                        Descending
                      </p>
                    </li>
                    <li>
                      <p
                        className={`dropdown-item rounded-1 ${
                          sortBy === "Recently Added" ? "active" : ""
                        }`}
                        onClick={() => handleSortChange("Recently Added")}
                      >
                        Recently Added
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* Teacher Grid Second Header */}

            <div className="row">
              {/* Teacher Grid */}
              {filteredData.slice(0, visibleTeachers).map((teacher) => (
                <div
                  className={`col-xxl-4 col-xl-4 col-md-6 d-flex ${
                    gridList === "Grid" ? "d-initial" : "d-none"
                  }`}
                  key={teacher.id}
                >
                  <div className="card flex-fill">
                    <div className="card-header d-flex align-items-center justify-content-between">
                      <a href={teacher.detailsLink} className="link-primary">
                        {teacher.id}
                      </a>
                      <div className="d-flex align-items-center">
                        <span
                          className={`badge badge-soft-${
                            teacher.status === "Active" ? "success" : "danger"
                          }`}
                        >
                          {teacher.status}
                        </span>
                        <div className="dropdown">
                          <a
                            href="#"
                            className="btn btn-white btn-icon btn-sm d-flex align-items-center justify-content-center rounded-circle p-0"
                            data-bs-toggle="dropdown"
                          >
                            <i className="ti ti-dots-vertical fs-14" />
                          </a>
                          <ul className="dropdown-menu dropdown-menu-right p-3">
                            {teacher.actions.map((action, index) => (
                              <li key={index}>
                                <a
                                  className="dropdown-item rounded-1"
                                  href={action.link}
                                  data-bs-toggle={action.modal ? "modal" : ""}
                                  data-bs-target={action.modal || ""}
                                >
                                  <i className={`${action.icon} me-2`} />
                                  {action.label}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="card-body">
                      <div className="bg-light-300 rounded-2 p-3 mb-3">
                        <div className="d-flex align-items-center">
                          <a
                            href={teacher.detailsLink}
                            className="avatar avatar-lg flex-shrink-0"
                          >
                            <img
                              src={teacher.profile.avatar}
                              className="img-fluid rounded-circle"
                              alt={teacher.profile.name}
                            />
                          </a>
                          <div className="ms-2">
                            <h6 className="text-dark text-truncate mb-0">
                              <a href={teacher.detailsLink}>
                                {teacher.profile.name}
                              </a>
                            </h6>
                            <p>{teacher.profile.grade}</p>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div className="mb-2">
                          <p className="mb-0">Email</p>
                          <p className="text-dark">
                            <a href={`mailto:${teacher.profile.email}`}>
                              {teacher.profile.email}
                            </a>
                          </p>
                        </div>
                        <div>
                          <p className="mb-0">Phone</p>
                          <p className="text-dark">{teacher.profile.phone}</p>
                        </div>
                      </div>
                    </div>
                    <div className="card-footer d-flex align-items-center justify-content-between">
                      <span className="badge badge-soft-primary">
                        {teacher.subject}
                      </span>
                      <a
                        href={teacher.detailsLink}
                        className="btn btn-light btn-sm"
                      >
                        View Details
                      </a>
                    </div>
                  </div>
                </div>
              ))}
              {/* /Teacher Grid */}

              {/* List */}
              <div
                className={`card-body p-0 py-3  ${
                  gridList === "List" ? "d-initial" : "d-none"
                }`}
              >
                {/* Student List */}
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
                        <th>Name</th>
                        <th>Class </th>
                        <th>Subject</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Date of Join</th>
                        <th>Status</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredData.slice(0, visibleTeachers).map((teacher) => (
                        <tr key={teacher.id}>
                          <td>
                            <div className="form-check form-check-md">
                              <input
                                className="form-check-input"
                                type="checkbox"
                              />
                            </div>
                          </td>
                          <td>
                            <a
                              href="teacher-details.html"
                              className="link-primary"
                            >
                              {teacher.id}
                            </a>
                          </td>
                          <td>
                            <div className="d-flex align-items-center">
                              <a
                                href="teacher-details.html"
                                className="avatar avatar-md"
                              >
                                <img
                                  src={teacher.profile.avatar}
                                  className="img-fluid rounded-circle"
                                  alt={teacher.profile.name}
                                />
                              </a>
                              <div className="ms-2">
                                <p className="text-dark mb-0">
                                  <a href="teacher-details.html">
                                    {teacher.profile.name}
                                  </a>
                                </p>
                              </div>
                            </div>
                          </td>
                          <td>{teacher.profile.grade}</td>
                          <td>{teacher.subject}</td>
                          <td>
                            <a
                              href={`mailto:${teacher.profile.email}`}
                              className="__cf_email__"
                              data-cfemail={`3551545b5c505975504d54584559501b565a58`}
                            >
                              {teacher.profile.email}
                            </a>
                          </td>
                          <td>{teacher.profile.phone}</td>
                          <td>{teacher.date}</td>
                          <td>
                            <span
                              className={`badge badge-soft-${
                                teacher.status === "Active"
                                  ? "success"
                                  : "danger"
                              } d-inline-flex align-items-center`}
                            >
                              <i className="ti ti-circle-filled fs-5 me-1" />
                              {teacher.status}
                            </span>
                          </td>
                          <td>
                            <div className="d-flex align-items-center">
                              <div className="dropdown">
                                <a
                                  href="index.htm#"
                                  className="btn btn-white btn-icon btn-sm d-flex align-items-center justify-content-center rounded-circle p-0"
                                  data-bs-toggle="dropdown"
                                  aria-expanded="false"
                                >
                                  <i className="ti ti-dots-vertical fs-14" />
                                </a>
                                <ul className="dropdown-menu dropdown-menu-right p-3">
                                  <li>
                                    <a
                                      className="dropdown-item rounded-1"
                                      href="teacher-details.html"
                                    >
                                      <i className="ti ti-menu me-2" />
                                      View Teacher
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      className="dropdown-item rounded-1"
                                      href="edit-teacher.html"
                                    >
                                      <i className="ti ti-edit-circle me-2" />
                                      Edit
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      className="dropdown-item rounded-1"
                                      href="javascript:void(0);"
                                      data-bs-toggle="modal"
                                      data-bs-target="#login_detail"
                                    >
                                      <i className="ti ti-lock me-2" />
                                      Login Details
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      className="dropdown-item rounded-1"
                                      href="javascript:void(0);"
                                    >
                                      <i className="ti ti-toggle-right me-2" />
                                      Disable
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
                                </ul>
                              </div>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                {/* /Student List */}
              </div>
              {/* List */}
            </div>

            {/* Load More Button */}
            {visibleTeachers < teacherData.length && (
              <div className="text-center">
                <button
                  onClick={loadMoreTeachers}
                  className="btn btn-primary d-inline-flex align-items-center"
                >
                  <i className="ti ti-loader-3 me-2" />
                  Load More
                </button>
              </div>
            )}

            {/* Load More Button */}
          </div>
        </div>
        {/* /Page Wrapper */}

        {/* Delete Modal */}
        <div className="modal fade" id="delete-modal">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <form action="parent-grid.html">
                <div className="modal-body text-center">
                  <span className="delete-icon">
                    <i className="ti ti-trash-x" />
                  </span>
                  <h4>Confirm Deletion</h4>
                  <p>
                    You want to delete all the marked items, this cant be undone
                    once you delete.
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
      </div>
      {/* /Main Wrapper */}
      {/* jQuery */}
      {/* Bootstrap Core JS */}
      {/* Daterangepikcer JS */}
      {/* Feather Icon JS */}
      {/* Slimscroll JS */}
      {/* Datatable JS */}
      {/* Select2 JS */}
      {/* Custom JS */}
    </>
  );
}
export default AllTeacher;
