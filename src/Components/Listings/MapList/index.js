import React from "react";
import NavBar from "../../NavBar/NavBar";
import Footer from "../../Footer/Footer";
import { Link } from "react-router-dom";
import { NumberBox } from "../MapGrid/index";
import { ScrollTop } from "../../Home/Home1/index";

import "./MapList.css";
const MapList = () => {
  return (
    <>
      <NavBar
        imgSrc="image/logo/logo-1.png"
        backgroundList="background-main-color"
        hover="hover-blue"
        noContainer="noContainer"
        backNavmenu="background-main-color"
      />

      <div className="MapList MapGrid flex-row">
        <div className="empty cursor-grab">
          <iframe
            width="100%"
            height="100%"
            frameBorder="0"
            scrolling="no"
            marginHeight="0"
            marginWidth="0"
            id="gmap_canvas"
            src="https://maps.google.com/maps?width=705&height=603&hl=en&q=%20Gaza+()&t=&z=12&ie=UTF8&iwloc=B&output=embed"
          ></iframe>{" "}
          <a href="https://writingbachelorthesis.com/">
            writingbachelorthesis.com
          </a>
        </div>

        <div className="Listings padding-45px">
          <div className="Search">
            <form className="flex-row">
              <div className="keywords input">
                <img src="image/Home/form-icon/icon-1.png" />
                <input placeholder="keywords..." />
              </div>

              <div className="categories  input">
                <img src="image/Home/form-icon/icon-3.png" />
                <input placeholder="All Categories" />
              </div>

              <div className="button">
                <button className="background-black">Search Now</button>
              </div>
            </form>
          </div>
          <hr />
          <div className="clearfix">
            <div className="floatLeft">14 Results Found</div>
            <div className="floatRight">
              <Link to="/MapList" href="#" className="hover-red transition">
                <i className="active-blue fa fa-list-ul"></i>
              </Link>
              <Link to="MapGrid" href="#" className=" hover-red transition">
                <i className=" fa fa-th-large dark"></i>
              </Link>
            </div>
          </div>
          <div className="clearfix"></div>
          <hr />
          <div className="BoxsesList">
            <BoxList imgsrc="image/MapList/clinic-list-1.jpg" />
            <BoxList imgsrc="image/MapList/clinic-list-2.jpg" />
            <BoxList imgsrc="image/MapList/clinic-list-3.jpg" />
            <BoxList imgsrc="image/MapList/clinic-list-4.jpg" />
          </div>
          <NumberBox />
        </div>
      </div>
      <ScrollTop backColor="background-main-color" />

      <Footer background="background-main-color" />
    </>
  );
};

export default MapList;

const BoxList = (props) => {
  return (
    <div className="BoxList shadow flex-row hover transition-transform">
      <div className="img">
        <img src={props.imgsrc} />
      </div>
      <div className="Text">
        <div className="map text-grey-2 ">
          <i className="fa fa-map-o"></i>
          <span>California</span>
        </div>
        <h2>
          <a href="#" className="text-dark">
            Alrayan Eye Clinic
          </a>
        </h2>
        <div className="close-info flex-row">
          <div className="open cursor text-lime hover-red transition">
            <i className="fa fa-bookmark-o"></i>
            Open Now!
          </div>
          <div className="save cursor text-red hover-red transition">
            <i className="fa fa-heart-o"></i>
            Save
          </div>
          <div className="hospital cursor text-blue hover-red transition">
            <i className="fa fa-hospital-o"></i>
            Hospital
          </div>
        </div>
      </div>
    </div>
  );
};
