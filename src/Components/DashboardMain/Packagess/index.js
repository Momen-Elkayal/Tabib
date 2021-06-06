import React from "react";
import NavBarDash from "../NavBarDash/NavBarDash";
import NavSide from "../NavSide/NavSide";
import Dashboard from "../Breadcrumb/Breadcrumb";
import FooterDash from "../FooterDash/FooterDash";
import { ScrollTop } from "../../Home/Home1/index";

import "./Packagess.css";
const Packagess = () => {
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
        <NavSide activePackages="active" />
        <div className="emptydiv"></div>
        <div className="content">
          <div className="noContainer">
            <Dashboard title="Packages" />
          </div>
          <div className="PackageBoxses flex-row noContainer">
            <PackageBox
              background="background-main-color"
              name="BASIC"
              delay=".3s"
              backbtn="background-grey-1"
              animate="wow animate__backInUp"
            />
            <PackageBox
              background="background-second-color"
              name="POWER"
              delay=".5s"
              backbtn="background-grey-1"
              animate="wow animate__backInUp"
            />
            <PackageBox
              background="background-main-color"
              name="ULTIMATE"
              delay=".7s"
              backbtn="background-grey-1"
              animate="wow animate__backInUp"
            />
          </div>
          <FooterDash />
        </div>
      </div>
      <ScrollTop backColor="background-main-color" />
    </>
  );
};

export default Packagess;

export const PackageBox = (props) => {
  return (
    <div
      className={`${props.animate} PackageBox`}
      data-wow-delay={props.delay}
      data-wow-duration="1s"
    >
      <ul>
        <li className={`${props.background} padding-40px head`}>
          <span className="block name">{props.name}</span>
          <span className="block small-text">Officia deserunt mollitia</span>
        </li>
        <li className=" price background-grey-1 padding-15px ">
          <span className="block">
            <i className="text-up-small ">$</i>
            <span className="number">5</span>
            <span className="text-up-small ">.49</span>
          </span>
          <span className="text-small ">Per Month</span>
        </li>
        <li className="li">
          <strong>1</strong> Website
        </li>
        <li className="li">
          <strong>25</strong> EmailAddresses
        </li>
        <li className="li">
          <strong>100</strong> GBStorage
        </li>
        <button className={`${props.backbtn} ${props.color}`}>Sign Up</button>
      </ul>
    </div>
  );
};
