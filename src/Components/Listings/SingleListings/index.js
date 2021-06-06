import React from "react";
import NavBar from "../../NavBar/NavBar";
import { SearchFilter } from "../Doctor1/index";
import { FeaturedCategorey } from "../Doctor1/index";
import Footer from "../../Footer/Footer";
import { ScrollTop } from "../../Home/Home1/index";

import "./SingleListings.css";
const SingleListings = () => {
  return (
    <>
      <NavBar
        imgSrc="image/logo/logo-1.png"
        backgroundList="background-main-color"
        hover="hover-blue"
        backNavmenu="background-main-color"
      />
      <div className="SingleListings">
        <div className="container">
          <ul className="breadcrumb">
            <li className="cursor hover-red transition">
              Home <i className="fa fa-angle-right"></i>
            </li>

            <li className="cursor hover-red transition">
              Clinics <i className="fa fa-angle-right"></i>
            </li>

            <li className="active-blue"> Alrayan Eye Clinic</li>
          </ul>
          <h1 className="text-dark">Alrayan Eye Clinic</h1>

          <div className="flex-row">
            <div className="leftBox">
              <div className="ClinicImg shadow">
                <div className="img">
                  <img src="image/Home/Doctors-img/clinic-featured.jpg" />
                </div>
                <div className="flex-row rate-save padding-30px">
                  <div className="rate-left flex-row">
                    <div className="map text-grey-2 ">
                      <i className="fa fa-map-o"></i>
                      <span>California</span>
                    </div>
                    <div className="rate">
                      <ul>
                        <li className="active inline">
                          <i className="fa fa-star"></i>
                        </li>
                        <li className="active inline">
                          <i className="fa fa-star"></i>
                        </li>
                        <li className="active inline">
                          <i className="fa fa-star"></i>
                        </li>
                        <li className="active inline">
                          <i className="fa fa-star"></i>
                        </li>
                        <li className="text-grey-2 inline">
                          <i className="fa fa-star"></i>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="save-right">
                    <div className="close-info flex-row">
                      <div className="open cursor text-lime hover-red transition">
                        <i className="fa fa-bookmark-o"></i>
                        Open Now!
                      </div>
                      <div className="save cursor text-red hover-red transition">
                        <i className="fa fa-heart-o"></i>
                        Save
                      </div>
                      <div className="hospital cursor text-blue hover-red transition">
                        <i className="fa fa-hospital-o"></i>
                        Hospital
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="AboutClinic padding-30px shadow">
                <h3 className="title-i">
                  <i className="fa fa-hospital-o"></i>
                  About Clinic
                </h3>
                <hr />
                <p className="text-grey-2">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum
                </p>
              </div>

              <div className="ClinicLocation padding-30px shadow">
                <h3 className="title-i">
                  <i className="fa fa-map-o"></i>
                  Clinic Location
                </h3>
                <hr />
                <div className="Location cursor-grab">
                  <iframe
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    scrolling="no"
                    marginHeight="0"
                    marginWidth="0"
                    id="gmap_canvas"
                    src="https://maps.google.com/maps?width=705&height=603&hl=en&q=%20Gaza+()&t=&z=12&ie=UTF8&iwloc=B&output=embed"
                  ></iframe>
                </div>
              </div>

              <div className="Review padding-30px shadow">
                <h3 className="title-i">
                  <i className="fa fa-star-o"></i>
                  Review & Rating
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

              <div className="AddReview padding-30px shadow">
                <h3 className="title-i">
                  <i className="fa fa-star-o"></i>
                  Add Review
                </h3>
                <hr />
                <Form />
              </div>
            </div>

            <div className="rightBox">
              <div className="WorkTime background-second-color shadow">
                <h3>
                  <i className="fa fa-clock-o"></i>
                  Work Time
                </h3>
                <ul>
                  <li>
                    <span>Monday</span>
                    <span className="float-right">10:00 AM - 5:00 PM</span>
                  </li>
                  <li>
                    <span>Tuesday</span>
                    <span className="float-right">10:00 AM - 5:00 PM</span>
                  </li>
                  <li>
                    <span>Wednesday</span>

                    <span className="float-right">10:00 AM - 5:00 PM</span>
                  </li>
                  <li>
                    <span>Thursday</span>

                    <span className="float-right">10:00 AM - 5:00 PM</span>
                  </li>
                  <li>
                    <span>Friday</span>

                    <span className="float-right">10:00 AM - 5:00 PM</span>
                  </li>
                  <li>
                    <span>Saturday</span>

                    <span className="float-right">10:00 AM - 5:00 PM</span>
                  </li>
                  <li>
                    <span>Sunday</span>

                    <span className="float-right">Closed</span>
                  </li>
                </ul>
                <div className="clearfix"></div>
              </div>
              <SearchFilter />
              <div className="flex-row  margin-top ">
                <FeaturedCategorey
                  imgsrc="image/Home/categorie-img/categorie-1.png"
                  Categorey="Doctors"
                  delay=".3s"
                />
                <FeaturedCategorey
                  imgsrc="image/Home/categorie-img/categorie-2.png"
                  Categorey="Doctors"
                  delay=".5s"
                />
                <FeaturedCategorey
                  imgsrc="image/Home/categorie-img/categorie-3.png"
                  Categorey="Doctors"
                  delay=".7s"
                />
                <FeaturedCategorey
                  imgsrc="image/Home/categorie-img/categorie-4.png"
                  Categorey="Doctors"
                  delay=".9s"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <ScrollTop backColor="background-main-color" />

      <Footer background="background-main-color" />
    </>
  );
};

