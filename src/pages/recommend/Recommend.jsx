import React, { useState } from "react";
import "./recommend.css";
import FilterModalContent from "./FilterModal";
 
import qubaMountain from "../../assets/shaki.jpg";
import lakeGoygol from "../../assets/shaki.jpg";
 

const SortDropdown = ({ onClose }) => {
  const sortOptions = [
    { label: "Newest" },
    { label: "Best rated" },
    { label: "Most relevant" },
  ];

  return (
    <div className="recommend-sort-dropdown">
      <div className="recommend-sort-options">
        {sortOptions.map((option, index) => (
          <div key={index} className="recommend-sort-option">
            <label className="recommend-checkbox-label"> 
              <input
                type="checkbox"
                name="sort_by"
                value={option.label.toLowerCase().replace(/\s/g, "_")}
              />
              {option.label}
            </label>
          </div>
        ))}
      </div> 
    </div>
  );
};
 

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="recommend-modal-overlay" onClick={onClose}>
      <div
        className="recommend-modal-body"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="recommend-modal-header">
          <h2 className="recommend-modal-title">Filters</h2>
          <button className="recommend-modal-close-btn" onClick={onClose}>
            ×
          </button>
        </div>
        {children}
      </div>
    </div>
  );
};
 

const RecommendTourCard = ({ image, title, details, price, tag, rating }) => (
  <div className="recommend-tour-card"> 
    <div className="recommend-card-image-container">
      <img src={image} alt={title} className="recommend-card-image" />
      <button className="recommend-bookmark-button" aria-label="Kaydet">
        <svg
          viewBox="0 0 24 24"
          fill="white"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M5 4C5 3.44772 5.44772 3 6 3H18C18.5523 3 19 3.44772 19 4V20.5739C19 20.8988 18.6657 21.1197 18.3741 20.9754L12 17.8931L5.62594 20.9754C5.33433 21.1197 5 20.8988 5 20.5739V4Z" />
        </svg>
      </button>
    </div>

    <div className="recommend-card-content">
      <h4 className="recommend-card-title">{title}</h4>
      <p className="recommend-card-details">
        {details} | Starting from {price}
      </p>

      <div className="recommend-rating-tag-group">
        <div className="recommend-rating">
          <span className="recommend-rating-star">★</span> {rating}
        </div>
        <div
          className={`recommend-tag-button ${tag
            .toLowerCase()
            .replace(" ", "-")}`}
        >
          {tag}
        </div>
      </div>

      <button className="recommend-view-details-button">View details</button>
    </div>
  </div>
);
 

const RecommendedPage = () => {
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);
  const [isSortDropdownOpen, setIsSortDropdownOpen] = useState(false); 

  const toursData = [
    {
      image: qubaMountain,
      title: "Quba Mountain",
      details: "2 days / 1 night",
      price: "100 azn",
      tag: "Mountain Tour",
      rating: 4.5,
    },
    {
      image: qubaMountain,
      title: "Quba Mountain",
      details: "2 days / 1 night",
      price: "100 azn",
      tag: "Mountain Tour",
      rating: 4.5,
    },
    {
      image: lakeGoygol,
      title: "Lake Goygol",
      details: "3 days / 1 night",
      price: "80 azn",
      tag: "Lake Tour",
      rating: 4.5,
    },
    {
      image: qubaMountain,
      title: "Quba Mountain",
      details: "2 days / 1 night",
      price: "100 azn",
      tag: "Mountain Tour",
      rating: 4.5,
    },
    {
      image: qubaMountain,
      title: "Quba Mountain",
      details: "2 days / 1 night",
      price: "100 azn",
      tag: "Mountain Tour",
      rating: 4.5,
    },
    {
      image: lakeGoygol,
      title: "Lake Goygol",
      details: "3 days / 1 night",
      price: "80 azn",
      tag: "Lake Tour",
      rating: 4.5,
    },
  ];

  return (
    <div className="recommend-page-container">
      <h1 className="recommend-main-title">Recommended for You</h1>

      <div className="recommend-layout"> 
        <div className="recommend-main-content"> 
          <div className="recommend-filter-bar">
            <div className="recommend-dropdowns">
              <select className="recommend-dropdown-select">
                <option>🗓️ Any date</option>
              </select>
              <select className="recommend-dropdown-select">
                <option>Price</option>
              </select>
              <select className="recommend-dropdown-select">
                <option>Language</option>
              </select>
              <select className="recommend-dropdown-select">
                <option>Duration</option>
              </select>
              <select className="recommend-dropdown-select">
                <option>Time</option>
              </select>
            </div>

            <div className="recommend-sort-filter-group"> 
              <div className="recommend-sort-by-wrapper">
                <div
                  className={`recommend-sort-by ${
                    isSortDropdownOpen ? "active" : ""
                  }`}
                  onClick={() => setIsSortDropdownOpen((prev) => !prev)}
                >
                  Sort by
                </div> 
                {isSortDropdownOpen && (
                  <SortDropdown onClose={() => setIsSortDropdownOpen(false)} />
                )}
              </div>

              <button
                className="recommend-filters-button"
                onClick={() => setIsFilterModalOpen(true)}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 8H20"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M4 16H20"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <circle cx="8" cy="8" r="2" fill="currentColor" />
                  <circle cx="16" cy="16" r="2" fill="currentColor" />
                </svg>
                Filters
              </button>
            </div>
          </div>
 
          <main className="recommend-tours-grid">
            {toursData.map((tour, index) => (
              <RecommendTourCard key={index} image={tour.image} {...tour} />
            ))}
          </main>
        </div>
 
        <aside className="recommend-sidebar"> 
          <div className="recommend-ask-box">
            <div className="recommend-ask-item">
              What are the must-see places on this tour?{" "}
              <button className="close-btn">×</button>
            </div>
            <div className="recommend-ask-item">
              What are the must-see places on this tour?{" "}
              <button className="close-btn">×</button>
            </div>
            <div className="recommend-ask-item">
              What's the weather like for a Shaki tour in September?{" "}
              <button className="close-btn">×</button>
            </div>
            <div className="recommend-ask-input-group">
              <input type="text" placeholder="Ask about tour" readOnly />
              <span className="search-icon">🔍</span>
            </div>
          </div>

          <div className="recommend-smart-suggestions">
            <h3>Smart Suggestions</h3>
            <ul>
              <li>Best time to visit in spring</li>
              <li>Hidden gems nearby</li>
            </ul>
            <button className="recommend-see-all-button">
              See all Suggestions
            </button>
          </div>
        </aside>
      </div>
 
      <Modal
        isOpen={isFilterModalOpen}
        onClose={() => setIsFilterModalOpen(false)}
      >
        <FilterModalContent onClose={() => setIsFilterModalOpen(false)} />
      </Modal>
    </div>
  );
};

export default RecommendedPage;
