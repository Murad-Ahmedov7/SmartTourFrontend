 import { IoLocationOutline } from "react-icons/io5";
import { FaRoad, FaEdit } from "react-icons/fa"; 
import { PiPicnicTable } from "react-icons/pi";
import { PiMountainsDuotone } from "react-icons/pi";
import { FilterFavoriteItem } from "./FilterFavoriteItem";

 export default function SavedFiltersContent  ()  {
  const favoritesData = [
    {
      icon: <PiMountainsDuotone />,
      name: "Mountain Camp",
      location: "Quba Park",
      type: "location",
    },
    {
      icon: <IoLocationOutline />,
      name: "Mountain Camp",
      location: "Quba Park",
      type: "location",
    },
    {
      icon: <FaRoad />,
      name: "Historic Downtown",
      location: "Quba Park",
      type: "location",
    },
    {
      icon: <PiPicnicTable />,
      name: "Lakeside Picnic",
      location: "Quba Park",
      type: "location",
    },
  ];

  const filtersData = [
    { name: "1 - day tours < 30 azn", type: "filter" },
    { name: "Mountain trips (3 days)", type: "filter" },
  ];

  return (
    <>
      <section className="profilPage-favorites-section">
        <h2 className="profilPage-section-title-alt">Favorites</h2>{" "}
        <div className="profilPage-favorites-list">
          {" "}
          {favoritesData.map((item, index) => (
            <FilterFavoriteItem key={`fav-${index}`} {...item} />
          ))}{" "}
        </div>{" "}
      </section>
      <section className="profilPage-filters-section">
        <h2 className="profilPage-section-title-alt">Filters</h2>{" "}
        <div className="profilPage-filters-list">
          {" "}
          {filtersData.map((item, index) => (
            <FilterFavoriteItem key={`filt-${index}`} {...item} />
          ))}{" "}
        </div>{" "}
      </section>{" "}
    </>
  );
};
