
export const TourHistoryContent=()=>{
        <>
          <h2 className="profilPage-section-title">Tour history</h2>{" "}
          <main className="profilPage-tour-history-grid">
            {" "}
            {allHistoryCards.map((tour, index) => (
              <HistoryTourCard key={index} {...tour} image={shaki} />
            ))}{" "}
          </main>{" "}
        </>
)