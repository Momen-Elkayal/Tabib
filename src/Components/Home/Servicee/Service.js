import React from "react";
import "./Service.css";

const Service = (props) => {
  return (
    <div className="container">
      <div className="Service flex-row">
        <div
          className="wow animate__backInDown box transition-transform hover"
          data-wow-delay=".3s"
          data-wow-duration="1s"
        >
          <div className="icon">
            <img src="image/Home/service-icon-img/service-1.png" />
          </div>
          <h3 className={props.color}>Reliable Places</h3>
          <p className="text-grey-2">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy
          </p>
        </div>

        <div
          className="wow animate__backInDown box transition-transform hover"
          data-wow-delay=".5s"
          data-wow-duration="1s"
        >
          <div className="icon">
            <img src="image/Home/service-icon-img/service-2.png" />
          </div>
          <h3 className={props.color}>High Credibility</h3>
          <p className="text-grey-2">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy
          </p>
        </div>

        <div
          className="wow animate__backInDown box transition-transform hover"
          data-wow-delay=".7s"
          data-wow-duration="1s"
        >
          <div className="icon">
            <img src="image/Home/service-icon-img/service-3.png" />
          </div>
          <h3 className={props.color}>Quick search</h3>
          <p className="text-grey-2">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy
          </p>
        </div>

        <div
          className="wow animate__backInDown box transition-transform hover"
          data-wow-delay=".9s"
          data-wow-duration="1s"
        >
          <div className="icon">
            <img src="image/Home/service-icon-img/service-4.png" />
          </div>
          <h3 className={props.color}>Know better</h3>
          <p className="text-grey-2">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy
          </p>
        </div>
      </div>
    </div>
  );
};

export default Service;
