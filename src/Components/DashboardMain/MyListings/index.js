import React from "react";
import NavBarDash from "../NavBarDash/NavBarDash";
import NavSide from "../NavSide/NavSide";
import Dashboard from "../Breadcrumb/Breadcrumb";
import { NumberBox } from "../../Listings/MapGrid/index";
import FooterDash from "../FooterDash/FooterDash";
import { ScrollTop } from "../../Home/Home1/index";

import "./MyListings.css";

const MyListings = () => {
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
        <NavSide activeListings="active" />
        <div className="emptydiv"></div>
        <div className="content">
          <div className="noContainer">
            <Dashboard title="My Listings" />
            <BoxClinic imgsrc="image/MapList/clinic-list-1.jpg" id="Delete1" />
            <BoxClinic imgsrc="image/MapList/clinic-list-2.jpg" id="Delete2" />
            <BoxClinic imgsrc="image/MapList/clinic-list-3.jpg" id="Delete3" />
            <BoxClinic imgsrc="image/MapList/clinic-list-4.jpg" id="Delete4" />
            <NumberBox />
          </div>
          <FooterDash />
        </div>
      </div>
      <ScrollTop backColor="background-main-color" />
    </>
  );
};

export default MyListings;

const BoxClinic = (props) => {
  function Delete() {
    var Delete = document.getElementById(`${props.id}`);
    Delete.classList.add("display-none");
  }
  return (
    <div
      className="BoxClinic flex-row  shadow hover transition-transform"
      id={props.id}
    >
      <div className="img">
        <img src={props.imgsrc} />
      </div>
      <div className="text">
        <p className="text-grey-2">
          <i className="fa fa-map-o"></i> California
        </p>
        <h2>
          <a className="text-dark" href="#">
            Alrayan Eye Clinic
          </a>
          <a className="icon text-grey-2 hover-red transition" href="#">
            <i className="fa fa-file-text-o"></i> Edit
          </a>
          <a
            className="icon text-grey-2 hover-red transition"
            href="#"
            onClick={Delete}
          >
            <i className="fa fa-window-close-o"></i> Delete
          </a>
        </h2>

        <div className="close-info">
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
