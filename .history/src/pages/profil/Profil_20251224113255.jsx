import React, { useState } from "react";
import "./profil.css";
import sevda from "../../assets/sevda.jpg";
import shaki from "../../assets/tourhistory.jpg";
import { IoLocationOutline } from "react-icons/io5";
import { FaRoad, FaEdit } from "react-icons/fa"; 
import { PiPicnicTable } from "react-icons/pi";
import { PiMountainsDuotone } from "react-icons/pi";
import { SlPencil } from "react-icons/sl";
import Sidebar from "./Sidebar/Sidebar";

const EditableField = ({ label, initialValue, isPassword = false, onSave }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [value, setValue] = useState(initialValue);

// const ValidToken=localStorage.getItem("result");
// const ValidPassword=localStorage.getItem("password");
  
// useEffect(()=>{

// if (ValidToken) {
//   console.log(" token var")
  
// } else {
//   console.log("token yoxdur")
// }
// },[])

  const displayValue = isPassword
    ? "••••••••"
    : value || (label === "Phone number" ? "+994xxxxxxxxx" : "Not provided");

  const buttonText = value ? "Edit" : "Add";

  const handleSave = () => {
    setIsEditing(false);
    if (onSave) onSave(value);
  };

  const handleEditClick = () => {
    if (isEditing) {
      handleSave();
    } else {
      setIsEditing(true);
    }
  };

  return (
    <div className="profilPage-info-row">
      <div className="profilPage-label-value-wrapper">
        <span className="profilPage-info-label">{label}</span>{" "}
        {isEditing ? (
          <input
            type={isPassword ? "password" : "text"}
            value={isPassword ? "••••••••" : value}
            onChange={(e) =>
              setValue(e.target.value === "••••••••" ? value : e.target.value)
            }
            className="profilPage-edit-input"
            autoFocus
          />
        ) : (
          <span className="profilPage-info-value">{displayValue}</span>
        )}
      </div>
      <button
        className={`profilPage-action-button ${
          isEditing ? "save" : buttonText.toLowerCase()
        }`}
        onClick={handleEditClick}
      >
        {isEditing ? (
          "Save"
        ) : buttonText === "Edit" ? (
          <div className="editBtn">
            <SlPencil
              style={{
                marginRight: "6px",
                verticalAlign: "text-bottom",
                color: "black",
              }}
            />
            {buttonText}
          </div>
        ) : (
          <div className="editBtn">
            <SlPencil
              style={{
                marginRight: "6px",
                verticalAlign: "text-bottom",
                color: "black",
              }}
            />
            {buttonText}
          </div>
        )}
      </button>{" "}
    </div>
  );
};

const HistoryTourCard = ({ image, title, dates, rating, reviews }) => (
  <div className="profilPage-history-tour-card">
    {" "}
    <div className="profilPage-card-image-container">
      <img src={image} alt={title} className="profilPage-card-image" />{" "}
    </div>{" "}
    <div className="profilPage-card-content">
      <h4 className="profilPage-card-title">{title}</h4>{" "}
      <p className="profilPage-card-dates">{dates}</p>{" "}
      <div className="profilPage-card-rating-info">
        <span className="profilPage-rating-star">★</span> {rating} | {reviews}{" "}
        reviews{" "}
      </div>{" "}
      <div className="profilPage-card-actions">
        {" "}
        <button className="profilPage-view-details-button">
          View details
        </button>{" "}
        <button className="profilPage-add-comment-button">Add comment</button>{" "}
      </div>{" "}
    </div>{" "}
  </div>
);

const SavedFiltersContent = () => {
  const favoritesData = [
    {
      icon: <PiMountainsDuotone />,
      name: "Mountain Camp",
      location: "Quba Park",
      type: "location",
    },
    {
      icon: <IoLocationOutline />,
      name: "Mountain Camp",
      location: "Quba Park",
      type: "location",
    },
    {
      icon: <FaRoad />,
      name: "Historic Downtown",
      location: "Quba Park",
      type: "location",
    },
    {
      icon: <PiPicnicTable />,
      name: "Lakeside Picnic",
      location: "Quba Park",
      type: "location",
    },
  ];

  const filtersData = [
    { name: "1 - day tours < 30 azn", type: "filter" },
    { name: "Mountain trips (3 days)", type: "filter" },
  ];

  const FilterFavoriteItem = ({ icon, name, location, type }) => (
    <div className={`profilPage-filter-favorite-item ${type}`}>
      {" "}
      <div className="profilPage-item-details">
        {" "}
        {icon && (
          <span className={`profilPage-item-icon ${type}`}>{icon}</span>
        )}{" "}
        <div className="profilPage-item-text">
          <h4 className="profilPage-item-name">{name}</h4>{" "}
          {location && <p className="profilPage-item-location">{location}</p>}{" "}
        </div>{" "}
      </div>{" "}
      <div className="profilPage-item-actions">
        {" "}
        <button className="profilPage-action-button edit-small">
          {" "}
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17 3a2.828 2.828 0 114 4L7.5 20.5 2 22l1.5-5.5L17 3z"
              stroke="#6c757d"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>{" "}
        </button>{" "}
        <button className="profilPage-action-button delete-small">
          {" "}
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18 6L6 18M6 6l12 12"
              stroke="#dc3545"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>{" "}
        </button>
      </div>
    </div>
  );

  return (
    <>
      <section className="profilPage-favorites-section">
        <h2 className="profilPage-section-title-alt">Favorites</h2>{" "}
        <div className="profilPage-favorites-list">
          {" "}
          {favoritesData.map((item, index) => (
            <FilterFavoriteItem key={`fav-${index}`} {...item} />
          ))}{" "}
        </div>{" "}
      </section>
      <section className="profilPage-filters-section">
        <h2 className="profilPage-section-title-alt">Filters</h2>{" "}
        <div className="profilPage-filters-list">
          {" "}
          {filtersData.map((item, index) => (
            <FilterFavoriteItem key={`filt-${index}`} {...item} />
          ))}{" "}
        </div>{" "}
      </section>{" "}
    </>
  );
};



const Profil = () => {


  const tourHistoryData = [
    {
      title: "A harmony of nature",
      dates: "2 days / 1 night | 02.09.2025 - 03.09.2025",
      rating: 4.5,
      reviews: 40,
      image: sevda,
    },
    {
      title: "Private Sheki Tour",
      dates: "2 days / 1 night | 12.09.2025 - 13.09.2025",
      rating: 4.5,
      reviews: 47,
      image: sevda,
    },
  ];
  const allHistoryCards = [...tourHistoryData, ...tourHistoryData]; 

  

  const TourHistoryContent = () => (
    <>
      <h2 className="profilPage-section-title">Tour history</h2>{" "}
      <main className="profilPage-tour-history-grid">
        {" "}
        {allHistoryCards.map((tour, index) => (
          <HistoryTourCard key={index} {...tour} image={shaki} />
        ))}{" "}
      </main>{" "}
    </>
  );


  return (
  
  <Sidebar/>
  
  );
};

export default Profil;
