import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../style/style.css';



const EditUser = ({ data, onBack }) => {
 
  const navigate = useNavigate();
  if (!data) {
    return <h2 className="error-message">No employee data found.</h2>;
  }
  
  const handleSave = () => {
    
    navigate('/employee'); // Redirect back to the employee list
  };
  return (
    <div className="edit-container">
  
      <h2>Edit Employee</h2>
      <form className="edit-form">
        <label>Name:</label>
        <input type="text" name="name" value={data.name}  required />

        <label>Email:</label>
        <input type="email" name="email" value={data.email}  required />

        <label>Phone:</label>
        <input type="tel" name="phone" value={data.phone}  required />

        <label>Job Title:</label>
        <input type="text" name="job_title" value={data.job_title}  required />

        <button type="button" onClick={handleSave} className="btn-save">Save Changes</button>
      </form>
    </div>
  );
};

export default EditUser;