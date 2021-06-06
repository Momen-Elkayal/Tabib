import React from "react";
import NavBar from "../../NavBar/NavBar";
import { Link } from "react-router-dom";
import Footer from "../../Footer/Footer";
import { ScrollTop } from "../../Home/Home1/index";

const SignUp = () => {
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
            <li>Sing Up</li>
          </ul>
          <h1 className="text-dark">Sing Up Page</h1>
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

            <div className="form-group">
              <label>Confirm Your Password</label>
              <input type="password" />
            </div>

            <div className="form-group margin-bot15">
              <label>Your Gender</label>
              <select>
                <option>Male</option>
                <option>Femail</option>
              </select>
            </div>

            <div className="remember margin-bot15">
              <div className="checkbox">
                <label>
                  <input type="checkbox" /> I Accept The{" "}
                  <a href="#">Terms And Conditions</a> Of The Website
                </label>
              </div>
            </div>

            <Link className="loginbtn margin-tb-15px" to="/Dashboard">
              Complete sign up !
            </Link>
            <div className="or"></div>
            <Link className="loginfac" to="/Dashboard">
              <i className="fa fa-facebook-official"></i> Login With Facebook
            </Link>
            <Link className="logintw" to="/Dashboard">
              <i className="fa fa-twitter"></i> Login With Twitter
            </Link>
            <p>
              you have an account?
              <Link to="/Login" className="Link hover-red transition">
                {" "}
                Sing in !
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

export default SignUp;
