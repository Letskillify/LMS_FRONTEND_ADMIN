import React, { useState } from 'react'


function LiveClass() {
    const [activeTab, setActiveTab] = useState('services'); // Active tab state
    const [activeContent, setActiveContent] = useState(null); // Active content state
    const [url, setUrl] = useState(''); // State to store the URL
    const [selectedStudent, setSelectedStudent] = useState([]); // State for selected student
    const [searchTerm, setSearchTerm] = useState('');



    // Dummy students data
    const students = [
        { id: 1, name: 'Mit Anadkat', rollno: 'S1.', mobile: '9428988464' },
        { id: 2, name: 'Dhiraj Kumar', rollno: 'S2.', mobile: '1234567892' },
        { id: 3, name: 'Gufran', rollno: 'S3.', mobile: '9876543210' },
    ];
    // Student data filter 
    const filteredStudents = students.filter(
        (student) =>
            student.rollno.toLowerCase().includes(searchTerm.toLowerCase()) ||
            student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            student.mobile.includes(searchTerm)
    );

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };


    // Function to handle Google Meet or Zoom Meeting button clicks
    const handleButtonClick = (type) => {
        setActiveTab('add-classroom'); // Switch to "Add Live Classroom" tab
        setActiveContent(type); // Set content to Google or Zoom
    };

    // Function to handle URL submission and switch to "Assign Students" tab
    const handleUrlSubmit = () => {
        if (url) {
            setActiveTab('assign-students'); // Switch to "Assign Students" tab
        } else {
            alert('Please enter a valid URL');
        }
    };
    const handleCheckboxChange = (student) => {
        setSelectedStudent((prevSelected) => {
            if (prevSelected.some((s) => s.id === student.id)) {
                // If the student is already selected, remove them
                return prevSelected.filter((s) => s.id !== student.id);
            } else {
                // If not selected, add the student
                return [...prevSelected, student];
            }
        });
    };

    // Function to handle student selection and submission
    const handleStudentSubmit = () => {
        if (selectedStudent) {
            console.log(`URL: ${url}`);
            console.log(`Selected Student: ${JSON.stringify(selectedStudent)}`);
            alert('Data sent to student’s dashboard (check console for details)');
        } else {
            alert('Please select a student');
        }
    };
    return (
        <>
            <div className="container ms-2 mt-4 ">
                <div className="text-align-center">
                    <ul className="row nav nav-pills mb-3" id="pills-tab" role="tablist">
                        <li className="col-4 nav-item" role="presentation">
                            <button
                                className={`border nav-link ${activeTab === 'services' ? 'active' : ''}`}
                                onClick={() => setActiveTab('services')}
                                type="button"
                            >
                                Services
                            </button>
                        </li>
                        <li className="col-4 nav-item" role="presentation">
                            <button
                                className={`border nav-link ${activeTab === 'add-classroom' ? 'active' : ''}`}
                                type="button"
                            >
                                Add Live Classroom
                            </button>
                        </li>
                        <li className="col-4 nav-item" role="presentation">
                            <button
                                className={`border nav-link ${activeTab === 'assign-students' ? 'active' : ''}`}
                                type="button"
                            >
                                Assign Students
                            </button>
                        </li>
                    </ul>

                    <div className="tab-content" id="pills-tabContent">
                        {/* Services Tab */}
                        {activeTab === 'services' && (
                            <div
                                className="tab-pane fade show active py-5"
                                style={{ backgroundColor: '#bfbfbe78' }}
                            >
                                <div
                                    className="py-3 text-center border rounded py-5 mx-auto"
                                    style={{ width: '500px', backgroundColor: 'rgb(255 255 255 / 72%)' }}
                                >
                                    <p style={{ fontSize: '17px' }}>Choose one for Live Classes</p>
                                    <button
                                        className="mt-4 w-50 btn btn-danger"
                                        onClick={() => handleButtonClick('google')}
                                    >
                                        Google Meet
                                    </button>
                                    <br />
                                    <button
                                        className="mt-4 w-50 btn btn-primary"
                                        onClick={() => handleButtonClick('zoom')}
                                    >
                                        Zoom Meeting
                                    </button>
                                </div>
                            </div>
                        )}

                        {/* Add Live Classroom Tab */}
                        {activeTab === 'add-classroom' && (
                            <div
                                className="tab-pane fade show active py-5"
                                style={{ backgroundColor: '#bfbfbe78' }}
                            >
                                <div
                                    className="py-3 text-center border mx-auto px-5"
                                    style={{ width: '500px', backgroundColor: 'rgb(255 255 255 / 72%)' }}
                                >
                                    <p>Paste your {activeContent === 'google' ? 'Google Meet' : 'Zoom Meeting'} URL here:</p>
                                    <input
                                        type="text"
                                        placeholder="Type URL here"
                                        value={url}
                                        onChange={(e) => setUrl(e.target.value)}
                                        className="form-control"
                                    />
                                    <br />
                                    <button onClick={handleUrlSubmit} className="mt-3 btn btn-primary">
                                        Submit
                                    </button>
                                </div>
                            </div>
                        )}

                        {/* Assign Students Tab */}
                        {activeTab === 'assign-students' && (
                            <div
                                className="tab-pane fade show active py-5"
                                style={{ backgroundColor: '#bfbfbe78' }}
                            >
                                <div
                                    className="py-3 px-3 text-center border mx-auto"
                                    style={{ width: '500px', backgroundColor: 'rgb(255 255 255 / 72%)' }}
                                >
                                    <p>Select a Student to Assign</p>
                                    <div className="mb-3">
                                        <input
                                            type="text"
                                            placeholder="Search by Roll No, Name, or Mobile"
                                            value={searchTerm}
                                            onChange={handleSearchChange}
                                            className="form-control mb-3"
                                        />
                                    </div>
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th>ROLL NO.</th>
                                                <th>STUDENT</th>
                                                <th>MOBILE</th>
                                                <th>SELECT</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {filteredStudents.length > 0 ? (
                                                filteredStudents.map((student) => (
                                                    <tr key={student.id}>
                                                        <td>{student.rollno}</td>
                                                        <td>{student.name}</td>
                                                        <td>{student.mobile}</td>
                                                        <td>
                                                            <input
                                                                type="checkbox"
                                                                name="student"
                                                                checked={selectedStudent.some((s) => s.id === student.id)}
                                                                onChange={() => handleCheckboxChange(student)}
                                                            />
                                                        </td>
                                                    </tr>
                                                ))
                                            ) : (
                                                <tr>
                                                    <td colSpan="4" className="text-center">
                                                        No students found
                                                    </td>
                                                </tr>
                                            )}
                                        </tbody>
                                    </table>
                                    <button onClick={handleStudentSubmit} className="mt-3 btn btn-primary">
                                        Submit
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}

export default LiveClass
