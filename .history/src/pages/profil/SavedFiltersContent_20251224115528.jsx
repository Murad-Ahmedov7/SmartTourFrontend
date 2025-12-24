 export default function SavedFiltersContent = () => {
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
