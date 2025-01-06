import React from 'react'
import Logo from "../../assets/img/logo_black.svg"
function Login() {
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
                    <img src={Logo} alt="" style={{maxHeight:"90px"}}/>
                  </span>
                </a>
              </div>
              <br />
              <h4 className="mb-2">Welcome to LMS 👋</h4>
              <p className="mb-4">Please sign-in to your account and start the adventure</p>

              <form id="formAuthentication" className="mb-3" action="dashboard.html" method="POST">
                <div className="mb-3">
                  <label for="email" className="form-label">Email or Username</label>
                  <input type="text"className="form-control" id="email"name="email-username" placeholder="Enter your email or username" autofocus />
                </div>
                <div className="mb-3 form-password-toggle">
                  <div className="d-flex justify-content-between">
                    <label className="form-label" for="password">Password</label>
                    <a href="forgot-password.html">
                      <small>Forgot Password?</small>
                    </a>
                  </div>
                  <div className="input-group input-group-merge">
                    <input type="password" id="password" className="form-control" name="password" placeholder="Password" aria-describedby="password"
                    />
                    <span className="input-group-text cursor-pointer"><i className="bx bx-hide"></i></span>
                  </div>
                </div>
                <div className="mb-3">
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="remember-me" />
                    <label className="form-check-label" for="remember-me"> Remember Me </label>
                  </div>
                </div>
                <div className="mb-3">
                  <button className="btn btn-primary d-grid w-100" type="submit">Sign in</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Login
