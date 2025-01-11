import React from 'react'
import { Route, Routes } from 'react-router-dom'
import SideDrawer from './Components/Layout/SideDrawer.jsx'
import Footer from './Components/Layout/Footer.jsx'
import Navbar from './Components/Layout/Navbar.jsx'
import Home from './Components/Graph.jsx'
// import StaffManagement from './Components/Staff/StaffManagement.jsx'
import Studentsinformation from './Components/Students/Studentsinformation.jsx'
import StudentPromotion from './Components/Students/StudentPromotion.jsx'
import StudentTransfer from './Components/Students/StudentTransfer.jsx'
import StudentBirthdays from './Components/Students/StudentBirthdays.jsx'
import StudentInfo from './Components/Students/StudentInfo.jsx'
import AdmitStudents from './Components/Admission/AdmitStudents.jsx'
import AdmitBulk from './Components/Admission/AdmitBulk.jsx'
import ManageParents from './Components/Parents/ManageParents.jsx'
import StudentIdCard from './Components/idCardPrint/idCard.jsx'
import StaffIdCard from './Components/idCardPrint/StaffIdCard.jsx'
import IdCardStu from './Components/idCardPrint/IdCardStu.jsx'
import IdCardStaff from './Components/idCardPrint/IdCardStaff.jsx'
import Accountant from './Components/Accountant/Accountant.jsx'
import Fee from './Components/Fee Payment/Fee.jsx'
import FeeManage from './Components/Fee Payment/FeeManage.jsx'
import ManageAttendance from './Components/Attandance/manageAttendance.jsx'
import StudentReport from './Components/Attandance/StudentReport.jsx'
import StudentReportPrint from './Components/Attandance/StudentReportPrint.jsx'
import StaffAttendance from './Components/Attandance/StaffAttendance.jsx'
import StudentAttendance from './Components/Attandance/StudentAttendance.jsx'
import LiveClass from './Components/liveClass/LiveClass.jsx'
import AddTimeTable from './Components/Timetable/AddTimeTable.jsx'
import StaffSalarySetting from './Components/StaffSalary/StaffSalarySetting.jsx'
import SalaryGeneration from './Components/StaffSalary/SalaryGeneration.jsx'
import ManageSalaries from './Components/StaffSalary/ManageSalaries.jsx'
import LoanManagement from './Components/StaffSalary/LoanManagement.jsx'
import SalaryLoanReport from './Components/StaffSalary/SalaryLoanReport.jsx'
import Balancesheet from './Components/Accounting/Balancesheet.jsx'
import StudentTrash from './Components/Admission/Trash files/StudentTrash.jsx'
import PrivteRoute from './Components/Utils/PrivteRoute.jsx'
import LoginForm from './Components/Auth User/LoginForm.jsx'
import StudentDetail from './Components/Admission/StudentDetail.jsx'
import ExamTests from './Components/Exams/ExamTests.jsx'
import LibraryMember from './Components/librarys/LibraryMember.jsx'
import BookList from './Components/librarys/BooksList.jsx'
import BookReturn from './Components/librarys/BookReturn.jsx'
import BookIssue from './Components/librarys/BookIssue.jsx'
import AllTeacher from './Components/Study Material/AllTeachers.jsx'
import EditStudentData from './Components/Admission/EditStudentData.jsx'
import AdmissionEnquiry from './Components/Admission/AdmissionEnquiry.jsx'
import InstituteRegister from './Components/Auth/InstituteRegister.jsx'
import InstituteProfile from './Components/Institute/InstituteProfile.jsx'
import FeesOverview from './Components/Fee Management/FeesOverview.jsx'
import FeeStructure from './Components/Fee Management/FeeStructure.jsx'
import FeeDetails from './Components/Fee Management/FeeDetails.jsx'
import FeeReminderToAll from './Components/Fee Management/FeeReminderToAll.jsx'
import PendingFeesTracker from './Components/Fee Management/PendingFeesTracker.jsx'
import EditParents from './Components/Parents/EditParents.jsx'
import HomeWork from './Components/Home Work/HomeWork.jsx'
import AddClass from './Components/Class Management/AddClass.jsx'
import ImageUploadComponent from './Components/Test files/ImageUploadComponent.jsx'
import EditProfile from './Components/Institute/EditProfile.jsx'
import Stock from './Components/stock/Stock.jsx'
import Subjects from './Components/Class Management/Subjects.jsx'
import StaffManagement from './Components/Staff/StaffManagement.jsx'
import NonTeachingStaff from './Components/Staff/NonTeachingStaff.jsx'
import TeachingStaff from './Components/Staff/TeachingStaff.jsx'
function SupAdminDashboard() {
  const token = sessionStorage.getItem("token");

  return (
    <>
      <div className="layout-wrapper layout-content-navbar">
        <div className="layout-container">
          {token ? <SideDrawer /> : ''}
          <div className="layout-page " style={{ overflowY: 'scroll', height: '100vh', scrollbarWidth: 'thin' }}>
            {token ? <Navbar /> : ''}
            <div className="content-wrapper">
              <Routes>
                <Route path="/" element={<PrivteRoute />}>
                  <Route path="/" element={<Home />}></Route>
                  <Route path="/instituteprofile" element={<InstituteProfile />}></Route>
                  <Route path="/editinstituteprofile" element={<EditProfile />}></Route>
                  <Route path="/admit-students" element={<AdmitStudents />}></Route>
                  <Route path="/editstudents" element={<EditStudentData />}></Route>
                  <Route path="/admissionenquiry" element={<AdmissionEnquiry />}></Route>
                  <Route path="/admit-bulk-students" element={<AdmitBulk />}></Route>
                  <Route path="/student-info" element={<Studentsinformation />}></Route>
                  <Route path="/student-promote" element={<StudentPromotion />}></Route>
                  <Route path="/student-transfer" element={<StudentTransfer />}></Route>
                  <Route path="/student-birthdays" element={<StudentBirthdays />}></Route>
                  <Route path="/studentInfo" element={<StudentInfo />}></Route>
                  <Route path="/manage-accounts" element={<ManageParents />}></Route>
                  <Route path="/editparents" element={<EditParents />}></Route>
                  <Route path='/student-id-Card' element={<StudentIdCard />}></Route>
                  <Route path='/staff-id-card' element={<StaffIdCard />}></Route>
                  <Route path='/id-card-stu' element={<IdCardStu />}></Route>
                  <Route path='/id-card-staff' element={<IdCardStaff />}></Route>
                  <Route path='/accountant' element={<Accountant />}></Route>
                  <Route path='/feepayment' element={<Fee />}></Route>
                  <Route path='/Check' element={<FeeManage />}></Route>
                  <Route path='/manage-attendance' element={<ManageAttendance />}></Route>
                  <Route path='/student-attendance' element={<StudentAttendance />}></Route>
                  <Route path='/student-report' element={<StudentReport />}></Route>
                  <Route path='/student-report-print' element={<StudentReportPrint />}></Route>
                  <Route path='/addtimetable' element={<AddTimeTable />}></Route>
                  <Route path='/liveclass' element={<LiveClass />} />
                  <Route path='/staff-attendance' element={<StaffAttendance />} />
                  <Route path='/staffsalarysetting' element={<StaffSalarySetting />} />
                  <Route path='/salaryGeneration' element={<SalaryGeneration />} />
                  <Route path='/managesalaries' element={<ManageSalaries />} />
                  <Route path='/loanmanagement' element={<LoanManagement />} />
                  <Route path='/salaryloanreport' element={<SalaryLoanReport />} />
                  <Route path='/balancesheet' element={<Balancesheet />} />
                  <Route path='/studenttrash' element={<StudentTrash />} />
                  <Route path='/HomeWork' element={<HomeWork />} />
                  {/* <Route path='/submissionhomework' element={<ClassHomeWork />} /> */}
                  <Route path='/exams' element={<ExamTests />} />
                  <Route path='/librarymember' element={<LibraryMember />} />
                  <Route path='/booklist' element={<BookList />} />
                  <Route path='/bookreturn' element={<BookReturn />} />
                  <Route path='/bookissue' element={<BookIssue />} />
                  <Route path='/Studymaterial' element={<AllTeacher />} />
                  <Route path='/studentdetail/:id' element={<StudentDetail />} />
                  <Route path='/feesoverview' element={<FeesOverview />} />
                  <Route path='/feestructure' element={<FeeStructure />} />
                  <Route path='/feesdetails' element={<FeeDetails />} />
                  <Route path='/feeremindertoall' element={<FeeReminderToAll />} />
                  <Route path='/pendingfees' element={<PendingFeesTracker />} />
                  <Route path='/addclasses' element={<AddClass />} />
                  <Route path='/allclasses&subjects' element={<Subjects />} />
                  <Route path='/testfile' element={<ImageUploadComponent />} />
                  <Route path='/stock-Account' element={<Stock />} />
                  <Route path="/staff-management" element={<StaffManagement />}></Route>
                  <Route path="/non-teaching-staff" element={<NonTeachingStaff />}></Route>
                  <Route path="/teaching-staff" element={<TeachingStaff />}></Route>
                </Route>
                <Route path='/login' element={<LoginForm />} />
                <Route path='/instituteregister' element={<InstituteRegister />} />
              </Routes>
              <Footer />
              <div className="content-backdrop fade"></div>
            </div>
          </div>
        </div>
        <div className="layout-overlay layout-menu-toggle"></div>
      </div>
    </>
  )
}

export default SupAdminDashboard
