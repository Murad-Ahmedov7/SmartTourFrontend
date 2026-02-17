export const Pagination = ({ page, total, limit }) => {
  const totalPages = Math.ceil(total / limit);

  return (
    <div
    className="pagination">
      {/* PREV */}
      <button
        onClick={() => setPage(page - 1)}
        disabled={page === 1}
        className={`pagination-btn ${page === 1 ? "disabled" : ""}`}
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
                        className={`pagination-circle ${isActive ? "active" : ""}`}
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
