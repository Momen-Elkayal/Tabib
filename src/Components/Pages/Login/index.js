import React from "react";
import NavBar from "../../NavBar/NavBar";
import { Link } from "react-router-dom";
import Footer from "../../Footer/Footer";
import { ScrollTop } from "../../Home/Home1/index";

import "./Login.css";

const Login = () => {
  return (
    <>
      <NavBar
        imgSrc="image/logo/logo-1.png"
        backgroundList="background-main-color"
        hover="hover-blue"
        backNavmenu="background-main-color"
      />
      <div className="container">
        <div className="breadcrumb2 text-center padding-30px">
          <ul>
            <li className="cursor hover-red transition">
              Home <i className="fa fa-angle-right"></i>
            </li>
            <li>Login Page</li>
          </ul>
          <h1 className="text-dark">Login Page</h1>
        </div>

        <div className="loginPage shadow padding-30px">
          <form>
            <div className="form-group">
              <label>Your Email</label>
              <input type="email" />
            </div>

            <div className="form-group">
              <label>Your Password</label>
              <input type="password" />
            </div>

            <div className="remember">
              <div className="checkbox">
                <label>
                  <input type="checkbox" /> Remember Me
                </label>
              </div>
              <a href="#" className="forget">
                Forgot my Password
              </a>
            </div>

            <Link className="loginbtn" to="/Dashboard">
              Login
            </Link>
            <div className="or"></div>
            <Link className="loginfac" to="/Dashboard">
              <i className="fa fa-facebook-official"></i> Login With Facebook
            </Link>
            <Link className="logintw" to="/Dashboard">
              <i className="fa fa-twitter"></i> Login With Twitter
            </Link>
            <p>
              Don't you have an account?
              <Link to="/SignUp" className="Link hover-red transition">
                {" "}
                Register Now!
              </Link>
            </p>
          </form>
        </div>
      </div>
      <Footer background="background-main-color" />
      <ScrollTop backColor="background-main-color" />

    </>
  );
};

export default Login;
