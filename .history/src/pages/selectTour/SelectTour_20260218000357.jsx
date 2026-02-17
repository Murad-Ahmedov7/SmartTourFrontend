
import { useNavigate, Link, data } from "react-router-dom";
import "./selectTour.css";

import { SortSelect } from "./ui/SortSelect";
import { Pagination } from "./ui/Pagination";
import { DestinationCard } from "./ui/DestinationCard";



const SelectTour = () => {
  const navigate = useNavigate();


  const {
    tours,
    total,
    page,
    setPage,
    sortBy,
    setSortBy,
    limit,
  } = useTourModels();





  const handleGoBack = () => {
    // navigate(-1);
    navigate("/customizeTour");
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
        <Link to="/chooseTour" className="see-all">
          See all &gt;
        </Link>
      </div>

      {/* New feature sorting */}
     
      <SortSelect value={sortBy} onChange={setSortBy} />

      <div className="tours-count">
        {total} tours found
      </div>

      <main className="destinations-grid">
        {tours.map((dest, index) => (
          <DestinationCard
            key={index}
            thumbnail={dest.thumbnail}
            title={dest.title}
            price={dest.price}
            rating={dest.rating}
            durationDays={dest.durationDays}
            shortDescription={dest.shortDescription}
          />
        ))}
      </main>

      {/* New feature pagination */}

      <Pagination page={page} total={total} limit={limit} onChange={setPage}/>

    </div>
  );
};

export default SelectTour;
