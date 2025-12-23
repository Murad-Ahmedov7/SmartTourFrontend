import "../profil.css";
import NavItem from "./NavItem";

import sevda from "../../../assets/sevda.jpg";
import { useState } from "react";

export default function Navbar() {


    const [activeContent, setActiveContent] = useState("personal");

 const PersonalInfoContent = () => (
    <>
      {" "}
      <section className="profilPage-personal-info-section">
        {" "}
        <h2 className="profilPage-section-title">Personal information</h2>{" "}
        <EditableField
          label="Full name"
          initialValue={userInfo.fullName}
          onSave={(val) => setUserInfo({ ...userInfo, fullName: val })}
        />{" "}
        <EditableField
          label="Phone number"
          initialValue={userInfo.phone}
          onSave={(val) => setUserInfo({ ...userInfo, phone: val })}
        />{" "}
        <EditableField
          label="Date of birth"
          initialValue={userInfo.dob}
          onSave={(val) => setUserInfo({ ...userInfo, dob: val })}
        />{" "}
      </section>{" "}
      <section className="profilPage-security-section">
        <h2 className="profilPage-section-title">Account Security</h2>{" "}
        <EditableField
          label="Email"
          initialValue={userInfo.email}
          onSave={(val) => setUserInfo({ ...userInfo, email: val })}
        />{" "}
        <EditableField
          label="Password"
          initialValue={userInfo.password}
          isPassword={true}
          onSave={(val) => setUserInfo({ ...userInfo, password: val })}
        />{" "}
        <div className="profilPage-info-row profilPage-switch-row">
          {" "}
          <span className="profilPage-info-label">
            2-step verifications
          </span>{" "}
          <div className="profilPage-info-value-container">
            {" "}
            <span className="profilPage-switch-description">
              Add an additional layer of security to your account during login.{" "}
            </span>{" "}
            <label className="profilPage-custom-switch">
              <input type="checkbox" />{" "}
              <span className="profilPage-slider profilPage-round"></span>{" "}
            </label>{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
      <section className="profilPage-support-access-section">
        <h2 className="profilPage-section-title titleTwo">Support access</h2>{" "}
        <div className="profilPage-info-row profilPage-switch-row">
          {" "}
          <span className="profilPage-info-label titleTwo">
            Support access
          </span>{" "}
          <div className="profilPage-info-value-container">
            {" "}
            <span className="profilPage-switch-description">
              You have granted access to your account for support purposes until
              Aug 20, 2025, 12:20 AM.{" "}
            </span>{" "}
            <label className="profilPage-custom-switch active">
              <input type="checkbox" defaultChecked />{" "}
              <span className="profilPage-slider profilPage-round"></span>{" "}
            </label>{" "}
          </div>{" "}
        </div>{" "}
        <div className="profilPage-action-row">
          {" "}
          <div className="profilPage-action-details">
            {" "}
            <h4 className="profilPage-action-label titleTwo">
              Log out of all devices
            </h4>{" "}
            <p className="profilPage-action-description">
              Log out of all other active sessions on other devices besides this
              one.{" "}
            </p>{" "}
          </div>{" "}
          <button className="profilPage-log-out-button">Log out</button>{" "}
        </div>{" "}
        <div className="profilPage-action-row profilPage-delete-row">
          {" "}
          <div className="profilPage-action-details">
            {" "}
            <h4 className="profilPage-action-label titleTwo">
              Delete my account
            </h4>{" "}
            <p className="profilPage-action-description">
              Permanently delete the account and remove access from all
              workspaces.{" "}
            </p>{" "}
          </div>
          <button className="profilPage-delete-button">Delete</button>{" "}
        </div>{" "}
      </section>{" "}
    </>
  );

    
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
