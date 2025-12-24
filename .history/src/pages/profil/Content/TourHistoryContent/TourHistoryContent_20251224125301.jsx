  import sevda from "../../../../assets/sevda.jpg";
  import shaki from "../../../../assets/tourhistory.jpg";



  export default function TourHistoryContent() {
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

    return (
      <>
        <h2 className="profilPage-section-title">Tour history</h2>{" "}
        <main className="profilPage-tour-history-grid">
          {" "}
          {allHistoryCards.map((tour, index) => (
            <HistoryTourCard key={index} {...tour} image={shaki} />
          ))}{" "}
        </main>{" "}
      </>
    );
  }
