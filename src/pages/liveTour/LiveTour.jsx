
import React from "react";
import "./liveTour.css";
import foto from "../../assets/akhundov.png";
import foto1 from "../../assets/muzey.jpg";
import foto2 from "../../assets/private.jpg";
import foto3 from "../../assets/day.jpg";
import foto4 from "../../assets/adventure.jpg";
import map from "../../assets/map2.png";

const icons = {
  clock: (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12C20 16.4183 16.4183 20 12 20Z"
        fill="currentColor"
      />
      <path
        d="M12 7C11.4477 7 11 7.44772 11 8V12C11 12.2652 11.1054 12.5196 11.2929 12.7071L14.2929 15.7071C14.6834 16.0976 15.3166 16.0976 15.7071 15.7071C16.0976 15.3166 16.0976 14.6834 15.7071 14.2929L13 11.5858V8C13 7.44772 12.5523 7 12 7Z"
        fill="currentColor"
      />
    </svg>
  ),
  mapPin: (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z"
        fill="currentColor"
      />
    </svg>
  ),
  volumeMute: (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.5 12C16.5 10.23 15.54 8.71 14 7.97V16.02C15.54 15.28 16.5 13.77 16.5 12ZM3 9V15H7L12 20V4L7 9H3Z"
        fill="currentColor"
      />
    </svg>
  ),
  chevronLeft: (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.41 7.41L14 6L8 12L14 18L15.41 16.59L10.83 12L15.41 7.41Z"
        fill="currentColor"
      />
    </svg>
  ),
  chevronRight: (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10 6L8.59 7.41L13.17 12L8.59 16.59L10 18L16 12L10 6Z"
        fill="currentColor"
      />
    </svg>
  ),
  play: (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M8 5V19L19 12L8 5Z" fill="currentColor" />
    </svg>
  ),
  pause: (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M6 19H10V5H6V19ZM14 5V19H18V5H14Z" fill="currentColor" />
    </svg>
  ),
  restart: (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 5V1L7 6L12 11V7C15.31 7 18 9.69 18 13C18 16.31 15.31 19 12 19C8.69 19 6 16.31 6 13H4C4 17.42 7.58 21 12 21C16.42 21 20 17.42 20 13C20 8.58 16.42 5 12 5Z"
        fill="currentColor"
      />
    </svg>
  ),
  download: (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19 9H15V3H9V9H5L12 16L19 9ZM5 18V20H19V18H5Z"
        fill="currentColor"
      />
    </svg>
  ),
  plus: (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M19 13H13V19H11V13H5V11H11V5H13V11H19V13Z" fill="currentColor" />
    </svg>
  ),
  minus: (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M19 13H5V11H19V13Z" fill="currentColor" />
    </svg>
  ),
  star: (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"
        fill="currentColor"
      />
    </svg>
  ),
  chevronRightSmall: (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10 6L8.59 7.41L13.17 12L8.59 16.59L10 18L16 12L10 6Z"
        fill="currentColor"
      />
    </svg>
  ),
  bookmark: (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17 3H7C5.9 3 5 3.9 5 5V21L12 18L19 21V5C19 3.9 18.1 3 17 3Z"
        fill="currentColor"
      />
    </svg>
  ),
};


const popularExperiences = [
  {
    id: 1,
    image: foto1,
    title: "A harmony of nature",
    details: "2 days / 1 night",
    price: "100 azn",
    rating: "4.5",
    reviews: 40,
  },
  {
    id: 2,
    image: foto2,
    title: "Private Sheki Tour",
    details: "2 days / 1 night",
    price: "100 azn",
    rating: "4.5",
    reviews: 47,
  },
  {
    id: 3,
    image: foto3,
    title: "Shaki Day trip",
    details: "1 days / 2 night",
    price: "80 azn",
    rating: "4.3",
    reviews: 32,
  },
  {
    id: 4,
    image: foto4,
    title: "Sheki Adventure Nat...",
    details: "1 days",
    price: "30 azn",
    rating: "4.5",
    reviews: 36,
  },
];


