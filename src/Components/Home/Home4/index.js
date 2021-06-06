import React from "react";
import NavBar from "../../NavBar/NavBar";
import Banner from "../Banner/Banner";
import Service from "../Servicee/Service";
import FamousDoctors from "../Famous-Doctors/FamousDoctors";
import Clinic from "../Clinic/Clinic";
import Blog from "../Blog/Blog";
import Footer from "../../Footer/Footer";
import { ScrollTop } from "../Home1/index";

const Home4 = () => {
  return (
    <>
      <div className="Header Header4">
        <img
          className="background-img"
          src="image/Home/banner-img/banner_3.jpg"
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
          center="text-center"
          center1="center1"
          center2="center2"
        />
      </div>
      <Service color="text-second-color" />
      <FamousDoctors colorHeader="text-main-color" color="active" />
      <Clinic colorHeader="text-main-color" />
      <Blog colorHeader="text-main-color" />
      <ScrollTop backColor="background-main-color" />

      <Footer
        background="background-main-color"
        animate="wow animate__slideInUp"
      />
    </>
  );
};

export default Home4;
