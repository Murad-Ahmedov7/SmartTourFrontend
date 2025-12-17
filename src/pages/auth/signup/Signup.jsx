import { useForm } from "react-hook-form";
import logo from "../../../assets/logo.png";
import cityBg from "../../../assets/Şuşa_qalası.jpg";
import formBg from "../../../assets/agfon.png";
import SignupForm from "./SignupForm";
export default function Signup() {
  

  return (
    <div
      className="auth-container"
      style={{ backgroundImage: `url(${cityBg})` }}
    >
      <div className="auth-image-section">
        <div className="welcome-content">
          <h1>Welcome!</h1>
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
          <SignupForm/>
        </div>
      </div>
    </div>
  );
}
