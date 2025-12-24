const ActionButton = ({ icon: IconComponent, text, onClick }) => (
  <div className="editBtn" onClick={onClick}>
    <IconComponent
      style={{
        marginRight: "6px",
        verticalAlign: "text-bottom",
        color: "black",
      }}
    />
    {text}
  </div>
);