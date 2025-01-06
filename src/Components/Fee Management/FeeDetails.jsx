import React, { useState } from 'react';

function FeeDetails() {
    const [selectedStudent, setSelectedStudent] = useState(null);
    const [showPopup, setShowPopup] = useState(false);
    const [searchData, setSearchData] = useState(null);
    const [query, setQuery] = useState('');
    const [studentsData] = useState([
        {
            name: "Rahul Kumar",
            roll: "2024001",
            classInfo: "Class 10",
            section: "A",
            parentName: "Rajesh Kumar",
            contact: "9876543210",
            email: "rajesh@example.com",
            feeStatus: "paid",
            paidAmount: 8000,
            pendingAmount: 0,
            dueDate: "10 Apr 2024",
        },
        {
            name: "Priya Singh",
            roll: "2024002",
            classInfo: "Class 9",
            section: "B",
            parentName: "Amit Singh",
            contact: "9876543211",
            email: "amit@example.com",
            feeStatus: "pending",
            paidAmount: 0,
            pendingAmount: 5000,
            dueDate: "15 Mar 2024",
        },
        {
            name: "Arun Sharma",
            roll: "2024003",
            classInfo: "Class 10",
            section: "A",
            parentName: "Vijay Sharma",
            contact: "9876543212",
            email: "vijay@example.com",
            feeStatus: "partially_paid",
            paidAmount: 3000,
            pendingAmount: 2000,
            dueDate: "20 Mar 2024",
        },
    ]);
    const [formData, setFormData] = useState({
        allClasses: '',
        allSections: '',
        status: '',
    });


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
        applyFilters({ ...formData, [name]: value });
    };

    const applyFilters = (filters) => {
        let filteredData = studentsData;

        // Apply filters
        if (filters.allClasses && filters.allClasses !== 'All Classes') {
            filteredData = filteredData.filter(student => student.classInfo === filters.allClasses);
        }
        if (filters.allSections && filters.allSections !== 'All Sections') {
            filteredData = filteredData.filter(student => student.section === filters.allSections);
        }
        if (filters.status && filters.status !== 'All Status') {
            filteredData = filteredData.filter(student => student.feeStatus.toLowerCase() === filters.status.toLowerCase());
        }

        // Apply search query
        if (query) {
            filteredData = filteredData.filter((data) =>
                (data?.name ? data?.name.toLowerCase().includes(query.toLowerCase()) : false) ||
                (data?.roll ? data?.roll.toString().includes(query.toLowerCase()) : false)
            );
        }

        setSearchData(filteredData);
    };



    const handleViewDetails = (student) => {
        setSelectedStudent(student);
        setShowPopup(true);
    };

    const handleClosePopup = () => {
        setShowPopup(false);
        setSelectedStudent(null);
    };

    const handleSearch = (value) => {
        setQuery(value);
        const filteredData = studentsData.filter((data) =>
            (data?.name ? data?.name.toLowerCase().includes(value.toLowerCase()) : false) ||
            (data?.roll ? data?.roll.toString().includes(value.toLowerCase()) : false) ||
            (data?.section ? data?.section.toLowerCase().includes(value.toLowerCase()) : false) ||
            (data?.parentName ? data?.parentName.toLowerCase().includes(value.toLowerCase()) : false) ||
            (data?.contact ? data?.contact.toString().includes(value.toLowerCase()) : false) ||
            (data?.email ? data?.email.toLowerCase().includes(value.toLowerCase()) : false)
        );
        setSearchData(filteredData);
    };

    return (
        <div className="studentfees-container">
            <div className="studentfees-header">
                <h1>Students</h1>
            </div>

            <div className="studentfees-filters p-2">
                <div className="studentfees-search-bar d-flex mb-3">
                    <input
                        type="text"
                        placeholder="Search by name or roll number..."
                        value={query}
                        onChange={(e) => handleSearch(e.target.value)}
                    />
                    <button
                        className="btn btn-secondary ms-3 w-25"
                        style={{ margin: "0px 20px 0px 0px" }}
                    >
                        Filters
                    </button>
                </div>


                <div className="mb-3 row">
                    <div className="col-4">
                        <select
                            className="me-1 w-100"
                            name="allClasses"
                            onChange={handleChange}
                        >
                            <option value="">All Classes</option>
                            <option value="Class 9">Class 9</option>
                            <option value="Class 10">Class 10</option>
                        </select>
                    </div>
                    <div className="col-4">
                        <select
                            className="me-1 w-100"
                            name="allSections"
                            onChange={handleChange}
                        >
                            <option value="">All Sections</option>
                            <option value="A">Section A</option>
                            <option value="B">Section B</option>
                        </select>
                    </div>
                    <div className="col-4">
                        <select
                            className="me-1 w-100"
                            name="status"
                            onChange={handleChange}
                        >
                            <option value="">All Status</option>
                            <option value="paid">Paid</option>
                            <option value="pending">Pending</option>
                            <option value="partially_paid">Partially Paid</option>
                        </select>
                    </div>
                </div>
            </div>

            <table className='student-fees-table'>
                <thead>
                    <tr>
                        <th>Student Details</th>
                        <th>Class Info</th>
                        <th>Contact</th>
                        <th>Fee Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {(searchData || studentsData).map((student, index) => (
                        <tr key={index}>
                            <td>
                                {student.name}
                                <br />
                                <small>{student.roll}</small>
                            </td>
                            <td>
                                {student.classInfo}
                                <br />
                                {student.section}
                            </td>
                            <td>
                                {student.parentName}
                                <br />
                                {student.contact}
                            </td>
                            <td>
                                <span className={`status p-1 px-3 ${student.feeStatus.toLowerCase()}`}>
                                    {student.feeStatus.toUpperCase()}
                                </span>
                                <br />
                                Due: {student.dueDate}
                            </td>
                            <td>
                                <button
                                    className="btn btn-secondary"
                                    onClick={() => handleViewDetails(student)}
                                >
                                    View Details
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {selectedStudent && (
                <div className={`popup-overlay ${showPopup ? 'show' : ''}`}>
                    <div className={`popup ${showPopup ? 'show' : ''}`}>
                        <div className="popup-header">
                            <h2>Student Details</h2>
                            <span className="close" onClick={handleClosePopup}>
                                &times;
                            </span>
                        </div>
                        <div className="popup-body">
                            <div className="section">
                                <h3>Personal Information</h3>
                                <div className="info-grid">
                                    <div>
                                        <span>Name</span>
                                        <strong>{selectedStudent?.name}</strong>
                                    </div>
                                    <div>
                                        <span>Roll Number</span>
                                        <strong>{selectedStudent?.roll}</strong>
                                    </div>
                                    <div>
                                        <span>Class</span>
                                        <strong>{selectedStudent?.classInfo} {selectedStudent?.section}</strong>
                                    </div>
                                    <div>
                                        <span>Parent's Name</span>
                                        <strong>{selectedStudent?.parentName}</strong>
                                    </div>
                                    <div>
                                        <span>Contact</span>
                                        <strong>{selectedStudent?.contact}</strong>
                                    </div>
                                    <div>
                                        <span>Email</span>
                                        <strong>{selectedStudent?.email}</strong>
                                    </div>
                                </div>
                            </div>
                            <div className="section">
                                <h3>Fee Status</h3>
                                <div className="fee-status">
                                    <div className="fee-box green">
                                        Paid Amount<br />
                                        {selectedStudent?.paidAmount}
                                    </div>
                                    <div className="fee-box red">
                                        Pending Amount<br />
                                        {selectedStudent?.pendingAmount}
                                    </div>
                                    <div className="fee-box blue">
                                        Due Date<br />
                                        {selectedStudent?.dueDate}
                                    </div>
                                </div>
                            </div>
                            <div className="section">
                                <h3>Payment History</h3>
                                <p>Details of payment history can be displayed here.</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default FeeDetails;
