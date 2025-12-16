import React, { useState } from "react";  
import { useNavigate } from "react-router-dom";
import "./customizeTour.css";
 
import amusementParkImg from "../../assets/amusementPark.jpg";
import historicalImg from "../../assets/historical.jpg";
import villageImg from "../../assets/village.jpg";
import divingImg from "../../assets/diving.jpg";
import horseRidingImg from "../../assets/horseRiding.jpg";
import waterSafariImg from "../../assets/waterSafari.jpg";
import campingImg from "../../assets/camping.jpg";
import parachuteImg from "../../assets/parachute.jpg";
import seaTripImg from "../../assets/seaTrip.jpg";
 
const vocationTypes = [
  { id: 1, name: "Amusement park", imageUrl: amusementParkImg },
  { id: 2, name: "Historical", imageUrl: historicalImg },
  { id: 3, name: "Village Tour", imageUrl: villageImg },
  { id: 4, name: "Diving", imageUrl: divingImg },
  { id: 5, name: "Horse riding", imageUrl: horseRidingImg },
  { id: 6, name: "Water Safari", imageUrl: waterSafariImg },
  { id: 7, name: "Camping", imageUrl: campingImg },
  { id: 8, name: "Parachute", imageUrl: parachuteImg },
  { id: 9, name: "Sea trip", imageUrl: seaTripImg },
];
 
const VocationCard = ({ name, imageUrl, isSelected, onSelect }) => {
  return (
    <div
      className={`vocation-card ${isSelected ? "selected" : ""}`}
      style={{ backgroundImage: `url(${imageUrl})` }}
      onClick={() => onSelect(name)}
    >
      <div className="vocation-checkbox">
        <input
          type="checkbox"
          id={`vocation-${name}`}
          name={name}
          checked={isSelected}
          onChange={() => onSelect(name)}
          style={{ display: "none" }}
        />
        <label htmlFor={`vocation-${name}`} className="checkbox-icon">
          {isSelected ? "✔️" : "◻️"}
        </label>
      </div>

      <span className="vocation-name">{name}</span>
    </div>
  );
};
 
const VocationTypesSection = ({ selectedVocationTypes, onVocationSelect }) => {
  return (
    <div className="vocation-section-container">
      <div className="vocation-header">
        <h2 className="vocation-title">Vocation type</h2>
        <a href="/see-all" className="see-all-link">
          See all <span className="arrow-icon">{">"}</span>
        </a>
      </div>

      <div className="vocation-cards-grid">
        {vocationTypes.map((type) => (
          <VocationCard
            key={type.id}
            name={type.name}
            imageUrl={type.imageUrl}
            isSelected={selectedVocationTypes.includes(type.name)}
            onSelect={onVocationSelect}
          />
        ))}
      </div>
    </div>
  );
};
 
