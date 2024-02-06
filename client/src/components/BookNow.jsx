import React, { useState } from 'react';
import './css/BookNow.css';

const StudentForm = () => {
  const [personalDetails, setPersonalDetails] = useState({
    studentName: '',
    fathersName: '',
    mobileNo: '',
    address: '',
    email: '',
  });

  const [academicDetails, setAcademicDetails] = useState({
    program: '',
    specialization: '',
    year: '',
    semester: '',
    cgpa: '',
  });

  const [hostelPreference, setHostelPreference] = useState({
    hostelNo: '',
    roomNo: '',
    block: '',
    facilities: {
      mess: false,
      laundry: false,
      gym: false,
    },
  });

  const handleChange = (section, field, value) => {
    switch (section) {
      case 'personalDetails':
        setPersonalDetails({
          ...personalDetails,
          [field]: value,
        });
        break;
      case 'academicDetails':
        setAcademicDetails({
          ...academicDetails,
          [field]: value,
        });
        break;
      case 'hostelPreference':
        setHostelPreference({
          ...hostelPreference,
          [field]: value,
        });
        break;
      default:
        break;
    }
  };

  return (
    <div className="student-form">
      <h2>Personal Details</h2>
      <div className="form-section">
        <label>Student Name:</label>
        <input
          type="text"
          value={personalDetails.studentName}
          onChange={(e) => handleChange('personalDetails', 'studentName', e.target.value)}
        />
      </div>
      <div className="form-section">
        <label>Father's Name:</label>
        <input
          type="text"
          value={personalDetails.fathersName}
          onChange={(e) => handleChange('personalDetails', 'fathersName', e.target.value)}
        />
      </div>
      <div className="form-section">
        <label>Mobile No:</label>
        <input
          type="text"
          value={personalDetails.mobileNo}
          onChange={(e) => handleChange('personalDetails', 'mobileNo', e.target.value)}
        />
      </div>
      <div className="form-section">
        <label>Address:</label>
        <textarea
          value={personalDetails.address}
          onChange={(e) => handleChange('personalDetails', 'address', e.target.value)}
        />
      </div>
      <div className="form-section">
        <label>Email ID:</label>
        <input
          type="text"
          value={personalDetails.email}
          onChange={(e) => handleChange('personalDetails', 'email', e.target.value)}
        />
      </div>


          {/* Academic Details */}
      <h2>Academic Details</h2>
      <div className="form-section">
        <label>Program Name:</label>
        <input
          type="text"
          value={academicDetails.program}
          onChange={(e) => handleChange('personalDetails', 'studentName', e.target.value)}
        />
      </div>
      <div className="form-section">
        <label>Father's Name:</label>
        <input
          type="text"
          value={personalDetails.fathersName}
          onChange={(e) => handleChange('personalDetails', 'fathersName', e.target.value)}
        />
      </div>
      <div className="form-section">
        <label>Mobile No:</label>
        <input
          type="text"
          value={personalDetails.mobileNo}
          onChange={(e) => handleChange('personalDetails', 'mobileNo', e.target.value)}
        />
      </div>
      <div className="form-section">
        <label>Address:</label>
        <textarea
          value={personalDetails.address}
          onChange={(e) => handleChange('personalDetails', 'address', e.target.value)}
        />
      </div>
      <div className="form-section">
        <label>Email ID:</label>
        <input
          type="text"
          value={personalDetails.email}
          onChange={(e) => handleChange('personalDetails', 'email', e.target.value)}
        />
      <h2>Hostel Preference</h2>
      {/* Hostel preference form sections similar to personal details */}
    </div>
    </div>
  );
  };

export default StudentForm;
