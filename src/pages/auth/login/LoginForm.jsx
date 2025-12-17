import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import "../auth.css";

export default function LoginForm() {
  
  const {register,handleSubmit,formState: { errors },} = useForm();

  const navigate = useNavigate();

  const EyeIcon = () => <span>👁️</span>;

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
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

