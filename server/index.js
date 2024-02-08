const express = require("express");
const cors = require("cors");
const app = express();

// Middleware to parse JSON body in requests
app.use(express.json());
app.use(cors());

const PORT = 5000;

let hostel=
{
  Students :
  [
   {
    id:1,
     Name : "Sumit",
     DOB : "June 19, 2003",
     Gender : "M",
     Contact : 7073722268,
     Address : "Ward no. 5 Loharu - Haryana",
     Reg_No : "12115166",
     Course : "B.Tech CSE",
     Batch : "2021-2025",
     Hostel_Alloted : "BH1",
     Room_No : "B518"
   },
   {
    id:2,
    Name: "Amit",
    DOB: "March 15, 2002",
    Gender: "M",
    Contact: 7890123456,
    Address: "XYZ Street, City - State",
    Reg_No: "12115167",
    Course: "B.Tech ECE",
    Batch: "2021-2025",
    Hostel_Alloted: "BH2",
    Room_No: "C202"
  }
  ,
   {
    id:3,
    Name: "Raj",
    DOB: "November 3, 2002",
    Gender: "M",
    Contact: 9876543211,
    Address: "QRS Avenue, City Heights - State",
    Reg_No: "12115172",
    Course: "BBA",
    Batch: "2020-2023",
    Hostel_Alloted: "BH1",
    Room_No: "C102"
  },
  {
    id:4,
    Name: "Neha",
    DOB: "April 17, 2001",
    Gender: "F",
    Contact: 7654321091,
    Address: "XYZ Lane, Green Valley - State",
    Reg_No: "12115173",
    Course: "M.Sc. Physics",
    Batch: "2018-2020",
    Hostel_Alloted: "GH2",
    Room_No: "B401"
  },
  {
    id:5,
    Name: "Priya",
    DOB: "September 22, 2004",
    Gender: "F",
    Contact: 9876543210,
    Address: "ABC Road, Another City - State",
    Reg_No: "12115168",
    Course: "B.Com",
    Batch: "2022-2025",
    Hostel_Alloted: "GH1",
    Room_No: "A101"
  }  ,
  {
    id:6,
    Name: "Kavita",
    DOB: "July 5, 2003",
    Gender: "F",
    Contact: 7654321098,
    Address: "LMN Colony, Different City - State",
    Reg_No: "12115170",
    Course: "B.A. English",
    Batch: "2021-2024",
    Hostel_Alloted: "GH2",
    Room_No: "B301"
  },
  {
    id:7,
    Name: "Sara",
    DOB: "January 8, 2000",
    Gender: "F",
    Contact: 8765432101,
    Address: "LMN Street, New Town - State",
    Reg_No: "12115171",
    Course: "B.Sc. Chemistry",
    Batch: "2019-2022",
    Hostel_Alloted: "GH1",
    Room_No: "A205"
  }      
  ],
};

app.get("/hostel", (req,res) =>{
  res.json(hostel.Students);
})

app.get("/hostel/:Name", (req, res) => {
  const students = hostel.Students.find((c) => c.Name === req.params.Name);
  if (!students) {
    res.status(404).send("Student not found");
  } else {
    res.json(students);
  }
});

// POST - Add a new Student
app.post("/hostel", (req, res) => {
  hostel.Students.push(req.body);
  res.send("Student added");
});


// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});