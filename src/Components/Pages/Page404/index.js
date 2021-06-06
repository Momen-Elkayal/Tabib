import React, { Component } from "react";
import { Link } from "react-router-dom";
import NavBar from "../../NavBar/NavBar";
import Footer from "../../Footer/Footer";
import { ScrollTop } from "../../Home/Home1/index";
import "./Page404.css";
const Page404 = () => {
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
            <li>404 page</li>
          </ul>
        </div>

        <div className="error">
          <img src="image/Page404/404.png" />
          <h3>Page Not Fount</h3>
          <h4>Ooops! The page you are looking for, couldn't be found.</h4>
          <Link className="GoHome background-second-color" to="/">
            <i className="fa fa-home"></i>
            Go Home
          </Link>
        </div>
      </div>
      <Footer background="background-main-color" />
      <ScrollTop backColor="background-main-color" />

    </>
  );
};

export default Page404;