const ReferenceExact = () => {
  return (
    <div className="reference-exact">
      <header className="re-header">
        <div className="re-header-left">
          <h1>Live Tour: From Baku: Sheki Day Tour</h1>
          <span className="re-header-duration">
            {icons.clock}
            16h 20m
          </span>
        </div>
        <button className="re-open-map-btn">
          {icons.mapPin}
          Open Map
        </button>
      </header>

      <main className="re-main-content">
        <section className="re-tour-player">
          <div className="re-player-header">
            <h2>Karvansaray</h2>
            <button className="re-mute-btn" aria-label="Mute">
              {icons.volumeMute}
              Mute
            </button>
          </div>

          <div className="re-player-media">
            <div className="re-media-visual">
              <img
                src={foto}
                alt="Karvansaray interior"
                className="re-media-image"
              />
              <button className="re-media-nav prev" aria-label="Previous slide">
                {icons.chevronLeft}
              </button>
              <button className="re-media-nav next" aria-label="Next slide">
                {icons.chevronRight}
              </button>
            </div>
            <div className="re-media-info">
              <p>
                The house of M.F.Akhundov has been functioning as a museum since
                1940. The last extensive restoration work took place in honor of
                his 200th anniversary in 2011-2012.
              </p>
              <span className="re-media-duration">
                {icons.clock}
                Duration 2h 30m
              </span>
            </div>
          </div>

          <div className="re-player-controls">
            <div className="re-progress-bar">
              <div
                className="re-progress-bar-inner"
                style={{ width: "60%" }}
              ></div>
            </div>
            <span className="re-progress-step">Step 3 of 5</span>
            <div className="re-control-buttons">
              <button className="re-control-btn">
                {icons.play}
                Next
              </button>
              <button className="re-control-btn secondary">
                {icons.pause}
                Pause
              </button>
              <button className="re-control-btn secondary">
                {icons.restart}
                Restrat
              </button>
              <button className="re-control-btn secondary">
                {icons.download}
                Download
              </button>
            </div>
          </div>
        </section>


        <aside className="re-map-view">
          <div className="re-map-container">
            <img src={map} alt="Map of Sheki tour" className="re-map-image" />
            <div className="re-map-zoom-controls">
              <button aria-label="Zoom in">{icons.plus}</button>
              <button aria-label="Zoom out">{icons.minus}</button>
            </div>
          </div>
          <p className="re-map-description">
            Discover the captivating history and culture of Azerbaijan on our
            tour to Sheki. Delve into the architectural wonders of Sheki as our
            knowledgeable guide explains everything.
          </p>
        </aside>
      </main>

      <section className="re-popular-experiences">
        <div className="re-popular-header">
          <h3>
            Popular Experiences near House Museum of Mirza Fatali Akhundzadeh
          </h3>
          <a href="#" className="re-see-all-link">
            See all
            {icons.chevronRightSmall}
          </a>
        </div>

        <div className="re-experience-cards">
          {popularExperiences.map((exp) => (
            <article key={exp.id} className="re-card">
              <div className="re-card-image-wrapper">
                <img src={exp.image} alt={exp.title} />
                <button
                  className="re-card-bookmark"
                  aria-label="Bookmark experience"
                >
                  {icons.bookmark}
                </button>
              </div>
              <div className="re-card-content">
                <h4 className="re-card-title">{exp.title}</h4>
                <p className="re-card-details">{exp.details}</p>
                <p className="re-card-price">Starting from {exp.price}</p>
                <div className="re-card-rating">
                  <span className="re-star-icon">{icons.star}</span>
                  <strong>{exp.rating}</strong>
                  <span>| {exp.reviews} reviews</span>
                </div>
                <button className="re-card-btn">View details</button>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ReferenceExact;
