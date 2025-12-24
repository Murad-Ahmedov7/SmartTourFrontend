  import { useEffect, useState } from "react";
  import { SlPencil } from "react-icons/sl";

  export default function EditableField({label,initialValue,isPassword = false,onSave}) {
    const [isEditing, setIsEditing] = useState(false);
    const [value, setValue] = useState(initialValue);
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

    const displayValue = value || (label === "Phone number" ? "+994xxxxxxxxx" : "Not provided");

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


    let hiddenpassword=''
    let 


    +='••••••••'


    return (
      <div className="profilPage-info-row">
        <div className="profilPage-label-value-wrapper">
          <span className="profilPage-info-label">{label}</span>{" "}
          {isEditing ? (
            <input
              type={isPassword ? "password" : "text"}
              // type="text"
              // value={isPassword ? "••••••••" : value}
              value={value}
              onChange={(e) =>
                setValue(e.target.value)
              } 
              className="profilPage-edit-input"
              autoFocus
            />
          ) : (
      <>
        {isPassword ? (
            <span className="profilPage-info-value">{value.length}</span>
        ) : (
          <span className="profilPage-info-value">{displayValue}</span>
        )}
      </>
           
          )}
        </div>
        <button
          className={`profilPage-action-button ${
            isEditing ? "save" : buttonText.toLowerCase()
          }`}
          onClick={handleEditClick}
        >
          {isEditing ? (
            "Save"
          ) : buttonText === "Edit" ? (
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
