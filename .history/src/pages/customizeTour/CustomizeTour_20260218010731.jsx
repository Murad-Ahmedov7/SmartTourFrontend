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

const vacationTypes = [
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

const VacationCard = ({ name, imageUrl, isSelected, onSelect }) => {
  return (
    <div
      className={`vacation-card ${isSelected ? "selected" : ""}`}
      style={{ backgroundImage: `url(${imageUrl})` }}
      onClick={() => onSelect(name)}
    >
      <div className="vacation-checkbox">
        <input
          type="checkbox"
          id={`vacation-${name}`}
          name={name}
          checked={isSelected}
          onChange={() => onSelect(name)}
          style={{ display: "none" }}
        />
        <label htmlFor={`vacation-${name}`} className="checkbox-icon">
          {isSelected ? "✔️" : "◻️"}
        </label>
      </div>

      <span className="vacation-name">{name}</span>
    </div>
  );
};

const VacationTypesSection = ({ selectedVacationTypes, onVacationSelect }) => {
  return (
    <div className="vacation-section-container">
      <div className="vacation-header">
        <h2 className="vacation-title">Vacation type</h2>
        <a href="/see-all" className="see-all-link">
          See all <span className="arrow-icon">{">"}</span>
        </a>
      </div>

      <div className="vacation-cards-grid">
        {vacationTypes.map((type) => (
          <VacationCard
            key={type.id}
            name={type.name}
            imageUrl={type.imageUrl}
            isSelected={selectedVacationTypes.includes(type.name)}
            onSelect={onVacationSelect}
          />
        ))}
      </div>
    </div>
  );
};

const CustomizeTour = () => {
 

  const budgetFields = [
    {
      label: "Min Budget (AZN)",
      placeholder: "e.g. 100",
      value: minBudget,
      onChange: (e) => setMinBudget(e.target.value),
    },
    {
      label: "Max Budget (AZN)",
      placeholder: "e.g. 5000",
      value: maxBudget,
      onChange: (e) => setMaxBudget(e.target.value),
    },
  ];

  // const travelerCountSelects = [
  //   {
  //     placeholder: "Adults",
  //     value: adults,
  //     onChange: (e) => setAdults(e.target.value),
  //     options: [
  //       { value: "1", label: "1" },
  //       { value: "2", label: "2" },
  //       { value: "3", label: "3" },
  //       { value: "4+", label: "4+" },
  //     ],
  //   },
  //   {
  //     placeholder: "Children",
  //     value: children,
  //     onChange: (e) => setChildren(e.target.value),
  //     options: [
  //       { value: "0", label: "0" },
  //       { value: "1", label: "1" },
  //       { value: "2", label: "2" },
  //       { value: "3+", label: "3+" },
  //     ],
  //   },
  // ];

  const groupTypes = [
    {
      placeholder: "Select Type",
      value: groupType,
      onChange: (e) => setGroupType(e.target.value),
      options: [
        { value: "Solo", label: "Solo" },
        { value: "Couple", label: "Couple" },
        { value: "Friends", label: "Friends" },
        { value: "Family", label: "Family" },
      ],
    },
  ];

  const regionOptions = [
    { value: "Baku", label: "Baku" },
    { value: "Sheki", label: "Sheki" },
    { value: "Quba", label: "Quba" },
    { value: "Qusar", label: "Qusar" },
    { value: "Shamaki", label: "Shamaki" },
    { value: "Gabala", label: "Gabala" },
    { value: "Lankaran", label: "Lankaran" },
    { value: "Ganja", label: "Ganja" },
    { value: "Nakhchivan", label: "Nakhchivan" },



  ]; 

  // regionlar ucun api yaz gelecekde(cunki coxalacaq)

  const comfortOptions = ["Economy", "Standard", "Premium"];

  const  tourFilters = {
    region,
    startDate,
    endDate,
    comfort,
    minBudget,
    maxBudget,
    groupType,
    selectedVacationTypes,
  };




      console.log("RAW minBudget:", minBudget);


  // const handleSliderChange = (event) => {
  //   setBudget(Number(event.target.value));
  // };




  const handleShowTour = async () => {



    try {

      // console.log("RAW minBudget:", minBudget);
// console.log("Number(minBudget):", Number(minBudget));
      if (!region) {
        alert("Please select region");
        return;
      }
      if (!startDate) {
        alert("Please select start date");
        return;
      }
      if (!endDate) {
        alert("Please select end date");
        return;
      }

      if(minBudget<0 ||maxBudget<0){
        alert("Min or Max budget cannot be negative");
        return;
      }




      // alert("Navigating to SelectTour...");
      // navigate("/selectTour");

     

  localStorage.setItem("filters", JSON.stringify(tourFilters));

  const stored=localStorage.getItem("filters");
  const filters=stored? JSON.parse(stored):{};






  

  const payload = {
    region:filters.region,
    startDate: `${filters.startDate}T00:00:00`, 
    endDate: `${filters.endDate}T00:00:00`,
  };

  (addIfNotEmpty(payload,"comfort",filters.comfort));
  (addIfNotEmpty(payload,"groupType",filters.groupType));
  (addIfNotEmpty(payload,"minBudget",filters.minBudget));
  (addIfNotEmpty(payload,"maxBudget",filters.maxBudget));
  (addIfNotEmpty(payload,"tourTypes",filters.selectedVacationTypes));

  // console.log(payload)
  // localStorage.setItem("payload", JSON.stringify(payload));

      // const res=await baseApi.post("/tours/customize",payload);

      localStorage.setItem("result",JSON.stringify(payload));
      // console.log(region)
      // console.log(minBudget)
      // console.log(res.data)

      alert("Navigating to SelectTour...");
      navigate("/selectTour");


   }

     catch (err) {
      // console.error(err.response.data.message);
      console.error(err)
      // alert("No tours found matching the selected filters.");
    }
  };

  //     const handleShowTour=async()=>{
  //     try{
  //       if (!region) { alert("Please select region"); return; }
  //       if (!startDate) { alert("Please select start date"); return; }
  //       if (!endDate) { alert("Please select end date"); return; }

  //      const res=await baseApi.post("/tours/customize",payload);
  //       // console.log(region)
  //       // console.log(minBudget)
  //       // console.log(res.data.tours)

  //       localStorage.setItem("tours",JSON.stringify(res.data.tours));
  //       alert("Navigating to SelectTour...");
  //       navigate("/selectTour");

  //     }

  // catch (err) {
  //     console.error(err.response.data.message);
  //     alert("No tours found matching the selected filters.")
  //   }
  //   }

  const handleResetFilters = () => {
    // setBudget(DEFAULT_BUDGET_VALUE);
    setMinBudget("");
    setMaxBudget("");
    setComfort("");
    setStartDate("");
    setEndDate("");
    // setSelectedMonth("");
    setGroupType("");
    setRegion("");
    // setAdults("");
    // setChildren("");
    setSelectedVacationTypes([]);
  };

  // const percentage = ((budget - min) / (max - min)) * 100;






  return (
    <div className="customizeContainer">
      <div className="customizeContainerTwo">
        <div className="head">
          <h1>Customize Your Perfect Tour</h1>
        </div>

        <div className="budget-container">
          <h1>Budget</h1>
          {/* <div className="slider-wrapper">
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
          </div> */}
          <p className="price-info">Choose your price range</p>

          <div className="budget-filter">
            {budgetFields.map((item, index) => (
              <div key={index} className="budget-field">
                <label>{item.label}</label>
                <input
                  type="number"
                  min={0}
                  value={item.value}
                  onChange={item.onChange}
                  className="budget-input"
                  placeholder={item.placeholder}
                  style={{ marginTop: "14px" }}
                />
              </div>
            ))}
          </div>

          <VacationTypesSection
            selectedVacationTypes={selectedVacationTypes}
            onVacationSelect={handleVacationSelect}
          />

          <div className="tour-filters-section">
            <div className="filter-group-row">
              <div className="filter-column">
                <h4 className="filter-header">Group Types</h4>
                {groupTypes.map((field, idx) => (
                  <select
                    key={idx}
                    className="custom-select"
                    value={field.value}
                    onChange={field.onChange}
                  >
                    <option value="" disabled>
                      {field.placeholder}
                    </option>

                    {field.options.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                ))}
              </div>

              <div className="filter-column">
                <h4 className="filter-header">Regions</h4>
                <select
                  className="custom-select"
                  value={region}
                  onChange={(e) => setRegion(e.target.value)}
                >
                  <option value="" disabled>
                    Select Region
                  </option>
                  {regionOptions.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>

              <div className="filter-column">
                <h4 className="filter-header">Comfort Level</h4>
                <div className="comfort-options">
                  {comfortOptions.map((opt) => (
                    <label key={opt} className="custom-radio-label">
                      <input
                        type="radio"
                        name="comfort"
                        value={opt}
                        checked={comfort === opt}
                        onChange={() => setComfort(opt)}
                        className="custom-radio-input"
                      />
                      {opt}
                    </label>
                  ))}
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
                {/* <select
                  className="custom-select"
                  value={selectedMonth}
                  onChange={(e) => setSelectedMonth(e.target.value)}
                >
                  <option value="" disabled>
                    Select month
                  </option>
                  {monthOptions.map((m) => (
                    <option key={m.value} value={m.value}>
                      {m.label}
                      </option>
                    ))}
                </select> */}
              </div>
            </div>

            <div className="filter-buttons">
              <button
                className="show-tour-btn active"
                // onClick={handleShowTour}
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




