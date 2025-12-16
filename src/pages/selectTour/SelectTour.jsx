import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./selectTour.css";

import bakuImage from "../../assets/baku.jpg";
import shamakhiImage from "../../assets/shamakhi.jpg";
import lerikImage from "../../assets/lerik.jpg";
import qusarImage from "../../assets/qusar.jpg";

const DestinationCard = ({
  image,
  city,
  country,
  description,
  isSelected,
  onClick,
}) => (
  <div
    className={`destination-card ${isSelected ? "selected" : ""}`}
    onClick={() => onClick(city)}
  >
    <div className="card-image-container">
      <img src={image} alt={city} className="card-image" />
      <button
        className="bookmark-button"
        aria-label="Kaydet"
        onClick={(e) => e.stopPropagation()}
      >
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M5 4C5 3.44772 5.44772 3 6 3H18C18.5523 3 19 3.44772 19 4V20.5739C19 20.8988 18.6657 21.1197 18.3741 20.9754L12 17.8931L5.62594 20.9754C5.33433 21.1197 5 20.8988 5 20.5739V4Z"
            fill="currentColor"
          />
        </svg>
      </button>
    </div>
    <div className="card-content">
      <h4 className="card-title">
        {city}, {country}
      </h4>
      <p className="card-description">{description}</p>
    </div>
  </div>
);

const initialDestinations = [
  {
    image: bakuImage,
    city: "Baku",
    country: "Azerbaijan",
    description:
      "An iconic landmark in Baku, known for its flowing curves and futuristic design.",
  },
  {
    image: shamakhiImage,
    city: "Shamakhi",
    country: "Azerbaijan",
    description:
      "A historic city surrounded by rolling hills and vineyards, once home to poets and ancient royalty",
  },
  {
    image: lerikImage,
    city: "Lerik",
    country: "Azerbaijan",
    description:
      "Escape to lush forests and quiet highlands Lerik is perfect for nature and peace seekers",
  },
  {
    image: qusarImage,
    city: "Qusar",
    country: "Azerbaijan",
    description:
      "Qusar invites you to discover the wild beauty of northern Azerbaijan.",
  },
];

const SelectTour = () => {
  const [selectedDestination, setSelectedDestination] = useState(null);
  const navigate = useNavigate();

  const fullDestinationsList = [...initialDestinations, ...initialDestinations];

  const handleSelectDestination = (city) => {
    setSelectedDestination(city === selectedDestination ? null : city);
    console.log(`Selected: ${city}`);
  };

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="app-container">
      <header className="header">
        <div className="back-button" onClick={handleGoBack}>
          {" "}
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15 18L9 12L15 6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Back
        </div>
        <h1 className="main-title">Select a destination</h1>
        <div className="empty-space"></div>
      </header>

      <div className="subtitle-container">
        <p className="subtitle">Click on the region you want to explore</p>
        <Link to="/chooseTour" className="see-all">See all &gt;</Link>
      </div>

      <main className="destinations-grid">
        {fullDestinationsList.map((dest, index) => (
          <DestinationCard
            key={index}
            image={dest.image}
            city={dest.city}
            country={dest.country}
            description={dest.description}
            isSelected={dest.city === selectedDestination}
            onClick={handleSelectDestination}
          />
        ))}
      </main>
    </div>
  );
};

export default SelectTour;