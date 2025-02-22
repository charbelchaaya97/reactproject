import React from 'react';
import '../style/ViewUser.css';

const ViewUser = ({ data, onBack }) => {
  return (
    <div className="view-user-container">
   
      <div className="card">
        <h2 className="card-title">Employee Details</h2>
        <div className="card-content">
          <table className="employee-table">
            <tbody>
              <tr>
                <td><strong>Name:</strong></td>
                <td>{data.name}</td>
              </tr>
              <tr>
                <td><strong>Email:</strong></td>
                <td>{data.email}</td>
              </tr>
              <tr>
                <td><strong>Phone:</strong></td>
                <td>{data.phone}</td>
              </tr>
              <tr>
                <td><strong>Job Title:</strong></td>
                <td>{data.job_title}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ViewUser;
