import "../profil.css";



export   SidebarItem({ icon, label, isActive, onClick }) {
  return (
    <div
      className={`profilPage-nav-item ${isActive ? "active" : ""}`}
      onClick={onClick}
    >
      <span className="profilPage-nav-icon">{icon}</span>{" "}
      <span className="profilPage-nav-label">{label}</span>{" "}
    </div>
  );
}
