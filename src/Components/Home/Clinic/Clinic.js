import React from "react";
import Head from "./../Head/Head";
import "./Clinic.css";

const Clinic = (props) => {
  return (
    <div className="Clinic padding-tb-100px">
      <div className="container">
        <Head
          title="Popular Clinic"
          parg="Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s"
          colorHeader={props.colorHeader}
        />
        <div className="boxses flex-row">
          <div
            className="box wow animate__backInUp shadow hover transition-transform"
            data-wow-delay=".3s"
            data-wow-duration="1s"
          >
            <div className="img">
              <div className={`overlay ${props.GradientBackgrounds}`}></div>
              <img src="image/Home/Clinic/clinic-1.jpg" />
            </div>
            <div className="info padding-30px">
              <h5 className="text-dark">
                <a href="#" className="text-dark">
                  Alrayan Eye Clinic
                </a>
              </h5>
              <div className="rate flex-row">
                <div className="map text-grey-2 ">
                  <i className="fa fa-map-o"></i>
                  <span>California</span>
                </div>
                <ul className="flex-row">
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
              </div>
            </div>
            <div className="close-info flex-row padding-lr-30px padding-tb-15px  background-light-grey">
              <div className="open text-lime hover-red transition">
                <i className="fa fa-bookmark-o"></i>
                Open Now!
              </div>
              <div className="save text-red hover-red transition">
                <i className="fa fa-heart-o"></i>
                Save
              </div>
              <div className="hospital text-blue hover-red transition">
                <i className="fa fa-hospital-o"></i>
                Hospital
              </div>
            </div>
          </div>

          <div
            className="box wow animate__backInUp shadow hover transition-transform"
            data-wow-delay=".5s"
            data-wow-duration="1s"
          >
            <div className="img">
              <div className={`overlay ${props.GradientBackgrounds}`}></div>
              <img src="image/Home/Clinic/clinic-2.jpg" />
            </div>
            <div className="info padding-30px">
              <h5 className="text-dark">
                <a href="#" className="text-dark">
                  Alrayan Eye Clinic
                </a>
              </h5>
              <div className="rate flex-row">
                <div className="map text-grey-2 ">
                  <i className="fa fa-map-o"></i>
                  <span>California</span>
                </div>
                <ul className="flex-row">
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
              </div>
            </div>
            <div className="close-info flex-row padding-lr-30px padding-tb-15px  background-light-grey">
              <div className="open text-lime hover-red transition">
                <i className="fa fa-bookmark-o"></i>
                Open Now!
              </div>
              <div className="save text-red hover-red transition">
                <i className="fa fa-heart-o"></i>
                Save
              </div>
              <div className="hospital text-blue hover-red transition">
                <i className="fa fa-hospital-o"></i>
                Hospital
              </div>
            </div>
          </div>

          <div
            className="box wow animate__backInUp shadow hover transition-transform"
            data-wow-delay=".7s"
            data-wow-duration="1s"
          >
            <div className="img">
              <div className={`overlay ${props.GradientBackgrounds}`}></div>
              <img src="image/Home/Clinic/clinic-3.jpg" />
            </div>
            <div className="info  padding-30px">
              <h5 className="text-dark">
                <a href="#" className="text-dark">
                  Alrayan Eye Clinic
                </a>
              </h5>
              <div className="rate flex-row">
                <div className="map text-grey-2 ">
                  <i className="fa fa-map-o"></i>
                  <span>California</span>
                </div>
                <ul className="flex-row">
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
              </div>
            </div>
            <div className="close-info flex-row padding-lr-30px padding-tb-15px  background-light-grey">
              <div className="open text-lime hover-red transition">
                <i className="fa fa-bookmark-o"></i>
                Open Now!
              </div>
              <div className="save text-red hover-red transition">
                <i className="fa fa-heart-o"></i>
                Save
              </div>
              <div className="hospital text-blue hover-red transition">
                <i className="fa fa-hospital-o"></i>
                Hospital
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clinic;
