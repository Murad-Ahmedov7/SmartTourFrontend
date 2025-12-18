import { useForm,Controller } from "react-hook-form";
import {Link, useNavigate } from "react-router-dom";
import "../auth.css";
import { useEffect, useState } from "react";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import baseApi from "../../../api/baseApi";

export const required = value => (value ? undefined : "Sehv");
export default function SignupForm() {
  const {register,handleSubmit,watch,formState: { errors,isValid },control}= useForm({ mode: "onChange" })

  const navigate = useNavigate();

  const [showPassword,setShowPassword]=useState(false);
  const [showConfirmPassword,setShowConfirmPassword]=useState(false);
  
  const password=watch("password")



  useEffect(()=>{
    baseApi.
  })

  const onSubmit = (data) => {
    console.log(data);
  };





  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1>Create an account</h1>
      <p className="switch-auth">
        Already have account? <Link to="/auth/login">Sign In</Link>
      </p>

      <div className="input-group">
        <label htmlFor="fullname">Full name</label>
        {
          <input
            type="text"
            {...register("fullname", {
              required: "Full name is required",
            })}
            id="fullname"
            placeholder="Enter your name"
          />
        }
        {errors.fullname && (
          <p className="error-message"> {errors.fullname.message}</p>
        )}
      </div>

      <div className="input-group">
        <label htmlFor="email-signup">Email</label>
        <input
          type="email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Invalid email format",
            },
          })}
          id="email-signup"
          placeholder="Enter your email"
        />
        {errors.email && (
          <p className="error-message"> {errors.email.message}</p>
        )}
      </div>

      <div className="input-group">
        <label >Phone number</label>
        <div className="phone-input">
          <span>(+994)</span>
            <input
            type="tel"
            {...register("phoneNumber", {
              required: "Phone number is required",
            })}
            id="phone"
            placeholder="-- --- -- --"
                onChange={(e) => {
        let val = e.target.value.replace(/\D/g, ""); // rəqəm olmayanları sil
        if (val.length > 9) val = val.slice(0, 9); // maksimum 9 rəqəm


        let formatted = "";
        if (val.length > 0) formatted = val.slice(0, 2);
        if (val.length > 2) formatted += "-" + val.slice(2, 5);
        if (val.length > 5) formatted += "-" + val.slice(5, 7);
        if (val.length > 7) formatted += "-" + val.slice(7, 9);

        e.target.value = formatted;
      }}
          /> 
        





        </div>
        {errors.phoneNumber && (
          <p className="error-message"> {errors.phoneNumber.message}</p>
        )}
      </div> 


      
      {/* <div className="input-group">
        <label >Phone number</label>
        <div className="phone-input">
          <span>(+994)</span>
<Controller
  name="phoneNumber"
  control={control}
  rules={{ required: "Phone number is required",    validate: (val) => {
      const numbersOnly = val.replace(/\D/g, "");
      return numbersOnly.length === 9 || "Phone number must be 9 digits";
    }}}
  render={({ field, fieldState }) => (
    <>
      <input
        {...field}
        type="text"
        placeholder="-- --- -- --"
        onChange={(e) => {
          let val = e.target.value.replace(/\D/g, "");
          if (val.length > 9) val = val.slice(0, 9);

          let formatted = "";
          if (val.length > 0) formatted = val.slice(0, 2);
          if (val.length > 2) formatted += "-" + val.slice(2, 5);
          if (val.length > 5) formatted += "-" + val.slice(5, 7);
          if (val.length > 7) formatted += "-" + val.slice(7, 9);

          field.onChange(formatted); // <--- burada react-hook-form üçün value təyin edirik
        }}
        value={field.value || ""}
      />
    
    </>
  )}
/>

        </div>
        {errors.phoneNumber && (
          <p className="error-message"> {errors.phoneNumber.message}</p>
        )}
      </div> */}

{/* commentde olan contoller ile olandir */}

      <div className="input-group">
        <label htmlFor="password-signup">Password*</label>
        <div className="password-wrapper">
          <input
            type={showPassword ?'text':'password'}
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 8,
                message: "Password must be at least 8 characters long",
              },
            })}
            id="password-signup"
            placeholder="Enter your password"
          />

          <span className="password-icon">
                {showPassword ? <FaRegEye onClick={()=>setShowPassword(false)} />:<FaRegEyeSlash onClick={()=>setShowPassword(true)} />}
          </span>
        </div>
                  {errors.password && (
            <p className="error-message"> {errors.password.message}</p>
          )}
      </div>

      <div className="input-group">
        <label htmlFor="confirm-password">Confirm password*</label>
        <div className="password-wrapper">
          <input
               type={showConfirmPassword ?'text':'password'}
            {...register("confirmPassword", {
              required: "Please confirm your password",
              validate:value=>value===password ||"Passwords do not match"
            })}
            id="confirm-password"
            placeholder="Confirm password"
          />

          <span className="password-icon">
             {showConfirmPassword ? <FaRegEye onClick={()=>setShowConfirmPassword(false)} />:<FaRegEyeSlash onClick={()=>setShowConfirmPassword(true)} />}
          </span>
        </div>
                  {errors.confirmPassword && (
            <p className="error-message"> {errors.confirmPassword.message}</p>
          )}  
      </div>

      <div className="checkbox-group agreement">
        <input type="checkbox" id="terms"  {...register("terms", { required: "You must accept the terms" })} />
        <label htmlFor="terms">
          I agree to the terms of service and privacy policy
        </label>        
      </div>
               {errors.terms && (
    <p className="error-message">{errors.terms.message}</p>
  )}

      <button  type="submit" disabled={!isValid}  className={ isValid ? "auth-button active" : "auth-button disabled"} >
        Sign Up
      </button>
    </form>
  );
}
