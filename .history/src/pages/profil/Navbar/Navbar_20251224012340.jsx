import "../profil.css";
import NavItem from "./NavItem";

import sevda from "../../../assets/sevda.jpg";

export default function Navbar() {
  return(
       <div className="user-profile-page-container">
          {" "}
          <div className="profilPage-profile-layout">
            {" "}
            <div className="profilPage-profile-sidebar">
              {" "}
              <div className="profilPage-sidebar-header">
                {" "}
                <img src={sevda} alt="Aygün" className="profilPage-user-avatar" />
                <h2>Hello, Aygun!</h2>{" "}
              </div>{" "}
              <nav className="profilPage-profile-nav">
                {" "}
                <NavItem
                  icon="👤"
                  label="Personal information"
                  isActive={activeContent === "personal"}
                  onClick={() => setActiveContent("personal")}
                />{" "}
                <NavItem
                  icon="🕰️"
                  label="Tour history"
                  isActive={activeContent === "history"}
                  onClick={() => setActiveContent("history")}
                />{" "}
                <NavItem
                  icon="🔒"
                  label="Saved Filters & Favorites"
                  isActive={activeContent === "saved"}
                  onClick={() => setActiveContent("saved")}
                />{" "}
                <NavItem
                  icon="💳"
                  label="Payment methods"
                  isActive={false}
                  onClick={() => setActiveContent("payment")}
                />{" "}
                <NavItem
                  icon="🔔"
                  label="Notification settings"
                  isActive={false}
                  onClick={() => setActiveContent("notifications")}
                />{" "}
              </nav>{" "}
            </div>
            <div
              className={`profilPage-profile-content ${
                activeContent !== "personal" ? "profilPage-history-active" : ""
              }`}
            >
              {renderContent()}{" "}
            </div>{" "}
          </div>{" "}
        </div>
  )
}
