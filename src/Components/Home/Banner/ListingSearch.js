import React from "react";

const ListingSearch = (props) => {
  return (
    <div className={`listing-search ${props.bottom}`}>
      <form className={`${props.width} flex-row ${props.center1}`}>
        <div className="keywords input">
          <img src="image/Home/form-icon/icon-1.png" />
          <input placeholder="keywords..." />
        </div>
        <div className="regions input">
          <img src="image/Home/form-icon/icon-2.png" />
          <input placeholder="All Regions" />
        </div>
        <div className="categories  input">
          <img src="image/Home/form-icon/icon-3.png" />
          <select>
            <option>All Categories</option>
            <option>Doctors</option>
            <option>Clinic</option>
            <option>Pharmacies</option>
            <option>Labs</option>
          </select>
        </div>
        <div className="button">
          <button className={props.backgroundSearch}>Search Now</button>
        </div>
      </form>
    </div>
  );
};

export default ListingSearch;
