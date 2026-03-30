import ".././tourDetails.css";

  const TourOverview = ({ 
    description,
     highlights }) => {
    return (
      <section id="overview" className="tour-overview">
        <h2 className="section-title">Overview</h2>

        <p className="tour-description">{description}</p>

        <h3 className="section-subtitle">Highlights</h3>

        <ul className="tour-highlights">
          {highlights.map((item, index) => (
            <li key={index} className="highlight-item">
              <span className="check-icon">✓</span>
              {item}
            </li>
          ))}
        </ul>
      </section>
    );
  };

export default TourOverview