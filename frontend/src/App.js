import React from 'react';
import UpdateEmployee from './components/UpdateEmployee';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EmployeeList from './components/EmployeeList';
import AddEmployee from './components/AddEmployee';

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Employee Management</h1>
        <Routes>
          <Route path="/" element={<EmployeeList />} />
          <Route path="/add" element={<AddEmployee />} />
          <Route path="/edit/:id" element={<UpdateEmployee />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
