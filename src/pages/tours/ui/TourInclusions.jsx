import "../tourDetails.css";

const TourInclusions = ({ included, excluded }) => {
  return (
    <section id="inclusions" className="tour-inclusions">
      <h2 className="section-title">Inclusions</h2>

      <div className="inclusions-grid">
        
        {/* INCLUDED */}
        <div className="inclusions-box included">
          <h3 className="inclusions-title">What's included</h3>
          <ul>
            {included.map((item, index) => (
              <li key={index}>
                <span className="inclusion-icon  included-icon">✓</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* EXCLUDED */}
        <div className="inclusions-box excluded">
          <h3 className="inclusions-title">What's not included</h3>
          <ul>
            {excluded.map((item, index) => (
              <li key={index}>
                <span className="inclusion-icon  excluded-icon">✕</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
};

export default TourInclusions;