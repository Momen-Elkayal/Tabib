import React, { Component } from "react";
import NavBar from "../../NavBar/NavBar";
import { PackageBox } from "../../DashboardMain/Packagess/index";
import Footer from "../../Footer/Footer";
import { ScrollTop } from "../../Home/Home1/index";
import "./PricingTables.css";
const PricingTables = () => {
  return (
    <>
      <NavBar
        imgSrc="image/logo/logo-1.png"
        backgroundList="background-main-color"
        hover="hover-blue"
        backNavmenu="background-main-color"
      />
      <div className="breadcrumb2 text-center padding-30px">
        <ul>
          <li className="cursor hover-red transition">
            Home <i className="fa fa-angle-right"></i>
          </li>
          <li>Pricing Tables</li>
        </ul>
        <h1 className="text-dark">Pricing Tables</h1>
      </div>

      <div className="container">
        <div className="Pricebox flex-row ">
          <PackageBox
            background="background-main-color"
            name="BASIC"
            backbtn="background-grey-1"
            animate="wow animate__backInLeft"
            delay=".3s"
          />
          <PackageBox
            background="background-second-color"
            name="POWER"
            backbtn="background-second-color"
            color="wightColor"
            animate="wow animate__backInDown"
            delay=".3s"
          />
          <PackageBox
            background="background-main-color"
            name="ULTIMATE"
            backbtn="background-grey-1"
            animate="wow animate__backInRight"
            delay=".3s"
          />
        </div>
      </div>
      <Footer background="background-main-color" />
      <ScrollTop backColor="background-main-color" />
    </>
  );
};

export default PricingTables;
