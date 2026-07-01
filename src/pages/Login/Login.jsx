import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
    ) {
      newErrors.email = "Invalid email address";
    }

    if (!formData.password.trim()) {
      newErrors.password = "Password is required";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      navigate("/profile-settings", {
        state: {
          fullName: "Marry Doe",
          email: formData.email,
        },
      });
    }
  };
  return (
    <div className="login-content">
      <h1 className="login-title">
        Signin to your <br />
        PopX account
      </h1>

      <p className="login-description">
        Lorem ipsum dolor sit amet,
        <br />
        consectetur adipiscing elit.
      </p>

      <form className="login-form" onSubmit={handleSubmit}>
        <div className="login-field">
          <label className="login-label" htmlFor="email">
            Email Address
          </label>

          <input
            id="email"
            name="email"
            className="login-input"
            type="email"
            placeholder="Enter email address"
            value={formData.email}
            onChange={handleChange}
          />

          {errors.email && <small className="error">{errors.email}</small>}
        </div>

        <div className="login-field">
          <label className="login-label" htmlFor="password">
            Password
          </label>

          <input
            id="password"
            name="password"
            className="login-input"
            type="password"
            placeholder="Enter password"
            value={formData.password}
            onChange={handleChange}
          />

          {errors.password && (
            <small className="error">{errors.password}</small>
          )}
        </div>

        <button type="submit" className="login-button">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
