
import "./customizeTour.css";


import useCustomizeTour from "./model/useCustomizeTour";
import { VacationTypesSection } from "./ui/VacationTypesSection";








const CustomizeTour = () => {

 const {
      comfort,
    setComfort,
    startDate,
    setStartDate,
    endDate,
    setEndDate,
    minBudget,
    setMinBudget,
    maxBudget,
    setMaxBudget,
    groupType,
    setGroupType,
    region,
    setRegion,
    selectedVacationTypes,
    handleVacationSelect,
    handleResetFilters,
    handleShowTour,
}=useCustomizeTour();

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



  // const percentage = ((budget - min) / (max - min)) * 100;






  return (
    <div className="customizeContainer">
      <div className="customizeContainerTwo">

        <div className="head">
          <h1>Customize Your Perfect Tour</h1>
        </div>

        <div className="budget-container">
          <h1>Budget</h1>

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




