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
        {students.map((student) => (
          <li key={student.id}>
            <strong>Reg No:</strong> {student.Reg_No}
            <br />
            <strong>Name:</strong> {student.Name}
            <br />
           
            <strong>Course:</strong> {student.Course}
            <br />
            <strong>Hostel Alloted:</strong> {student.Hostel_Alloted}
            <br />
            <br />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentsData;
