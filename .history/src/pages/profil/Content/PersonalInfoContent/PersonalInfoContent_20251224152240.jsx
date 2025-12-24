import { useState } from "react";
import EditableField from "./EditableField";



  export default function PersonalInfoContent(){
    
      const [userInfo, setUserInfo] = useState({
        fullName: "Aygun Ismayilova",
        phone: "",
        dob: "",
        email: "example@gmail.com",
        password: "password123",
      });


  const handleFullNameSave = (val) => setUserInfo({ ...userInfo, fullName: val });
  const handlePhoneSave = (val) => setUserInfo({ ...userInfo, phone: val });
  const handleDobSave = (val) => setUserInfo({ ...userInfo, dob: val });
  const handleEmailSave = (val) => setUserInfo({ ...userInfo, email: val });
  const handlePasswordSave = (val) => setUserInfo({ ...userInfo, password: val });

    return(
    <>
      {" "}
      <section className="profilPage-personal-info-section">
        {" "}
        <h2 className="profilPage-section-title">Personal information</h2>{" "}
        <EditableField
          label="Full name"
          initialValue={userInfo.fullName}
          onSave={handleFullNameSave}
        />{" "}
        <EditableField
          label="Phone number"
          initialValue={userInfo.phone}
          onSave={handlePhoneSave}
        />{" "}
        <EditableField
          label="Date of birth"
          initialValue={userInfo.dob}
          onSave={handleDobSave}
        />{" "}
      </section>{" "}
      <section className="profilPage-security-section">
        <h2 className="profilPage-section-title">Account Security</h2>{" "}
        <EditableField
          label="Email"
          initialValue={userInfo.email}
          onSave={handleEmailSave}
        />{" "}
        <EditableField
          label="Password"
          initialValue={userInfo.password}
          isPassword={true}
          onSave={handlePasswordSave}
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
    )
  };