export const  SortSelect = ({ value, onChange }) => {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
        style={{
          padding: "10px 14px",
          marginBottom: "10px",
          borderRadius: "8px",
          border: "1px solid #d0d0d0",
          backgroundColor: "#fff",
          fontSize: "14px",
          fontWeight: 500,
          color: "#333",
          outline: "none",
          cursor: "pointer",
          minWidth: "220px",
          boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
        }}
    >
      <option value="price_asc">Price: Low → High</option>
      <option value="price_desc">Price: High → Low</option>
      <option value="rating_asc">Rating: Low → High</option>
      <option value="rating_desc">Rating: High → Low</option>
      <option value="duration_asc">Duration: Low → High</option>
      <option value="duration_desc">Duration: High → Low</option>
    </select>
  );
};

