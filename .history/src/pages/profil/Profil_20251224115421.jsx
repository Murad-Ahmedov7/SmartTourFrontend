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




const Profil = () => {



  return (
  
  <Sidebar/>
  
  );
};

export default Profil;
