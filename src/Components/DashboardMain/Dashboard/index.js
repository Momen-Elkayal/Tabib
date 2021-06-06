import React from "react";
import NavBarDash from "../NavBarDash/NavBarDash";
import NavSide from "../NavSide/NavSide";
import { Review } from "../../Listings/SingleListings/index";
import FooterDash from "../FooterDash/FooterDash";
import { ScrollTop } from "../../Home/Home1/index";

import "./Dashboard.css";
const DashboardHome = () => {
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
        <NavSide activeDashboard="active" />
        <div className="emptydiv"></div>
        <div className="content">
          <div className="flex-row noContainer">
            <div className="box box1 hover transition-transform">
              <a
                href="#"
                className="background-main-color padding-30px box-shadow"
              >
                <h6>
                  <i className="fa fa-map-o"></i>
                  <span className="number">1456</span>
                  <span className="text">Added Listings</span>
                </h6>
              </a>
            </div>

            <div className="box box2 hover transition-transform">
              <a
                href="#"
                className="background-main-color padding-30px box-shadow"
              >
                <h6>
                  <i className="fa fa-user-o"></i>
                  <span className="number">450 </span>
                  <span className="text">Doctors</span>
                </h6>
              </a>
            </div>

            <div className="box box3 hover transition-transform">
              <a
                href="#"
                className="background-main-color padding-30px box-shadow"
              >
                <h6>
                  <i className="fa fa-star-o"></i>
                  <span className="number">12,550</span>
                  <span className="text">Total Reviews</span>
                </h6>
              </a>
            </div>

            <div className="box box4 hover transition-transform">
              <a
                href="#"
                className="background-main-color padding-30px box-shadow"
              >
                <h6>
                  <i className="fa fa-line-chart"></i>
                  <span className="number"> 2,560,456 </span>
                  <span className="text">Visitors</span>
                </h6>
              </a>
            </div>
          </div>

          <div className="alert padding-30px noContainer">
            <strong>Success!</strong> Indicates a successful or positive action.
            <hr />
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </p>
          </div>

          <div className="flex-row noContainer">
            <div className="left-box">
              <div className="admin padding-30px shadow">
                <h3 className="title-i">
                  <i className="fa fa-envelope-open-o"></i>
                  Admin Message
                </h3>
                <hr />
                <textarea
                  rows="3"
                  placeholder="Enter  Admin Message  here"
                ></textarea>
                <a href="#" className="background-main-color margin-tb-15px">
                  Sent Now
                </a>
              </div>

              <div className="Activities padding-30px shadow">
                <h3 className="title-i">
                  <i className="fa fa-bell-o"></i>
                  Latest Activities
                </h3>
                <hr />
                <div className="comment">
                  <Comment
                    imgsrc="image/Review/testimonial-1.png"
                    name="Adel Alseed"
                  />
                  <Comment
                    imgsrc="image/Review/testimonial-2.png"
                    name="Adel Alseed"
                  />
                  <Comment
                    imgsrc="image/Review/testimonial-3.png"
                    name="Adel Alseed"
                  />
                  <Comment
                    imgsrc="image/Review/testimonial-4.png"
                    name="Adel Alseed"
                  />
                </div>
              </div>
            </div>
            <div className="right-box">
              <div className="Reviews padding-30px shadow">
                <h3 className="title-i">
                  <i className="fa fa-star-o"></i>
                  Latest Reviews
                </h3>
                <hr />
                <Review
                  imgsrc="image/Review/testimonial-1.png"
                  name="Bakhita alrawi"
                  active1="active"
                  active2="active"
                  active3="active"
                  active4="active"
                  active5="text-grey-2"
                />
                <hr />
                <Review
                  imgsrc="image/Review/testimonial-2.png"
                  name="Bakhita alrawi"
                  active1="active"
                  active2="active"
                  active3="text-grey-2"
                  active4="text-grey-2"
                  active5="text-grey-2"
                />
                <hr />
                <Review
                  imgsrc="image/Review/testimonial-3.png"
                  name="Bakhita alrawi"
                  active1="active"
                  active2="active"
                  active3="active"
                  active4="active"
                  active5="active"
                />
                <hr />
              </div>
            </div>
          </div>
          <FooterDash />
        </div>
      </div>
      <ScrollTop backColor="background-main-color" />
    </>
  );
};

export default DashboardHome;

export const Comment = (props) => {
  return (
    <a href="#" className="comment-user text-grey-2">
      <img src={props.imgsrc} />
      <span className="text-black"> {props.name} </span>
      <span className="hover-red transition"> Liked the last comment you</span>
      <span className="date">
        Date :
        <a href="#" className="hover-red transition">
          July 15, 2016
        </a>
      </span>
    </a>
  );
};
