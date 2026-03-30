/* TourReviews.jsx */
import "../tourDetails.css";
import sevda from "../../../assets/sevda.jpg";
import daniel from "../../../assets/daniel.jpg";
import aysel from "../../../assets/aysel.jpg";

const reviewData = [
  {
    avatar: sevda,
    name: "Sevda M.",
    location: "Baku",
    rating: 5,
    text: "The organization was flawlessly perfect! Our guide was very friendly and knowledgeable. The tour itinerary had the perfect balance of sightseeing and free time. The trip exceeded expectations - I'll definitely book again",
  },
  {
    avatar: daniel,
    name: "Daniel K.",
    location: "London",
    rating: 5,
    text: "The scenery was breathtaking, and the transport comfortable. We also had a little more free time to explore on our own, but overall it was an amazing experience.",
  },
  {
    avatar: aysel,
    name: "Aysel R.",
    location: "Ganja",
    rating: 5,
    text: "This was my first trip with this company, and I booked the trip very last minute, just a few days prior to the last day, everything was perfectly organized and the local food tasting was the highlight for me!",
  },
];

//Db-den cek sonraki merhelede

const TourReviews = ({ reviews }) => {
  if (!reviews || reviews.length === 0) return null;

  return (
    <section style={{borderTop:'3px solid #e2e8f0',marginTop:'30px',paddingTop:'32px' }}>
      {/* HEADER */}
      <h2 className="section-title">Customer reviews</h2>

      <div className="reviews-carousel">
        {reviewData.map((review, index) => (
          <div className="review-card">
            <p className="review-text">"{review.text}"</p>
            <div className="reviewer-info">
              <img src={review.avatar} alt={review.name} className="reviewer-avatar" />
              <div className="reviewer-details">
                <span className="reviewer-name">
                  {review.name}, {review.location}
                </span>
                <span className="reviewer-rating-stars">
                  {"★".repeat(review.rating)}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="carousel-nav-controls reviews-nav">
        <span className="nav-arrow left-arrow">{"<"}</span>
        <span className="nav-arrow right-arrow">{">"}</span>
      </div>
    </section>

  );
};

export default TourReviews;
