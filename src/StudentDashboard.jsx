import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const StudentDashboard = () => {
  return (
    <Router>
      {token && <Header />}
      {token && <Sidebar />}
      <Routes>
        <Route path="/login" element={<StudentLogin />} />
        <Route path="/" element={<PrivateRoute />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/feeoverview" element={<FeeDashboard />} />
          <Route path="/feehistory" element={<FeeHistory />} />
          <Route path="/studymaterial" element={<StudyMaterial />} />
          <Route path="/homework" element={<HomeWork />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default StudentDashboard;
