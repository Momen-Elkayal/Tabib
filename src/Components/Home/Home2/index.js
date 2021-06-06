import React from "react";
import NavBar from "../../NavBar/NavBar";
import Categorie from "../Banner/categorie";
import ListingSearch from "../Banner/ListingSearch";
import Service from "../Servicee/Service";
import FamousDoctors from "../Famous-Doctors/FamousDoctors";
import Clinic from "../Clinic/Clinic";
import Blog4Box from "../Blog4Box/Blog4Box";
import Footer from "../../Footer/Footer";
import { ScrollTop } from "../Home1/index";
import "./Home2.css";
const Home2 = () => {
  return (
    <>
      <div className="Header Header2">
        <img
          className="background-img"
          src="image/Home/banner-img/banner_2.jpg"
        />
        <NavBar
          imgSrc="image/logo/logo-3.png"
          backgroundList="background-red"
          hover="hover-red"
          backNavmenu="background-red"
        />
        <div className="container">
          <div className="Cat-List flex-row ">
            <div className="Categorie-dad">
              <Categorie
                background="background-red"
                width="width-50"
                width2="width-100"
                marginBottom="marginBot-35"
                PaddingTB="PaddingTB"
              />
            </div>
            <div className="ListingSearch">
              <ListingSearch
                backgroundSearch="background-red-opacity"
                bottom="bottom-0"
              />
            </div>
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
      <Footer background="background-red" animate="wow animate__backInUp" />
    </>
  );
};

export default Home2;
