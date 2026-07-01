import React from "react";
import { useNavigate } from "react-router-dom";
import "./landingPage.css";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="landing-content">

      <div className="hero-space"></div>

      <div className="content-section">
        <h1 className="main-heading">
          Welcome to PopX
        </h1>

        <p className="sub-heading">
          Lorem ipsum dolor sit amet,
          consectetur adipiscing elit.
        </p>

        <div className="btn">
          <button
            className="create-btn"
            onClick={() => navigate("/signup")}
          >
            Create Account
          </button>

          <button
            className="login-btn"
            onClick={() => navigate("/login")}
          >
            Already Registered? Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;