import React, { Component } from "react";
import NavBar from "../../NavBar/NavBar";
import Service from "../../Home/Servicee/Service";
import { ScrollTop } from "../../Home/Home1/index";
import Footer from "../../Footer/Footer";
import "./AboutUs.css";
const AboutUs = () => {
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
            <li>About</li>
          </ul>
          <h1 className="text-dark">About</h1>
        </div>
      </div>

      <Service color="text-second-color" />

      <div className="AboutItems background-second-color">
        <div className="container">
          <div className="items flex-row">
            <Item itemName="Unlimited Colors" />
            <Item itemName="Powerful Website" />
            <Item itemName="Responsive Design" />
            <Item itemName="High Speed" />
          </div>
        </div>
      </div>

      <div className="Clients">
        <div className="container">
          <div className="ClientsTitle text-center">
            <h2>Our Clients</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Doloribus deserunt, nobis quae eos provident quidem. Quaerat
              expedita dignissimos perferendis, nihil quo distinctio eius
              architecto reprehenderit maiores.
            </p>
          </div>

          <div className="ClintImg flex-row">
            <div className="img">
              <img
                src="image/AboutClinte/c1.jpg"
                className="wow animate__zoomInDown"
                data-wow-delay=".3s"
                data-wow-duration="1s"
              />
            </div>
            <div className="img">
              <img
                src="image/AboutClinte/c2.jpg"
                className="wow animate__zoomInDown"
                data-wow-delay=".5s"
                data-wow-duration="1s"
              />
            </div>
            <div className="img">
              <img
                src="image/AboutClinte/c3.jpg"
                className="wow animate__zoomInDown"
                data-wow-delay=".7s"
                data-wow-duration="1s"
              />
            </div>
            <div className="img">
              <img
                src="image/AboutClinte/c4.jpg"
                className="wow animate__zoomInDown"
                data-wow-delay=".9s"
                data-wow-duration="1s"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="Touch background-main-color padding-tb-100px">
        <div className="container">
          <div className="TouchTitle">
            <h2>Get In Touch</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Doloribus deserunt, nobis quae eos provident quidem. Quaerat
              expedita dignissimos perferendis, nihil quo distinctio eius
              architecto reprehenderit maiores.
            </p>
          </div>

          <div className="flex-row">
            <div
              className="TouchForm wow animate__backInLeft"
              data-wow-delay=".3s"
              data-wow-duration="1s"
            >
              <form className="flex-row">
                <div className="Name">
                  <label>Full Name</label>
                  <input type="text" placeholder="Name" />
                </div>

                <div className="Email">
                  <label>Email</label>
                  <input type="email" placeholder="Email" />
                </div>

                <div className="Address">
                  <label>Address</label>
                  <input type="email" placeholder="1234 Main St" />
                </div>

                <div className="Message">
                  <label>Message</label>
                  <textarea rows="4"></textarea>
                </div>

                <a href="#">SEND</a>
              </form>
            </div>
            <div
              className="TouchAddrees wow animate__backInRight"
              data-wow-delay=".3s"
              data-wow-duration="1s"
            >
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Doloribus deserunt, nobis quae eos provident quidem. Quaerat
                expedita dignissimos perferendis, nihil quo distinctio eius
                architecto reprehenderit maiores.
              </p>
              <ul>
                <li>
                  <i className="fa fa-hospital-o"></i>Los Angeles - usa
                </li>
                <li>
                  <i className="fa fa-map-o"></i>850 Algreef Street
                </li>
                <li>
                  <i className="fa fa-bookmark-o"></i>Los Angeles, USA 856987
                </li>
                <li>
                  <i className="fa fa-phone"></i>Tel: 123-456-7890
                </li>
                <li>
                  <i className="fa fa-envelope-open-o"></i>Info@site-name.com
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer background="background-black" />
      <ScrollTop backColor="background-main-color" />

    </>
  );
};

export default AboutUs;

const Item = (props) => {
  return (
    <div
      className="item wow animate__backInUp"
      data-wow-delay=".3s"
      data-wow-duration="1s"
    >
      <h2>{props.itemName}</h2>
      <p>
        Lorem ipsum dolor sit amet, no movet simul laoreet pri, aperiri fabulas
        expetenda ei pro.
      </p>
    </div>
  );
};
