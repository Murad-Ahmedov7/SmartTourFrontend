import "../profil.css";
// import NavItem from "./SidebarItem";

import sevda from "../../../assets/sevda.jpg";
import { useState } from "react";
import SidebarItem from "./SidebarItem";
import PersonalInfoContent from "../PersonalInfoContent";

export default function Sidebar() {


    const [activeContent, setActiveContent] = useState("personal");

      const [userInfo, setUserInfo] = useState({
        fullName: "Aygun Ismayilova",
        phone: "",
        dob: "",
        email: "example@gmail.com",
        password: "password123",
      });


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
                <SidebarItem
                  icon="👤"
                  label="Personal information"
                  isActive={activeContent === "personal"}
                  onClick={() => setActiveContent("personal")}
                />{" "}
                <SidebarItem
                  icon="🕰️"
                  label="Tour history"
                  isActive={activeContent === "history"}
                  onClick={() => setActiveContent("history")}
                />{" "}
                <SidebarItem
                  icon="🔒"
                  label="Saved Filters & Favorites"
                  isActive={activeContent === "saved"}
                  onClick={() => setActiveContent("saved")}
                />{" "}
                <SidebarItem
                  icon="💳"
                  label="Payment methods"
                  isActive={false}
                  onClick={() => setActiveContent("payment")}
                />{" "}
                <SidebarItem 
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
