import React from "react";
import NavBarDash from "../NavBarDash/NavBarDash";
import NavSide from "../NavSide/NavSide";
import Dashboard from "../Breadcrumb/Breadcrumb";
import FooterDash from "../FooterDash/FooterDash";
import { Socials } from "../AddListing/index";
import { ScrollTop } from "../../Home/Home1/index";

import "./MyProfile.css";
const MyProfile = () => {
  return (
    <>
      <NavBarDash
        imgSrc="image/logo/logo-1.png"
        backgroundList="background-second-color"
        hover="hover-blue"
        noContainer="noContainer"
        backNavmenu="background-main-color"
      />
      <div className="flex-row Profile">
        <NavSide activeProfile="active" />
        <div className="emptydiv"></div>
        <div className="content">
          <div className="noContainer">
            <Dashboard title="My Profile" />
            <div className="flex-row">
              <div className="img">
                <img src="image/Myprofile/profile.png" />
                <a href="#" className="background-main-color">
                  Upload Image
                </a>
              </div>
              <div className="forms">
                <form>
                  <div className="flex-row">
                    <div className="User width48 margin-bot20">
                      <label>
                        <i className="fa fa-user-o"></i> User Name
                      </label>
                      <input type="text" placeholder=" Salim Aldosery" />
                    </div>
                    <div className="Password width48 margin-bot20">
                      <label>
                        <i className="fa fa-lock"></i> Password
                      </label>
                      <input type="password" placeholder="" />
                    </div>
                    <div className="Email width48 margin-bot20">
                      <label>
                        <i className="fa fa-envelope-open-o"></i> Email
                      </label>
                      <input type="text" placeholder="info@yourname.com" />
                    </div>
                    <div className="Phone width48 margin-bot20">
                      <label>
                        <i className="fa fa-mobile"></i> Phone
                      </label>
                      <input type="text" placeholder="00222945257869" />
                    </div>
                    <div className="Website width48 margin-bot20">
                      <label>
                        <i className="fa fa-link"></i> Website
                      </label>
                      <input type="text" placeholder="www.your-site.com" />
                    </div>
                    <div className="Description width48 margin-bot20">
                      <label>
                        <i className="fa fa-info"></i> Description
                      </label>
                      <input type="text" placeholder="description" />
                    </div>
                  </div>
                  <hr />
                  <Socials />
                  <a href="#" className="Update background-main-color">
                    Update Profile
                  </a>
                </form>
              </div>
            </div>
          </div>
          <FooterDash />
        </div>
      </div>
      <ScrollTop backColor="background-main-color" />
    </>
  );
};

export default MyProfile;
