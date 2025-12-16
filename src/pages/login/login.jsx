import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import logo from "../../assets/logo.png";
import cityBg from "../../assets/Şuşa_qalası.jpg";
import formBg from "../../assets/agfon.png";

const EyeIcon = () => <span>👁️</span>;

const Login = () => {
  const [isLoginView, setIsLoginView] = useState(true);
  const navigate = useNavigate();
 
  const handleFormSubmit = (e) => {
    e.preventDefault();
    navigate("/customizeTour");
  };

  const switchToLogin = () => setIsLoginView(true);
  const switchToSignUp = () => setIsLoginView(false);

  return (
    <div
      className="auth-container"
      style={{ backgroundImage: `url(${cityBg})` }}
    >
      <div className="auth-image-section">
        <div className="welcome-content">
          <h1>{isLoginView ? "Welcome back!" : "Welcome!"}</h1>
          <p>
            Access your account to manage bookings and personalize your travel
            experience.
          </p>
        </div>
        <div className="auth-footer-links">
          <a href="#terms">Terms of Service</a>
          <a href="#privacy">Privacy Policy</a>
        </div>
      </div>

      <div
        className="auth-form-section"
        style={{
          opacity: 0.75,
          backgroundImage: `
    
      linear-gradient(rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.7)),
      url(${formBg})
    `,
        }}
      >
        <div className="form-wrapper">
          <img src={logo} alt="SmartTour Logo" className="auth-logo" />

          {isLoginView ? (
            <LoginForm
              onSubmit={handleFormSubmit}
              onSwitchToSignUp={switchToSignUp}
            />
          ) : (
            <SignUpForm
              onSubmit={handleFormSubmit}
              onSwitchToLogin={switchToLogin}
            />
          )}
        </div>
      </div>
    </div>
  );
};

const LoginForm = ({ onSubmit, onSwitchToSignUp }) => {
  return (
    <form onSubmit={onSubmit}>
      <h1>Login Now!</h1>
      <p>Welcome back! Please enter your details</p>

      <div className="input-group">
        <label htmlFor="email">Email</label>
        <input type="email" id="email" placeholder="Enter your email" />
      </div>

      <div className="input-group">
        <label htmlFor="password">Password</label>
        <div className="password-wrapper">
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
          />
          <span className="password-icon">
            <EyeIcon />
          </span>
        </div>
      </div>

      <div className="form-options">
        <div className="checkbox-group">
          <input type="checkbox" id="remember" />
          <label htmlFor="remember">Remember me</label>
        </div>
        <a href="#forgot" className="forgot-password">
          Forgot password?
        </a>
      </div>

      <button type="submit" className="auth-button">
        Log in
      </button>

      <div className="switch-auth">
        Don't have an account? <span onClick={onSwitchToSignUp}>Sign Up</span>
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
};

const SignUpForm = ({ onSubmit, onSwitchToLogin }) => {
  return (
    <form onSubmit={onSubmit}>
      <h1>Create an account</h1>
      <p className="switch-auth">
        Already have account? <span onClick={onSwitchToLogin}>Sign in</span>
      </p>

      <div className="input-group">
        <label htmlFor="fullname">Full name</label>
        <input type="text" id="fullname" placeholder="Enter your name" />
      </div>

      <div className="input-group">
        <label htmlFor="email-signup">Email</label>
        <input type="email" id="email-signup" placeholder="Enter your email" />
      </div>

      <div className="input-group">
        <label htmlFor="phone">Phone number</label>
        <div className="phone-input">
          <span>(+994)</span>
          <input type="tel" id="phone" placeholder="-- --- -- --" />
        </div>
      </div>

      <div className="input-group">
        <label htmlFor="password-signup">Password*</label>
        <div className="password-wrapper">
          <input
            type="password"
            id="password-signup"
            placeholder="Enter your password"
          />
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
            id="confirm-password"
            placeholder="Confirm password"
          />
          <span className="password-icon">
            <EyeIcon />
          </span>
        </div>
      </div>

      <div className="checkbox-group agreement">
        <input type="checkbox" id="terms" />
        <label htmlFor="terms">
          I agree to the terms of service and privacy policy
        </label>
      </div>

      <button type="submit" className="auth-button">
        Sign Up
      </button>
    </form>
  );
};

export default Login;
