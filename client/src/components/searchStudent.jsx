import React, { useState, useEffect } from 'react';
import axios from 'axios';

function searchStudent() {
  const [student, setStudent] = useState([]);

  useEffect(() => {
    // Fetch details of the specific course from the backend
    axios.get('http://localhost:5000/students/:Name')
      .then((response) => {
        setStudent(response.data);
      })
      .catch((error) => {
        console.error(`Error fetching details for student:`, error);
      });
  }, []);

  if (!student) {
    return <div>Loading...</div>;
  }

  

  return (
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
  );
}

export default searchStudent;
