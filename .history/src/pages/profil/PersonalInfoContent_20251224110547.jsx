//  const PersonalInfoContent = () => (
//     <>
//       {" "}
//       <section className="profilPage-personal-info-section">
//         {" "}
//         <h2 className="profilPage-section-title">Personal information</h2>{" "}
//         <EditableField
//           label="Full name"
//           initialValue={userInfo.fullName}
//           onSave={(val) => setUserInfo({ ...userInfo, fullName: val })}
//         />{" "}
//         <EditableField
//           label="Phone number"
//           initialValue={userInfo.phone}
//           onSave={(val) => setUserInfo({ ...userInfo, phone: val })}
//         />{" "}
//         <EditableField
//           label="Date of birth"
//           initialValue={userInfo.dob}
//           onSave={(val) => setUserInfo({ ...userInfo, dob: val })}
//         />{" "}
//       </section>{" "}
//       <section className="profilPage-security-section">
//         <h2 className="profilPage-section-title">Account Security</h2>{" "}
//         <EditableField
//           label="Email"
//           initialValue={userInfo.email}
//           onSave={(val) => setUserInfo({ ...userInfo, email: val })}
//         />{" "}
//         <EditableField
//           label="Password"
//           initialValue={userInfo.password}
//           isPassword={true}
//           onSave={(val) => setUserInfo({ ...userInfo, password: val })}
//         />{" "}
//         <div className="profilPage-info-row profilPage-switch-row">
//           {" "}
//           <span className="profilPage-info-label">
//             2-step verifications
//           </span>{" "}
//           <div className="profilPage-info-value-container">
//             {" "}
//             <span className="profilPage-switch-description">
//               Add an additional layer of security to your account during login.{" "}
//             </span>{" "}
//             <label className="profilPage-custom-switch">
//               <input type="checkbox" />{" "}
//               <span className="profilPage-slider profilPage-round"></span>{" "}
//             </label>{" "}
//           </div>{" "}
//         </div>{" "}
//       </section>{" "}
//       <section className="profilPage-support-access-section">
//         <h2 className="profilPage-section-title titleTwo">Support access</h2>{" "}
//         <div className="profilPage-info-row profilPage-switch-row">
//           {" "}
//           <span className="profilPage-info-label titleTwo">
//             Support access
//           </span>{" "}
//           <div className="profilPage-info-value-container">
//             {" "}
//             <span className="profilPage-switch-description">
//               You have granted access to your account for support purposes until
//               Aug 20, 2025, 12:20 AM.{" "}
//             </span>{" "}
//             <label className="profilPage-custom-switch active">
//               <input type="checkbox" defaultChecked />{" "}
//               <span className="profilPage-slider profilPage-round"></span>{" "}
//             </label>{" "}
//           </div>{" "}
//         </div>{" "}
//         <div className="profilPage-action-row">
//           {" "}
//           <div className="profilPage-action-details">
//             {" "}
//             <h4 className="profilPage-action-label titleTwo">
//               Log out of all devices
//             </h4>{" "}
//             <p className="profilPage-action-description">
//               Log out of all other active sessions on other devices besides this
//               one.{" "}
//             </p>{" "}
//           </div>{" "}
//           <button className="profilPage-log-out-button">Log out</button>{" "}
//         </div>{" "}
//         <div className="profilPage-action-row profilPage-delete-row">
//           {" "}
//           <div className="profilPage-action-details">
//             {" "}
//             <h4 className="profilPage-action-label titleTwo">
//               Delete my account
//             </h4>{" "}
//             <p className="profilPage-action-description">
//               Permanently delete the account and remove access from all
//               workspaces.{" "}
//             </p>{" "}
//           </div>
//           <button className="profilPage-delete-button">Delete</button>{" "}
//         </div>{" "}
//       </section>{" "}
//     </>
//   );


//   const EditableField = ({ label, initialValue, isPassword = false, onSave }) => {
//     const [isEditing, setIsEditing] = useState(false);
//     const [value, setValue] = useState(initialValue);
  
//   // const ValidToken=localStorage.getItem("result");
//   // const ValidPassword=localStorage.getItem("password");
    
//   // useEffect(()=>{
  
//   // if (ValidToken) {
//   //   console.log(" token var")
    
//   // } else {
//   //   console.log("token yoxdur")
//   // }
//   // },[])
  
//     const displayValue = isPassword
//       ? "••••••••"
//       : value || (label === "Phone number" ? "+994xxxxxxxxx" : "Not provided");
  
//     const buttonText = value ? "Edit" : "Add";
  
//     const handleSave = () => {
//       setIsEditing(false);
//       if (onSave) onSave(value);
//     };
  
//     const handleEditClick = () => {
//       if (isEditing) {
//         handleSave();
//       } else {
//         setIsEditing(true);
//       }
//     };
  
//     return (
//       <div className="profilPage-info-row">
//         <div className="profilPage-label-value-wrapper">
//           <span className="profilPage-info-label">{label}</span>{" "}
//           {isEditing ? (
//             <input
//               type={isPassword ? "password" : "text"}
//               value={isPassword ? "••••••••" : value}
//               onChange={(e) =>
//                 setValue(e.target.value === "••••••••" ? value : e.target.value)
//               }
//               className="profilPage-edit-input"
//               autoFocus
//             />
//           ) : (
//             <span className="profilPage-info-value">{displayValue}</span>
//           )}
//         </div>
//         <button
//           className={`profilPage-action-button ${
//             isEditing ? "save" : buttonText.toLowerCase()
//           }`}
//           onClick={handleEditClick}
//         >
//           {isEditing ? (
//             "Save"
//           ) : buttonText === "Edit" ? (
//             <div className="editBtn">
//               <SlPencil
//                 style={{
//                   marginRight: "6px",
//                   verticalAlign: "text-bottom",
//                   color: "black",
//                 }}
//               />
//               {buttonText}
//             </div>
//           ) : (
//             <div className="editBtn">
//               <SlPencil
//                 style={{
//                   marginRight: "6px",
//                   verticalAlign: "text-bottom",
//                   color: "black",
//                 }}
//               />
//               {buttonText}
//             </div>
//           )}
//         </button>{" "}
//       </div>
//     );
//   };
