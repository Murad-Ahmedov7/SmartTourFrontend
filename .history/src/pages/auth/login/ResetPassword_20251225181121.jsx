import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";

export default function ResetPasswordPage
  const location = useLocation();
  const token = new URLSearchParams(location.search).get("token");

  const { register, handleSubmit, watch, formState: { errors, isValid } } = useForm({
    mode: "onChange"
  });

  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  if (!token) return <p>Invalid or missing token</p>;

  const onSubmit = async (data) => {
    setError("");
    setSuccess("");
    if (data.password !== data.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      setLoading(true);
      await axios.post("http://localhost:5000/api/auth/reset-password", {
        token,
        newPassword: data.password
      });
      setSuccess("Password reset successfully!");
    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="reset-password-page">
      <h1>Reset Password</h1>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {success && <p style={{ color: "green" }}>{success}</p>}

      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>New Password:</label>
          <input
            type="password"
            {...register("password", { required: "Password is required", minLength: { value: 6, message: "Minimum 6 characters" } })}
            placeholder="Enter new password"
          />
          {errors.password && <p style={{ color: "red" }}>{errors.password.message}</p>}
        </div>

        <div>
          <label>Confirm Password:</label>
          <input
            type="password"
            {...register("confirmPassword", { required: "Confirm your password" })}
            placeholder="Confirm new password"
          />
          {errors.confirmPassword && <p style={{ color: "red" }}>{errors.confirmPassword.message}</p>}
        </div>

        <button type="submit" disabled={!isValid || loading}>
          {loading ? "Resetting..." : "Reset Password"}
        </button>
      </form>
    </div>
  );
};

