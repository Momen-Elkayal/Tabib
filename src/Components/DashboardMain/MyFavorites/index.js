import React from "react";
import NavBarDash from "../NavBarDash/NavBarDash";
import NavSide from "../NavSide/NavSide";
import Dashboard from "../Breadcrumb/Breadcrumb";
import { NumberBox } from "../../Listings/MapGrid/index";
import FooterDash from "../FooterDash/FooterDash";
import { ScrollTop } from "../../Home/Home1/index";

import "./MyFavorites.css";

const MyFavorites = () => {
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
        <NavSide activeFavorites="active" />
        <div className="emptydiv"></div>
        <div className="content">
          <div className="noContainer">
            <Dashboard title="My Favorites" />
            <FavoritesItem
              imgsrc="image/MapList/clinic-list-1.jpg"
              id="delete"
            />
            <FavoritesItem
              imgsrc="image/MapList/clinic-list-2.jpg"
              id="delete2"
            />
            <FavoritesItem
              imgsrc="image/MapList/clinic-list-3.jpg"
              id="delete3"
            />
            <FavoritesItem
              imgsrc="image/MapList/clinic-list-4.jpg"
              id="delete4"
            />
            <NumberBox />
          </div>
          <FooterDash />
        </div>
      </div>
      <ScrollTop backColor="background-main-color" />
    </>
  );
};

export default MyFavorites;

const FavoritesItem = (props) => {
  function Delete() {
    var Delete = document.getElementById(`${props.id}`);
    Delete.classList.add("display-none");
  }

  return (
    <div
      className="FavoritesItem flex-row shadow hover transition-transform"
      id={props.id}
    >
      <img src={props.imgsrc} />
      <h2>
        <a className="name text-dark" href="#">
          Alrayan Eye Clinic
        </a>

        <a
          className="text-grey-2 hover-red transition"
          href="#"
          onClick={Delete}
        >
          <i className="fa fa-window-close-o"></i> Delete
        </a>
      </h2>
    </div>
  );
};
