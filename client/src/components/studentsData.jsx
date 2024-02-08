import React, { useState, useEffect } from "react";
import axios from "axios";

const StudentsData = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    // Fetch student data from the backend API
    axios.get("http://localhost:5000/students")
      .then((response) => {
        setStudents(response.data);
      })
      .catch((error) => {
        console.error("Error fetching student data:", error);
      });
  }, []);

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
            {/* <strong>DOB:</strong> {student.DOB}
            <br />
            <strong>Gender:</strong> {student.Gender}
            <br />
            <strong>Contact:</strong> {student.Contact}
            <br />
            <strong>Address:</strong> {student.Address}
            <br /> */}
           
            <strong>Course:</strong> {student.Course}
            <br />
            <strong>Batch:</strong> {student.Batch}
            <br />
            <strong>Hostel Alloted:</strong> {student.Hostel_Alloted}
            <br />
            <strong>Room No:</strong> {student.Room_No}
            <br />
            <br />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentsData;