export default SingleListings;

export const Review = (props) => {
  function Delete() {
    var Delete = document.getElementById(`${props.id}`);
    Delete.classList.add("display-none");
  }

  return (
    <div className={`flex-row Review-box ${props.class}`} id={`${props.id}`}>
      <div className="img">
        <img src={props.imgsrc} />
      </div>
      <div className="text">
        <div className="flex-row">
          <div className="star">
            <h3>{props.name}</h3>
            <div className="rate">
              <ul>
                <li className={`${props.active1} inline`}>
                  <i className="fa fa-star"></i>
                </li>
                <li className={`${props.active2} inline`}>
                  <i className="fa fa-star"></i>
                </li>
                <li className={`${props.active3} inline`}>
                  <i className="fa fa-star"></i>
                </li>
                <li className={`${props.active4} inline`}>
                  <i className="fa fa-star"></i>
                </li>
                <li className={`${props.active5} inline`}>
                  <i className="fa fa-star"></i>
                </li>
              </ul>
            </div>
          </div>
          <span className="date">
            Date :
            <span className="hover-red transition cursor text-main-color">
              July 15, 2016
            </span>
          </span>
        </div>
        <p className="text-grey-2">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.
        </p>
        <div className={`${props.display} display-none`}>
          <a className="icon text-grey-2 hover-red transition" href="#">
            <i className="fa fa-file-text-o"></i> Edit
          </a>
          <a
            className="icon text-grey-2 hover-red transition"
            href="#"
            onClick={Delete}
          >
            <i className="fa fa-window-close-o"></i> Delete
          </a>
        </div>
      </div>
    </div>
  );
};

export const Form = () => {
  return (
    <form>
      <div className="flex-row">
        <div className="name">
          <label>Full Name</label>
          <input type="text" placeholder="Name" />
        </div>
        <div className="email">
          <label>Email</label>
          <input type="text" placeholder="Email" />
        </div>
      </div>
      <div className="comment">
        <label>Comment :</label>
        <textarea rows="4" placeholder="Comment"></textarea>
      </div>
      <button className="background-main-color cursor">ADD NOW !</button>
    </form>
  );
};
