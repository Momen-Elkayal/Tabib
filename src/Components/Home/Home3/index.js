import React from "react";
import NavBar from "../../NavBar/NavBar";
import ListingSearch from "../Banner/ListingSearch";
import Service from "../Servicee/Service";
import FamousDoctors from "../Famous-Doctors/FamousDoctors";
import Clinic from "../Clinic/Clinic";
import Blog4Box from "../Blog4Box/Blog4Box";
import Footer from "../../Footer/Footer";
import { ScrollTop } from "../Home1/index";

const Home3 = () => {
  return (
    <>
      <NavBar
        imgSrc="image/logo/logo-3.png"
        backgroundList="background-red"
        hover="hover-red"
        backNavmenu="background-red"
      />
      <div className="Header height600px cursor-grab">
        <div className="iframe">
          <iframe
            width="100%"
            height="700px"
            frameBorder="0"
            scrolling="no"
            marginHeight="0"
            marginWidth="0"
            id="gmap_canvas"
            src="https://maps.google.com/maps?width=705&height=603&hl=en&q=%20Gaza+()&t=&z=12&ie=UTF8&iwloc=B&output=embed"
          ></iframe>
        </div>

        <div className="container">
          <div className="relative">
            <ListingSearch
              backgroundSearch="background-black"
              width="width60"
              center1="center1"
              bottom="bottomCenterblack"
            />
          </div>
        </div>
      </div>
      <Service color="text-red" />
      <FamousDoctors
        colorHeader="text-red"
        GradientBackgrounds="GradientBackgrounds"
        color="text-grey-2"
      />
      <Clinic
        colorHeader="text-red"
        GradientBackgrounds="GradientBackgrounds"
      />
      <Blog4Box colorHeader="text-red" />
      <ScrollTop backColor="background-red" />

      <Footer background="background-red" animate="wow animate__slideInUp" />
    </>
  );
};

export default Home3;
