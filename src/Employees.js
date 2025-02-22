import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './style/style.css';
import ViewUser from './component/viewuser';
import EditUser from './component/EditUser';

const Employees = () => {
  const navigate = useNavigate();
  const [employees] = useState([
    { id: 1, name: "John Doe", email: "john@example.com", phone: "123-456-7890", job_title: "Software Engineer" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", phone: "987-654-3210", job_title: "HR Manager" },
    { id: 3, name: "Alice Johnson", email: "alice@example.com", phone: "555-666-7777", job_title: "Marketing Lead" },
    { id: 4, name: "Bob Brown", email: "bob@example.com", phone: "222-333-4444", job_title: "Product Manager" },
    { id: 5, name: "Tom White", email: "tom@example.com", phone: "555-444-3333", job_title: "Designer" },
    { id: 6, name: "Sara Green", email: "sara@example.com", phone: "666-777-8888", job_title: "Developer" },
  ]);

  const [viewEmployee, setViewEmployee] = useState(null);
  const [editemployee, setEditemployee] = useState(null);

  const [page, setPage] = useState(1);
  const itemsPerPage = 5;

  const handleViewUser = (employee) => {
    setViewEmployee(employee);
  };
  const handleEditemployee = (employee) => {
    setEditemployee(employee);
  };




  const handleBackToList = () => {
    setViewEmployee(null);
    setEditemployee(null);
  };

  const handleLogout = () => {
    navigate('/');
  };

  const paginatedEmployees = employees.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

  if (viewEmployee) {
    return (
      <div className="view-container">
        <button onClick={handleBackToList} className="btn-back">← Back to Employee List</button>
        <ViewUser data={viewEmployee} />

      </div>
    );
  }
  if (editemployee) {
    return (
      <div className="view-container">
        <button onClick={handleBackToList} className="btn-back">← Back to Employee List</button>
        <EditUser data={editemployee} />
      </div>
    );
  }

  return (
    <div className="container">
      <div className="div-logout">
        <button className="btn-logout" onClick={handleLogout}>Logout</button>
      </div>
      <h2 className="page-title">Employee List</h2>

      <table className="employee-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Job Title</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {paginatedEmployees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.name}</td>
              <td>{employee.email}</td>
              <td>{employee.phone}</td>
              <td>{employee.job_title}</td>
              <td>
                <button onClick={() => handleViewUser(employee)} className="btn-view">View</button>
                <button onClick={() => handleEditemployee(employee)} className="btn-edit">Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="pagination">
        <button onClick={() => setPage(page > 1 ? page - 1 : 1)}>Previous</button>
        <span>Page {page}</span>
        <button onClick={() => setPage(page < Math.ceil(employees.length / itemsPerPage) ? page + 1 : page)}>Next</button>
      </div>

      <div className="nav-buttons">
        <Link to="/createaccount">Add New Employee</Link>
        <Link to="/timesheets">View Timesheets</Link>
      </div>
    </div>
  );
};

export default Employees;
