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
  
   const validPassword=localStorage.getItem("password")
  
  const [CurrentPassword,setCurrentPassword]=useState();

  const [NewPassword,setNewPassword]=useState('');

  const toggleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  const validToken=localStorage.getItem("result");


  //  useEffect(()=>{

  //   if(validToken){
  //    console.log(validToken)

  //   }

  //   if(!validToken){
  //   console.log('token not found')
  //   return
  //   }
  //  },[])


  // const changePassword=async()=>{
  //   console.log(CurrentPassword)
  //   console.log(NewPassword)

  //    const res=baseApi.post('/auth/change-password',
  //   { CurrentPassword, NewPassword }, // data object
  //   { headers: { Authorization: `Bearer ${validToken}` } });  // config

  //   console.log(res.data)

  //   // localStorage.setItem("password",res.data.password) 
  // }


  const changePassword = async () => {
  try {
    console.log("CurrentPassword:", CurrentPassword);
    console.log("NewPassword:", NewPassword);

    const res = await baseApi.post(
      "/auth/change-password",
      { currentPassword: CurrentPassword, newPassword: NewPassword }, // camelCase olmalıdır
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



  // useEffect(()=>{
  //   if(label==='Password'){
  //     setCurrentPassword(value)
  //      if(currentPassword){
  //       setNewPassword(value)
        
  //      }
  //   }

  //   // if(validToken){}

  //   // setCurrentPassword(newPassword);
  //   // setNewPassword("")

  // },[])

  
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
const maskedPassword = maskChar.repeat(CurrentPassword.length); // Maskalanmış password
  return (
    <div className="profilPage-info-row">
      <div className="profilPage-label-value-wrapper">
        <span className="profilPage-info-label">{label}</span>{" "}
        {isEditing ? (
          <input
            type={isPassword ? (showPassword?"text":"password") : "text"}
            value={NewPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className="profilPage-edit-input"
            autoFocus
          />
        ) : (
          <>
            {isPassword ? (
              // <span className="profilPage-info-value">{showPassword?value:maskedPassword}</span>
              <span className="profilPage-info-value">{showPassword?(CurrentPassword):maskedPassword}</span>
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