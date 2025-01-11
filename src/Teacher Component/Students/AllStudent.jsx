import { useFormik } from 'formik';
import jsPDF from 'jspdf';
import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom';
import * as XLSX from 'xlsx';

const AllStudent = () => {
    const [Visibledata, setVisibledata] = useState(5)
    const [filteredData, setFilteredData] = useState(null);
    const [sortBy, setSortBy] = useState('Ascending');
    const [grid, setgrid] = useState(true)
    const [students, setStudents] = useState([
        {
            id: "AD9892434",
            name: "Abhay",
            class: "I",
            section: "B",
            rollNo: "35013",
            gender: "male",
            joinedOn: "10 Jan 2015",
            status: "Inactive",
            avatar: "assets/img/students/student-01.jpg",
        },
        {
            id: "AD9892434",
            name: "Janet Daniel",
            class: "III",
            section: "A",
            rollNo: "35013",
            gender: "Female",
            joinedOn: "10 Jan 2015",
            status: "Active",
            avatar: "assets/img/students/student-01.jpg",
        },
        {
            id: "AD9892434",
            name: "Janet Daniel",
            class: "III",
            section: "A",
            rollNo: "35013",
            gender: "Female",
            joinedOn: "10 Jan 2015",
            status: "Active",
            avatar: "assets/img/students/student-01.jpg",
        },
        {
            id: "AD9892434",
            name: "Janet Daniel",
            class: "III",
            section: "A",
            rollNo: "35013",
            gender: "Female",
            joinedOn: "10 Jan 2015",
            status: "Active",
            avatar: "assets/img/students/student-01.jpg",
        },
        {
            id: "AD9892434",
            name: "Janet Daniel",
            class: "III",
            section: "A",
            rollNo: "35013",
            gender: "Female",
            joinedOn: "10 Jan 2015",
            status: "Active",
            avatar: "assets/img/students/student-01.jpg",
        },
        {
            id: "AD9892434",
            name: "Janet Daniel",
            class: "III",
            section: "A",
            rollNo: "35013",
            gender: "Female",
            joinedOn: "10 Jan 2015",
            status: "Active",
            avatar: "assets/img/students/student-01.jpg",
        },
        {
            id: "AD9892434",
            name: "Janet Daniel",
            class: "III",
            section: "A",
            rollNo: "35013",
            gender: "Female",
            joinedOn: "10 Jan 2015",
            status: "Active",
            avatar: "assets/img/students/student-01.jpg",
        },
        {
            id: "AD9892434",
            name: "Janet Daniel",
            class: "III",
            section: "A",
            rollNo: "35013",
            gender: "Female",
            joinedOn: "10 Jan 2015",
            status: "Active",
            avatar: "assets/img/students/student-01.jpg",
        },
        {
            id: "AD9892434",
            name: "Janet Daniel",
            class: "III",
            section: "A",
            rollNo: "35013",
            gender: "Female",
            joinedOn: "10 Jan 2024",
            status: "Active",
            avatar: "assets/img/students/student-01.jpg",
        },
        {
            id: "AD9892434",
            name: "Janet Daniel",
            class: "III",
            section: "A",
            rollNo: "35013",
            gender: "Female",
            joinedOn: "10 Jan 2024",
            status: "Active",
            avatar: "assets/img/students/student-01.jpg",
        },
        {
            id: "AD9892434",
            name: "Janet Daniel",
            class: "III",
            section: "A",
            rollNo: "35013",
            gender: "Female",
            joinedOn: "10 Jan 2024",
            status: "Active",
            avatar: "assets/img/students/student-01.jpg",
        },
        {
            id: "AD9892434",
            name: "Janet Daniel",
            class: "III",
            section: "A",
            rollNo: "35013",
            gender: "Female",
            joinedOn: "10 Jan 2024",
            status: "Active",
            avatar: "assets/img/students/student-01.jpg",
        },
        {
            id: "AD9892434",
            name: "Janet Daniel",
            class: "III",
            section: "A",
            rollNo: "35013",
            gender: "Female",
            joinedOn: "10 Jan 2024",
            status: "Active",
            avatar: "assets/img/students/student-01.jpg",
        },
        {
            id: "AD9892434",
            name: "Janet Daniel",
            class: "III",
            section: "A",
            rollNo: "35013",
            gender: "Female",
            joinedOn: "10 Jan 2024",
            status: "Active",
            avatar: "assets/img/students/student-01.jpg",
        },
        {
            id: "AD9892434",
            name: "Janet Daniel",
            class: "III",
            section: "A",
            rollNo: "35013",
            gender: "Female",
            joinedOn: "10 Jan 2024",
            status: "Active",
            avatar: "assets/img/students/student-01.jpg",
        },
        {
            id: "AD9892434",
            name: "Janet Daniel",
            class: "III",
            section: "A",
            rollNo: "35013",
            gender: "Female",
            joinedOn: "10 Jan 2024",
            status: "Active",
            avatar: "assets/img/students/student-01.jpg",
        },
        {
            id: "AD9892434",
            name: "Janet Daniel",
            class: "III",
            section: "A",
            rollNo: "35013",
            gender: "Female",
            joinedOn: "10 Jan 2024",
            status: "Active",
            avatar: "assets/img/students/student-01.jpg",
        },
        {
            id: "AD9892434",
            name: "Janet Daniel",
            class: "III",
            section: "A",
            rollNo: "35013",
            gender: "Female",
            joinedOn: "10 Jan 2024",
            status: "Active",
            avatar: "assets/img/students/student-01.jpg",
        },
        {
            id: "AD9892434",
            name: "Janet Daniel",
            class: "III",
            section: "A",
            rollNo: "35013",
            gender: "Female",
            joinedOn: "10 Jan 2024",
            status: "Active",
            avatar: "assets/img/students/student-01.jpg",
        },
        {
            id: "AD9892434",
            name: "Janet Daniel",
            class: "III",
            section: "A",
            rollNo: "35013",
            gender: "Female",
            joinedOn: "10 Jan 2024",
            status: "Active",
            avatar: "assets/img/students/student-01.jpg",
        },
        {
            id: "AD9892434",
            name: "Janet Daniel",
            class: "III",
            section: "A",
            rollNo: "35013",
            gender: "Female",
            joinedOn: "10 Jan 2024",
            status: "Active",
            avatar: "assets/img/students/student-01.jpg",
        },
        {
            id: "AD9892434",
            name: "Janet Daniel",
            class: "III",
            section: "A",
            rollNo: "35013",
            gender: "Female",
            joinedOn: "10 Jan 2024",
            status: "Active",
            avatar: "assets/img/students/student-01.jpg",
        },
        {
            id: "AD9892434",
            name: "Janet Daniel",
            class: "III",
            section: "A",
            rollNo: "35013",
            gender: "Female",
            joinedOn: "10 Jan 2024",
            status: "Active",
            avatar: "assets/img/students/student-01.jpg",
        },
        {
            id: "AD9892434",
            name: "Janet Daniel",
            class: "III",
            section: "A",
            rollNo: "35013",
            gender: "Female",
            joinedOn: "10 Jan 2024",
            status: "Active",
            avatar: "assets/img/students/student-01.jpg",
        },
        {
            id: "AD9892434",
            name: "Janet Daniel",
            class: "III",
            section: "A",
            rollNo: "35013",
            gender: "Female",
            joinedOn: "10 Jan 2024",
            status: "Active",
            avatar: "assets/img/students/student-01.jpg",
        },
        {
            id: "AD9892434",
            name: "Janet Daniel",
            class: "III",
            section: "A",
            rollNo: "35013",
            gender: "Female",
            joinedOn: "10 Jan 2024",
            status: "Active",
            avatar: "assets/img/students/student-01.jpg",
        },
        {
            id: "AD9892434",
            name: "Janet Daniel",
            class: "III",
            section: "A",
            rollNo: "35013",
            gender: "Female",
            joinedOn: "10 Jan 2024",
            status: "Active",
            avatar: "assets/img/students/student-01.jpg",
        },
        {
            id: "AD9892434",
            name: "Janet Daniel",
            class: "III",
            section: "A",
            rollNo: "35013",
            gender: "Female",
            joinedOn: "10 Jan 2024",
            status: "Active",
            avatar: "assets/img/students/student-01.jpg",
        },
        {
            id: "AD9892434",
            name: "Janet Daniel",
            class: "III",
            section: "A",
            rollNo: "35013",
            gender: "Female",
            joinedOn: "10 Jan 2024",
            status: "Active",
            avatar: "assets/img/students/student-01.jpg",
        },
        {
            id: "AD9892434",
            name: "Janet Daniel",
            class: "III",
            section: "A",
            rollNo: "35013",
            gender: "Female",
            joinedOn: "10 Jan 2024",
            status: "Active",
            avatar: "assets/img/students/student-01.jpg",
        },
        {
            id: "AD9892434",
            name: "Janet Daniel",
            class: "III",
            section: "A",
            rollNo: "35013",
            gender: "Female",
            joinedOn: "10 Jan 2024",
            status: "Active",
            avatar: "assets/img/students/student-01.jpg",
        },
        {
            id: "AD9892434",
            name: "Janet Daniel",
            class: "III",
            section: "A",
            rollNo: "35013",
            gender: "Female",
            joinedOn: "10 Jan 2024",
            status: "Active",
            avatar: "assets/img/students/student-01.jpg",
        },
        {
            id: "AD9892434",
            name: "Janet Daniel",
            class: "III",
            section: "A",
            rollNo: "35013",
            gender: "Female",
            joinedOn: "10 Jan 2024",
            status: "Active",
            avatar: "assets/img/students/student-01.jpg",
        },
        {
            id: "AD9892434",
            name: "Janet Daniel",
            class: "III",
            section: "A",
            rollNo: "35013",
            gender: "Female",
            joinedOn: "10 Jan 2024",
            status: "Active",
            avatar: "assets/img/students/student-01.jpg",
        },
        {
            id: "AD9892434",
            name: "Janet Daniel",
            class: "III",
            section: "A",
            rollNo: "35013",
            gender: "Female",
            joinedOn: "10 Jan 2024",
            status: "Active",
            avatar: "assets/img/students/student-01.jpg",
        },
        {
            id: "AD9892434",
            name: "Janet Daniel",
            class: "III",
            section: "A",
            rollNo: "35013",
            gender: "Female",
            joinedOn: "10 Jan 2024",
            status: "Active",
            avatar: "assets/img/students/student-01.jpg",
        },
        {
            id: "AD9892434",
            name: "Janet Daniel",
            class: "III",
            section: "A",
            rollNo: "35013",
            gender: "Female",
            joinedOn: "10 Jan 2024",
            status: "Active",
            avatar: "assets/img/students/student-01.jpg",
        },
    ])

    // Load More Logic
    const HandleLoad = () => {
        setVisibledata(prevVisible => prevVisible + 5 )
    }


    // Print Logic
    const handlePrint = () => {
        const printWindow = window.open('', '', 'height=400,width=800');
        printWindow.document.write('<html><head><title>Print Student Data</title></head><body>');

        // Create a table for student data
        printWindow.document.write('<table border="1" cellpadding="10"><thead><tr><th>Id</th><th>Name</th><th>Class</th><th>Section</th><th>Roll No</th><th>Status</th></tr></thead><tbody>');
        students.forEach((student) => {
            printWindow.document.write(`<tr><td>${student.id}</td><td>${student.name}</td><td>${student.class}</td><td>${student.section}</td><td>${student.rollNo}</td><td>${student.status}</td></tr>`);
        });
        printWindow.document.write('</tbody></table>');

        printWindow.document.write('</body></html>');
        printWindow.document.close();
        printWindow.print();
    };

    // Print PDF Data Logic

    const printPDF = () => {
        const doc = new jsPDF();

        doc.setFontSize(16);
        doc.text('All Student Data', 20, 20);

        doc.setFontSize(7);
        let yPosition = 30;

        students.forEach((student, index) => {
            doc.text(`Name: ${student.name}`, 10, yPosition);
            doc.text(`Class: ${student.class}`, 40, yPosition);
            doc.text(`Section: ${student.section}`, 65, yPosition);
            doc.text(`Roll No: ${student.rollNo}`, 90, yPosition);
            doc.text(`Gender: ${student.gender}`, 120, yPosition);
            doc.text(`Joined On: ${student.joinedOn}`, 150, yPosition);
            doc.text(`Status: ${student.status}`, 190, yPosition);

            yPosition += 10;

            if (yPosition > 280) {
                doc.addPage();
                yPosition = 20;
            }
        });

        doc.save('student_data.pdf');
    };


    // Print Excel Data Logic

    const exportToExcel = () => {
        const wsData = students.map((student) => ({
            Name: student.name,
            Class: student.class,
            Section: student.section,
            RollNo: student.rollNo,
            Gender: student.gender,
            JoinedOn: student.joinedOn,
            Status: student.status,
        }));

        const ws = XLSX.utils.json_to_sheet(wsData);

        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, 'Students');

        XLSX.writeFile(wb, 'student_data.xlsx');
    };




    // Reload Logic 

    const HandleReload = () => {
        window.location.reload()
    }


    // Sortby Data Filter logic

    const sortData = (option) => {
        let sortedData = [];
        switch (option) {
            case 'Ascending':
                sortedData = [...students].sort((a, b) => a.name.localeCompare(b.name));
                break;
            case 'Descending':
                sortedData = [...students].sort((a, b) => b.name.localeCompare(a.name));
                break;
            case 'Recently Added':
                sortedData = [...students].sort((a, b) => new Date(b.joinedOn) - new Date(a.joinedOn));
                break;
            default:
                sortedData = students;
                break;
        }
        setStudents(sortedData);
    };

    const handleSortChange = (option) => {
        setSortBy(option);
        sortData(option);
    };


    // filter Data Logic 

    const Showbtn = useRef()
    const formik = useFormik({
        initialValues: {
            class: "",
            section: "",
            name: "",
            gender: "",
            status: "",
        },
        onSubmit: (values) => {
            const filtered = students.filter((student) => {
                return (
                    (!values.class || student.class === values.class) &&
                    (!values.section || student.section === values.section) &&
                    (!values.name || student.name === values.name) &&
                    (!values.gender || student.gender === values.gender) &&
                    (!values.status || student.status === values.status)
                );
            });

            setFilteredData(filtered);

            if (Showbtn.current) {
                Showbtn.current.classList.remove("show");
            }
        },
        onReset: () => {
            setFilteredData(students);
        },
    });
    return (
        <>
            <>
                <div className="page-wrapper">
                    <div className="content content-two">
                        {/* Page Header */}
                        <div className="d-md-flex d-block align-items-center justify-content-between mb-3">
                            <div className="my-auto mb-2">
                                <h3 className="page-title mb-1">Students</h3>
                                <nav>
                                    <ol className="breadcrumb mb-0">
                                        <li className="breadcrumb-item">
                                            <a href="index.html">Dashboard</a>
                                        </li>
                                        <li className="breadcrumb-item">Peoples</li>
                                        <li className="breadcrumb-item active" aria-current="page">
                                            Students Grid
                                        </li>
                                    </ol>
                                </nav>
                            </div>
                            <div className="d-flex my-xl-auto right-content align-items-center flex-wrap">
                                <div className="pe-1 mb-2">
                                    <Link
                                        className="btn btn-outline-light bg-white btn-icon me-1"
                                        onClick={HandleReload}
                                    >
                                        <i className="ti ti-refresh" />
                                    </Link>
                                </div>
                                <div className="pe-1 mb-2">
                                    <button
                                        type="button"
                                        className="btn btn-outline-light bg-white btn-icon me-1"
                                        data-bs-toggle="tooltip"
                                        data-bs-placement="top"
                                        aria-label="Print"
                                        data-bs-original-title="Print"
                                        onClick={handlePrint}
                                    >
                                        <i className="ti ti-printer" />
                                    </button>
                                </div>
                                <div className="dropdown me-2 mb-2">
                                    <Link
                                    
                                        className="dropdown-toggle btn btn-light fw-medium d-inline-flex align-items-center"
                                        data-bs-toggle="dropdown"
                                    >
                                        <i className="ti ti-file-export me-2" />
                                        Export
                                    </Link>
                                    <ul className="dropdown-menu  dropdown-menu-end p-3">
                                        <li>
                                            <Link
                                                className="dropdown-item rounded-1"
                                                onClick={printPDF}
                                            >
                                                <i className="ti ti-file-type-pdf me-2" />
                                                Export as PDF
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                onClick={exportToExcel}
                                                className="dropdown-item rounded-1"
                                            >
                                                <i className="ti ti-file-type-xls me-2" />
                                                Export as Excel{" "}
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className="mb-2">
                                    <a
                                        href="add-student.html"
                                        className="btn btn-primary d-flex align-items-center"
                                    >
                                        <i className="ti ti-square-rounded-plus me-2" />
                                        Add Student
                                    </a>
                                </div>
                            </div>
                        </div>
                        {/* /Page Header */}
                        {/* Filter */}
                        <div className="bg-white p-3 border rounded-1 d-flex align-items-center justify-content-between flex-wrap mb-4 pb-0">
                            <h4 className="mb-3">Students Grid</h4>
                            <div className="d-flex align-items-center flex-wrap">
                                <div className="dropdown mb-3 me-2">
                                    <a
                                        className="btn btn-outline-light bg-white dropdown-toggle"
                                        data-bs-toggle="dropdown"
                                        data-bs-auto-close="outside"
                                    >
                                        <i className="ti ti-filter me-2" />
                                        Filter
                                    </a>
                                    <div className="dropdown-menu drop-width" ref={Showbtn}>
                                        <form onSubmit={formik.handleSubmit} onReset={formik.handleReset}>
                                            <div className="d-flex align-items-center border-bottom p-3">
                                                <h4>Filter</h4>
                                            </div>
                                            <div className="p-3 pb-0 border-bottom">
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <div className="mb-3">
                                                            <label className="form-label">Class</label>
                                                            <select
                                                                className="form-select"
                                                                name="class"
                                                                value={formik.values.class}
                                                                onChange={formik.handleChange}
                                                            >
                                                                <option value="">Select</option>
                                                                <option value="I">I</option>
                                                                <option value="II">II</option>
                                                                <option value="III">III</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="mb-3">
                                                            <label className="form-label">Section</label>
                                                            <select
                                                                className="form-select"
                                                                name="section"
                                                                value={formik.values.section}
                                                                onChange={formik.handleChange}
                                                            >
                                                                <option value="">Select</option>
                                                                <option value="A">A</option>
                                                                <option value="B">B</option>
                                                                <option value="C">C</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12">
                                                        <div className="mb-3">
                                                            <label className="form-label">Name</label>
                                                            <select
                                                                className="form-select"
                                                                name="name"
                                                                value={formik.values.name}
                                                                onChange={formik.handleChange}
                                                            >
                                                                <option value="">Select</option>
                                                                <option value="Janet">Janet</option>
                                                                <option value="Joann">Joann</option>
                                                                <option value="Kathleen">Kathleen</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="mb-3">
                                                            <label className="form-label">Gender</label>
                                                            <select
                                                                className="form-select"
                                                                name="gender"
                                                                value={formik.values.gender}
                                                                onChange={formik.handleChange}
                                                            >
                                                                <option value="">Select</option>
                                                                <option value="Male">Male</option>
                                                                <option value="Female">Female</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="mb-3">
                                                            <label className="form-label">Status</label>
                                                            <select
                                                                className="form-select"
                                                                name="status"
                                                                value={formik.values.status}
                                                                onChange={formik.handleChange}
                                                            >
                                                                <option value="">Select</option>
                                                                <option value="Active">Active</option>
                                                                <option value="Inactive">Inactive</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="p-3 d-flex align-items-center justify-content-end">
                                                <button type="reset" className="btn btn-light me-3">
                                                    Reset
                                                </button>
                                                <button type="submit" className="btn btn-primary" >
                                                    Apply
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center bg-white border rounded-2 p-1 mb-3 me-2">
                                    <Link
                                        className={`btn btn-icon btn-sm me-1 primary-hover ${grid ? 'bg-light' : 'active'}`}
                                        onClick={() => setgrid(false)}
                                    >
                                        <i className="ti ti-list-tree" />
                                    </Link>
                                    <Link
                                        className={`btn btn-icon btn-sm primary-hover ${grid ? 'active' : 'bg-light'}`}
                                        onClick={() => setgrid(true)}
                                    >
                                        <i className="ti ti-grid-dots" />
                                    </Link>
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
                                            <a
                                                className={`dropdown-item rounded-1 ${sortBy === 'Ascending' ? 'active' : ''}`}
                                                onClick={() => handleSortChange('Ascending')}
                                            >
                                                Ascending
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                className={`dropdown-item rounded-1 ${sortBy === 'Descending' ? 'active' : ''}`}
                                                onClick={() => handleSortChange('Descending')}
                                            >
                                                Descending
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                className={`dropdown-item rounded-1 ${sortBy === 'Recently Added' ? 'active' : ''}`}
                                                onClick={() => handleSortChange('Recently Added')}
                                            >
                                                Recently Added
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/* /Filter */}
                        {grid ? <div className="row">
                            {/* Student Grid */}
                            {(filteredData || students).slice(0, Visibledata).map((student, i) => (
                                <div className="col-xxl-3 col-xl-4 col-md-6 d-flex">
                                    <div className="card flex-fill">
                                        <div className="card-header d-flex align-items-center justify-content-between">
                                            <a href="student-details.html" className="link-primary">
                                                {student.id}
                                            </a>
                                            <div className="d-flex align-items-center">
                                                <div className="d-flex align-items-center">
                                                    <span
                                                        className={`badge ${student.status === "Active"
                                                            ? "badge-soft-success"
                                                            : "badge-soft-danger"
                                                            } d-inline-flex align-items-center me-1`}
                                                    >
                                                        <i className="ti ti-circle-filled fs-5 me-1" />
                                                        {student.status}
                                                    </span>
                                                </div>
                                                <div className="dropdown">
                                                    <a
                                                        href="#"
                                                        className="btn btn-white btn-icon btn-sm d-flex align-items-center justify-content-center rounded-circle p-0"
                                                        data-bs-toggle="dropdown"
                                                        aria-expanded="false"
                                                    >
                                                        <i className="ti ti-dots-vertical fs-14" />
                                                    </a>
                                                    <ul className="dropdown-menu dropdown-menu-right p-3" style={{}}>
                                                        <li>
                                                            <a
                                                                className="dropdown-item rounded-1"
                                                                href="student-details.html"
                                                            >
                                                                <i className="ti ti-menu me-2" />
                                                                View Student
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a className="dropdown-item rounded-1" href="edit-student.html">
                                                                <i className="ti ti-edit-circle me-2" />
                                                                Edit
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a
                                                                className="dropdown-item rounded-1"
                                                                href="student-promotion.html"
                                                            >
                                                                <i className="ti ti-arrow-ramp-right-2 me-2" />
                                                                Promote Student
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a
                                                                className="dropdown-item rounded-1"
                                                                href="#"
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
                                        </div>
                                        <div className="card-body">
                                            <div className="bg-light-300 rounded-2 p-3 mb-3">
                                                <div className="d-flex align-items-center">
                                                    <a
                                                        href="student-details.html"
                                                        className="avatar avatar-lg flex-shrink-0"
                                                    >
                                                        <img
                                                            src={student.avatar}
                                                            className="img-fluid rounded-circle"
                                                            alt="student"
                                                        />
                                                    </a>
                                                    <div className="ms-2">
                                                        <h5 className="mb-0">
                                                            <a href="student-details.html">{student.name}</a>
                                                        </h5>
                                                        <p>
                                                            {student.class}, {student.section}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="d-flex align-items-center justify-content-between gx-2">
                                                <div>
                                                    <p className="mb-0">Roll No</p>
                                                    <p className="text-dark">{student.rollNo}</p>
                                                </div>
                                                <div>
                                                    <p className="mb-0">Gender</p>
                                                    <p className="text-dark">{student.gender}</p>
                                                </div>
                                                <div>
                                                    <p className="mb-0">Joined On</p>
                                                    <p className="text-dark">{student.joinedOn}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card-footer d-flex align-items-center justify-content-between">
                                            <div className="d-flex align-items-center">
                                                <a
                                                    href="#"
                                                    className="btn btn-outline-light bg-white btn-icon d-flex align-items-center justify-content-center rounded-circle p-0 me-2"
                                                >
                                                    <i className="ti ti-brand-hipchat" />
                                                </a>
                                                <a
                                                    href="#"
                                                    className="btn btn-outline-light bg-white btn-icon d-flex align-items-center justify-content-center rounded-circle p-0 me-2"
                                                >
                                                    <i className="ti ti-phone" />
                                                </a>
                                                <a
                                                    href="#"
                                                    className="btn btn-outline-light bg-white btn-icon d-flex align-items-center justify-content-center rounded-circle p-0 me-3"
                                                >
                                                    <i className="ti ti-mail" />
                                                </a>
                                            </div>
                                            <a
                                                href="#"
                                                data-bs-toggle="modal"
                                                data-bs-target="#add_fees_collect"
                                                className="btn btn-light btn-sm fw-semibold"
                                            >
                                                Add Fees
                                            </a>
                                        </div>
                                    </div>
                                </div>

                            ))}
                        </div> : <div className="card-body p-0 py-3">
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
                                            <th>Admission No</th>
                                            <th>Roll No</th>
                                            <th>Name</th>
                                            <th>Class </th>
                                            <th>Section</th>
                                            <th>Gender</th>
                                            <th>Status</th>
                                            <th>Date of Join</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {(filteredData || students).slice(0, Visibledata).map((student, i) => (
                                            <tr>
                                                <td>
                                                    <div className="form-check form-check-md">
                                                        <input className="form-check-input" type="checkbox" />
                                                    </div>
                                                </td>
                                                <td>
                                                    <a href="student-details.html" className="link-primary">
                                                        {student.id}
                                                    </a>
                                                </td>
                                                <td>{student.rollNo}</td>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <a href="student-details.html" className="avatar avatar-md">
                                                            <img
                                                                src="assets/img/students/student-11.jpg"
                                                                className="img-fluid rounded-circle"
                                                                alt="img"
                                                            />
                                                        </a>
                                                        <div className="ms-2">
                                                            <p className="text-dark mb-0">
                                                                <a href="student-details.html">{student.name}</a>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>{student.class}</td>
                                                <td>{student.section}</td>
                                                <td>{student.gender}</td>
                                                <td>
                                                    <span className={`badge ${student.status === "Active"
                                                        ? "badge-soft-success"
                                                        : "badge-soft-danger"
                                                        } d-inline-flex align-items-center me-1`}>
                                                        <i className="ti ti-circle-filled fs-5 me-1" />
                                                        {student.status}
                                                    </span>
                                                </td>
                                                <td>{student.joinedOn}</td>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <a
                                                            href="index.htm#"
                                                            className="btn btn-outline-light bg-white btn-icon d-flex align-items-center justify-content-center rounded-circle  p-0 me-2"
                                                        >
                                                            <i className="ti ti-brand-hipchat" />
                                                        </a>
                                                        <a
                                                            href="index.htm#"
                                                            className="btn btn-outline-light bg-white btn-icon d-flex align-items-center justify-content-center rounded-circle  p-0 me-2"
                                                        >
                                                            <i className="ti ti-phone" />
                                                        </a>
                                                        <a
                                                            href="index.htm#"
                                                            className="btn btn-outline-light bg-white btn-icon d-flex align-items-center justify-content-center rounded-circle p-0 me-3"
                                                        >
                                                            <i className="ti ti-mail" />
                                                        </a>
                                                        <a
                                                            href="index.htm#"
                                                            data-bs-toggle="modal"
                                                            data-bs-target="#add_fees_collect"
                                                            className="btn btn-light fs-12 fw-semibold me-3"
                                                        >
                                                            Collect Fees
                                                        </a>
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
                                                                        href="student-details.html"
                                                                    >
                                                                        <i className="ti ti-menu me-2" />
                                                                        View Student
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        className="dropdown-item rounded-1"
                                                                        href="edit-student.html"
                                                                    >
                                                                        <i className="ti ti-edit-circle me-2" />
                                                                        Edit
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        className="dropdown-item rounded-1"
                                                                    
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
                                                                    
                                                                    >
                                                                        <i className="ti ti-toggle-right me-2" />
                                                                        Disable
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        className="dropdown-item rounded-1"
                                                                        href="student-promotion.html"
                                                                    >
                                                                        <i className="ti ti-arrow-ramp-right-2 me-2" />
                                                                        Promote Student
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
                        </div>}
                        <div className="col-md-12 text-center">
                            <Link className="btn btn-primary" onClick={HandleLoad}>
                                <i className="ti ti-loader-3 me-2" />
                                Load More
                            </Link>
                        </div>
                    </div>
                </div>
                {/* /Page Wrapper */}
                {/* Add Fees Collect */}
                <div className="modal fade" id="add_fees_collect">
                    <div className="modal-dialog modal-dialog-centered  modal-lg">
                        <div className="modal-content">
                            <div className="modal-header">
                                <div className="d-flex align-items-center">
                                    <h4 className="modal-title">Collect Fees</h4>
                                    <span className="badge badge-sm bg-primary ms-2">AD124556</span>
                                </div>
                                <button
                                    type="button"
                                    className="btn-close custom-btn-close"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                >
                                    <i className="ti ti-x" />
                                </button>
                            </div>
                            <form action="student-grid.html">
                                <div className="modal-body">
                                    <div className="bg-light-300 p-3 pb-0 rounded mb-4">
                                        <div className="row align-items-center">
                                            <div className="col-lg-3 col-md-6">
                                                <div className="d-flex align-items-center mb-3">
                                                    <a
                                                        href="student-details.html"
                                                        className="avatar avatar-md me-2"
                                                    >
                                                        <img src="assets/img/students/student-01.jpg" alt="img" />
                                                    </a>
                                                    <a
                                                        href="student-details.html"
                                                        className="d-flex flex-column"
                                                    >
                                                        <span className="text-dark">Janet</span>III, A
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="col-lg-3 col-md-6">
                                                <div className="mb-3">
                                                    <span className="fs-12 mb-1">Total Outstanding</span>
                                                    <p className="text-dark">2000</p>
                                                </div>
                                            </div>
                                            <div className="col-lg-3 col-md-6">
                                                <div className="mb-3">
                                                    <span className="fs-12 mb-1">Last Date</span>
                                                    <p className="text-dark">25 May 2024</p>
                                                </div>
                                            </div>
                                            <div className="col-lg-3 col-md-6">
                                                <div className="mb-3">
                                                    <span className="badge badge-soft-danger">
                                                        <i className="ti ti-circle-filled me-2" />
                                                        Unpaid
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="mb-3">
                                                <label className="form-label">Fees Group</label>
                                                <select className="select">
                                                    <option>Select</option>
                                                    <option>Class 1 General</option>
                                                    <option>Monthly Fees</option>
                                                    <option>Admission-Fees</option>
                                                    <option>Class 1- I Installment</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="mb-3">
                                                <label className="form-label">Fees Type</label>
                                                <select className="select">
                                                    <option>Select</option>
                                                    <option>Tuition Fees</option>
                                                    <option>Monthly Fees</option>
                                                    <option>Admission Fees</option>
                                                    <option>Bus Fees</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="mb-3">
                                                <label className="form-label">Amount</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Enter Amout"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="mb-3">
                                                <label className="form-label">Collection Date</label>
                                                <div className="date-pic">
                                                    <input
                                                        type="text"
                                                        className="form-control datetimepicker"
                                                        placeholder="Select"
                                                    />
                                                    <span className="cal-icon">
                                                        <i className="ti ti-calendar" />
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="mb-3">
                                                <label className="form-label">Payment Type</label>
                                                <select className="select">
                                                    <option>Select</option>
                                                    <option>Paytm</option>
                                                    <option>Cash On Delivery</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="mb-3">
                                                <label className="form-label">Payment Reference No</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Enter Payment Reference No"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="modal-satus-toggle d-flex align-items-center justify-content-between mb-3">
                                                <div className="status-title">
                                                    <h5>Status</h5>
                                                    <p>Change the Status by toggle </p>
                                                </div>
                                                <div className="status-toggle modal-status">
                                                    <input type="checkbox" id="user1" className="check" />
                                                    <label htmlFor="user1" className="checktoggle">
                                                        {" "}
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="mb-0">
                                                <label className="form-label">Notes</label>
                                                <textarea
                                                    rows={4}
                                                    className="form-control"
                                                    placeholder="Add Notes"
                                                    defaultValue={""}
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
                                        Pay Fees
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                {/* Add Fees Collect */}
                {/* Delete Modal */}
                <div className="modal fade" id="delete-modal">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <form action="student-grid.html">
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
            </>

        </>
    )
}

export default AllStudent
