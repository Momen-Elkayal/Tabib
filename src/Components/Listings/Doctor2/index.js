import React from "react";
import NavBar from "../../NavBar/NavBar";
import { NumberBox } from "../MapGrid/index";
import { SearchFilter } from "../Doctor1/index";
import { FeaturedCategorey } from "../Doctor1/index";
import Footer from "../../Footer/Footer";
import { ScrollTop } from "../../Home/Home1/index";

const Doctor2 = () => {
  return (
    <>
      <NavBar
        imgSrc="image/logo/logo-1.png"
        backgroundList="background-main-color"
        hover="hover-blue"
        backNavmenu="background-main-color"
      />
      <div className="Doctor2">
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
                <DoctBoxOpacity
                  imgsrc="image/Home/Doctors-img/doctor-1.jpg"
                  name="Dr. Shahrzat Moh"
                  delay=".3s"
                />
                <DoctBoxOpacity
                  imgsrc="image/Home/Doctors-img/doctor-2.jpg"
                  name="Dr. Adwa Ali"
                  delay=".4s"
                />
                <DoctBoxOpacity
                  imgsrc="image/Home/Doctors-img/doctor-3.jpg"
                  name="Dr. Salim alhasimi"
                  delay=".5s"
                />
                <DoctBoxOpacity
                  imgsrc="image/Home/Doctors-img/doctor-4.jpg"
                  name="Dr. Ahmed baslawy"
                  delay=".6s"
                />
                <DoctBoxOpacity
                  imgsrc="image/Home/Doctors-img/doctor-5.jpg"
                  name="Dr. Ali Alamine"
                  delay=".7s"
                />
                <DoctBoxOpacity
                  imgsrc="image/Home/Doctors-img/doctor-6.jpg"
                  name="Dr. Jamal Comlay"
                  delay=".8s"
                />
                <DoctBoxOpacity
                  imgsrc="image/Home/Doctors-img/doctor-7.jpg"
                  name="Dr. Tarig Tgani"
                  delay=".9s"
                />
                <DoctBoxOpacity
                  imgsrc="image/Home/Doctors-img/doctor-8.jpg"
                  name="Dr. Slwa Aljaili"
                  delay="1s"
                />
                <DoctBoxOpacity
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

export default Doctor2;

const DoctBoxOpacity = (props) => {
  return (
    <div className="DoctBox shadow hover transition-transform wow animate__backInRight"
    data-wow-delay={props.delay}
      data-wow-duration="1s"
    >
      <div className="img relative">
        <img src={props.imgsrc} />
        <div className="overlay GradientBackgrounds"></div>
      </div>
      <div className="padding-30px">
        <span className="text-grey-2">Internal</span>
        <h5 className="text-dark">
          <a href="#">{props.name}</a>
        </h5>
        <div className="rate">
          <ul className="inline-ul">
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
          <div className="right">
            <small className="text-grey-2 ">17 reviews</small>
          </div>
        </div>
      </div>
    </div>
  );
};
