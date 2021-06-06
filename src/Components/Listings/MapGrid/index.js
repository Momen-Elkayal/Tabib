import React from "react";
import NavBar from "../../NavBar/NavBar";
import Footer from "../../Footer/Footer";
import { Link } from "react-router-dom";
import { ScrollTop } from "../../Home/Home1/index";

import "./MapGrid.css";
const MapGrid = () => {
  return (
    <>
      <NavBar
        imgSrc="image/logo/logo-1.png"
        backgroundList="background-main-color"
        hover="hover-blue"
        noContainer="noContainer"
        backNavmenu="background-main-color"
      />
      <div className="MapGrid flex-row">
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
          ></iframe>
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
                <i className="fa fa-list-ul dark"></i>
              </Link>
              <Link
                to="MapGrid"
                href="#"
                className="active-blue hover-red transition"
              >
                <i className="fa fa-th-large"></i>
              </Link>
            </div>
          </div>
          <div className="clearfix"></div>
          <hr />
          <div className="Boxses flex-row">
            <Box imgsrc="image/Home/Clinic/clinic-1.jpg" />
            <Box imgsrc="image/Home/Clinic/clinic-2.jpg" />
            <Box imgsrc="image/Home/Clinic/clinic-3.jpg" />
            <Box imgsrc="image/Home/Clinic/clinic-4.jpg" />
          </div>
          <NumberBox />
        </div>
      </div>
      <ScrollTop backColor="background-main-color" />

      <Footer background="background-main-color" />
    </>
  );
};

export default MapGrid;

const Box = (props) => {
  return (
    <div className="box shadow  hover transition-transform">
      <div className="img">
        <img src={props.imgsrc} />
      </div>
      <div className="info padding-30px">
        <h5 className="text-dark">
          <a href="#">Alrayan Eye Clinic</a>
        </h5>
        <div className="rate flex-row">
          <div className="map text-grey-2 ">
            <i className="fa fa-map-o"></i>
            <span>California</span>
          </div>
          <ul className="flex-row">
            <li className="active">
              <i className="fa fa-star"></i>
            </li>
            <li className="active">
              <i className="fa fa-star"></i>
            </li>
            <li className="active">
              <i className="fa fa-star"></i>
            </li>
            <li className="active">
              <i className="fa fa-star"></i>
            </li>
            <li className="text-grey-2">
              <i className="fa fa-star"></i>
            </li>
          </ul>
        </div>
      </div>
      <div className="close-info flex-row padding-lr-30px padding-tb-15px  background-light-grey">
        <div className="open text-lime hover-red transition">
          <i className="fa fa-bookmark-o"></i>
          Open Now!
        </div>
        <div className="save text-red hover-red transition">
          <i className="fa fa-heart-o"></i>
          Save
        </div>
      </div>
    </div>
  );
};

export const NumberBox = () => {
  return (
    <ul className="NumberBox">
      <li>
        <a href="#" className="disabled">
          Previous
        </a>
      </li>
      <li>
        <a href="#">1</a>
      </li>
      <li>
        <a href="#">2</a>
      </li>
      <li>
        <a href="#">3</a>
      </li>
      <li>
        <a href="#">Next</a>
      </li>
    </ul>
  );
};
