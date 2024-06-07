import React, { useState } from 'react';
import '/Users/mohamedshanil/Desktop/innovature-frontend/task2/frontend/crud-app/src/AddEmployee.css'
const AddEmployee = ({ onAddEmployee }) => {
  const [name, setName] = useState('');
  const [position, setPosition] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const newEmployee = { name, position };
    onAddEmployee(newEmployee);
    setName('');
    setPosition('');
  };

  return (
    <div className='add-employee-container'>
      <h2>Add Employee</h2>
      <form onSubmit={handleSubmit} >
        <div className='input'>
          <label>Name:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className='input'>
          <label>Position:</label>
          <input type="text" value={position} onChange={(e) => setPosition(e.target.value)} />
        </div>
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default AddEmployee;
