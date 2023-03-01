import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import axios from "axios";
// import logo from "../assets/img/logo.png";
import "../../assets/css/Sign.css";

function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);

  const url =
    "https://febe-34-ayo-skilvul-production.up.railway.app/user/login/";

  const changeEmail = (e) => {
    const value = e.target.value;
    setEmail(value);
  };

  const changePassword = (e) => {
    const value = e.target.value;
    setPassword(value);
  };

  const loginbtn = (e) => {
    e.preventDefault();
    const data = {
      email: email,
      password: password,
    };
    axios.post(url, data).then((result) => {
      if (result) {
        localStorage.setItem("token", result.data.token);
        setRedirect(true);
      }
    });
  };

  return (
    <React.Fragment>
      {/* {redirect && <Navigate to="/home" />} */}
      <div className="wrapper">
        <div className="auth-box">
          <div className="auth-header">
            <div className="auth-header-logo">
              {/* <img src={logo} alt="" className="auth-header-logo-img" /> */}
            </div>
            <h1 className="auth-header-title">Welcome to Dis-Help</h1>
            <p className="auth-header-subtitle">Login terlebih dahulu.</p>
          </div>
          <div className="auth-body">
            <form action="" className="auth-form-validation">
              <div className="input-field">
                <label htmlFor="" className="input-label">
                  Email Address
                </label>
                <input
                  type="email"
                  className="input-control"
                  name="email"
                  id="email"
                  value={email}
                  onChange={changeEmail}
                  placeholder="contoh@gmail.com"
                  autoComplete="off"
                  required
                />
              </div>
              <div className="input-field">
                <label htmlFor="" className="input-label">
                  Password
                </label>
                <input
                  type="password"
                  className="input-control"
                  name="password"
                  id="password"
                  value={password}
                  onChange={changePassword}
                  placeholder="Password"
                  autoComplete="off"
                  required
                />
              </div>
              <div className="flex-end">
                <Link to={"/forgot-password"} className="link-end">
                  Forgot Password ?
                </Link>
              </div>
              <button type="submit" className="btn-submit" onClick={loginbtn}>
                Login
              </button>
            </form>
            <p className="text-center">
              Tidak punya Akun ?
              <Link to={"/signup"} className="link-text-center">
                Buat Akun
              </Link>
            </p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Signin;
