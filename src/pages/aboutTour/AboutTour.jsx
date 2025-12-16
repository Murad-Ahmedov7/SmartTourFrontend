import React from 'react';
import './aboutTour.css'; 

import shakiTourImage from '../../assets/shaki.jpg'; 
import quba from '../../assets/quba.png'; 
import goygol from '../../assets/goygol.jpg'; 
import baku from '../../assets/flameTowers.jpg'; 
import sevda from '../../assets/sevda.jpg'; 
import daniel from '../../assets/daniel.jpg'; 
import aysel from '../../assets/aysel.jpg'; 
import Map from '../../assets/map.png'; 


const RelatedTourCard = ({ image, title, days, price, tag }) => (
  <div className="related-tour-card-item">
    <div className="card-image-container">
      <img src={image} alt={title} className="card-image" />
      <button className="bookmark-button" aria-label="Kaydet">
        <svg viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
          <path d="M5 4C5 3.44772 5.44772 3 6 3H18C18.5523 3 19 3.44772 19 4V20.5739C19 20.8988 18.6657 21.1197 18.3741 20.9754L12 17.8931L5.62594 20.9754C5.33433 21.1197 5 20.8988 5 20.5739V4Z" />
        </svg>
      </button>
      <div className="rating-pill">
        <span className="rating-star">★</span> 4.5
      </div>
    </div>
    
    <div className="card-content">
      <h4 className="card-title">{title}</h4>
      <p className="card-details">{days} | Starting from {price}</p>
      
      <div className={`tag-button ${tag.toLowerCase().replace(' ', '-')}`}>
        {tag}
      </div>
      
      <button className="view-details-button">
        View details
      </button>
    </div>
  </div>
);


const ReviewCard = ({ avatar, name, location, rating, text }) => (
    <div className="review-card">
        <p className="review-text">"{text}"</p>
        <div className="reviewer-info">
            <img src={avatar} alt={name} className="reviewer-avatar" />
            <div className="reviewer-details">
                <span className="reviewer-name">{name}, {location}</span>
                <span className="reviewer-rating-stars">{'★'.repeat(rating)}</span>
            </div>
        </div>
    </div>
);

