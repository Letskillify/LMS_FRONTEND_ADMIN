import React, { useState } from 'react';
// import { Textarea } from 'vite';

const PendingFeesTracker = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState(null);

  const students = [
    { name: 'Jackson Lee', class: '9B', amountDue: 2000, dueDate: '2023-08-15', paynalty: '300', daysOverdue: 5 },
    { name: 'Isabella Nguyen', class: '11C', amountDue: 1500, dueDate: '2023-08-30', paynalty: '300', daysOverdue: 0 },
    { name: 'Sofia Davis', class: '10B', amountDue: 2500, dueDate: '2023-09-05', paynalty: '300', daysOverdue: 0 },
    { name: 'Ethan Wilson', class: '12A', amountDue: 3000, dueDate: '2023-08-10', paynalty: '300', daysOverdue: 10 },
    { name: 'Ava Thompson', class: '11B', amountDue: 1800, dueDate: '2023-08-25', paynalty: '300', daysOverdue: 0 },
  ];

  const handleSendReminder = (student) => {
    setSelectedStudent(student);
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
    setSelectedStudent(null);
  };

  return (


    <div className="tracker-container">
      <h3 className="pending-fees-title text-center m-4 rounded fw-bold border p-3">Pending Fees Tracker</h3>
      <table className="pending-fees-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Class</th>
            <th>Amount Due</th>
            <th>Due Date</th>
            <th>Days Overdue</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr key={index}>
              <td>{student.name}</td>
              <td>{student.class}</td>
              <td>&#8377;{student.amountDue}</td>
              <td>{student.dueDate}</td>
              <td>{student.daysOverdue}</td>
              <td>
                <button
                  className="action-button send-reminder-button"
                  onClick={() => handleSendReminder(student)}
                >
                  Send Reminder
                </button>

              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {showPopup && (
        <div className="popup-container">
          <div className="popup-content">
            <h2 className="popup-title">Send Reminder</h2>
            <div className="section">

              <div className="info-grid">
                <div>
                  <span>Name</span>
                  <strong>{selectedStudent?.name}</strong>
                </div>
                <div>
                  <span>Class</span>
                  <strong>{selectedStudent?.class} </strong>
                </div>
                <div>
                  <span>Due Amount</span>
                  <strong>{selectedStudent?.amountDue}</strong>
                </div>

                <div>
                  <span>Due Date</span>
                  <strong>{selectedStudent?.dueDate}</strong>
                </div>
                <div>
                  <span>Paynalty</span>
                  <strong>{selectedStudent?.paynalty}</strong>
                </div>
                <div>
                  <span>day Over due</span>
                  <strong>{selectedStudent?.daysOverdue}</strong>
                </div>
              </div>
              <label className='mt-4'>
                <textarea name=""  rows={4} cols={40} />
               
              </label>
            </div>
            <div className="popup-actions ">
              <button className="popup-button confirm-button me-2" onClick={closePopup}>
                Confirm
              </button>
              <button className="popup-button cancel-button" onClick={closePopup}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PendingFeesTracker;
