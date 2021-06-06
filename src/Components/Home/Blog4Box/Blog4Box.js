import React from "react";
import Head from "../Head/Head";
import "./Blog4Box.css";
const Blog4Box = (props) => {
  return (
    <div className="Blog4Box background-grey-1 padding-tb-100px">
      <div className="container">
        <Head
          title="Our Blog"
          parg="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
          colorHeader={props.colorHeader}
        />
        <div className="flex-row">
          <BlogBox
            imgSrc="image/Home/Blog/blog-3.jpg"
            delay=".3s"
            duration="1s"
          />
          <BlogBox
            imgSrc="image/Home/Blog/blog-4.jpg"
            delay=".5s"
            duration="1s"
          />
          <BlogBox
            imgSrc="image/Home/Blog/blog-5.jpg"
            delay=".7s"
            duration="1s"
          />
          <BlogBox
            imgSrc="image/Home/Blog/blog-6.jpg"
            delay=".9s"
            duration="1s"
          />
        </div>
      </div>
    </div>
  );
};

export default Blog4Box;

const BlogBox = (props) => {
  return (
    <div
      className="boxs wow animate__backInUp shadow width-25 hover transition-transform"
      data-wow-delay={props.delay}
      data-wow-duration={props.duration}
    >
      <div className="img">
        <img src={props.imgSrc} />
      </div>
      <div className="info padding-25px">
        <p>
          <i className="fa fa-folder-open-o text-red"></i>
          <span className="text-red  cursor"> News </span>,
          <span className="text-red  cursor"> Article</span>
        </p>
        <h3 className="margin-tb-15px transition">
          Long Don’t Spend Time Beating On A Wall ...
        </h3>
        <div className="user">
          <small>
            <i className="fa fa-user-o  text-grey-2"></i>
            <span>By : </span>
            <span className="hover-red transition cursor">Rabie Elkheir</span>
          </small>
        </div>
        <div className="user clock">
          <small>
            <i className="fa fa-clock-o  text-grey-2"></i>
            <span>Date : </span>
            <span className="hover-red transition cursor"> July 15, 2016</span>
          </small>
        </div>
      </div>
    </div>
  );
};
