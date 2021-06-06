import React from "react";
import NavBarDash from "../NavBarDash/NavBarDash";
import NavSide from "../NavSide/NavSide";
import Dashboard from "../Breadcrumb/Breadcrumb";
import FooterDash from "../FooterDash/FooterDash";
import { ScrollTop } from "../../Home/Home1/index";
import "./AddListing.css";
const AddListing = () => {
  return (
    <>
      <NavBarDash
        imgSrc="image/logo/logo-1.png"
        backgroundList="background-second-color"
        hover="hover-blue"
        noContainer="noContainer"
        backNavmenu="background-main-color"
      />
      <div className="flex-row AddListing">
        <NavSide activeAddListing="active" />
        <div className="emptydiv"></div>
        <div className="content">
          <div className="noContainer">
            <Dashboard title="Add Listing" />
            <div className="Basic shadow background-light padding-30px border-rad20">
              <h3 className="title-i">
                <i className="fa fa-list-alt"></i>
                Basic Informations
              </h3>
              <hr />

              <form>
                <div className="flex-row">
                  <div className="ListingTitle width100 margin-bot20">
                    <label>
                      <i className="fa fa-list-alt"></i> Listing Title
                    </label>
                    <input type="text" placeholder="Listing Title" />
                  </div>

                  <div className="Category width48 margin-bot20">
                    <label>
                      <i className="fa fa-folder-open-o"></i> Category
                    </label>
                    <select>
                      <option>All Category</option>
                      <option>Doctors</option>
                      <option>Clinics</option>
                      <option>Labs</option>
                      <option>Pharmacies</option>
                    </select>
                  </div>

                  <div className="Location width48 margin-bot20">
                    <label>
                      <i className="fa fa-map-o"></i> Location
                    </label>
                    <select>
                      <option>West Virginia</option>
                      <option>New Hampshire</option>
                      <option>Connecticut</option>
                      <option>Rhode Island</option>
                      <option>South Dakota</option>
                      <option>North Dakota</option>
                      <option>Wisconsin</option>
                      <option>North Carolina</option>
                      <option>Tennessee</option>
                    </select>
                  </div>

                  <div className="Keywords width100 margin-bot20">
                    <label>
                      <i className="fa fa-flag-o"></i> Keywords
                    </label>
                    <input type="text" placeholder="Keywords" />
                  </div>

                  <div className="Phone width48 margin-bot20">
                    <label>
                      <i className="fa fa-mobile"></i> Phone
                    </label>
                    <input type="text" placeholder="00222945257869" />
                  </div>

                  <div className="Email width48 margin-bot20">
                    <label>
                      <i className="fa fa-envelope-open-o"></i> Email
                    </label>
                    <input type="text" placeholder="info@yourname.com" />
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
              </form>
            </div>
            <div className="Description shadow background-light padding-30px border-rad20">
              <h3 className="title-i">
                <i className="fa fa-list-alt"></i>
                Description
              </h3>
              <hr />
              <form className="flex-row">
                <div className="textarea width100 margin-bot20">
                  <textarea
                    rows="3"
                    placeholder="Enter  Admin Message  here"
                    className="width100"
                  ></textarea>
                </div>

                <div className=" Video width48 margin-bot20">
                  <label>
                    <i className="fa fa-video-camera"></i> Video URL
                  </label>
                  <input type="text" placeholder="http://www." />
                </div>

                <div className="Image width48 margin-bot20">
                  <label>
                    <i className="fa fa-picture-o"></i> Image URL
                  </label>
                  <input type="text" placeholder="http://www." />
                </div>
              </form>
            </div>
            <div className="Socials shadow background-light padding-30px border-rad20">
              <h3 className="title-i">
                <i className="fa fa-list-alt"></i>
                Socials links
              </h3>
              <hr />
              <form>
                <Socials />
              </form>
            </div>
            <div className="button border-rad20">
              <a href="#">Add Listing</a>
            </div>
          </div>
          <FooterDash />
        </div>
      </div>
      <ScrollTop backColor="background-main-color" />
    </>
  );
};

export default AddListing;

export const Socials = () => {
  return (
    <div className="flex-row">
      <div className="Facebook width48 margin-bot20">
        <label>
          <i className="fa fa-facebook-official"></i> Facebook
        </label>
        <input type="text" placeholder="http://www.facebook.com" />
      </div>

      <div className="Twitter width48 margin-bot20">
        <label>
          <i className="fa fa-twitter"></i> Twitter
        </label>
        <input type="text" placeholder="http://www.twitter.com" />
      </div>

      <div className="Facebook width48 margin-bot20">
        <label>
          <i className="fa fa-youtube-play"></i> Youtube
        </label>
        <input type="text" placeholder="http://www.youtube.com" />
      </div>

      <div className="Facebook width48 margin-bot20">
        <label>
          <i className="fa fa-google-plus"></i> Google Pluse
        </label>
        <input type="text" placeholder="http://www.google-plus.com" />
      </div>

      <div className="Facebook width48 margin-bot20">
        <label>
          <i className="fa fa-whatsapp"></i> Whatsapp
        </label>
        <input type="text" placeholder="http://www.Whatsapp.com" />
      </div>
    </div>
  );
};
