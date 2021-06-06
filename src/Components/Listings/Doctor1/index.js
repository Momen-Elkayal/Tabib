import React from "react";
import NavBar from "../../NavBar/NavBar";
import { NumberBox } from "../MapGrid/index";
import Footer from "../../Footer/Footer";
import { ScrollTop } from "../../Home/Home1/index";

import "./Doctor1.css";
const Doctor1 = () => {
  return (
    <>
      <NavBar
        imgSrc="image/logo/logo-1.png"
        backgroundList="background-main-color"
        hover="hover-blue"
        backNavmenu="background-main-color"
      />
      <div className="Doctor1">
        <div className="container">
          <ul className="breadcrumb">
            <li className="cursor hover-red transition">
              Home <i className="fa fa-angle-right"></i>
            </li>

            <li className="cursor hover-red transition">
              Pages <i className="fa fa-angle-right"></i>
            </li>

            <li className="active-blue"> Doctors List</li>
          </ul>
          <h1 className="text-dark">Doctors List</h1>

          <div className="flex-row">
            <div className="doctors">
              <div className="flex-row">
                <DoctBox
                  imgsrc="image/Home/Doctors-img/doctor-1.jpg"
                  name="Dr. Shahrzat Moh"
                  delay=".3s"
                />
                <DoctBox
                  imgsrc="image/Home/Doctors-img/doctor-2.jpg"
                  name="Dr. Adwa Ali"
                  delay=".4s"
                />
                <DoctBox
                  imgsrc="image/Home/Doctors-img/doctor-3.jpg"
                  name="Dr. Salim alhasimi"
                  delay=".5s"
                />

                <DoctBox
                  imgsrc="image/Home/Doctors-img/doctor-4.jpg"
                  name="Dr. Ahmed baslawy"
                  delay=".6s"
                />
                <DoctBox
                  imgsrc="image/Home/Doctors-img/doctor-5.jpg"
                  name="Dr. Ali Alamine"
                  delay=".7s"
                />
                <DoctBox
                  imgsrc="image/Home/Doctors-img/doctor-6.jpg"
                  name="Dr. Jamal Comlay"
                  delay=".8s"
                />

                <DoctBox
                  imgsrc="image/Home/Doctors-img/doctor-7.jpg"
                  name="Dr. Tarig Tgani"
                  delay=".9s"
                />
                <DoctBox
                  imgsrc="image/Home/Doctors-img/doctor-8.jpg"
                  name="Dr. Slwa Aljaili"
                  delay="1s"
                />
                <DoctBox
                  imgsrc="image/Home/Doctors-img/doctor-3.jpg"
                  name="Dr. Omer abdalrahman"
                  delay="1.1s"
                />
              </div>
              <NumberBox />
            </div>
            <div className="Search">
              <SearchFilter />
              <div className="flex-row  margin-top ">
                <FeaturedCategorey
                  imgsrc="image/Home/categorie-img/categorie-1.png"
                  Categorey="Doctors"
                  delay=".3s"
                />
                <FeaturedCategorey
                  imgsrc="image/Home/categorie-img/categorie-2.png"
                  Categorey="Doctors"
                  delay=".5s"
                />
                <FeaturedCategorey
                  imgsrc="image/Home/categorie-img/categorie-3.png"
                  Categorey="Doctors"
                  delay=".7s"
                />
                <FeaturedCategorey
                  imgsrc="image/Home/categorie-img/categorie-4.png"
                  Categorey="Doctors"
                  delay=".9s"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <ScrollTop backColor="background-main-color" />
      <Footer background="background-main-color" />
    </>
  );
};

export default Doctor1;

const DoctBox = (props) => {
  return (
    <div
      className="DoctBox shadow hover transition-transform wow animate__backInRight"
      data-wow-delay={props.delay}
      data-wow-duration="1s"
    >
      <img src={props.imgsrc} />
      <div className="padding-30px">
        <span className="text-grey-2">Internal</span>
        <h5 className="text-dark">
          <a href="#">{props.name}</a>
        </h5>
        <div className="rate">
          <ul>
            <li className="active inline">
              <i className="fa fa-star"></i>
            </li>
            <li className="active inline">
              <i className="fa fa-star"></i>
            </li>
            <li className="active inline">
              <i className="fa fa-star"></i>
            </li>
            <li className="active inline">
              <i className="fa fa-star"></i>
            </li>
            <li className="text-grey-2 inline">
              <i className="fa fa-star"></i>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export const SearchFilter = () => {
  return (
    <div className="SearchFilter">
      <h3 className="text-dark">
        <i className="fa fa-search text-main-color"></i> Search Filter
      </h3>
      <form>
        <div className="keywords input">
          <img src="image/Home/form-icon/icon-1.png" />
          <input placeholder="keywords..." />
        </div>
        <div className="regions input">
          <img src="image/Home/form-icon/icon-2.png" />
          <input placeholder="All Regions" />
        </div>
        <div className="categories  input">
          <img src="image/Home/form-icon/icon-3.png" />
          <input placeholder="All Categories" />
        </div>
        <div className="button cursor">
          <button className="background-black cursor">Search Now</button>
        </div>
      </form>
    </div>
  );
};

export const FeaturedCategorey = (props) => {
  return (
    <div
      className="Categorey wow animate__backInUp padding-30px cursor background-main-color transition-transform hover "
      data-wow-delay={props.delay}
      data-wow-duration="1s"
    >
      <div className="img">
        <img src={props.imgsrc} />
      </div>
      <p>{props.Categorey}</p>
    </div>
  );
};
