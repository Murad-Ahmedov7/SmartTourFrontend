import { useEffect, useState } from "react";
import { useNavigate, Link, data } from "react-router-dom";
import "./selectTour.css";
import { FaStar } from "react-icons/fa";
import { FaStopwatch } from "react-icons/fa";
import baseApi from "../../api/baseApi";

// import bakuImage from "../../assets/baku.jpg";
// import shamakhiImage from "../../assets/shamakhi.jpg";
// import lerikImage from "../../assets/lerik.jpg";
// import qusarImage from "../../assets/qusar.jpg";

const DestinationCard = ({
  thumbnail,
  title,
  price,
  rating,
  durationDays,
  isSelected,
  onClick,
  shortDescription,
}) => (
  <div
    className={`destination-card ${isSelected ? "selected" : ""}`}
    // onClick={() => onClick(city)}
  >
    <div className="card-image-container">
      <img src={thumbnail} alt="" className="card-image" />
      {/* <button
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
        </button> */}
    </div>

    <div className="card-content">
      <h4 className="card-title">{title}</h4>

      <p
        style={{
          fontSize: "13px",
          color: "#666",
          // margin: "6px 0 10px",
          // marginBottom:"11px",
          lineHeight: "1.4",
          display: "-webkit-box",
          WebkitLineClamp: 2,
          WebkitBoxOrient: "vertical",
        }}
      >
        {shortDescription}
      </p>

      <div className="tour-info">
        <div className="tour-metrics">
          <span className="price">${price}</span>
          <span className="rating">
            <FaStar color="#f4c430" /> {rating}
          </span>
        </div>

        <div className="duration">
          <FaStopwatch /> {durationDays} days
        </div>
      </div>
    </div>
  </div>
);

const SelectTour = () => {
  const navigate = useNavigate();

  // const tours = JSON.parse(localStorage.getItem("result"));
  
    const [page, setPage] = useState(1); // hazırki səhifə
  const limit = 10; // 1 səhifədə 10 data


  const [tours, setTours] = useState([]);
const [total, setTotal] = useState(0);


  const [sortBy, setSortBy] = useState("price_asc");

  const stored = JSON.parse(localStorage.getItem("result"));

  const payload = {
    ...stored,
    page,
    limit,
    sortBy,
  };



  
  
const fetchTours = async () => {
  const stored = JSON.parse(localStorage.getItem("filters")) || {};

  const payload = {
    ...stored,
    page,
    limit,
    sortBy,
  };

  console.log(payload)

  const res = await baseApi.post("/tours/customize", payload);

  console.log(res.data);
  setTours(res.data.tours);
  setTotal(res.data.total);
};


useEffect(() => {
  fetchTours();
}, [page, sortBy]);

  // console.log(result);

  // const tours = result.tours;

  // const total = result.total;

  //   // console.log(tours[0].title)

  // tours.map((tour) => {
  //   console.log(tour.title);
  // });





  // const startIndex = (page - 1) * limit;
  // const endIndex = page * limit;


  // const sortedTours = [...tours].sort((a, b) => {
  //   switch (sortBy) {
  //     case "price_asc":
  //       return a.price - b.price;

  //     case "price_desc":
  //       return b.price - a.price;

  //     case "rating_asc":
  //       return a.rating - b.rating;

  //     case "rating_desc":
  //       return b.rating - a.rating;

  //     case "duration_asc":
  //       return a.durationDays - b.durationDays;

  //     case "duration_desc":
  //       return b.durationDays - a.durationDays;

  //     default:
  //       return 0;
  //   }
  // });

  // const visibleTours = sortedTours.slice(startIndex, endIndex);


  // const totalPages = Math.ceil(tours.length / limit);

  const totalPages = Math.ceil(total / limit);

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
      <select
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value)}
        style={{
          padding: "10px 14px",
          marginBottom: "10px",
          borderRadius: "8px",
          border: "1px solid #d0d0d0",
          backgroundColor: "#fff",
          fontSize: "14px",
          fontWeight: 500,
          color: "#333",
          outline: "none",
          cursor: "pointer",
          minWidth: "220px",
          boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
        }}
      >
        <option value="price_asc">Price: Low → High</option>
        <option value="price_desc">Price: High → Low</option>

        <option value="rating_asc">Rating: Low → High</option>
        <option value="rating_desc">Rating: High → Low</option>

        <option value="duration_asc">Duration: Low → High</option>
        <option value="duration_desc">Duration: High → Low</option>
      </select>

      <div
        style={{
          marginTop: "6px",
          marginBottom: "14px",
          fontSize: "15.5px",
          color: "#777",
        }}
      >
        {total} tours found
      </div>

      <main className="destinations-grid">
        {tours.map((dest, index) => (
          <DestinationCard
            key={index}
            // image={bakuImage}
            thumbnail={dest.thumbnail}
            // city={dest.city}
            // country={dest.country}
            // description={dest.description}
            // isSelected={dest.city === selectedDestination}
            // onClick={handleSelectDestination}
            title={dest.title}
            price={dest.price}
            rating={dest.rating}
            durationDays={dest.durationDays}
            shortDescription={dest.shortDescription}
          />
        ))}
      </main>

      {/* New feature pagination */}
      <div
        style={{
          display: "flex",
          gap: "8px",
          marginTop: "20px",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* PREV */}
        <button
          onClick={() => setPage(page - 1)}
          disabled={page === 1}
          style={{
            padding: "6px 12px",
            borderRadius: "6px",
            border: "1px solid #ccc",
            backgroundColor: page === 1 ? "#eee" : "#fff",
            cursor: page === 1 ? "not-allowed" : "pointer",
          }}
        >
          Prev
        </button>

        {/* PAGE NUMBERS */}
        {Array.from({ length: totalPages }).map((_, i) => {
          const pageNumber = i + 1;
          const isActive = page === pageNumber;

          return (
            <button
              key={pageNumber}
              onClick={() => setPage(pageNumber)}
              style={{
                width: "32px",
                height: "32px",
                borderRadius: "50%",
                border: "1px solid #ccc",
                backgroundColor: isActive ? "#007bff" : "#fff",
                color: isActive ? "#fff" : "#000",
                fontWeight: isActive ? "bold" : "normal",
                cursor: "pointer",
              }}
            >
              {pageNumber}
            </button>
          );
        })}

        {/* NEXT */}
        <button
          onClick={() => setPage(page + 1)}
          disabled={page === totalPages}
          style={{
            padding: "6px 12px",
            borderRadius: "6px",
            border: "1px solid #ccc",
            backgroundColor: page === totalPages ? "#eee" : "#fff",
            cursor: page === totalPages ? "not-allowed" : "pointer",
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default SelectTour;
