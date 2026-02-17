import amusementParkImg from "../../../assets/amusementPark.jpg";
import historicalImg from "../../../assets/historical.jpg";
import villageImg from "../../../assets/village.jpg";
import divingImg from "../../../assets/diving.jpg";
import horseRidingImg from "../../../assets/horseRiding.jpg";
import waterSafariImg from "../../../assets/waterSafari.jpg";
import campingImg from "../../../assets/camping.jpg";
import parachuteImg from "../../../assets/parachute.jpg";
import seaTripImg from "../../../assets/seaTrip.jpg";





  const vacationTypes = [
    { id: 1, name: "Amusement park", imageUrl: amusementParkImg },
    { id: 2, name: "Historical", imageUrl: historicalImg },
    { id: 3, name: "Village Tour", imageUrl: villageImg },
    { id: 4, name: "Diving", imageUrl: divingImg },
    { id: 5, name: "Horse riding", imageUrl: horseRidingImg },
    { id: 6, name: "Water Safari", imageUrl: waterSafariImg },
    { id: 7, name: "Camping", imageUrl: campingImg },
    { id: 8, name: "Parachute", imageUrl: parachuteImg },
    { id: 9, name: "Sea trip", imageUrl: seaTripImg },
  ];









const VacationCard = ({ name, imageUrl, isSelected, onSelect }) => {
  return (
    <div
      className={`vacation-card ${isSelected ? "selected" : ""}`}
      style={{ backgroundImage: `url(${imageUrl})` }}
      onClick={() => onSelect(name)}
    >
      <div className="vacation-checkbox">
        <input
          type="checkbox"
          id={`vacation-${name}`}
          name={name}
          checked={isSelected}
          onChange={() => onSelect(name)}
          style={{ display: "none" }}
        />
        <label htmlFor={`vacation-${name}`} className="checkbox-icon">
          {isSelected ? "✔️" : "◻️"}
        </label>
      </div>

      <span className="vacation-name">{name}</span>
    </div>
  );
};

const VacationTypesSection = ({ selectedVacationTypes, onVacationSelect }) => {
  return (
    <div className="vacation-section-container">
      <div className="vacation-header">
        <h2 className="vacation-title">Vacation type</h2>
        <a href="/see-all" className="see-all-link">
          See all <span className="arrow-icon">{">"}</span>
        </a>
      </div>

      <div className="vacation-cards-grid">
        {vacationTypes.map((type) => (
          <VacationCard
            key={type.id}
            name={type.name}
            imageUrl={type.imageUrl}
            isSelected={selectedVacationTypes.includes(type.name)}
            onSelect={onVacationSelect}
          />
        ))}
      </div>
    </div>
  );
};