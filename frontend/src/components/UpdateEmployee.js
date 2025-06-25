import React, { useEffect, useState } from 'react';
import EmployeeService from '../services/EmployeeService';
import { useNavigate, useParams } from 'react-router-dom';

const UpdateEmployee = () => {
  const { id } = useParams(); // get the employee ID from the URL
  const navigate = useNavigate();

  const [employee, setEmployee] = useState({
    firstName: '',
    lastName: '',
    email: ''
  });

  useEffect(() => {
    EmployeeService.getEmployeeById(id)
      .then(res => {
        setEmployee(res.data);
      })
      .catch(err => {
        console.error("Failed to fetch employee", err);
      });
  }, [id]);

  const handleChange = (e) => {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };

  const updateEmployee = (e) => {
    e.preventDefault();
    EmployeeService.updateEmployee(id, employee).then(() => {
      navigate('/');
    }).catch(err => {
      console.error("Failed to update employee", err);
    });
  };

  return (
    <div className="container">
      <h2>Edit Employee</h2>
      <form onSubmit={updateEmployee}>
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
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default UpdateEmployee;
