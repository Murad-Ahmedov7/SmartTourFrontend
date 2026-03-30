import ".././tourDetails.css";

const TourSummary = ({
  image,
  title,
  region,
  rating,
  reviewsCount,
  duration,
  price,
  onBuildRoute,
  onBookNow,
}) => {
  return (
    <section className="tour-summary">

      {/* Image (temporary single image) */}
      <div className="tour-summary-image">
        <img src={image} alt={title} />
      </div>

      {/* imageler carousel olacaq */}

      
      {/* Info */}
      <div className="tour-summary-info">
        <h1 className="tour-title">{title}</h1>

        <p className="tour-region">📍 {region}</p>

        <div className="tour-meta">
          <span className="tour-rating">
            ⭐ {rating} ({reviewsCount} reviews)
          </span>
          <span className="tour-duration">⏱ {duration} days</span>
        </div>

        <div className="tour-price">
          From <strong>{price} AZN</strong> 
        </div>

        <div className="tour-actions">
          <button className="btn-secondary" onClick={onBuildRoute}>
            Start Building Route
          </button>
          <button className="btn-primary" onClick={onBookNow}>
            Book Now
          </button>
        </div>
      </div>

    </section>
  );
};

export default TourSummary;