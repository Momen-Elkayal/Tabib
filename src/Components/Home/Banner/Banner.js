import React from "react";
import Categorie from "./categorie";
import ListingSearch from "./ListingSearch";
import "./Banner.css";
const Banner = (props) => {
  return (
    <div className="banner">
      <div className="container">
        <h1 className={`text-main-color ${props.center}`}>Health Directory</h1>
        <h4 className={`text-main-color ${props.center}`}>
          A better Doctors , Clinics & Labs . We'll help you find it
        </h4>
        <ListingSearch
          backgroundSearch="background-second-color"
          width="width-65"
          center1={props.center1}
        />
        <Categorie
          background="background-main-color"
          width="width-25"
          width2="width-55"
          center2={props.center2}
        />
      </div>
    </div>
  );
};

export default Banner;
