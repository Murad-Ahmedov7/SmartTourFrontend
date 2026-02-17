export const Pagination = ({ page, total, limit, onChange }) => {
  const totalPages = Math.ceil(total / limit);

  return (
    <div
      style={{
        display: "flex",
        gap: "8px",
        marginTop: "20px",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* PREV */}
      <button
        onClick={() => setPage(page - 1)}
        disabled={page === 1}
        style={{
          padding: "6px 12px",
          borderRadius: "6px",
          border: "1px solid #ccc",
          backgroundColor: page === 1 ? "#eee" : "#fff",
          cursor: page === 1 ? "not-allowed" : "pointer",
        }}
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
