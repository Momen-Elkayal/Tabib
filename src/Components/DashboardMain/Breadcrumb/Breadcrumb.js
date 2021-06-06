import React from "react";
import "./Breadcrumb.css";
const Breadcrumb = (props) => {
  return (
    <div className="breadcrumb shadow padding-30px">
      <ul>
        <li className="cursor hover-red transition">
          Home <i className="fa fa-angle-right"></i>
        </li>

        <li className="cursor hover-red transition">
          Dashboard <i className="fa fa-angle-right"></i>
        </li>

        <li> {props.title}</li>
      </ul>
      <h1 className="text-dark">{props.title}</h1>
    </div>
  );
};

export default Breadcrumb;
