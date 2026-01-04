import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import "../auth.css";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import { useState } from "react";
import baseApi from "../../../api/baseApi";


export default function ForgotPasswordForm() {

  const {register,handleSubmit,formState: { errors,isValid }} = useForm({ mode: "onChange" });

  const navigate = useNavigate();

  const [showNewPassword,setShowNewPassword]=useState(false);
  const [showConfirmPassword,setShowConfirmPassword]=useState(false);

  const onSubmit = async(data) => {
    try{

       const res=await baseApi.post('auth/forgot-password',{email:data.email})
       alert("If your email exists, a reset link has been sent.");
       resizeTo
    }

    catch(err){
      console.error(err)
      alert("Something went wrong.");
    }
     
  };



  return (
        <form onSubmit={handleSubmit(onSubmit)}>
      <h1>Forgot Password?</h1>
      <p> Just provide your email to recover your account.</p>

  
   <div className="input-group">
        <label htmlFor="email">Email</label>
        <input 
        type="email"
                  {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Invalid email format",
            },
          })}
          
        
         id="email" placeholder="Enter your email" />
                 {errors.email && (
          <p className="error-message"> {errors.email.message}</p>
        )}
      </div>

   

      {/* <div className="form-options">
        <div className="checkbox-group">
          <input type="checkbox" id="remember" />
          <label htmlFor="remember">Remember me</label>
        </div>
        <Link to='/auth/login/forgotPassword' className="forgot-password">
          Forgot password?
        </Link>
      </div> */}

      <button disabled={!isValid}  className={ isValid ? "auth-button active" : "auth-button disabled"}>
        Send Reset Link
      </button>

      {/* <div className="switch-auth">
        Don't have an account? <Link to="/auth/signup">Sign Up</Link>
      </div> */}

      {/* <div className="divider">Or continue With</div>

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
      </div> */}
    </form>
  )
}
