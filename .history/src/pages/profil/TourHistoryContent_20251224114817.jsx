import sevda from "../../../assets/sevda.jpg";

const HistoryTourCard = ({ image, title, dates, rating, reviews }) => (
  <div className="profilPage-history-tour-card">
    {" "}
    <div className="profilPage-card-image-container">
      <img src={image} alt={title} className="profilPage-card-image" />{" "}
    </div>{" "}
    <div className="profilPage-card-content">
      <h4 className="profilPage-card-title">{title}</h4>{" "}
      <p className="profilPage-card-dates">{dates}</p>{" "}
      <div className="profilPage-card-rating-info">
        <span className="profilPage-rating-star">★</span> {rating} | {reviews}{" "}
        reviews{" "}
      </div>{" "}
      <div className="profilPage-card-actions">
        {" "}
        <button className="profilPage-view-details-button">
          View details
        </button>{" "}
        <button className="profilPage-add-comment-button">Add comment</button>{" "}
      </div>{" "}
    </div>{" "}
  </div>
);



export const TourHistoryContent = () => {
    const tourHistoryData = [
      {
        title: "A harmony of nature",
        dates: "2 days / 1 night | 02.09.2025 - 03.09.2025",
        rating: 4.5,
        reviews: 40,
        image: sevda,
      },
      {
        title: "Private Sheki Tour",
        dates: "2 days / 1 night | 12.09.2025 - 13.09.2025",
        rating: 4.5,
        reviews: 47,
        image: sevda,
      },
    ];
  const allHistoryCards = [...tourHistoryData, ...tourHistoryData];

  <>
    <h2 className="profilPage-section-title">Tour history</h2>{" "}
    <main className="profilPage-tour-history-grid">
      {" "}
      {allHistoryCards.map((tour, index) => (
        <HistoryTourCard key={index} {...tour} image={shaki} />
      ))}{" "}
    </main>{" "}
  </>;
};
