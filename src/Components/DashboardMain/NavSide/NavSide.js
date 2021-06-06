import React from "react";
import { Link } from "react-router-dom";
import "./NavSide.css";
const NavSide = (props) => {
  return (
    <div className="NavSide  background-main-color">
      <ul className="links">
        <li>
          <span className="nav-title">Main</span>
        </li>
        <li>
          <Link to="/Dashboard" className={`navLinks ${props.activeDashboard}`} title="Dashboard">
            <i className="fa fa-home"></i>
            <span>Dashboard</span>
          </Link>
        </li>
        <li>
          <Link to="/MyListings" className={`navLinks ${props.activeListings}`} title="My Listings">
            <i className="fa fa-table"></i>
            <span>My Listings</span>
          </Link>
        </li>
        <li>
          <Link
            to="/MyFavorites"
            className={`navLinks ${props.activeFavorites}`}
            title="My Favorites"
          >
            <i className="fa fa-heart"></i>
            <span>My Favorites</span>
          </Link>
        </li>
        <li>
          <Link to="/Reviewss" className={`navLinks ${props.activeReviews}`} title="Reviews">
            <i className="fa fa-star"></i>
            <span>Reviews</span>
          </Link>
        </li>
        <li>
          <span className="nav-title">Example Pages</span>
        </li>
        <li>
          <Link to="/Bookings" className={`navLinks ${props.activeBookings}`} title="Bookings">
            <i className="fa fa-bookmark-o"></i>
            <span>Bookings</span>
          </Link>
        </li>
        <li>
          <Link
            to="/AddListing"
            className={`navLinks ${props.activeAddListing}`}
            title="Add Listing"
          >
            <i className="fa fa-plus-circle"></i>
            <span>Add Listing</span>
          </Link>
        </li>
        <li>
          <Link to="/Packagess" className={`navLinks ${props.activePackages}`} title="Packages">
            <i className="fa fa-list-alt"></i>
            <span>Packages</span>
          </Link>
        </li>
        <li>
          <span className="nav-title">User Area</span>
        </li>
        <li>
          <Link to="/MyProfile" className={`navLinks ${props.activeProfile}`} title="My Profile">
            <i className="fa fa-user-circle"></i>
            <span>My Profile</span>
          </Link>
        </li>
        <li>
          <Link to="/Login" className={`navLinks ${props.activeSingOut}`} title="Sing Out">
            <i className="fa fa-sign-out"></i>
            <span>Sing Out</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavSide;

