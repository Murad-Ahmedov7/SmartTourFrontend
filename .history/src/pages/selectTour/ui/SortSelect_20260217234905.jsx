export const  SortSelect = ({ value, onChange }) => {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
        style="sort-select'
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

