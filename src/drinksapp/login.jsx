import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/login.css";

const Loginpage = () => {
  const [formData, setFormData] = useState({
    name: "",
    aadhaar: "",
    dob: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setError("");
  };

  const calculateAge = (dob) => {
    const today = new Date();
    const birthDate = new Date(dob);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  };

  const isValidAadhaar = (aadhaar) => {
    if (!/^\d{12}$/.test(aadhaar)) return false;
    const firstDigit = aadhaar[0];
    if (aadhaar.split("").every((digit) => digit === firstDigit)) return false;
    return true;
  };

  const isValidName = (name) => {
    return /^[a-zA-Z ]{3,}$/.test(name);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isValidName(formData.name)) {
      setError("Name must be at least 3 characters long and contain only letters.");
      return;
    }

    const age = calculateAge(formData.dob);
    if (age < 18) {
      setError("You must be at least 18 years old to login.");
      return;
    }

    if (!isValidAadhaar(formData.aadhaar)) {
      setError("Invalid Aadhaar number. Please enter a valid 12-digit Aadhaar number.");
      return;
    }

    navigate("/HomePage");
  };

  return (
    <div className="login-log">
      <div className="login-container">
        <form className="login-form" onSubmit={handleSubmit}>
          <h2>Login</h2>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <label htmlFor="aadhaar">Aadhaar Number</label>
          <input
            type="text"
            id="aadhaar"
            name="aadhaar"
            placeholder="Enter your Aadhaar number"
            maxLength="12"
            value={formData.aadhaar}
            onChange={handleChange}
            required
          />
          <label htmlFor="dob">Date of Birth</label>
          <input
            type="date"
            id="dob"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            required
          />
          {error && <p className="error">{error}</p>}
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Loginpage;
