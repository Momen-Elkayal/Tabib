import React from "react";
import NavBar from "../../NavBar/NavBar";
import { BoxLeft } from "../BlogGrid/index";
import { NumberBox } from "../../Listings/MapGrid/index";
import Footer from "../../Footer/Footer";
import { ScrollTop } from "../../Home/Home1/index";

import "./BlogList.css";

const BlogList = () => {
  return (
    <>
      <NavBar
        imgSrc="image/logo/logo-1.png"
        backgroundList="background-main-color"
        hover="hover-blue"
        backNavmenu="background-main-color"
      />
      <div className="container ListBlog">
        <div className="breadcrumb2 breadcrumb3">
          <ul>
            <li className="cursor hover-red transition">
              Home
              <i className="fa fa-angle-right"></i>
            </li>
            <li className="cursor hover-red transition">
              Blog <i className="fa fa-angle-right"></i>
            </li>
            <li> List Blog</li>
          </ul>
          <h1 className="text-dark">List Blog</h1>
        </div>
        <div className="flex-row">
          <div className="ListRight">
            <BlogBoxList imgsrc="image/Home/Clinic/clinic-6.jpg" />
            <BlogBoxList imgsrc="image/Home/Clinic/clinic-5.jpg" />
            <BlogBoxList imgsrc="image/Home/Clinic/clinic-4.jpg" />
            <BlogBoxList imgsrc="image/Home/Clinic/clinic-3.jpg" />
            <BlogBoxList imgsrc="image/Home/Clinic/clinic-2.jpg" />
            <BlogBoxList imgsrc="image/Home/Clinic/clinic-1.jpg" />
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

export default BlogList;

const BlogBoxList = (props) => {
  return (
    <div className="BlogBoxList">
      <div className="flex-row">
        <div className="img">
          <img src={props.imgsrc} alt="" />
        </div>

        <div className="info padding-30px">
          <h2 className="hover-red transition">
            Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit, Sed Do
            Eiusmod Tempor Incididunt
          </h2>
          <div>
            <span className="inline-block marright20">
              By :{" "}
              <span className="text-blue hover-red transition cursor">
                Rabie Elkheir
              </span>
            </span>
            <span className="inline-block marright20">
              Date :{" "}
              <span className="text-blue hover-red transition cursor">
                July 15, 2016
              </span>
            </span>
            <span className="inline-block marright20">
              Categorie :{" "}
              <span className="text-blue hover-red transition cursor">
                Arts
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
