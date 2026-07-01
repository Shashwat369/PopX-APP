import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./signup.css";

const Signup = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    password: "",
    company: "",
    agency: "yes",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSignup = () => {
    if (
      !formData.fullName ||
      !formData.phone ||
      !formData.email ||
      !formData.password
    ) {
      alert("Please fill all required fields");
      return;
    }

    navigate("/profile-settings", {
      state: formData,
    });
  };

  return (
    <div className="signup-content">
      <h1 className="signup-title">
        Create your <br />
        PopX account
      </h1>

      <div className="signup-form">

        <div className="signup-field">
          <label className="signup-label">
            Full Name<span className="required">*</span>
          </label>

          <input
            className="signup-input"
            type="text"
            name="fullName"
            placeholder="Marry Doe"
            value={formData.fullName}
            onChange={handleChange}
          />
        </div>

        <div className="signup-field">
          <label className="signup-label">
            Phone Number<span className="required">*</span>
          </label>

          <input
            className="signup-input"
            type="tel"
            name="phone"
            placeholder="Marry Doe"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>

        <div className="signup-field">
          <label className="signup-label">
            Email Address<span className="required">*</span>
          </label>

          <input
            className="signup-input"
            type="email"
            name="email"
            placeholder="Marry Doe"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div className="signup-field">
          <label className="signup-label">
            Password<span className="required">*</span>
          </label>

          <input
            className="signup-input"
            type="password"
            name="password"
            placeholder="Marry Doe"
            value={formData.password}
            onChange={handleChange}
          />
        </div>

        <div className="signup-field">
          <label className="signup-label">
            Company Name
          </label>

          <input
            className="signup-input"
            type="text"
            name="company"
            placeholder="Marry Doe"
            value={formData.company}
            onChange={handleChange}
          />
        </div>

        <div className="agency-section">
          <p className="agency-title">
            Are you an Agency?<span className="required">*</span>
          </p>

          <div className="agency-options">
            <label className="agency-option">
              <input
                type="radio"
                name="agency"
                value="yes"
                checked={formData.agency === "yes"}
                onChange={handleChange}
              />
              <span>Yes</span>
            </label>

            <label className="agency-option">
              <input
                type="radio"
                name="agency"
                value="no"
                checked={formData.agency === "no"}
                onChange={handleChange}
              />
              <span>No</span>
            </label>
          </div>
        </div>

        <button
          className="signup-button"
          type="button"
          onClick={handleSignup}
        >
          Create Account
        </button>
      </div>
    </div>
  );
};

export default Signup;
