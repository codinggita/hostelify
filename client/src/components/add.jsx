import React from 'react'
import { useEffect,useState } from 'react';
import axios from 'axios';
function add() {
  const [studentData, setStudentData] = useState({
      Name: "",
      DOB: "",
      Gender: "",
      Contact: 0,
      Address: "",
      Reg_No: "",
      Course: "",
      Batch: "",
      Hostel_Alloted: "",
      Room_No: "",
  });

  // Handle changes in input fields and update the state
  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudentData({ ...studentData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Send a POST request to add a new course using Axios
    axios.post('http://localhost:5000/hostel', studentData)
      .then((response) => {
        console.log(studentData);
        // Successful response handling
        console.log('Student added successfully.');
        // You can redirect to another page or update the UI as needed here
      })
      .catch((error) => {
        // Error handling
        console.error('Error adding student:', error);
      });
  };

  return (
    <div>
      <h1>Add Student</h1>
      <form onSubmit={handleSubmit}>
      <div>
  <label>Student Name:</label>
  <input
   className="credential sub"
    type="text"
    name="Name"
    value={studentData.Name}
    onChange={handleChange}
    placeholder="Name"
    required
  />
</div>
<div>
  <label>Date of Birth:</label>
  <input
    type="text"
    name="DOB"
    value={studentData.DOB}
    onChange={handleChange}
    required
  />
</div>
<div>
  <label>Gender:</label>
  <input
    type="text"
    name="Gender"
    value={studentData.Gender}
    onChange={handleChange}
    required
  />
</div>
<div>
  <label>Contact:</label>
  <input
    type="number"
    name="Contact"
    value={studentData.Contact}
    onChange={handleChange}
    required
  />
</div>
<div>
  <label>Address:</label>
  <input
    type="text"
    name="Address"
    value={studentData.Address}
    onChange={handleChange}
    required
  />
</div>
<div>
  <label>Registration Number:</label>
  <input
    type="text"
    name="Reg_No"
    value={studentData.Reg_No}
    onChange={handleChange}
    required
  />
</div>
<div>
  <label>Course:</label>
  <input
    type="text"
    name="Course"
    value={studentData.Course}
    onChange={handleChange}
    required
  />
</div>
<div>
  <label>Batch:</label>
  <input
    type="text"
    name="Batch"
    value={studentData.Batch}
    onChange={handleChange}
    required
  />
</div>
<div>
  <label>Hostel Alloted:</label>
  <input
    type="text"
    name="Hostel_Alloted"
    value={studentData.Hostel_Alloted}
    onChange={handleChange}
    required
  />
</div>
<div>
  <label>Room Number:</label>
  <input
    type="text"
    name="Room_No"
    value={studentData.Room_No}
    onChange={handleChange}
    required
  />
</div>

        <button type="submit">Add Student</button>
      </form>
    </div>
  );
}

export default add;