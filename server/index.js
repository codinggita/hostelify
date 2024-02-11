const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const uri = "mongodb://127.0.0.1:27017/hostel1"; 

// Middleware to parse JSON body in requests
app.use(bodyParser.json());
app.use(cors());

const PORT = 5000;

mongoose
  .connect(uri)
  .then(() => console.log("MongoDB connected…"))
  .catch((err) => console.log(err));

const HostelSchema= new mongoose.Schema({
  reg_no: {type: Number, required: true, unique: true},
  name: {type : String, required: true},
  contact: {type: Number, required: true},
  email : String,
  address: {type: String, required:true},
  gender: String,
  father: {type: String, required:true},
  program: {type: String, required:true},
  specialization: {type: String, required:true},
  year: {type: String, required:true},
  semester: {type: Number, required:true},
  cgpa: Number,
  hostel: {type: String},
  room: String
})

const HostelModel = mongoose.model("students", HostelSchema);

//GET request
app.get("/students", async (req,res) =>{
  try{
    const students= await HostelModel.find({});
    res.status(200).json(students);
  } catch(error){
    res.status(500).send(error);
  }
})


app.get("/students/:name", async (req, res) => {
  try {
    const student = await HostelModel.find({ name: req.params.name });
    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }
    res.status(200).json(student);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.get("/students/:hostel", async (req, res) => {
  try {
    const student = await HostelModel.find({ hostel: req.params.hostel });
    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }
    res.status(200).json(student);
  } catch (error) {
    res.status(500).send(error);
  }
});


// POST - Add a new Student
app.post("/students", async (req, res) => {
  try{
    const newStudent= new HostelModel(req.body);
    await newStudent.save();
    res.status(200).send("Added successfully");
  }catch (error) {
    res.status(500).send(error.message);
  }
});


// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});