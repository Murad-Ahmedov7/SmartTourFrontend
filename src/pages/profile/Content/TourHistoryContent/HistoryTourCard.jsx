  export const HistoryTourCard = ({ image, title, dates, rating, reviews }) => (
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