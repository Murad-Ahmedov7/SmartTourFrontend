  import { useState } from "react";
  import { SlPencil } from "react-icons/sl";

  export default function EditableField({label,initialValue,isPassword = false,onSave}) {
    const [isEditing, setIsEditing] = useState(false);
    const [value, setValue] = useState(initialValue);


    if(label="Password"')

    const [password,setPassword]=useState(initialValue);
    console.log(value)

    // const ValidToken=localStorage.getItem("result");
    // const ValidPassword=localStorage.getItem("password");

    // useEffect(()=>{

    // if (ValidToken) {
    //   console.log(" token var")

    // } else {
    //   console.log("token yoxdur")
    // }
    // },[])

    const displayValue = isPassword
      ? "••••••••"
      : value || (label === "Phone number" ? "+994xxxxxxxxx" : "Not provided");

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

    return (
      <div className="profilPage-info-row">
        <div className="profilPage-label-value-wrapper">
          <span className="profilPage-info-label">{label}</span>{" "}
          {isEditing ? (
            <input
              // type={isPassword ? "password" : "text"}
              type="text"
              // value={isPassword ? "••••••••" : value}
              value={value}
              onChange={(e) =>
                setValue(e.target.value === "••••••••" ? value : e.target.value)
              }
              className="profilPage-edit-input"
              autoFocus
            />
          ) : (
            <span className="profilPage-info-value">{displayValue}</span>
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