const CustomizeTour = () => {
  const min = 50;
  const max = 1000;
  const DEFAULT_BUDGET_VALUE = 250;
  const navigate = useNavigate();
 
  const [budget, setBudget] = useState(DEFAULT_BUDGET_VALUE);
  const [comfort, setComfort] = useState("Premium");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [selectedMonth, setSelectedMonth] = useState("");
  const [adults, setAdults] = useState("");
  const [children, setChildren] = useState("");
  const [selectedVocationTypes, setSelectedVocationTypes] = useState([]);
 
 
  const handleVocationSelect = (vocationName) => {
    setSelectedVocationTypes((prevSelected) => {
      if (prevSelected.includes(vocationName)) {
        return prevSelected.filter((name) => name !== vocationName);
      } else {
        return [...prevSelected, vocationName];
      }
    });
  };

  const handleSliderChange = (event) => {
    setBudget(Number(event.target.value));
  };
 
  const handleShowTour = () => { 
    console.log("Navigating to SelectTour...");
    navigate("/selectTour");
  };

  const handleResetFilters = () => {
    setBudget(DEFAULT_BUDGET_VALUE);
    setComfort("Premium");
    setStartDate("");
    setEndDate("");
    setSelectedMonth("");
    setAdults("");
    setChildren("");
    setSelectedVocationTypes([]);
  };

  const percentage = ((budget - min) / (max - min)) * 100;

  return (
    <div className="customizeContainer">
      <div className="customizeContainerTwo">
        <div className="head">
          <h1>Customize Your Perfect Tour</h1>
        </div>

        <div className="budget-container">
          <h1>Budget</h1>
          <div className="slider-wrapper">
            <input
              type="range"
              min={min}
              max={max}
              value={budget}
              onChange={handleSliderChange}
              className="custom-range-slider"
              style={{ "--fill-percent": `${percentage}%` }}
            />
            <span className="range-limit">
              {budget === DEFAULT_BUDGET_VALUE
                ? `${min}-${max} azn`
                : `${budget} azn`}
            </span>
          </div>
          <p className="price-info">Choose your price range</p>

          <VocationTypesSection
            selectedVocationTypes={selectedVocationTypes}
            onVocationSelect={handleVocationSelect}
          />

          <div className="tour-filters-section">
            <div className="filter-group-row">
              <div className="filter-column">
                <h4 className="filter-header">Number of Travels</h4>
                <select
                  className="custom-select"
                  value={adults}
                  onChange={(e) => setAdults(e.target.value)}
                >
                  <option value="" disabled>
                    Adults
                  </option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4+">4+</option>
                </select>
                <select
                  className="custom-select"
                  value={children}
                  onChange={(e) => setChildren(e.target.value)}
                >
                  <option value="" disabled>
                    Children
                  </option>
                  <option value="0">0</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3+">3+</option>
                </select>
              </div>

              <div className="filter-column">
                <h4 className="filter-header">Comfort Level</h4>
                <div className="comfort-options"> 
                  <label className="custom-radio-label">
                    <input
                      type="radio"
                      name="comfort"
                      value="Economy"
                      checked={comfort === "Economy"}
                      onChange={() => setComfort("Economy")}
                      className="custom-radio-input"
                    />
                    Economy
                  </label>
                  <label className="custom-radio-label">
                    <input
                      type="radio"
                      name="comfort"
                      value="Standart"
                      checked={comfort === "Standart"}
                      onChange={() => setComfort("Standart")}
                      className="custom-radio-input"
                    />
                    Standart
                  </label>
                  <label className="custom-radio-label">
                    <input
                      type="radio"
                      name="comfort"
                      value="Premium"
                      checked={comfort === "Premium"}
                      onChange={() => setComfort("Premium")}
                      className="custom-radio-input"
                    />
                    Premium
                  </label>
                </div>
              </div>

              <div className="filter-column">
                <h4 className="filter-header">Date</h4>
                <div className="date-inputs">
                  <input
                    type="date"
                    placeholder="Start date"
                    className="custom-date-input date-half"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                  />
                  <input
                    type="date"
                    placeholder="End date"
                    className="custom-date-input date-half"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                  />
                </div>
                <select
                  className="custom-select"
                  value={selectedMonth}
                  onChange={(e) => setSelectedMonth(e.target.value)}
                >
                  <option value="" disabled>
                    Select month
                  </option>
                  <option value="Jan">January</option>
                  <option value="Feb">February</option>
                  <option value="Mar">March</option>
                  <option value="Apr">April</option>
                  <option value="May">May</option>
                  <option value="Jun">June</option>
                  <option value="Jul">July</option>
                  <option value="Aug">August</option>
                  <option value="Sep">September</option>
                  <option value="Oct">October</option>
                  <option value="Nov">November</option>
                  <option value="Dec">December</option>
                </select>
              </div>
            </div>

            <div className="filter-buttons">
              <button
                className="show-tour-btn active" 
                onClick={handleShowTour}
            
              >
                Show Tour
              </button>
              <button
                className="reset-filters-btn"
                onClick={handleResetFilters}
              >
                Reset Filters
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomizeTour;
