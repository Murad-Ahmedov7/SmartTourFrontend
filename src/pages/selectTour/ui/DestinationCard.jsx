import "../selectTour.css";
import { FaStar } from "react-icons/fa";
import { FaStopwatch } from "react-icons/fa";

export const DestinationCard = ({
  thumbnail,
  title,
  price,
  rating,
  durationDays,
  isSelected,
  shortDescription,
}) => (
  <div className={`destination-card ${isSelected ? "selected" : ""}`}>
    <div className="card-image-container">
      <img src={thumbnail} alt="" className="card-image" />
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
