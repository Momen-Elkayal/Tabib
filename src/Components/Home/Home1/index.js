import React, { Component } from "react";
import NavBar from "./../../NavBar/NavBar";
import Banner from "./../Banner/Banner";
import Service from "./../Servicee/Service";
import FamousDoctors from "./../Famous-Doctors/FamousDoctors";
import Clinic from "./../Clinic/Clinic";
import Blog from "./../Blog/Blog";
import Footer from "./../../Footer/Footer";
import "./Home1.css";

class Home1 extends Component {
  render() {
    return (
      <>
        <div className="Header Header1">
          <img
            className="background-img"
            src="image/Home/banner-img/banner_1.jpg"
          />
          <NavBar
            imgSrc="image/logo/logo-1.png"
            backgroundList="background-main-color"
            hover="hover-blue"
            backNavmenu="background-main-color"
          />
          <Banner
            background="background-main-color"
            backgroundSearch="background-second-color"
          />
        </div>
        <Service color="text-second-color" />
        <FamousDoctors colorHeader="text-main-color" color="active" />
        <Clinic colorHeader="text-main-color" />
        <Blog colorHeader="text-main-color" />
        <ScrollTop backColor="background-main-color" />
        <Footer
          background="background-main-color"
          animate="wow animate__backInUp"
        />
      </>
    );
  }
}

export default Home1;

export const ScrollTop = (props) => {
  
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  return (
    <div className="container">
      <div className={`scrollTop ${props.backColor}`} onClick={scrollToTop}>
        <i className="fa fa-chevron-up"></i>
      </div>
    </div>
  );
};
