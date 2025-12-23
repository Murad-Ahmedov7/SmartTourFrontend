import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import "../auth.css";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import { useState } from "react";
import baseApi from "../../../api/baseApi";

export default function LoginForm() {
  
  const {register,handleSubmit,formState: { errors,isValid }} = useForm({ mode: "onChange" });

  const navigate = useNavigate();

  const [showPassword,setShowPassword]=useState(false);
  // const [token,setToken]=useState("")

  const onSubmit =  async (data) => {
   try {
     const res = await baseApi.post("/auth/login", data);
     console.log("Success:", res.data);
     localStorage.setItem("result" res.data)
     alert("Successfully Login");
     navigate("/customizeTour");
   } 
   catch (err) {
    if (err.response) {
  const status = err.response.status;
  const msg = err.response.data?.message || "Something went wrong";

    if (status === 401) alert(msg);          // Email/password səhv
    else if (status === 429) alert(msg);     // çox sayda cəhd
    else if (status === 500) alert(msg);     // server error
    else alert(msg);                         // digər statuslar

  } else if (err.request) {
    alert("Network error, check your connection");
  } else {
    alert("Error: " + err.message);
  }

//   err.response → server cavabı var yox?

// err.response.data → serverin göndərdiyi body

// err.response.data.message → backend-də yazdığın mesaj

// err.message → Axios/xəta obyektinin ümumi mesajı

console.error(err);
     };

     }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1>Login Now!</h1>
      <p>Welcome back! Please enter your details</p>

      <div className="input-group">
        <label htmlFor="email">Email</label>
        <input 
        type="email"
                  {...register("Email", {
            required: "Email is required",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Invalid email format",
            },
          })}
          
        
         id="email" placeholder="Enter your email" />
                 {errors.Email && (
          <p className="error-message"> {errors.Email.message}</p>
        )}
      </div>

      <div className="input-group">
        <label htmlFor="password">Password</label>
        <div className="password-wrapper">
          <input
             type={showPassword ?'text':'password'}
              {...register("Password", {
              required: "Password is required",
              minLength: {
                value: 8,
                message: "Password must be at least 8 characters long",
              },
            })}
            id="password"
            placeholder="Enter your password"
          />

          <span className="password-icon">
           {showPassword ? <FaRegEye onClick={()=>setShowPassword(false)} />:<FaRegEyeSlash onClick={()=>setShowPassword(true)} />}
          </span>
        </div>
                          {errors.Password && (
            <p className="error-message"> {errors.Password.message}</p>
          )}
      </div>

      <div className="form-options">
        <div className="checkbox-group">
          <input type="checkbox" id="remember" />
          <label htmlFor="remember">Remember me</label>
        </div>
        <Link to='/auth/login/forgotpassword' className="forgot-password">
          Forgot password?
        </Link>
      </div>

      <button disabled={!isValid}  className={ isValid ? "auth-button active" : "auth-button disabled"}>
        Log in
      </button>

      <div className="switch-auth">
        Don't have an account? <Link to="/auth/signup">Sign Up</Link>
      </div>

      <div className="divider">Or continue With</div>

      <div className="social-login">
        <button type="button" className="social-btn google">
          G Google
        </button>
        <button type="button" className="social-btn facebook">
          F
        </button>
        <button type="button" className="social-btn twitter">
          X
        </button>
      </div>
    </form>
  );


}