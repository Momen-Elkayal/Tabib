import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home1 from "./Components/Home/Home1/index";
import Home2 from "./Components/Home/Home2/index";
import Home3 from "./Components/Home/Home3/index";
import Home4 from "./Components/Home/Home4/index";
import MapGrid from "./Components/Listings/MapGrid/index";
import MapList from "./Components/Listings/MapList/index";
import Doctor1 from "./Components/Listings/Doctor1/index";
import Doctor2 from "./Components/Listings/Doctor2/index";
import SingleListings from "./Components/Listings/SingleListings/index";
import DashboardHome from "./Components/DashboardMain/Dashboard/index";
import MyListings from "./Components/DashboardMain/MyListings/index";
import MyFavorites from "./Components/DashboardMain/MyFavorites/index";
import Reviewss from "./Components/DashboardMain/Reviewss/index";
import Bookings from "./Components/DashboardMain/Bookings/index";
import AddListing from "./Components/DashboardMain/AddListing/index";
import Packagess from "./Components/DashboardMain/Packagess/index";
import MyProfile from "./Components/DashboardMain/MyProfile/index";
import BlogClassic from "./Components/Blog/BlogClassic/index";
import BlogGrid from "./Components/Blog/BlogGrid/index";
import BlogList from "./Components/Blog/BlogList/index";
import BlogSingle from "./Components/Blog/BlogSingle/index";
import Login from "./Components/Pages/Login/index";
import SignUp from "./Components/Pages/SignUp/index";
import AboutUs from "./Components/Pages/AboutUs/index";
import PricingTables from "./Components/Pages/PricingTables/index";
import ContactUs from "./Components/Pages/ContactUs/index";
import Page404 from "./Components/Pages/Page404/index";

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Home1} />
      <Route path="/Home2" component={Home2} />
      <Route path="/Home3" component={Home3} />
      <Route path="/Home4" component={Home4} />
      <Route path="/MapGrid" component={MapGrid} />
      <Route path="/MapList" component={MapList} />
      <Route path="/Doctor1" component={Doctor1} />
      <Route path="/Doctor2" component={Doctor2} />
      <Route path="/SingleListings" component={SingleListings} />
      <Route path="/Dashboard" component={DashboardHome} />
      <Route path="/MyListings" component={MyListings} />
      <Route path="/MyFavorites" component={MyFavorites} />
      <Route path="/Reviewss" component={Reviewss} />
      <Route path="/Bookings" component={Bookings} />
      <Route path="/AddListing" component={AddListing} />
      <Route path="/Packagess" component={Packagess} />
      <Route path="/MyProfile" component={MyProfile} />
      <Route path="/BlogClassic" component={BlogClassic} />
      <Route path="/BlogGrid" component={BlogGrid} />
      <Route path="/BlogList" component={BlogList} />
      <Route path="/BlogSingle" component={BlogSingle} />
      <Route path="/AboutUs" component={AboutUs} />
      <Route path="/Login" component={Login} />
      <Route path="/SignUp" component={SignUp} />
      <Route path="/PricingTables" component={PricingTables} />
      <Route path="/ContactUs" component={ContactUs} />
      <Route path="/Page404" component={Page404} />
    </BrowserRouter>
  );
}

export default App;
