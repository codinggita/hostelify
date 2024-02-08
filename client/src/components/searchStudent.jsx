import React, { useState } from 'react';
import axios from 'axios';

function SearchStudent() {
  const [searchTerm, setSearchTerm] = useState('');
  const [student, setStudent] = useState(null);

  const handleSearch = () => {
    // Make an API request to fetch student details based on searchTerm
    axios.get(`http://localhost:5000/hostel/${searchTerm}`)
      .then((response) => {
        setStudent(response.data);
      })
      .catch((error) => {
        console.error('Error fetching student details:', error);
      });
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter student name"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      {student && (
        <div>
          <h1>Student Details</h1>
          <strong>Reg No:</strong> {student.Reg_No}<br />
          <strong>Name:</strong> {student.Name}<br />
          <strong>Gender:</strong> {student.Gender}<br />
          <strong>Contact:</strong> {student.Contact}<br />
          <strong>Date of birth:</strong> {student.DOB}<br />
          <strong>Address:</strong> {student.Address}<br />
          <strong>Course:</strong> {student.Course}<br />
          <strong>Batch:</strong> {student.Batch}<br />
          <strong>Hostel:</strong> {student.Hostel_Alloted}<br />
          <strong>Room No:</strong> {student.Room_No}<br />
        </div>
      )}
    </div>
  );
}

export default SearchStudent;
