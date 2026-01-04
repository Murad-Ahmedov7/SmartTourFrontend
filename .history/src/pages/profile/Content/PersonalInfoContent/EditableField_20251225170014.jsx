import { useEffect, useState } from "react";
import { SlPencil } from "react-icons/sl";
import { FaRegEyeSlash } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";
import axios from "axios";
import baseApi from "../../../../api/baseApi";


export default function EditableField({label,initialValue,isPassword = false,onSave}) {
  const [isEditing, setIsEditing] = useState(false);
  const [value, setValue] = useState(initialValue);
  const [showPassword, setShowPassword] = useState(false);

  const [currentPassword,setCurrentPassword]=useState('');


  const [newPassword,setNewPassword]=useState('');

  const toggleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  const validToken=localStorage.getItem("result");




  const changePassword = async () => {
  try {
    console.log("currentPassword:", currentPassword);
    console.log("newPassword:", newPassword);

    const res = await baseApi.post(
      "/auth/change-password",
      { currentPassword,  newPassword },
      { headers: { Authorization: `Bearer ${validToken}` } }
    );

    

    console.log("Response data:", res.data);


  } catch (err) {
    // AxiosError içində backend-dən gələn cavabı görmək üçün
    if (err.response) {
      console.log("Error status:", err.response.status);
      console.log("Error data:", err.response.data);
    } else {
      console.log("Request error:", err.message);
    }
  }
};


  const displayValue =
    value || (label === "Phone number" ? "+994xxxxxxxxx" : "Not provided");

  const buttonText = value ? "Edit" : "Add";

  const handleSave = () => {
    setIsEditing(false);
    if (onSave) onSave(value);
    changePassword();
  };

  const handleEditClick = () => {
    if (isEditing) {
      handleSave();
    } else {
      setIsEditing(true);
    }
  };

const maskChar = "•";                // Hər bir gizli simvol üçün işarə
const maskedPassword = maskChar.repeat(currentPassword.length); // Maskalanmış password
  return (
    <div className="profilPage-info-row">
      <div className="profilPage-label-value-wrapper">
        <span className="profilPage-info-label">{label}</span>{" "}
        {isEditing ? (
          <>
              <input
            type={isPassword ? (showPassword?"text":"password") : "text"}
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
            className="profilPage-edit-input"
            autoFocus
          />

                 <input
            type={isPassword ? (showPassword?"text":"password") : "text"}
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className="profilPage-edit-input"
            autoFocus
          />
          </>

        ) : (
          <>
            {isPassword ? (
              // <span className="profilPage-info-value">{showPassword?value:maskedPassword}</span>
              <span className="profilPage-info-value">{"••••••••"}</span>
            ) : (
              <span className="profilPage-info-value">{displayValue}</span>
            )}
          </>
        )}
      </div>


      {isPassword && isEditing && (
        <button
          onClick={toggleShowPassword}
          style={{border:'none'}}
        >
          {showPassword ? (
            <FaRegEyeSlash style={{ marginRight: "6px", verticalAlign: "text-bottom", color: "black" }} />
          ) : (
            <FaRegEye style={{ marginRight: "6px", verticalAlign: "text-bottom", color: "black" }} />
          )}
          {showPassword ? "Hide" : "Show"}
        
        </button>
      )}


      <button
        className={`profilPage-action-button ${
          isEditing ? "save" : buttonText.toLowerCase()
        }`}
        onClick={handleEditClick}
      >
        {isEditing ? (
          "Save"
        ) : (
            <div className="editBtn">
              <SlPencil
                style={{
                  marginRight: "6px",
                  verticalAlign: "text-bottom",
                  color: "black",
                }}
              />
              {buttonText}
            </div>
  
        )}
      </button>{" "}
    </div>
  );
}

//mumkun olsa daha da Oxunaqlıq / Readability: et

// import { useState } from "react";
// import { SlPencil } from "react-icons/sl";
// import { FaRegEyeSlash, FaRegEye } from "react-icons/fa";
// import baseApi from "../../../../api/baseApi";

// export default function EditableField({ label, initialValue, isPassword = false, onSave }) {
//   const [isEditing, setIsEditing] = useState(false);
//   const [currentPassword, setCurrentPassword] = useState("");
//   const [newPassword, setNewPassword] = useState("");
//   const [showPassword, setShowPassword] = useState(false);

//   const validToken = localStorage.getItem("result");

//   const toggleShowPassword = () => setShowPassword(prev => !prev);

//   const handleSave = async () => {
//     if (onSave) onSave(newPassword); // əgər value update lazımdırsa

//     if (isPassword && currentPassword && newPassword) {
//       try {
//         const res = await baseApi.post(
//           "/auth/change-password",
//           { currentPassword, newPassword },
//           { headers: { Authorization: `Bearer ${validToken}` } }
//         );
//         console.log("Password changed successfully:", res.data);
//         setCurrentPassword("");
//         setNewPassword("");
//         setIsEditing(false);
//       } catch (err) {
//         if (err.response) {
//           console.log("Error status:", err.response.status);
//           console.log("Error data:", err.response.data);
//           alert(err.response.data); // xətanı istifadəçiyə göstərmək üçün
//         } else {
//           console.log("Request error:", err.message);
//         }
//       }
//     } else {
//       alert("Both current and new password must be filled!");
//     }
//   };

//   const handleEditClick = () => {
//     if (isEditing) handleSave();
//     else setIsEditing(true);
//   };

//   const maskedPassword = "•".repeat(newPassword.length || 8);

//   return (
//     <div className="profilPage-info-row">
//       <div className="profilPage-label-value-wrapper">
//         <span className="profilPage-info-label">{label}</span>
//         {isPassword && isEditing ? (
//           <div className="password-inputs">
//             <input
//               type={showPassword ? "text" : "password"}
//               placeholder="Current password"
//               value={currentPassword}
//               onChange={(e) => setCurrentPassword(e.target.value)}
//               className="profilPage-edit-input"
//               autoFocus
//             />
//             <input
//               type={showPassword ? "text" : "password"}
//               placeholder="New password"
//               value={newPassword}
//               onChange={(e) => setNewPassword(e.target.value)}
//               className="profilPage-edit-input"
//             />
//           </div>
//         ) : (
//           <span className="profilPage-info-value">
//             {showPassword ? currentPassword || "********" : maskedPassword}
//           </span>
//         )}
//       </div>

//       {isPassword && (
//         <button onClick={toggleShowPassword} style={{ border: "none" }}>
//           {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
//           {showPassword ? "Hide" : "Show"}
//         </button>
//       )}

//       <button
//         className={`profilPage-action-button ${isEditing ? "save" : "edit"}`}
//         onClick={handleEditClick}
//       >
//         {isEditing ? "Save" : <div className="editBtn"><SlPencil /> Edit</div>}
//       </button>
//     </div>
//   );
// }


