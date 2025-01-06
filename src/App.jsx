import React, { useState } from 'react'
import Dashboard from './Dashboard'
import { Route, Routes } from 'react-router-dom'
import Login from './Components/Auth/Login'
import PasswordF from './Components/Auth/PasswordF'

function App() {
  return (
    <>
      {
        <div>
          <Dashboard />
        </div>
      }

    </>
  )
}

export default App
