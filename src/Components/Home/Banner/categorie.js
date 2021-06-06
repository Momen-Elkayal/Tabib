import React from "react";
import "./Banner.css";

const Categorie = (props) => {
  return (
    <div className={`categorie ${props.center2} ${props.width2} flex-row`}>
      <div
        className={`wow animate__backInUp feadup categorie4 ${props.PaddingTB} ${props.background} ${props.width} ${props.marginBottom} transition-transform hover `}
        data-wow-delay=".3s"
        data-wow-duration="1s"
      >
        <div className="img">
          <img src="image/Home/categorie-img/categorie-1.png" />
        </div>
        <p>Doctors</p>
      </div>
      <div
        className={`wow animate__backInUp feadup categorie4 ${props.PaddingTB} ${props.background} ${props.width} ${props.marginBottom} transition-transform hover `}
        data-wow-delay=".5s"
        data-wow-duration="1s"
      >
        <div className="img">
          <img src="image/Home/categorie-img/categorie-2.png" />
        </div>
        <p>Clinics</p>
      </div>
      <div
        className={`wow animate__backInUp feadup categorie4 ${props.PaddingTB} ${props.background} ${props.width} transition-transform hover `}
        data-wow-delay=".7s"
        data-wow-duration="1s"
      >
        <div className="img">
          <img src="image/Home/categorie-img/categorie-3.png" />
        </div>
        <p>Labs</p>
      </div>
      <div
        className={`wow animate__backInUp feadup categorie4 ${props.PaddingTB} ${props.background} ${props.width} transition-transform hover `}
        data-wow-delay=".9s"
        data-wow-duration="1s"
      >
        <div className="img">
          <img src="image/Home/categorie-img/categorie-4.png" />
        </div>
        <p>Pharmacies</p>
      </div>
    </div>
  );
};

export default Categorie;
