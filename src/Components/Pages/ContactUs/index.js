import React, { Component } from "react";
import NavBar from "../../NavBar/NavBar";
import Footer from "../../Footer/Footer";
import { ScrollTop } from "../../Home/Home1/index";
import "./ContactUs.css";
const ContactUs = () => {
  return (
    <>
      <NavBar
        imgSrc="image/logo/logo-1.png"
        backgroundList="background-main-color"
        hover="hover-blue"
        backNavmenu="background-main-color"
      />

      <div className="container">
        <div className="breadcrumb2 text-center padding-30px">
          <ul>
            <li className="cursor hover-red transition">
              Home <i className="fa fa-angle-right"></i>
            </li>
            <li>Contact Us</li>
          </ul>
          <h1 className="text-dark">Contact Us</h1>
        </div>
      </div>
      <div className="container">
        <div className="flex-row ContactUs">
          <div className="MapLeft">
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
          </div>
          <div className="Boxright">
            <p className="text-grey-2">
              Mauris fermentum porta sem, non hendrerit enim bibendum
              consectetur. Fusce diam est, porttitor vehicula gravida at,
              accumsan bibendum tincidunt imperdiet. Maecenas quis magna
              faucibus, varius ante sit amet, varius augue.
            </p>
            <div className="flex-row">
              <BoxContact
                icon="fa fa-envelope-o"
                type="Email"
                text="info@site-name.com"
              />
              <BoxContact
                icon="fa fa-map-o"
                type="Address"
                text="Marmora Road, Glasgow"
              />
              <BoxContact
                icon="fa fa-link"
                type="Website"
                text="www.site-name.com"
              />
              <BoxContact
                icon="fa fa-phone"
                type="Telphone"
                text="+222 123 3019"
              />
            </div>
          </div>
        </div>
      </div>

      <Footer background="background-main-color" />
      <ScrollTop backColor="background-main-color" />

    </>
  );
};

export default ContactUs;

const BoxContact = (props) => {
  return (
    <div className="BoxContact shadow background-light padding-30px">
      <i className={props.icon}></i>
      <p className="type">{props.type}</p>
      <p className="textcont">{props.text}</p>
    </div>
  );
};
