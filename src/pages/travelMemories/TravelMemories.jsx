import React, { useState } from "react";
import "./travelMemories.css";
 
import shakiTourImage from "../../assets/shaki.jpg";  
import sevda from "../../assets/sevda.jpg";
import daniel from "../../assets/daniel.jpg";
import aysel from "../../assets/aysel.jpg";
 

const ReviewCard = ({ avatar, name, location, rating, text }) => (
  <div className="review-card">
    <div className="reviewer-info">
      <img src={avatar} alt={name} className="reviewer-avatar" />
      <div className="reviewer-details">
        <span className="reviewer-name">
          {name}, {location}
        </span>
        <span className="reviewer-rating-stars">{"★".repeat(rating)}</span>
      </div>
    </div>
    <p className="review-text">"{text}"</p>
  </div>
);
 

const TravelMemories = () => { 
  const [feedbackText, setFeedbackText] = useState("");
  const [selectedRating, setSelectedRating] = useState(0);

  const reviewData = [
    {
      avatar: sevda,
      name: "Sevda M.",
      location: "Baku",
      rating: 5,
      text: "The organization was flawless! Our guide was very knowledgeable and friendly, and the itinerary had the perfect balance of sightseeing and relaxation. The hotel exceeded expectations - I'll definitely book again!",
    },
    {
      avatar: daniel,
      name: "Daniel K.",
      location: "London",
      rating: 5,
      text: "The scenery was breathtaking, and the transport was comfortable. I wish we had a little more free time to explore on our own, but overall it was an amazing experience.",
    },
    {
      avatar: aysel,
      name: "Aysel R.",
      location: "Ganja",
      rating: 5,
      text: "This was my first trip with this company, and I was blown away by the service. From the first email to the last day, everything was perfectly organized. The local food tasting was the highlight for me!",
    },
  ];
 
  const handleSendFeedback = (e) => {
    e.preventDefault();

    const thankYouMessage =
      "Thank you for your valuable feedback! We appreciate you taking the time to share your experience.";
 
    setFeedbackText(thankYouMessage);
 
    console.log(`Feedback submitted. Rating: ${selectedRating}`);
 
  };
 
  const ratingEmojis = [
    { score: 1, emoji: "😡" },
    { score: 2, emoji: "🙁" },
    { score: 3, emoji: "😐" },
    { score: 4, emoji: "😊" },
    { score: 5, emoji: "🥰" },
  ];

  return (
    <div className="travel-memories-page-container"> 

      <h1 className="main-page-title">My Travel Memories</h1>
      <h2 className="tour-title-large">Nature Escape: 5 days in Shaki</h2>

      <main className="memories-main-content"> 
        <div className="tour-info-panel">
          <div className="tour-image-box">
            <div className="image-wrapper">
              <img
                src={shakiTourImage}
                alt="Sheki Tour"
                className="tour-image-main"
              />
              <div className="image-overlay-info">
                <div className="rating-date">
                  <span className="tour-rating">★★★★★ 4.3</span>
                  <span className="review-count">32 reviews</span>
                </div>
                <span className="tour-date">02.09.2025</span>
              </div>
            </div>
          </div>
        </div>
 
        <div className="rating-feedback-panel">
          <h2 className="rating-title">Rate your tour</h2>

          <div className="rating-emojis">
            {ratingEmojis.map((item) => (
              <span
                key={item.score}
                className={`rating-emoji ${
                  selectedRating === item.score ? "selected" : ""
                }`}
                onClick={() => setSelectedRating(item.score)}
                role="button"
                aria-label={`${item.score} star rating`}
              >
                {item.emoji}
              </span>
            ))}
          </div>

          <form className="feedback-form" onSubmit={handleSendFeedback}>
            <textarea
              placeholder="Share your throughts..."
              value={feedbackText}
              onChange={(e) => setFeedbackText(e.target.value)}
              rows="5"
            />
            <button type="submit" className="send-feedback-button">
              Send Feedback
            </button>
          </form>
        </div>
      </main>
 
      <section className="customer-reviews-section">
        <h2 className="section-subtitle">Customer reviews</h2>

        <div className="reviews-controls">
          <div className="sort-by">
            <label>Sort by:</label>
            <select defaultValue="Recommended">
              <option>Recommended</option>
              <option>Newest</option>
            </select>
          </div>
          <div className="search-reviews">
            <input type="text" placeholder="Search reviews (e.g. guide)" />
            <span className="search-icon">🔍</span>
          </div>
        </div>
 
        <div className="reviews-list">
          {reviewData.map((review, index) => (
            <ReviewCard
              key={index}
              avatar={review.avatar}
              {...review}
              rating={5}
            />
          ))} 
        </div>
      </section>
    </div>
  );
};

export default TravelMemories;
