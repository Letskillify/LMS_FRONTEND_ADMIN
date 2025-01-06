import React from 'react'
import Logo from "../../assets/img/logo_black.svg"
function PasswordF() {
  return (
    <>
    
    <div className="container-xxl">
      <div className="authentication-wrapper authentication-basic container-p-y">
        <div className="authentication-inner">

          <div className="card">
            <div className="card-body">

              <div className="app-brand justify-content-center">
                <a href="index.html" className="app-brand-link gap-2">
                  <span className="app-brand-logo demo">
                    <img src={Logo} alt="" style={{maxHeight: "90px"}} />
                  </span>
                </a>
              </div>
              <h4 className="mb-2">Forgot Password? 🔒</h4>
              <p className="mb-4">Enter your email and we'll send you instructions to reset your password</p>
              <form id="formAuthentication" className="mb-3" action="dashboard.html" method="POST">
                <div className="mb-3">
                  <label for="email" className="form-label">Email</label>
                  <input type="text" className="form-control" id="email" name="email" placeholder="Enter your email" autofocus />
                </div>
                <div className="d-flex">
                  <button className="btn btn-primary d-grid w-100 me-2">Send Link</button>
                  <button className="btn btn-primary d-grid w-100 ms-2">Send OTP</button>
                </div>
                
              </form>
              <div className="text-center">
                <a href="login.html" className="btn btn-primary w-100 d-flex align-items-center justify-content-center">
                  <i className="bx bx-chevron-left scaleX-n1-rtl bx-sm"></i>
                  Back to login
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
    </>
  )
}

export default PasswordF
