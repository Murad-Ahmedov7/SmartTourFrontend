import { useState } from "react";
import "./profil.css";
import { Sidebar } from "./Sidebar/Sidebar";
import PersonalInfoContent from "./Content/PersonalInfoContent";
import TourHistoryContent from "./Content/TourHistoryContent";
import SavedFiltersContent from "./Content/SavedFiltersContent";

export default function Profil() {
  const [activeContent, setActiveContent] = useState("personal");

  const renderContent = () => {
    switch (activeContent) {
      case "personal":
        return <PersonalInfoContent />;
      case "history":
        return <TourHistoryContent />;
      case "saved":
        return <SavedFiltersContent />;
      default:
        return <PersonalInfoContent />;
    }
  };

  return (
    <div className="user-profile-page-container">
      <div className="profilPage-profile-layout">
        <Sidebar activeContent={activeContent} setActiveContent={setActiveContent}/>
        <div className="profilPage-profile-content">{renderContent()}</div>
      </div>
    </div>
  );
}
