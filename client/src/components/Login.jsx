import React from 'react'
import './css/login.css';
import { Link } from 'react-router-dom';
import User from '../assets/img/user.png';
import lock from '../assets/img/lock.png';
import logo from '../assets/img/logo.png'

function Login() {
  return (
    <div className="page-sep">
    <div className="login-container">
      <form action="" method="post" className="row-4">
        <Link to={"/"} className="lb">
          <img src={logo} alt="" id="logo" />
          </Link>
        
        <div className="form-child" id="name-data" style={{ display: "none" }}>
          <input
            className="credential sub"
            type="text"
            name="username"
            placeholder="First Name"
          />
          <input
            className="credential sub"
            type="text"
            name="username"
            placeholder="Last Name"
          />
        </div>
        <div className="form-child">
          <img src={User} alt="" className="icon" />
          <input
            className="credential"
            type="text"
            name="username"
            placeholder="username"
            required=""
          />
        </div>
        <div className="form-child">
          <img src={lock} alt="" className="icon" />
          <input
            className="credential"
            type="password"
            name="password"
            placeholder="password"
          />
        </div>
        <div className="form-child">
          <input className="submit" type="submit" defaultValue="Login" />
        </div>
        <div style={{ margin: "auto", color: "white" }}>
        &nbsp; | &nbsp;{" "} <span className="foot">Forgot password?</span> &nbsp; | &nbsp;{" "}
          {/* New User */}
          {/* <span className="foot" id="signup" onclick="toogleName()">
            New user? Sign up
          </span> */}
        </div>
      </form>
    </div>
  </div>
  )
}

export default Login;
