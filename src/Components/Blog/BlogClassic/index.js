import React from "react";
import NavBar from "../../NavBar/NavBar";
import { BoxLeft } from "../BlogGrid/index";
import { NumberBox } from "../../Listings/MapGrid/index";
import Footer from "../../Footer/Footer";
import { ScrollTop } from "../../Home/Home1/index";

import "./BlogClassic.css";

const BolgClassic = () => {
  return (
    <>
      <NavBar
        imgSrc="image/logo/logo-1.png"
        backgroundList="background-main-color"
        hover="hover-blue"
        backNavmenu="background-main-color"
      />
      <div className="container ClassicBlog">
        <div className="breadcrumb2 breadcrumb3">
          <ul>
            <li className="cursor hover-red transition">
              Home
              <i className="fa fa-angle-right"></i>
            </li>
            <li className="cursor hover-red transition">
              Blog <i className="fa fa-angle-right"></i>
            </li>
            <li> Classic Blog</li>
          </ul>
          <h1 className="text-dark">Classic Blog</h1>
        </div>
        <div className="flex-row">
          <div className="classicRight">
            <ClassicBlogBox imgsrc="image/Blog/Blogclass/class1.jpg" />
            <ClassicBlogBox imgsrc="image/Blog/Blogclass/class2.jpg" />
            <ClassicBlogBox imgsrc="image/Blog/Blogclass/class3.jpg" />
            <div className="numb">
              <NumberBox />
            </div>
          </div>
          <BoxLeft />
        </div>
      </div>
      <Footer background="background-main-color" />
      <ScrollTop backColor="background-main-color" />
    </>
  );
};

export default BolgClassic;

const ClassicBlogBox = (props) => {
  return (
    <div className="ClassicBlogBox shadow">
      <div className="img">
        <img src={props.imgsrc} alt="" />
      </div>

      <div className="tit-dad padding-30px background-light">
        <p className="text-blue">
          <i className="fa fa-folder-open-o"></i>{" "}
          <span className="hover-red transition cursor">News </span>,
          <span className="hover-red transition cursor"> Articles</span>
        </p>
        <div className="tit">
          <a href="#">
            Long Don’t Spend Time Beating On A Wall, Hoping To Trans ...
          </a>
        </div>
        <p>
          Mauris fermentum porta sem, non hendrerit enim bibendum consectetur.
          Fusce diam est, porttitor vehicula gravida at
        </p>
        <div className="user">
          <small>
            <i className="fa fa-user-o  text-grey-2"></i>
            <span> By : </span>
            <span className="hover-red transition cursor">Rabie Elkheir</span>
          </small>
        </div>
        <div className="user clock">
          <small>
            <i className="fa fa-clock-o  text-grey-2"></i>
            <span> Date : </span>
            <span className="hover-red transition cursor"> July 15, 2016</span>
          </small>
        </div>
      </div>
    </div>
  );
};