const AboutTour = () => {

    const relatedToursData = [
        { image: quba, title: "Quba Mountain", days: "2 days / 1 night", price: "100 azn", tag: "Mountain Tour" },
        { image: quba, title: "Quba Mountain", days: "2 days / 1 night", price: "100 azn", tag: "Mountain Tour" },
        { image: goygol, title: "Lake Goygol", days: "3 days / 2 night", price: "80 azn", tag: "Lake Tour" },
        { image: baku, title: "Baku, Azerbaijan", days: "1 days", price: "30 azn", tag: "City Tour" },
    ];
    
    const reviewData = [
        { avatar: sevda, name: "Sevda M.", location: "Baku", rating: 5, text: "The organization was flawlessly perfect! Our guide was very friendly and knowledgeable. The tour itinerary had the perfect balance of sightseeing and free time. The trip exceeded expectations - I'll definitely book again" },
        { avatar: daniel, name: "Daniel K.", location: "London", rating: 5, text: "The scenery was breathtaking, and the transport comfortable. We also had a little more free time to explore on our own, but overall it was an amazing experience." },
        { avatar: aysel, name: "Aysel R.", location: "Ganja", rating: 5, text: "This was my first trip with this company, and I booked the trip very last minute, just a few days prior to the last day, everything was perfectly organized and the local food tasting was the highlight for me!" },
    ];
    
    return (
      <div className="shaki-page-container">
        
        <div className="tour-details-section">
            <header className="tour-detail-nav">
                <div className="tab active">Overview</div>
                <div className="tab">Itinerary</div>
                <div className="tab">Inclusions</div>
                <div className="tab">Reviews</div>
                <div className="tab">Map</div>
            </header>

            <div className="main-content-wrapper">
                <div className="tour-hero">
                    <div className="tour-image-box">
                        <img src={shakiTourImage} alt="Sheki City" className="tour-image-main"/>
                        
                        <button className="tour-bookmark-button" aria-label="Kaydet">
                            <svg viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5 4C5 3.44772 5.44772 3 6 3H18C18.5523 3 19 3.44772 19 4V20.5739C19 20.8988 18.6657 21.1197 18.3741 20.9754L12 17.8931L5.62594 20.9754C5.33433 21.1197 5 20.8988 5 20.5739V4Z" />
                            </svg>
                        </button>
                    </div>
                    <div className="tour-summary-box">
                        <h1 className="tour-title">Shaki tour</h1>
                        <p className="tour-rating">
                            <span className="rating-stars">★★★★★</span> 
                            <span className="rating-count">23 comments</span>
                        </p>
                        <p className="tour-location">Shaki, Azerbaijan</p>
                        <p className="tour-duration">5 days / 4 nights</p>
                        
                        <h4 className="selection-title">Select participants and date</h4>
                        <div className="selection-controls">
                            <div className="dropdown-control">
                                <select className="dropdown-select"><option>Adult x 1</option></select>
                            </div>
                            <div className="dropdown-control">
                                <select className="dropdown-select"><option>Sep 10, 2025</option></select>
                            </div>
                            <button className="check-availability-button">Check availability</button>
                        </div>
                    </div>
                </div>
                <div className="tour-info-panels">
                    <p className="tour-description">
                        Shaki, Azerbaijan is a city in northwestern Azerbaijan, surrounded by the district of the same name. It is located in the southern part of the Greater Caucasus mountain range, 240 km (150 mi) from Baku. As of 2020, it has a population of 68,400.
                    </p>
                    
                    <h3 className="section-title-small">About this activity</h3>
                    <ul className="activity-list">
                        <li>Departure location & time – Baku International Bus Station, 08:00 AM</li>
                        <li>Group size – Maximum or average number of participants (12–15 people)</li>
                        <li>Guide language(s) – Azerbaijani, English, Russian</li>
                        <li>Weather, preparation & clothing tips – Light jacket for evenings, comfortable walking shoes, sun protection</li>
                    </ul>

                    <h3 className="section-title-small">Highlights</h3>
                    <ul className="activity-list">
                        <li>Stay a night at the centuries-old caravanserai</li>
                        <li>Take in great views of the Caucasian Mountains</li>
                        <li>Explore both the Sheki Khan Palace and the Museum with a skip-the-line ticket</li>
                    </ul>
                    
                    <h3 className="section-title-small">Includes</h3>
                    <ul className="includes-list">
                        <li><span>&#10004;</span> Hotel pickup and drop-off</li>
                        <li><span>&#10004;</span> Transportation</li>
                        <li><span>&#10004;</span> Professional Guide</li>
                        <li><span>&#10004;</span> 1 night at Medivela Caravanserai</li>
                        <li><span>&#10006;</span> Food and drinks</li>
                        <li><span>&#10006;</span> Gratuities</li>
                        <li><span>&#10006;</span> Entrance Fees</li>
                    </ul>
                    
                    <div className="action-buttons-bottom">
                        <button className="back-to-catalog-button">Back to catalog</button>
                        <button className="add-to-route-button">Add to route</button>
                    </div>
                </div>
            </div>
        </div>
        
        <div className="customer-reviews-section">
            <h2 className="section-main-title">Customer reviews</h2>
            <div className="reviews-carousel">
                {reviewData.map((review, index) => (
                    <ReviewCard
                        key={index}
                        avatar={review.avatar}
                        name={review.name}
                        location={review.location}
                        rating={review.rating}
                        text={review.text}
                    />
                ))}
            </div>
            <div className="carousel-nav-controls reviews-nav">
                <span className="nav-arrow left-arrow">{'<'}</span>
                <span className="nav-arrow right-arrow">{'>'}</span>
            </div>
        </div>

        <div className="related-tours-section">
            <h2 className="related-tours-title">You might also like...</h2>
            
            <div className="related-tours-carousel">
                {relatedToursData.map((tour, index) => (
                    <RelatedTourCard
                        key={index}
                        image={tour.image}
                        title={tour.title}
                        days={tour.days}
                        price={tour.price}
                        tag={tour.tag}
                    />
                ))}
            </div>
            <div className="carousel-nav-controls">
                <span className="nav-arrow left-arrow">{'<'}</span>
                <span className="nav-arrow right-arrow">{'>'}</span>
            </div>
        </div>

        <div className="select-destination-map-section">
            <h2 className="section-main-title">Select a destination</h2>
            <div className="map-container">
                <img src={Map} alt="Baku Map" className="baku-map-image"/>
            </div>
        </div>

      </div>
    );
};

export default AboutTour;