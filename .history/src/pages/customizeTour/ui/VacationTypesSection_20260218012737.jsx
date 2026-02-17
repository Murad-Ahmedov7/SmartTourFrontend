import amusementParkImg from "../../../assets/amusementPark.jpg";
import historicalImg from "../../assets/historical.jpg";
import villageImg from "../../assets/village.jpg";
import divingImg from "../../assets/diving.jpg";
import horseRidingImg from "../../assets/horseRiding.jpg";
import waterSafariImg from "../../assets/waterSafari.jpg";
import campingImg from "../../assets/camping.jpg";
import parachuteImg from "../../assets/parachute.jpg";
import seaTripImg from "../../assets/seaTrip.jpg";



export default function VacationTypesSection() {

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


}
