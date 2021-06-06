import React from "react";
import NavBarDash from "../NavBarDash/NavBarDash";
import NavSide from "../NavSide/NavSide";
import Dashboard from "../Breadcrumb/Breadcrumb";
import { NumberBox } from "../../Listings/MapGrid/index";
import FooterDash from "../FooterDash/FooterDash";
import { ScrollTop } from "../../Home/Home1/index";

import "./Bookings.css";

const Bookings = () => {
  return (
    <>
      <NavBarDash
        imgSrc="image/logo/logo-1.png"
        backgroundList="background-second-color"
        hover="hover-blue"
        noContainer="noContainer"
        backNavmenu="background-main-color"
      />
      <div className="flex-row">
        <NavSide activeBookings="active" />
        <div className="emptydiv"></div>
        <div className="content">
          <div className="noContainer">
            <Dashboard title="Bookings" />
          </div>
          <div className="noContainer">
            <div className="flex-row Info">
              <Info imgsrc="image/Review/testimonial-1.png" id="Delete1"/>
              <Info imgsrc="image/Review/testimonial-2.png" id="Delete2"/>
              <Info imgsrc="image/Review/testimonial-3.png" id="Delete3"/>
              <Info imgsrc="image/Review/testimonial-4.png" id="Delete4"/>
              <Info imgsrc="image/Review/testimonial-2.png" id="Delete5"/>
              <Info imgsrc="image/Review/testimonial-1.png" id="Delete6"/>
            </div>
            <NumberBox />
          </div>
          <FooterDash />
        </div>
      </div>
      <ScrollTop backColor="background-main-color" />

    </>
  );
};

export default Bookings;

const Info = (props) => {
  function Delete() {
    var Delete = document.getElementById(`${props.id}`);
    Delete.classList.add("display-none");
  }

  return (
    <div
      className="info-box flex-row shadow hover transition-transform padding-30px"
      id={props.id}
    >
      <div className="img">
        <img src={props.imgsrc} />
      </div>
      <div className="text">
        <h3 className="text-dark"> Bakhita alrawi</h3>
        <p>
          Date :
          <span className="text-main-color hover-red transition cursor">
            July 15, 2016
          </span>
        </p>
        <p>
          Listing Name :
          <span className="text-main-color hover-red transition cursor">
            Alrayan Eye Clinic
          </span>
        </p>
        <p>
          Email :
          <span className="text-main-color hover-red transition cursor">
            info@yourmail.com
          </span>
        </p>
        <p>
          Phone :
          <span className="text-main-color hover-red transition cursor">
            0022219653258
          </span>
        </p>
        <p className="text-grey-2">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.
        </p>
        <div className="icons">
          <a className="icon text-grey-2 hover-red transition" href="#">
            <i className="fa fa-file-text-o"></i> Approve
          </a>
          <a
            className="icon text-grey-2 hover-red transition"
            href="#"
            onClick={Delete}
          >
            <i className="fa fa-window-close-o"></i> Delete
          </a>
        </div>
      </div>
    </div>
  );
};
