import express from "express";
const app=express();
const port=5000;

app.use(express.json());


let hostel=
{
  Students :
  [
   {
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
  Admins :
  [
    {
      Name : "Paramjot Singh",
      Gender : "M",
      Contact : 9876543210,
      Staff_id : 45678,
      Position : "Head Wardon",
      Residential_Address : "Ward no. 13, Near Bus Stand Ludhiana",
      Date_joined : "December 20, 2005",
      Age : 38,
      Hostel : "BH1",
      Room_staying : "C102"
    },
    {
      Name: "Rajesh Kumar",
      Gender: "M",
      Contact: 7890123456,
      Staff_id: 56789,
      Position: "Assistant Warden",
      Residential_Address: "Block A, Green Park Society, Pune",
      Date_joined: "June 10, 2012",
      Age: 42,
      Hostel: "BH2",
      Room_staying: "B301"
    },
    {
      Name: "Manish Chauhan",
      Gender: "M",
      Contact: 9876543211,
      Staff_id: 89012,
      Position: "Assistant Warden",
      Residential_Address: "Sector 22, Chandigarh",
      Date_joined: "April 3, 2017",
      Age: 38,
      Hostel: "BH3",
      Room_staying: "D301"
    },
    {
      Name: "Deepa Sharma",
      Gender: "F",
      Contact: 8765432109,
      Staff_id: 67890,
      Position: "Warden",
      Residential_Address: "Lane 5, Model Town, Jaipur",
      Date_joined: "February 5, 2018",
      Age: 35,
      Hostel: "GH1",
      Room_staying: "A205"
    },
    {
      Name: "Kiran Verma",
      Gender: "F",
      Contact: 7654321098,
      Staff_id: 78901,
      Position: "Deputy Warden",
      Residential_Address: "Hill View Apartments, Bangalore",
      Date_joined: "September 15, 2015",
      Age: 40,
      Hostel: "GH2",
      Room_staying: "B401"
    }                
  ]
};

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

// GET details of all students and wardons
app.get('/hostel', (req, res) => {
  res.json(hostel);
});

// GET details of all studetns
app.get('/hostel/students', (req, res) => {
  res.json(hostel.Students);
});

// GET details of all Admins
app.get('/hostel/admins', (req, res) => {
  res.json(hostel.Admins);
});

// GET details of Specific person by name
app.get('/hostels/:Name', (req, res) => {
  const name=req.params.Name;
  const admin=hostel.Admins.find((c)=>c.Name===name);
  const student= hostel.Students.find((c)=>c.Name===name);
  if(admin)
  res.json(admin)
  else if(student)
  res.json(student)
  else 
  res.json("No such user")
});

// POST - Create a new user
app.post("/hostel/admins", (req, res) => {
  hostel.Students.push(req.body);
  res.send("Admin added");
});


// PUT - Modify information of a Student
app.put("/hostel/:name", (req, res) => {
  const index = hostel.Students.findIndex(
    (c) => c.Name === req.params.name
  );
  if (index === -1) {
    res.status(404).send("Student not found");
  } else {
    hostel.Students[index] = { ...hostel.Students[index], ...req.body };
    res.send("Student detials updated");
  }
});



// PATCH - Update partial information of a course
app.patch("/hostel/:name", (req, res) => {
  const index = hostel.Students.findIndex(
    (c) => c.Name === req.params.name
  );
  if (index === -1) {
    res.status(404).send("CStudent not found");
  } else {
    const detailToUpdate = hostel.Students[index];
    // Update specific fields if they exist in the request body
    if (req.body.Hostel_Alloted) detailToUpdate.Hostel_Alloted = req.body.Hostel_Alloted;
    if (req.body.Room_No) detailToUpdate.Room_No = req.body.Room_No;

    res.send("Details partially updated");
  }
});


// DELETE - Remove a student by name
app.delete("/hostel/students/:name", (req, res) => {
  const index = hostel.Students.findIndex(
    (c) => c.Name === req.params.name
  );
  if (index === -1) {
    res.status(404).send("Student not found");
  } else {
    hostel.Students.splice(index, 1);
    res.send("Student deleted");
  }
});

