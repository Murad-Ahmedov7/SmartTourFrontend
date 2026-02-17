export const TourFiltersFooter = ({
  region,
  setRegion,
  comfort,
  setComfort,
  startDate,
  setStartDate,
  endDate,
  setEndDate,
  handleShowTour,
  handleResetFilters,
}) => {


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
    
      
      const comfortOptions = ["Economy", "Standard", "Premium"];
  return (
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
        <button className="reset-filters-btn" onClick={handleResetFilters}>
          Reset Filters
        </button>
      </div>
    </div>
  );
};
