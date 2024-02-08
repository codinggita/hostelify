import React from 'react'
import './css/Book.css';
import { useState} from 'react';
import axios from 'axios';

function BookNow() {
   // Initialize state for course data
   const [courseData, setCourseData] = useState({
    courseId: '',
    course: '',
    cohort: '',
    college: '',
    semester: '',
  });

  // Handle changes in input fields and update the state
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCourseData({ ...courseData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Send a POST request to add a new course using Axios
    axios.post('http://localhost:8000/courses', courseData)
      .then((response) => {
        // Successful response handling
        console.log('Course added successfully.');
        // You can redirect to another page or update the UI as needed here
      })
      .catch((error) => {
        // Error handling
        console.error('Error adding course:', error);
      });
  };

  return (
    <div>
        <div className="header-frame">
    <div className="header-frame-child" />
    <div className="header-frame-item" />
    <div className="header-frame-inner" />
    <div className="line-group" />
    <div className="line-group1" />
    <div className="line-group2" />
    <main className="f-r-a-m-e">
      <div className="f-r-a-m-e-child" />
      <section className="first-line">
        <div className="personal-details-frame">
          <div className="student-name">
            <div className="personal-details">Personal Details</div>
          </div>
          <img
            className="frame-g-icon"
            loading="eager"
            alt=""
            src="./public/line-2.svg"
          />
        </div>
        <div className="frame-group">
          <div className="father-info-frame">
            <div className="student-name1">Student Name</div>
            <div className="frame-with-two-rectangles">
              <input className="frame-with-two-rectangles-child" type="text" />
            </div>
            <input className="address-info-frame" type="text" />
          </div>
        </div>
        <div className="academic-frame">
          <div className="program-specialization-year-c">
            <div className="semester-frame">
              <div className="fathers-name">Father’s Name</div>
              <div className="contact-no">Contact No.</div>
              <div className="e-mail-id">E-mail id</div>
              <div className="gender">
                <p className="gender1">Gender</p>
              </div>
              <div className="address">
                <p className="address1">Address</p>
                <p className="blank-line">&nbsp;</p>
              </div>
            </div>
            <div className="student-name-frame">
              <div className="facilities-to-be-availed-frame">
                <input
                  className="facilities-to-be-availed-frame-child"
                  type="text"
                />
                <input className="personal-details-frame1" type="text" />
              </div>
              <input className="student-name-frame-child" type="text" />
              <input className="student-name-frame-item" type="text" />
              <input className="floor-and-hostel-number-frame" type="text" />
              <input className="student-name-frame-inner" type="text" />
            </div>
          </div>
        </div>
      </section>
      <div className="academic-details-wrapper">
        <div className="academic-details">Academic Details</div>
      </div>
      <section className="f-r-a-m-e-inner">
        <div className="frame-parent">
          <div className="frame-container">
            <div className="program-parent">
              <div className="program">Program</div>
              <div className="specialization">
                <p className="specialization1">Specialization</p>
                <p className="blank-line1">&nbsp;</p>
              </div>
              <div className="year">
                <p className="year1">Year</p>
                <p className="blank-line2">&nbsp;</p>
              </div>
              <div className="semester-parent">
                <div className="semester">
                  <p className="semester1">Semester</p>
                  <p className="blank-line3">&nbsp;</p>
                </div>
                <div className="semester2">
                  <p className="semester3">Semester</p>
                  <p className="blank-line4">&nbsp;</p>
                </div>
              </div>
              <div className="cgpa">
                <p className="cgpa1">CGPA</p>
                <p className="blank-line5">&nbsp;</p>
              </div>
            </div>
            <div className="componentframe-b-parent">
              <input className="componentframe-b" type="text" />
              <input className="componentframe-a" type="text" />
              <input className="componentframe-a1" type="text" />
              <input className="componentframe-a2" type="text" />
              <input className="componentframe-a3" type="text" />
            </div>
          </div>
          <div className="hostel-preferences-wrapper">
            <div className="hostel-preferences">Hostel Preferences</div>
          </div>
        </div>
      </section>
      <section className="frame-section">
        <div className="componentframe-c-parent">
          <div className="componentframe-c">
            <div className="component-1">
              <div className="personal-details-frame2">
                <div className="component-frame">
                  <div className="frame-name-contact-info">
                    <div className="hostel-no">
                      <p className="hostel-no1">Hostel No.</p>
                      <p className="blank-line6">&nbsp;</p>
                    </div>
                  </div>
                  <div className="floor">Floor</div>
                </div>
              </div>
              <div className="frame-gender-address">
                <input className="academic-details-frame" type="text" />
                <input className="academic-details-frame1" type="text" />
              </div>
            </div>
          </div>
          <div className="semester-frame1">
            <div className="facilities-to-be">Facilities to be availed</div>
            <img
              className="rectangle-semester-icon"
              loading="eager"
              alt=""
              src="./public/line-6.svg"
            />
          </div>
        </div>
      </section>
      <section className="facilities-frame">
        <div className="frame-hostel-preferences">
          <div className="component-hostel-no">
            <div className="mess">
              <p className="mess1">Mess</p>
              <p className="blank-line7">&nbsp;</p>
            </div>
            <div className="frame-mess-swimming-laundry-gy" />
          </div>
          <div className="component-hostel-no1">
            <div className="swimming">
              <p className="swimming1">Swimming</p>
              <p className="blank-line8">&nbsp;</p>
            </div>
            <div className="component-hostel-no-child" />
          </div>
          <div className="component-hostel-no2">
            <div className="laundry">
              <p className="laundry1">Laundry</p>
              <p className="blank-line9">&nbsp;</p>
            </div>
            <div className="component-hostel-no-item" />
          </div>
          <div className="component-hostel-no3">
            <div className="gym">
              <p className="gym1">Gym</p>
              <p className="blank-line10">&nbsp;</p>
            </div>
            <div className="rectangle-community-service-wrapper">
              <div className="rectangle-community-service" />
            </div>
          </div>
        </div>
      </section>
      <button className="submit-text">
        <div className="submit-text-child" />
        <div className="submit-book">Submit</div>
      </button>
    </main>
  </div>
    </div>
  )
}

export default BookNow





