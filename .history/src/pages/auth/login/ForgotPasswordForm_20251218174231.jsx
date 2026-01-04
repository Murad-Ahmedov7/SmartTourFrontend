import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import "../auth.css";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import { useState } from "react";


export default function ForgotPasswordForm() {

  const {register,handleSubmit,formState: { errors,isValid }} = useForm({ mode: "onChange" });

  const navigate = useNavigate();

  const [showNewPassword,setShowNewPassword]=useState(false);
  const [showConfirmPassword,setShowConfirmPassword]=useState(false);

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
        <form onSubmit={handleSubmit(onSubmit)}>
      <h1>Forgot Password?</h1>
      <p> Just provide your details to recover your account.</p>

  
      <div className="input-group">
        <label htmlFor="password">New Password*</label>
        <div className="password-wrapper">
          <input
             type={showNewPassword ?'text':'password'}
              {...register("newPassword", {
              required: "Password is required",
              minLength: {
                value: 8,
                message: "Password must be at least 8 characters long",
              },
            })}
            id="newPassword"
            placeholder="Enter  new password"
          />

          <span className="password-icon">
           {showNewPassword ? <FaRegEye onClick={()=>setShowNewPassword(false)} />:<FaRegEyeSlash onClick={()=>setShowNewPassword(true)} />}
          </span>
        </div>
                          {errors.newPassword && (
            <p className="error-message"> {errors.newPassword.message}</p>
          )}
      </div>

        <div className="input-group">
        <label htmlFor="password">Confirm Password*</label>
        <div className="password-wrapper">
          <input
             type={showConfirmPassword ?'text':'password'}
              {...register("confirmPassword", {
              required: "Password is required",
              minLength: {
                value: 8,
                message: "Password must be at least 8 characters long",
              },
            })}
            id="password"
            placeholder="Confirm  password"
          />

          <span className="password-icon">
           {showConfirmPassword ? <FaRegEye onClick={()=>setShowConfirmPassword(false)} />:<FaRegEyeSlash onClick={()=>setShowConfirmPassword(true)} />}
          </span>
        </div>
                          {errors.confirmPassword && (
            <p className="error-message"> {errors.confirmPassword.message}</p>
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
        Log in
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
