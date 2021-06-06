import React from "react";
import "./Head.css";

const Head = (props) => {
  return (
    <div className="head flex-row">
      <div
        className="title wow animate__backInLeft text-center"
        data-wow-delay=".1s"
        data-wow-duration="1s"
      >
        <h1 className={props.colorHeader}>{props.title}</h1>
      </div>
      <div
        className="parg wow animate__backInDown"
        data-wow-delay=".1s"
        data-wow-duration="1s"
      >
        <p className="text-grey-2">{props.parg}</p>
      </div>
      <a
        href="#"
        className={`show-all ${props.colorHeader} transition  hover-red wow animate__backInRight`}
        data-wow-delay=".1s"
        data-wow-duration="1s"
      >
        <span>Show All</span>
        <i className="fa fa-arrow-circle-o-right"></i>
      </a>
    </div>
  );
};

export default Head;
