import React, { useState } from 'react';
import EmployeeService from '../services/EmployeeService';
import { useNavigate } from 'react-router-dom';

const AddEmployee = () => {
  const [employee, setEmployee] = useState({
    firstName: '',
    lastName: '',
    email: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };

  const saveEmployee = (e) => {
    e.preventDefault();
    EmployeeService.createEmployee(employee).then(() => {
      navigate('/');
    }).catch(err => {
      console.error("Failed to add employee", err);
    });
  };

  return (
    <div className="container">
      <h2>Add Employee</h2>
      <form onSubmit={saveEmployee}>
        <div>
          <label>First Name:</label>
          <input type="text" name="firstName" value={employee.firstName} onChange={handleChange} required />
        </div>
        <div>
          <label>Last Name:</label>
          <input type="text" name="lastName" value={employee.lastName} onChange={handleChange} required />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" name="email" value={employee.email} onChange={handleChange} required />
        </div>
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default AddEmployee;
