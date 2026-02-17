export const Pagination = ({ page, total, limit }) => {
  const totalPages = Math.ceil(total / limit);

  return (
    <div
    className="pagination">
      {/* PREV */}
      <button
        onClick={() => setPage(page - 1)}
        disabled={page === 1} 
      >
        Prev
      </button>

      {/* PAGE NUMBERS */}
      {Array.from({ length: totalPages }).map((_, i) => {
        const pageNumber = i + 1;
        const isActive = page === pageNumber;

        return (
          <button
            key={pageNumber}
            onClick={() => setPage(pageNumber)}
            style={{
              width: "32px",
              height: "32px",
              borderRadius: "50%",
              border: "1px solid #ccc",
              backgroundColor: isActive ? "#007bff" : "#fff",
              color: isActive ? "#fff" : "#000",
              fontWeight: isActive ? "bold" : "normal",
              cursor: "pointer",
            }}
          >
            {pageNumber}
          </button>
        );
      })}

      {/* NEXT */}
      <button
        onClick={() => setPage(page + 1)}
        disabled={page === totalPages}
        style={{
          padding: "6px 12px",
          borderRadius: "6px",
          border: "1px solid #ccc",
          backgroundColor: page === totalPages ? "#eee" : "#fff",
          cursor: page === totalPages ? "not-allowed" : "pointer",
        }}
      >
        Next
      </button>
    </div>
  );
};
