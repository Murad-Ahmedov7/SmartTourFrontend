import React from "react";
import "./filterModal.css";

 

const FilterGroup = ({ title, options, type = "checkbox" }) => (
  <div className="filter-group">
    <h3 className="filter-group-title">{title}</h3>
    {options.map((option, index) => (
      <div key={index} className="filter-option">
        <label className="checkbox-label">
          <input
            type={type}
            name={title.toLowerCase().replace(/\s/g, "-")}
            value={option.value || option.label}
          />
          {option.label}
        </label>
      </div>
    ))}
  </div>
);

 
const FilterModal = () => { 
  const timeOptions = [
    { label: "Morning, 08:00 - 12:00" },
    { label: "Afternoon, 12:00 - 17:00" },
    { label: "Evening, 17:00 - 00:00" },
  ];
 
  const categoryOptions = [
    { label: "Private tours" },
    { label: "Daily excursions" },
    { label: "Multi-day trips" },
  ];
 
  const languageOptions = [
    { label: "Turkish" },
    { label: "Azerbaijani" },
    { label: "Frech" },
    { label: "Italian" },
    { label: "Arabic" },
    { label: "Russian" },
  ];
 
  const ratingOptions = [{ label: "3.0+" }, { label: "4.5+" }, { label: "5" }];
 
  const maxPrice = 2000;
 

  return (
    <div className="filter-modal-content"> 
      <FilterGroup title="Time" options={timeOptions} />
 
      <FilterGroup title="Category" options={categoryOptions} />
 
      <div className="filter-group price-group">
        <h3 className="filter-group-title">Price</h3>

        <div className="price-slider-container">
          <input
            type="range"
            min="0"
            max={maxPrice}
            defaultValue="800"  
            className="price-slider"
          />
          <span className="max-price-display">Max. price ${maxPrice}</span>
        </div>
      </div>
 
      <FilterGroup title="Language" options={languageOptions} />
 
      <FilterGroup title="Star rating" options={ratingOptions} />
 
      <div className="modal-actions">
        <button className="action-button clear-button">Clear all</button>
        <button className="action-button results-button">Show results</button>
      </div>
    </div>
  );
};

export default FilterModal;
