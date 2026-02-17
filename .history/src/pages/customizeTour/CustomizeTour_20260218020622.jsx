import "./customizeTour.css";

import useCustomizeTour from "./model/useCustomizeTour";
import { BudgetSection } from "./ui/BudgetSection";
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
  } = useCustomizeTour();

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

  const tourFilters = {
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


  return (
    <div className="tour-customize-container">
      <div className="tour-customize-content">
        <div className="tour-customize-header">
          <h1>Customize Your Perfect Tour</h1>
        </div>

        <div className="tour-filters-container">

          <BudgetSection
            minBudget={minBudget}
            maxBudget={maxBudget}
            setMinBudget={setMinBudget}
            setMaxBudget={setMaxBudget}
          />

          <VacationTypesSection
            selectedVacationTypes={selectedVacationTypes}
            onVacationSelect={handleVacationSelect}
          />

          <div className="tour-filters-footer">
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
