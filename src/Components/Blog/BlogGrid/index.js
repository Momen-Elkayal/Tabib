import React from "react";
import NavBar from "../../NavBar/NavBar";
import { NumberBox } from "../../Listings/MapGrid/index";
import Footer from "../../Footer/Footer";
import { ScrollTop } from "../../Home/Home1/index";

import "./BlogGrid.css";
const BlogGrid = () => {
  return (
    <>
      <NavBar
        imgSrc="image/logo/logo-1.png"
        backgroundList="background-main-color"
        hover="hover-blue"
        backNavmenu="background-main-color"
      />

      <div className="container BlogGrid">
        <div className="breadcrumb2 breadcrumb3">
          <ul>
            <li className="cursor hover-red transition">
              Home
              <i className="fa fa-angle-right"></i>
            </li>
            <li className="cursor hover-red transition">
              Blog <i className="fa fa-angle-right"></i>
            </li>
            <li> Grid Blog</li>
          </ul>
          <h1 className="text-dark">Grid Blog</h1>
        </div>

        <div className="flex-row">
          <div className="boxright">
            <div className="flex-row width-100">
              <BoxGrid imgSrc="image/Home/Clinic/clinic-1.jpg" />
              <BoxGrid imgSrc="image/Home/Clinic/clinic-2.jpg" />
              <BoxGrid imgSrc="image/Home/Clinic/clinic-3.jpg" />
              <BoxGrid imgSrc="image/Home/Clinic/clinic-4.jpg" />
              <BoxGrid imgSrc="image/Home/Clinic/clinic-5.jpg" />
              <BoxGrid imgSrc="image/Home/Clinic/clinic-6.jpg" />
            </div>
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

export default BlogGrid;

const BoxGrid = (props) => {
  return (
    <div className="boxs shadow">
      <div className="img">
        <img src={props.imgSrc} alt=""/>
      </div>
      <div className="info padding-25px">
        <p>
          <i className="fa fa-folder-open-o text-main-color"></i>
          <span className="text-main-color hover-red transition cursor">
            {" "}
            News{" "}
          </span>
          ,
          <span className="text-main-color hover-red transition cursor">
            {" "}
            Article
          </span>
        </p>
        <h3 className="margin-tb-15px cursor transition">
          Long Don’t Spend Time Beating On A Wall, Hoping To Trans ...
        </h3>
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

export const BoxLeft = () => {
  return (
    <div className="boxleft">
      <div className="search background-light borderrad10 padding-30px">
        <h3 className="title-i">
          <i className="fa fa-search"></i>
          Search
        </h3>
        <hr />
        <div className="flex-row">
          <input placeholder="Search..." />
          <button className="background-main-color cursor">Search</button>
        </div>
      </div>

      <div className="folder background-light borderrad10 padding-30px">
        <h3 className="title-i">
          <i className="fa fa-folder-open-o"></i>
          Categories
        </h3>
        <hr />
        <ul>
          <div>
            <i className="fa fa-folder-open"></i> <li>Tech</li>
          </div>
          <div>
            <i className="fa fa-folder-open"></i> <li>Gallary</li>
          </div>
          <div>
            <i className="fa fa-folder-open"></i> <li>UI Design</li>
          </div>
          <div>
            <i className="fa fa-folder-open"></i> <li>Shop</li>
          </div>
          <div>
            <i className="fa fa-folder-open"></i> <li>Wordpress</li>
          </div>
          <div>
            <i className="fa fa-folder-open"></i> <li>Cultur</li>
          </div>
        </ul>
      </div>

      <div className="instagram background-light borderrad10 padding-30px">
        <h3 className="title-i">
          <i className="fa fa-instagram"></i>
          Instagram
        </h3>
        <hr />
        <div className="flex-row">
          <div className="img">
            <img src="image/Blog/instagram/instagram-1.jpg" alt="" />
          </div>
          <div className="img">
            <img src="image/Blog/instagram/instagram-2.jpg"  alt=""/>
          </div>
          <div className="img">
            <img src="image/Blog/instagram/instagram-3.jpg"  alt=""/>
          </div>
          <div className="img">
            <img src="image/Blog/instagram/instagram-4.jpg"  alt=""/>
          </div>
        </div>
      </div>
    </div>
  );
};
