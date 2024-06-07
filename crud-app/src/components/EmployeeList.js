import React from 'react';
import '/Users/mohamedshanil/Desktop/innovature-frontend/task2/frontend/crud-app/src/EmployeeList.css'

const EmployeeList = ({ employees, onDeleteEmployee }) => {
  return (
    <div className='emp-container'>
      <div className='title-container'>
      <h2>Employee List</h2>
      </div>
      <div className='list-container'>
      <ul className='employee-list'>
        {employees.map(employee => (
          <li key={employee.id}>
            {employee.id}: {employee.name} - {employee.position}
            <button onClick={() => onDeleteEmployee(employee.id)}>Delete</button>
          </li>
        ))}
      </ul>
      </div>
    </div>
  );
};

export default EmployeeList;
