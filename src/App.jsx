import React, { useContext, useState } from 'react'
import SupAdminDashboard from './SupAdminDashboard'
import { MainContext } from './Components/Controller/MainProvider'
import StudentDashboard from './StudentDashboard'
import TeacherDashboard from './TeacherDashboard'
import LoginForm from './Components/Auth User/LoginForm'

function App() {
  const { token, userId, designation, Islogin } = useContext(MainContext)

  return (
    <>
      {designation === 'Institute' && Islogin ? (
        <div>
          <SupAdminDashboard />
        </div>
      ) : designation === 'Student' && Islogin ? (
        < StudentDashboard />
      ) : designation === 'Staff' && Islogin ? (
        < TeacherDashboard />
      ) : (
        <LoginForm />
      )
      }

    </>
  )
}

export default App
