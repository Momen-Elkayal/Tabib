import React, { Component } from "react";
import NavBar from "../../NavBar/NavBar";
import { BoxLeft } from "../BlogGrid/index";
import { NumberBox } from "../../Listings/MapGrid/index";
import { Form } from "../../Listings/SingleListings/index";
import Footer from "../../Footer/Footer";
import { ScrollTop } from "../../Home/Home1/index";

import "./BlogSingle.css";
const BlogSingle = () => {
  return (
    <>
      <NavBar
        imgSrc="image/logo/logo-1.png"
        backgroundList="background-main-color"
        hover="hover-blue"
        backNavmenu="background-main-color"
      />
      <div className="container">
        <div className="breadcrumb2 breadcrumb3">
          <ul>
            <li className="cursor hover-red transition">
              Home
              <i className="fa fa-angle-right"></i>
            </li>
            <li className="cursor hover-red transition">
              Blog <i className="fa fa-angle-right"></i>
            </li>
            <li> Blog Single</li>
          </ul>
          <h1 className="text-dark">Blog Post Title</h1>
        </div>
        <div className="BlogSingle flex-row ">
          <div className="BlogSingleRight">
            <div className="BlogPostTitle background-light padding-30px">
              <h3 className="title-i">
                <i className="fa fa-file-text"></i>
                Blog Post Title
              </h3>
              <hr />
              <div className="meta">
                <span className="inline-block ">
                  By :{" "}
                  <span className="hover-red transition cursor">admin</span>
                </span>
                <span className="inline-block ">
                  Date :{" "}
                  <span className="hover-red transition cursor">
                    December 27, 2017
                  </span>
                </span>
              </div>
              <hr />
              <div className="img">
                <img src="image/Blog/Blogclass/class3.jpg" />
              </div>
              <p>
                Mauris fermentum porta sem, non hendrerit enim bibendum
                consectetur. Fusce diam est, porttitor vehicula gravida at,
                accumsan bibendum tincidunt imperdiet. Maecenas quis magna
                faucibus, varius ante sit amet, varius augue. Praesent aliquam,
                augue ac pulvinar accumsan
              </p>
              <h5>Where can I get some?</h5>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don’t look even
                slightly believable. If you are going to use a passage of Lorem
                Ipsum, you need to be sure there isn’t anything embarrassing
                hidden in the middle of text. All the Lorem Ipsum generators on
                the Internet tend to repeat predefined chunks as necessary,
                making this the first true generator on the Internet. It uses a
                dictionary of over 200 Latin words, combined with a handful of
                model sentence structures, to generate Lorem Ipsum which looks
                reasonable. The generated Lorem Ipsum is therefore always free
                from repetition, injected humour, or non-characteristic words
                etc.
              </p>
              <hr />
              <ul>
                <li>chemicals</li>
                <li>chemicals</li>
                <li>chemicals</li>
                <li>chemicals</li>
                <li>chemicals</li>
                <li>chemicals</li>
              </ul>
            </div>

            <div className="BlogComments background-light padding-30px">
              <h3 className="title-i">
                <i className="fa fa-commenting"></i>
                Comments (3)
              </h3>
              <hr />

              <div className="flex-row Review-box">
                <div className="img">
                  <img src="image/Review/testimonial-1.png" />
                </div>
                <div className="text">
                  <div className="">
                    <div className="star">
                      <h3>Bakhita alrawi</h3>
                    </div>
                    <span className="date">
                      Date :{" "}
                      <span className="hover-red transition cursor text-main-color">
                        July 15, 2016
                      </span>
                    </span>
                  </div>
                  <p className="text-grey-2">
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout.
                  </p>
                </div>
              </div>
              <hr />
              <div className="flex-row Review-box Review-box-marleft">
                <div className="img">
                  <img src="image/Review/testimonial-2.png" />
                </div>
                <div className="text">
                  <div className="">
                    <div className="star">
                      <h3>Rabie Elkheir</h3>
                    </div>
                    <span className="date">
                      Date :{" "}
                      <span className="hover-red transition cursor text-main-color">
                        July 15, 2016
                      </span>
                    </span>
                  </div>
                  <p className="text-grey-2">
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout.
                  </p>
                </div>
              </div>
              <hr className="Review-box-marleft" />
              <div className="flex-row Review-box">
                <div className="img">
                  <img src="image/Review/testimonial-3.png" />
                </div>
                <div className="text">
                  <div className="">
                    <div className="star">
                      <h3>Adel Alsaeed</h3>
                    </div>
                    <span className="date">
                      Date :{" "}
                      <span className="hover-red transition cursor text-main-color">
                        July 15, 2016
                      </span>
                    </span>
                  </div>
                  <p className="text-grey-2">
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout.
                  </p>
                </div>
              </div>
              <hr />
            </div>

            <div className="AddComment padding-30px background-light ">
              <h3 className="title-i">
                <i className="fa fa-commenting"></i>
                Add Comment
              </h3>
              <hr />
              <Form />
            </div>

            <div className="numb">
              <NumberBox />
            </div>
          </div>
          <BoxLeft />
        </div>
      </div>
      <Footer background="background-main-color" />
      <ScrollTop backColor="background-main-color" />
    </>
  );
};

export default BlogSingle;
