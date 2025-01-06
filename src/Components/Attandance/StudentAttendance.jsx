
import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
const StudentAttendance = () => {
    function handler() {
        let ele = document.getElementById('hide');
        ele.classList.contains("hide") ? ele.classList.remove("hide") : id.classList.add("hide");
    }

    const [val, setVal] = useState('');
    function Changehandler(el) {
        let value = document.getElementById('hiddee');
        value.classList.contains("hide") ? value.classList.remove("hide") : id.classList.add("hide");
        setVal(el.target.value);
    }

    console.log(val);
    //  camera access
    const videoRef = useRef(null);
    const canvasRef = useRef(null);
    const [isCameraOn, setIsCameraOn] = useState(false);
    const [capturedImage, setCapturedImage] = useState(null);

    useEffect(() => {
        if (isCameraOn) {
            startCamera();
        } else {
            stopCamera();
        }
        return () => stopCamera();
    }, [isCameraOn]);

    const startCamera = async () => {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ video: true });
            videoRef.current.srcObject = stream;
        } catch (error) {
            console.error("Error accessing the camera:", error);
        }
    };

    const stopCamera = () => {
        const stream = videoRef.current?.srcObject;
        if (stream) {
            const tracks = stream.getTracks();
            tracks.forEach((track) => track.stop());
            videoRef.current.srcObject = null;
        }
    };

    const [isAttendanceVisible, setAttendanceVisible] = useState(false);
    const [students, setStudents] = useState([
        { id: "#1.", name: "Ali Hassan", sno: "1.", attendance: "Present" },
        { id: "#2.", name: "Sahib Ali", sno: "2.", attendance: "Absent" },
    ]);

    const [ClassValue, setClassValue] = useState("");
    const [sectionValue, setSection] = useState("");
    const [DateValue, setDate] = useState("");
    const [notifyParents, setNotifyParents] = useState("No");
    const [notificationType, setNotificationType] = useState("WhatsApp");
    const [attendance, setAttendance] = useState('normal');

    //attendance change
    function AttendanceHandler(e) {
        setAttendance(e.target.value);
    }
    console.log(attendance);

    //Class change value
    function classChange(e) {
        setClassValue(e.target.value);
    }
    console.log(ClassValue);
    function SectionChange(e) {
        setSection(e.target.value);
    }
    console.log(sectionValue);
    function DateChange(e) {
        setDate(e.target.value);
    }
    console.log(DateValue);

    // Toggle visibility of attendance form
    const handleManageAttendance = () => {
        setAttendanceVisible(true);
    };

    // Update attendance status
    const updateAttendance = (id, status) => {
        setStudents((prevStudents) =>
            prevStudents.map((student) =>
                student.id === id ? { ...student, attendance: status } : student
            )
        );
    };

    // Mark all functionality
    const markAll = (status) => {
        setStudents((prevStudents) =>
            prevStudents.map((student) => ({ ...student, attendance: status }))
        );
    };
    const handleSaveAttendance = () => {
        if (notifyParents === "Yes") {
            const attendanceData = {
                class: ClassValue,
                section: sectionValue,
                date: DateValue,
                students,
                notificationType,
            };

            // Simulate API request (use your API endpoint here)
            console.log("Sending Attendance Data:", attendanceData);

            alert("Attendance saved and notification sent via " + notificationType);
        } else {
            alert("Attendance saved without sending notifications.");
        }
    };

    return (
        <>
            <div className="container-fluid container-p-y">
                <h4 className="fw-bold py-3  "><span className="text-muted fw-light">Dashboard /</span> Student Attendance</h4>
                <div className='ps-2 py-2 border rounded' style={{ color: '#fff', backgroundColor: '#013473', fontSize: '19px' }}>
                    <i className="fa fa-arrow-circle-o-right me-2" aria-hidden="true"></i>Student Attendance Report
                </div>
                <div className="attendance-app container p-0 ps-2   ">
                    {/* Header Section */}
                    <div className="d-flex justify-content-evenly bg-light pt-4 pb-4 rounded">
                        <div className="">
                            <label className='mb-2'>Campus</label>
                            <select onChange={classChange} className=" form-select ">
                                <option>Main Campus</option>
                                <option>Outer Campus</option>
                                {/* Add more options as needed */}
                            </select>
                        </div>
                        <div className="">
                            <label className='mb-2'>Staff Category</label>
                            <select onChange={SectionChange} className="form-select">
                                <option>Select Section</option>
                                <option>All</option>
                                <option>Full time</option>
                                <option>Per hour</option>
                                <option>Per lecture</option>
                                {/* Add more options as needed */}
                            </select>
                        </div>
                        <div className="">
                            <label className='mb-2'>Type</label>
                            <select name="type" onChange={AttendanceHandler} className='form-select' id="">
                                <option value='normal'>Normal Attendance</option>
                                <option value='subject'>Subject Attendance</option>
                                <option value='biometric'>Biometric Attendance</option>
                            </select>
                        </div>

                        <div className="">
                            <label htmlFor="" className='mb-2'>Date</label>
                            <input type="Date" className='form-control' />
                        </div>

                        <button
                            className="btn btn-primary col-3 mt-4"
                            onClick={handleManageAttendance}
                        >
                            Manage Attendance
                        </button>
                    </div>

                    {/* Attendance Section */}
                    {isAttendanceVisible && attendance === "normal" && (
                        < div className='text-center bg-light  rounded mt-4 pt-4'>
                            <div className="py-4" style={{ backgroundColor: '#b8bfc847' }}>
                                <h3 className="my-2" style={{ fontSize: '28px' }} >
                                    Attendance for Class: {ClassValue}
                                </h3>
                                <span style={{ fontSize: '20px' }}>
                                    Section: {sectionValue}
                                </span>
                            </div>
                            {/* Mark All Buttons */}
                            <div className="d-flex  w-100 justify-content-evenly mt-4 pt-4">
                                <button
                                    className="btn btn-success d-flex align-items-center"
                                    onClick={() => markAll("Present")}
                                >
                                    Mark All Present
                                    <img
                                        src="/public/icon/checkmark.svg"
                                        style={{ width: "25px", marginLeft: "10px" }}
                                        alt=""
                                    />
                                </button>
                                <button
                                    className="btn btn-danger d-flex align-items-center"
                                    onClick={() => markAll("Absent")}
                                >
                                    Mark All Absent
                                    <img
                                        src="/public/icon/remove.svg"
                                        style={{ width: "25px", marginLeft: "10px" }}
                                        alt=""
                                    />
                                </button>
                                <button
                                    className="btn btn-warning d-flex align-items-center"
                                    onClick={() => markAll("Holiday")}
                                >
                                    Mark All Holiday
                                    <img
                                        src="/public/icon/calendarholiday.svg"
                                        style={{ width: "25px", marginLeft: "10px" }}
                                        alt=""
                                    />
                                </button>
                                <button
                                    className="btn btn-secondary d-flex align-items-center"
                                    onClick={() => markAll("Sunday")}
                                >
                                    Mark All Sunday
                                    <img
                                        src="/public/icon/sunday.svg"
                                        style={{ width: "25px", marginLeft: "10px" }}
                                        alt=""
                                    />
                                </button>
                            </div>

                            {/* Student List */}
                            <div className="student-attend px-4 mt-4 pt-4 mb-3 mx-5" >
                                <table className=" mx-auto table table-stripedd table-striped text-center mt-4">
                                    <thead>
                                        <tr className="table-headd">
                                            <th>S.No.</th>
                                            <th>ID</th>
                                            <th>Name</th>
                                            <th>Father/Husband name</th>
                                            <th>Designation</th>
                                            <th>Attendance Status</th>
                                            <th>Arrival Timing</th>
                                            <th>Exit Timing</th>
                                            <th>Late Arrival</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {students.map((student) => (
                                            <tr key={student.id}>
                                                <td>&nbsp;&nbsp;{student.sno}</td>
                                                <td>&nbsp;&nbsp;{student.id}</td>
                                                <td>{student.name}</td>
                                                <td>Father/husband</td>
                                                <td>teacher</td>
                                                <td> <select value={student.attendance} className="form-control w-75 text-cemter  mx-auto" style={{ backgroundColor: "#f2f1f182" }} onChange={(e) => updateAttendance(student.id, e.target.value)}>
                                                    <option>Present</option>
                                                    <option>Absent</option>
                                                    <option>Undefined</option>
                                                </select>
                                                </td>
                                                <td>
                                                    <input type="time" name="time" className='form-control' id="" />
                                                </td>
                                                <td>
                                                    <input type="time" name="time" className='form-control' id="" />
                                                </td>
                                                <td> <select className="form-control w-50 text-center mx-auto" style={{ backgroundColor: "#f2f1f182" }}  >
                                                    <option>Auto Detect</option>
                                                </select>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>

                                <div className="mt-4 mb-3 row pt-4">
                                    <div className="col-6">
                                        <div className=" row align-items-center">
                                            <label className="col-8">Notify Parents of Absent Students* :</label>
                                            <select
                                                onChange={(e) => setNotifyParents(e.target.value)}
                                                className="col-3 w-25  form-select text-muted"
                                            >
                                                <option value="No">No</option>
                                                <option value="Yes">Yes</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-6 ">
                                        {notifyParents === "Yes" && (
                                            <div className=" row align-items-center">
                                                <label className="col-8">Notification Type * : </label>
                                                <select
                                                    onChange={(e) => setNotificationType(e.target.value)}
                                                    className="col-3 form-control text-muted w-25"

                                                >
                                                    <option value="WhatsApp" >WhatsApp</option>
                                                    <option value="SMS">SMS</option>
                                                    <option value="WhatsApp & SMS">WhatsApp & SMS</option>
                                                </select>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>

                            {/* Save Button */}
                            <button className="btn btn-primary mb-4 mt-4  ">Save Attendance</button>
                        </div>
                    )}
                    {isAttendanceVisible && attendance === "subject" && (
                        <div className='text-center bg-light  rounded mt-4 pt-4'>
                            <div className="py-4" style={{ backgroundColor: '#b8bfc847' }}>
                                <h3 className="my-2" style={{ fontSize: '28px' }} >
                                    Attendance for Staff (Subject)
                                </h3>
                                <span style={{ fontSize: '20px' }}>
                                    Section: {sectionValue}
                                </span>
                            </div>


                            {/* Student List */}
                            <div className="student-attend px-4 mt-4 pt-4 mb-3 mx-5" >
                                <table className=" mx-auto table table-stripedd table-striped text-center mt-4">
                                    <thead>
                                        <tr className="table-headd">
                                            <th>S.No.</th>
                                            <th>ID</th>
                                            <th>Name</th>
                                            <th>Father/Husband name</th>
                                            <th>Designation</th>
                                            <th>Assign Subjects</th>
                                            <th>Conducted Lectures{DateValue}</th>
                                            <th>Late Arrival</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {students.map((student) => (
                                            <tr key={student.id}>
                                                <td>&nbsp;&nbsp;{student.sno}</td>
                                                <td>&nbsp;&nbsp;{student.id}</td>
                                                <td>{student.name}</td>
                                                <td>Father/husband</td>
                                                <td>teacher</td>
                                                <td> 
                                                    <input type="number" name="" className='form-control' value={8} />
                                                </td>
                                                <td>
                                                    <input type="number" name="" className='form-control' value={5} />
                                                </td> 
                                                <td> <select className="form-control w-50 text-center mx-auto" style={{ backgroundColor: "#f2f1f182" }}  >
                                                    <option>Yes</option>
                                                    <option>No</option>
                                                </select>
                                                </td>
                                                
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>

                                <div className="mt-4 mb-3 row pt-4">
                                    <div className="col-6">
                                        <div className=" row align-items-center">
                                            <label className="col-8">Notify Parents of Absent Students* :</label>
                                            <select
                                                onChange={(e) => setNotifyParents(e.target.value)}
                                                className="col-3 w-25  form-select text-muted"
                                            >
                                                <option value="No">No</option>
                                                <option value="Yes">Yes</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-6 ">
                                        {notifyParents === "Yes" && (
                                            <div className=" row align-items-center">
                                                <label className="col-8">Notification Type * : </label>
                                                <select
                                                    onChange={(e) => setNotificationType(e.target.value)}
                                                    className="col-3 form-control text-muted w-25"

                                                >
                                                    <option value="WhatsApp" >WhatsApp</option>
                                                    <option value="SMS">SMS</option>
                                                    <option value="WhatsApp & SMS">WhatsApp & SMS</option>
                                                </select>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>

                            {/* Save Button */}
                            <button className="btn btn-primary mb-4 mt-4  ">Save Attendance</button>
                        </div>
                    )}
                    {isAttendanceVisible && attendance === "biometric" && (
                        < div className='text-center bg-light  rounded mt-4 pt-4'>
                            <div className="py-4" style={{ backgroundColor: '#b8bfc847' }}>
                                <h3 className="my-2" style={{ fontSize: '28px' }} >
                                    biometric
                                </h3>
                                <span style={{ fontSize: '20px' }}>
                                    Section: {sectionValue}
                                </span>
                            </div>
                            {/* Mark All Buttons */}
                            <div className="d-flex  w-100 justify-content-evenly mt-4 pt-4">
                                <button
                                    className="btn btn-success d-flex align-items-center"
                                    onClick={() => markAll("Present")}
                                >
                                    Mark All Present
                                    <img
                                        src="/public/icon/checkmark.svg"
                                        style={{ width: "25px", marginLeft: "10px" }}
                                        alt=""
                                    />
                                </button>
                                <button
                                    className="btn btn-danger d-flex align-items-center"
                                    onClick={() => markAll("Absent")}
                                >
                                    Mark All Absent
                                    <img
                                        src="/public/icon/remove.svg"
                                        style={{ width: "25px", marginLeft: "10px" }}
                                        alt=""
                                    />
                                </button>
                                <button
                                    className="btn btn-warning d-flex align-items-center"
                                    onClick={() => markAll("Holiday")}
                                >
                                    Mark All Holiday
                                    <img
                                        src="/public/icon/calendarholiday.svg"
                                        style={{ width: "25px", marginLeft: "10px" }}
                                        alt=""
                                    />
                                </button>
                                <button
                                    className="btn btn-secondary d-flex align-items-center"
                                    onClick={() => markAll("Sunday")}
                                >
                                    Mark All Sunday
                                    <img
                                        src="/public/icon/sunday.svg"
                                        style={{ width: "25px", marginLeft: "10px" }}
                                        alt=""
                                    />
                                </button>
                            </div>

                            {/* Student List */}
                            <div className="student-attend px-4 mt-4 pt-4 mb-3 mx-5" >
                                <table className=" mx-auto table table-stripedd table-striped text-center mt-4">
                                    <thead>
                                        <tr className="table-headd">
                                            <th>S.No.</th>
                                            <th>ID</th>
                                            <th>Name</th>
                                            <th>Father/Husband name</th>
                                            <th>Designation</th>
                                            <th>Attendance Status</th>
                                            <th>Arrival Timing</th>
                                            <th>Exit Timing</th>
                                            <th>Late Arrival</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {students.map((student) => (
                                            <tr key={student.id}>
                                                <td>&nbsp;&nbsp;{student.sno}</td>
                                                <td>&nbsp;&nbsp;{student.id}</td>
                                                <td>{student.name}</td>
                                                <td>Father/husband</td>
                                                <td>teacher</td>
                                                <td> <select value={student.attendance} className="form-control w-75 text-cemter  mx-auto" style={{ backgroundColor: "#f2f1f182" }} onChange={(e) => updateAttendance(student.id, e.target.value)}>
                                                    <option>Present</option>
                                                    <option>Absent</option>
                                                    <option>Undefined</option>
                                                </select>
                                                </td>
                                                <td>
                                                    <input type="time" name="time" className='form-control' id="" />
                                                </td>
                                                <td>
                                                    <input type="time" name="time" className='form-control' id="" />
                                                </td>
                                                <td> <select className="form-control w-50 text-center mx-auto" style={{ backgroundColor: "#f2f1f182" }}  >
                                                    <option>Auto Detect</option>
                                                </select>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>

                                <div className="mt-4 mb-3 row pt-4">
                                    <div className="col-6">
                                        <div className=" row align-items-center">
                                            <label className="col-8">Notify Parents of Absent Students* :</label>
                                            <select
                                                onChange={(e) => setNotifyParents(e.target.value)}
                                                className="col-3 w-25  form-select text-muted"
                                            >
                                                <option value="No">No</option>
                                                <option value="Yes">Yes</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-6 ">
                                        {notifyParents === "Yes" && (
                                            <div className=" row align-items-center">
                                                <label className="col-8">Notification Type * : </label>
                                                <select
                                                    onChange={(e) => setNotificationType(e.target.value)}
                                                    className="col-3 form-control text-muted w-25"

                                                >
                                                    <option value="WhatsApp" >WhatsApp</option>
                                                    <option value="SMS">SMS</option>
                                                    <option value="WhatsApp & SMS">WhatsApp & SMS</option>
                                                </select>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>

                            {/* Save Button */}
                            <button className="btn btn-primary mb-4 mt-4  ">Save Attendance</button>
                        </div>
                    )}
                </div>
               {/* camera functionallty */}
                {/* <div className='hide text-center ' id='hiddee'>

                    <button onClick={() => setIsCameraOn(!isCameraOn)}>
                        {isCameraOn ? "Tap to Turn Off Camera" : "Tap to Turn On Camera"}
                    </button>
                    {isCameraOn && (
                        <div>
                            <video ref={videoRef} autoPlay playsInline style={{ width: "500px", height: "auto" }} /> <br />
                            <button onClick={captureImage}>Capture Image</button><br />
                        </div>
                    )}

                    <canvas ref={canvasRef} style={{ display: 'none' }} />

                    {capturedImage && (
                        <div>
                            <h3>Captured Image:</h3>
                            <img src={capturedImage} alt="Captured" style={{ width: "500px", height: "auto" }} /> <br />
                        </div>
                    )}
                </div> */}

            </div>

        </>
    )
}

export default StudentAttendance
