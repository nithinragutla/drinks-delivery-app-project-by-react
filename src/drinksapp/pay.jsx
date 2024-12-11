import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/pay.css";

const PaymentPage = () => {
  const [overallTotal, setOverallTotal] = useState(0);

  const [formData, setFormData] = useState({
    street: "",
    phone: "",
    city: "",
    pin: "",
    paymentMethod: "cashOnDelivery",
  });

  const navigate = useNavigate();

  useEffect(() => {
    // Set overall total from localStorage when the component mounts
    const overall = JSON.parse(localStorage.getItem("overallTotal")) || 0;
    setOverallTotal(overall);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Validation for specific fields
    if (name === "street" || name === "city") {
      if (value.length > 4 && value.length < 4) {
        alert(`${name.charAt(0).toUpperCase() + name.slice(1)} must have at least 4 characters`);
        return;
      }
    }

    if (name === "phone") {
      if (!/^\d*$/.test(value)) {
        alert("Phone number must only contain numbers");
        return;
      }
      if (value.startsWith("0")) {
        alert("Phone number cannot start with zero");
        return;
      }
    }

    if (name === "pin") {
      if (!/^\d*$/.test(value)) {
        alert("Pin code must only contain numbers");
        return;
      }
      if (value.length > 6) {
        alert("Pin code must not exceed 6 digits");
        return;
      }
      if (/^(.)\1+$/.test(value)) {
        alert("Pin code cannot be all the same digit");
        return;
      }
    }

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Final validation checks
    if (formData.street.length < 4 || formData.city.length < 4) {
      alert("Street and City must have at least 4 characters");
      return;
    }
    if (formData.phone.length !== 10) {
      alert("Phone number must be exactly 10 digits");
      return;
    }
    if (formData.pin.length !== 6) {
      alert("Pin code must be exactly 6 digits");
      return;
    }

    alert(`Order placed successfully!\n${JSON.stringify(formData, null, 2)}`);

    // Reset form data and overall total
    setFormData({
      street: "",
      phone: "",
      city: "",
      pin: "",
      paymentMethod: "cashOnDelivery",
    });
    setOverallTotal(0);
  };

  return (
    <div className="pay">
    <div className="payment-container">
      <h1>Payment Page</h1>
      <form onSubmit={handleSubmit} className="payment-form">
        <div className="form-group">
          <label htmlFor="street">Street:</label>
          <input
            type="text"
            id="street"
            name="street"
            value={formData.street}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone Number:</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            maxLength="10"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="city">City:</label>
          <input
            type="text"
            id="city"
            name="city"
            value={formData.city}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="pin">Pin Code:</label>
          <input
            type="text"
            id="pin"
            name="pin"
            value={formData.pin}
            onChange={handleChange}
            maxLength="6"
            required
          />
        </div>
        <div className="form-group">
          <label>Payment Method:</label>
          <div className="radio-group">
            <input
              type="radio"
              id="cashOnDelivery"
              name="paymentMethod"
              value="cashOnDelivery"
              checked={formData.paymentMethod === "cashOnDelivery"}
              onChange={handleChange}
            />
            <label htmlFor="cashOnDelivery">Cash on Delivery</label>
          </div>
          <br />
          <p>Cart Total Amount : ₹{overallTotal}</p>
          
        </div>
        <button type="submit" className="submit-button">
          Submit
        </button>
        <button
          type="button"
          className="back-button"
          onClick={() => navigate("/HomePage")}
        >
          Back to Home
        </button>
      </form>
    </div>
    </div>
  );
};

export default PaymentPage;
