import { useEffect, useState } from "react";
import { SlPencil } from "react-icons/sl";
import { FaRegEyeSlash } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";
import axios from "axios";


export default function EditableField({label,initialValue,isPassword = false,onSave}) {
  const [isEditing, setIsEditing] = useState(false);
  const [value, setValue] = useState(initialValue);
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  const res=await axios.post()

  // console.log(value)

  // useEffect(()=>{
  //   if(label==='Password'){
  //     setPassword(value)
  //   }
  // },[value])

  // const ValidToken=localStorage.getItem("result");
  // const ValidPassword=localStorage.getItem("password");

  // useEffect(()=>{

  // if (ValidToken) {
  //   console.log(" token var")

  // } else {
  //   console.log("token yoxdur")
  // }
  // },[])

  const displayValue =
    value || (label === "Phone number" ? "+994xxxxxxxxx" : "Not provided");

  const buttonText = value ? "Edit" : "Add";

  const handleSave = () => {
    setIsEditing(false);
    if (onSave) onSave(value);
  };

  const handleEditClick = () => {
    if (isEditing) {
      handleSave();
    } else {
      setIsEditing(true);
    }
  };

const maskChar = "•";                // Hər bir gizli simvol üçün işarə
const maskedPassword = maskChar.repeat(value.length); // Maskalanmış password
  return (
    <div className="profilPage-info-row">
      <div className="profilPage-label-value-wrapper">
        <span className="profilPage-info-label">{label}</span>{" "}
        {isEditing ? (
          <input
            type={isPassword ? (showPassword?"text":"password") : "text"}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className="profilPage-edit-input"
            autoFocus
          />
        ) : (
          <>
            {isPassword ? (
              <span className="profilPage-info-value">{showPassword?value:maskedPassword}</span>
            ) : (
              <span className="profilPage-info-value">{displayValue}</span>
            )}
          </>
        )}
      </div>


      {isPassword && (
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