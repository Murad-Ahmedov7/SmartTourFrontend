import "../profil.css";

import sevda from "../../../assets/sevda.jpg";
import { useState } from "react";
// import SidebarItem from "./SidebarItem";
import PersonalInfoContent from "../Content/PersonalInfoContent";
import TourHistoryContent from "../Content/TourHistoryContent";
import SavedFiltersContent from "../Content/SavedFiltersContent";
import { SidebarItem } from "./SidebarItem";


export default function Sidebar() {


  const sidebarItems = [
    { icon: "👤", label: "Personal information", contentKey: "personal" },
    { icon: "🕰️", label: "Tour history", contentKey: "history" },
    { icon: "🔒", label: "Saved Filters & Favorites", contentKey: "saved" },
    { icon: "💳", label: "Payment methods", contentKey: "payment" },
    { icon: "🔔", label: "Notification settings", contentKey: "notifications" },
  ];


  return (
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
            {sidebarItems.map((item) => (
              <SidebarItem
                key={item.contentKey}
                icon={item.icon}
                label={item.label}
                isActive={activeContent === item.contentKey}
                onClick={() => setActiveContent(item.contentKey)}
              />
            ))}
          </nav>{" "}
        </div>
        <div
          className={`profilPage-profile-content ${
            activeContent !== "personal" ? "profilPage-history-active" : ""
          }`}
        >
          {/* {renderContent()}{" "} */}
        </div>{" "}
      </div>{" "}
    </div>
  );
}
