import React from "react";
import NavBarDash from "../NavBarDash/NavBarDash";
import NavSide from "../NavSide/NavSide";
import Dashboard from "../Breadcrumb/Breadcrumb";
import { Review } from "../../Listings/SingleListings/index";
import { NumberBox } from "../../Listings/MapGrid/index";
import FooterDash from "../FooterDash/FooterDash";
import { ScrollTop } from "../../Home/Home1/index";

import "./Reviewss.css";

const Reviewss = () => {
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
        <NavSide activeReviews="active" />
        <div className="emptydiv"></div>
        <div className="content">
          <div className="noContainer">
            <Dashboard title="Reviews" />
          </div>
          <div className="flex-row noContainer">
            <Review
              imgsrc="image/Review/testimonial-1.png"
              name="Bakhita alrawi"
              active1="active"
              active2="active"
              active3="active"
              active4="active"
              active5="text-grey-2"
              display="block"
              class="ReviewsBox shadow padding-45px hover transition-transform"
              id="Delete1"
            />

            <Review
              imgsrc="image/Review/testimonial-2.png"
              name="Bakhita alrawi"
              active1="active"
              active2="active"
              active3="active"
              active4="active"
              active5="text-grey-2"
              display="block"
              class="ReviewsBox shadow padding-45px hover transition-transform"
              id="Delete2"
            />

            <Review
              imgsrc="image/Review/testimonial-3.png"
              name="Bakhita alrawi"
              active1="active"
              active2="active"
              active3="active"
              active4="active"
              active5="text-grey-2"
              display="block"
              class="ReviewsBox shadow padding-45px hover transition-transform"
              id="Delete3"
            />

            <Review
              imgsrc="image/Review/testimonial-4.png"
              name="Bakhita alrawi"
              active1="active"
              active2="active"
              active3="active"
              active4="active"
              active5="text-grey-2"
              display="block"
              class="ReviewsBox shadow padding-45px hover transition-transform"
              id="Delete4"
            />

            <Review
              imgsrc="image/Review/testimonial-2.png"
              name="Bakhita alrawi"
              active1="active"
              active2="active"
              active3="active"
              active4="active"
              active5="text-grey-2"
              display="block"
              class="ReviewsBox shadow padding-45px hover transition-transform"
              id="Delete5"
            />

            <Review
              imgsrc="image/Review/testimonial-1.png"
              name="Bakhita alrawi"
              active1="active"
              active2="active"
              active3="active"
              active4="active"
              active5="text-grey-2"
              display="block"
              class="ReviewsBox shadow padding-45px hover transition-transform"
              id="Delete6"
            />
          </div>
          <div className="noContainer">
            <NumberBox />
          </div>
          <FooterDash />
        </div>
      </div>
      <ScrollTop backColor="background-main-color" />
    </>
  );
};

export default Reviewss;
