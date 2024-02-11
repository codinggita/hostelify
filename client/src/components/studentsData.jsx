import React, { useState, useEffect } from "react";
import axios from "axios";

const StudentsData = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    // Fetch student data from the backend API
    axios.get("http://localhost:5000/hostel")
      .then((response) => {
        setStudents(response.data);
      })
      .catch((error) => {
        console.error("Error fetching student data:", error);
      });
  }, []);

  if (!students) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Student Details</h1>
      <ul>
        {students.map((Students) => (
          <li key={Students.id}>
            <strong>Reg No:</strong> {Students.Reg_No}
            <br />
            <strong>Name:</strong> {Students.Name}
            <br />
           
            <strong>Course:</strong> {Students.Course}
            <br />
            <strong>Hostel Alloted:</strong> {Students.Hostel_Alloted}
            <br />
            <br />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentsData;
