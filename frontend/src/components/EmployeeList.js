import React, { useEffect, useState } from 'react';
import EmployeeService from '../services/EmployeeService';
import { useNavigate } from 'react-router-dom';

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);
  const navigate = useNavigate();
  const handleDelete = (id) => {
  if (window.confirm("Are you sure you want to delete this employee?")) {
    EmployeeService.deleteEmployee(id)
      .then(() => {
        // remove deleted employee from list
        setEmployees(employees.filter(emp => emp.id !== id));
      })
      .catch(err => {
        console.error("Failed to delete employee", err);
      });
  }
};


  useEffect(() => {
    EmployeeService.getEmployees()
      .then(res => {
        setEmployees(res.data);
      })
      .catch(err => {
        console.error("Error fetching employees:", err);
      });
  }, []);

  return (
    <div className="container">
      <h2>Employee List</h2>

      {/* 🔹 Add Employee Button */}

        <div style={{ margin: '20px 0' }}>
            <button onClick={() => navigate('/add')}>Add Employee</button>
        </div>

    <pre>{JSON.stringify(employees, null, 2)}</pre>

      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
  <tbody>
  {employees.map(emp => (
    <tr key={emp.id}>
      <td>{emp.id}</td>
      <td>{emp.firstName}</td>
      <td>{emp.lastName}</td>
      <td>{emp.email}</td>
      <td>
        <button onClick={() => navigate(`/edit/${emp.id}`)}>Edit</button>
        &nbsp;
        <button onClick={() => handleDelete(emp.id)}>Delete</button>
      </td>
    </tr>
  ))}
</tbody>

</tbody>

      </table>
    </div>
  );
};

export default EmployeeList;
