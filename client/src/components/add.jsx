import React from 'react'
import { useEffect,useState } from 'react';
import axios from 'axios';
import './css/login.css';

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
    <div className='Nam'>
      <label className='label'>Student Name:</label>
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
<div className='Nam'>
  <label>Date of Birth:</label>
  <input
  className="credential sub"
  placeholder="Enter DOB"
    type="date"
    name="DOB"
    value={studentData.DOB}
    onChange={handleChange}
    required
  />
</div>
<div className='Nam'>
  <label>Gender:</label>
  <input
  className="credential sub"
  placeholder="Select Gender"
    type="text"
    name="Gender"
    value={studentData.Gender}
    onChange={handleChange}
    required
  />
</div>
<div className='Nam'>
  <label>Contact:</label>
  <input
  className="credential sub"
  placeholder="Enter Mob. No."
    type="number"
    name="Contact"
    value={studentData.Contact}
    onChange={handleChange}
    required
  />
</div>
<div className='Nam'>
  <label>Address:</label>
  <input
  className="credential sub"
  placeholder="Enter address"
    type="text"
    name="Address"
    value={studentData.Address}
    onChange={handleChange}
    required
  />
</div>
<div className='Nam'>
  <label>Registration Number:</label>
  <input
  className="credential sub"
  placeholder="Enter Reg. No."
    type="number"
    name="Reg_No"
    value={studentData.Reg_No}
    onChange={handleChange}
    required
  />
</div>
<div className='Nam'>
  <label>Course:</label>
  <input
  className="credential sub"
  placeholder="Enter Course"
    type="text"
    name="Course"
    value={studentData.Course}
    onChange={handleChange}
    required
  />
</div>
<div className='Nam'>
  Batch:
  <input
  className="credential sub"
  placeholder="Enter Batch"
    type="text"
    name="Batch"
    value={studentData.Batch}
    onChange={handleChange}
    required
  />
</div>
<div className='Nam'>
  <label>Hostel Alloted:</label>
  <input
  className="credential sub"
  placeholder="Hostel to be Alloted"
    type="text"
    name="Hostel_Alloted"
    value={studentData.Hostel_Alloted}
    onChange={handleChange}
    required
  />
</div>
<div className='Nam'>
  <label>Room Number:</label>
  <input
  className="credential sub"
  placeholder="Enter Room. NO."
    type="text"
    name="Room_No"
    value={studentData.Room_No}
    onChange={handleChange}
    required
  />
</div>

        <button className="submit" type="submit">Add Student</button>
      </form>
    </div>
  );
}

export default add;