import React from "react";
import { useNavigate } from "react-router-dom";
import './style/createaccount.css';


const CreateAccount = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Account created successfully!");
    navigate("/"); // Redirect to home or login page
  };

  return (
    <div className="create-account-container">
      <button className="back-button" onClick={() => navigate("/employee")}>← Back</button>
      <h2>Create Account</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input type="text" placeholder="Enter your name" required />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input type="email" placeholder="Enter your email" required />
        </div>

        <div className="form-group">
          <label>Phone</label>
          <input type="text" placeholder="Enter your phone number" required />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input type="password" placeholder="Enter your password" required />
        </div>

        <div className="form-group">
          <label>Confirm Password</label>
          <input type="password" placeholder="Confirm your password" required />
        </div>

        <button type="submit" className="btn-submit">Create Account</button>
      </form>
    </div>
  );
};

export default CreateAccount;
