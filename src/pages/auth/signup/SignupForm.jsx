import { useForm } from "react-hook-form";
import {Link, useNavigate } from "react-router-dom";
import "../auth.css";

export default function SignupForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const EyeIcon = () => <span>👁️</span>;

  const onSubmit = (data) => {
    console.log(data);
  };

  const handleSignInClick = () => {
  navigate("/auth/login");
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
        <label htmlFor="phone">Phone number</label>
        <div className="phone-input">
          <span>(+994)</span>
          <input
            type="tel"
            {...register("phoneNumber", {
              required: "Phone number is required",
              pattern: {
                value: /^[+0-9\s\-]{7,15}$/,
                message: "Please enter a valid phone number",
              },
            })}
            id="phone"
            placeholder="-- --- -- --"
          />
        </div>
        {errors.phoneNumber && (
          <p className="error-message"> {errors.phoneNumber.message}</p>
        )}
      </div>

      <div className="input-group">
        <label htmlFor="password-signup">Password*</label>
        <div className="password-wrapper">
          <input
            type="password"
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
          {errors.password && (
            <p className="error-message"> {errors.password.message}</p>
          )}
          <span className="password-icon">
            <EyeIcon />
          </span>
        </div>
      </div>

      <div className="input-group">
        <label htmlFor="confirm-password">Confirm password*</label>
        <div className="password-wrapper">
          <input
            type="password"
            {...register("confirmPassword", {
              required: "Please confirm your password",
            })}
            id="confirm-password"
            placeholder="Confirm password"
          />
          {errors.confirmPassword && (
            <p className="error-message"> {errors.confirmPassword.message}</p>
          )}
          <span className="password-icon">
            <EyeIcon />
          </span>
        </div>
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

      <button  type="submit" className="auth-button">
        Sign Up
      </button>
    </form>
  );
}
