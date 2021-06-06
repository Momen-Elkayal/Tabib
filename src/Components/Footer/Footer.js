import React, { Component } from "react";
import "./Footer.css";

const Footer = (props) => {
  return (
    <footer
      className={`${props.animate}  ${props.background}`}
      data-wow-delay=".5s"
      data-wow-duration="1s"
    >
      <div className="container">
        <div className="top flex-row">
          <div className="logo">
            <a href="#">
              <img src="./image/logo/logo-2.png" />
            </a>
          </div>
          <div className="text">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </p>
          </div>
          <div className="footer-menu">
            <ul className="flex-row">
              <li className="cursor">
                <i className="fa fa-angle-right text-grey-2"></i>
                <span>Featured</span>
              </li>
              <li className="cursor">
                <i className="fa fa-angle-right text-grey-2"></i>
                <span>Feedback</span>
              </li>
              <li className="cursor">
                <i className="fa fa-angle-right text-grey-2"></i>
                <span>Ask a Question</span>
              </li>
              <li className="cursor">
                <i className="fa fa-angle-right text-grey-2"></i>
                <span>Team</span>
              </li>
            </ul>
          </div>
        </div>
        <hr />
        <div className="bottom flex-row">
          <div className="copy-right">
            <p>© 2021 tabib Health Directory | All Right Reserved | Designed by Momen Elkayal </p>
          </div>
          <div className="media">
            <ul className="flex-row">
              <li className="cursor">
                <i className="fa fa-facebook"></i>
              </li>
              <li className="cursor">
                <i className="fa fa-youtube-play"></i>
              </li>
              <li className="cursor">
                <i className="fa fa-linkedin"></i>
              </li>
              <li className="cursor">
                <i className="fa fa-google-plus"></i>
              </li>
              <li className="cursor">
                <i className="fa fa-instagram"></i>
              </li>
              <li className="cursor">
                <i className="fa fa-twitter"></i>
              </li>
              <li className="cursor">
                <i className="fa fa-rss"></i>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
