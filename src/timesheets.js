import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import './style/timesheets.css';





const Timesheets = () => {
  const { id } = useParams(); // If present, we're editing an existing timesheet.
  const navigate = useNavigate();
  const isEditing = !!id; // True if editing.
 




  // Static employees data.
  const staticEmployees = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Smith' },
    { id: 3, name: 'Alice Johnson' },
    // Add more employees if needed.
  ];

  // Static timesheets data stored in local state.
  const [timesheets, setTimesheets] = useState([
    {
      id: 1,
      employeeId: 1,
      startTime: '2023-01-01T08:00',
      endTime: '2023-01-01T17:00',
      summary: 'Worked on project A',
    },
    // You can add more static timesheets here.
  ]);

  // Form state for creating/updating a timesheet.
  const [formData, setFormData] = useState({
    employeeId: '',
    startTime: '',
    endTime: '',
    summary: '',
  });

  // If editing, load the timesheet data into the form.
  useEffect(() => {
    if (isEditing) {
      const ts = timesheets.find((t) => t.id === parseInt(id, 10));
      if (ts) {
        setFormData({
          employeeId: ts.employeeId,
          startTime: ts.startTime,
          endTime: ts.endTime,
          summary: ts.summary,
        });
      }
    }
  }, [id, isEditing, timesheets]);

  // Handle input changes.
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Validate that start time is before end time.
  const validateTimes = () => {
    return new Date(formData.startTime) < new Date(formData.endTime);
  };

  // Handle form submission.
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateTimes()) {
      alert('Start time must be before end time.');
      return;
    }

    if (isEditing) {
      // Update existing timesheet.
      setTimesheets((prev) =>
        prev.map((t) =>
          t.id === parseInt(id, 10) ? { ...t, ...formData } : t
        )
      );
    } else {
      // Create a new timesheet; generate a new id.
      const newId = timesheets.length > 0 ? timesheets[timesheets.length - 1].id + 1 : 1;
      setTimesheets((prev) => [...prev, { id: newId, ...formData }]);
    }

    navigate('/timesheets'); // Redirect to the timesheets list.
  };

  return (
    <div className="timesheets-container">
      <h2>{isEditing ? 'Edit Timesheet' : 'Create Timesheet'}</h2>
      <form onSubmit={handleSubmit} className="timesheets-form">
        {/* Employee Dropdown */}
        <label htmlFor="employeeId">Employee:</label>
        <select
          id="employeeId"
          name="employeeId"
          value={formData.employeeId}
          onChange={handleChange}
          required
        >
          <option value="">Select Employee</option>
          {staticEmployees.map((emp) => (
            <option key={emp.id} value={emp.id}>
              {emp.name}
            </option>
          ))}
          
        </select>

        {/* Start Time Field */}
        <label htmlFor="startTime">Start Time:</label>
        <input
          type="datetime-local"
          id="startTime"
          name="startTime"
          value={formData.startTime}
          onChange={handleChange}
          required
        />

        {/* End Time Field */}
        <label htmlFor="endTime">End Time:</label>
        <input
          type="datetime-local"
          id="endTime"
          name="endTime"
          value={formData.endTime}
          onChange={handleChange}
          required
        />

        {/* Summary Field */}
        <label htmlFor="summary">Summary:</label>
        <input
          type="text"
          id="summary"
          name="summary"
          value={formData.summary}
          onChange={handleChange}
          placeholder="Describe the work done..."
          required
        />

        {/* Submit Button */}
        <button type="submit">
          {isEditing ? 'Update Timesheet' : 'Create Timesheet'}
        </button>
      </form>

      {/* Navigation Buttons */}
      <div className="nav-buttons">
        <button onClick={() => navigate('/employee')}>
          Go to Employee List
        </button>
        <button onClick={() => navigate('/timesheets')}>
          Go to Timesheets List
        </button>
        <button
          onClick={() => {
            if (formData.employeeId) {
              navigate(`/employee/${formData.employeeId}`);
            } else {
              alert('Please select an employee first.');
            }
          }}
        >
          Go to Employee Details
        </button>
       
      </div>
    </div>
  );
};

export default Timesheets;
