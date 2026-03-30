import { useNavigate, useParams } from "react-router-dom";
import "./tourDetails.css";

import { useEffect, useState } from "react";
import TourSummary from "./ui/TourSummary";
import baseApi from "../../api/baseApi";
import TourOverview from "./ui/TourOverview";
import TourInclusions from "./ui/TourInclusions";
import TourReviews from "./ui/TourReviews";

import Map from "../../assets/map.png";

export default function TourDetails() {
  const { id } = useParams();
  const [tour, setTour] = useState();
  const navigate = useNavigate();
  const fetchData = async () => {
    const res = await baseApi.get(`/tours/${id}`);
    // console.log(res.data);
    setTour(res.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (!tour) {
    return <div>Loading...</div>;
  }

  return (
    <div className="tour-page-container">
      <div className="tour-details-section">
        <TourSummary
          image={tour.images[0]}
          title={tour.title}
          region={`${tour.region}, Azerbaijan`}
          rating={tour.rating}
          reviewsCount={tour.reviews.length}
          duration={tour.durationDays}
          price={tour.price}
          onBuildRoute={() => navigate(`/build-route/${tour.id}`)}
          onBookNow={() => navigate(`/checkout/${tour.id}`)}
        />
        <header className="tour-detail-nav">
          <div className="tab active">Overview</div>
          <div className="tab">Itinerary</div>
          <div className="tab">Inclusions</div>
          <div className="tab">Reviews</div>
          <div className="tab">Map</div>
        </header>

        <div className="main-content-wrapper">
          <TourOverview
            description={tour.description}
            highlights={[
              "Visit historical landmarks and museums",
              "Experience local food and traditions",
              "Enjoy scenic mountain and nature views",
              "Small group tour with professional guide",
            ]}
          />

          <section id="itinerary" className="tour-itinerary">
            <h2 className="section-title">Itinerary</h2>

            {[...tour.itinerary]
              .sort((a, b) => a.day - b.day)
              .map((item) => (
                <div key={item.day} className="itinerary-row">
                  {/* LEFT BAR */}
                  <div className="itinerary-left">
                    <span className="itinerary-day-label">Day</span>
                    <span className="itinerary-day-number">{item.day}</span>
                  </div>

                  {/* RIGHT CONTENT */}
                  <div className="itinerary-right">
                    <h4 className="itinerary-title">{item.title}</h4>
                    <p className="itinerary-description">{item.description}</p>
                  </div>
                </div>
              ))}
          </section>

          {/* INCLUSIONS */}
          <TourInclusions
            included={tour.includedServices}
            excluded={tour.excludedServices}
          />
          <TourReviews reviews={tour.reviews} />

          <div style={{borderTop:'3px solid #e2e8f0',marginTop:'30px',paddingTop:'32px' }} className="">
            <h2 className="section-main-title">Select a destination</h2>

            {/* Coordinates info */}
            <div className="map-info">
              <div className="map-coordinates">
                <span>📍 Latitude:</span>
                <strong>{tour.coordinates.latitude.toFixed(4)}</strong>
              </div>
              <div className="map-coordinates">
                <span>📍 Longitude:</span>
                <strong>{tour.coordinates.longitude.toFixed(4)}</strong>
              </div>
            </div>

            <div className="map-container">
              <img src={Map} alt="Baku Map" className="baku-map-image" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

//kohne ui ile muqayise et mutlew ve eksiklere bax
