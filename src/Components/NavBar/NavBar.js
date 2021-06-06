import React from "react";
import { Link } from "react-router-dom";

import "./NavBar.css";

const NavBar = (props) => {
  /* Nav Link Function */
  function NavLinks() {
    var NavLinks = document.getElementById("NavLinks");
    if (NavLinks.classList.contains("block")) {
      NavLinks.classList.remove("block");
    } else {
      NavLinks.classList.add("block");
    }
  }

  /* Home List  Function */
  function homeList() {
    var homeList = document.getElementById("homeList");
    if (homeList.classList.contains("block")) {
      homeList.classList.remove("block");
    } else {
      homeList.classList.add("block");
    }
  }

  /* Listings List   Function */
  function ListingsList() {
    var ListingsList = document.getElementById("ListingsList");
    if (ListingsList.classList.contains("block")) {
      ListingsList.classList.remove("block");
    } else {
      ListingsList.classList.add("block");
    }
  }

  /* Dashboard List  Function */
  function DashList() {
    var DashList = document.getElementById("DashList");
    if (DashList.classList.contains("block")) {
      DashList.classList.remove("block");
    } else {
      DashList.classList.add("block");
    }
  }

  /* Blog List  Function */
  function BlogList() {
    var BlogList = document.getElementById("BlogList");
    if (BlogList.classList.contains("block")) {
      BlogList.classList.remove("block");
    } else {
      BlogList.classList.add("block");
    }
  }

  /* Pages List Function */
  function PagesList() {
    var PagesList = document.getElementById("PagesList");
    if (PagesList.classList.contains("block")) {
      PagesList.classList.remove("block");
    } else {
      PagesList.classList.add("block");
    }
  }

  return (
    <div className="NavBar shadow">
      <div className={`container ${props.noContainer} `}>
        <div className="Nav">
          <div className="logo">
            <Link to="/">
              <img src={props.imgSrc} />
            </Link>
          </div>

          <div className="links">
            <div className="Navmenu" onClick={NavLinks}>
              <i className={`fa fa-bars ${props.backNavmenu} iconMenu`}></i>
            </div>

            <ul className="ul-links">
              <li>
                <a href="#" className={`anchor ${props.hover} transition`}>
                  Home
                  <i className="fa fa-angle-down"></i>
                </a>
                <ul className="sub-menu">
                  <li>
                    <Link to="/">Home 1</Link>
                  </li>
                  <li>
                    <Link to="/Home2">Home 2</Link>
                  </li>
                  <li>
                    <Link to="/Home3">Home 3</Link>
                  </li>
                  <li>
                    <Link to="/Home4">Home 4</Link>
                  </li>
                </ul>
              </li>

              <li>
                <a href="#" className={`anchor ${props.hover} transition`}>
                  Listings
                  <i className="fa fa-angle-down"></i>
                </a>
                <ul className="sub-menu">
                  <li>
                    <Link to="/MapGrid">Map - Grid Layout</Link>
                  </li>
                  <li>
                    <Link to="/MapList">Map - List Layout</Link>
                  </li>
                  <li>
                    <Link to="/Doctor1">Doctor - Layout (1)</Link>
                  </li>
                  <li>
                    <Link to="/Doctor2">Doctor - Layout (2)</Link>
                  </li>
                  <li>
                    <Link to="/SingleListings">Single Listings</Link>
                  </li>
                </ul>
              </li>

              <li>
                <a href="#" className={`anchor ${props.hover} transition`}>
                  Dashboard
                  <i className="fa fa-angle-down"></i>
                </a>
                <ul className="sub-menu">
                  <li>
                    <Link to="/Dashboard">Dashboard Home</Link>
                  </li>
                  <li>
                    <Link to="/MyListings">My Listings</Link>
                  </li>
                  <li>
                    <Link to="/MyFavorites">My Favorites</Link>
                  </li>
                  <li>
                    <Link to="/Reviewss">Reviews</Link>
                  </li>
                  <li>
                    <Link to="/Bookings">Bookings</Link>
                  </li>
                  <li>
                    <Link to="/AddListing">Add Listing</Link>
                  </li>
                  <li>
                    <Link to="/Packagess">Packages</Link>
                  </li>
                  <li>
                    <Link to="/MyProfile">My Profile</Link>
                  </li>
                </ul>
              </li>

              <li>
                <a href="#" className={`anchor ${props.hover} transition`}>
                  Blog
                  <i className="fa fa-angle-down"></i>
                </a>
                <ul className="sub-menu">
                  <li>
                    <Link to="/BlogGrid">Blog Grid</Link>
                  </li>
                  <li>
                    <Link to="/BlogList">Blog List</Link>
                  </li>
                  <li>
                    <Link to="/BlogClassic">Blog Classic</Link>
                  </li>
                  <li>
                    <Link to="/BlogSingle">Blog Single</Link>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#" className={`anchor ${props.hover} transition`}>
                  Pages
                  <i className="fa fa-angle-down"></i>
                </a>
                <ul className="sub-menu">
                  <li>
                    <Link to="/AboutUs">About Us</Link>
                  </li>
                  <li>
                    <Link to="/AddListing">Add Listing</Link>
                  </li>
                  <li>
                    <Link to="/Login">Login Page</Link>
                  </li>
                  <li>
                    <Link to="/SignUp" href="#">
                      Sign Up
                    </Link>
                  </li>
                  <li>
                    <Link to="/PricingTables">Pricing Tables</Link>
                  </li>
                  <li>
                    <Link to="/ContactUs">Contact Us</Link>
                  </li>
                  <li>
                    <Link to="/Page404">Pages 404</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link
                  to="/ContactUs"
                  className={`anchor ${props.hover} transition`}
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div className="NavLinks" id="NavLinks">
            <ul>
              <li className="homeList" onClick={homeList}>
                <a href="#" className={`anchor ${props.hover} transition`}>
                  Home
                  <i className="fa fa-angle-down"></i>
                </a>
                <ul className="sub-menu" id="homeList">
                  <li>
                    <Link to="/">Home 1</Link>
                  </li>
                  <li>
                    <Link to="/Home2">Home 2</Link>
                  </li>
                  <li>
                    <Link to="/Home3">Home 3</Link>
                  </li>
                  <li>
                    <Link to="/Home4">Home 4</Link>
                  </li>
                </ul>
              </li>

              <li className="ListingsList" onClick={ListingsList}>
                <a href="#" className={`anchor ${props.hover} transition`}>
                  Listings
                  <i className="fa fa-angle-down"></i>
                </a>
                <ul className="sub-menu" id="ListingsList">
                  <li>
                    <Link to="/MapGrid">Map - Grid Layout</Link>
                  </li>
                  <li>
                    <Link to="/MapList">Map - List Layout</Link>
                  </li>
                  <li>
                    <Link to="/Doctor1">Doctor - Layout (1)</Link>
                  </li>
                  <li>
                    <Link to="/Doctor2">Doctor - Layout (2)</Link>
                  </li>
                  <li>
                    <Link to="/SingleListings">Single Listings</Link>
                  </li>
                </ul>
              </li>

              <li className="DashList" onClick={DashList}>
                <a href="#" className={`anchor ${props.hover} transition`}>
                  Dashboard
                  <i className="fa fa-angle-down"></i>
                </a>
                <ul className="sub-menu" id="DashList">
                  <li>
                    <Link to="/Dashboard">Dashboard Home</Link>
                  </li>
                  <li>
                    <Link to="/MyListings">My Listings</Link>
                  </li>
                  <li>
                    <Link to="/MyFavorites">My Favorites</Link>
                  </li>
                  <li>
                    <Link to="/Reviewss">Reviews</Link>
                  </li>
                  <li>
                    <Link to="/Bookings">Bookings</Link>
                  </li>
                  <li>
                    <Link to="/AddListing">Add Listing</Link>
                  </li>
                  <li>
                    <Link to="/Packagess">Packages</Link>
                  </li>
                  <li>
                    <Link to="/MyProfile">My Profile</Link>
                  </li>
                </ul>
              </li>

              <li className="BlogList" onClick={BlogList}>
                <a href="#" className={`anchor ${props.hover} transition`}>
                  Blog
                  <i className="fa fa-angle-down"></i>
                </a>
                <ul className="sub-menu" id="BlogList">
                  <li>
                    <Link to="/BlogGrid">Blog Grid</Link>
                  </li>
                  <li>
                    <Link to="/BlogList">Blog List</Link>
                  </li>
                  <li>
                    <Link to="/BlogClassic">Blog Classic</Link>
                  </li>
                  <li>
                    <Link to="/BlogSingle">Blog Single</Link>
                  </li>
                </ul>
              </li>

              <li className="PagesList" onClick={PagesList}>
                <a href="#" className={`anchor ${props.hover} transition`}>
                  Pages
                  <i className="fa fa-angle-down"></i>
                </a>
                <ul className="sub-menu" id="PagesList">
                  <li>
                    <Link to="/AboutUs">About Us</Link>
                  </li>
                  <li>
                    <Link to="/AddListing">Add Listing</Link>
                  </li>
                  <li>
                    <Link to="/Login">Login Page</Link>
                  </li>
                  <li>
                    <Link to="/SignUp" href="#">
                      Sign Up
                    </Link>
                  </li>
                  <li>
                    <Link to="/PricingTables">Pricing Tables</Link>
                  </li>
                  <li>
                    <Link to="/ContactUs">Contact Us</Link>
                  </li>
                  <li>
                    <Link to="/Page404">Pages 404</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link
                  to="/ContactUs"
                  className={`anchor ${props.hover} transition`}
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div className="login">
            <Link to="Login" className={`log ${props.hover} transition`}>
              <i className="fa fa-user-o"></i>
              Login
            </Link>
            <Link
              to="/AddListing"
              href="#"
              className={`add-list ${props.backgroundList}`}
            >
              <i className="fa fa-plus-circle"></i>
              Add list
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default NavBar;
