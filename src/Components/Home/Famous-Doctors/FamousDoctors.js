import React from "react";
import "./FamousDoctors.css";
import Head from "./../Head/Head";
const FamousDoctors = (props) => {
  return (
    <div className="background-grey-1 padding-tb-100px">
      <div className="container">
        <Head
          title="Famous Doctors"
          parg="Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s"
          colorHeader={props.colorHeader}
        />

        <div className="FamousDoctors  flex-row">
          <Doctor
            name="Dr. Shahrzat Moh"
            imgsrc="image/Home/Doctors-img/doctor-1.jpg"
            delay=".3s"
            color={props.color}
            GradientBackgrounds={props.GradientBackgrounds}
          />
          <Doctor
            name="Dr. Adwa Ali"
            imgsrc="image/Home/Doctors-img/doctor-2.jpg"
            delay=".5s"
            color={props.color}
            GradientBackgrounds={props.GradientBackgrounds}
          />
          <Doctor
            name="Dr. Salma Elkheir"
            delay=".7s"
            imgsrc="image/Home/Doctors-img/doctor-3.jpg"
            color={props.color}
            GradientBackgrounds={props.GradientBackgrounds}
          />
          <Doctor
            name="Dr. Salim Qasim"
            delay=".9s"
            imgsrc="image/Home/Doctors-img/doctor-4.jpg"
            color={props.color}
            GradientBackgrounds={props.GradientBackgrounds}
          />
        </div>
      </div>
    </div>
  );
};

export default FamousDoctors;

const Doctor = (props) => {
  return (
    <div
      className="Doctor wow animate__backInUp shadow hover transition-transform"
      data-wow-delay={props.delay}
      data-wow-duration="1s"
    >
      <div className="img img4">
        <div className={`overlay ${props.GradientBackgrounds}`}></div>
        <img src={props.imgsrc} />
      </div>
      <div className="info padding-30px">
        <span className={`${props.color}`}>Internal</span>
        <h5 className="text-dark">
          <a href="#">{props.name}</a>
        </h5>
        <div className="rating flex-row">
          <ul>
            <li className="active">
              <i className="fa fa-star"></i>
            </li>
            <li className="active">
              <i className="fa fa-star"></i>
            </li>
            <li className="active">
              <i className="fa fa-star"></i>
            </li>
            <li className="active">
              <i className="fa fa-star"></i>
            </li>
            <li className="text-grey-2">
              <i className="fa fa-star"></i>
            </li>
          </ul>
          <small className={`${props.color}`}>17 reviews</small>
        </div>
      </div>
    </div>
  );
};
